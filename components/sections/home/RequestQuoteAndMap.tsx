"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export function RequestQuoteAndMap() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Get In Touch */}
          <div className="lg:col-span-3">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
              GET IN TOUCH
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-3xl font-serif font-bold text-[#171B18]">
              Request a free quote
            </h2>
            <p className="mt-3 text-xs text-[#575E58] leading-relaxed">
              Share a few details and our team will get back to you within a day with a free site visit.
            </p>

            <div className="mt-6 space-y-2.5 text-xs text-[#575E58]">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>{siteConfig.officeAddress}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-[#767E77]">
              <a href={siteConfig.socialLinks.facebook} className="hover:text-[#171B18]">f</a>
              <a href={siteConfig.socialLinks.instagram} className="hover:text-[#171B18]">in</a>
              <a href={siteConfig.socialLinks.pinterest} className="hover:text-[#171B18]">p</a>
            </div>
          </div>

          {/* Center Column: Clean Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#EAE5DC] shadow-xs">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#EBF2EC] text-[#20382B] flex items-center justify-center mx-auto mb-3 font-bold">
                    ✓
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#171B18]">
                    Enquiry Submitted
                  </h3>
                  <p className="text-xs text-[#575E58] mt-1 max-w-sm mx-auto">
                    Thank you! Our supervisor from Baner will call you within 24 hours to schedule your site inspection.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold text-[#767E77] uppercase tracking-wider mb-1">
                        Full name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D8CB] text-xs text-[#171B18] placeholder-stone-400 focus:outline-none focus:border-[#20382B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-[#767E77] uppercase tracking-wider mb-1">
                        Phone number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="98XXX XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D8CB] text-xs text-[#171B18] placeholder-stone-400 focus:outline-none focus:border-[#20382B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold text-[#767E77] uppercase tracking-wider mb-1">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="example@email.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D8CB] text-xs text-[#171B18] placeholder-stone-400 focus:outline-none focus:border-[#20382B]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-[#767E77] uppercase tracking-wider mb-1">
                        Select service
                      </label>
                      <select
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D8CB] text-xs text-[#171B18] focus:outline-none focus:border-[#20382B]"
                      >
                        <option value="">Select type</option>
                        <option value="interior">Interior painting</option>
                        <option value="exterior">Exterior painting</option>
                        <option value="waterproofing">Waterproofing</option>
                        <option value="texture">Texture finishes</option>
                        <option value="polishing">Wood polishing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-[#767E77] uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your project"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D8CB] text-xs text-[#171B18] placeholder-stone-400 focus:outline-none focus:border-[#20382B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#20382B] text-white text-xs font-semibold hover:bg-[#172B20] transition-colors cursor-pointer"
                  >
                    Submit enquiry →
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Google Map Embed Card */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden bg-[#E8E1D5] border border-[#E0D8CB] shadow-xs relative aspect-[4/3] sm:aspect-square flex flex-col justify-end p-4">
              {/* Map background graphic */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-85"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=600&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-stone-100/40" />

              {/* Pin icon */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-[#20382B] drop-shadow-md">
                📍
              </div>

              {/* Office Details Overlay Card */}
              <div className="relative z-10 p-3.5 rounded-xl bg-white/95 backdrop-blur-sm border border-stone-200/80 shadow-md">
                <span className="text-[9px] uppercase font-semibold text-[#767E77] tracking-wider block">
                  Our office
                </span>
                <h4 className="text-xs font-serif font-bold text-[#171B18] mt-0.5">
                  {siteConfig.name}
                </h4>
                <p className="text-[10px] text-[#575E58] mt-0.5">
                  {siteConfig.officeAddress}
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-semibold text-[#20382B] hover:underline inline-block mt-1.5"
                >
                  View on map →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
