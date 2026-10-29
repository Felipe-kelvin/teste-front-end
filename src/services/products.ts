import type { Product } from "../types/Product";

const PRODUCTS_URL =
    "/api/econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

interface ProductsResponse {
    success: boolean;
    products: unknown;
}

function isProduct(value: unknown): value is Product {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const product = value as Record<string, unknown>;

    return (
        typeof product.productName === "string" &&
        typeof product.descriptionShort === "string" &&
        typeof product.photo === "string" &&
        typeof product.price === "number" &&
        Number.isFinite(product.price)
    );
}

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(PRODUCTS_URL);

    if (!response.ok) {
        throw new Error(
            `Não foi possível carregar os produtos. Status: ${response.status}`,
        );
    }

    const data: ProductsResponse = await response.json();

    if (!data.success) {
        throw new Error("A API não conseguiu retornar os produtos.");
    }

    if (!Array.isArray(data.products) || !data.products.every(isProduct)) {
        throw new Error("A API retornou uma lista de produtos inválida.");
    }

    return data.products;
}