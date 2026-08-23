"use client";

import React from "react";
import { RequestQuoteAndMap } from "@/components/sections/home/RequestQuoteAndMap";
import { FreeSiteVisitBanner } from "@/components/sections/home/FreeSiteVisitBanner";
import { FaqAccordionList } from "@/components/sections/faq/FaqSections";

export function ContactHero() {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#EAE5DC] text-center">
      <div className="mx-auto max-w-4xl px-6">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
          CONNECT WITH John Doe
        </span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-serif font-bold text-[#171B18] leading-tight">
          Request a Free Quote & Site Visit
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#575E58] max-w-2xl mx-auto leading-relaxed">
          Reach out for turnkey residential painting, exterior facade protection, Italian stucco finishes, or architectural partnerships in Pune and surrounding cities.
        </p>
      </div>
    </section>
  );
}

export function ContactUsPageContent() {
  return (
    <div className="bg-[#FAF8F5]">
      <ContactHero />
      <RequestQuoteAndMap />
      <FreeSiteVisitBanner />
      <div className="py-8">
        <div className="text-center mb-6">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-2xl font-serif font-bold text-[#171B18] mt-1">
            Common Inquiries
          </h2>
        </div>
        <FaqAccordionList />
      </div>
    </div>
  );
}
