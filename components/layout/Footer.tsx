import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-[#16251C] text-[#D0D7D2] border-t border-[#24382B]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white/10 text-white flex items-center justify-center font-serif text-xs font-bold border border-white/10">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.31l7.5 4.12v7.14L12 19.69l-7.5-4.12V8.43L12 4.31z" />
                </svg>
              </div>
              <span className="text-lg font-serif font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#9EB0A3] max-w-sm">
              Thoughtfully finished interiors, for the way you live. Bringing craft and care to every wall across Pune and beyond.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-[#9EB0A3]">
              <a href={siteConfig.socialLinks.facebook} className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:bg-white/10 transition-colors">f</a>
              <a href={siteConfig.socialLinks.instagram} className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:bg-white/10 transition-colors">in</a>
              <a href={siteConfig.socialLinks.pinterest} className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:bg-white/10 transition-colors">p</a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7A9382] mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-white transition-colors">About us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our process</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/contact-us" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7A9382] mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/services" className="hover:text-white transition-colors">Interior painting</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Exterior painting</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Waterproofing</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Texture finishes</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Wood polishing</Link></li>
            </ul>
          </div>

          {/* Col 4: Help */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7A9382] mb-4">
              Help
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact-us" className="hover:text-white transition-colors">Privacy policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with Back to Top */}
        <div className="mt-12 pt-8 border-t border-[#23382B] flex justify-between items-center text-xs text-[#7A9382]">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
            aria-label="Back to top"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
