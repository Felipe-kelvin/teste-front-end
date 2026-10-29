import "./PartnerBanner.scss";

const banners = [
  { id: "tech", image: "/images/partner-tech.jpg" },
  { id: "collaboration", image: "/images/partner-collaboration.jpg" },
];

export default function PartnerBanner() {
  return (
    <section className="partner-banners" aria-label="Ofertas de parceiros">
      {banners.map((banner) => (
        <article
          className={`partner-banner partner-banner--${banner.id}`}
          key={banner.id}
          style={{ backgroundImage: `url("${banner.image}")` }}
        >
          <div className="partner-banner__content">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#produtos">Confira</a>
          </div>
        </article>
      ))}
    </section>
  );
}
