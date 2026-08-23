export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: "painting" | "polishing" | "texture" | "waterproofing" | "renovation" | "complete-solutions";
  iconName: string;
  image: string;
  features: string[];
  benefits: string[];
  idealFor: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: "residential" | "commercial" | "interior" | "building";
  status: "ongoing" | "completed";
  clientName: string;
  architectName: string;
  location: string;
  completionDate?: string;
  duration?: string;
  coverImage: string;
  galleryImages: string[];
  servicesProvided: string[];
}

export interface ProductMaterialItem {
  id: string;
  name: string;
  category: "paint" | "texture" | "polish" | "waterproofing" | "specialty";
  brand: string;
  description: string;
  finishType: string;
  durability: string;
  features: string[];
  image: string;
}

export interface BrandPartner {
  name: string;
  logo: string;
  category: string;
  tagline: string;
}

export interface ClientOrArchitect {
  id: string;
  name: string;
  type: "architect" | "corporate" | "builder" | "residential";
  companyName?: string;
  logoOrAvatar: string;
  location: string;
  collaborationCount?: number;
  testimonial?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "interior" | "exterior" | "residential" | "commercial" | "texture" | "polishing" | "building";
  image: string;
  beforeImage?: string;
  location: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: "Painting" | "Textures & Polishing" | "Building Maintenance" | "Interior Design" | "Colour Guide" | "Industry Updates";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "pricing" | "materials" | "warranties" | "timelines" | "site-visits" | "payment" | "process" | "general";
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrProject: string;
  location: string;
  rating: number;
  review: string;
  avatar?: string;
  projectType: string;
}
