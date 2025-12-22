

import { Suspense } from "react";
import { getAllProducts } from "@/lib/products";
import ShopClient from "@/components/ShopClient";
import FitmentFilter from "@/components/FitmentFilter";

export default async function ShopPage() {
  const products = getAllProducts();
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Discover Accessories</h1>
      <Suspense fallback={<div className="h-20 bg-gunmetal animate-pulse rounded-xl" />}>
        <div className="mb-16"><FitmentFilter /></div>
        <ShopClient products={products} />
      </Suspense>
    </main>
  );
}
