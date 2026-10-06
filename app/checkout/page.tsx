"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/store/cart";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { money } from "@/lib/utils";
import Link from "next/link";
const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  address: z.string().min(8, "Enter your complete address"),
  city: z.string().min(2, "Enter city"),
  area: z.string().min(2, "Enter area"),
});
type Form = z.infer<typeof schema>;
export default function Checkout() {
  const router = useRouter();
  const { items, subtotal, clear } = useCart();
  const sub = subtotal();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Form>({ resolver: zodResolver(schema) });
  if (!items.length)
    return (
      <main className="container-x py-24 text-center">
        <h1 className="text-3xl font-black">Your cart is empty</h1>
        <Link href="/shop" className="mt-5 inline-block text-blue-400">
          Continue shopping
        </Link>
      </main>
    );
  const submit = (data: Form) => {
    const order = {
      orderId: `LZ-${Date.now().toString().slice(-7)}`,
      customer: data,
      items,
      subtotal: sub,
      shipping: 250,
      total: sub + 250,
      payment: "Cash on Delivery",
    };
    sessionStorage.setItem("lzzy-last-order", JSON.stringify(order));
    clear();
    router.push("/order-confirmation");
  };
  return (
    <main className="container-x py-12">
      <h1 className="text-4xl font-black">Checkout</h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]"
      >
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold">Customer Information</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {(
              [
                ["name", "Full Name"],
                ["phone", "Phone Number"],
                ["email", "Email"],
              ] as const
            ).map(([n, l]) => (
              <label key={n} className="grid gap-2 text-sm sm:last:col-span-2">
                {l}
                <input
                  {...register(n)}
                  className="rounded-lg border border-border bg-surface px-4 py-3 outline-none focus:border-brand"
                />
                {errors[n] && (
                  <span className="text-xs text-red-400">
                    {errors[n]?.message}
                  </span>
                )}
              </label>
            ))}
          </div>
          <h2 className="mt-8 text-xl font-bold">Delivery Information</h2>
          <div className="mt-5 grid gap-4">
            {(
              [
                ["address", "Complete Address"],
                ["city", "City"],
                ["area", "Area"],
              ] as const
            ).map(([n, l]) => (
              <label key={n} className="grid gap-2 text-sm">
                {l}
                <input
                  {...register(n)}
                  className="rounded-lg border border-border bg-surface px-4 py-3 outline-none focus:border-brand"
                />
                {errors[n] && (
                  <span className="text-xs text-red-400">
                    {errors[n]?.message}
                  </span>
                )}
              </label>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-blue-500/30 bg-blue-500/5 p-4">
            <div className="font-semibold">Cash on Delivery</div>
            <div className="mt-1 text-sm text-muted">
              Pay when your order arrives.
            </div>
          </div>
        </section>
        <aside className="h-fit rounded-xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold">Order Summary</h2>
          <div className="mt-5 flex justify-between text-muted">
            <span>Subtotal</span>
            <span>{money(sub)}</span>
          </div>
          <div className="mt-3 flex justify-between text-muted">
            <span>Shipping</span>
            <span>Rs. 250</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-border pt-4 text-lg font-bold">
            <span>Grand Total</span>
            <span>{money(sub + 250)}</span>
          </div>
          <button
            disabled={isSubmitting}
            className="mt-6 w-full rounded-lg bg-brand px-5 py-3 font-semibold disabled:opacity-50"
          >
            {isSubmitting ? "Placing Order..." : "Place Order"}
          </button>
        </aside>
      </form>
    </main>
  );
}
