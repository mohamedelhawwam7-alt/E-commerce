"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ShoppingCart, Heart, AlertCircle, Loader2 } from "lucide-react";
import { getProduct } from "@/lib/api";
import { useApp } from "@/context/CartWishlistContext";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const { addToCart, toggleWishlist, isInWishlist } = useApp();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    setLoading(true);
    setErrored(false);

    getProduct(id)
      .then(data => {
        if (cancelled) return;
        if (data) {
          setProduct(data);
        } else {
          setErrored(true);
        }
      })
      .catch(() => {
        if (!cancelled) setErrored(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id, reloadKey]);

  if (loading) {
    return (
      <div className="flex flex-col gap-3 justify-center items-center min-h-[60vh] text-emerald-600">
        <Loader2 className="w-8 h-8 animate-spin" />
        <span className="font-semibold">Loading product...</span>
      </div>
    );
  }

  if (errored || !product) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center min-h-[60vh] text-center px-4">
        <AlertCircle className="w-10 h-10 text-red-500" />
        <p className="text-red-500 font-bold text-lg">
          We couldn&apos;t load this product.
        </p>
        <button
          type="button"
          onClick={() => setReloadKey(k => k + 1)}
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors cursor-pointer"
        >
          Try Again
        </button>
      </div>
    );
  }

  const finalPrice = product.priceAfterDiscount || product.price;
  const liked = isInWishlist(String(id));

  const handleAddToCart = () => {
    addToCart(
      {
        id: String(id),
        title: product.title,
        price: finalPrice,
        imageCover: product.imageCover,
      },
      quantity,
    );
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleToggleLike = () => {
    toggleWishlist({
      id: String(id),
      title: product.title,
      price: finalPrice,
      imageCover: product.imageCover,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold text-emerald-600 text-center mb-6">
        Product Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-6 rounded-2xl border border-gray-200">
        <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-white">
          <Image
            src={product.imageCover}
            alt={product.title}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        <div className="flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">
                {product.category?.name || "General"}
              </span>
              <span className="text-xs bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                {product.brand?.name || "Brand"}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {product.description}
            </p>

            <div className="text-3xl font-extrabold text-emerald-700 mb-2">
              {finalPrice} EGP
            </div>
          </div>

          <div className="relative z-20 pt-4 border-t border-gray-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-300 rounded-xl bg-white">
                <button
                  type="button"
                  onClick={() => quantity > 1 && setQuantity(q => q - 1)}
                  className="px-3 py-2 text-lg font-bold hover:bg-gray-100 cursor-pointer"
                >
                  -
                </button>
                <span className="px-4 font-bold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-3 py-2 text-lg font-bold hover:bg-gray-100 cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white transition-all cursor-pointer ${
                  isAdded
                    ? "bg-emerald-900"
                    : "bg-emerald-600 hover:bg-emerald-700"
                }`}
              >
                <ShoppingCart size={20} />
                {isAdded ? "Added!" : `Add to Cart (${quantity})`}
              </button>

              <button
                type="button"
                onClick={handleToggleLike}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                  liked
                    ? "bg-rose-50 border-rose-400 text-rose-600"
                    : "bg-white border-gray-300 text-gray-400 hover:text-rose-500"
                }`}
              >
                <Heart
                  size={24}
                  className={liked ? "fill-rose-500 text-rose-500" : "text-gray-400"}
                />
              </button>
            </div>

            <div className="text-sm font-semibold text-gray-700">
              Total:{" "}
              <span className="text-emerald-700 font-extrabold text-lg">
                {(finalPrice * quantity).toLocaleString()} EGP
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
