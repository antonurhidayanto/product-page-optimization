export default async function getProducts() {
    const response = await fetch("/api/products");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
}