import React from "react";
import { Button } from "@/components/ui/Button";

export function InteriorExteriorSplit() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Interior Focus Box */}
          <div className="rounded-3xl p-8 sm:p-10 bg-white border border-[#EAE5DC] shadow-xs flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#767E77]">
                INTERIOR SPECIALIZATION
              </span>
              <h3 className="mt-2 text-2xl font-serif font-bold text-[#171B18]">
                Luxury Homes, Textures & Wood Finishes
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#575E58] leading-relaxed">
                Italian Stucco, Venetian plasters, velvet finish paints, Italian PU polishing for veneer, and dust-free automated sanding.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/services" variant="secondary" size="sm">
                Explore Interior Solutions
              </Button>
            </div>
          </div>

          {/* Exterior Focus Box */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#1E3527] text-white shadow-md flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#9FB5A6]">
                EXTERIOR & BUILDING WORKS
              </span>
              <h3 className="mt-2 text-2xl font-serif font-bold text-white">
                High-Rise Facades, Waterproofing & Societies
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#C8D6CD] leading-relaxed">
                Weather-proof silicon elastomeric coatings, structural waterproofing membranes, scaffolding access, and 10-year systemic guarantees.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/services" variant="white" size="sm" withArrow>
                Explore Exterior Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
