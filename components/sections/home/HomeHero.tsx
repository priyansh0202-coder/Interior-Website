import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export function HomeHero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-20 overflow-hidden bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC]/60 border border-[#E0D9CC] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#575E58] mb-6">
              <span>‹○›</span>
              <span>TIMELESS FINISHES, THOUGHTFULLY DONE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#171B18] leading-[1.08] tracking-tight">
              Finished <br />
              for the way <br />
              you live.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-sm sm:text-base text-[#575E58] leading-relaxed max-w-md">
              Example Interiors brings craft and care to every wall, from first coat to final finish.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/contact-us" variant="primary" size="md" withArrow>
                Get a free quote
              </Button>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#171B18] border border-[#E0D8CB] hover:bg-[#F4EFE6] text-xs sm:text-sm font-medium transition-colors shadow-2xl cursor-pointer"
              >
                <span className="w-4 h-4 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[9px]">▷</span>
                <span>Watch our story</span>
              </button>
            </div>

            {/* Social Trust Badge */}
            <div className="mt-10 pt-6 border-t border-[#EAE5DC] w-full max-w-md">
              <p className="text-[11px] font-medium text-[#767E77] mb-2.5">
                Trusted by 540+ happy clients
              </p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                    alt="Client"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                    alt="Client"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop"
                    alt="Client"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop"
                    alt="Client"
                  />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#20382B] text-white text-[10px] font-bold tracking-tight">
                  +536
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Overlay Cards */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-[2rem] overflow-hidden bg-[#E8E1D5] aspect-[4/3] sm:aspect-[16/11] shadow-xl border border-[#E0D8CB]">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop"
                alt="Surekha Luxury Living Room"
                className="w-full h-full object-cover"
              />

              {/* Floating Top-Left Rating Pill */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-stone-100 flex items-center gap-2 text-xs">
                <span className="text-[#E5A93C] font-bold">★ 4.9 rating</span>
                <span className="text-[#889089] text-[11px] border-l border-stone-200 pl-2">Based on 230+ reviews</span>
              </div>

              {/* Floating Bottom-Right Project Card */}
              <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3.5 max-w-xs">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop"
                    alt="Pancard Business Hub"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold text-[#889089] tracking-wider">
                    Featured project
                  </span>
                  <span className="text-xs font-serif font-bold text-[#171B18]">
                    Pancard Business Hub
                  </span>
                  <span className="text-[10px] text-[#767E77]">Commercial - Baner, Pune</span>
                  <Link
                    href="/projects"
                    className="text-[10px] font-semibold text-[#20382B] hover:underline mt-0.5"
                  >
                    View project →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
