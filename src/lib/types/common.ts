/**
 * Common type for geographic coordinates
 */
export interface Coordinates {
  lat: number;
  lng: number;
}

/**
 * Common type for business operating hours
 */
export interface BusinessHours {
  [key: string]: string; // e.g., "monday": "9:00 AM - 6:00 PM"
}

/**
 * Common type for metadata
 */
export interface Metadata {
  lastUpdated: string;
  author?: string;
  tags?: string[];
} 