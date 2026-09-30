"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle, Van, Shield, Watch, VanIcon, RotateCcw, Headset } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useAuth, ApiError } from "@/context/AuthContext";

export default function SignInPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [heroImgSrc, setHeroImgSrc] = useState(
    "https://freshcart-next.vercel.app/images/login-img.png",
  );
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      await login(formData.email, formData.password);

      if (keepSignedIn) {
        localStorage.setItem("keepSignedIn", "true");
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      if (err instanceof ApiError) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Something went wrong. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (<>
  <div className="w-full bg-gray-50/40 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-full bg-linear-to-b from-gray-50/70 to-emerald-50/30 border border-gray-100 rounded-3xl p-6 sm:p-8 flex items-center justify-center mb-8 relative overflow-hidden shadow-2xs">
              <Image
                src={heroImgSrc}
                alt="FreshCart Shopping Cart"
                width={340}
                height={280}
                priority
                onError={() =>
                  setHeroImgSrc(
                    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
                  )
                }
                className="w-full max-w-340px h-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mb-3">
              FreshCart - Your One-Stop Shop for Fresh Products
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Join thousands of happy customers who trust FreshCart for their
              daily groceries and organic needs.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center gap-2 mt-3">
                <div>
                  {" "}
                  <Van size={15} className="text-green-500" />
                </div>
                Free Delivery
              </div>
              <div className="flex items-center  gap-2 mt-3">
                <div>
                  <Shield size={15} className="text-green-500" />
                </div>
                Secure Payment
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div>
                  {" "}
                  <Watch size={15} className="text-green-500" />
                </div>
                24/7 Support
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 w-full max-w-md mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Welcome Back!
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Sign in to continue your fresh shopping experience
              </p>
            </div>

          
            <div className="space-y-3 mb-6">
              <button
                type="button"
                className="w-full h-11 border border-gray-200 hover:border-gray-300 rounded-xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50/60 transition-colors shadow-2xs cursor-pointer"
              >
                <FcGoogle className="text-lg" />
                <span>Continue with Google</span>
              </button>

              <button
                type="button"
                className="w-full h-11 border border-gray-200 hover:border-gray-300 rounded-xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50/60 transition-colors shadow-2xs cursor-pointer"
              >
                <FaFacebook className="text-blue-600 text-lg" />
                <span>Continue with Facebook</span>
              </button>
            </div>

          
            <div className="relative flex items-center justify-center mb-6">
              <div className="w-full border-t border-gray-200" />
              <span className="bg-white px-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider absolute">
                OR CONTINUE WITH EMAIL
              </span>
            </div>

          
            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

       
            <form onSubmit={handleSubmit} className="space-y-4">
        
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full h-11 pl-10 pr-4 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-gray-700">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full h-11 pl-10 pr-10 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              
              <div className="flex items-center pt-1">
                <input
                  id="keep-signed"
                  type="checkbox"
                  checked={keepSignedIn}
                  onChange={e => setKeepSignedIn(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer accent-emerald-600"
                />
                <label
                  htmlFor="keep-signed"
                  className="ml-2 text-xs text-gray-600 cursor-pointer select-none"
                >
                  Keep me signed in
                </label>
              </div>

              
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-semibold rounded-xl text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing In...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            
            <p className="text-center text-xs text-gray-500 mt-6">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-emerald-600 font-bold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      
    </div><div className="px-4  w-full bg-green-100 mx-auto py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </div></>
    
  );
}
