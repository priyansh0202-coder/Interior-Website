import {
  BlogHero,
  BlogGrid,
} from "@/components/sections/blog/BlogSections";
import { FreeSiteVisitBanner } from "@/components/sections/home/FreeSiteVisitBanner";
import { RequestQuoteAndMap } from "@/components/sections/home/RequestQuoteAndMap";

export default function BlogPage() {
  return (
    <div className="bg-[#FAF8F5]">
      <BlogHero />
      <BlogGrid />
      <FreeSiteVisitBanner />
      <RequestQuoteAndMap />
    </div>
  );
}
