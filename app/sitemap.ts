import type { MetadataRoute } from "next";
import { products, categories, brands } from "@/data/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lzzytech.pk";
  return [
    { url: base },
    { url: base + "/shop" },
    { url: base + "/about" },
    { url: base + "/contact" },
    ...categories.map((c) => ({
      url: `${base}/category/${c.toLowerCase().replaceAll(" ", "-")}`,
    })),
    ...brands.map((b) => ({
      url: `${base}/brand/${b.toLowerCase().replaceAll(" ", "-")}`,
    })),
    ...products.map((p) => ({ url: `${base}/product/${p.slug}` })),
  ];
}
