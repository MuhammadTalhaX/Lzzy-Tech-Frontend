"use client";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart-store";
import { products, formatPKR } from "@/data/products";
export function CartView() {
  const [ready, setReady] = useState(false);
  const items = useCartStore((s) => s.items);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  useEffect(() => setReady(true), []);
  const lines = ready
    ? items
        .map((i) => ({
          ...i,
          product: products.find((p) => p.id === i.productId),
        }))
        .filter((i) => i.product)
    : [];
  const subtotal = lines.reduce(
    (sum, i) => sum + (i.product?.price ?? 0) * i.quantity,
    0,
  );
  if (!ready)
    return (
      <div className="empty-state">
        <p>Loading your bag…</p>
      </div>
    );
  if (!lines.length)
    return (
      <div className="empty-state cart-empty">
        <span className="eyebrow">YOUR BAG</span>
        <h2>A little room for something good.</h2>
        <p>
          Your cart is empty for now. Find the pieces that feel right for your
          setup.
        </p>
        <Link className="button button-dark" href="/products">
          Explore products
        </Link>
      </div>
    );
  return (
    <div className="cart-layout">
      <div className="cart-lines">
        {lines.map(
          ({ product, quantity }) =>
            product && (
              <article className="cart-line" key={product.id}>
                <Link
                  href={`/products/${product.slug}`}
                  className="cart-line-image"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="120px"
                  />
                </Link>
                <div className="cart-line-info">
                  <span className="eyebrow">{product.brand}</span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="cart-line-name"
                  >
                    {product.name}
                  </Link>
                  <strong>{formatPKR(product.price)}</strong>
                  <div className="quantity-control">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() => setQuantity(product.id, quantity - 1)}
                    >
                      <Minus size={13} />
                    </button>
                    <span>{quantity}</span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() => setQuantity(product.id, quantity + 1)}
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                </div>
                <div className="cart-line-end">
                  <strong>{formatPKR(product.price * quantity)}</strong>
                  <button
                    className="remove-button"
                    onClick={() => removeItem(product.id)}
                    aria-label={`Remove ${product.name}`}
                  >
                    <Trash2 size={16} /> Remove
                  </button>
                </div>
              </article>
            ),
        )}
      </div>
      <aside className="order-summary">
        <span className="eyebrow">SUMMARY</span>
        <h2>Your order</h2>
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>{formatPKR(subtotal)}</strong>
        </div>
        <div className="summary-row">
          <span>Delivery</span>
          <span>Calculated later</span>
        </div>
        <div className="summary-total">
          <span>Estimated subtotal</span>
          <strong>{formatPKR(subtotal)}</strong>
        </div>
        <p className="summary-note">
          This is a frontend preview. Delivery and final order processing are
          not connected.
        </p>
        <Link href="/checkout" className="button button-dark button-full">
          Continue to checkout
        </Link>
        <Link href="/products" className="continue-link">
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}
