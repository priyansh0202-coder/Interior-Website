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
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof galleryData)[0] | null>(null);

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
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#EAE5DC] shadow-xs cursor-pointer"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
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

      {/* Gallery Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="flex items-center justify-between text-white pb-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs text-[#D9C7B8]">📍 {selectedPhoto.location}</span>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-white mt-0.5">
                {selectedPhoto.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center my-3 max-h-[75vh] overflow-hidden select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          <div
            className="bg-black/50 border border-white/10 rounded-xl p-3 text-white max-w-2xl mx-auto w-full text-center text-xs text-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedPhoto.description}
          </div>
        </div>
      )}
    </section>
  );
}
