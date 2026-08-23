import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "left",
  className,
  light = false,
}: SectionHeaderProps) {
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col mb-8 md:mb-12", alignments[align], className)}>
      {badge && (
        <span
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.2em] mb-2.5",
            light ? "text-[#A3B8AA]" : "text-[#767E77]"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold tracking-tight leading-snug",
          light ? "text-white" : "text-[#171B18]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-sm sm:text-base leading-relaxed max-w-2xl",
            light ? "text-[#CAD5CE]" : "text-[#575E58]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
