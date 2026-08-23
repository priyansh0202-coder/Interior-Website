import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function AboutHero() {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#EAE5DC]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
          OUR HERITAGE & CRAFT
        </span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-serif font-bold text-[#171B18] leading-tight">
          Built on trust. Crafted with purpose.
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#575E58] max-w-2xl mx-auto leading-relaxed">
          Over 20 years of transforming architectural surfaces with master artisans, Italian finish techniques, and uncompromising quality standards across Pune and beyond.
        </p>
      </div>
    </section>
  );
}

export function CompanyProfile() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              badge="COMPANY PROFILE"
              title="A Legacy of Precision & Care"
              subtitle="Founded in 2005, we set out to eliminate the compromises and hassles common in traditional painting and surface finishing."
            />
            <div className="space-y-4 text-xs sm:text-sm text-[#575E58] leading-relaxed">
              <p>
                From dust-free mechanized surface sanding to multi-layer Italian PU coatings, we operate at the intersection of artisanal master-craft and modern material science.
              </p>
              <p>
                Whether contracting complete high-rise society exterior weather-shielding or crafting delicate Venetian plaster in bespoke private villas, our teams follow rigorous quality-check checklists at every milestone.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-[#E0D8CB] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
              alt="Heritage"
              className="w-full h-[380px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function MissionVisionValues() {
  const values = [
    {
      title: "Our Mission",
      desc: "To deliver world-class painting, texture, and building coating solutions with zero dust disruption, transparent timelines, and lasting structural durability.",
    },
    {
      title: "Our Vision",
      desc: "To be recognized nationally as the gold-standard benchmark in architectural surface craftsmanship, trusted by top architects and luxury property developers.",
    },
    {
      title: "Core Values",
      desc: "Artisanal mastery, uncompromised material honesty, site safety first, and relentless focus on client peace of mind.",
    },
  ];

  return (
    <section className="py-16 bg-[#F4EFE6] border-y border-[#E8E1D5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="GUIDING PRINCIPLES"
          title="Mission, Vision & Core Values"
          subtitle="The unwavering foundation behind every stroke of paint and every landmark we protect."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white border border-[#EAE5DC] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#767E77] tracking-widest">Pillar 0{i + 1}</span>
                <h3 className="mt-2 text-xl font-serif font-bold text-[#171B18]">{v.title}</h3>
                <p className="mt-3 text-xs sm:text-sm text-[#575E58] leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
