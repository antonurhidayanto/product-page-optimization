"use client";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div className="min-h-screen py-2 px-4 bg-gray-100">
      <main className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Product Page Optimization Challenge
        </h1>
        <p className="text-center text-lg max-w-xl">
          This is a simple Next.js application to demonstrate product page optimization techniques. You can explore the products, filter by category, and sort by price.
        </p>
        <div>
          <ProductsPage />
        </div>
        </main>
    </div>
  );
}
