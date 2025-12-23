"use client";

import { useCart } from "@/components/cart/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart();

  const total = items.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg mb-6">Your cart is empty.</p>
          <Link
            href="/shop"
            className="bg-accent px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {items.map((item, index) => (
              <div key={index} className="bg-gunmetal p-6 rounded-xl flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm opacity-80">${item.price || 0}</p>
                </div>
                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mb-8">
            <p className="text-xl font-bold">Total: ${total}</p>
            <button
              onClick={clearCart}
              className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Clear Cart
            </button>
          </div>

          <div className="text-center">
            <button className="bg-accent px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}
