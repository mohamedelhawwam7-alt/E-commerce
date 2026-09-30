"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, AlertCircle, Mail, KeyRound, Lock } from "lucide-react";
import { forgotPassword, verifyResetCode, resetPassword, ApiError } from "@/lib/api";

type Step = "email" | "code" | "password" | "done";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);
    try {
      await forgotPassword(email);
      setStep("code");
    } catch (err) {
      setErrorMsg(err instanceof ApiError ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);
    try {
      await verifyResetCode(code);
      setStep("password");
    } catch (err) {
      setErrorMsg(err instanceof ApiError ? err.message : "Invalid or expired code.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);
    try {
      await resetPassword(email, newPassword);
      setStep("done");
      setTimeout(() => router.push("/signin"), 1500);
    } catch (err) {
      setErrorMsg(err instanceof ApiError ? err.message : "Could not reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-xs p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Forgot Password
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {step === "email" && "Enter your email to receive a reset code."}
          {step === "code" && "Enter the reset code sent to your email."}
          {step === "password" && "Choose a new password."}
          {step === "done" && "Your password has been reset."}
        </p>

        {errorMsg && (
          <div className="flex items-center gap-2 bg-red-50 text-red-600 text-sm font-medium px-4 py-3 rounded-xl mb-4">
            <AlertCircle size={18} />
            {errorMsg}
          </div>
        )}

        {step === "email" && (
          <form onSubmit={handleSendCode} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                required
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:border-emerald-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold py-2.5 rounded-xl cursor-pointer"
            >
              {loading && <Loader2 size={18} className="animate-spin" />}
              Send Reset Code
            </button>
          </form>
        )}

        {step === "code" && (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                required
                value={code}
                onChange={e => setCode(e.target.value)}
                placeholder="Reset code"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:border-emerald-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold py-2.5 rounded-xl cursor-pointer"
            >
              {loading && <Loader2 size={18} className="animate-spin" />}
              Verify Code
            </button>
          </form>
        )}

        {step === "password" && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                required
                type="password"
                minLength={6}
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                placeholder="New password"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:border-emerald-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold py-2.5 rounded-xl cursor-pointer"
            >
              {loading && <Loader2 size={18} className="animate-spin" />}
              Reset Password
            </button>
          </form>
        )}

        {step === "done" && (
          <p className="text-emerald-600 font-semibold text-sm">
            Redirecting to sign in...
          </p>
        )}

        <p className="text-sm text-gray-500 mt-6 text-center">
          <Link href="/signin" className="text-emerald-600 font-semibold hover:underline">
            Back to Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
