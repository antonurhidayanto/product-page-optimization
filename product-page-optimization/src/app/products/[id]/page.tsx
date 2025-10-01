"useClient";

import getProducts from "@/app/utils/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    images: string[];
    title: string;
    description: string;
    inStock: boolean;
}

interface ProductCarouselProps {
    images: string[];
}

const ProductDetailPage = () => {


    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await getProducts();
      const selectedProduct = products.find((product: Product) => product.id === Number(id));
      setProduct(selectedProduct);
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
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <div className="mt-4">
          <ProductCarousel images={product.images} />
        </div>

        <p className="mt-6 text-gray-600">{product.description}</p>
        <div className="flex justify-between mt-6 items-center">
          <p className="text-lg font-semibold text-gray-900">${product.price}</p>
          <p
            className={`text-sm font-medium ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "In stock" : "Out of stock"}
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