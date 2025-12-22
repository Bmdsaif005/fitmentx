"use client";

import Link from "next/link";

const BRANDS = [
  {
    brand: "BMW",
    
    color: "#003a8f",
    glow: "rgba(0,58,143,0.6)",
    font: "var(--font-oswald)",
    items: ["M Performance Exhaust", "Alloy Wheels", "Carbon Spoiler"],
  },
  {
    brand: "Audi",
    
    color: "#cfcfcf",
    glow: "rgba(180,180,180,0.55)",
    font: "var(--font-inter)",
    items: ["LED Headlights", "Sport Grille", "Performance Brakes"],
  },
  {
    brand: "Mercedes",
    
    color: "#0a1946",
    glow: "rgba(10,25,70,0.65)",
    font: "var(--font-playfair)",
    items: ["AMG Wheels", "Ambient Lighting", "Performance Exhaust"],
  },
  {
    brand: "Honda",
   
    color: "#c00000",
    glow: "rgba(200,0,0,0.6)",
    font: "var(--font-montserrat)",
    items: ["Body Kits", "Seat Covers", "Alloy Wheels"],
  },
  {
    brand: "Ford",
    
    color: "#0033a0",
    glow: "rgba(0,51,160,0.65)",
    font: "var(--font-oswald)",
    items: ["Lift Kits", "Off-Road Bumpers", "Performance Exhaust"],
  },
  {
    brand: "Jeep",
    color: "#556b2f",
    glow: "rgba(85,107,47,0.65)",
    font: "var(--font-roboto-condensed)",
    items: ["Winches", "Lift Kits", "All-Terrain Tires"],
  },
];

export default function BrandAccessories() {
  return (
    <section className="bg-black">
      {BRANDS.map((brand) => (
        <section
          key={brand.brand}
          className="relative py-32 overflow-hidden bg-black"
        >
          {/* BRAND GLOW */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${brand.glow}, transparent 70%)`,
            }}
          />

          

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* BRAND HEADER */}
            <div className="flex justify-between items-center mb-12">
              <h3
                className="text-3xl font-extrabold tracking-wide"
                style={{
                  color: brand.color,
                  fontFamily: brand.font,
                }}
              >
                {brand.brand}
              </h3>

              <Link
                href={`/shop?make=${brand.brand}`}
                className="text-sm font-semibold transition hover:underline"
                style={{ color: brand.color }}
              >
                View all →
              </Link>
            </div>

            {/* ACCESSORY CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {brand.items.map((item) => (
                <div
  key={item}
  className="
  bg-transparent
  backdrop-blur-xl
  backdrop-brightness-125
  border border-white/20
  p-8
  rounded-xl
  cursor-pointer
  transition-all
  hover:scale-105
"



  onMouseEnter={(e) =>
    (e.currentTarget.style.boxShadow = `0 0 45px ${brand.glow}`)
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.boxShadow = "none")
  }
>

                  <h4 className="font-semibold mb-3 text-lg">
                    {item}
                  </h4>

                  <p className="text-gray-400 text-sm mb-5">
                    Premium aftermarket accessory engineered for performance.
                  </p>

                  <Link
                    href={`/shop?make=${brand.brand}`}
                    className="text-sm font-semibold transition hover:underline"
                    style={{ color: brand.color }}
                  >
                    Shop now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
