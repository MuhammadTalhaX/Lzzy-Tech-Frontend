import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/products";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Categories",
  description: "Browse computer peripheral categories at Lzzy Tech.",
};
export default function CategoriesPage() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <span className="eyebrow">FIND YOUR FIT</span>
        <h1>Shop by category.</h1>
        <p>Explore the everyday tools that shape your workspace and play.</p>
      </div>
      <div className="category-grid page-bottom-space">
        {categories.map((c) => (
          <Link
            href={`/categories/${c.slug}`}
            className="category-card"
            key={c.slug}
          >
            <Image
              src={c.image}
              alt={c.name}
              fill
              sizes="(max-width: 700px) 45vw, 30vw"
            />
            <div className="category-card-info">
              <div>
                <h3>{c.name}</h3>
                <p>{c.count}</p>
              </div>
              <span className="category-arrow">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
