import Link from "next/link";

type Product = {
  id: string | number;
  images: string;
  title: string;
  description: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: any) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mb-3">
      <img src={product.images} alt={product.title} />
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{product.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <p className="text-xl font-bold text-gray-900 mt-4">Price: ${product.price}</p>
      </div>
      <div className="p-4">
        <Link className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" href={`/products/${product.id}`}>View Details</Link>  
      </div>
    </div>
  );
};

export default ProductCard;