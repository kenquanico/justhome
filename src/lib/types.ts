import type { LucideIcon } from 'lucide-react';

export type ListingType = 'Buy' | 'Rent';

export type PropertyType = 'Apartment' | 'Villa' | 'Town House' | 'Penthouse' | 'Commercial' | 'Luxury Homes';

export type Property = {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  city: string;
  address: string;
  price: string;
  priceValue: number;
  status: 'FOR SALE' | 'FOR RENT';
  listingType: ListingType;
  type: PropertyType;
  categorySlug: string;
  featured?: boolean;
  images: string[];
  image: string;
  beds: number;
  baths: number;
  sqft: string;
  sqftValue: number;
  yearBuilt: number;
  parking: number;
  amenities: string[];
  agentId: string;
  dateListed: string;
};

export type Agent = {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  phone: string;
  email: string;
  rating: number;
  listingCount: number;
  image: string;
  social: string;
};

export type Category = {
  label: PropertyType;
  slug: string;
  count: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export type Location = {
  city: string;
  slug: string;
  homes: string;
  description: string;
  image: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};
