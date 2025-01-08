import type { Coordinates, BusinessHours } from './common';

/**
 * Available categories for locations
 */
export type LocationCategory = 'restaurant' | 'market' | 'health' | 'community' | 'services';

/**
 * Represents a Turkish business or community location
 */
export interface Location {
  /** Unique identifier for the location */
  id: string;
  /** Name of the location */
  name: string;
  /** Category of the location */
  category: LocationCategory;
  /** Geographic coordinates */
  coordinates: Coordinates;
  /** Full street address */
  address: string;
  /** City name */
  city: string;
  /** Contact phone number */
  phone?: string;
  /** Website URL */
  website?: string;
  /** Description of the location */
  description?: string;
  /** Operating hours by day */
  hours?: BusinessHours;
  /** Tags for filtering and categorization */
  tags?: string[];
} 