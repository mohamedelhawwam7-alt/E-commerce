import React from "react";
import Link from "next/link";


async function getProducts() {
  try {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/products", {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    return [];
  }
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?:
    | Promise<{
        category?: string;
        catId?: string;
        subcategory?: string;
        subId?: string;
        brand?: string;
      }>
    | {
        category?: string;
        catId?: string;
        subcategory?: string;
        subId?: string;
        brand?: string;
      };
}) {
  
  const resolvedParams = searchParams
    ? await Promise.resolve(searchParams)
    : {};

  const category = (resolvedParams?.category || "").trim().toLowerCase();
  const catId = (resolvedParams?.catId || "").trim();
  const subcategory = (resolvedParams?.subcategory || "").trim().toLowerCase();
  const subId = (resolvedParams?.subId || "").trim();
  const brand = (resolvedParams?.brand || "").trim().toLowerCase();

  const allProducts = await getProducts();

  const filteredProducts = allProducts.filter((product: any) => {
    const prodTitle = product?.title?.toLowerCase() || "";
    const prodDesc = product?.description?.toLowerCase() || "";
    const prodCatName = product?.category?.name?.toLowerCase() || "";
    const prodCatId = product?.category?._id || product?.category || "";
    const prodBrandName = product?.brand?.name?.toLowerCase() || "";

   
    const subList = Array.isArray(product?.subcategory)
      ? product.subcategory
      : [];
    const prodSubIds = subList.map((s: any) =>
      typeof s === "string" ? s : s?._id || "",
    );
    const prodSubNames = subList.map((s: any) =>
      typeof s === "object" && s?.name ? s.name.toLowerCase() : "",
    );

    
    if (subId || subcategory) {
      const matchId = subId && prodSubIds.includes(subId);
      const matchName =
        subcategory &&
        prodSubNames.some(
          (name: string) =>
            name.includes(subcategory) || subcategory.includes(name),
        );

     
      const matchKeywords =
        subcategory &&
        (prodTitle.includes(subcategory) ||
          prodDesc.includes(subcategory) ||
          (subcategory.includes("computer") &&
            (prodTitle.includes("laptop") ||
              prodTitle.includes("pc") ||
              prodTitle.includes("mouse") ||
              prodTitle.includes("keyboard") ||
              prodTitle.includes("intel") ||
              prodTitle.includes("screen") ||
              prodCatName.includes("electronics"))));

      if (!matchId && !matchName && !matchKeywords) {
        return false;
      }
    }


    if (catId || category) {
      const matchCatId = catId && prodCatId === catId;
      let matchCatName = false;

      if (category === "men") {
        matchCatName =
          prodCatName.includes("men") && !prodCatName.includes("women");
      } else if (category === "women") {
        matchCatName = prodCatName.includes("women");
      } else if (category === "electronics") {
        matchCatName =
          prodCatName.includes("electronic") ||
          prodCatName.includes("computer") ||
          prodTitle.includes("laptop") ||
          prodTitle.includes("tv");
      } else if (category) {
        matchCatName =
          prodCatName.includes(category) || prodTitle.includes(category);
      }

      if (!matchCatId && !matchCatName && !subcategory) {
        return false;
      }
    }


    if (brand) {
      if (!prodBrandName.includes(brand) && !brand.includes(prodBrandName)) {
        return false;
      }
    }

    return true;
  });

  const activeFilterName =
    resolvedParams?.subcategory ||
    resolvedParams?.brand ||
    resolvedParams?.category ||
    "";

  const pageTitle = activeFilterName
    ? `${activeFilterName} Products`
    : "All Products";

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 capitalize">
            {pageTitle}
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Showing {filteredProducts.length} results
          </p>
        </div>

        {activeFilterName && (
          <Link
            href="/Product"
            className="text-xs text-emerald-600 font-semibold hover:underline"
          >
            Clear Filter (Show All)
          </Link>
        )}
      </div>


      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No products found matching &quot;{activeFilterName}&quot;.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredProducts.map((product: any) => (
            <Link
              key={product._id}
              href={`/ProductDetails/${product._id}`}
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-48 mb-3 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <img
                    src={product.imageCover}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
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
      )}
    </div>
  );
}
