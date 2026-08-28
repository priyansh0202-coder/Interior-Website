import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  withArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-tight";

  const variants = {
    primary: "bg-[#2B1D16] text-white hover:bg-[#1C110B] shadow-sm hover:shadow-md",
    secondary: "bg-[#F4EFE6] text-[#171B18] hover:bg-[#EBE4D8] border border-[#E0D8CB]",
    white: "bg-white text-[#171B18] hover:bg-[#F8F6F2] shadow-sm border border-stone-200/80",
    outline: "border border-[#2B1D16] text-[#2B1D16] hover:bg-[#2B1D16] hover:text-white bg-transparent",
    ghost: "text-[#171B18] hover:bg-[#F4EFE6]",
    gold: "bg-[#2B1D16] text-white hover:bg-[#1C110B] shadow-sm hover:shadow-md",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-xs sm:text-sm px-5 py-2.5 gap-2",
    lg: "text-sm sm:text-base px-6 py-3.5 gap-2.5",
  };

  const combinedClass = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5">→</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClass}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
}
