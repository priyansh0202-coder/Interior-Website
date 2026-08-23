import {
  ServicesHero,
  ServiceCategoryGrid,
} from "@/components/sections/services/ServicesSections";
import { OurProcess } from "@/components/sections/home/OurProcess";
import { FeaturePillars } from "@/components/sections/home/FeaturePillars";
import { FreeSiteVisitBanner } from "@/components/sections/home/FreeSiteVisitBanner";
import { RequestQuoteAndMap } from "@/components/sections/home/RequestQuoteAndMap";

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF8F5]">
      <ServicesHero />
      <FeaturePillars />
      <ServiceCategoryGrid />
      <OurProcess />
      <FreeSiteVisitBanner />
      <RequestQuoteAndMap />
    </div>
  );
}
