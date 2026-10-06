import { Product } from "@/types";
import ProductCard from "./ProductCard";
export default function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length)
    return (
      <div className="rounded-xl border border-border bg-card p-16 text-center text-muted">
        No products found. Try changing your filters or search.
      </div>
    );
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
