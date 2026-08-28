import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function ProjectHighlights() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <SectionHeader
            badge="SIGNATURE SHOWCASE"
            title="Featured Projects & Landmarks"
            subtitle="Explore our ongoing and recently handed-over interior and exterior projects."
            align="left"
            className="mb-0"
          />
          <Button href="/projects" variant="secondary" size="sm" className="mt-4 md:mt-0">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-white border border-[#EAE5DC] shadow-xs"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                      project.status === "ongoing"
                        ? "bg-[#E5A93C] text-black"
                        : "bg-white text-[#2B1D16]"
                    }`}
                  >
                    {project.status === "ongoing" ? "Ongoing" : "Completed"}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-widest text-[#767E77] font-semibold">
                  {project.location} • {project.architectName}
                </p>
                <h3 className="mt-1 text-lg font-serif font-bold text-[#171B18]">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs text-[#575E58] line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 pt-3 border-t border-[#F4EFE6] flex justify-between items-center text-xs">
                  <span className="text-[#767E77]">
                    Client: <strong className="text-[#171B18]">{project.clientName}</strong>
                  </span>
                  <Link
                    href="/projects"
                    className="font-semibold text-[#2B1D16] hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
