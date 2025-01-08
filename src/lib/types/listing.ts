import { GuideType } from './guide';

/**
 * Available business types in the system
 */
export const BUSINESS_TYPES = {
  automotive: 'automotive',
  education: 'education',
  healthcare: 'healthcare',
  professional: 'professional',
  retail: 'retail',
  restaurant: 'restaurant',
  community: 'community',
  finance: 'finance',
  realestate: 'realestate',
  transportation: 'transportation',
} as const;

/**
 * Type for business categories derived from BUSINESS_TYPES
 */
export type BusinessType = keyof typeof BUSINESS_TYPES;

/**
 * Represents a business listing with its metadata
 */
export interface Listing {
  /** Unique identifier for the listing */
  id: string;
  /** Title of the business */
  title: string;
  /** Type of business */
  type: BusinessType;
  /** Business description */
  description: string;
  /** Contact information */
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  /** Location information */
  location: {
    address: string;
    city: string;
    province: string;
    postalCode?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  /** Business hours */
  hours?: {
    [key: string]: string;
  };
  /** Business rating */
  rating?: string;
  /** Business tags */
  tags?: string[];
  /** Whether the listing is sponsored */
  isSponsored?: boolean;
  /** Social media links */
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  /** Business features/amenities */
  features?: string[];
  /** Payment methods accepted */
  paymentMethods?: string[];
  /** Languages spoken */
  languages?: string[];
  /** Related guide type if applicable */
  relatedGuideType?: GuideType;
} 