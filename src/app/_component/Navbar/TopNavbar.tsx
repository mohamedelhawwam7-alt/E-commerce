"use client";

import { GiftIcon, Van, MessagesSquare, UserPlus, User, LogOut } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoCall } from "react-icons/io5";
import { useAuth } from "@/context/AuthContext";

export default function TopNavbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
    router.refresh();
  };

  return (
    <>
    
      <div className="hidden md:flex container mx-auto px-4 justify-between items-center">
        <div className="flex gap-5">
          <span className="flex gap-1 text-sm justify-center text-gray-500 items-center">
            <Van size={18} className="text-green-500" /> Free Shipping on Orders
            500 EGP
          </span>
          <span className="flex gap-1 text-sm justify-center text-gray-500 items-center">
            <GiftIcon size={18} className="text-green-500" /> New Arrivals Daily
          </span>
        </div>

        <div className="flex items-center gap-5 py-2">
          <a
            href="tel:+18001234567"
            className="flex gap-1.5 text-xs sm:text-sm justify-center text-gray-600 hover:text-emerald-700 items-center transition-colors group"
          >
            <IoCall
              size={16}
              className="text-gray-400 group-hover:text-emerald-600"
            />
            <span className="font-medium">+1 (800) 123-4567</span>
          </a>

          <a
            href="mailto:support@freshcart.com"
            className="flex gap-1.5 text-xs sm:text-sm justify-center text-gray-600 hover:text-emerald-700 items-center transition-colors group"
          >
            <MessagesSquare
              size={16}
              className="text-gray-400 group-hover:text-emerald-600"
            />
            <span className="font-medium">support@freshcart.com</span>
          </a>

          <p className="w-px h-4 bg-gray-300"></p>

          {isAuthenticated ? (
            <button
              type="button"
              onClick={handleLogout}
              className="flex gap-1.5 text-xs sm:text-sm justify-center text-gray-600 hover:text-emerald-700 items-center transition-colors group cursor-pointer"
            >
              <LogOut
                size={16}
                className="text-gray-400 group-hover:text-emerald-600"
              />
              <span className="font-medium">Sign Out ({user?.name})</span>
            </button>
          ) : (
            <>
              <Link
                href="/signin"
                className="flex gap-1.5 text-xs sm:text-sm justify-center text-gray-600 hover:text-emerald-700 items-center transition-colors group cursor-pointer"
              >
                <User
                  size={16}
                  className="text-gray-400 group-hover:text-emerald-600"
                />
                <span className="font-medium">Sign In</span>
              </Link>

              <Link
                href="/signup"
                className="flex gap-1.5 text-xs sm:text-sm justify-center text-gray-600 hover:text-emerald-700 items-center transition-colors group cursor-pointer"
              >
                <UserPlus
                  size={16}
                  className="text-gray-400 group-hover:text-emerald-600"
                />
                <span className="font-medium">Sign Up</span>
              </Link>
            </>
          )}
        </div>
      </div>

      <hr className="hidden md:block text-gray-200" />
    </>
  );
}