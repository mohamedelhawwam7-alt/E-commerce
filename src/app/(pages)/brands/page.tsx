import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, Tag, X, Heart, Eye, RefreshCw } from "lucide-react";
import { getBrands, getProducts } from "@/lib/api";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?:
    | Promise<{ category?: string; brand?: string }>
    | { category?: string; brand?: string };
}) {
  const resolvedParams = searchParams
    ? await Promise.resolve(searchParams)
    : {};
  const category = resolvedParams?.category || "";
  const brand = resolvedParams?.brand || "";

  const allProducts = await getProducts();
  const allBrands = !brand && !category ? await getBrands() : [];

  const filteredProducts = allProducts.filter((product: any) => {
    if (category) {
      const catName = product?.category?.name?.toLowerCase() || "";
      const target = category.toLowerCase();
      if (target === "men")
        return catName.includes("men") && !catName.includes("women");
      if (target === "women") return catName.includes("women");
      if (target === "electronics") return catName.includes("electronic");
      return catName.includes(target);
    }

    if (brand) {
      const brandName = product?.brand?.name?.toLowerCase() || "";
      return (
        brandName === brand.toLowerCase() ||
        brandName.includes(brand.toLowerCase())
      );
    }

    return true;
  });


  const activeBrandInfo =
    brand && filteredProducts.length > 0 ? filteredProducts[0]?.brand : null;

  const currentTitle = brand
    ? activeBrandInfo?.name || brand
    : category
      ? category
      : "All Products";

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-emerald-500 text-white py-8 px-4 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-emerald-100 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/brands" className="hover:text-white transition-colors">
              Brands
            </Link>
            {brand && (
              <>
                <span>/</span>
                <span className="text-white capitalize">{currentTitle}</span>
              </>
            )}
          </div>

    
          <div className="flex items-center gap-4">
            {activeBrandInfo?.image ? (
              <div className="w-16 h-16 bg-white rounded-2xl p-2 shadow-sm flex items-center justify-center relative overflow-hidden">
                <Image
                  src={activeBrandInfo.image}
                  alt={currentTitle}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center font-bold text-2xl">
                {currentTitle.charAt(0).toUpperCase()}
              </div>
            )}

            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold capitalize">
                {currentTitle}
              </h1>
              <p className="text-emerald-100 text-xs sm:text-sm mt-0.5">
                Shop {currentTitle} products
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto max-w-7xl px-4 py-6">
        {!brand && !category && allBrands.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-8 border-b border-gray-100 mb-6">
            {allBrands.map((b: any) => (
              <Link
                key={b._id}
                href={`/brands?brand=${encodeURIComponent(b.name)}`}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 relative">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center">
                  {b.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      
        {(brand || category) && (
          <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 pb-4 border-b border-gray-100">
            <span className="flex items-center gap-1.5 font-medium text-gray-600">
              <Filter size={15} />
              Active Filters:
            </span>

 
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 font-medium">
              <Tag size={13} />
              <span className="capitalize">{brand || category}</span>
              <Link href="/Product" className="hover:text-purple-900 ml-1">
                <X size={13} />
              </Link>
            </div>

   
            <Link
              href="/Product"
              className="text-xs text-gray-500 hover:text-red-500 hover:underline transition-colors"
            >
              Clear all
            </Link>
          </div>
        )}

   
        <div className="text-sm text-gray-500 my-5 font-medium">
          Showing {filteredProducts.length} products
        </div>


        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No products found matching this filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product: any) => (
              <div
                key={product._id}
                className="bg-white border border-gray-100 rounded-2xl p-4 shadow-2xs hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between"
              >
      
                <div className="flex justify-between items-start mb-3">
                  {/* شارة الخصم */}
                  {product.priceAfterDiscount ? (
                    <span className="bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                      -
                      {Math.round(
                        ((product.price - product.priceAfterDiscount) /
                          product.price) *
                          100,
                      )}
                      %
                    </span>
                  ) : (
                    <span />
                  )}

                  <div className="flex flex-col gap-2 text-gray-400">
                    <button className="hover:text-red-500 transition-colors cursor-pointer">
                      <Heart size={18} />
                    </button>
                    <button className="hover:text-gray-700 transition-colors cursor-pointer">
                      <RefreshCw size={17} />
                    </button>
                    <button className="hover:text-gray-700 transition-colors cursor-pointer">
                      <Eye size={18} />
                    </button>
                  </div>
                </div>

           
                <div className="relative w-full h-44 mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.imageCover}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

             
                <div>
                  <h3 className="font-semibold text-sm text-gray-800 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold text-emerald-600 text-base">
                      {product.priceAfterDiscount || product.price} EGP
                    </span>
                    {product.priceAfterDiscount && (
                      <span className="text-xs text-gray-400 line-through">
                        {product.price} EGP
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
