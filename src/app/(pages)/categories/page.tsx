import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers } from "lucide-react";


async function getCategories() {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/categories",
      {
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-gray-50/50 pb-16">
     
      <div className="w-full bg-linear-to-r from-emerald-600 via-emerald-500 to-green-500 py-10 px-4 sm:px-8 text-white shadow-xs">
        <div className="container mx-auto max-w-7xl">
        
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-100 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Categories</span>
          </div>

       
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-white/20 backdrop-blur-md rounded-2xl border border-white/25 shadow-inner">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                All Categories
              </h1>
              <p className="text-emerald-100 text-xs sm:text-sm mt-1">
                Browse our wide range of product categories
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto max-w-7xl px-4 pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6">
          {categories.map(category => (
            <Link
              key={category._id}
              href={`/categories/${category._id}`}
              className="group bg-white p-4 rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg hover:border-emerald-400 transition-all duration-300 flex flex-col items-center justify-between"
            >
             
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4 flex items-center justify-center p-2 border border-gray-50 group-hover:scale-102 transition-transform duration-300">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-contain p-2"
                />
              </div>

       
              <h3 className="font-bold text-gray-800 text-sm sm:text-base text-center group-hover:text-emerald-600 transition-colors line-clamp-1 pb-1">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
