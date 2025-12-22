"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";

export default function Header() {
  const { items } = useCart();

  return (
    <header className="border-b border-gray-800 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO → HOME */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide cursor-pointer"
        >
          Fitment<span className="text-accent">X</span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center space-x-8 text-sm uppercase">
          <Link href="/" className="hover:text-accent transition">
            Home
          </Link>

          <Link href="/shop" className="hover:text-accent transition">
            Shop
          </Link>

          <Link href="/gallery" className="hover:text-accent transition">
            Gallery
          </Link>

          <Link href="/support" className="hover:text-accent transition">
            Support
          </Link>

          {/* CART */}
          <Link
            href="/cart"
            className="relative hover:text-accent transition"
          >
            Cart
            {items.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-accent text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
