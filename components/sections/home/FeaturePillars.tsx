import React from "react";
import { Sofa, Ruler, CalendarCheck, ShieldCheck } from "lucide-react";

export const trustStats = [
  {
    icon: Sofa,
    title: "Premium Materials",
    description: "Built to last, chosen with care",
  },
  {
    icon: Ruler,
    title: "Crafted with Precision",
    description: "Every detail, perfectly executed",
  },
  {
    icon: CalendarCheck,
    title: "On-Time Delivery",
    description: "Reliable timelines, every time",
  },
  {
    icon: ShieldCheck,
    title: "5-Year Warranty",
    description: "Long-term peace of mind",
  },
];

export function FeaturePillars({ className = "" }: { className?: string }) {
  return (
    <section className={`py-6 sm:py-8 bg-[#FAF8F5] ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl border border-[#EAE5DC] bg-white/60 overflow-hidden shadow-xs">
          <div className="flex flex-col sm:flex-row">
            {trustStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className={`flex items-center gap-3 p-5 sm:p-6 flex-1 border-[#EAE5DC] ${
                    i !== trustStats.length - 1
                      ? "border-b sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-[#F4EFE6] border border-[#EAE5DC] flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-[#20382B]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-[#171B18] leading-tight">
                      {stat.title}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#767E77] mt-0.5">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

