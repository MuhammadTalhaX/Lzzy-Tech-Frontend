import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-[#080D16]">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-xl font-black">
            Lzzy <span className="text-blue-400">Tech</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Premium computer peripherals and accessories for gaming, work and
            everyday performance.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Shop</h3>
          <div className="mt-4 grid gap-2 text-sm text-muted">
            <Link href="/shop">All Products</Link>
            <Link href="/category/gaming-keyboards">Keyboards</Link>
            <Link href="/category/gaming-mice">Mice</Link>
            <Link href="/category/gaming-headsets">Headsets</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Support</h3>
          <div className="mt-4 grid gap-2 text-sm text-muted">
            <Link href="/shipping">Shipping</Link>
            <Link href="/returns">Returns</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Company</h3>
          <div className="mt-4 grid gap-2 text-sm text-muted">
            <Link href="/about">About Lzzy Tech</Link>
            <Link href="/terms">Terms</Link>
            <span>Cash on Delivery</span>
            <span>Pakistan-wide delivery</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted">
        © 2026 Lzzy Tech. Premium Peripherals & Accessories.
      </div>
    </footer>
  );
}
