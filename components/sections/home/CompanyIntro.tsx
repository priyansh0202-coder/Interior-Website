import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

export function CompanyIntro() {
  return (
    <section className="py-20 md:py-28 bg-stone-900 text-stone-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-400 text-xs uppercase font-semibold tracking-[0.25em]">
              About Apex Interiors
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-tight">
              Flawless Execution, Timeless Finishes & Unmatched Trust
            </h2>
            <p className="mt-6 text-stone-300 text-base sm:text-lg leading-relaxed">
              With over {siteConfig.experienceYears} years of mastery in the architectural coating industry, we have pioneered precision painting methodologies, automated dust-free sanding, and authentic Venetian stucco finishes across {siteConfig.completedProjectsCount} prestigious landmarks.
            </p>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed">
              We collaborate closely with leading architects, builders, and discerning homeowners to provide turnkey surface solutions that endure time and tropical weather.
            </p>

            <div className="mt-8 flex gap-4">
              <Button href="/about" variant="secondary">
                Read Our Story
              </Button>
              <Button href="/services" variant="outline" className="border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white">
                View All Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                alt="Apex Interior Finish"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-stone-950 p-6 rounded-2xl shadow-xl font-serif max-w-[200px]">
              <span className="text-4xl font-bold block">{siteConfig.experienceYears}+</span>
              <span className="text-xs uppercase font-sans font-semibold tracking-wider">
                Years of Unrivaled Craftsmanship
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
