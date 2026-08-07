export interface Zone {
  zone_id: string;
  name: string;
  description: string;
  hero_image: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  active: boolean;
  display_order: number;
  created_at: string;
}

export interface Business {
  business_id: string;
  zone_id: string;
  name: string;
  description: string;
  whatsapp: string;
  address: string;
  maps: string;
  facebook: string;
  instagram: string;
  website: string;
  service_type: string;
  featured: boolean;
  active: boolean;
  display_order: number;
  created_at: string;
}

export interface ServicePhoto {
  photo_id: string;
  zone_id: string;
  business_id: string;
  title: string;
  description: string;
  display_order: number;
  active: boolean;
  created_at: string;
}

export interface CatalogData {
  zones: Zone[];
  businesses: Business[];
  services: ServicePhoto[];
}

export type View =
  | { name: "home" }
  | { name: "business"; businessId: string };
