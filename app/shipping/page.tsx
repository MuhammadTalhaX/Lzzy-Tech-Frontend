export default function Page() {
  return (
    <main className="container-x py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 md:p-12">
        <p className="text-sm uppercase tracking-widest text-blue-400">
          Lzzy Tech
        </p>
        <h1 className="mt-2 text-4xl font-black">Shipping</h1>
        <p className="mt-6 leading-8 text-muted">
          Shipping is calculated separately from the product subtotal. Delivery
          availability and timing depend on destination and courier coverage.
        </p>
      </div>
    </main>
  );
}
