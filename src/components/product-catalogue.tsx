"use client";
import { useMemo, useState } from "react";
import { SlidersHorizontal, Search, X } from "lucide-react";
import { products, formatPKR } from "@/data/products";
import { ProductCard } from "@/components/product-card";
const ranges = [
  { label: "Under PKR 5,000", min: 0, max: 4999 },
  { label: "PKR 5,000–10,000", min: 5000, max: 9999 },
  { label: "PKR 10,000–20,000", min: 10000, max: 19999 },
  { label: "PKR 20,000–40,000", min: 20000, max: 40000 },
  { label: "Above PKR 40,000", min: 40001, max: Infinity },
];
export function ProductCatalogue({
  initialCategory,
  initialBrand,
  onlyDeals = false,
}: {
  initialCategory?: string;
  initialBrand?: string;
  onlyDeals?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [cats, setCats] = useState<string[]>(
    initialCategory ? [initialCategory] : [],
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    initialBrand ? [initialBrand] : [],
  );
  const [prices, setPrices] = useState<string[]>([]);
  const [sort, setSort] = useState("featured");
  const [mobileFilters, setMobileFilters] = useState(false);
  const categoryList = Array.from(new Set(products.map((p) => p.category)));
  const brandList = Array.from(new Set(products.map((p) => p.brand)));
  const filtered = useMemo(() => {
    let result = products.filter(
      (p) =>
        (!onlyDeals || !!p.compareAtPrice) &&
        (!query ||
          `${p.name} ${p.brand} ${p.category} ${p.description}`
            .toLowerCase()
            .includes(query.toLowerCase())) &&
        (!cats.length || cats.includes(p.category)) &&
        (!selectedBrands.length || selectedBrands.includes(p.brand)) &&
        (!prices.length ||
          prices.some((label) => {
            const r = ranges.find((range) => range.label === label);
            return !!r && p.price >= r.min && p.price <= r.max;
          })),
    );
    return [...result].sort((a, b) =>
      sort === "low"
        ? a.price - b.price
        : sort === "high"
          ? b.price - a.price
          : sort === "new"
            ? b.newest! - a.newest!
            : sort === "rating"
              ? (b.rating ?? 0) - (a.rating ?? 0)
              : Number(!!b.featured) - Number(!!a.featured),
    );
  }, [query, cats, selectedBrands, prices, sort, onlyDeals]);
  const toggle = (
    list: string[],
    setter: (v: string[]) => void,
    value: string,
  ) =>
    setter(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
    );
  const clear = () => {
    setQuery("");
    setCats([]);
    setSelectedBrands([]);
    setPrices([]);
    setSort("featured");
  };
  const filters = (
    <>
      <div className="filter-heading">
        <h3>Filters</h3>
        <button className="text-button" onClick={clear}>
          Clear all
        </button>
      </div>
      <FilterGroup title="Category">
        {categoryList.map((c) => (
          <label className="check-row" key={c}>
            <input
              type="checkbox"
              checked={cats.includes(c)}
              onChange={() => toggle(cats, setCats, c)}
            />
            <span>{c}</span>
            <small>{products.filter((p) => p.category === c).length}</small>
          </label>
        ))}
      </FilterGroup>
      <FilterGroup title="Brand">
        {brandList.map((b) => (
          <label className="check-row" key={b}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(b)}
              onChange={() => toggle(selectedBrands, setSelectedBrands, b)}
            />
            <span>{b}</span>
          </label>
        ))}
      </FilterGroup>
      <FilterGroup title="Price range">
        {ranges.map((r) => (
          <label className="check-row" key={r.label}>
            <input
              type="checkbox"
              checked={prices.includes(r.label)}
              onChange={() => toggle(prices, setPrices, r.label)}
            />
            <span>{r.label}</span>
          </label>
        ))}
      </FilterGroup>
    </>
  );
  return (
    <>
      <div className="catalogue-toolbar">
        <label className="search-field">
          <Search size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search peripherals..."
            aria-label="Search products"
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search">
              <X size={16} />
            </button>
          )}
        </label>
        <div className="catalogue-actions">
          <button
            className="filter-trigger"
            onClick={() => setMobileFilters(true)}
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
          <label className="sort-control">
            <span>Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="new">Newest</option>
              <option value="rating">Best rated</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
            </select>
          </label>
        </div>
      </div>
      <div className="catalogue-layout">
        <aside className="filter-sidebar">{filters}</aside>
        <div className="catalogue-results">
          <div className="results-summary">
            <span>
              {filtered.length} {filtered.length === 1 ? "product" : "products"}
            </span>
            {cats.length + selectedBrands.length + prices.length > 0 && (
              <button className="text-button" onClick={clear}>
                Clear selections
              </button>
            )}
          </div>
          {filtered.length ? (
            <div className="product-grid">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="eyebrow">NOTHING FOUND</span>
              <h2>Try a different search.</h2>
              <p>
                Adjust your filters or clear them to explore the full
                collection.
              </p>
              <button className="button button-dark" onClick={clear}>
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
      {mobileFilters && (
        <div
          className="drawer-backdrop"
          role="presentation"
          onClick={() => setMobileFilters(false)}
        >
          <section
            className="filter-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Product filters"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-title">
              <h2>Filters</h2>
              <button
                onClick={() => setMobileFilters(false)}
                aria-label="Close filters"
              >
                <X />
              </button>
            </div>
            {filters}
            <button
              className="button button-dark drawer-apply"
              onClick={() => setMobileFilters(false)}
            >
              Show {filtered.length} products
            </button>
          </section>
        </div>
      )}
    </>
  );
}
function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="filter-group">
      <h4>{title}</h4>
      {children}
    </section>
  );
}
