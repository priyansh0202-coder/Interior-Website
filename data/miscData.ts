import { TestimonialItem, ClientOrArchitect, GalleryItem, BlogPost } from "@/types";

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Rajesh & Priya Singhania",
    roleOrProject: "Worli Penthouse Renovation",
    location: "Worli, Mumbai",
    rating: 5,
    review: "The Venetian plaster wall in our double-height living room is pure art. Their team arrived on time every day, worked with vacuum sanders, and handed over the apartment spotless.",
    projectType: "Luxury Interior & Stucco Finish",
  },
  {
    id: "test-2",
    clientName: "Ar. Rohan Mehta",
    roleOrProject: "Principal Architect, Studio Morphogenesis",
    location: "Bandra, Mumbai",
    rating: 5,
    review: "We have collaborated with Apex Interiors on 12 high-end residential and commercial projects. Their command over Italian PU wood finishes and razor-sharp paint transitions is unmatched in the industry.",
    projectType: "Architect Collaboration",
  },
  {
    id: "test-3",
    clientName: "Karan Malhotra",
    roleOrProject: "Managing Director, Green Valley Towers",
    location: "Pune",
    rating: 5,
    review: "Executing the complete exterior repainting and waterproofing for our 18-storey society was executed with top-tier safety harnesses and zero complaints from residents.",
    projectType: "Society Building Painting",
  },
];

export const clientsAndArchitectsData: ClientOrArchitect[] = [
  {
    id: "arch-1",
    name: "Studio Morphogenesis",
    type: "architect",
    companyName: "Studio Morphogenesis Architects",
    logoOrAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    location: "Mumbai",
    collaborationCount: 14,
    testimonial: "Apex brings our most intricate interior visions and texture finishes to life with flawless precision.",
  },
  {
    id: "arch-2",
    name: "SpaceMatrix Design Hub",
    type: "architect",
    companyName: "SpaceMatrix Global",
    logoOrAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    location: "Bengaluru / Mumbai",
    collaborationCount: 9,
    testimonial: "Consistent quality, strict site timelines, and exceptional Italian PU wood finish standards.",
  },
  {
    id: "corp-1",
    name: "Horizon Skyline Developers",
    type: "builder",
    companyName: "Horizon Skyline Real Estate",
    logoOrAvatar: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop",
    location: "Mumbai",
    collaborationCount: 6,
    testimonial: "Our trusted turnkey partner for high-rise facade waterproofing and luxury sample flat finishes.",
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Minimalist Japandi Living Room",
    category: "interior",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
    location: "Worli, Mumbai",
    description: "Matte limestone washable emulsion paired with natural oak wood paneling.",
  },
  {
    id: "gal-2",
    title: "Gold-Leaf Venetian Plaster Accent",
    category: "texture",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    location: "Juhu, Mumbai",
    description: "Custom artisan troweled Venetian marble stucco with subtle metallic flecks.",
  },
  {
    id: "gal-3",
    title: "Italian High-Gloss PU Bar Unit",
    category: "polishing",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000&auto=format&fit=crop",
    location: "Khar, Mumbai",
    description: "9-coat Italian mirror-gloss black PU finish over fluted smoked eucalyptus veneer.",
  },
  {
    id: "gal-4",
    title: "Modern Facade Weather Coating",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    location: "Pune",
    description: "Elastomeric dirt-resistant exterior paint with silicon weather shield technology.",
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    title: "How to Choose the Right Paint Sheen for Every Room in Your Home",
    slug: "choose-right-paint-sheen-guide",
    excerpt: "From dead matte to high-gloss, discover which paint sheen balances light reflection, stain cleanability, and durability.",
    content: "When selecting paint for your luxury home, colour is only half the story. The sheen level determines how light interacts with the room and how well the surface resists moisture and everyday scrubbing...",
    category: "Colour Guide",
    author: {
      name: "Vikram Singhania",
      role: "Lead Colour Consultant",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    publishedAt: "February 15, 2026",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop",
    tags: ["Interior Painting", "Colour Guide", "Luxury Finishes"],
  },
  {
    id: "blog-2",
    title: "Venetian Plaster vs. Wallpaper: Which is Better for Feature Walls?",
    slug: "venetian-plaster-vs-wallpaper",
    excerpt: "Comparing durability, longevity, aesthetics, and maintenance of authentic lime-based Venetian plaster and luxury wallcoverings.",
    content: "Feature walls have become a quintessential staple in modern architectural design. While wallpapers offer pattern variety, Italian Venetian plaster provides timeless depth and lasts decades without peeling...",
    category: "Textures & Polishing",
    author: {
      name: "Sameer Kulkarni",
      role: "Master Texture Artisan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    publishedAt: "January 28, 2026",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    tags: ["Venetian Plaster", "Textures", "Wall Decor"],
  },
];
