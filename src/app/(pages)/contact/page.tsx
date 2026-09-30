"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Headphones,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  HelpCircle,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

  
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50/40 pb-16">
      
      <div className="w-full bg-[#16a34a] text-white py-12 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </div>

         
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xs">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Contact Us
              </h1>
              <p className="text-emerald-100 text-xs sm:text-sm mt-1">
                We&apos;d love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </div>

   
      <div className="container mx-auto max-w-6xl px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         
          <div className="lg:col-span-4 space-y-4">
       
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Phone</h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  Mon-Fri from 8am to 6pm
                </p>
                <a
                  href="tel:+18001234567"
                  className="inline-block mt-2 text-xs sm:text-sm font-semibold text-emerald-600 hover:underline"
                >
                  +1 (800) 123-4567
                </a>
              </div>
            </div>

            
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Email</h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  We&apos;ll respond within 24 hours
                </p>
                <a
                  href="mailto:support@freshcart.com"
                  className="inline-block mt-2 text-xs sm:text-sm font-semibold text-emerald-600 hover:underline"
                >
                  support@freshcart.com
                </a>
              </div>
            </div>

            
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Office</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  123 Commerce Street
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>

           
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Business Hours
                </h4>
                <div className="text-xs text-gray-500 mt-1 space-y-0.5 leading-relaxed">
                  <p>Monday - Friday: 8am - 6pm</p>
                  <p>Saturday: 9am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

           
            <div className="pt-2">
              <h5 className="font-bold text-gray-800 text-sm mb-3">
                Follow Us
              </h5>
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-emerald-600 text-gray-600 hover:text-white flex items-center justify-center transition-colors duration-200"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-sky-500 text-gray-600 hover:text-white flex items-center justify-center transition-colors duration-200"
                >
                  <FaTwitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-pink-600 text-gray-600 hover:text-white flex items-center justify-center transition-colors duration-200"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-700 text-gray-600 hover:text-white flex items-center justify-center transition-colors duration-200"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-2xs">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Send us a Message
                  </h3>
                  <p className="text-xs text-gray-400">
                    Fill out the form and we&apos;ll get back to you
                  </p>
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

         
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
     
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>

              
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>

       
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-white"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="order">Order Inquiry</option>
                    <option value="return">Return & Refund</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full p-4 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                  />
                </div>

               
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 h-12 bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.99] text-white font-semibold rounded-xl text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

        
            <div className="bg-[#ecfdf5] border border-emerald-100 rounded-3xl p-5 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Looking for quick answers?
                </h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Check out our Help Center for frequently asked questions about
                  orders, shipping, returns, and more.
                </p>
                <Link
                  href="/help"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 mt-2.5 transition-colors"
                >
                  <span>Visit Help Center</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
