import {
  FaqHero,
  FaqAccordionList,
} from "@/components/sections/faq/FaqSections";
import { FreeSiteVisitBanner } from "@/components/sections/home/FreeSiteVisitBanner";
import { RequestQuoteAndMap } from "@/components/sections/home/RequestQuoteAndMap";

export default function FaqPage() {
  return (
    <div className="bg-[#FAF8F5]">
      <FaqHero />
      <FaqAccordionList />
      <FreeSiteVisitBanner />
      <RequestQuoteAndMap />
    </div>
  );
}
