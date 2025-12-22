import vossen from "./data/vossen.json";
import ferrada from "./data/ferrada.json";

/* =======================
   TYPES
======================= */

export type WheelSpecs = {
  diameter: string | null;
  width: string | null;
  boltPattern: string | null;
  offset: string | null;
  profile: "FLAT" | "DEEP";
  finish: string | null;
};

export type Product = {
  sku: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  specs: WheelSpecs;
};

/* =======================
   HELPERS
======================= */

function parsePrice(value?: string): number {
  if (!value || typeof value !== "string") return 0;

  const cleaned = value.replace(/[^0-9.]/g, "");
  const parsed = Number(cleaned);

  return isNaN(parsed) ? 0 : parsed;
}

function parseWheelSpecs(description: string): WheelSpecs {
  return {
    diameter: description.match(/(\d{2})X/)?.[1] || null,
    width: description.match(/X(\d+(\.\d+)?)/)?.[1] || null,
    boltPattern: description.match(/\dX\d{3}/)?.[0] || null,
    offset: description.match(/ET\d+/)?.[0] || null,
    profile: description.includes("DEEP") ? "DEEP" : "FLAT",
    finish: description.split("-").slice(-1)[0]?.trim() || null,
  };
}

/* =======================
   NORMALIZERS
======================= */

function normalizeVossen(item: any, index: number): Product {
  const name = item["Item Description"] || "Vossen Wheel";

  const price =
    parsePrice(item[" Sales Price "]) ||
    parsePrice(item["Sales Price"]) ||
    parsePrice(item["Price"]);

  return {
    sku: `VOS-${index + 1}`,
    name,
    brand: "Vossen",
    category: "Wheels",
    price,
    specs: parseWheelSpecs(name),
  };
}


function normalizeFerrada(item: any, index: number): Product {
  const name = item["Item Description"] || "Ferrada Wheel";

  const price =
    parsePrice(item[" Sales Price "]) ||
    parsePrice(item["Sales Price"]) ||
    parsePrice(item["Price"]);

  return {
    sku: `FER-${index + 1}`,
    name,
    brand: "Ferrada",
    category: "Wheels",
    price,
    specs: parseWheelSpecs(name),
  };
}


/* =======================
   EXPORT
======================= */

export function getAllProducts(): Product[] {
  // Normalize and filter Vossen
  const vossenProducts = vossen.map((item, idx) => normalizeVossen(item, idx));
  
  // Normalize and filter Ferrada, starting index after Vossen
  const ferradaProducts = ferrada.map((item, idx) => 
    normalizeFerrada(item, vossenProducts.length + idx)
  );

  return [...vossenProducts, ...ferradaProducts].filter(p => p.price > 0);
}
