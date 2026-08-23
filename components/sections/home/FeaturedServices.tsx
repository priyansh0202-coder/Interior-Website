import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function FeaturedServices() {
  return (
    <section className="py-20 md:py-28 bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="What We Deliver"
          title="Master Coating & Building Services"
          subtitle="From bespoke luxury apartment interiors to multi-storey facade painting, we provide end-to-end craftsmanship."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-stone-900 border border-stone-800 p-6 sm:p-8 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-48 w-full rounded-2xl overflow-hidden mb-6 bg-stone-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-stone-400 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
                <Link
                  href="/services"
                  className="text-xs font-semibold uppercase tracking-widest text-amber-400 hover:text-amber-300"
                >
                  Explore Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="gold" size="md">
            View All 10+ Services
          </Button>
        </div>
      </div>
    </section>
  );
}
