import React from "react";
import Link from "next/link";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Residential, Pune - Interior",
      desc: "Complete interior painting and texture finishes for a modern apartment.",
      status: "Completed",
      statusColor: "bg-white text-[#20382B]",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop",
      href: "/projects",
    },
    {
      title: "Office, Baner - Exterior",
      desc: "Exterior painting and waterproof coating for a commercial building.",
      status: "Ongoing",
      statusColor: "bg-[#E5A93C] text-black font-semibold",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
      href: "/projects",
    },
    {
      title: "Villa, Baramati - Interior",
      desc: "Luxury interior painting with premium finishes and elegant textures.",
      status: "Completed",
      statusColor: "bg-white text-[#20382B]",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600&auto=format&fit=crop",
      href: "/projects",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
              RECENT WORK
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-3xl font-serif font-bold text-[#171B18]">
              Featured projects
            </h2>
          </div>

          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link
              href="/projects"
              className="text-xs font-semibold text-[#171B18] hover:text-[#20382B] transition-colors"
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

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    className="text-xs font-semibold text-[#20382B] hover:underline inline-flex items-center gap-1"
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
