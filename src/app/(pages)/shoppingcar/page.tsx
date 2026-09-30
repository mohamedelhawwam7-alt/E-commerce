"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ArrowLeft, ShoppingBag, Plus, Minus } from "lucide-react";
import { useApp } from "@/context/CartWishlistContext";

export default function ShoppingCartPage() {
  const { cart, isReady, removeFromCart, updateCartQuantity, cartTotal } =
    useApp();

  if (!isReady) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-gray-400">
        Loading your cart...
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
          <ShoppingBag size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mb-6">
          You haven&apos;t added any products to your cart yet.
        </p>
        <Link
          href="/Product"
          className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Shopping Cart ({cart.length} {cart.length === 1 ? "item" : "items"})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl shadow-xs gap-4"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                  {item.imageCover ? (
                    <Image
                      src={item.imageCover}
                      alt={item.title || "product"}
                      fill
                      className="object-contain p-1"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <ShoppingBag size={24} />
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 text-base line-clamp-1">
                    {item.title || "Unnamed product"}
                  </h3>
                  <p className="text-emerald-600 font-bold text-sm mt-0.5">
                    {item.price} EGP each
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                  <button
                    type="button"
                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                    className="p-1.5 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                    title="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-3 font-bold text-sm text-gray-800 select-none">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                    className="p-1.5 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                    title="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div className="text-right min-w-20">
                  <span className="font-extrabold text-gray-900 text-base">
                    {item.price * item.quantity} EGP
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                  title="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 h-fit space-y-4">
          <h2 className="text-lg font-bold text-gray-900 border-b pb-3">
            Order Summary
          </h2>

          <div className="flex justify-between text-gray-600 text-sm">
            <span>Subtotal:</span>
            <span>{cartTotal.toLocaleString()} EGP</span>
          </div>

          <div className="flex justify-between text-gray-600 text-sm">
            <span>Shipping:</span>
            <span className="text-emerald-600 font-bold">
              Calculated at checkout
            </span>
          </div>

          <div className="border-t pt-3 flex justify-between font-bold text-gray-900 text-lg">
            <span>Estimated Total:</span>
            <span className="text-emerald-600 font-extrabold">
              {cartTotal.toLocaleString()} EGP
            </span>
          </div>

          <Link
            href="/checkout"
            className="w-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl mt-4 cursor-pointer transition-colors"
          >
            Checkout
          </Link>

          <Link
            href="/Product"
            className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-emerald-600 pt-2"
          >
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
