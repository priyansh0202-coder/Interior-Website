import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

export function CompanyIntro() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#767E77] text-[10px] sm:text-[11px] uppercase font-semibold tracking-[0.2em]">
              ABOUT {siteConfig.name.toUpperCase()}
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-serif font-bold text-[#171B18] leading-tight">
              Flawless Execution, Timeless Finishes & Unmatched Trust
            </h2>
            <p className="mt-4 text-[#575E58] text-xs sm:text-sm leading-relaxed">
              With over {siteConfig.experienceYears} years of mastery in the architectural coating industry, we have pioneered precision painting methodologies, automated dust-free sanding, and authentic Venetian stucco finishes across {siteConfig.completedProjectsCount} prestigious landmarks.
            </p>
            <p className="mt-3 text-[#767E77] text-xs leading-relaxed">
              We collaborate closely with leading architects, builders, and discerning homeowners to provide turnkey surface solutions that endure time and tropical weather.
            </p>

            <div className="mt-6 flex gap-3">
              <Button href="/about" variant="primary" size="sm" withArrow>
                Read Our Story
              </Button>
              <Button href="/services" variant="secondary" size="sm">
                View All Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-md border border-[#EAE5DC]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                alt="Interior Finish"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#2B1D16] text-white p-5 rounded-2xl shadow-xl font-serif max-w-[180px]">
              <span className="text-3xl font-bold block">{siteConfig.experienceYears}+</span>
              <span className="text-[10px] uppercase font-sans font-semibold tracking-wider text-[#D1B8A5]">
                Years of Craftsmanship
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
