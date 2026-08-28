"use client";

import React, { useState } from "react";
import { galleryData } from "@/data/miscData";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function GalleryHero() {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#EAE5DC] text-center">
      <div className="mx-auto max-w-4xl px-6">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
          VISUAL SHOWCASE
        </span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-serif font-bold text-[#171B18] leading-tight">
          Craft & Finish Gallery
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#575E58] max-w-2xl mx-auto leading-relaxed">
          Explore captures of Italian Venetian plasters, high-gloss PU finishes, exterior transformations, and luxury apartment spaces.
        </p>
      </div>
    </section>
  );
}

export function GalleryFilterGrid() {
  const [activeTag, setActiveTag] = useState<string>("all");

  const tags = [
    { label: "All Works", value: "all" },
    { label: "Interior Spaces", value: "interior" },
    { label: "Texture & Stucco", value: "texture" },
    { label: "PU Polishing", value: "polishing" },
    { label: "Exterior Facades", value: "exterior" },
  ];

  const filteredItems = galleryData.filter((item) => {
    if (activeTag === "all") return true;
    return item.category === activeTag;
  });

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tags.map((t) => (
            <button
              key={t.value}
              onClick={() => setActiveTag(t.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTag === t.value
                  ? "bg-[#2B1D16] text-white shadow-xs"
                  : "bg-white text-[#575E58] hover:text-[#171B18] border border-[#EAE5DC]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#EAE5DC] shadow-xs"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#D9C7B8] font-semibold">
                    📍 {item.location} • {item.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EFE4DA] mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
