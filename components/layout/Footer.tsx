import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-[#EFE7DC] text-[#574A40] border-t border-[#DFCBB7]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group mb-2">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md ring-2 ring-[#DFCBB7] shrink-0 bg-white">
                <Image
                  src="/assets/favicon.png"
                  alt={siteConfig.name}
                  width={72}
                  height={72}
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-serif font-bold text-[#1E150F] tracking-tight leading-none group-hover:text-[#9C6644] transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-[#9C6644] leading-none mt-1">
                  Interiors • Pune
                </span>
              </div>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-[#6A574A] max-w-sm">
              Thoughtfully finished interiors, for the way you live. Bringing craft and care to every wall across Pune and beyond.
            </p>
            <div className="mt-6">
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#DFCBB7] text-xs font-semibold text-[#1E150F] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all shadow-xs group"
                aria-label="Connect on WhatsApp"
              >
                <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#25D366] transition-colors">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9C6644] mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-[#1E150F] transition-colors">About us</Link></li>
              <li><Link href="/services" className="hover:text-[#1E150F] transition-colors">Our process</Link></li>
              <li><Link href="/projects" className="hover:text-[#1E150F] transition-colors">Projects</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#1E150F] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9C6644] mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/services" className="hover:text-[#1E150F] transition-colors">Interior painting</Link></li>
              <li><Link href="/services" className="hover:text-[#1E150F] transition-colors">Exterior painting</Link></li>
              <li><Link href="/services" className="hover:text-[#1E150F] transition-colors">Waterproofing</Link></li>
              <li><Link href="/services" className="hover:text-[#1E150F] transition-colors">Texture finishes</Link></li>
              <li><Link href="/services" className="hover:text-[#1E150F] transition-colors">Wood polishing</Link></li>
            </ul>
          </div>

          {/* Col 4: Help */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9C6644] mb-4">
              Help
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/faq" className="hover:text-[#1E150F] transition-colors">FAQs</Link></li>
              <li><Link href="/blog" className="hover:text-[#1E150F] transition-colors">Blog</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#1E150F] transition-colors">Privacy policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with Back to Top */}
        <div className="mt-12 pt-8 border-t border-[#DFCBB7] flex justify-between items-center text-xs text-[#7E6A5B]">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white border border-[#DFCBB7] flex items-center justify-center text-[#1E150F] hover:bg-[#F8F3ED] transition-colors shadow-xs"
            aria-label="Back to top"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
