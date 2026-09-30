"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Search,
  ChevronDown,
  Headphones,
  Heart,
  ShoppingCart,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useApp } from "@/context/CartWishlistContext";
import { useAuth } from "@/context/AuthContext";
import { getCategories } from "@/lib/api";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const path = usePathname();
  const router = useRouter();
  const { cartCount, wishlistCount } = useApp();
  const { user, isAuthenticated, logout } = useAuth();
  const [navCategories, setNavCategories] = useState<any[]>([]);

  useEffect(() => {
    getCategories().then(data => setNavCategories(data.slice(0, 6)));
  }, []);

  const handleLogout = () => {
    logout();
    setAccountOpen(false);
    router.push("/");
    router.refresh();
  };

  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/Product?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3 xl:gap-6">
   
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative flex items-center justify-center">
              <ShoppingCart
                className="w-7 h-7 text-[#16a34a]"
                strokeWidth={2.4}
              />
            </div>
            <span className="text-2xl font-black text-slate-800 tracking-tight font-sans">
              Fresh<span className="text-[#16a34a]">Cart</span>
            </span>
          </Link>

   
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-md relative items-center"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search for products, brands and more..."
              className="w-full h-11 pl-5 pr-12 rounded-full border border-gray-200 bg-white text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#16a34a] focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-2xs"
            />
            <button
              type="submit"
              className="absolute right-1 w-9 h-9 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
            >
              <Search className="w-4 h-4" strokeWidth={2.4} />
            </button>
          </form>

      
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                path === "/"
                  ? "text-[#16a34a] font-bold"
                  : "text-slate-700 hover:text-[#16a34a]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/Product"
              className={`text-sm font-medium transition-colors ${
                path === "/Product"
                  ? "text-[#16a34a] font-bold"
                  : "text-slate-700 hover:text-[#16a34a]"
              }`}
            >
              Shop
            </Link>

          
            <div
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer py-2 ${
                  path.startsWith("/categories")
                    ? "text-[#16a34a] font-bold"
                    : "text-slate-700 hover:text-[#16a34a]"
                }`}
              >
                <span>Categories</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    categoriesOpen
                      ? "rotate-180 text-[#16a34a]"
                      : "text-gray-400"
                  }`}
                />
              </button>

              {categoriesOpen && (
                <div className="absolute top-full -left-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="/categories"
                    className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-emerald-50 hover:text-[#16a34a] transition-colors"
                  >
                    All Categories
                  </Link>
                  {navCategories.map(cat => (
                    <Link
                      key={cat._id}
                      href={`/Product?category=${encodeURIComponent(cat.name)}&catId=${cat._id}`}
                      className="block px-4 py-2 text-xs text-gray-600 hover:bg-emerald-50 hover:text-[#16a34a] transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/brands"
              className={`text-sm font-medium transition-colors ${
                path === "/brands"
                  ? "text-[#16a34a] font-bold"
                  : "text-slate-700 hover:text-[#16a34a]"
              }`}
            >
              Brands
            </Link>
          </div>

     
          <Link
            href="/contact"
            className="hidden xl:flex items-center gap-2.5 text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#16a34a] flex items-center justify-center group-hover:bg-emerald-100 transition-colors shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] text-gray-400 font-medium leading-tight">
                Support
              </span>
              <span className="block text-xs font-bold text-slate-800 leading-tight">
                24/7 Help
              </span>
            </div>
          </Link>

   
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden xl:block h-6 w-px bg-gray-200" />

    
            <Link
              href="/liked"
              className="relative p-2 text-slate-600 hover:text-rose-500 transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </Link>

      
            <Link
              href="/shoppingcar"
              className="relative p-2 text-slate-600 hover:text-[#16a34a] transition-colors"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#16a34a] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div
                className="relative hidden sm:block"
                onMouseEnter={() => setAccountOpen(true)}
                onMouseLeave={() => setAccountOpen(false)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-emerald-50 text-[#16a34a] text-xs sm:text-sm font-semibold cursor-pointer"
                >
                  <User className="w-4 h-4" />
                  <span className="max-w-24 truncate">{user?.name || "Account"}</span>
                </button>

                {accountOpen && (
                  <div className="absolute top-full right-0 w-44 bg-white border border-gray-100 rounded-2xl shadow-lg py-2 z-50">
                    <Link
                      href="/account"
                      className="w-full flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-emerald-50 hover:text-[#16a34a] transition-colors cursor-pointer"
                    >
                      <User className="w-4 h-4" />
                      My Account
                    </Link>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-emerald-50 hover:text-[#16a34a] transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/signin"
                className="hidden sm:inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            )}

 
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3 shadow-md">
  
          <form
            onSubmit={handleSearch}
            className="relative flex items-center mb-2"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full h-10 pl-4 pr-10 rounded-full border border-gray-200 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#16a34a]"
            />
            <button
              type="submit"
              className="absolute right-1 w-8 h-8 rounded-full bg-[#16a34a] text-white flex items-center justify-center"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </form>

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-700 hover:text-[#16a34a]"
          >
            Home
          </Link>
          <Link
            href="/Product"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-700 hover:text-[#16a34a]"
          >
            Shop
          </Link>
          <Link
            href="/categories"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-700 hover:text-[#16a34a]"
          >
            Categories
          </Link>
          <Link
            href="/brands"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-700 hover:text-[#16a34a]"
          >
            Brands
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-semibold text-gray-700 hover:text-[#16a34a]"
          >
            Support 24/7
          </Link>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            {isAuthenticated ? (
              <>
                <Link
                  href="/account"
                  onClick={() => setIsOpen(false)}
                  className="w-full h-10 rounded-full bg-emerald-50 text-[#16a34a] text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4" />
                  My Account
                </Link>
                <button
                type="button"
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full h-10 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out ({user?.name})</span>
              </button>
              </>
            ) : (
              <Link
                href="/signin"
                onClick={() => setIsOpen(false)}
                className="w-full h-10 rounded-full bg-[#16a34a] text-white text-xs font-semibold flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
