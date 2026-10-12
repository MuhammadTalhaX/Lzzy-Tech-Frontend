import Link from "next/link";
import type { Metadata } from "next";
import { brands, products } from "@/data/products";
export const metadata: Metadata = {
  title: "Brands",
  description: "Browse peripheral brands in the Lzzy Tech sample catalogue.",
};
export default function BrandsPage() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <span className="eyebrow">THE NAMES</span>
        <h1>Explore the brands.</h1>
        <p>
          A sample selection of names across the peripheral space. Catalogue
          inclusion does not imply official partnership.
        </p>
      </div>
      <div className="brand-list page-bottom-space">
        {brands.map((b) => (
          <Link
            href={`/brands/${encodeURIComponent(b.toLowerCase().replaceAll(" ", "-"))}`}
            key={b}
          >
            <span>
              <strong>{b}</strong>
              <br />
              <small>
                {products.filter((p) => p.brand === b).length} sample products
              </small>
            </span>{" "}
            ↗
          </Link>
        ))}
      </div>
    </div>
  );
}
