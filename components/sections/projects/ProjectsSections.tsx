"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function ProjectsHero() {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#EAE5DC] text-center">
      <div className="mx-auto max-w-4xl px-6">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
          OUR PORTFOLIO
        </span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-serif font-bold text-[#171B18] leading-tight">
          Ongoing & Completed Landmark Projects
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#575E58] max-w-2xl mx-auto leading-relaxed">
          Explore luxury penthouses, residential towers, commercial corporate hubs, and bespoke private estates executed by our master teams.
        </p>
      </div>
    </section>
  );
}

export function ProjectFilterGrid() {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Ongoing", value: "ongoing" },
    { label: "Completed", value: "completed" },
    { label: "Interior", value: "interior" },
    { label: "Building & Facade", value: "building" },
    { label: "Commercial", value: "commercial" },
    { label: "Residential", value: "residential" },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    if (filter === "ongoing") return p.status === "ongoing";
    if (filter === "completed") return p.status === "completed";
    return p.category === filter;
  });

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setFilter(c.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === c.value
                  ? "bg-[#20382B] text-white shadow-xs"
                  : "bg-white text-[#575E58] hover:text-[#171B18] border border-[#EAE5DC]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-white border border-[#EAE5DC] shadow-xs group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-200">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-xs ${
                      project.status === "ongoing"
                        ? "bg-[#E5A93C] text-black"
                        : "bg-white text-[#20382B]"
                    }`}
                  >
                    {project.status === "ongoing" ? "Ongoing" : "Completed"}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap justify-between items-center gap-2 text-[11px] text-[#767E77] font-semibold tracking-wider uppercase">
                  <span>📍 {project.location}</span>
                  <span>Architect: {project.architectName}</span>
                </div>

                <h3 className="mt-2 text-xl sm:text-2xl font-serif font-bold text-[#171B18]">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#575E58] leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.servicesProvided.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-[#FAF8F5] text-[#575E58] border border-[#EAE5DC]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2EDE4] flex justify-between items-center text-xs text-[#767E77]">
                  <span>
                    Client: <strong className="text-[#171B18]">{project.clientName}</strong>
                  </span>
                  <span>{project.completionDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
