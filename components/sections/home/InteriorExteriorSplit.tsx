import React from "react";
import { Button } from "@/components/ui/Button";

export function InteriorExteriorSplit() {
  return (
    <section className="py-20 bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interior Focus Box */}
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 bg-gradient-to-br from-stone-950 to-stone-900 border border-stone-800 flex flex-col justify-between min-h-[400px]">
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
                Interior Specialization
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-white">
                Luxury Homes, Textures & Wood Finishes
              </h3>
              <p className="mt-4 text-sm text-stone-300 leading-relaxed">
                Italian Stucco, Venetian plasters, velvet finish paints, Italian PU polishing for veneer, and dust-free automated sanding.
              </p>
            </div>
            <div className="mt-8 relative z-10">
              <Button href="/services" variant="secondary" size="sm">
                Explore Interior Solutions
              </Button>
            </div>
          </div>

          {/* Exterior Focus Box */}
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 bg-gradient-to-br from-amber-950/60 to-stone-900 border border-amber-900/40 flex flex-col justify-between min-h-[400px]">
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
                Exterior & Building Works
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-white">
                High-Rise Facades, Waterproofing & Societies
              </h3>
              <p className="mt-4 text-sm text-stone-300 leading-relaxed">
                Weather-proof silicon elastomeric coatings, structural waterproofing membranes, scaffolding access, and 10-year systemic guarantees.
              </p>
            </div>
            <div className="mt-8 relative z-10">
              <Button href="/services" variant="gold" size="sm">
                Explore Exterior & Building Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
