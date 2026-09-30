import React from "react";
import Link from "next/link";
import {
  FileText,
  AlertTriangle,
  Handshake,
  UserCheck,
  CreditCard,
  Truck,
  RotateCcw,
  Scale,
  Mail,
  ArrowLeft,
  ArrowRight,
  VanIcon,
  Shield,
  Headset,
} from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50/40 pb-16">
      
        <div className="w-full bg-[#16a34a] text-white py-12 px-4 sm:px-8">
          <div className="container mx-auto max-w-6xl">
            
            <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Terms of Service</span>
            </div>

           
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xs">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Terms of Service
                </h1>
                <p className="text-emerald-100 text-xs sm:text-sm mt-1">
                  Last updated: February 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 mt-8">
        
          <div className="bg-[#fffbeb] border border-amber-200 rounded-3xl p-6 sm:p-7 mb-8 flex items-start gap-4 shadow-2xs">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-amber-950 text-base mb-1">
                Important Notice
              </h3>
              <p className="text-amber-900/80 text-xs sm:text-sm leading-relaxed">
                By accessing and using FreshCart, you accept and agree to be
                bound by the terms and provisions of this agreement. Please read
                these terms carefully before using our services.
              </p>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                    ARTICLE 1
                  </span>
                  <h4 className="font-bold text-gray-900 text-base">
                    Acceptance of Terms
                  </h4>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    1.1
                  </span>
                  <span>
                    By accessing or using the Service, you acknowledge that you
                    have read, understood, and agree to be bound by these Terms.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    1.2
                  </span>
                  <span>
                    If you do not agree to these Terms, you must not access or
                    use the Service.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    1.3
                  </span>
                  <span>
                    We reserve the right to modify these Terms at any time, and
                    such modifications shall be effective immediately upon
                    posting.
                  </span>
                </li>
              </ul>
            </div>

         
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                    ARTICLE 2
                  </span>
                  <h4 className="font-bold text-gray-900 text-base">
                    User Eligibility
                  </h4>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    2.1
                  </span>
                  <span>
                    The Service is intended for users who are at least eighteen
                    (18) years of age.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    2.2
                  </span>
                  <span>
                    By using the Service, you represent and warrant that you are
                    of legal age to form a binding contract.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    2.3
                  </span>
                  <span>
                    If you are accessing the Service on behalf of a legal
                    entity, you represent that you have the authority to bind
                    such entity.
                  </span>
                </li>
              </ul>
            </div>

            
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                    ARTICLE 3
                  </span>
                  <h4 className="font-bold text-gray-900 text-base">
                    Account Registration
                  </h4>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    3.1
                  </span>
                  <span>
                    You may be required to create an account to access certain
                    features of the Service.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    3.2
                  </span>
                  <span>
                    You agree to provide accurate, current, and complete
                    information during registration.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    3.3
                  </span>
                  <span>
                    You are solely responsible for maintaining the
                    confidentiality of your account credentials.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    3.4
                  </span>
                  <span>
                    You agree to notify us immediately of any unauthorized use
                    of your account.
                  </span>
                </li>
              </ul>
            </div>

          
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                    ARTICLE 4
                  </span>
                  <h4 className="font-bold text-gray-900 text-base">
                    Orders and Payments
                  </h4>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    4.1
                  </span>
                  <span>
                    All orders placed through the Service are subject to
                    acceptance and availability.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    4.2
                  </span>
                  <span>
                    Prices are subject to change without notice prior to order
                    confirmation.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    4.3
                  </span>
                  <span>
                    Payment must be made in full at the time of purchase through
                    approved payment methods.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    4.4
                  </span>
                  <span>
                    We reserve the right to refuse or cancel any order at our
                    sole discretion.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                    ARTICLE 5
                  </span>
                  <h4 className="font-bold text-gray-900 text-base">
                    Shipping and Delivery
                  </h4>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    5.1
                  </span>
                  <span>
                    Shipping times are estimates only and are not guaranteed.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    5.2
                  </span>
                  <span>
                    Risk of loss and title for items purchased pass to you upon
                    delivery to the carrier.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    5.3
                  </span>
                  <span>
                    We are not responsible for delays caused by carriers,
                    customs, or other factors beyond our control.
                  </span>
                </li>
              </ul>
            </div>

           
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                    ARTICLE 6
                  </span>
                  <h4 className="font-bold text-gray-900 text-base">
                    Returns and Refunds
                  </h4>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    6.1
                  </span>
                  <span>
                    Our return policy allows returns within 14 days of delivery
                    for most items.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    6.2
                  </span>
                  <span>
                    Products must be unused and in original packaging.
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                    6.3
                  </span>
                  <span>
                    Refunds will be processed within 5-7 business days after
                    receiving the returned item.
                  </span>
                </li>
              </ul>
            </div>

            
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                    ARTICLE 7
                  </span>
                  <h4 className="font-bold text-gray-900 text-base">
                    Limitation of Liability
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To the maximum extent permitted by applicable law, FreshCart
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenues, whether incurred directly or indirectly.
              </p>
            </div>

         
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                    ARTICLE 8
                  </span>
                  <h4 className="font-bold text-gray-900 text-base">
                    Contact Us
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                If you have any questions about these Terms, please contact us
                at{" "}
                <a
                  href="mailto:support@freshcart.com"
                  className="text-emerald-600 font-semibold hover:underline"
                >
                  support@freshcart.com
                </a>
              </p>
            </div>
          </div>

        
          <div className="mt-12 pt-6 border-t border-gray-200/80 flex items-center justify-between">
            <Link
              href="/"
              className="h-11 px-5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/privacy"
              className="h-11 px-6 rounded-2xl bg-[#16a34a] hover:bg-[#15803d] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs flex items-center gap-2"
            >
              <span>View Privacy Policy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
