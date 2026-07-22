export interface SubService {
  name: string;
  desc: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  heroImage: string;
  iconName: string;
  category: 'Weddings' | 'Corporate' | 'Social' | 'Production' | 'Design';
  startingPrice: string;
  features: string[];
  subServices: SubService[];
  galleryImages: string[];
}

export interface GalleryItem {
  id: number;
  category: 'Weddings' | 'Corporate' | 'Decor' | 'Social' | 'Production';
  img: string;
  title: string;
  subtitle?: string;
  location?: string;
}

export interface PackageTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceNum: number;
  popular?: boolean;
  guestCapacity: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  color: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  day: string;
  category: string;
  title: string;
  speaker: {
    name: string;
    role: string;
    avatar: string;
  };
  location: string;
  description: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  eventType: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  experience: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  mobile: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  location: string;
  budgetRange: string;
  servicesNeeded: string[];
  message: string;
}
