import React from "react";
import { clientsAndArchitectsData } from "@/data/miscData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function ClientsHero() {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#EAE5DC] text-center">
      <div className="mx-auto max-w-4xl px-6">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
          ECOSYSTEM OF TRUST
        </span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-serif font-bold text-[#171B18] leading-tight">
          Valued Clients, Architects & Partners
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#575E58] max-w-2xl mx-auto leading-relaxed">
          We work alongside leading architectural firms, interior designers, corporate enterprises, and discerning homeowners across Pune.
        </p>
      </div>
    </section>
  );
}

export function ArchitectsCollaborations() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="ARCHITECT NETWORK"
          title="Collaborations with Design Studios"
          subtitle="How we partner with architects to translate complex CAD drawings into pristine physical reality."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientsAndArchitectsData.map((client) => (
            <div
              key={client.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EAE5DC] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#EAE5DC]">
                    <img
                      src={client.logoOrAvatar}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-[#171B18]">{client.name}</h3>
                    <p className="text-[11px] text-[#767E77]">{client.location}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs text-[#575E58] italic mb-6 leading-relaxed">
                  "{client.testimonial}"
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2EDE4] flex justify-between items-center text-xs text-[#767E77]">
                <span>Joint Projects:</span>
                <strong className="text-[#2B1D16] font-bold">{client.collaborationCount}+ Sites</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
