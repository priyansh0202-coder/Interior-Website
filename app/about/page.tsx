import {
  AboutHero,
  CompanyProfile,
  MissionVisionValues,
} from "@/components/sections/about/AboutSections";
import { OurStory } from "@/components/sections/home/OurStory";
import { WhyChooseUsAndTestimonials } from "@/components/sections/home/WhyChooseUsAndTestimonials";
import { FreeSiteVisitBanner } from "@/components/sections/home/FreeSiteVisitBanner";

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F5]">
      <AboutHero />
      <OurStory />
      <CompanyProfile />
      <MissionVisionValues />
      <WhyChooseUsAndTestimonials />
      <FreeSiteVisitBanner />
    </div>
  );
}
