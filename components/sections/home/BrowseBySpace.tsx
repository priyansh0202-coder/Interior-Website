import React from "react";
import Link from "next/link";

export function BrowseBySpace() {
  const spaces = [
    {
      title: "Living rooms",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop",
      href: "/gallery",
    },
    {
      title: "Offices",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
      href: "/gallery",
    },
    {
      title: "Exteriors",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
      href: "/gallery",
    },
    {
      title: "Facades",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop",
      href: "/gallery",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
              BROWSE BY SPACE
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-3xl font-serif font-bold text-[#171B18]">
              Find inspiration for every space.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-xs font-semibold text-[#171B18] hover:text-[#20382B] flex items-center gap-1 mt-4 sm:mt-0 transition-colors"
          >
            View all spaces →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {spaces.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-200 shadow-md border border-[#E0D8CB]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Bottom pill label with diagonal arrow */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 text-white">
                <span className="text-xs font-medium">{item.title}</span>
                <span className="text-xs font-bold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
