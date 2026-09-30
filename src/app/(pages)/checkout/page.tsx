"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle, Banknote, CreditCard } from "lucide-react";
import { useApp } from "@/context/CartWishlistContext";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import { createCashOrder, createOnlineCheckoutSession, ApiError } from "@/lib/api";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, cartId, clearCart } = useApp();
  const { token, isAuthenticated, isReady } = useAuth();
  const { showToast } = useToast();

  const [form, setForm] = useState({ details: "", phone: "", city: "" });
  const [method, setMethod] = useState<"cash" | "online">("cash");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.push("/signin");
    }
  }, [isReady, isAuthenticated, router]);

  if (!isReady || !isAuthenticated) return null;

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-gray-500">
        Your cart is empty.
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !cartId) {
      setErrorMsg("Could not find your cart. Please try again.");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    try {
      if (method === "online") {
        const res = await createOnlineCheckoutSession(
          token,
          cartId,
          form,
          window.location.origin + "/account",
        );
        if (res?.session?.url) {
          window.location.href = res.session.url;
          return;
        }
        throw new ApiError("Could not start online payment.", 0);
      }

      await createCashOrder(token, cartId, form);
      clearCart();
      showToast("Order placed successfully");
      router.push("/account");
    } catch (err) {
      setErrorMsg(err instanceof ApiError ? err.message : "Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

      {errorMsg && (
        <div className="flex items-center gap-2 bg-red-50 text-red-600 text-sm font-medium px-4 py-3 rounded-xl mb-4">
          <AlertCircle size={18} />
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Address Details
          </label>
          <input
            required
            value={form.details}
            onChange={e => setForm({ ...form, details: e.target.value })}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-emerald-500"
            placeholder="Street, building, apartment..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Phone
          </label>
          <input
            required
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-emerald-500"
            placeholder="01xxxxxxxxx"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            City
          </label>
          <input
            required
            value={form.city}
            onChange={e => setForm({ ...form, city: e.target.value })}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-emerald-500"
            placeholder="Cairo"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Payment Method
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setMethod("cash")}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-semibold text-sm transition-colors cursor-pointer ${
                method === "cash"
                  ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                  : "border-gray-200 text-gray-500"
              }`}
            >
              <Banknote size={18} /> Cash
            </button>
            <button
              type="button"
              onClick={() => setMethod("online")}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-semibold text-sm transition-colors cursor-pointer ${
                method === "online"
                  ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                  : "border-gray-200 text-gray-500"
              }`}
            >
              <CreditCard size={18} /> Card
            </button>
          </div>
        </div>

        <div className="flex justify-between font-bold text-gray-900 text-lg pt-2 border-t">
          <span>Total:</span>
          <span className="text-emerald-600">{cartTotal.toLocaleString()} EGP</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors cursor-pointer"
        >
          {loading && <Loader2 size={18} className="animate-spin" />}
          {loading
            ? "Processing..."
            : method === "cash"
            ? "Place Order (Cash on Delivery)"
            : "Continue to Payment"}
        </button>
      </form>
    </div>
  );
}
