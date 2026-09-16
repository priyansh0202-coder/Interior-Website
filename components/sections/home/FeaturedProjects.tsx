import React from "react";
import Link from "next/link";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Pawar Sir - Ideal Construction, Kolhapur",
      desc: "Turnkey architectural execution, textured facade louvers, timber veneer ceiling, and dust-free masking by Ar. Satyajeet Bhosale.",
      status: "Ongoing",
      statusColor: "bg-[#E5A93C] text-black font-semibold",
      image: "/assets/ideal_construction/ideal_construction_7.jpeg",
      href: "/projects",
    },
    {
      title: "MP Dhairyasheel Mane Estate, Kolhapur",
      desc: "Turnkey hillside estate execution, artisanal timber ceiling PU polishing, reflecting pools, and weather-shield facade by Ar. Satyajeet Bhosale.",
      status: "Ongoing",
      statusColor: "bg-[#E5A93C] text-black font-semibold",
      image: "/assets/kolhapur/kolhapur_13.jpeg",
      href: "/projects",
    },
    {
      title: "Gupta Villa & Interior, Magarpatta, Pune",
      desc: "Turnkey luxury villa painting, bookmatched Italian marble wall protection, and exterior finishing by Ar. Pratik (Evolve Studio).",
      status: "Ongoing",
      statusColor: "bg-[#E5A93C] text-black font-semibold",
      image: "/assets/evolve_studio/evolve_studio_2.jpeg",
      href: "/projects",
    },
    {
      title: "Contemporary Luxury Villa, Wagholi, Pune",
      desc: "Turnkey interior luxury painting, vertical oak wall paneling, double-height atrium drapery, and Italian PU wood finishes.",
      status: "Completed",
      statusColor: "bg-white text-[#2B1D16]",
      image: "/assets/wagholi/wagholi_12.jpeg",
      href: "/projects",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E5A93C]">
              RECENT WORK
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-3xl font-serif font-bold text-[#171B18]">
              Featured projects
            </h2>
          </div>

          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link
              href="/projects"
              className="text-xs font-semibold text-[#171B18] hover:text-[#2B1D16] transition-colors"
            >
              View all projects →
            </Link>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="w-7 h-7 rounded-full border border-[#D5CFC3] flex items-center justify-center text-xs text-[#575E58] hover:bg-[#F4EFE6] transition-colors cursor-pointer"
                aria-label="Previous Project"
              >
                ‹
              </button>
              <button
                type="button"
                className="w-7 h-7 rounded-full border border-[#D5CFC3] flex items-center justify-center text-xs text-[#575E58] hover:bg-[#F4EFE6] transition-colors cursor-pointer"
                aria-label="Next Project"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* 4 Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white border border-[#EAE5DC] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/10] bg-stone-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full shadow-sm ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-sm sm:text-base font-serif font-bold text-[#171B18]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-[#575E58] leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-[#F2EDE4]">
                  <Link
                    href={item.href}
                    className="text-xs font-semibold text-[#2B1D16] hover:underline inline-flex items-center gap-1"
                  >
                    View project →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
