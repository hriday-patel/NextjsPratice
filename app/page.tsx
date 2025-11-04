"use client";

import { useActionState } from "react";
import { addToCart } from "./addToCart";

interface CartItem {
  id: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  count: number;
  success: string | null;
  error: string | null;
}

export default function CartComponent() {
  const initialState: CartState = {
    items: [],
    count: 0,
    success: null,
    error: null
  };


  const [state, formAction, isPending] = useActionState(
    addToCart,
    initialState
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart Example</h2>

      {/* Cart Summary */}
      <div className="mb-6 p-4 bg-blue-50 rounded-md">
        <p className="text-lg font-semibold">Total Items: {state.count}</p>
        {state.items.length > 0 && (
          <div className="mt-2 text-sm text-gray-600 overflow-y-scroll max-h-32">
            <p>Total additions:</p>
            <ul className="list-disc list-inside">
              {state.items.map((item: CartItem, idx: number) => (
                <li key={idx}>
                  Product {item.id} - Qty: {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Add to Cart Form */}
      <form action={formAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Product ID:</label>
          <input
            type="text"
            name="productId"
            placeholder="e.g., PROD-001"
            className="w-full px-3 py-2 border rounded-md"
            disabled={isPending}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Quantity:</label>
          <input
            type="number"
            name="quantity"
            defaultValue="1"
            min="1"
            className="w-full px-3 py-2 border rounded-md"
            disabled={isPending}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isPending ? "Adding..." : "Add to Cart"}
        </button>
      </form>

      {/* Success Message */}
      {state.success && (
        <div className="mt-4 p-3 rounded-md bg-green-100 text-green-800">
          ✓ {state.success}
        </div>
      )}

      {/* Error Message */}
      {state.error && (
        <div className="mt-4 p-3 rounded-md bg-red-100 text-red-800">
          ✗ {state.error}
        </div>
      )}

      {/* Loading Indicator */}
      {isPending && (
        <div className="mt-4 text-center text-gray-600">
          <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 rounded-md text-sm text-gray-700">
        <p className="font-semibold mb-2">💡 prevState Example:</p>
        <p>
          Har baar form submit karne par{" "}
          <code className="bg-gray-200 px-1 rounded">prevState</code> mein
          previous cart data milta hai.
        </p>
        <p className="mt-1">
          Isse hum items accumulate kar sakte hain bina external state
          management ke!
        </p>
      </div>
    </div>
  );
}
