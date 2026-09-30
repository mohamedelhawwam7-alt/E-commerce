import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ICategory {
  _id: string;
  name: string;
  image: string;
}

async function getCategories(): Promise<ICategory[]> {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/categories",
      {
        next: { revalidate: 3600 },
      },
    );
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default async function CategoriesSection() {
  const categories = await getCategories();

  return (
    <section className="container mx-auto px-4 py-8">
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-6 bg-emerald-600 rounded-full inline-block"></span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Shop By <span className="text-emerald-600">Category</span>
          </h2>
        </div>

       
        <Link
          href="/categories"
          className="flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          View All Categories
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.slice(0, 10).map(cat => (
          <Link
            key={cat._id}
            href={`/categories/${cat._id}`}
            className="group flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center p-1 mb-2 border border-gray-100 group-hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-700 text-center line-clamp-1 group-hover:text-emerald-600 transition-colors">
              {cat.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
