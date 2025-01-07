export type LocationCategory = 'restaurant' | 'market' | 'health' | 'community' | 'services';

export interface Location {
  id: string;
  name: string;
  category: LocationCategory;
  coordinates: {
    lat: number;
    lng: number;
  };
  address: string;
  city: string;
  phone?: string;
  website?: string;
  description?: string;
  // Optional fields for additional information
  hours?: {
    [key: string]: string; // e.g., "monday": "9:00 AM - 6:00 PM"
  };
  tags?: string[]; // e.g., ["grocery", "halal", "turkish-products"]
}

// Map of guide types
export const guideTypes = {
  housing: 'housing',
  healthcare: 'healthcare',
  education: 'education',
  employment: 'employment',
  transportation: 'transportation',
  banking: 'banking',
  immigration: 'immigration',
  culture: 'culture',
} as const;

export type GuideType = keyof typeof guideTypes; 