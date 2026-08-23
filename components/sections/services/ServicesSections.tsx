import React from "react";
import { servicesData } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function ServicesHero() {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#EAE5DC] text-center">
      <div className="mx-auto max-w-4xl px-6">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
          COMPREHENSIVE SERVICES
        </span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-serif font-bold text-[#171B18] leading-tight">
          Specialized Interior, Exterior & Building Finishes
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#575E58] max-w-2xl mx-auto leading-relaxed">
          From dust-free luxury residential painting to multi-storey facade protection, Venetian plasters, and waterproofing solutions.
        </p>
      </div>
    </section>
  );
}

export function ServiceCategoryGrid() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE5DC] shadow-xs ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="h-[300px] sm:h-[340px] rounded-2xl overflow-hidden shadow-sm border border-[#EAE5DC]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#767E77]">
                  Service 0{index + 1} • {service.category}
                </span>
                <h3 className="mt-1.5 text-2xl font-serif font-bold text-[#171B18]">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#575E58] leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#575E58]">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#20382B] font-bold">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button href="/contact-us" variant="primary" size="sm" withArrow>
                    Book Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
