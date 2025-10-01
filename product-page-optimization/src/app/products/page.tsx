import { useEffect, useState } from "react"

const ProductsPage = () => {

    interface Product {
        id: number;
        name: string;
        category: string;
        price: number;
    }

    const [products, setProducts] = useState<Product[]>([])
    
    useEffect(() => {
        const fetchProducts = async () => {
            console.log("Fetching products...");
        }
        fetchProducts();
    }, []);

  return (
    <>
        <h1>Our Products</h1>
        <div>
            <select>
                <option value="">All Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="furniture">Furniture</option>
            </select>
            <select>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
            </select>
        </div>
    </>
  )
}
export default ProductsPage