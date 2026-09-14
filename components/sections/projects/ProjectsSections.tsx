"use client";

import React, { useState, useEffect, useCallback } from "react";
import { projectsData } from "@/data/projects";
import { ProjectItem } from "@/types";

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
          Explore luxury penthouses, residential villas, active renovation sites, and commercial hubs executed by our master teams.
        </p>
      </div>
    </section>
  );
}

interface ModalState {
  project: ProjectItem;
  currentIndex: number;
}

export function ProjectFilterGrid() {
  const [filter, setFilter] = useState<string>("all");
  const [modalState, setModalState] = useState<ModalState | null>(null);

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Ongoing", value: "ongoing" },
    { label: "Completed", value: "completed" },
    { label: "Residential Estates", value: "residential" },
    { label: "Luxury Interiors", value: "interior" },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    if (filter === "ongoing") return p.status === "ongoing";
    if (filter === "completed") return p.status === "completed";
    return p.category === filter;
  });

  const openModal = (project: ProjectItem, index: number) => {
    setModalState({ project, currentIndex: index });
  };

  const closeModal = () => {
    setModalState(null);
  };

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
                  ? "bg-[#2B1D16] text-white shadow-xs"
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
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={openModal}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Gallery Modal */}
      {modalState && (
        <ProjectLightboxModal
          modalState={modalState}
          onClose={closeModal}
          onIndexChange={(newIdx) =>
            setModalState((prev) => (prev ? { ...prev, currentIndex: newIdx } : null))
          }
        />
      )}
    </section>
  );
}

function ProjectCard({
  project,
  onOpenModal,
}: {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem, index: number) => void;
}) {
  const images =
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages
      : [project.coverImage];

  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-[#EAE5DC] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group">
      {/* Main Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-200 select-none">
        <img
          src={images[activeIdx] || project.coverImage}
          alt={`${project.title} - photo ${activeIdx + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 cursor-pointer group-hover:scale-102"
          onClick={() => onOpenModal(project, activeIdx)}
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 pointer-events-none">
          <span
            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-xs ${
              project.status === "ongoing"
                ? "bg-[#E5A93C] text-black"
                : "bg-white text-[#2B1D16]"
            }`}
          >
            {project.status === "ongoing" ? "Ongoing Project" : "Completed"}
          </span>

          {images.length > 1 && (
            <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wide rounded-full bg-black/60 text-white backdrop-blur-xs flex items-center gap-1 shadow-xs">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {activeIdx + 1} / {images.length} Photos
            </span>
          )}
        </div>

        {/* Enlarge Button */}
        <button
          type="button"
          onClick={() => onOpenModal(project, activeIdx)}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
          title="Open Full Image Gallery"
          aria-label="Open Full Image Gallery"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>

        {/* Quick Prev / Next Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/55 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-xs transition-opacity opacity-90 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shadow-md text-base"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/55 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-xs transition-opacity opacity-90 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shadow-md text-base"
              aria-label="Next photo"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Gallery Strip for Projects with multiple images */}
      {images.length > 1 && (
        <div className="flex items-center gap-2 px-5 py-2.5 bg-[#FAF7F2] border-b border-[#EAE5DC] overflow-x-auto">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#767E77] mr-1 shrink-0">
            Site Photos:
          </span>
          <div className="flex items-center gap-1.5">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIdx(i)}
                className={`relative w-11 h-8 rounded-md overflow-hidden border transition-all cursor-pointer shrink-0 ${
                  activeIdx === i
                    ? "border-[#E5A93C] ring-2 ring-[#E5A93C]/50 scale-105"
                    : "border-[#EAE5DC] opacity-70 hover:opacity-100"
                }`}
                title={`Photo ${i + 1}`}
                aria-label={`View photo ${i + 1}`}
              >
                <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => onOpenModal(project, activeIdx)}
            className="text-[11px] font-semibold text-[#8B5E3C] hover:text-[#2B1D16] whitespace-nowrap ml-auto cursor-pointer transition-colors"
          >
            Enlarge All ({images.length}) →
          </button>
        </div>
      )}

      {/* Card Info Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap justify-between items-center gap-2 text-[11px] text-[#767E77] font-semibold tracking-wider uppercase">
            <span>📍 {project.location}</span>
            <span className="text-[#2B1D16] font-bold">Architect: {project.architectName}</span>
          </div>

          <h3 className="mt-2.5 text-xl sm:text-2xl font-serif font-bold text-[#171B18]">
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
        </div>

        <div className="mt-6 pt-4 border-t border-[#F2EDE4] flex justify-between items-center text-xs text-[#767E77]">
          <span>
            Client: <strong className="text-[#171B18]">{project.clientName}</strong>
          </span>
          <span className="font-medium text-[#2B1D16]">{project.completionDate}</span>
        </div>
      </div>
    </div>
  );
}

function ProjectLightboxModal({
  modalState,
  onClose,
  onIndexChange,
}: {
  modalState: ModalState;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}) {
  const { project, currentIndex } = modalState;
  const images =
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages
      : [project.coverImage];

  const handlePrev = useCallback(() => {
    onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onIndexChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="flex items-center justify-between text-white pb-3 border-b border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex items-center gap-2.5">
            <span
              className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                project.status === "ongoing"
                  ? "bg-[#E5A93C] text-black"
                  : "bg-white text-black"
              }`}
            >
              {project.status === "ongoing" ? "Ongoing Site" : "Completed"}
            </span>
            <span className="text-xs text-stone-300">
              📍 {project.location} • Architect: <strong>{project.architectName}</strong>
            </span>
          </div>
          <h2 className="text-base sm:text-xl font-serif font-bold text-white mt-1">
            {project.title}
          </h2>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-3 max-h-[72vh] overflow-hidden select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`${project.title} - photo ${currentIndex + 1}`}
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center text-2xl backdrop-blur-xs transition-colors cursor-pointer shadow-lg"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-6 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center text-2xl backdrop-blur-xs transition-colors cursor-pointer shadow-lg"
              aria-label="Next photo"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Bottom Thumbnails & Project Details */}
      <div
        className="bg-black/50 border border-white/10 rounded-xl p-3 sm:p-4 text-white max-w-4xl mx-auto w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-300 text-center sm:text-left">
            <span>
              Client: <strong className="text-white">{project.clientName}</strong>
            </span>
            <span className="mx-2">•</span>
            <span>
              Photo <strong>{currentIndex + 1}</strong> of <strong>{images.length}</strong>
            </span>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onIndexChange(idx)}
                  className={`w-14 h-10 rounded-md overflow-hidden border transition-all cursor-pointer shrink-0 ${
                    currentIndex === idx
                      ? "border-[#E5A93C] ring-2 ring-[#E5A93C]/60 scale-105"
                      : "border-white/20 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Jump to photo ${idx + 1}`}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

