import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Database,
  UserCheck,
  Lock,
  Share2,
  UserCog,
  Cookie,
  ArrowLeft,
  ArrowRight,
  Headset,
  RotateCcw,
  Shield,
  VanIcon,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (<>
  <div className="min-h-screen bg-gray-50/40 pb-16">
   
      <div className="w-full bg-[#16a34a] text-white py-12 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
     
          <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </div>

       
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xs">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-emerald-100 text-xs sm:text-sm mt-1">
                Last updated: February 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 mt-8">
     
        <div className="bg-[#ecfdf5] border border-emerald-100 rounded-3xl p-6 sm:p-7 mb-8 flex items-start gap-4 shadow-2xs">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-emerald-950 text-base mb-1">
              Your Privacy Matters
            </h3>
            <p className="text-emerald-900/80 text-xs sm:text-sm leading-relaxed">
              This Privacy Policy describes how FreshCart collects, uses, and
              protects your personal information when you use our services. We
              are committed to ensuring that your privacy is protected.
            </p>
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Article 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                  ARTICLE 1
                </span>
                <h4 className="font-bold text-gray-900 text-base">
                  Information We Collect
                </h4>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  1.1
                </span>
                <span>
                  <strong className="text-gray-900 font-semibold">
                    Personal Data:
                  </strong>{" "}
                  Name, email address, phone number, and shipping address.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  1.2
                </span>
                <span>
                  <strong className="text-gray-900 font-semibold">
                    Payment Data:
                  </strong>{" "}
                  Credit card information processed securely through our payment
                  providers.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  1.3
                </span>
                <span>
                  <strong className="text-gray-900 font-semibold">
                    Technical Data:
                  </strong>{" "}
                  IP address, browser type, device information, and access
                  times.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  1.4
                </span>
                <span>
                  <strong className="text-gray-900 font-semibold">
                    Usage Data:
                  </strong>{" "}
                  Pages viewed, products browsed, and actions taken within our
                  platform.
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
                  How We Use Your Information
                </h4>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  2.1
                </span>
                <span>To process and fulfill your orders.</span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  2.2
                </span>
                <span>To send order confirmations and shipping updates.</span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  2.3
                </span>
                <span>
                  To provide customer support and respond to inquiries.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  2.4
                </span>
                <span>
                  To improve our products, services, and user experience.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  2.5
                </span>
                <span>
                  To send promotional communications (with your consent).
                </span>
              </li>
            </ul>
          </div>

      
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                  ARTICLE 3
                </span>
                <h4 className="font-bold text-gray-900 text-base">
                  Data Protection
                </h4>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  3.1
                </span>
                <span>
                  We implement industry-standard encryption (SSL/TLS) for all
                  data transfers.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  3.2
                </span>
                <span>
                  Payment information is processed by PCI-compliant payment
                  providers.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  3.3
                </span>
                <span>
                  We conduct regular security audits and vulnerability
                  assessments.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  3.4
                </span>
                <span>
                  Access to personal data is restricted to authorized personnel
                  only.
                </span>
              </li>
            </ul>
          </div>

         
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                  ARTICLE 4
                </span>
                <h4 className="font-bold text-gray-900 text-base">
                  Information Sharing
                </h4>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  4.1
                </span>
                <span>
                  We do not sell, trade, or rent your personal information to
                  third parties.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  4.2
                </span>
                <span>
                  We may share data with trusted service providers who assist in
                  our operations.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  4.3
                </span>
                <span>
                  We may disclose information when required by law or to protect
                  our rights.
                </span>
              </li>
            </ul>
          </div>

         
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <UserCog className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                  ARTICLE 5
                </span>
                <h4 className="font-bold text-gray-900 text-base">
                  Your Rights
                </h4>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  5.1
                </span>
                <span>
                  <strong className="text-gray-900 font-semibold">
                    Access:
                  </strong>{" "}
                  Request a copy of your personal data.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  5.2
                </span>
                <span>
                  <strong className="text-gray-900 font-semibold">
                    Rectification:
                  </strong>{" "}
                  Request correction of inaccurate data.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  5.3
                </span>
                <span>
                  <strong className="text-gray-900 font-semibold">
                    Erasure:
                  </strong>{" "}
                  Request deletion of your personal data within 30 days of
                  account closure upon request.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  5.4
                </span>
                <span>
                  <strong className="text-gray-900 font-semibold">
                    Portability:
                  </strong>{" "}
                  Request your data in a portable format.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  5.5
                </span>
                <span>
                  <strong className="text-gray-900 font-semibold">
                    Opt-out:
                  </strong>{" "}
                  Unsubscribe from marketing communications at any time.
                </span>
              </li>
            </ul>
          </div>

          
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-2xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                  ARTICLE 6
                </span>
                <h4 className="font-bold text-gray-900 text-base">Cookies</h4>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  6.1
                </span>
                <span>
                  We use cookies to enhance your browsing experience and
                  remember preferences.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  6.2
                </span>
                <span>
                  You can control cookie settings through your browser
                  preferences.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold shrink-0 border border-emerald-100">
                  6.3
                </span>
                <span>
                  Disabling cookies may affect the functionality of certain
                  features.
                </span>
              </li>
            </ul>
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
            href="/terms"
            className="h-11 px-6 rounded-2xl bg-[#16a34a] hover:bg-[#15803d] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs flex items-center gap-2"
          >
            <span>View Terms of Service</span>
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
