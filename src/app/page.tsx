import Image from "next/image";
import { getProducts } from "@/lib/api";
import ProductGrid from "@/components/ProductGrid";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Product Explorer</h1>
      <ProductGrid products={products} />
    </main>
  );
}
