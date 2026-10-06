import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container-x py-24 text-center">
      <div className="text-7xl font-black text-blue-400">404</div>
      <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-muted">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-brand px-6 py-3 font-semibold"
      >
        Back Home
      </Link>
    </main>
  );
}
