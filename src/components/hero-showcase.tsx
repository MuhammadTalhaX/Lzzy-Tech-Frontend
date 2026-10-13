"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const heroImage = {
  src: "/images/hero/Sumi-E Warrior Bamboo Mechanical Keyboard.png",
  alt: "Sumi-E Warrior Bamboo Mechanical Keyboard",
  brand: "KEYCHRON",
  category: "Keyboards",
  href: "/products",
};

export function HeroShowcase() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (
      !root ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      // Hero content entrance animation
      gsap.from(".hero-reveal", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.08,
      });

      // Single featured product entrance animation
      gsap.from(".showcase-tile", {
        y: 18,
        scale: 0.97,
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
        delay: 0.25,
      });

      // Featured products reveal on scroll
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

  return (
    <section
      className="editorial-hero"
      ref={rootRef}
      aria-labelledby="hero-title"
    >
      <div className="editorial-hero-copy">
        <span className="eyebrow hero-reveal">
          The peripherals collection
        </span>

        <h1 id="hero-title" className="hero-reveal">
          Your Setup.
          <br />
          <span>Your Standard.</span>
        </h1>

        <p className="hero-reveal">
          Designed for better everyday performance.
        </p>
      </div>


      <div className="showcase-window" aria-label="Featured peripheral">
        <Link className="showcase-tile" href={heroImage.href}>
          <div className="showcase-image">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(max-width: 700px) calc(100vw - 36px), 900px"
            />
          </div>

          <div className="showcase-caption">
            <span>{heroImage.brand}</span>
            <strong>{heroImage.category}</strong>
          </div>
        </Link>
      </div>

      <div className="hero-bottomline">
        <span>Thoughtfully selected peripherals</span>

        <span>
          Less noise. Better gear.{" "}
          <span aria-hidden="true">↘</span>
        </span>
      </div>
    </section>
  );
}