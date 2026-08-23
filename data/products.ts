import { ProductMaterialItem, BrandPartner } from "@/types";

export const brandPartners: BrandPartner[] = [
  { name: "Asian Paints Royale", logo: "/brands/asian-paints.svg", category: "Luxury Emulsions & Textures", tagline: "Royale Aspira & Atmos Series" },
  { name: "Berger Silk & WeatherCoat", logo: "/brands/berger.svg", category: "Exterior Protection & Luxury Emulsion", tagline: "Breathe Easy & Long Life" },
  { name: "Dulux Velvet Touch", logo: "/brands/dulux.svg", category: "Super Premium Interior Emulsion", tagline: "Diamond Finish Technology" },
  { name: "Nerolac Impressions", logo: "/brands/nerolac.svg", category: "Eco-Clean HD Paint Systems", tagline: "Ultra HD Colors" },
  { name: "Sirca Italian Wood Coatings", logo: "/brands/sirca.svg", category: "Italian PU & Polyester Polish", tagline: "Authentic Made in Italy Finishes" },
  { name: "ICA Wood & Glass Coatings", logo: "/brands/ica.svg", category: "Water-based & High-Gloss PU", tagline: "Italian Innovation" },
  { name: "Dr. Fixit / Pidilite", logo: "/brands/dr-fixit.svg", category: "Structural Waterproofing", tagline: "Complete Leak-Free Solutions" },
  { name: "Fosroc Construction Chemicals", logo: "/brands/fosroc.svg", category: "Industrial Waterproofing & Admixtures", tagline: "World Class Engineering" },
];

export const productsData: ProductMaterialItem[] = [
  {
    id: "royale-aspira",
    name: "Royale Aspira Ultra Luxury Emulsion",
    category: "paint",
    brand: "Asian Paints",
    description: "The international gold standard in smooth wall paint with Teflon surface protector, crack bridging ability, and unmatched sheen.",
    finishType: "Silken Smooth Sheen",
    durability: "8+ Years",
    features: ["Teflon Surface Protector", "Hydrophobic stain resistance", "Flame spread retardant", "Ultra low VOC"],
    image: "https://images.unsplash.com/photo-1562184552-997c461abbe6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "italian-venetian-stucco",
    name: "Italian Venetian Stucco & Marmorino",
    category: "texture",
    brand: "San Marco / Oikos",
    description: "Natural slaked lime and crushed marble dust formula hand-polished to a glass-like marble feel.",
    finishType: "High Gloss / Semi-Gloss Marble Sheen",
    durability: "12+ Years",
    features: ["100% natural mineral base", "Anti-mould and breathable", "Seamless stone texture", "Handcrafted by artisans"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "sirca-italian-pu",
    name: "Sirca Acrylic 2K Italian PU Polish",
    category: "polish",
    brand: "Sirca",
    description: "Non-yellowing, high-clarity polyurethane finish for natural veneers, Burma teak, and architectural paneling.",
    finishType: "Options: 100% High Gloss or Deep Dead Matte",
    durability: "10+ Years",
    features: ["Scratch & heat resistant", "Non-yellowing clear coat", "Deep optical grain enhancement", "Water & chemical immune"],
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "dr-fixit-roofseal",
    name: "Dr. Fixit Newcoat Ezee & Roofseal Max",
    category: "waterproofing",
    brand: "Dr. Fixit / Pidilite",
    description: "Elastomeric heavy-duty reinforced acrylic liquid membrane for terraces, parapets, and exterior wall joints.",
    finishType: "Flexible Seamless Elastomeric Membrane",
    durability: "10 Years Waterproof Warranty",
    features: ["Rebound elasticity stops thermal cracks", "Reflects solar heat up to 8°C", "Algae and fungus resistance", "Zero joints"],
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop",
  },
];
