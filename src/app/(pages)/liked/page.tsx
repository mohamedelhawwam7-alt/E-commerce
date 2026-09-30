"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Trash2, ArrowLeft } from "lucide-react";
import { useApp } from "@/context/CartWishlistContext";

export default function LikedPage() {
  const { wishlist, isReady, toggleWishlist } = useApp();

  if (!isReady) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-gray-400">
        Loading your wishlist...
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mb-4 text-rose-400">
          <Heart size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Your wishlist is empty
        </h2>
        <p className="text-gray-500 mb-6">
          Tap the heart icon on any product to save it here.
        </p>
        <Link
          href="/Product"
          className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Wishlist ({wishlist.length})
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist.map(item => (
          <div
            key={item.id}
            className="p-4 bg-white border border-gray-200 rounded-xl shadow-xs flex items-center justify-between gap-4"
          >
            {item.imageCover && (
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-50">
                <Image
                  src={item.imageCover}
                  alt={item.title || "product"}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-sm">
                {item.title || `Product #${item.id}`}
              </h3>
              <p className="text-emerald-600 font-bold mt-1 text-sm">
                {item.price} EGP
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggleWishlist(item)}
              className="text-rose-500 hover:bg-rose-50 p-2 rounded-lg transition-colors cursor-pointer"
              title="Remove from wishlist"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/Product"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600"
        >
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>
    </div>
  );
}
