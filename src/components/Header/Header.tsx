import { useState } from "react";
import "./Header.scss";

interface HeaderProps {
  cartQuantity: number;
  onSearch: (value: string) => void;
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="m15.5 15.5 4 4" />
    </svg>
  );
}

export default function Header({ cartQuantity, onSearch }: HeaderProps) {
  const [query, setQuery] = useState("");

  const navigation = [
    "TODAS CATEGORIAS",
    "SUPERMERCADO",
    "LIVROS",
    "MODA",
    "LANÇAMENTOS",
    "OFERTAS DO DIA",
    "ASSINATURA",
  ];

  function updateSearch(value: string) {
    setQuery(value);
    onSearch(value);
  }

  return (
    <header className="site-header">
      <div className="service-strip" aria-label="Benefícios da loja">
        <span>Compra <strong>100% segura</strong></span>
        <span><strong>Frete grátis</strong> acima de R$ 200</span>
        <span>Parcele suas compras</span>
      </div>

      <div className="header-main">
        <a className="brand-logo" href="#inicio" aria-label="Econverse, início">
          <span className="brand-logo__mark">e</span>
          <span>econverse</span>
        </a>

        <label className="search-box">
          <span className="sr-only">Buscar produtos</span>
          <input
            type="search"
            value={query}
            onChange={(event) => updateSearch(event.target.value)}
            placeholder="O que você está buscando?"
          />
          <SearchIcon />
        </label>

        <div className="header-actions">
          <button type="button" aria-label="Favoritos">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 8.7c0 4.1-8.8 10-8.8 10s-8.8-5.9-8.8-10a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z" />
            </svg>
          </button>
          <button type="button" aria-label="Minha conta">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 20a7 7 0 0 1 14 0" />
            </svg>
          </button>
          <a className="cart-action" href="#produtos" aria-label={`Carrinho, ${cartQuantity} itens`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h2l2.2 11.2h11.3L21 8H6" />
              <circle cx="9" cy="19" r="1" />
              <circle cx="18" cy="19" r="1" />
            </svg>
            {cartQuantity > 0 && <span>{cartQuantity}</span>}
          </a>
        </div>
      </div>

      <nav className="primary-nav" aria-label="Navegação principal">
        {navigation.map((item, index) => (
          <a
            className={index === 5 ? "primary-nav__highlight" : ""}
            href={index === 0 ? "#categorias" : "#produtos"}
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
