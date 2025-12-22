."use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Product } from "@/lib/products";

export default function ShopClient({
  products,
}: {
  products: Product[];
}) {
  const params = useSearchParams();

  const diameter = params.get("diameter") || "";
  const width = params.get("width") || "";
  const boltPattern = params.get("boltPattern") || "";
  const profile = params.get("profile") || "";
  const finish = params.get("finish") || "";

  const [sort, setSort] = useState("");

  const hasFilters =
    diameter || width || boltPattern || profile || finish;

  /* =======================
     FILTER PRODUCTS
  ======================= */
 const filteredProducts = useMemo(() => {
  return products.filter((p) => {
    // Diameter
    if (diameter && p.specs.diameter !== diameter) return false;

    // Width
    if (width && p.specs.width !== width) return false;

    // Bolt Pattern
    if (boltPattern && p.specs.boltPattern !== boltPattern) return false;

    // Profile (FLAT / DEEP)
    if (profile && p.specs.profile !== profile) return false;

    // Finish
    if (finish && p.specs.finish !== finish) return false;

    return true;
  });
}, [products, diameter, width, boltPattern, profile, finish]);

  /* =======================
     SORT PRODUCTS
  ======================= */
  const sortedProducts = useMemo(() => {
    const list = hasFilters ? filteredProducts : products;

    if (sort === "price-asc") {
      return [...list].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
      return [...list].sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, filteredProducts, hasFilters, sort]);

  return (
    <>
      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <p className="text-gray-400 text-sm">
          {hasFilters
            ? `Showing ${sortedProducts.length} filtered results`
            : `Showing ${sortedProducts.length} wheels`}
        </p>

        {/* SORT DROPDOWN */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full md:w-64"
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>

      {/* PRODUCTS GRID */}
      {sortedProducts.length === 0 ? (
        <p className="text-gray-400 text-lg">
          No wheels match the selected specifications.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <div
              key={product.sku}
              className="bg-background p-6 rounded-xl cursor-hover hover:scale-105 transition"
            >
              <h3 className="font-semibold mb-1">
                {product.name}
              </h3>

              <p className="text-sm opacity-70">
                {product.brand}
              </p>

              {/* SPECS */}
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {product.specs.diameter && (
                  <span className="px-2 py-1 bg-gunmetal rounded">
                    {product.specs.diameter}"
                  </span>
                )}
                {product.specs.width && (
                  <span className="px-2 py-1 bg-gunmetal rounded">
                    {product.specs.width}
                  </span>
                )}
                {product.specs.boltPattern && (
                  <span className="px-2 py-1 bg-gunmetal rounded">
                    {product.specs.boltPattern}
                  </span>
                )}
                {product.specs.profile && (
                  <span className="px-2 py-1 bg-gunmetal rounded">
                    {product.specs.profile}
                  </span>
                )}
              </div>

              <p className="mt-4 font-bold text-accent">
                ${product.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
