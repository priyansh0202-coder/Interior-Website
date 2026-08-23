import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function StatsCounter() {
  const stats = [
    { label: "Years of Experience", value: `${siteConfig.experienceYears}+` },
    { label: "Completed Projects", value: siteConfig.completedProjectsCount },
    { label: "Ongoing High-Rises & Villas", value: siteConfig.ongoingProjectsCount },
    { label: "Satisfied Clients & Architects", value: siteConfig.happyClientsCount },
  ];

  return (
    <section className="py-12 bg-amber-950 text-amber-100 border-y border-amber-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index} className="space-y-1">
              <span className="text-3xl sm:text-5xl font-serif font-bold text-amber-400">
                {item.value}
              </span>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-amber-200/80 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
