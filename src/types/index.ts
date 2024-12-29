export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  imageUrl: string;
  type: 'Apartment' | 'House' | 'Villa' | 'Penthouse';
  status: 'For Sale' | 'For Rent';
}