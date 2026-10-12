import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { CartItem } from "@/types/product";
type CartState = { items: CartItem[]; addItem: (productId: string, quantity?: number) => void; setQuantity: (productId: string, quantity: number) => void; removeItem: (productId: string) => void; clearCart: () => void };
export const useCartStore = create<CartState>()(persist((set) => ({
 items: [],
 addItem: (productId, quantity = 1) => set((state) => { const existing = state.items.find((item) => item.productId === productId); return { items: existing ? state.items.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item) : [...state.items, { productId, quantity }] }; }),
 setQuantity: (productId, quantity) => set((state) => ({ items: quantity <= 0 ? state.items.filter((item) => item.productId !== productId) : state.items.map((item) => item.productId === productId ? { ...item, quantity: Math.min(99, Math.max(1, quantity)) } : item) })),
 removeItem: (productId) => set((state) => ({ items: state.items.filter((item) => item.productId !== productId) })),
 clearCart: () => set({ items: [] })
}), { name: "lzzy-tech-cart", storage: createJSONStorage(() => localStorage), skipHydration: true }));
