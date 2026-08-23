import {
  ProjectsHero,
  ProjectFilterGrid,
} from "@/components/sections/projects/ProjectsSections";
import { FreeSiteVisitBanner } from "@/components/sections/home/FreeSiteVisitBanner";
import { RequestQuoteAndMap } from "@/components/sections/home/RequestQuoteAndMap";

export default function ProjectsPage() {
  return (
    <div className="bg-[#FAF8F5]">
      <ProjectsHero />
      <ProjectFilterGrid />
      <FreeSiteVisitBanner />
      <RequestQuoteAndMap />
    </div>
  );
}
