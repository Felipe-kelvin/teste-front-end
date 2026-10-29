import type { Product } from "../../types/Product";
import "./ProductCard.scss";

interface ProductCardProps {
    product: Product;
    onSelect: (product: Product) => void;
}

export default function ProductCard({
    product,
    onSelect,
}: ProductCardProps) {
    const formattedPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(product.price);
    const formattedPreviousPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(product.price * 1.07);

    return (
        <article className="product-card">
            <button
                className="product-card__image-button"
                type="button"
                onClick={() => onSelect(product)}
                aria-label={`Ver detalhes de ${product.productName}`}
            >
                <img
                    className="product-card__image"
                    src={product.photo}
                    alt={product.productName}
                />
            </button>

            <h3 className="product-card__title">{product.productName}</h3>

            <p className="product-card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <p className="product-card__previous-price">{formattedPreviousPrice}</p>
            <p className="product-card__price">{formattedPrice}</p>

            <p className="product-card__installments">
                ou 2x de{" "}
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(product.price / 2)}{" "}
                sem juros
            </p>
            <p className="product-card__payment">Frete grátis</p>

            <button
                className="product-card__buy"
                type="button"
                onClick={() => onSelect(product)}
            >
                COMPRAR
            </button>
        </article>
    );
}