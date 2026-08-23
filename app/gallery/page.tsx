import {
  GalleryHero,
  GalleryFilterGrid,
} from "@/components/sections/gallery/GallerySections";
import { FreeSiteVisitBanner } from "@/components/sections/home/FreeSiteVisitBanner";
import { RequestQuoteAndMap } from "@/components/sections/home/RequestQuoteAndMap";

export default function GalleryPage() {
  return (
    <div className="bg-[#FAF8F5]">
      <GalleryHero />
      <GalleryFilterGrid />
      <FreeSiteVisitBanner />
      <RequestQuoteAndMap />
    </div>
  );
}
