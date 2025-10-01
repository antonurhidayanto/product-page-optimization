"use client";

import getProducts from "@/app/utils/api";
import { useRouter,useParams } from "next/navigation";
import { use, useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    images: string[];
    title: string;
    description: string;
    stock: number;
}

interface ProductCarouselProps {
    images: string[];
}

const ProductDetailPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await getProducts();
      console.log("fetched products",products)
      const selectedProduct = products.products.find((product: Product) => product.id === Number(id));
      console.log("selected product",selectedProduct);
      setProduct(selectedProduct || null);
      setLoading(false);
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);
  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center text-xl">Product not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <button
                        onClick={() => router.back()}
                        aria-label="Go back"
                        className="mr-2 p-2 rounded hover:bg-gray-100"
                    >
                        {/* Arrow Left SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-700"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
        </button>
        </div>
        <div className="mt-4">
          <ProductCarousel images={product.images} />
        </div>

        <p className="mt-6 text-gray-600">{product.description}</p>
        <div className="flex justify-between mt-6 items-center">
          <p className="text-lg font-semibold text-gray-900">${product.price}</p>
          <p
            className={`text-sm font-medium ${
              product.stock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.stock ? "In stock" : "Out of stock"}
            {product.stock ? ` (${product.stock} available)` : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductCarousel = ({ images }: ProductCarouselProps) => {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div className="flex space-x-4">
          {images.map((image, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 lg:w-1/4">
              <img
                src={image}
                alt={`Product Image ${index + 1}`}
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductDetailPage;