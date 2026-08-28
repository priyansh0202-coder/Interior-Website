import React from "react";
import { blogPostsData } from "@/data/miscData";

export function BlogHero() {
  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#EAE5DC] text-center">
      <div className="mx-auto max-w-4xl px-6">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#767E77]">
          INSIGHTS & GUIDES
        </span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-serif font-bold text-[#171B18] leading-tight">
          Architectural Coatings & Interior Design Blog
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#575E58] max-w-2xl mx-auto leading-relaxed">
          Expert guides on paint sheen selection, Italian Venetian plasters, waterproofing diagnostics, and luxury home maintenance.
        </p>
      </div>
    </section>
  );
}

export function BlogGrid() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl overflow-hidden bg-white border border-[#EAE5DC] shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-200">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-white text-[#2B1D16] shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-[#767E77] mb-2">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#171B18] group-hover:text-[#2B1D16] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#575E58] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#F2EDE4] mt-4">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-xs text-[#575E58]">{post.author.name}</span>
                </div>
                <span className="text-xs font-semibold text-[#2B1D16] group-hover:underline">
                  Read article →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
