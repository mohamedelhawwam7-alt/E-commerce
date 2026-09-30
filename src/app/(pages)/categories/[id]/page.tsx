import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Folder,
  Headset,
  RotateCcw,
  Shield,
  VanIcon,
} from "lucide-react";


async function getCategoryDetails(id: string) {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
      {
        next: { revalidate: 60 },
      },
    );
    const data = await res.json();
    return data.data || null;
  } catch (error) {
    return null;
  }
}


async function getSubcategories(categoryId: string) {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`,
      {
        next: { revalidate: 60 },
      },
    );
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    return [];
  }
}

export default async function CategorySubcategoriesPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const categoryId = resolvedParams.id;

  const [category, subcategories] = await Promise.all([
    getCategoryDetails(categoryId),
    getSubcategories(categoryId),
  ]);

  const categoryName = category?.name || "Category";

  return (
    <>
      <div className="min-h-screen bg-gray-50/40 pb-16">
    
        <div className="w-full bg-[#16a34a] text-white py-10 px-4 sm:px-8 shadow-xs">
          <div className="container mx-auto max-w-7xl">
        
            <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/categories"
                className="hover:text-white transition-colors"
              >
                Categories
              </Link>
              <span>/</span>
              <span className="text-white font-medium">{categoryName}</span>
            </div>

           
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl p-1.5 shadow-sm relative overflow-hidden shrink-0">
                {category?.image ? (
                  <Image
                    src={category.image}
                    alt={categoryName}
                    fill
                    className="object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full h-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl rounded-xl">
                    {categoryName.charAt(0)}
                  </div>
                )}
              </div>

              <div>
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  {categoryName}
                </h1>
                <p className="text-emerald-100 text-xs sm:text-sm mt-1">
                  Choose a subcategory to browse products
                </p>
              </div>
            </div>
          </div>
        </div>

     
        <div className="container mx-auto max-w-7xl px-4 pt-8">
          
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#16a34a] transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            <span>Back to Categories</span>
          </Link>

        
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
            {subcategories.length} Subcategories in {categoryName}
          </h2>

      
          {subcategories.length === 0 ? (
            <div className="text-center py-20 text-gray-400 font-medium bg-white rounded-3xl border border-gray-100">
              No subcategories found for this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {subcategories.map((sub: any) => (
                <Link
                  key={sub._id}
                  href={`/Product?category=${encodeURIComponent(
                    categoryName,
                  )}&catId=${categoryId}&subcategory=${encodeURIComponent(
                    sub.name,
                  )}&subId=${sub._id}`}
                  className="bg-white border border-gray-100 rounded-3xl p-6 shadow-2xs hover:shadow-md hover:border-emerald-300 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between h-40 group cursor-pointer"
                >
                  
                  <div className="w-12 h-12 rounded-2xl bg-[#ecfdf5] text-[#16a34a] flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Folder className="w-6 h-6 fill-current" />
                  </div>

                 
                  <h3 className="font-bold text-gray-900 text-base group-hover:text-[#16a34a] transition-colors line-clamp-2">
                    {sub.name}
                  </h3>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 p-4 bg-green-100 lg:grid-cols-4 gap-4">
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
