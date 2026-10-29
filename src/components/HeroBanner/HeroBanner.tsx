import "./HeroBanner.scss";

export default function HeroBanner() {
  return (
    <section className="hero-banner" id="inicio" aria-label="Promoção Black Friday">
      <div className="hero-banner__shade" />
      <div className="hero-banner__copy">
        <p className="hero-banner__eyebrow">É hora de aproveitar</p>
        <h1>
          Venha conhecer nossas
          <br />
          promoções
        </h1>
        <p className="hero-banner__offer">
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#produtos" className="hero-banner__button">
          Ver produto
        </a>
      </div>
      <div className="hero-banner__art" aria-hidden="true">
        <span>BLACK</span>
        <span>FRIDAY</span>
      </div>
    </section>
  );
}
