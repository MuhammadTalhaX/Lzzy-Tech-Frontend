import Link from "next/link";
export default function NotFound() {
  return (
    <div className="not-found">
      <strong>404</strong>
      <h1>This page took a different turn.</h1>
      <p>We couldn’t find what you were looking for.</p>
      <Link href="/products" className="button button-dark">
        Explore products
      </Link>
    </div>
  );
}
