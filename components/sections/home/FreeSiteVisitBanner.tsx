"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export function FreeSiteVisitBanner() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      setSubmitted(true);
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi%20John%20Interiors,%20I%20would%20like%20to%20request%20a%20free%20site%20visit.`;

  return (
    <section className="py-10 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[#EFE7DC] border border-[#DFCBB7] text-[#1E150F] p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Headline & info */}
            <div className="lg:col-span-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#DFCBB7] flex items-center justify-center text-[#9C6644] shrink-0 shadow-xs">
                <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#1E150F] leading-snug">
                  Get a free site visit
                </h3>
                <p className="text-xs text-[#6A574A] mt-0.5">
                  Share your number, our team will call within a day.
                </p>
              </div>
            </div>

            {/* Middle: Phone input pill with Request call button */}
            <div className="lg:col-span-5">
              {submitted ? (
                <div className="p-3 bg-white rounded-full text-center text-xs text-[#9C6644] border border-[#DFCBB7] font-medium shadow-xs">
                  ✓ Request received! We'll call you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full p-1.5 shadow-sm border border-[#DFCBB7]">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className="flex-1 px-4 text-xs sm:text-sm text-[#171B18] placeholder-stone-400 bg-transparent focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[#2B1D16] text-white text-xs font-semibold hover:bg-[#432E22] transition-colors cursor-pointer shrink-0"
                  >
                    Request call
                  </button>
                </form>
              )}
            </div>

            {/* Right: WhatsApp CTA & Room Preview */}
            <div className="lg:col-span-3 flex items-center justify-between sm:justify-end gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-left group"
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#1E150F] group-hover:underline leading-none">
                    Chat on WhatsApp
                  </span>
                  <span className="text-[10px] text-[#6A574A] mt-0.5 leading-none">
                    Quick replies
                  </span>
                </div>
              </a>

              <div className="w-12 h-12 rounded-xl overflow-hidden bg-stone-700 shrink-0 border border-white/20 hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=150&auto=format&fit=crop"
                  alt="Armchair"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
