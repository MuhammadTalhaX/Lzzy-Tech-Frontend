import type { Metadata } from "next";
import { ProductCatalogue } from "@/components/product-catalogue";
export const metadata: Metadata = {
  title: "All Products",
  description:
    "Explore keyboards, mice, headsets and thoughtful computer accessories.",
};
export default function ProductsPage() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <span className="eyebrow">THE COLLECTION</span>
        <h1>All products.</h1>
        <p>
          Useful tools, thoughtful details, and everyday essentials for your
          setup.
        </p>
      </div>
      <ProductCatalogue />
    </div>
  );
}
