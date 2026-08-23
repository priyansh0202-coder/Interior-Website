import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function ProjectHighlights() {
  return (
    <section className="py-20 md:py-28 bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Signature Showcase"
            title="Featured Projects & Landmarks"
            subtitle="Explore our ongoing and recently handed-over interior and exterior projects."
            align="left"
            className="mb-0"
            light
          />
          <Button href="/projects" variant="outline" size="sm" className="mt-6 md:mt-0 border-stone-700 text-stone-300 hover:bg-stone-800">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-800"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full ${
                      project.status === "ongoing"
                        ? "bg-amber-500 text-stone-950"
                        : "bg-emerald-600 text-white"
                    }`}
                  >
                    {project.status === "ongoing" ? "Ongoing Project" : "Completed"}
                  </span>
                  <span className="px-3 py-1 text-xs uppercase tracking-wider rounded-full bg-stone-900/80 text-stone-300 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  {project.location} • {project.architectName}
                </p>
                <h3 className="mt-2 text-2xl font-serif font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-stone-400 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-6 pt-4 border-t border-stone-800 flex justify-between items-center">
                  <span className="text-xs text-stone-400">
                    Client: <strong className="text-white">{project.clientName}</strong>
                  </span>
                  <Link
                    href="/projects"
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
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
