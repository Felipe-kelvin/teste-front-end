import "./Footer.scss";

const footerGroups = [
  {
    title: "Institucional",
    links: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
  },
  {
    title: "Ajuda",
    links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
  },
  {
    title: "Termos",
    links: ["Termos e Condições", "Política de Privacidade", "Troca e Devolução"],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <section className="site-footer__about" aria-label="Sobre a Econverse">
          <a className="site-footer__logo" href="#inicio" aria-label="Econverse, voltar ao início">
            <span className="site-footer__logo-mark">e</span>
            <span>converse</span>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <nav className="site-footer__socials" aria-label="Redes sociais">
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".7" />
              </svg>
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h1.7V1.4A22 22 0 0 0 15.2 1C12.7 1 11 2.5 11 5.3V9H8v4h3v8Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 9v10M5 5v.1M10 19v-6a4 4 0 0 1 8 0v6M10 9v10" />
              </svg>
            </a>
          </nav>
        </section>

        <nav className="site-footer__links" aria-label="Links institucionais">
          {footerGroups.map((group) => (
            <section key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <a href="#inicio" key={link}>{link}</a>
              ))}
            </section>
          ))}
        </nav>
      </div>

      <div className="site-footer__bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </footer>
  );
}
