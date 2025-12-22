"use client";

import { useCart } from "./CartContext";

export default function CartDrawer() {
  const { items } = useCart();

  return (
    <div className="fixed top-20 right-6 w-72 bg-gunmetal p-6 rounded-xl shadow-2xl z-50">
      <h3 className="font-bold mb-4">
        Cart ({items.length})
      </h3>

      {items.length === 0 ? (
        <p className="text-gray-400 text-sm">No items added</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-sm border-b border-gray-700 pb-2"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
