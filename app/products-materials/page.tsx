import {
  ProductsHero,
  MaterialsCatalog,
} from "@/components/sections/products-materials/ProductsMaterialsSections";
import { BrandLogos } from "@/components/sections/home/BrandLogos";
import { FreeSiteVisitBanner } from "@/components/sections/home/FreeSiteVisitBanner";
import { RequestQuoteAndMap } from "@/components/sections/home/RequestQuoteAndMap";

export default function ProductsMaterialsPage() {
  return (
    <div className="bg-[#FAF8F5]">
      <ProductsHero />
      <MaterialsCatalog />
      <BrandLogos />
      <FreeSiteVisitBanner />
      <RequestQuoteAndMap />
    </div>
  );
}
