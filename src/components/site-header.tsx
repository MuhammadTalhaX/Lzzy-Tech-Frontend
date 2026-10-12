"use client";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart-store";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((s) => s.items);
  useEffect(() => setMounted(true), []);
  const count = mounted
    ? items.reduce((sum, item) => sum + item.quantity, 0)
    : 0;
  const links = [
    ["Home", "/"],
    ["Products", "/products"],
    ["Brands", "/brands"],
    ["Deals", "/deals"],
    ["Contact Us", "/contact"],
    ["Terms & Conditions", "/terms"],
  ];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="Lzzy Tech home">
          lzzy<span>.</span>tech
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link
            href="/cart"
            className="cart-link"
            aria-label={`Shopping cart, ${count} items`}
          >
            <ShoppingBag size={20} />
            <span>Cart</span>
            <b>{count}</b>
          </Link>
          <button
            className="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/terms" onClick={() => setOpen(false)}>
            Terms & Conditions
          </Link>
        </nav>
      )}
    </header>
  );
}
