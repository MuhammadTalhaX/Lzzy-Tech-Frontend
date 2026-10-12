import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products, categories, brands } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { HeroShowcase } from "@/components/hero-showcase";

export default function HomePage() {
  return <>
    <HeroShowcase />
    <section className="section-block featured-section" id="featured-products">
      <div className="section-heading"><div><span className="eyebrow">The shortlist</span><h2>Gear worth a closer look.</h2><p>Considered picks for the setup you use every day.</p></div><Link href="/products" className="underlined-link">View all products <span aria-hidden="true">↗</span></Link></div>
      <div className="product-grid">{products.slice(0, 8).map(product => <ProductCard key={product.id} product={product} />)}</div>
    </section>
    <section className="section-block category-section"><div className="category-section-inner"><div className="section-heading"><div><span className="eyebrow">Find your fit</span><h2>Make room for better.</h2><p>Start with the tools you reach for every day.</p></div><Link href="/categories" className="underlined-link">Explore categories <span aria-hidden="true">↗</span></Link></div><div className="category-grid">{categories.map(category => <Link href={`/categories/${category.slug}`} className="category-card" key={category.slug}><Image src={category.image} alt={category.name} fill sizes="(max-width: 700px) 45vw, 30vw"/><div className="category-card-info"><div><h3>{category.name}</h3><p>{category.count}</p></div><span className="category-arrow"><ArrowUpRight size={16}/></span></div></Link>)}</div></div></section>
    <section className="section-block brand-section"><div className="section-heading"><div><span className="eyebrow">Good names. Good gear.</span><h2>Explore the brands.</h2></div><Link href="/brands" className="underlined-link">All brands <span aria-hidden="true">↗</span></Link></div><div className="brand-list">{brands.slice(0, 8).map(brand => <Link href={`/brands/${encodeURIComponent(brand.toLowerCase().replaceAll(" ", "-"))}`} key={brand}>{brand}</Link>)}</div></section>
    <section className="section-block closing-section"><div className="promo-banner"><div><span className="eyebrow">A little something extra</span><h2>Good finds. Considered prices.</h2><p>Explore selected offers across the catalogue. Products, prices and availability are sample data for this storefront preview.</p></div><Link href="/deals" className="button button-light">Explore deals <ArrowUpRight size={16}/></Link></div><div className="editorial-strip"><div><span className="eyebrow">Less noise. More you.</span><h2>Good gear should<br/>feel like your gear.</h2></div><div><p>From the keyboard beneath your hands to the small accessories that keep your desk in order, choose peripherals that fit your rhythm.</p><Link href="/products" className="underlined-link">Find your next favourite <span aria-hidden="true">↗</span></Link></div></div></section>
  </>;
}
