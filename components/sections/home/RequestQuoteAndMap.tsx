"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export function RequestQuoteAndMap() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    const sheetUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ||
      "https://script.google.com/macros/s/AKfycbyvwpCc-DyOAGtN1lcZoLjwHNQ6HIP7gxJLNxuZpxi0WzRtca14TDtgX2N_--HOI0svhg/exec";

    try {
      await fetch(sheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMessage("Failed to submit enquiry. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
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

            <div className="mt-6">
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FAF8F5] border border-[#EAE5DC] text-xs font-semibold text-[#171B18] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all shadow-xs group"
                aria-label="Chat on WhatsApp"
              >
                <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#25D366] transition-colors">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                </div>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Center Column: Clean Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#EAE5DC] shadow-xs">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#F3ECE4] text-[#2B1D16] flex items-center justify-center mx-auto mb-3 font-bold">
                    ✓
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#171B18]">
                    Enquiry Submitted
                  </h3>
                  <p className="text-xs text-[#575E58] mt-1 max-w-sm mx-auto">
                    Thank you! Our supervisor from Baner will call you within 24 hours to schedule your site inspection.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="mt-5 text-xs text-[#2B1D16] font-semibold underline hover:opacity-80 cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold text-[#767E77] uppercase tracking-wider mb-1">
                        Full name *
                      </label>
                      <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D8CB] text-xs text-[#171B18] placeholder-stone-400 focus:outline-none focus:border-[#2B1D16]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-[#767E77] uppercase tracking-wider mb-1">
                        Phone number *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="98XXX XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D8CB] text-xs text-[#171B18] placeholder-stone-400 focus:outline-none focus:border-[#2B1D16]"
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D8CB] text-xs text-[#171B18] placeholder-stone-400 focus:outline-none focus:border-[#2B1D16]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-[#767E77] uppercase tracking-wider mb-1">
                        Select service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D8CB] text-xs text-[#171B18] focus:outline-none focus:border-[#2B1D16]"
                      >
                        <option value="">Select type</option>
                        <option value="Interior painting">Interior painting</option>
                        <option value="Exterior painting">Exterior painting</option>
                        <option value="Waterproofing">Waterproofing</option>
                        <option value="Texture finishes">Texture finishes</option>
                        <option value="Wood polishing">Wood polishing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-[#767E77] uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D8CB] text-xs text-[#171B18] placeholder-stone-400 focus:outline-none focus:border-[#2B1D16]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-[#2B1D16] text-white text-xs font-semibold hover:bg-[#1C110B] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                        <span>Submitting enquiry...</span>
                      </>
                    ) : (
                      "Submit enquiry →"
                    )}
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
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-[#2B1D16] drop-shadow-md">
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
                  className="text-[10px] font-semibold text-[#2B1D16] hover:underline inline-block mt-1.5"
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
