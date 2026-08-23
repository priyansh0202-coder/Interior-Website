import { HomeHero } from "@/components/sections/home/HomeHero";
import { FeaturePillars } from "@/components/sections/home/FeaturePillars";
import { OurStory } from "@/components/sections/home/OurStory";
import { BrowseBySpace } from "@/components/sections/home/BrowseBySpace";
import { OurProcess } from "@/components/sections/home/OurProcess";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { WhyChooseUsAndTestimonials } from "@/components/sections/home/WhyChooseUsAndTestimonials";
import { BrandLogos } from "@/components/sections/home/BrandLogos";
import { FreeSiteVisitBanner } from "@/components/sections/home/FreeSiteVisitBanner";
import { RequestQuoteAndMap } from "@/components/sections/home/RequestQuoteAndMap";

export default function HomePage() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. 4 Value Pillars Bar */}
      {/* <FeaturePillars /> */}

      {/* 3. Our Story / 2x2 Stats / Founder */}
      <OurStory />

      {/* 4. Browse by Space Visual Cards */}
      <BrowseBySpace />

      {/* 5. Our Process Dark Green Banner */}
      <OurProcess />

      {/* 6. Featured Projects */}
      <FeaturedProjects />

      {/* 7. Why Choose  + Customer Testimonials */}
      <WhyChooseUsAndTestimonials />

      {/* 8. Trusted Brands Marquee */}
      <BrandLogos />

      {/* 9. Free Site Visit CTA Banner */}
      <FreeSiteVisitBanner />

      {/* 10. Request a Quote Form + Office Map */}
      <RequestQuoteAndMap />
    </div>
  );
}
