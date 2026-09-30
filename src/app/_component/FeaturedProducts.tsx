import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/api";
import ProductCardActions from "@/app/(pages)/ProductDetails/AddToCartActions";

const FEATURED_COUNT = 8;

export default async function FeaturedProducts() {
  const allProducts = await getProducts();
  const products = allProducts.slice(0, FEATURED_COUNT);

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-6 bg-emerald-600 rounded-full inline-block"></span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Featured <span className="text-emerald-600">Products</span>
          </h2>
        </div>

        <Link
          href="/Product"
          className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          View All Products
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map(product => (
          <Link
            key={product._id}
            href={`/ProductDetails/${product._id}`}
            className="relative bg-white p-4 rounded-xl border border-gray-100 shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
              <ProductCardActions
                product={{
                  id: product._id,
                  title: product.title,
                  price: product.priceAfterDiscount || product.price,
                  imageCover: product.imageCover,
                }}
              />
            </div>
            <div>
              <div className="relative w-full h-48 mb-3 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                <Image
                  src={product.imageCover}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold uppercase block mb-1">
                {product?.category?.name}
              </span>
              <h3 className="font-semibold text-sm text-gray-800 line-clamp-1 group-hover:text-emerald-600">
                {product.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <span className="text-emerald-600 font-bold">
                {product.priceAfterDiscount || product.price} EGP
              </span>
              {product.priceAfterDiscount && (
                <span className="text-xs text-gray-400 line-through">
                  {product.price} EGP
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
