"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const heroImages = [
  {
    src: "/images/hero/Sumi-E Warrior Bamboo Mechanical Keyboard.png",
    alt: "Sumi-E Warrior Bamboo Mechanical Keyboard",
    brand: "KEYCHRON",
    category: "Keyboards",
    href: "/products",
  },
  // {
  //   src: "/images/hero/Ivory 75% Mechanical Keyboard Cutout.png",
  //   alt: "Ivory 75% Mechanical Keyboard",
  //   brand: "MECHANICAL KEYBOARDS",
  //   category: "Ivory 75%",
  //   href: "/products",
  // },
  {
    src: "/images/hero/RGB Mechanical Keyboard Product Cutout.png",
    alt: "RGB Mechanical Keyboard",
    brand: "MECHANICAL KEYBOARDS",
    category: "RGB Series",
    href: "/products",
  },
  {
    src: "/images/hero/RGB Mechanical Keyboard Product Render.png",
    alt: "RGB Mechanical Keyboard Product Render",
    brand: "MECHANICAL KEYBOARDS",
    category: "RGB Collection",
    href: "/products",
  },
  {
    src: "/images/hero/RGB-Backlit Mechanical Keyboard with Rotary Dial.png",
    alt: "RGB Mechanical Keyboard with Rotary Dial",
    brand: "MECHANICAL KEYBOARDS",
    category: "Rotary Dial",
    href: "/products",
  },
  {
    src: "/images/hero/Topographic Contour Mechanical Keyboard.png",
    alt: "Topographic Contour Mechanical Keyboard",
    brand: "MECHANICAL KEYBOARDS",
    category: "Topographic Series",
    href: "/products",
  },
];

export function HeroShowcase() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      if (
        !window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches
      ) {
        // Hero content entrance
        gsap.from(".hero-reveal", {
          y: 22,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          delay: 0.08,
        });
      }

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

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches
    ) {
      return () => context.revert();
    }

    // Change image every 3 seconds
    const intervalId = window.setInterval(() => {
      setActiveImage((current) => {
        return (current + 1) % heroImages.length;
      });
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
      context.revert();
    };
  }, []);

  const currentImage = heroImages[activeImage];

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

      <div
        className="showcase-window"
        aria-label="Featured keyboards"
      >
        <Link
          className="showcase-tile"
          href={currentImage.href}
          aria-label={`Explore ${currentImage.alt}`}
        >
          <div className="showcase-image">
            {heroImages.map((image, index) => (
              <div
                key={image.src}
                className={`showcase-slide ${
                  index === activeImage ? "is-active" : ""
                }`}
                aria-hidden={index !== activeImage}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 700px) calc(100vw - 36px), 900px"
                />
              </div>
            ))}
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
