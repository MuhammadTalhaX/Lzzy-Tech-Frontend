import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "p1",
    slug: "keychron-k2-pro",
    name: "K2 Pro Mechanical Keyboard",
    brand: "Keychron",
    category: "Keyboards",
    price: 24900,
    compareAtPrice: 27900,
    description:
      "A compact mechanical keyboard designed for focused work and expressive setups. Sample catalogue listing; verify final specifications before publishing.",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: true,
    newest: 8,
    rating: 4.8,
    availability: "In stock",
    specifications: [
      { label: "Layout", value: "Compact layout — sample data" },
      { label: "Connectivity", value: "Wired / wireless — verify SKU" },
      { label: "Use", value: "Work and gaming" },
    ],
  },
  {
    id: "p2",
    slug: "logitech-mx-master-3s",
    name: "MX Master 3S Wireless Mouse",
    brand: "Logitech",
    category: "Mice",
    price: 27900,
    description:
      "A refined productivity mouse concept with an ergonomic silhouette. Sample listing; confirm exact variant and specifications.",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: true,
    newest: 7,
    rating: 4.7,
    availability: "In stock",
    specifications: [
      { label: "Category", value: "Wireless mouse" },
      { label: "Use", value: "Productivity" },
      { label: "Compatibility", value: "Confirm supported devices" },
    ],
  },
  {
    id: "p3",
    slug: "steelseries-arctis-nova",
    name: "Arctis Nova Wireless Headset",
    brand: "SteelSeries",
    category: "Headsets",
    price: 38900,
    compareAtPrice: 42900,
    description:
      "Immersive audio for long sessions, with a considered and understated design. Sample catalogue content.",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: true,
    newest: 6,
    rating: 4.6,
    availability: "Low stock",
    specifications: [
      { label: "Category", value: "Over-ear headset" },
      { label: "Connectivity", value: "Verify product variant" },
      { label: "Use", value: "Gaming and everyday audio" },
    ],
  },
  {
    id: "p4",
    slug: "attack-shark-k86",
    name: "K86 Mechanical Keyboard",
    brand: "Attack Shark",
    category: "Keyboards",
    price: 15900,
    compareAtPrice: 17900,
    description:
      "A compact mechanical keyboard option for a clean desk setup. Sample catalogue listing; confirm variant details.",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: true,
    newest: 9,
    rating: 4.5,
    availability: "In stock",
    specifications: [
      { label: "Category", value: "Mechanical keyboard" },
      { label: "Layout", value: "Verify variant" },
      { label: "Use", value: "Gaming and productivity" },
    ],
  },
  {
    id: "p5",
    slug: "logitech-g305",
    name: "G305 LIGHTSPEED Mouse",
    brand: "Logitech",
    category: "Mice",
    price: 11900,
    description:
      "A compact wireless mouse for everyday play and work. Sample catalogue listing.",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=85",
    ],
    newest: 5,
    rating: 4.5,
    availability: "In stock",
    specifications: [
      { label: "Category", value: "Wireless mouse" },
      { label: "Connectivity", value: "Verify SKU" },
      { label: "Use", value: "Gaming" },
    ],
  },
  {
    id: "p6",
    slug: "desk-mat-studio",
    name: "Studio Desk Mat",
    brand: "Lzzy Select",
    category: "Mousepads",
    price: 4900,
    description:
      "A minimal desk mat to bring a calmer, more considered feel to your workspace. Illustrative sample product.",
    image:
      "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?auto=format&fit=crop&w=1200&q=85",
    ],
    newest: 4,
    rating: 4.4,
    availability: "In stock",
    specifications: [
      { label: "Category", value: "Desk mat" },
      { label: "Finish", value: "Verify final material" },
      { label: "Care", value: "Follow supplied product guidance" },
    ],
  },
  {
    id: "p7",
    slug: "hyperx-solocast",
    name: "SoloCast USB Microphone",
    brand: "HyperX",
    category: "Microphones",
    price: 16900,
    description:
      "A compact USB microphone for calls, streaming, and everyday recording. Sample catalogue content.",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85",
    ],
    newest: 3,
    rating: 4.5,
    availability: "In stock",
    specifications: [
      { label: "Category", value: "USB microphone" },
      { label: "Connection", value: "Verify product variant" },
      { label: "Use", value: "Calls and recording" },
    ],
  },
  {
    id: "p8",
    slug: "logitech-brio-webcam",
    name: "Brio USB Webcam",
    brand: "Logitech",
    category: "Webcams",
    price: 32900,
    description:
      "A clean camera option for meetings and creator setups. Sample listing; verify exact model.",
    image:
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=1200&q=85",
    ],
    newest: 2,
    rating: 4.6,
    availability: "In stock",
    specifications: [
      { label: "Category", value: "Webcam" },
      { label: "Resolution", value: "Confirm exact SKU" },
      { label: "Use", value: "Video calls and streaming" },
    ],
  },
  {
    id: "p9",
    slug: "wireless-controller",
    name: "Wireless Controller",
    brand: "8BitDo",
    category: "Controllers",
    price: 8900,
    description:
      "A versatile controller concept for compatible gaming devices. Sample listing; check compatibility before purchase.",
    image:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=1200&q=85",
    ],
    newest: 1,
    rating: 4.3,
    availability: "In stock",
    specifications: [
      { label: "Category", value: "Game controller" },
      { label: "Compatibility", value: "Verify supported platforms" },
      { label: "Connectivity", value: "Verify variant" },
    ],
  },
  {
    id: "p10",
    slug: "usb-c-hub",
    name: "USB-C Multiport Hub",
    brand: "Anker",
    category: "Accessories",
    price: 7200,
    description:
      "A practical connectivity accessory for a tidy workstation. Sample catalogue listing.",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=85",
    ],
    newest: 0,
    rating: 4.2,
    availability: "In stock",
    specifications: [
      { label: "Category", value: "USB-C hub" },
      { label: "Ports", value: "Confirm exact variant" },
      { label: "Compatibility", value: "Check host device" },
    ],
  },
];
export const formatPKR = (amount: number) =>
  new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(amount);
export const categories = [
  {
    name: "Keyboards",
    slug: "keyboards",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=900&q=85",
    count: "Mechanical & wireless",
  },
  {
    name: "Mice",
    slug: "mice",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
    count: "Precision in hand",
  },
  {
    name: "Headsets",
    slug: "headsets",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=85",
    count: "Audio that fits",
  },
  {
    name: "Mousepads",
    slug: "mousepads",
    image:
      "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?auto=format&fit=crop&w=900&q=85",
    count: "The finishing touch",
  },
  {
    name: "Controllers",
    slug: "controllers",
    image:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=900&q=85",
    count: "Play your way",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85",
    count: "Small things, sorted",
  },
];
export const brands = [
  "Logitech",
  "Keychron",
  "Attack Shark",
  "SteelSeries",
  "HyperX",
  "8BitDo",
  "Anker",
  "Lzzy Select",
];
