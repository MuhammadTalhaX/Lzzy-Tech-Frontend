"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { formatPKR } from "@/data/products";
import type { Product } from "@/types/product";
export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-image-wrap">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 25vw"
          className="product-image"
        />
        {product.compareAtPrice && (
          <span className="product-badge">Selected offer</span>
        )}
        <span className="quick-view">
          <ArrowUpRight size={17} />
        </span>
      </Link>
      <div className="product-meta">
        <span>{product.brand}</span>
        <span>{product.availability}</span>
      </div>
      <Link href={`/products/${product.slug}`} className="product-name">
        {product.name}
      </Link>
      <div className="product-price">
        <strong>{formatPKR(product.price)}</strong>
        {product.compareAtPrice && (
          <del>{formatPKR(product.compareAtPrice)}</del>
        )}
      </div>
      <button
        className="add-cart-button"
        onClick={() => addItem(product.id)}
        disabled={product.availability === "Out of stock"}
      >
        <ShoppingBag size={15} /> Add to cart
      </button>
    </article>
  );
}
