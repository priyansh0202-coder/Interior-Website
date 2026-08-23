import React from "react";

export function FeaturePillars() {
  const pillars = [
    {
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Premium materials",
      desc: "Sourced with care for lasting beauty.",
    },
    {
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Expert craftsmanship",
      desc: "Skilled hands, flawless finishes.",
    },
    {
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Sustainable design",
      desc: "Better for your home, better for our planet.",
    },
    {
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "On-time delivery",
      desc: "We respect your time, every single project.",
    },
  ];

  return (
    <section className="py-8 bg-[#FAF8F5] border-y border-[#EAE5DC]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#F4EFE6] border border-[#E0D8CB] text-[#20382B] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-serif font-bold text-[#171B18]">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#575E58] mt-0.5 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
