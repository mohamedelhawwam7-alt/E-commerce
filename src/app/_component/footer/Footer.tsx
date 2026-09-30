import React from "react";
import { MessagesSquare, ShoppingCart, MapPin } from "lucide-react";
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import Link from "next/link";
import {  GrPaypal, GrVisa } from "react-icons/gr";

import { SiMastercard } from "react-icons/si";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-8">
            <div className="lg:col-span-4 gap-3 flex flex-col list-none">
              <div className="bg-white rounded-2xl px-4 py-2 flex w-fit items-center gap-2">
                <ShoppingCart className="text-green-500" />
                <h1 className="text-black font-sans font-bold text-3xl">
                  FreshCart
                </h1>
              </div>
              <ul>
                <li>
                  <span className="text-gray-400 text-sm leading-relaxed">
                    FreshCart is your one-stop destination for quality products.
                    From fashion to electronics, we bring you the best brands at
                    competitive prices with a seamless shopping experience.
                  </span>
                </li>

                <li className="pt-2">
                  <a
                    href="tel:+18001234567"
                    className="flex gap-2 text-xs sm:text-sm text-gray-400 hover:text-emerald-400 items-center transition-colors group"
                  >
                    <IoCall
                      size={16}
                      className="text-emerald-500 group-hover:text-emerald-400"
                    />
                    <span className="font-medium">+1 (800) 123-4567</span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:support@freshcart.com"
                    className="flex gap-2 text-xs sm:text-sm text-gray-400 hover:text-emerald-400 items-center transition-colors group"
                  >
                    <MessagesSquare
                      size={16}
                      className="text-emerald-500 group-hover:text-emerald-400"
                    />
                    <span className="font-medium">support@freshcart.com</span>
                  </a>
                </li>

                <li>
                  <span className="text-gray-400 flex items-center gap-2 text-xs sm:text-sm">
                    <MapPin size={16} className="text-emerald-500 shrink-0" />
                    123 Commerce Street, New York, NY 10001
                  </span>
                </li>

               
                <div className="flex items-center gap-3 pt-3">
                  <li>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                    >
                      <FaFacebook className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-gray-800 hover:bg-sky-500 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                    >
                      <FaTwitter className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                    >
                      <FaInstagram className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-gray-800 hover:bg-emerald-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                    >
                      <FaYoutube className="w-4 h-4" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="lg:col-span-2 gap-3 flex flex-col list-none">
              <ul className="gap-3 flex flex-col list-none">
                <h3 className="font-bold text-white mb-1">Shop</h3>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/Product">All Products</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/categories">Categories</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <a href="/brands">Brands</a>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/Product?category=electronics">Electronics</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/Product?category=men">Men's Fashion</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/Product?category=women">Women's Fashion</Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 gap-3 flex flex-col list-none">
              <ul className="gap-3 flex flex-col list-none">
                <h3 className="font-bold text-white mb-1">Account</h3>
                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/signin">My Accound</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/signin">Order History</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <a href="/liked">Wishlist</a>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/shoppingcar">Shopping Cart</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/signin">Sing In</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/signup">Create Account</Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 gap-3 flex flex-col list-none">
              <ul className="gap-3 flex flex-col list-none">
                <h3 className="font-bold text-white mb-1">Support</h3>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/contact">Contact Us</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/notfound">Help Center</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <a href="/notfound">Shipping Center</a>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/notfound">Returns & Refunds</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/notfound">Track Order</Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 gap-3 flex flex-col list-none">
              <ul className="gap-3 flex flex-col list-none">
                <h3 className="font-bold text-white mb-1">Legal</h3>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/privacy">Privacy Policy</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Link href="/terms">Terms of Service</Link>
                </li>

                <li className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <a href="/notfound">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <p className="border mt-4 border-gray-400   w-100%"></p>

          <div className="mt-3 flex justify-between items-center sm:text-sm sm:flex-col">
            <p className="text-gray-400">
              © 2026 FreshCart. All rights reserved.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm ">
              <p className="text-gray-400 flex gap-2 items-center">
                <GrVisa />
                Visa
              </p>
              <p className="text-gray-400 flex gap-2 items-center">
                <SiMastercard />
                Mastercard
              </p>
              <p className="text-gray-400 flex gap-2 items-center">
                <GrPaypal />
                PayPal
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
