import type { Location } from '../types';

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
    description: "North York'da otantik Türk mutfağı",
    tags: ['restoran', 'türk-mutfağı', 'helal'],
    hours: {
      monday: '11:00 - 22:00',
      tuesday: '11:00 - 22:00',
      wednesday: '11:00 - 22:00',
      thursday: '11:00 - 22:00',
      friday: '11:00 - 23:00',
      saturday: '11:00 - 23:00',
      sunday: '11:00 - 22:00'
    }
  },
  {
    id: '2',
    name: 'Anatolia Türk Market',
    category: 'market',
    coordinates: {
      lat: 43.7849,
      lng: -79.4861
    },
    city: 'Toronto',
    address: '127 Dufferin St, Toronto, ON M6K 1Y9',
    phone: '(416) 538-8787',
    description: 'İthal ürünlerin bulunduğu Türk marketi',
    tags: ['market', 'bakkal', 'türk-ürünleri'],
    hours: {
      monday: '09:00 - 20:00',
      tuesday: '09:00 - 20:00',
      wednesday: '09:00 - 20:00',
      thursday: '09:00 - 20:00',
      friday: '09:00 - 20:00',
      saturday: '09:00 - 19:00',
      sunday: '10:00 - 18:00'
    }
  },
  {
    id: '3',
    name: 'Türk Toplum Merkezi',
    category: 'community',
    coordinates: {
      lat: 43.7731,
      lng: -79.3458
    },
    city: 'North York',
    address: '789 Don Mills Rd, North York, ON M3C 1T5',
    phone: '(416) 555-0123',
    website: 'https://turkishcommunity.ca',
    description: 'Kültürel programlar ve destek hizmetleri sunan toplum merkezi',
    tags: ['topluluk', 'kültür-merkezi', 'etkinlikler']
  },
  {
    id: '4',
    name: 'Türk Tıp Kliniği',
    category: 'health',
    coordinates: {
      lat: 43.8563,
      lng: -79.5085
    },
    city: 'Vaughan',
    address: '456 Clark Ave W, Vaughan, ON L4J 7K6',
    phone: '(905) 555-0456',
    description: 'Türkçe konuşan personele sahip tıp kliniği',
    tags: ['sağlık', 'tıbbi', 'türkçe-konuşan'],
    hours: {
      monday: '09:00 - 17:00',
      tuesday: '09:00 - 17:00',
      wednesday: '09:00 - 17:00',
      thursday: '09:00 - 17:00',
      friday: '09:00 - 17:00'
    }
  },
  {
    id: '5',
    name: 'İstanbul Kafe',
    category: 'restaurant',
    coordinates: {
      lat: 44.3894,
      lng: -79.6903
    },
    city: 'Barrie',
    address: '123 Dunlop St E, Barrie, ON L4M 1A5',
    phone: '(705) 555-0789',
    description: 'Barrie&apos;de Türk kafe ve fırını',
    tags: ['kafe', 'fırın', 'türk-mutfağı'],
    hours: {
      monday: '08:00 - 20:00',
      tuesday: '08:00 - 20:00',
      wednesday: '08:00 - 20:00',
      thursday: '08:00 - 20:00',
      friday: '08:00 - 21:00',
      saturday: '09:00 - 21:00',
      sunday: '09:00 - 19:00'
    }
  },
  {
    id: '6',
    name: 'Türk Tercüme Hizmetleri',
    category: 'services',
    coordinates: {
      lat: 43.7184,
      lng: -79.5181
    },
    city: 'Etobicoke',
    address: '321 Islington Ave, Etobicoke, ON M8V 3B1',
    phone: '(416) 555-9012',
    website: 'https://turkishtranslation.ca',
    description: 'Profesyonel tercüme ve çeviri hizmetleri',
    tags: ['tercüme', 'çeviri', 'belgeler'],
    hours: {
      monday: '09:00 - 17:00',
      tuesday: '09:00 - 17:00',
      wednesday: '09:00 - 17:00',
      thursday: '09:00 - 17:00',
      friday: '09:00 - 17:00'
    }
  },
  {
    id: '7',
    name: 'İstanbul Kebap Evi',
    category: 'restaurant',
    coordinates: { lat: 43.6544, lng: -79.3807 },
    city: 'Toronto',
    address: '654 Yonge St, Toronto, ON M4Y 2A6',
    phone: '(416) 555-1234',
    description: 'Toronto şehir merkezinde geleneksel Türk kebapları ve mezeler',
    tags: ['restoran', 'kebap', 'helal'],
    hours: {
      monday: '11:00 - 23:00',
      tuesday: '11:00 - 23:00',
      wednesday: '11:00 - 23:00',
      thursday: '11:00 - 23:00',
      friday: '11:00 - 00:00',
      saturday: '11:00 - 00:00',
      sunday: '12:00 - 22:00'
    }
  },
  {
    id: '8',
    name: 'Kapadokya Restaurant',
    category: 'restaurant',
    coordinates: { lat: 43.7828, lng: -79.4181 },
    city: 'North York',
    address: '5241 Yonge St, North York, ON M2N 5P8',
    phone: '(416) 555-2345',
    website: 'http://cappadocia.ca',
    description: 'Otantik atmosfere sahip lüks Türk restoranı',
    tags: ['restoran', 'lüks-yemek', 'türk-mutfağı'],
    hours: {
      monday: '12:00 - 22:00',
      tuesday: '12:00 - 22:00',
      wednesday: '12:00 - 22:00',
      thursday: '12:00 - 22:00',
      friday: '12:00 - 23:00',
      saturday: '12:00 - 23:00',
      sunday: '12:00 - 21:00'
    }
  },
  {
    id: '9',
    name: 'Türk Çarşısı',
    category: 'market',
    coordinates: { lat: 43.7756, lng: -79.4141 },
    city: 'North York',
    address: '5418 Yonge St, North York, ON M2N 5R5',
    phone: '(416) 555-3456',
    description: 'Taze ürünler ve ithal malların bulunduğu büyük Türk süpermarketi',
    tags: ['market', 'bakkal', 'fırın'],
    hours: {
      monday: '08:00 - 21:00',
      tuesday: '08:00 - 21:00',
      wednesday: '08:00 - 21:00',
      thursday: '08:00 - 21:00',
      friday: '08:00 - 21:00',
      saturday: '08:00 - 20:00',
      sunday: '09:00 - 19:00'
    }
  },
  {
    id: '10',
    name: 'Akdeniz Market',
    category: 'market',
    coordinates: { lat: 43.8234, lng: -79.5435 },
    city: 'Vaughan',
    address: '7700 Bathurst St, Vaughan, ON L4J 7K3',
    phone: '(905) 555-4567',
    description: 'Türk ve Akdeniz ürünleri satan market',
    tags: ['market', 'bakkal', 'akdeniz'],
    hours: {
      monday: '09:00 - 20:00',
      tuesday: '09:00 - 20:00',
      wednesday: '09:00 - 20:00',
      thursday: '09:00 - 20:00',
      friday: '09:00 - 20:00',
      saturday: '09:00 - 19:00',
      sunday: '10:00 - 18:00'
    }
  },
  {
    id: '11',
    name: 'Türk Aile Sağlığı Kliniği',
    category: 'health',
    coordinates: { lat: 43.7731, lng: -79.3458 },
    city: 'Toronto',
    address: '245 Eglinton Ave E, Toronto, ON M4P 3B7',
    phone: '(416) 555-5678',
    website: 'http://turkishfamilyhealth.ca',
    description: 'Türkçe konuşan doktorların bulunduğu aile hekimliği',
    tags: ['sağlık', 'aile-hekimi', 'türkçe-konuşan'],
    hours: {
      monday: '09:00 - 17:00',
      tuesday: '09:00 - 17:00',
      wednesday: '09:00 - 17:00',
      thursday: '09:00 - 17:00',
      friday: '09:00 - 15:00'
    }
  },
  {
    id: '12',
    name: 'Anadolu Diş Kliniği',
    category: 'health',
    coordinates: { lat: 43.7852, lng: -79.4237 },
    city: 'North York',
    address: '5000 Yonge St, North York, ON M2N 7E9',
    phone: '(416) 555-6789',
    website: 'http://anatoliandental.ca',
    description: 'Türkçe konuşan personele sahip diş kliniği',
    tags: ['sağlık', 'diş', 'türkçe-konuşan'],
    hours: {
      monday: '09:00 - 18:00',
      tuesday: '09:00 - 18:00',
      wednesday: '09:00 - 18:00',
      thursday: '09:00 - 18:00',
      friday: '09:00 - 16:00'
    }
  },
  {
    id: '13',
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
    id: '14',
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
    id: '15',
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
    id: '16',
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
  },
  {
    id: '26',
    name: 'Ottoman Cuisine',
    category: 'restaurant',
    coordinates: { lat: 43.6532, lng: -79.3832 },
    city: 'Mississauga',
    address: '789 Burnhamthorpe Rd W, Mississauga, ON L5B 4A5',
    phone: '(905) 555-4567',
    website: 'http://ottomancuisine.ca',
    description: 'Authentic Turkish fine dining experience',
    tags: ['restaurant', 'fine-dining', 'turkish-cuisine'],
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
    id: '40',
    name: 'Turkish Cultural Exchange',
    category: 'community',
    coordinates: { lat: 45.5017, lng: -73.5673 },
    city: 'Montreal',
    address: '456 Rue Saint-Catherine O, Montreal, QC H3B 1A2',
    phone: '(514) 555-9012',
    website: 'http://turkishculturalmtl.ca',
    description: 'Montreal-based Turkish cultural center',
    tags: ['culture', 'community', 'events'],
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM'
    }
  }
]; 