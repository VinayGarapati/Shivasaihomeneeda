export interface CompanyDetails {
  brandName: string;
  legalName: string;
  tagline: string;
  subTagline?: string;
  phone: string;
  phoneFormatted: string;
  secondaryPhone?: string;
  whatsappNumber: string;
  whatsappUrl?: string;
  email: string;
  logoUrl?: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  workingHours: string;
  workingDays: string;
  googleMapsEmbedUrl?: string;
  googleMapsDirectionsUrl: string;
  experienceYears: number;
  serviceRadiusKm?: string;
  serviceAreas: string[];
}
