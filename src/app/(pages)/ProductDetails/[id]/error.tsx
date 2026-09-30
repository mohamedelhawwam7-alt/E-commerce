"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, AlertTriangle, ArrowLeft } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
        <AlertTriangle size={28} />
      </div>
      <h2 className="text-xl font-bold text-gray-900">
        We couldn&apos;t load this product
      </h2>
      <p className="text-sm text-gray-500 max-w-sm">
        Something went wrong while fetching this product. Please try again.
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors cursor-pointer"
        >
          <RefreshCw size={16} />
          Try Again
        </button>
        <Link
          href="/Product"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-semibold transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>
      </div>
    </div>
  );
}
