"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PromoBanners() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="container mx-auto px-4 py-8 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div
          className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 text-white bg-linear-to-r from-emerald-600 to-emerald-500 shadow-md transition-all duration-1000 ease-out hover:shadow-xl hover:-translate-y-1.5 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-24"
          }`}
        >

          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full pointer-events-none" />

  
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 text-emerald-100 text-xs font-semibold backdrop-blur-xs mb-4">
            <span>🔥</span> Deal of the Day
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Fresh Organic Fruits
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm mb-4">
            Get up to 40% off on selected organic fruits
          </p>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-2xl sm:text-3xl font-black">40% OFF</span>
            <span className="text-xs text-emerald-100 font-medium">
              Use code:{" "}
              <span className="font-bold text-white tracking-wider">
                ORGANIC40
              </span>
            </span>
          </div>

          <Link
            href="/Product"
            className="group inline-flex items-center gap-2 px-6 py-2.5 bg-white text-emerald-700 text-sm font-bold rounded-full shadow-xs hover:bg-emerald-50 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Shop Now
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>


        <div
          className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 text-white bg-linear-to-r from-amber-500 to-rose-500 shadow-md transition-all duration-1000 ease-out hover:shadow-xl hover:-translate-y-1.5 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"
          }`}
        >

          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full pointer-events-none" />

      
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 text-amber-100 text-xs font-semibold backdrop-blur-xs mb-4">
            <span>✨</span> New Arrivals
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Exotic Vegetables
          </h3>
          <p className="text-amber-100 text-xs sm:text-sm mb-4">
            Discover our latest collection of premium vegetables
          </p>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-2xl sm:text-3xl font-black">25% OFF</span>
            <span className="text-xs text-amber-100 font-medium">
              Use code:{" "}
              <span className="font-bold text-white tracking-wider">
                FRESH25
              </span>
            </span>
          </div>

          <Link
            href="/Product"
            className="group inline-flex items-center gap-2 px-6 py-2.5 bg-white text-rose-600 text-sm font-bold rounded-full shadow-xs hover:bg-rose-50 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Explore Now
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
