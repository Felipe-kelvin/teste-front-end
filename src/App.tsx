import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Categories from "./components/Categories/Categories";
import ProductSection from "./components/ProductSection/ProductSection";
import ProductModal from "./components/ProductModal/ProductModal";
import PartnerBanner from "./components/PartnerBanner/PartnerBanner";
import BrandSection from "./components/BrandSection/BrandSection";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import { getProducts } from "./services/products";
import type { Product } from "./types/Product";
import "./styles/global.scss";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tecnologia");
  const [activeTab, setActiveTab] = useState("VER TODOS");
  const [cartQuantity, setCartQuantity] = useState(0);

  async function loadProducts() {
    setLoading(true);
    setError("");

    try {
      setProducts(await getProducts());
    } catch (loadError) {
      console.error("Erro ao carregar produtos:", loadError);
      setError("Não foi possível carregar os produtos. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let active = true;

    getProducts()
      .then((data) => {
        if (active) {
          setProducts(data);
        }
      })
      .catch((loadError: unknown) => {
        if (active) {
          console.error("Erro ao carregar produtos:", loadError);
          setError("Não foi possível carregar os produtos. Tente novamente.");
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const visibleProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase("pt-BR");
    const categoryMatches = activeCategory === "Tecnologia";
    const tabMatches = activeTab === "VER TODOS" || activeTab === "CELULAR";

    if (!categoryMatches || !tabMatches) {
      return [];
    }

    if (!normalizedSearch) {
      return products;
    }

    return products.filter((product) =>
      `${product.productName} ${product.descriptionShort}`
        .toLocaleLowerCase("pt-BR")
        .includes(normalizedSearch),
    );
  }, [activeCategory, activeTab, products, search]);

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    setActiveTab("VER TODOS");
  }

  function handleTabChange(tab: string) {
    setActiveCategory("Tecnologia");
    setActiveTab(tab);
  }

  function handleAddToCart(_product: Product, quantity: number) {
    setCartQuantity((currentQuantity) => currentQuantity + quantity);
  }

  return (
    <>
      <Header
        cartQuantity={cartQuantity}
        onSearch={setSearch}
      />
      <main>
        <HeroBanner />
        <Categories
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <ProductSection
          key={`${activeCategory}-${activeTab}-${search}`}
          sectionId="produtos"
          products={visibleProducts}
          loading={loading}
          error={error}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onRetry={() => void loadProducts()}
          onSelectProduct={setSelectedProduct}
        />
        <PartnerBanner />
        <ProductSection
          key={`second-${activeCategory}-${activeTab}-${search}`}
          sectionId="produtos-relacionados-2"
          compact
          products={visibleProducts}
          loading={loading}
          error={error}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onRetry={() => void loadProducts()}
          onSelectProduct={setSelectedProduct}
        />
        <PartnerBanner />
        <BrandSection />
        <ProductSection
          key={`third-${activeCategory}-${activeTab}-${search}`}
          sectionId="produtos-relacionados-3"
          compact
          products={visibleProducts}
          loading={loading}
          error={error}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onRetry={() => void loadProducts()}
          onSelectProduct={setSelectedProduct}
        />
        <Newsletter />
      </main>
      <Footer />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}

export default App;
