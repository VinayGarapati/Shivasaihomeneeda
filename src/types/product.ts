export interface ProductSpecification {
  netType?: string;
  frameMaterial?: string;
  frameColour?: string;
  meshColour?: string;
  doorSystemType?: string;
  application?: string;
  openingDirection?: string;
  availableSizes?: string;
  installationType?: string;
  durability?: string;
  meshCount?: string;
  cleaningMethod?: string;
  warranty?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description?: string;
  thumbnailUrl: string;
  videoUrl: string; // e.g. /assets/videos/demo.mp4
  duration?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  description: string;
  image: string;
  images?: string[];
  completionDate?: string;
  specifications: {
    systemType?: string;
    frameMaterial?: string;
    meshType?: string;
    warranty?: string;
    dimensions?: string;
  };
  highlights: string[];
  badge?: string;
  clientReview?: {
    author: string;
    rating: number;
    comment: string;
  };
  googleListingUrl?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  categoryName: string;
  shortDescription: string;
  detailedDescription: string;
  image: string; // Primary image path
  images?: string[]; // Multiple high-res images for carousel/gallery
  price?: number; // Optional price
  priceUnit?: string; // e.g. "₹/sq ft" or "per track meter"
  isPriceOnRequest?: boolean;
  featured?: boolean;
  specifications: ProductSpecification;
  features: string[];
  bestSuitedFor: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName?: string;
  productCount?: number;
}

export type ProductItem = Product;
