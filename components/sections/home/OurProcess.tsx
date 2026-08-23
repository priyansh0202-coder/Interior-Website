import React from "react";
import { Button } from "@/components/ui/Button";

export function OurProcess() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      desc: "Understanding your vision",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Surface prep",
      desc: "Careful preparation for perfect finish",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Execution",
      desc: "Expert painting and detailing",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Final touch",
      desc: "Quality checks for a flawless handover",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-[#1E3527] text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & CTA */}
            <div className="lg:col-span-4">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E5A93C]">
                OUR PROCESS
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                Our process, your perfect finish
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#C8D6CD] leading-relaxed">
                Every project is planned and executed with care, from surface prep to the final coat, in interior and exterior work alike.
              </p>
              <div className="mt-6">
                <Button href="/services" variant="white" size="sm" withArrow>
                  View our process
                </Button>
              </div>
            </div>

            {/* Right Column: 4 Connected Steps */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative">
                {steps.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-start relative z-10">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-[#D8E6DC] flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-mono text-[#9FB5A6] font-bold">
                      {item.step}
                    </span>
                    <h4 className="text-sm font-serif font-bold text-white mt-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#AABDAF] mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
