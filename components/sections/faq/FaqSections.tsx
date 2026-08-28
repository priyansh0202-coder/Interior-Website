"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function FaqHero() {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#EAE5DC] text-center">
      <div className="mx-auto max-w-4xl px-6">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
          CLEAR ANSWERS
        </span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-serif font-bold text-[#171B18] leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#575E58] max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about our project pricing, site inspections, paint warranties, surface preparation, and execution timelines.
        </p>
      </div>
    </section>
  );
}

export function FaqAccordionList() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="space-y-3">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-[#EAE5DC] overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-[#FAF8F5]"
                >
                  <span className="text-sm sm:text-base font-serif font-bold text-[#171B18]">
                    {faq.question}
                  </span>
                  <span
                    className={`text-[#2B1D16] text-lg font-bold transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#575E58] leading-relaxed border-t border-[#F4EFE6] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
