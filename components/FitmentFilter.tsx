"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { getAllProducts } from "@/lib/products";

export default function FitmentFilter() {
  const router = useRouter();
  const products = useMemo(() => getAllProducts(), []);

  const [diameter, setDiameter] = useState("");
  const [width, setWidth] = useState("");
  const [boltPattern, setBoltPattern] = useState("");
  const [profile, setProfile] = useState("");
  const [finish, setFinish] = useState("");

  /* =======================
     BUILD OPTIONS FROM JSON
  ======================= */
  const diameters = useMemo(
    () =>
      Array.from(
        new Set(products.map((p) => p.specs.diameter).filter(Boolean))
      ).sort(),
    [products]
  );

  const widths = useMemo(
    () =>
      Array.from(
        new Set(products.map((p) => p.specs.width).filter(Boolean))
      ).sort(),
    [products]
  );

  const boltPatterns = useMemo(
    () =>
      Array.from(
        new Set(products.map((p) => p.specs.boltPattern).filter(Boolean))
      ),
    [products]
  );

  const finishes = useMemo(
    () =>
      Array.from(
        new Set(products.map((p) => p.specs.finish).filter(Boolean))
      ),
    [products]
  );

  const handleSearch = () => {
    const query = new URLSearchParams();

    if (diameter) query.append("diameter", diameter);
    if (width) query.append("width", width);
    if (boltPattern) query.append("boltPattern", boltPattern);
    if (profile) query.append("profile", profile);
    if (finish) query.append("finish", finish);

    router.push(`/shop?${query.toString()}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">

      {/* DIAMETER */}
      <select value={diameter} onChange={(e) => setDiameter(e.target.value)}>
        <option value="">Diameter</option>
        {diameters.filter((d): d is string => d !== null).map((d) => (
          <option key={d} value={d}>
            {d}"
          </option>
        ))}
      </select>

      {/* WIDTH */}
      <select value={width} onChange={(e) => setWidth(e.target.value)}>
        <option value="">Width</option>
        {widths.filter((w): w is string => w !== null).map((w) => (
          <option key={w} value={w}>
            {w}
          </option>
        ))}
      </select>

      {/* BOLT PATTERN */}
      <select
        value={boltPattern}
        onChange={(e) => setBoltPattern(e.target.value)}
      >
        <option value="">Bolt Pattern</option>
        {boltPatterns.filter((bp): bp is string => bp !== null).map((bp) => (
          <option key={bp} value={bp}>
            {bp}
          </option>
        ))}
      </select>

      {/* PROFILE */}
      <select value={profile} onChange={(e) => setProfile(e.target.value)}>
        <option value="">Profile</option>
        <option value="FLAT">Flat Face</option>
        <option value="DEEP">Deep Dish</option>
      </select>

      {/* WHEEL TYPE / FINISH */}
      <select value={finish} onChange={(e) => setFinish(e.target.value)}>
        <option value="">Wheel Finish</option>
        {finishes.filter((f): f is string => f !== null).map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </select>

      {/* SEARCH */}
      <button
        onClick={handleSearch}
        className="md:col-span-2 bg-accent text-white font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition"
      >
        Find Wheels
      </button>
    </div>
  );
}
