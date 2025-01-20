/**
 * Available guide types in the system
 */
export const GUIDE_TYPES = {
  housing: 'housing',
  healthcare: 'healthcare',
  education: 'education',
  employment: 'employment',
  transportation: 'transportation',
  banking: 'banking',
  immigration: 'immigration',
  culture: 'culture',
  cities: 'cities',
} as const;

/**
 * Supported languages in the system
 */
export const SUPPORTED_LANGUAGES = {
  "tr-TR": 'Türkçe',
} as const;

/**
 * Type for supported languages
 */
export type Language = keyof typeof SUPPORTED_LANGUAGES;

/**
 * Type for guide categories derived from GUIDE_TYPES
 */
export type GuideType = keyof typeof GUIDE_TYPES;

/**
 * Represents a guide category with its metadata
 */
export interface GuideCategory {
  /** Unique identifier for the guide */
  id: string;
  /** Type of the guide */
  type: GuideType;
  /** Title of the guide */
  title: string;
  /** Description of the guide */
  description: string;
  /** Icon name from the icon library */
  iconName: string;
  /** Tailwind CSS color classes */
  color: string;
  /** URL-friendly slug */
  slug: string;
}

/**
 * Props for the Guide page component
 */
export interface GuidePageProps {
  guide: GuideCategory;
  language?: Language;
} 