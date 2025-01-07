import { Location } from '../types';

export const locations: Location[] = [
  {
    id: '1',
    name: 'Troy Restaurant',
    category: 'restaurant',
    coordinates: {
      lat: 43.7870,
      lng: -79.4637
    },
    city: 'North York',
    address: '846 Wilson Ave, North York, ON M3K 1E5',
    phone: '(416) 633-3383',
    website: 'http://troyrestaurant.ca',
    description: 'Authentic Turkish cuisine in North York',
    tags: ['restaurant', 'turkish-cuisine', 'halal'],
    hours: {
      monday: '11:00 AM - 10:00 PM',
      tuesday: '11:00 AM - 10:00 PM',
      wednesday: '11:00 AM - 10:00 PM',
      thursday: '11:00 AM - 10:00 PM',
      friday: '11:00 AM - 11:00 PM',
      saturday: '11:00 AM - 11:00 PM',
      sunday: '11:00 AM - 10:00 PM'
    }
  },
  {
    id: '2',
    name: 'Anatolia Turkish Market',
    category: 'market',
    coordinates: {
      lat: 43.7849,
      lng: -79.4861
    },
    city: 'Toronto',
    address: '127 Dufferin St, Toronto, ON M6K 1Y9',
    phone: '(416) 538-8787',
    description: 'Turkish grocery store with imported products',
    tags: ['market', 'grocery', 'turkish-products'],
    hours: {
      monday: '9:00 AM - 8:00 PM',
      tuesday: '9:00 AM - 8:00 PM',
      wednesday: '9:00 AM - 8:00 PM',
      thursday: '9:00 AM - 8:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 7:00 PM',
      sunday: '10:00 AM - 6:00 PM'
    }
  },
  {
    id: '3',
    name: 'Turkish Community Center',
    category: 'community',
    coordinates: {
      lat: 43.7731,
      lng: -79.3458
    },
    city: 'North York',
    address: '789 Don Mills Rd, North York, ON M3C 1T5',
    phone: '(416) 555-0123',
    website: 'https://turkishcommunity.ca',
    description: 'Community center offering cultural programs and support services',
    tags: ['community', 'cultural-center', 'events']
  },
  {
    id: '4',
    name: 'Turkish Medical Clinic',
    category: 'health',
    coordinates: {
      lat: 43.8563,
      lng: -79.5085
    },
    city: 'Vaughan',
    address: '456 Clark Ave W, Vaughan, ON L4J 7K6',
    phone: '(905) 555-0456',
    description: 'Medical clinic with Turkish-speaking staff',
    tags: ['healthcare', 'medical', 'turkish-speaking'],
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM'
    }
  },
  {
    id: '5',
    name: 'Istanbul Cafe',
    category: 'restaurant',
    coordinates: {
      lat: 44.3894,
      lng: -79.6903
    },
    city: 'Barrie',
    address: '123 Dunlop St E, Barrie, ON L4M 1A5',
    phone: '(705) 555-0789',
    description: 'Turkish cafe and bakery in Barrie',
    tags: ['cafe', 'bakery', 'turkish-cuisine'],
    hours: {
      monday: '8:00 AM - 8:00 PM',
      tuesday: '8:00 AM - 8:00 PM',
      wednesday: '8:00 AM - 8:00 PM',
      thursday: '8:00 AM - 8:00 PM',
      friday: '8:00 AM - 9:00 PM',
      saturday: '9:00 AM - 9:00 PM',
      sunday: '9:00 AM - 7:00 PM'
    }
  },
  {
    id: '6',
    name: 'Turkish Translation Services',
    category: 'services',
    coordinates: {
      lat: 43.7184,
      lng: -79.5181
    },
    city: 'Etobicoke',
    address: '321 Islington Ave, Etobicoke, ON M8V 3B1',
    phone: '(416) 555-9012',
    website: 'https://turkishtranslation.ca',
    description: 'Professional translation and interpretation services',
    tags: ['translation', 'interpretation', 'documents'],
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM'
    }
  },
  {
    id: '3',
    name: 'Istanbul Kebab House',
    category: 'restaurant',
    coordinates: { lat: 43.6544, lng: -79.3807 },
    city: 'Toronto',
    address: '654 Yonge St, Toronto, ON M4Y 2A6',
    phone: '(416) 555-1234',
    description: 'Traditional Turkish kebabs and mezze in downtown Toronto',
    tags: ['restaurant', 'kebab', 'halal'],
    hours: {
      monday: '11:00 AM - 11:00 PM',
      tuesday: '11:00 AM - 11:00 PM',
      wednesday: '11:00 AM - 11:00 PM',
      thursday: '11:00 AM - 11:00 PM',
      friday: '11:00 AM - 12:00 AM',
      saturday: '11:00 AM - 12:00 AM',
      sunday: '12:00 PM - 10:00 PM'
    }
  },
  {
    id: '4',
    name: 'Cappadocia Restaurant',
    category: 'restaurant',
    coordinates: { lat: 43.7828, lng: -79.4181 },
    city: 'North York',
    address: '5241 Yonge St, North York, ON M2N 5P8',
    phone: '(416) 555-2345',
    website: 'http://cappadocia.ca',
    description: 'Fine dining Turkish restaurant with authentic atmosphere',
    tags: ['restaurant', 'fine-dining', 'turkish-cuisine'],
    hours: {
      monday: '12:00 PM - 10:00 PM',
      tuesday: '12:00 PM - 10:00 PM',
      wednesday: '12:00 PM - 10:00 PM',
      thursday: '12:00 PM - 10:00 PM',
      friday: '12:00 PM - 11:00 PM',
      saturday: '12:00 PM - 11:00 PM',
      sunday: '12:00 PM - 9:00 PM'
    }
  },
  {
    id: '5',
    name: 'Turkish Bazaar',
    category: 'market',
    coordinates: { lat: 43.7756, lng: -79.4141 },
    city: 'North York',
    address: '5418 Yonge St, North York, ON M2N 5R5',
    phone: '(416) 555-3456',
    description: 'Large Turkish supermarket with fresh produce and imported goods',
    tags: ['market', 'grocery', 'bakery'],
    hours: {
      monday: '8:00 AM - 9:00 PM',
      tuesday: '8:00 AM - 9:00 PM',
      wednesday: '8:00 AM - 9:00 PM',
      thursday: '8:00 AM - 9:00 PM',
      friday: '8:00 AM - 9:00 PM',
      saturday: '8:00 AM - 8:00 PM',
      sunday: '9:00 AM - 7:00 PM'
    }
  },
  {
    id: '6',
    name: 'Mediterranean Market',
    category: 'market',
    coordinates: { lat: 43.8234, lng: -79.5435 },
    city: 'Vaughan',
    address: '7700 Bathurst St, Vaughan, ON L4J 7K3',
    phone: '(905) 555-4567',
    description: 'Turkish and Mediterranean grocery store',
    tags: ['market', 'grocery', 'mediterranean'],
    hours: {
      monday: '9:00 AM - 8:00 PM',
      tuesday: '9:00 AM - 8:00 PM',
      wednesday: '9:00 AM - 8:00 PM',
      thursday: '9:00 AM - 8:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 7:00 PM',
      sunday: '10:00 AM - 6:00 PM'
    }
  },
  {
    id: '7',
    name: 'Turkish Family Health Clinic',
    category: 'health',
    coordinates: { lat: 43.7731, lng: -79.3458 },
    city: 'Toronto',
    address: '245 Eglinton Ave E, Toronto, ON M4P 3B7',
    phone: '(416) 555-5678',
    website: 'http://turkishfamilyhealth.ca',
    description: 'Family medical practice with Turkish-speaking doctors',
    tags: ['healthcare', 'family-doctor', 'turkish-speaking'],
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 3:00 PM'
    }
  },
  {
    id: '8',
    name: 'Anatolian Dental Care',
    category: 'health',
    coordinates: { lat: 43.7852, lng: -79.4237 },
    city: 'North York',
    address: '5000 Yonge St, North York, ON M2N 7E9',
    phone: '(416) 555-6789',
    website: 'http://anatoliandental.ca',
    description: 'Dental clinic with Turkish-speaking staff',
    tags: ['healthcare', 'dental', 'turkish-speaking'],
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 4:00 PM'
    }
  },
  {
    id: '9',
    name: 'Turkish Cultural Center',
    category: 'community',
    coordinates: { lat: 43.7654, lng: -79.4118 },
    city: 'Toronto',
    address: '123 Eglinton Ave W, Toronto, ON M4R 2H8',
    phone: '(416) 555-7890',
    website: 'http://turkishculturalcenter.ca',
    description: 'Cultural center offering language classes and community events',
    tags: ['community', 'culture', 'education']
  },
  {
    id: '10',
    name: 'Turkish Youth Association',
    category: 'community',
    coordinates: { lat: 43.7912, lng: -79.4478 },
    city: 'North York',
    address: '567 Sheppard Ave W, North York, ON M3H 2R9',
    phone: '(416) 555-8901',
    description: 'Youth organization for Turkish-Canadian community',
    tags: ['community', 'youth', 'activities']
  },
  {
    id: '11',
    name: 'Turkish Legal Services',
    category: 'services',
    coordinates: { lat: 43.7711, lng: -79.4117 },
    city: 'Toronto',
    address: '2300 Yonge St, Toronto, ON M4P 1E4',
    phone: '(416) 555-9012',
    website: 'http://turkishlegal.ca',
    description: 'Legal services with Turkish-speaking lawyers',
    tags: ['legal', 'immigration', 'turkish-speaking'],
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM'
    }
  },
  {
    id: '12',
    name: 'Bosphorus Travel Agency',
    category: 'services',
    coordinates: { lat: 43.7845, lng: -79.4195 },
    city: 'North York',
    address: '5150 Yonge St, North York, ON M2N 6L8',
    phone: '(416) 555-0123',
    website: 'http://bosphorustravel.ca',
    description: 'Travel agency specializing in Turkey trips',
    tags: ['travel', 'tourism', 'flights'],
    hours: {
      monday: '9:30 AM - 6:00 PM',
      tuesday: '9:30 AM - 6:00 PM',
      wednesday: '9:30 AM - 6:00 PM',
      thursday: '9:30 AM - 6:00 PM',
      friday: '9:30 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM'
    }
  },
  {
    id: '13',
    name: 'Anatolia Express',
    category: 'restaurant',
    coordinates: { lat: 43.7738, lng: -79.4141 },
    city: 'North York',
    address: '4444 Yonge St, North York, ON M2N 5M5',
    phone: '(416) 555-1234',
    description: 'Quick-service Turkish restaurant',
    tags: ['restaurant', 'fast-food', 'kebab'],
    hours: {
      monday: '10:00 AM - 10:00 PM',
      tuesday: '10:00 AM - 10:00 PM',
      wednesday: '10:00 AM - 10:00 PM',
      thursday: '10:00 AM - 10:00 PM',
      friday: '10:00 AM - 11:00 PM',
      saturday: '11:00 AM - 11:00 PM',
      sunday: '11:00 AM - 9:00 PM'
    }
  },
  {
    id: '14',
    name: 'Turkish Delight Cafe',
    category: 'restaurant',
    coordinates: { lat: 43.6579, lng: -79.3980 },
    city: 'Toronto',
    address: '321 Queen St W, Toronto, ON M5V 2A4',
    phone: '(416) 555-2345',
    description: 'Cafe serving Turkish coffee and desserts',
    tags: ['cafe', 'desserts', 'coffee'],
    hours: {
      monday: '8:00 AM - 8:00 PM',
      tuesday: '8:00 AM - 8:00 PM',
      wednesday: '8:00 AM - 8:00 PM',
      thursday: '8:00 AM - 8:00 PM',
      friday: '8:00 AM - 10:00 PM',
      saturday: '9:00 AM - 10:00 PM',
      sunday: '9:00 AM - 8:00 PM'
    }
  },
  {
    id: '15',
    name: 'Black Sea Market',
    category: 'market',
    coordinates: { lat: 43.7852, lng: -79.4237 },
    city: 'North York',
    address: '5000 Yonge St, North York, ON M2N 7E9',
    phone: '(416) 555-3456',
    description: 'Turkish and Eastern European grocery store',
    tags: ['market', 'grocery', 'imported-goods'],
    hours: {
      monday: '9:00 AM - 9:00 PM',
      tuesday: '9:00 AM - 9:00 PM',
      wednesday: '9:00 AM - 9:00 PM',
      thursday: '9:00 AM - 9:00 PM',
      friday: '9:00 AM - 9:00 PM',
      saturday: '9:00 AM - 8:00 PM',
      sunday: '10:00 AM - 7:00 PM'
    }
  },
  {
    id: '16',
    name: 'Turkish Wellness Center',
    category: 'health',
    coordinates: { lat: 43.7731, lng: -79.3458 },
    city: 'North York',
    address: '789 Don Mills Rd, North York, ON M3C 1T5',
    phone: '(416) 555-4567',
    description: 'Holistic health center with Turkish healing practices',
    tags: ['healthcare', 'wellness', 'alternative-medicine'],
    hours: {
      monday: '10:00 AM - 7:00 PM',
      tuesday: '10:00 AM - 7:00 PM',
      wednesday: '10:00 AM - 7:00 PM',
      thursday: '10:00 AM - 7:00 PM',
      friday: '10:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM'
    }
  },
  {
    id: '17',
    name: 'Turkish Canadian Association',
    category: 'community',
    coordinates: { lat: 43.7912, lng: -79.4478 },
    city: 'North York',
    address: '567 Sheppard Ave W, North York, ON M3H 2R9',
    phone: '(416) 555-5678',
    website: 'http://turkishcanadian.org',
    description: 'Community organization for Turkish-Canadians',
    tags: ['community', 'culture', 'events']
  },
  {
    id: '18',
    name: 'Turkish Immigration Consulting',
    category: 'services',
    coordinates: { lat: 43.7731, lng: -79.3458 },
    city: 'Toronto',
    address: '245 Eglinton Ave E, Toronto, ON M4P 3B7',
    phone: '(416) 555-6789',
    website: 'http://turkishimmigration.ca',
    description: 'Immigration consulting services',
    tags: ['immigration', 'consulting', 'legal'],
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM'
    }
  },
  {
    id: '19',
    name: 'Barrie Turkish Market',
    category: 'market',
    coordinates: { lat: 44.3894, lng: -79.6903 },
    city: 'Barrie',
    address: '456 Dunlop St W, Barrie, ON L4N 1C2',
    phone: '(705) 555-7890',
    description: 'Turkish grocery store serving Barrie area',
    tags: ['market', 'grocery', 'halal'],
    hours: {
      monday: '9:00 AM - 8:00 PM',
      tuesday: '9:00 AM - 8:00 PM',
      wednesday: '9:00 AM - 8:00 PM',
      thursday: '9:00 AM - 8:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 7:00 PM',
      sunday: '10:00 AM - 6:00 PM'
    }
  },
  {
    id: '20',
    name: 'Barrie Turkish Community Center',
    category: 'community',
    coordinates: { lat: 44.3765, lng: -79.6903 },
    city: 'Barrie',
    address: '789 Dunlop St E, Barrie, ON L4M 1A5',
    phone: '(705) 555-8901',
    description: 'Community center for Turkish residents in Barrie',
    tags: ['community', 'culture', 'events']
  },
  {
    id: '21',
    name: 'Vaughan Turkish Grill',
    category: 'restaurant',
    coordinates: { lat: 43.8563, lng: -79.5085 },
    city: 'Vaughan',
    address: '123 Clark Ave W, Vaughan, ON L4J 7K6',
    phone: '(905) 555-9012',
    description: 'Family-style Turkish restaurant',
    tags: ['restaurant', 'grill', 'family-dining'],
    hours: {
      monday: '11:00 AM - 10:00 PM',
      tuesday: '11:00 AM - 10:00 PM',
      wednesday: '11:00 AM - 10:00 PM',
      thursday: '11:00 AM - 10:00 PM',
      friday: '11:00 AM - 11:00 PM',
      saturday: '11:00 AM - 11:00 PM',
      sunday: '12:00 PM - 9:00 PM'
    }
  },
  {
    id: '22',
    name: 'Turkish Education Center',
    category: 'community',
    coordinates: { lat: 43.8234, lng: -79.5435 },
    city: 'Vaughan',
    address: '456 Bathurst St, Vaughan, ON L4J 7K3',
    phone: '(905) 555-0123',
    description: 'Turkish language and cultural education center',
    tags: ['education', 'language', 'culture'],
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM'
    }
  },
  {
    id: '23',
    name: 'Turkish Professional Network',
    category: 'services',
    coordinates: { lat: 43.8563, lng: -79.5085 },
    city: 'Vaughan',
    address: '789 Clark Ave W, Vaughan, ON L4J 7K6',
    phone: '(905) 555-1234',
    website: 'http://turkishprofessionals.ca',
    description: 'Professional networking and business services',
    tags: ['business', 'networking', 'professional'],
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM'
    }
  },
  {
    id: '24',
    name: 'Anatolian Arts Center',
    category: 'community',
    coordinates: { lat: 43.8234, lng: -79.5435 },
    city: 'Vaughan',
    address: '321 Bathurst St, Vaughan, ON L4J 7K3',
    phone: '(905) 555-2345',
    description: 'Turkish arts and cultural center',
    tags: ['arts', 'culture', 'events'],
    hours: {
      monday: '10:00 AM - 6:00 PM',
      tuesday: '10:00 AM - 6:00 PM',
      wednesday: '10:00 AM - 6:00 PM',
      thursday: '10:00 AM - 6:00 PM',
      friday: '10:00 AM - 6:00 PM',
      saturday: '11:00 AM - 4:00 PM'
    }
  },
  {
    id: '25',
    name: 'Turkish Sports Club',
    category: 'community',
    coordinates: { lat: 43.8563, lng: -79.5085 },
    city: 'Vaughan',
    address: '654 Clark Ave W, Vaughan, ON L4J 7K6',
    phone: '(905) 555-3456',
    description: 'Sports and recreation center for Turkish community',
    tags: ['sports', 'recreation', 'community'],
    hours: {
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '8:00 AM - 8:00 PM',
      sunday: '8:00 AM - 8:00 PM'
    }
  }
]; 