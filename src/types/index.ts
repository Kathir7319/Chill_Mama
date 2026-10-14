export type SpiceLevel = 'Mild (Gentle Masala)' | 'Mama\'s Classic (Warm Kick)' | 'Extra Desi Fire 🔥🔥🔥';

export interface MenuItem {
  id: string;
  name: string;
  category: 'frankies' | 'burgers' | 'bites' | 'chaats' | 'sweets' | 'beverages';
  price: number;
  description: string;
  image: string;
  tags: ('Halal' | 'Vegetarian' | 'Vegan' | 'Gluten-Free Option' | 'Mama\'s Signature')[];
  spiceLevelDefault?: SpiceLevel;
  calories?: number;
  featured?: boolean;
}

export interface ChefPairing {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  itemsIncluded: string[];
  price: number;
  regularPrice: number;
  image: string;
}

export interface CartItem {
  id: string; // unique cart entry id
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  spiceLevel?: SpiceLevel;
  specialInstructions?: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  tag: string;
}

export interface CateringTier {
  id: string;
  title: string;
  bestFor: string;
  basePricePerPerson: number;
  minGuests: number;
  includes: string[];
  highlight?: boolean;
}

export interface CateringFAQ {
  question: string;
  answer: string;
}

export interface TruckScheduleStop {
  id: string;
  day: string;
  locationName: string;
  address: string;
  city: string;
  hours: string;
  isToday: boolean;
  status: 'Serving Now' | 'Next Stop' | 'Weekend Special';
  mapQuery: string;
  features: string[];
}
