import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";
export default function Search({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = searchParams.q || "";
  const result = products.filter((x) =>
    `${x.name} ${x.brand} ${x.category}`
      .toLowerCase()
      .includes(q.toLowerCase()),
  );
  return (
    <main className="container-x py-12">
      <p className="text-sm uppercase tracking-widest text-blue-400">Search</p>
      <h1 className="mt-2 text-3xl font-black">Search results for “{q}”</h1>
      <div className="mt-8">
        <ProductGrid products={result} />
      </div>
    </main>
  );
}
