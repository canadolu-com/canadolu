import { Location, LocationCategory } from '@/lib/types';
import listingsData from '@/lib/data/listings.json';

// Cache for geocoding results
const geocodeCache = new Map<string, Promise<{ lat: number; lng: number }>>();

export interface RawListing {
  title: string;
  url: string;
  imageUrl: string;
  rating?: string;
  location: string;
  phone: string;
  isSponsored?: boolean;
  address: string;
  description?: string;
  tags: string[];
}

function determineCategory(tags: string[]): LocationCategory {
  if (tags.includes('cami') || tags.includes('mosque')) return 'community';
  if (tags.includes('restaurant') || tags.includes('cafe')) return 'restaurant';
  if (tags.includes('market') || tags.includes('grocery')) return 'market';
  if (tags.includes('health') || tags.includes('doctor')) return 'health';
  return 'services';
}

async function extractCoordinates(address: string): Promise<{ lat: number; lng: number } | undefined> {
  // Return from cache if available
  if (geocodeCache.has(address)) {
    return geocodeCache.get(address)!;
  }

  // Default coordinates for common cities
  const defaultCoordinates = {
    'Toronto': { lat: 43.6532, lng: -79.3832 },
    'Montreal': { lat: 45.5017, lng: -73.5673 },
    'Vancouver': { lat: 49.2827, lng: -123.1207 },
    'Ottawa': { lat: 45.4215, lng: -75.6972 },
    'Calgary': { lat: 51.0447, lng: -114.0719 },
  };

  // If the address contains one of our default cities, use those coordinates
  const cityMatch = Object.keys(defaultCoordinates).find(city =>
    address?.toLowerCase().includes(city.toLowerCase())
  );

  if (cityMatch) {
    const coordinates = defaultCoordinates[cityMatch as keyof typeof defaultCoordinates];
    geocodeCache.set(address, Promise.resolve(coordinates));
    return coordinates;
  }

  // const geocodingPromise = new Promise<{ lat: number; lng: number }>(async (resolve) => {
  //   try {
  //     const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  //     if (!apiKey) {
  //       throw new Error('Google Maps API key is not configured');
  //     }

  //     const response = await fetch(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //         address
  //       )}&key=${apiKey}`
  //     );

  //     if (!response.ok) {
  //       throw new Error('Geocoding request failed');
  //     }

  //     const data = await response.json();

  //     if (data.status === 'OK' && data.results && data.results[0]) {
  //       const { lat, lng } = data.results[0].geometry.location;
  //       resolve({ lat, lng });
  //     } else if (data.status === 'ZERO_RESULTS') {
  //       // If no results found, use Toronto coordinates as fallback
  //       resolve({ lat: 43.6532, lng: -79.3832 });
  //     } else {
  //       throw new Error(`Geocoding failed: ${data.status}`);
  //     }
  //   } catch (error) {
  //     console.error('Geocoding error:', error);
  //     // Fallback to Toronto coordinates in case of error
  //     resolve({ lat: 43.6532, lng: -79.3832 });
  //   }
  // });

  // // Store in cache
  // geocodeCache.set(address, geocodingPromise);
  // return geocodingPromise;
}
export async function transformListingsToLocations(): Promise<Location[]> {
  const transformedListings = await Promise.all(
    (listingsData as RawListing[]).map(async (listing: RawListing, index) => {
      const coordinates = await extractCoordinates(listing.address);
      if (!coordinates) return null;

      return {
        id: `listing-${index}`,
        name: listing.title,
        category: determineCategory(listing.tags || []),
        address: listing.address,
        city: listing.location,
        phone: listing.phone,
        website: listing.url,
        coordinates,
        rating: listing.rating !== "0" ? parseFloat(listing?.rating || "0") : undefined,
        description: listing.description,
        isSponsored: listing.isSponsored,
      };
    })
  );

  return transformedListings.filter((location): location is Location => location !== null) as Location[];
} 