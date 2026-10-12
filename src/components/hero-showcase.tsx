"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/data/products";

const showcaseProducts = [
  products[0],
  products[1],
  products[2],
  products[3],
  products[6],
  products[8],
];

export function HeroShowcase() {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (
      !root ||
      !track ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.08,
      });
      gsap.from(".showcase-tile", {
        y: 18,
        scale: 0.97,
        opacity: 0.75,
        duration: 0.65,
        stagger: 0.07,
        ease: "power2.out",
        delay: 0.25,
      });
      gsap.to(track, {
        xPercent: -50,
        duration: 34,
        ease: "none",
        repeat: -1,
      });
      gsap.from(".featured-section .product-card", {
        y: 18,
        opacity: 0,
        duration: 0.55,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".featured-section",
          start: "top 82%",
          once: true,
        },
      });
    }, root);

    return () => context.revert();
  }, []);

  const tiles = [...showcaseProducts, ...showcaseProducts];

  return (
    <section
      className="editorial-hero"
      ref={rootRef}
      aria-labelledby="hero-title"
    >
      <div className="editorial-hero-copy">
        <span className="eyebrow hero-reveal">The peripherals collection</span>
        <h1 id="hero-title" className="hero-reveal">
          Your Setup.
          <br />
          <span>Your Standard.</span>
        </h1>
        <p className="hero-reveal">Designed for better everyday performance.</p>
        <Link href="/products" className="button button-dark hero-reveal">
          Explore Collection <ArrowUpRight size={17} />
        </Link>
      </div>
      <div
        className="showcase-window"
        aria-label="A moving showcase of keyboards, mice, headsets and accessories"
      >
        <div className="showcase-track" ref={trackRef}>
          {tiles.map((product, index) => (
            <Link
              className="showcase-tile"
              href={`/products/${product.slug}`}
              key={`${product.id}-${index}`}
              tabIndex={index >= showcaseProducts.length ? -1 : undefined}
              aria-hidden={index >= showcaseProducts.length}
            >
              <div className="showcase-image">
                <Image
                  src={product.image}
                  alt={index >= showcaseProducts.length ? "" : product.name}
                  fill
                  sizes="(max-width: 700px) 55vw, 25vw"
                  priority={index < 3}
                />
              </div>
              <div className="showcase-caption">
                <span>{product.brand}</span>
                <strong>{product.category}</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="hero-bottomline">
        <span>Thoughtfully selected peripherals</span>
        <span>
          Less noise. Better gear. <span aria-hidden="true">↘</span>
        </span>
      </div>
    </section>
  );
}
