"use client";
import { useEffect } from "react";
import { useCartStore } from "@/store/cart-store";
export function CartProvider({ children }: { children: React.ReactNode }) {
  const rehydrate = useCartStore.persist.rehydrate;
  useEffect(() => {
    void rehydrate();
  }, [rehydrate]);
  return children;
}
