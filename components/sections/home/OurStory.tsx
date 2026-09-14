import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function OurStory() {
  const stats = [
    {
      value: `${siteConfig.experienceYears}+`,
      label: "Years of experience",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        </svg>
      ),
    },
    {
      value: siteConfig.completedProjectsCount,
      label: "Projects completed",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      value: siteConfig.citiesServedCount,
      label: "Cities served",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      value: siteConfig.happyClientsCount,
      label: "Happy clients",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Story and Founder */}
          <div className="lg:col-span-4">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E5A93C]">
              OUR STORY
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#171B18] leading-tight">
              Built on trust. <br />
              Crafted with purpose.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#575E58] leading-relaxed">
              Founded by {siteConfig.founderName} and {siteConfig.coFounderName}, we&apos;ve grown from a dedicated craft team into a full interior and building finishing studio, trusted across {siteConfig.citiesServedCount} cities for precision and craft.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 pt-4 border-t border-[#EAE5DC]">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                  alt={siteConfig.founderName}
                  className="w-9 h-9 rounded-full object-cover ring-1 ring-[#EAE5DC]"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#171B18]">{siteConfig.founderName}</span>
                  <span className="text-[10px] text-[#767E77]">Founder</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pl-4 border-l border-[#EAE5DC]">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                  alt={siteConfig.coFounderName}
                  className="w-9 h-9 rounded-full object-cover ring-1 ring-[#EAE5DC]"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#171B18]">{siteConfig.coFounderName}</span>
                  <span className="text-[10px] text-[#767E77]">Co-Founder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: 2x2 Stats Grid in Warm Sand Background */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E8E1D5] flex flex-col justify-between"
                >
                  <div className="w-8 h-8 rounded-full bg-white text-[#2B1D16] flex items-center justify-center mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#171B18] block">
                      {item.value}
                    </span>
                    <span className="text-[11px] text-[#575E58] font-medium leading-tight block mt-0.5">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Elegant Interior Tall Image */}
          <div className="lg:col-span-4">
            <div className="rounded-[2rem] overflow-hidden bg-[#E8E1D5] h-[380px] shadow-lg border border-[#E0D8CB]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
                alt="Interior Decor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
