"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, Search, ShoppingCart, X, ChevronDown } from "lucide-react";
import { useCart } from "@/store/cart";
export default function Header() {
  const [open, setOpen] = useState(false);
  const count = useCart((s) => s.items.reduce((a, i) => a + i.quantity, 0));
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#070B12]/95">
      <div className="container-x flex h-16 items-center gap-6">
        <Link href="/" className="text-xl font-black tracking-tight">
          Lzzy <span className="text-blue-400">Tech</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <Link href="/shop">Shop</Link>
          <Link href="/category/gaming-keyboards">Categories</Link>
          <Link href="/brand/attack-shark">Brands</Link>
          <Link href="/shop?deal=true">Deals</Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <form action="/search" className="hidden md:block">
            <div className="flex items-center rounded-lg border border-border bg-card px-3">
              <Search size={17} />
              <input
                name="q"
                placeholder="Search peripherals..."
                className="w-48 bg-transparent px-2 py-2 text-sm outline-none"
              />
            </div>
          </form>
          <Link href="/cart" className="relative rounded-lg p-2 hover:bg-card">
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-brand px-1 text-center text-xs">
                {count}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 hover:bg-card md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-surface p-4 md:hidden">
          <div className="container-x grid gap-3 text-slate-200">
            <Link href="/shop" onClick={() => setOpen(false)}>
              Shop
            </Link>
            <Link
              href="/category/gaming-keyboards"
              onClick={() => setOpen(false)}
            >
              Categories
            </Link>
            <Link href="/brand/attack-shark" onClick={() => setOpen(false)}>
              Brands
            </Link>
            <Link href="/shop?deal=true" onClick={() => setOpen(false)}>
              Deals
            </Link>
            <Link href="/search" onClick={() => setOpen(false)}>
              Search
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
