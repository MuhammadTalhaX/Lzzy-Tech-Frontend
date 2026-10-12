"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPKR, products } from "@/data/products";
import { useCartStore } from "@/store/cart-store";
import { ProductCard } from "@/components/product-card";
export function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState(0);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const gallery = product.images.length ? product.images : [product.image];
  return (
    <>
      <div className="breadcrumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/products">Products</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>
      <section className="product-detail">
        <div className="detail-gallery">
          <div className="detail-main-image">
            <Image
              src={gallery[active] ?? product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 55vw"
            />
          </div>
          {gallery.length > 1 && (
            <div className="detail-thumbs">
              {gallery.map((img, i) => (
                <button
                  key={img}
                  className={active === i ? "active" : ""}
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image src={img} alt="" fill sizes="90px" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="detail-copy">
          <span className="eyebrow">
            {product.brand} / {product.category}
          </span>
          <h1>{product.name}</h1>
          <div className="detail-price">
            <strong>{formatPKR(product.price)}</strong>
            {product.compareAtPrice && (
              <>
                <del>{formatPKR(product.compareAtPrice)}</del>
                <span>Selected offer</span>
              </>
            )}
          </div>
          <p>{product.description}</p>
          <div className="availability">
            <span
              className={
                product.availability === "Out of stock"
                  ? "status-dot out"
                  : "status-dot"
              }
            />
            {product.availability}
          </div>
          <div className="purchase-row">
            <div className="quantity-control">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(99, quantity + 1))}
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
            <button
              className="button button-dark detail-add"
              disabled={product.availability === "Out of stock"}
              onClick={() => {
                addItem(product.id, quantity);
                setAdded(true);
              }}
            >
              <ShoppingBag size={17} />
              {added ? "Added to cart" : "Add to cart"}
            </button>
          </div>
          {added && (
            <p className="inline-success">
              <Check size={16} /> Added to your local cart.{" "}
              <Link href="/cart">View cart</Link>
            </p>
          )}
          <div className="detail-assurance">
            <div>
              <span>01</span>
              <p>Thoughtfully selected peripherals</p>
            </div>
            <div>
              <span>02</span>
              <p>Clear product information</p>
            </div>
            <div>
              <span>03</span>
              <p>Secure checkout to be connected later</p>
            </div>
          </div>
        </div>
      </section>
      <section className="spec-section">
        <div>
          <span className="eyebrow">THE DETAILS</span>
          <h2>Product information</h2>
          <p>
            Sample catalogue content. Confirm the exact model and specifications
            before publishing.
          </p>
        </div>
        <dl className="spec-list">
          {product.specifications.map((spec) => (
            <div key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">KEEP EXPLORING</span>
            <h2>You may also like</h2>
          </div>
          <Link href="/products" className="underlined-link">
            All products ↗
          </Link>
        </div>
        <div className="product-grid">
          {products
            .filter(
              (p) => p.id !== product.id && p.category === product.category,
            )
            .slice(0, 4)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </section>
    </>
  );
}
