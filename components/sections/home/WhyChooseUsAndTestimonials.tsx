import React from "react";

export function WhyChooseUsAndTestimonials() {
  const whyChooseList = [
    {
      title: "ISO certified",
      desc: "Quality-assured process",
      icon: (
        <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
    {
      title: "Award winning",
      desc: "Best finisher, Pune 2023",
      icon: (
        <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
          <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
    },
    {
      title: "Built to last",
      desc: "Durable materials",
      icon: (
        <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "540+ clients",
      desc: "Across 14 cities",
      icon: (
        <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      quote: "The quality is incredible and the finish is exactly what our home needed.",
      name: "Sandeep Joshi",
      location: "Pune",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    },
    {
      quote: "Their work brings so much warmth and character to our office.",
      name: "Megha Kulkarni",
      location: "Baner",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    },
    {
      quote: "Customer service was amazing and delivery was right on schedule.",
      name: "Rahul Patil",
      location: "Baramati",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Why Choose Interior */}
          <div className="lg:col-span-5">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
              WHY CHOOSE Example
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-3xl font-serif font-bold text-[#171B18]">
              Finishing with purpose
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {whyChooseList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-[#EAE5DC] flex items-start gap-3 shadow-xs"
                >
                  <div className="w-8 h-8 rounded-full bg-[#F4EFE6] text-[#20382B] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-serif font-bold text-[#171B18]">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-[#767E77] mt-0.5 leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Customer Testimonials */}
          <div className="lg:col-span-7">
            <div className="flex items-end justify-between mb-6">
              <div>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
                  WHAT OUR CUSTOMERS SAY
                </span>
                <h2 className="mt-1.5 text-2xl sm:text-3xl font-serif font-bold text-[#171B18]">
                  Loved by hundreds of homes
                </h2>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  className="w-7 h-7 rounded-full border border-[#D5CFC3] flex items-center justify-center text-xs text-[#575E58] hover:bg-[#F4EFE6] cursor-pointer"
                  aria-label="Previous review"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="w-7 h-7 rounded-full border border-[#D5CFC3] flex items-center justify-center text-xs text-[#575E58] hover:bg-[#F4EFE6] cursor-pointer"
                  aria-label="Next review"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#EAE5DC] flex flex-col justify-between shadow-xs"
                >
                  <div>
                    {/* 5 Gold Stars */}
                    <div className="flex text-[#E5A93C] text-xs gap-0.5 mb-3">
                      ★★★★★
                    </div>
                    <p className="text-xs text-[#575E58] leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#F4EFE6] flex items-center gap-2.5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-[#171B18] leading-none">
                        {t.name}
                      </span>
                      <span className="text-[9px] text-[#767E77] mt-0.5 leading-none">
                        {t.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
