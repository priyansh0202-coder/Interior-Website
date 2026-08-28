import React from "react";
import { testimonialsData } from "@/data/miscData";
import { brandPartners as partnerList } from "@/data/products";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export function AchievementsBanner() {
  const achievements = [
    { title: "100% Dust-Free", desc: "Automated suction sanders for clean air quality indoors." },
    { title: "Italian PU Certified", desc: "Certified master applicators for luxury Italian polishes." },
    { title: "Zero Seepage Guarantee", desc: "Thermal-imaging backed waterproofing with 10-year warranty." },
    { title: "On-Time Handover", desc: "Legally bound milestone delivery with dedicated site supervisors." },
  ];

  return (
    <section className="py-16 bg-[#F4EFE6] border-y border-[#E8E1D5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#EAE5DC] shadow-xs">
              <span className="text-[#2B1D16] font-serif font-bold text-2xl">0{idx + 1}</span>
              <h4 className="mt-2 text-base font-serif font-bold text-[#171B18]">{item.title}</h4>
              <p className="mt-1.5 text-xs text-[#575E58] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="WHAT OUR CUSTOMERS SAY"
          title="Client & Architect Testimonials"
          subtitle="Honest reviews from distinguished homeowners, principal architects, and building committees."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EAE5DC] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-[#E5A93C] text-xs mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#575E58] italic leading-relaxed">
                  "{t.review}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F4EFE6]">
                <p className="text-xs sm:text-sm font-serif font-bold text-[#171B18]">{t.clientName}</p>
                <p className="text-[11px] text-[#767E77]">{t.roleOrProject}</p>
                <p className="text-[10px] text-[#889089]">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustedBrands() {
  return (
    <section className="py-12 bg-[#FAF8F5] border-y border-[#EAE5DC]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77] mb-8">
          TRUSTED MATERIALS FROM
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partnerList.map((brand, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-[#EAE5DC] shadow-xs flex flex-col items-center justify-center text-center"
            >
              <span className="text-sm font-serif font-bold text-[#171B18]">{brand.name}</span>
              <span className="text-[10px] text-[#767E77] mt-1">{brand.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeCta() {
  return (
    <section className="py-16 bg-[#EFE7DC] border-y border-[#DFCBB7] text-[#1E150F]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-[#9C6644] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em]">
          START YOUR TRANSFORMATION TODAY
        </span>
        <h2 className="mt-3 text-2xl sm:text-4xl font-serif font-bold text-[#1E150F] leading-tight">
          Ready to Elevate Your Space With Flawless Craftsmanship?
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-[#6A574A] max-w-xl mx-auto">
          Book a free site inspection. Our senior specialist will visit your property with moisture meters, paint shade cards, and texture samples.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact-us" variant="primary" size="md" withArrow>
            Request Free Quotation
          </Button>
          <Button href={`tel:${siteConfig.phone}`} variant="secondary" size="md">
            Call: {siteConfig.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
