"use client";

import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useApp } from "@/context/CartWishlistContext";

interface Props {
  product: {
    id: string;
    title: string;
    price: number;
    imageCover: string;
  };
}

export default function ProductCardActions({ product }: Props) {
  const { addToCart, toggleWishlist, isInWishlist } = useApp();
  const [isAdded, setIsAdded] = useState(false);
  const liked = isInWishlist(product.id);

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleToggleLike}
        title={liked ? "Remove from Wishlist" : "Add to Wishlist"}
        className={`p-2 rounded-full shadow-md border transition-all active:scale-90 cursor-pointer ${
          liked
            ? "bg-rose-50 border-rose-300 text-rose-600"
            : "bg-white/90 backdrop-blur-sm border-gray-100 text-gray-700 hover:text-red-500 hover:bg-red-50"
        }`}
      >
        <Heart size={16} className={liked ? "fill-rose-500 text-rose-500" : ""} />
      </button>

      <button
        type="button"
        onClick={handleAddToCart}
        title="Add to Cart"
        className={`p-2 rounded-full shadow-md border transition-all active:scale-90 cursor-pointer ${
          isAdded
            ? "bg-emerald-600 text-white border-emerald-600"
            : "bg-white/90 backdrop-blur-sm border-gray-100 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
        }`}
      >
        <ShoppingCart size={16} />
      </button>
    </>
  );
}
