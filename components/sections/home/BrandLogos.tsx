import React from "react";

const brands = [
  { name: "Asian Paints", subtitle: "Royale & Apex Series" },
  { name: "Berger", subtitle: "Paint Your Imagination" },
  { name: "Nerolac", subtitle: "Beauty Gold & Impressions" },
  { name: "Dulux", subtitle: "Velvet Touch & Weathershield" },
  { name: "Royale", subtitle: "Luxury Italian Finishes" },
  { name: "Indigo", subtitle: "Metallic & Tile Emulsions" },
  { name: "JSW Paints", subtitle: "Aurus & Halo Luxury" },
  { name: "Dr. Fixit", subtitle: "Advanced Waterproofing" },
  { name: "Sika", subtitle: "Specialty Building Solutions" },
  { name: "Birla Opus", subtitle: "Prime Finishes" },
];

export function BrandLogos() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...brands, ...brands];

  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] border-y border-[#EAE5DC] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC]/60 border border-[#E0D9CC] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#575E58]">
          <span>‹○›</span>
          <span>TRUSTED MATERIALS & BRANDS</span>
        </span>
        <h3 className="mt-2 text-xl sm:text-2xl font-serif font-bold text-[#171B18]">
          Partnered with Industry-Leading Material Brands
        </h3>
      </div>

      {/* Marquee Track Container with Gradient Edge Overlays */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10" />

        {/* Right Gradient Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="flex w-max animate-marquee gap-4 sm:gap-6 py-2">
          {marqueeItems.map((b, idx) => (
            <div
              key={idx}
              className="min-w-[190px] sm:min-w-[220px] px-5 py-4 rounded-2xl bg-white border border-[#EAE5DC] flex flex-col items-center justify-center text-center shadow-xs hover:border-[#20382B]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
            >
              <span className="text-sm sm:text-base font-serif font-bold text-[#171B18] group-hover:text-[#20382B] transition-colors">
                {b.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#767E77] font-medium tracking-wide mt-1">
                {b.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
