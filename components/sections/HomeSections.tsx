import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  WalletCards,
  Headphones,
} from "lucide-react";
import ProductGrid from "@/components/product/ProductGrid";
import { products, categories, brands } from "@/data/products";
export default function HomeSections() {
  const featured = products.filter((p) => p.featured);
  return (
    <main>
      <section className="grid-bg relative overflow-hidden border-b border-border">
        <div className="container-x grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300">
              Premium Peripherals · Pakistan
            </div>
            <h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">
              PERFORMANCE <span className="text-blue-400">WITHOUT</span>{" "}
              COMPROMISE.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Premium gaming peripherals and computer accessories built for
              precision, speed and control.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-lg bg-brand px-6 py-3 font-semibold"
              >
                Shop Collection
              </Link>
              <Link
                href="/shop?deal=true"
                className="rounded-lg border border-border bg-card px-6 py-3 font-semibold"
              >
                Explore Deals
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-10 rounded-full bg-blue-600/15 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="relative mt-12 aspect-square overflow-hidden rounded-2xl border border-border bg-card">
                <Image
                  src={products[0].images[0]}
                  alt="Attack Shark K86 mechanical keyboard"
                  fill
                  priority
                  sizes="(max-width: 1024px) 50vw, 280px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 p-3 text-sm font-semibold">
                  K86 Mechanical
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card">
                <Image
                  src={products[1].images[0]}
                  alt="Attack Shark X3 wireless gaming mouse"
                  fill
                  sizes="(max-width: 1024px) 50vw, 280px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 p-3 text-sm font-semibold">
                  X3 Wireless
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-x grid grid-cols-2 gap-3 py-8 md:grid-cols-4">
        {[
          [ShieldCheck, "Authentic Products"],
          [Truck, "Fast Delivery"],
          [WalletCards, "Cash on Delivery"],
          [Headphones, "Customer Support"],
        ].map(([I, t]: any) => (
          <div
            key={t}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
          >
            <I size={20} className="text-blue-400" />
            <span className="text-sm font-medium">{t}</span>
          </div>
        ))}
      </section>
      <section className="container-x py-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Explore
            </p>
            <h2 className="mt-1 text-3xl font-bold">Featured Categories</h2>
          </div>
          <Link href="/shop" className="text-sm text-muted hover:text-white">
            View all <ArrowRight className="inline" size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {categories.slice(0, 6).map((c) => (
            <Link
              key={c}
              href={`/category/${c.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-xl border border-border bg-card p-5 transition hover:border-blue-500/50"
            >
              <div className="text-sm font-semibold">{c}</div>
              <div className="mt-2 text-xs text-muted">Premium gear</div>
            </Link>
          ))}
        </div>
      </section>
      <section className="container-x py-10">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Selected for you
          </p>
          <h2 className="mt-1 text-3xl font-bold">Featured Products</h2>
        </div>
        <ProductGrid products={featured} />
      </section>
      <section className="container-x py-10">
        <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-950/60 to-card p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
            Lzzy Tech Selection
          </p>
          <h2 className="mt-2 text-3xl font-black">UPGRADE YOUR SETUP</h2>
          <p className="mt-3 max-w-xl text-muted">
            Performance-focused gear for your next level.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold"
          >
            Shop Gaming Gear <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="container-x py-10">
        <p className="text-center text-sm uppercase tracking-widest text-muted">
          Trusted brands
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {brands.slice(0, 7).map((b) => (
            <Link
              href={`/brand/${b.toLowerCase().replaceAll(" ", "-")}`}
              key={b}
              className="rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold"
            >
              {b}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
