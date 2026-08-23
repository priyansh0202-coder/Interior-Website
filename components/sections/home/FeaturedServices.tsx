import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function FeaturedServices() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="WHAT WE DELIVER"
          title="Master Coating & Building Services"
          subtitle="From bespoke luxury apartment interiors to multi-storey facade painting, we provide end-to-end craftsmanship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-white border border-[#EAE5DC] p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-44 w-full rounded-xl overflow-hidden mb-5 bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-base font-serif font-bold text-[#171B18] group-hover:text-[#20382B] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs text-[#575E58] leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F4EFE6] flex items-center justify-between">
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#20382B] hover:underline"
                >
                  Explore Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/services" variant="primary" size="md" withArrow>
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
