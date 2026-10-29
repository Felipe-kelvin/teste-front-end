import "./BrandSection.scss";

const brands = ["Econverse", "Econverse", "Econverse", "Econverse", "Econverse"];

export default function BrandSection() {
  return (
    <section className="brand-section" aria-labelledby="brands-title">
      <h2 id="brands-title">Navegue por marcas</h2>
      <div className="brand-section__list">
        {brands.map((brand, index) => (
          <a
            className="brand-section__brand"
            href="#produtos-relacionados-3"
            aria-label={`Ver produtos da marca ${brand}`}
            key={`${brand}-${index}`}
          >
            <span className="brand-section__logo-mark">e</span>
            <span className="brand-section__logo-name">converse</span>
          </a>
        ))}
      </div>
    </section>
  );
}
