import {
  ClientsHero,
  ArchitectsCollaborations,
} from "@/components/sections/clients-architects/ClientsArchitectsSections";
import { WhyChooseUsAndTestimonials } from "@/components/sections/home/WhyChooseUsAndTestimonials";
import { FreeSiteVisitBanner } from "@/components/sections/home/FreeSiteVisitBanner";
import { RequestQuoteAndMap } from "@/components/sections/home/RequestQuoteAndMap";

export default function ClientsArchitectsPage() {
  return (
    <div className="bg-[#FAF8F5]">
      <ClientsHero />
      <ArchitectsCollaborations />
      <WhyChooseUsAndTestimonials />
      <FreeSiteVisitBanner />
      <RequestQuoteAndMap />
    </div>
  );
}
