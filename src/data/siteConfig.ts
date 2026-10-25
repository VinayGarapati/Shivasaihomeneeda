import { CompanyDetails } from '../types/company';

export const siteConfig = {
  company: {
    brandName: 'Shiva Sai Home Needs',
    legalName: 'Shiva Sai Home Needs',
    tagline: 'Better Homes • Safer Spaces • Complete Solutions',
    subTagline: 'YOUR HOME • OUR PRIORITY',
    phone: '7337308486',
    phoneFormatted: '+91 73373 08486',
    secondaryPhone: '+91 99667 79435',
    whatsappNumber: '917337308486',
    whatsappUrl: 'https://wa.me/917337308486?text=Hi%20Shiva%20Sai%20Home%20Needs,%20I%20would%20like%20a%20free%20quote%20and%20doorstep%20measurement%20for%20mosquito%20net%20doors%20and%20windows.',
    email: 'contact@shivasaihomeneeds.in',
    logoUrl: '/assets/logo/shivasai-brand-full.png',
    addressLine1: 'Shiva Sai Home Needs Workshop & Showroom',
    addressLine2: 'Plot 42, Near Ring Road Junction, Kukatpally / Hitec City Zone',
    city: 'Hyderabad & Secunderabad',
    state: 'Telangana & Andhra Pradesh',
    pincode: '500072',
    country: 'India',
    workingHours: '8:30 AM – 9:00 PM',
    workingDays: 'Monday to Sunday (All 7 Days Open)',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Shiva+Sai+Home+Needs+Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed',
    googleMapsDirectionsUrl: 'https://share.google/l9Fym1QXIF7213ToH',
    experienceYears: 12,
    serviceRadiusKm: 'Entire Greater Hyderabad (2-Hour Response) & Vijayawada Hub',
    serviceAreas: [
      'Kukatpally & KPHB Colony',
      'Hitec City & Madhapur',
      'Gachibowli & Financial District',
      'Kondapur & Hafeezpet',
      'Miyapur & Chandanagar',
      'Nizampet & Pragathi Nagar',
      'Bachupally & Mallampet',
      'Jubilee Hills & Banjara Hills',
      'Manikonda & Puppalaguda',
      'Nallagandla & Tellapur',
      'Secunderabad & Begumpet',
      'Kompally & Medchal Highway',
      'Uppal, Habsiguda & Boduppal',
      'Dilsukhnagar & LB Nagar',
      'Attapur & Mehdipatnam',
      'Vijayawada (Benz Circle & MG Road)',
      'Guntur (Arundelpet & Brodipet)',
      'Warangal & Hanamkonda',
      'Visakhapatnam (Vizag)'
    ]
  } satisfies CompanyDetails,

  pageMeta: {
    title: 'Shiva Sai Home Needs | Best Mosquito Net Doors, Sliding Mesh & UPVC Windows in Hyderabad',
    h1: 'Mosquito Net Doors, UPVC Windows & Sliding Insect Mesh',
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/products' }
    ],
    introParagraph:
      'Shiva Sai Home Needs is the premier manufacturer and expert installation specialist for custom mosquito net doors, UPVC sliding mosquito net windows, barrier-free pleated mesh screens, stainless steel SS 304 security doors, and balcony ceiling cloth drying hangers. Engineered with heavy architectural 6063-T6 aluminium and high-tensile American Phifer or SS 304 wire mesh to ensure 100% insect protection with uninterrupted natural airflow and view transparency.'
  },

  // Exact 6-Item Primary Menu Requested by User:
  // Home, Product Page, Services Page, Projects Page, Gallery Page, Contact Page
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ],

  quickLinks: [
    { label: 'Home', path: '/' },
    { label: 'Mosquito Net Doors & Windows', path: '/products' },
    { label: 'Custom Installation Services', path: '/services' },
    { label: 'Client Projects & Real Sites', path: '/projects' },
    { label: 'Installation Photo & Video Gallery', path: '/gallery' },
    { label: 'AI Estimate & Free Measurement', path: '/contact' },
    { label: 'Frequently Asked Questions (FAQ)', path: '/faq' },
    { label: 'About Shiva Sai Home Needs', path: '/about' },
    { label: 'Balcony Sliding Mosquito Doors', path: '/products/mosquito-net-door-and-sliding-mosquito-net?category=sliding-mosquito-net-door' },
    { label: 'Barrier-Free Pleated Net Doors', path: '/products/mosquito-net-door-and-sliding-mosquito-net?category=pleated-mosquito-net-door' },
    { label: 'SS 304 Pet & Security Doors', path: '/products/mosquito-net-door-and-sliding-mosquito-net?category=stainless-steel-mosquito-net-door' },
    { label: 'Ceiling Cloth Drying Pulley Hangers', path: '/products/mosquito-net-door-and-sliding-mosquito-net?category=ceiling-cloth-drying-hanger' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms & Conditions', path: '/terms' }
  ]
};
