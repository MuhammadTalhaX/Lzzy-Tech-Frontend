export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  image: string;
  images: string[];
  featured?: boolean;
  newest?: number;
  rating?: number;
  availability: "In stock" | "Low stock" | "Out of stock";
  specifications: { label: string; value: string }[];
};
export type CartItem = { productId: string; quantity: number };
