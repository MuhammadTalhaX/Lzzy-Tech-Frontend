import type { Metadata } from "next";
import { ProductCatalogue } from "@/components/product-catalogue";
export const metadata: Metadata = {
  title: "Deals",
  description: "Explore selected offers in the Lzzy Tech sample catalogue.",
};
export default function DealsPage() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <span className="eyebrow">SELECTED OFFERS</span>
        <h1>Good finds, considered prices.</h1>
        <p>
          Offers shown here are calculated from sample catalogue comparison
          prices. Confirm all prices before launch.
        </p>
      </div>
      <ProductCatalogue onlyDeals />
    </div>
  );
}
