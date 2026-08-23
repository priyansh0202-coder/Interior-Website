import React from "react";
import { productsData, brandPartners } from "@/data/products";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function ProductsHero() {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#EAE5DC] text-center">
      <div className="mx-auto max-w-4xl px-6">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
          PREMIUM CHEMISTRY
        </span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-serif font-bold text-[#171B18] leading-tight">
          Paints, Textures, Polishes & Materials
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#575E58] max-w-2xl mx-auto leading-relaxed">
          We use strictly factory-sealed, certified, non-toxic, and high-performance luxury materials from the world’s leading manufacturers.
        </p>
      </div>
    </section>
  );
}

export function MaterialsCatalog() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="PRODUCT CATEGORIES"
          title="Curated Material Grades"
          subtitle="Explore the high-durability coatings and artisanal finishes we apply across projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white border border-[#EAE5DC] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <span className="text-[10px] uppercase font-bold text-[#767E77] tracking-wider">
                    {item.brand} • {item.category}
                  </span>
                  <span className="px-3 py-1 text-[10px] bg-[#F4EFE6] text-[#171B18] border border-[#E8E1D5] rounded-full font-semibold">
                    {item.durability}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#171B18] mb-2">{item.name}</h3>
                <p className="text-xs sm:text-sm text-[#575E58] mb-6 leading-relaxed">{item.description}</p>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs space-y-1.5 mb-6">
                  <div className="flex justify-between text-[#575E58]">
                    <span>Finish Sheen:</span>
                    <strong className="text-[#171B18]">{item.finishType}</strong>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-[#575E58]">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#20382B] font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F2EDE4] flex justify-between items-center">
                <Button href="/contact-us" variant="secondary" size="sm">
                  Request Material Swatch
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
