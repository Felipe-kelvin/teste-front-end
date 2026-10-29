import { useState } from "react";
import type { Product } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductSection.scss";

interface ProductSectionProps {
  sectionId?: string;
  compact?: boolean;
  products: Product[];
  loading: boolean;
  error: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onRetry: () => void;
  onSelectProduct: (product: Product) => void;
}

const tabs = ["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS", "VER TODOS"];
const pageSize = 4;

export default function ProductSection({
  sectionId = "produtos",
  compact = false,
  products,
  loading,
  error,
  activeTab,
  onTabChange,
  onRetry,
  onSelectProduct,
}: ProductSectionProps) {
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(products.length / pageSize));
  const visibleProducts = products.slice(page * pageSize, (page + 1) * pageSize);

  function changeTab(tab: string) {
    setPage(0);
    onTabChange(tab);
  }

  function changePage(direction: number) {
    setPage((currentPage) => (currentPage + direction + pageCount) % pageCount);
  }

  return (
    <section
      className={`product-section${compact ? " product-section--compact" : ""}`}
      id={sectionId}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="product-section__heading">
        <span />
        <h2 id={`${sectionId}-title`}>Produtos relacionados</h2>
        <span />
      </div>

      {compact ? (
        <a className="product-section__all-link" href="#produtos">
          Ver todos
        </a>
      ) : (
        <div className="product-tabs" role="tablist" aria-label="Filtrar produtos">
          {tabs.map((tab) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={activeTab === tab ? "product-tabs__tab product-tabs__tab--active" : "product-tabs__tab"}
              key={tab}
              onClick={() => changeTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {loading && <p className="product-section__message" role="status">Carregando produtos...</p>}
      {error && (
        <div className="product-section__message" role="alert">
          <p>{error}</p>
          <button type="button" onClick={onRetry}>Tentar novamente</button>
        </div>
      )}
      {!loading && !error && products.length === 0 && (
        <p className="product-section__message">Nenhum produto encontrado nesta seleção.</p>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="product-carousel">
          {products.length > pageSize && (
            <button
              type="button"
              className="product-carousel__arrow product-carousel__arrow--previous"
              onClick={() => changePage(-1)}
              aria-label="Produtos anteriores"
            >
              ‹
            </button>
          )}
          <div className="product-carousel__grid">
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={`${product.productName}-${page * pageSize + index}`}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
          {products.length > pageSize && (
            <button
              type="button"
              className="product-carousel__arrow product-carousel__arrow--next"
              onClick={() => changePage(1)}
              aria-label="Próximos produtos"
            >
              ›
            </button>
          )}
        </div>
      )}
    </section>
  );
}
