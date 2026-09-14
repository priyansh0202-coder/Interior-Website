"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "About", href: "/about" },
    // { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DC] transition-all duration-200">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-md ring-2 ring-[#DFCBB7] shrink-0">
            <Image
              src="/assets/favicon.png"
              alt="Colourfull Spaces"
              width={64}
              height={64}
              priority
              unoptimized
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-base sm:text-lg font-serif font-bold text-[#1E150F] tracking-tight leading-none group-hover:text-[#9C6644] transition-colors">
              Colourfull Spaces
            </span>
            <span className="text-[9px] sm:text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-[#9C6644] leading-none mt-1">
              Interiors
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#575E58]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[#171B18] ${
                  isActive ? "text-[#171B18] font-semibold" : ""
                }`}
              >
                {link.title}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#171B18] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Search Icon + CTA Button */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="p-2 text-[#575E58] hover:text-[#171B18] transition-colors rounded-full hover:bg-[#EFE9DF]"
            aria-label="Search"
          >
            <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          <Button href="/contact-us" variant="primary" size="sm" withArrow className="hidden sm:inline-flex">
            Book a Consultation
          </Button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#171B18] rounded-lg hover:bg-[#EFE9DF]"
            aria-label="Toggle Navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#EAE5DC] px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1 text-sm ${
                pathname === link.href ? "text-[#171B18] font-bold" : "text-[#575E58] hover:text-[#171B18]"
              }`}
            >
              {link.title}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#EAE5DC]">
            <Button href="/contact-us" variant="primary" size="md" withArrow className="w-full justify-center">
              Book a Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
