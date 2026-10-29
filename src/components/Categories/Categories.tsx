import "./Categories.scss";

interface CategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { name: "Tecnologia", icon: "technology" },
  { name: "Supermercado", icon: "market" },
  { name: "Bebidas", icon: "drinks" },
  { name: "Ferramentas", icon: "tools" },
  { name: "Saúde", icon: "health" },
  { name: "Esportes e Fitness", icon: "fitness" },
  { name: "Moda", icon: "fashion" },
];

function CategoryIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {name === "technology" && (
        <>
          <rect x="7" y="8" width="25" height="22" rx="2" />
          <path d="M13 36h13M19.5 30v6M34 16h7v24H23v-5" />
          <path d="M37.5 34h.01" />
        </>
      )}
      {name === "market" && (
        <>
          <path d="M7 20h34l-3-10H10L7 20Z" />
          <path d="M9 20v20h30V20M7 20c0 3 2 5 5 5s5-2 5-5c0 3 2 5 5 5s5-2 5-5c0 3 2 5 5 5s5-2 5-5c0 3 2 5 5 5" />
          <path d="M18 40V29h12v11" />
        </>
      )}
      {name === "drinks" && (
        <>
          <path d="M20 6h8v6l4 4v26H16V16l4-4V6Z" />
          <path d="M20 12h8M16 21h16M21 27h6M21 33h6" />
        </>
      )}
      {name === "tools" && (
        <>
          <path d="m8 37 19-19M10 10l8 8M7 14l7-7 8 8-7 7M27 29l8 8M31 25l10 10-7 7-10-10" />
          <path d="M31 17a8 8 0 0 0 10-10l-5 5-4-4 5-5a8 8 0 0 0-10 10" />
        </>
      )}
      {name === "health" && (
        <>
          <path d="M24 39S7 29 7 18a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 11-17 21-17 21Z" />
          <path d="M12 24h7l3-6 5 12 3-6h6" />
        </>
      )}
      {name === "fitness" && (
        <g strokeWidth="2.2">
          <path d="M14 24h20" />
          <path d="M14 17v14M9 19v10M34 17v14M39 19v10" />
        </g>
      )}
      {name === "fashion" && (
        <>
          <path d="m16 11 8-4 8 4 9 6-5 8-5-3v18H17V22l-5 3-5-8 9-6Z" />
          <path d="M20 10c0 3 2 5 4 5s4-2 4-5" />
        </>
      )}
    </svg>
  );
}

export default function Categories({
  activeCategory,
  onCategoryChange,
}: CategoriesProps) {
  return (
    <nav className="category-list" id="categorias" aria-label="Categorias">
      {categories.map((category) => (
        <button
          type="button"
          className={`category-tile${activeCategory === category.name ? " category-tile--active" : ""}`}
          key={category.name}
          onClick={() => onCategoryChange(category.name)}
          aria-pressed={activeCategory === category.name}
        >
          <span className="category-tile__icon">
            <CategoryIcon name={category.icon} />
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </nav>
  );
}
