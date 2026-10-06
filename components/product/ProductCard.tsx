"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Star, Check } from "lucide-react";
import { Product } from "@/types";
import { money } from "@/lib/utils";
import { useCart } from "@/store/cart";
import Button from "@/components/ui/button";
export default function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:border-blue-500/50">
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-slate-950">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            {product.discountPercentage && (
              <span className="rounded-full bg-blue-600 px-2 py-1 text-xs font-bold">
                {product.discountPercentage}% OFF
              </span>
            )}
          </div>
        </div>
      </Link>
      <div className="p-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          {product.brand}
        </div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1 min-h-12 font-semibold leading-5 hover:text-blue-400">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex items-center gap-1 text-sm">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span>{product.rating}</span>
          <span className="text-muted">({product.reviewCount})</span>
        </div>
        <div className="mt-3 flex items-end justify-between gap-2">
          <div>
            <div className="price text-lg font-bold">
              {money(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-muted line-through">
                {money(product.originalPrice)}
              </div>
            )}
          </div>
          <Button onClick={() => add(product)} className="px-3 py-2 text-sm">
            <ShoppingCart size={16} />
          </Button>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-muted">
          <Check size={14} className="text-green-400" />
          {product.availability}
        </div>
      </div>
    </article>
  );
}
