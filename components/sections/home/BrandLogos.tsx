import React from "react";

export function BrandLogos() {
  const brands = [
    { name: "Asian Paints", subtitle: "ap asianpaints" },
    { name: "Berger", subtitle: "Berger Paint Your Imagination" },
    { name: "Nerolac", subtitle: "NEROLAC" },
    { name: "Dulux", subtitle: "Dulux let's colour" },
    { name: "Royale", subtitle: "Royale LUXURY PAINTS" },
    { name: "Indigo", subtitle: "INDIGO Be surprised!" },
  ];

  return (
    <section className="py-12 bg-[#FAF8F5] border-y border-[#EAE5DC]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77] mb-8 text-center sm:text-left">
          TRUSTED MATERIALS FROM
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {brands.map((b, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white border border-[#EAE5DC] flex flex-col items-center justify-center text-center h-16 shadow-xs hover:border-[#20382B]/40 transition-colors"
            >
              <span className="text-xs sm:text-sm font-serif font-bold text-[#171B18] tracking-tight">
                {b.name}
              </span>
              <span className="text-[9px] text-[#767E77] font-sans uppercase tracking-wider">
                {b.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
