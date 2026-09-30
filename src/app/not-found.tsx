"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, ShoppingCart, Apple, Carrot, Headset, RotateCcw, Shield, VanIcon } from "lucide-react";
import { BiLemon } from "react-icons/bi";

export default function NotFound() {
  const router = useRouter();

  return (<>
  <div className="min-h-[85vh] flex items-center justify-center bg-[#fbfdfc] px-4 py-12 relative overflow-hidden">

      <div className="absolute top-12 left-10 text-emerald-200/40  select-none animate-bounce pointer-events-none">
        <Apple className="text-green-400 " size={49} />
      </div>
      <div className="absolute bottom-16 left-16 text-emerald-200/40 animate-bounce select-none pointer-events-none">
        <BiLemon className="text-green-400 " size={49} />
      </div>
      <div className="absolute top-20 right-14 text-emerald-200/40 animate-bounce select-none pointer-events-none">
        <Carrot className="text-green-400 " size={49} />
      </div>
      <div className="absolute bottom-20 right-10 text-emerald-200/40 animate-bounce select-none pointer-events-none">
        <Carrot className="text-green-400 " size={35} />
      </div>

      <div className="max-w-xl w-full text-center relative z-10 flex flex-col items-center">
        
        <div className="relative mb-6">
          <div className="w-28 h-28 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center p-4">
            <ShoppingCart
              className="w-12 h-12 text-[#22c55e]"
              strokeWidth={2.2}
            />
          </div>

         
          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#16a34a] text-white flex items-center justify-center text-xs font-black shadow-md border-2 border-white">
            404
          </div>
        </div>

     
        <div className="flex items-center gap-1.5 text-emerald-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="w-5 h-2.5 border-b-2 border-emerald-400 rounded-b-full inline-block" />
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
        </div>

       
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
          Oops! Nothing Here
        </h1>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md mb-8">
          Looks like this page went out of stock! Don&apos;t worry, there&apos;s
          plenty more fresh content to explore.
        </p>

      
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link
            href="/"
            className="h-12 px-6 bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.99] text-white font-semibold rounded-2xl text-sm shadow-xs transition-all flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <button
            type="button"
            onClick={() => router.back()}
            className="h-12 px-6 bg-white hover:bg-gray-50 active:scale-[0.99] text-gray-700 font-semibold rounded-2xl text-sm border border-gray-200 shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>

       
        <div className="w-full bg-white border border-gray-100 rounded-3xl p-6 shadow-2xs">
          <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-4">
            POPULAR DESTINATIONS
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Link
              href="/Product"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
            >
              All Products
            </Link>

            <Link
              href="/categories"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Categories
            </Link>

            <Link
              href="/notfound"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Today&apos;s Deals
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 p-4 gap-4 bg-green-100">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300">
                <div className="bg-sky-100 p-3 rounded-full">
                  <VanIcon className="text-blue-700" />
                </div>
                <div>
                  <h5 className="font-semibold">Free Shipping</h5>
                  <p className="text-gray-400">On orders over 500 EGP</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="text-green-700" />
                </div>
                <div>
                  <h5 className="font-semibold">Secure Payment</h5>
                  <p className="text-gray-400">100% secure transactions</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300">
                <div className="bg-orange-100 p-3 rounded-full">
                  <RotateCcw className="text-orange-700" />
                </div>
                <div>
                  <h5 className="font-semibold">Easy Returns</h5>
                  <p className="text-gray-400">14-day return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300">
                <div className="bg-fuchsia-100 p-3 rounded-full">
                  <Headset className="text-fuchsia-700" />
                </div>
                <div>
                  <h5 className="font-semibold">Support</h5>
                  <p className="text-gray-400">24/7 Support</p>
                </div>
              </div>
            </div>
    </>
    
  );
}
