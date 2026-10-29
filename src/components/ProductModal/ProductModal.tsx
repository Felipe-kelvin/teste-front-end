import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import "./ProductModal.scss";

interface ProductModalProps {
    product: Product;
    onClose: () => void;
    onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductModal({
    product,
    onClose,
    onAddToCart,
}: ProductModalProps) {
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const formattedPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(product.price);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    function handleAddToCart() {
        onAddToCart(product, quantity);
        setAddedToCart(true);
    }

    function handleQuantityChange(value: number) {
        setQuantity((currentQuantity) =>
            Math.max(1, currentQuantity + value),
        );
        setAddedToCart(false);
    }

    return (
        <div
            className="product-modal-overlay"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <section
                className="product-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="product-modal-title"
            >
                <button
                    className="product-modal__close"
                    type="button"
                    onClick={onClose}
                    aria-label="Fechar detalhes do produto"
                >
                    &times;
                </button>

                <div className="product-modal__content">
                    <div className="product-modal__image-container">
                        <img
                            className="product-modal__image"
                            src={product.photo}
                            alt={product.productName}
                        />
                    </div>

                    <div className="product-modal__details">
                        <h2
                            className="product-modal__title"
                            id="product-modal-title"
                        >
                            {product.productName}
                        </h2>

                        <p className="product-modal__price">{formattedPrice}</p>

                        <p className="product-modal__description">
                            {product.descriptionShort}
                        </p>

                        <button
                            className="product-modal__more-details"
                            type="button"
                            aria-expanded={showDescription}
                            aria-controls="product-modal-description"
                            onClick={() => setShowDescription((visible) => !visible)}
                        >
                            {showDescription
                                ? "Ocultar detalhes"
                                : "Veja mais detalhes do produto >"}
                        </button>

                        <div className="product-modal__actions">
                            <div
                                className="product-modal__quantity-control"
                                aria-label="Selecionar quantidade"
                            >
                                <button
                                    type="button"
                                    onClick={() => handleQuantityChange(-1)}
                                    disabled={quantity === 1}
                                    aria-label="Diminuir quantidade"
                                >
                                    −
                                </button>

                                <span aria-live="polite">
                                    {String(quantity).padStart(2, "0")}
                                </span>

                                <button
                                    type="button"
                                    onClick={() => handleQuantityChange(1)}
                                    aria-label="Aumentar quantidade"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                className="product-modal__add-button"
                                type="button"
                                onClick={handleAddToCart}
                            >
                                Comprar
                            </button>
                        </div>

                        {addedToCart && (
                            <p className="product-modal__success" role="status">
                                Produto adicionado ao carrinho!
                            </p>
                        )}
                    </div>
                </div>

                <div
                    className={`product-modal__extra-description${showDescription ? " product-modal__extra-description--visible" : ""}`}
                    id="product-modal-description"
                >
                    <h3>Descrição do produto</h3>
                    <p>{product.descriptionShort}</p>
                </div>
            </section>
        </div>
    );
}