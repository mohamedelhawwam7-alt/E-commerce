"use client";

import React, { useState } from "react";
import {
  Mail,
  ArrowRight,
  Sparkles,
  Truck,
  Tag,
  Star,
  Check,
  Loader2,
  Lock,
  VanIcon,
  Shield,
  RotateCcw,
  Headset,
} from "lucide-react";

export default function NewsletterAppSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
  
      await new Promise(resolve => setTimeout(resolve, 1500));


      setStatus("success");
      setEmail("");


      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  return (
    <div className="w-full">

      <section className="container mx-auto px-4 py-12">
        <div className="bg-emerald-50/40 border border-emerald-100/70 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
            <div className="lg:col-span-7 space-y-6">
      
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    NEWSLETTER
                  </p>
                  <p className="text-xs text-gray-500">50,000+ subscribers</p>
                </div>
              </div>

        
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  Get the Freshest Updates <br className="hidden sm:block" />
                  <span className="text-emerald-600">Delivered Free</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-500 font-normal">
                  Weekly recipes, seasonal offers & exclusive member perks.
                </p>
              </div>

       
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-emerald-100 text-xs font-medium text-gray-700 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                  Fresh Picks Weekly
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-emerald-100 text-xs font-medium text-gray-700 shadow-2xs">
                  <Truck className="w-3.5 h-3.5 text-emerald-500" />
                  Free Delivery Codes
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-emerald-100 text-xs font-medium text-gray-700 shadow-2xs">
                  <Tag className="w-3.5 h-3.5 text-emerald-500" />
                  Members-Only Deals
                </span>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    disabled={status === "loading" || status === "success"}
                    required
                    className="w-full sm:flex-1 h-12 px-4 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 shadow-2xs transition-all placeholder:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />

                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className={`w-full sm:w-auto min-w-140px h-12 px-7 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-sm cursor-pointer ${
                      status === "success"
                        ? "bg-emerald-700 text-white shadow-emerald-700/30 cursor-default"
                        : "bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white shadow-emerald-600/30"
                    }`}
                  >
                    {status === "loading" && (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    )}

                    {status === "success" && (
                      <>
                        <Check className="w-4 h-4 stroke-width-3" />
                        <span>Subscribed!</span>
                      </>
                    )}

                    {status === "idle" && (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-gray-400 flex items-center gap-1.5 pt-1">
                  ✨ Unsubscribe anytime. No spam, ever.{" "}
                </p>
              </form>
            </div>

   
            <div className="hidden lg:block lg:col-span-1 h-full w-1px bg-emerald-200/50 mx-auto" />


            <div className="lg:col-span-4 bg-slate-900 rounded-2xl p-6 sm:p-7 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-bold tracking-wider text-emerald-400 mb-4">
                  📱 MOBILE APP
                </span>

                <h3 className="text-xl font-bold tracking-tight mb-2">
                  Shop Faster on Our App
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Get app-exclusive deals & 15% off your first order.
                </p>

           
                <div className="space-y-2.5">
                  <a
                    href="#"
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors group cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6 fill-current text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.66-.99 1.73-.86 2.76 1.01.08 2.03-.51 2.57-1.26z" />
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] text-slate-400 font-medium leading-none">
                        DOWNLOAD ON
                      </p>
                      <p className="text-xs font-bold text-white tracking-wide mt-1">
                        App Store
                      </p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors group cursor-pointer"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-white ml-0.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.91 1.91 0 0 1-.61-.954V2.768c.084-.37.297-.7.61-.954zm11.238 11.24l2.25 2.25-11.83 6.64 9.58-8.89zm0-2.108L5.267 2.056l11.83 6.64-2.25 2.25zm1.488 1.488l3.195-1.794c.883-.496.883-1.306 0-1.802l-3.195-1.794-2.172 2.172 2.172 2.218z" />
                    </svg>
                    <div className="text-left">
                      <p className="text-[10px] text-slate-400 font-medium leading-none">
                        GET IT ON
                      </p>
                      <p className="text-xs font-bold text-white tracking-wide mt-1">
                        Google Play
                      </p>
                    </div>
                  </a>
                </div>
              </div>


              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex items-center text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  <span className="text-white font-bold">4.9</span> • 100K+
                  downloads
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <div className="w-full border-t border-green-400 bg-green-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-4 bg-green-200 p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-300 p-3 rounded-full">
                <VanIcon className="text-green-500 " />
              </div>
              <div>
                <h5 className="font-semibold">Free Shipping</h5>
                <p className="text-gray-600">On orders over 500 EGP</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-200 p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-300 p-3 rounded-full">
                <Shield className="text-green-500 " />
              </div>
              <div>
                <h5 className="font-semibold">Secure Payment</h5>
                <p className="text-gray-600">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-200 p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-300 p-3 rounded-full">
                <RotateCcw className="text-green-500 " />
              </div>
              <div>
                <h5 className="font-semibold">Easy Returns</h5>
                <p className="text-gray-600">14-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-200 p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-300 p-3 rounded-full">
                <Headset className="text-green-500 " />
              </div>
              <div>
                <h5 className="font-semibold">Support</h5>
                <p className="text-gray-600">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
