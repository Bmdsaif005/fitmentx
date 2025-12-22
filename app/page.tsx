"use client";

import BrandAccessories from "@/components/BrandAccessories";

import { useCart } from "@/components/cart/CartContext";

export default function Home() {
  const { addItem } = useCart();

  const categories = [
    "Wheels & Tires",
    "Suspension & Lift Kits",
    "Widebody & Exterior",
    "Lighting & Electrical",
    "Interior Accessories",
    "Performance Parts",
    "Off-Road Accessories",
    "Maintenance & Tools",
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
     <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden bg-background">

  {/* 🎥 BRIGHTENED VIDEO */}
  <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover
             brightness-130 contrast-120 saturate-115"
>
  <source src="/wheel-fitment-showcase.mp4" type="video/mp4" />
</video>


  {/* 🌑 DARK OVERLAY (READABILITY) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/65"></div>

  {/* 🔴 SUBTLE THEME MERGE (RED TINT) */}
  <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply"></div>

  {/* 🧱 CONTENT */}
  <div className="relative z-10 max-w-5xl px-6">
    <h1 className="hero-title mb-6">
      The Ultimate <span className="text-accent">Auto Accessories</span> Marketplace
    </h1>

    <p className="text-lg md:text-xl text-white/90 mb-10">
      Wheels, suspension, body kits, lighting, interiors, performance parts
      — all in one place.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/shop"
        className="bg-accent px-10 py-4 rounded-lg font-semibold
                   hover:scale-105 transition"
      >
        Browse All Accessories
      </a>

      <a
        href="/gallery"
        className="border border-white/70 px-10 py-4 rounded-lg font-semibold
                   hover:border-accent transition"
      >
        View Real Builds
      </a>
    </div>
  </div>
</section>


   
      {/* ================= SHOP BY ACCESSORY TYPE (ADD TO CART) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">
          Shop by <span>Accessory Type</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((item) => (
              <button
                key={item}
                onClick={() => addItem({ name: item })}
                className="w-full text-left bg-gunmetal p-8 rounded-xl cursor-hover 
                          hover:border hover:border-accent transition focus:ring-2 focus:ring-accent"
                aria-label={`Add ${item} to cart`}
              >
                <h3 className="font-bold text-lg mb-2">{item}</h3>
                <p className="text-sm opacity-80">Click to add to cart</p>
              </button>
          ))}
        </div>
      </section>

      {/* ================= POPULAR ACCESSORIES ================= */}
      <section className="bg-gunmetal py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Popular Accessories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Alloy Wheels",
              "LED Headlights",
              "Performance Exhausts",
              "Seat Covers",
              "Off-Road Tires",
              "Roof Racks",
            ].map((item) => (
              <div
                key={item}
                className="bg-background p-6 rounded-xl cursor-hover"
              >
                <h4 className="font-semibold mb-2">{item}</h4>
                <p className="text-sm opacity-70">
                  Top-rated aftermarket accessory
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRAND ACCESSORIES (REUSABLE COMPONENT) ================= */}
      <BrandAccessories />

      {/* ================= ACCESSORIES FOR EVERY NEED ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">
          Accessories for Every Need
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gunmetal p-8 rounded-xl cursor-hover">
            <h3 className="font-bold mb-2">Daily Driving</h3>
            <p className="text-sm opacity-80">
              Comfort, safety, and convenience accessories
            </p>
          </div>

          <div className="bg-gunmetal p-8 rounded-xl cursor-hover">
            <h3 className="font-bold mb-2">Performance & Racing</h3>
            <p className="text-sm opacity-80">
              Engine, exhaust, suspension upgrades
            </p>
          </div>

          <div className="bg-gunmetal p-8 rounded-xl cursor-hover">
            <h3 className="font-bold mb-2">Off-Road & Adventure</h3>
            <p className="text-sm opacity-80">
              Lift kits, tires, recovery gear
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
