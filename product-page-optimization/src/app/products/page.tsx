import { useEffect, useState } from "react"
import getProducts  from "../utils/api";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {


    const [products, setProducts] = useState<any[]>([])
    const [loading, setLoading] = useState(true);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    
    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            console.log(productsData)
            setProducts(productsData.products);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    const filteredProducts = Array.isArray(products)
    ? products.filter((product) =>
        categoryFilter ? product.category === categoryFilter : true
      )
    : [];

  const sortedProducts = filteredProducts.sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  return (
    <>
        <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
        <div className="flex justify-between items-center mb-6">
            <select onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="">All Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="furniture">Furniture</option>
            </select>
            <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  )
}
export default ProductsPage