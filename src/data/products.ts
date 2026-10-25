import { Product, ProductCategory, VideoItem } from '../types/product';

export const productCategories: ProductCategory[] = [
  {
    id: 'mosquito-net-door',
    slug: 'mosquito-net-door',
    name: 'Mosquito Net Door',
    description: 'Hinged and openable heavy-duty insect screen doors for main entryways, kitchens, and back doors.',
    productCount: 2
  },
  {
    id: 'sliding-mosquito-net-door',
    slug: 'sliding-mosquito-net-door',
    name: 'Sliding Mosquito Net Door',
    description: 'Smooth sliding track insect mesh systems designed for balcony French doors and large patio openings.',
    productCount: 3
  },
  {
    id: 'aluminium-sliding-mosquito-net',
    slug: 'aluminium-sliding-mosquito-net',
    name: 'Aluminium Sliding Mosquito Net',
    description: 'High-grade architectural powder-coated aluminium frames with multi-track sliding panels.',
    productCount: 2
  },
  {
    id: 'pleated-mosquito-net-door',
    slug: 'pleated-mosquito-net-door',
    name: 'Pleated Mosquito Net Door',
    description: 'Space-saving accordion zig-zag folding mesh doors with ultra-low floor barrier tracks.',
    productCount: 3
  },
  {
    id: 'collapsible-mosquito-mesh-door',
    slug: 'collapsible-mosquito-mesh-door',
    name: 'Collapsible Mosquito Mesh Door',
    description: 'Retractable barrier screens that fold neatly into a compact cassette when not in use.',
    productCount: 1
  },
  {
    id: 'stainless-steel-mosquito-net-door',
    slug: 'stainless-steel-mosquito-net-door',
    name: 'Stainless Steel Mosquito Net Door',
    description: 'Heavy-duty SS 304 / SS 316 wire mesh doors offering pet resistance, rodent protection, and security.',
    productCount: 3
  },
  {
    id: 'sliding-mosquito-net-window',
    slug: 'sliding-mosquito-net-window',
    name: 'Sliding Mosquito Net Window',
    description: 'Fitted aluminium mesh shutters that glide effortlessly on 2-track or 3-track window frames.',
    productCount: 2
  },
  {
    id: 'aluminium-mosquito-net-window',
    slug: 'aluminium-mosquito-net-window',
    name: 'Aluminium Mosquito Net Window',
    description: 'Precision custom-fitted openable and fixed aluminium mesh screens for bedroom and utility windows.',
    productCount: 3
  },
  {
    id: 'ceiling-cloth-drying-hanger',
    slug: 'ceiling-cloth-drying-hanger',
    name: 'Balcony Ceiling Cloth Hanger',
    description: 'Ceiling-mounted pulley-operated stainless steel cloth drying racks that maximize balcony floor space.',
    productCount: 2
  }
];

export const products: Product[] = [
  // 1. Mosquito Net Door
  {
    id: 'mnd-01',
    slug: 'heavy-duty-hinged-mosquito-net-door',
    name: 'Heavy-Duty Hinged Mosquito Net Door',
    categoryId: 'mosquito-net-door',
    categoryName: 'Mosquito Net Door',
    shortDescription: 'Robust openable aluminium door frame with automatic door closer and magnetic seal for main entrances.',
    detailedDescription: 'Engineered for high-traffic entry doors and kitchen balconies, this hinged mosquito net door features extruded aluminium 1.5mm thick section profiles, stainless steel hinges, a hydraulic or spring closer, and perimeter magnetic weather-stripping to eliminate insect gaps. Fabricated with genuine wood-grain or charcoal powder-coated frames.',
    image: '/assets/aistudio/IMG-20261024-WA0011_a53349ea.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0011_a53349ea.jpg',
      '/assets/aistudio/IMG-20261024-WA0013_b0b45482.jpg',
      '/assets/aistudio/IMG-20261024-WA0024_24c54d60.jpg',
      '/assets/aistudio/IMG-20261024-WA0031_24cba99a.jpg'
    ],
    price: 185,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: true,
    specifications: {
      netType: 'High-Tensile Fiberglass / SS 304 Mesh',
      frameMaterial: 'Extruded Aluminium 6063-T6 (1.5mm Gauge)',
      frameColour: 'Powder-Coated White, Dark Brown, Charcoal Grey, Teak Wood Finish',
      meshColour: 'Charcoal Grey / Pitch Black',
      doorSystemType: 'Hinged Swing Open Door with Magnetic Latch',
      application: 'Main Entrance, Balcony Exit, Kitchen Utility Door',
      openingDirection: 'Inward or Outward (Custom Right/Left Hand)',
      availableSizes: 'Custom Made to Order (Up to 8ft height x 4ft width)',
      installationType: 'Face Mounted on Existing Wooden/UPVC/Granite Frame',
      durability: '10+ Years Frame Life',
      meshCount: '18 x 16 Mesh per square inch'
    },
    features: [
      'Self-closing pneumatic door closer option',
      'Heavy-duty magnetic catch for draft-free seal',
      'Bottom kick-plate protection option against shoe scuffs',
      'Zero rust guarantee on powder-coated aluminium'
    ],
    bestSuitedFor: ['Apartment Main Entrances', 'Independent Houses', 'Kitchen Balcony Doors']
  },
  {
    id: 'mnd-02',
    slug: 'double-door-mosquito-net-screen',
    name: 'Double Leaf Mosquito Net Door for French Doors',
    categoryId: 'mosquito-net-door',
    categoryName: 'Mosquito Net Door',
    shortDescription: 'Twin leaf openable insect screen system designed for wide entryway double doors and veranda portals.',
    detailedDescription: 'Custom dual-panel door system with center meeting T-profile and concealed tower bolts. Allows opening either one leaf for quick access or both leaves for full wide passage when moving furniture or during gatherings.',
    image: '/assets/aistudio/IMG-20261024-WA0015_0642790e.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0015_0642790e.jpg',
      '/assets/aistudio/IMG-20261024-WA0021_4bccf820.jpg',
      '/assets/aistudio/IMG-20261024-WA0020_86be2107.jpg'
    ],
    price: 210,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: false,
    specifications: {
      netType: 'American Phifer Glass Mesh / SS 304',
      frameMaterial: 'Heavy Aluminium Section (2.0mm)',
      frameColour: 'Golden Teak Wood, Off-White, Matte Black',
      meshColour: 'Grey / Black',
      doorSystemType: 'Double Leaf Swing Door with Central Interlock',
      application: 'Villa French Doors, Living Room Balcony Access',
      openingDirection: 'Dual Outward Open',
      availableSizes: 'Up to 8ft height x 7ft span',
      installationType: 'Outer Frame Anchored to Wall Jam'
    },
    features: [
      'Dual-panel independent operation',
      'Architectural matching wood-grain powder coat finish',
      'Reinforced middle transom for wind deflection resistance'
    ],
    bestSuitedFor: ['Villas & Bungalows', 'Living Room Balconies', 'Verandas']
  },

  // 2. Sliding Mosquito Net Door
  {
    id: 'smnd-01',
    slug: 'balcony-sliding-mosquito-net-door-2-track',
    name: 'Balcony 2-Track Sliding Mosquito Net Door',
    categoryId: 'sliding-mosquito-net-door',
    categoryName: 'Sliding Mosquito Net Door',
    shortDescription: 'Effortless sliding screen door designed for balcony French doors and large patio glass doors.',
    detailedDescription: 'The premier choice for modern apartments. Installs directly onto existing sliding UPVC or aluminium door tracks or with an added custom add-on track. Uses precision nylon ball-bearing rollers to glide with fingertip ease.',
    image: '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg',
      '/assets/aistudio/IMG-20261024-WA0029_c3d3b00f.jpg',
      '/assets/aistudio/IMG-20261024-WA0016_c917c26d.jpg'
    ],
    price: 165,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: true,
    specifications: {
      netType: 'PVC Coated Fiberglass / SS 304 Grade',
      frameMaterial: 'Aluminium Alloy 6063 T6 (1.2mm - 1.5mm)',
      frameColour: 'Anodized Silver, Powder-Coated White, Bronze, Black',
      meshColour: 'Charcoal Black (Maximum Transparency)',
      doorSystemType: 'Bottom Rolling Sliding System with Top Guide',
      application: 'Balcony Sliding Doors, Master Bedroom Glass Doors',
      openingDirection: 'Horizontal Sliding (Left to Right / Right to Left)',
      availableSizes: 'Fabricated to exact millimetre site measurements',
      installationType: 'Track mounted / Retrofit onto existing sliding frame',
      durability: 'High resistance to UV sunlight and salt spray'
    },
    features: [
      'Twin nylon ball-bearing bottom rollers for silent glide',
      'Dense pile wool-felt weatherstripping on all 4 borders',
      'Concealed flush lock with key or latch option',
      'Unobstructed optical visibility outward'
    ],
    bestSuitedFor: ['High-Rise Balconies', 'Patio Glass Doors', 'Bedroom Balcony Openings']
  },
  {
    id: 'smnd-02',
    slug: 'multi-track-sliding-mosquito-net-door-3-track',
    name: '3-Track Multi-Panel Sliding Mosquito Net Door',
    categoryId: 'sliding-mosquito-net-door',
    categoryName: 'Sliding Mosquito Net Door',
    shortDescription: 'Dedicated 3rd track sliding panel engineered for 3-track UPVC and aluminium sliding systems.',
    detailedDescription: 'Designed specifically for contemporary residential towers where windows and balcony doors have a dedicated third channel. Provides 100% insect sealing without interfering with the existing glass panels or curtains.',
    image: '/assets/aistudio/IMG-20261024-WA0029_c3d3b00f.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0029_c3d3b00f.jpg',
      '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg'
    ],
    price: 175,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: false,
    specifications: {
      netType: 'Phifer High-Def Fiberglass / SS 304',
      frameMaterial: 'Extruded Aluminium Section',
      frameColour: 'Pure White, Architectural Bronze, Anthracite Grey',
      meshColour: 'Invisible Black Mesh',
      doorSystemType: 'Triple Track Integrated Sliding Shutter',
      application: 'Apartment Hall & Balcony Triple Track Doors',
      openingDirection: 'Bi-directional Sliding',
      availableSizes: 'Heights up to 9.5ft; panel widths up to 4.5ft',
      installationType: 'Pre-existing 3rd track groove insertion'
    },
    features: [
      'Zero floor modification needed',
      'High wind load tolerance for 15+ floor balconies',
      'Integrated interlock profile with adjacent glass shutter'
    ],
    bestSuitedFor: ['Modern Gated Community Apartments', 'Living Room Balconies']
  },

  // 3. Aluminium Sliding Mosquito Net
  {
    id: 'asmn-01',
    slug: 'heavy-section-aluminium-sliding-mosquito-net',
    name: 'Heavy-Section Architectural Aluminium Sliding Net',
    categoryId: 'aluminium-sliding-mosquito-net',
    categoryName: 'Aluminium Sliding Mosquito Net',
    shortDescription: 'Commercial and residential heavy-gauge aluminium sliding frames with reinforced corner joints.',
    detailedDescription: 'Manufactured with heavy commercial aluminium profiles and die-cast aluminium corner cleats. Eliminates frame twisting and sagging even over tall 9-foot heights, ensuring life-long dimensional stability.',
    image: '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg',
      '/assets/aistudio/IMG-20261024-WA0034_f4147787.jpg'
    ],
    price: 195,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: true,
    specifications: {
      netType: 'Heavy Grade SS 304 / Micro-Fiber Mesh',
      frameMaterial: 'Architectural Grade 6063 T6 (2.0mm Heavy Gauge)',
      frameColour: 'Anodized Champagne, Bronze, Matte Jet Black, Pure White',
      meshColour: 'Black / Dark Charcoal',
      doorSystemType: 'Heavy-Duty Top-Hung or Bottom-Roller Sliding',
      application: 'Commercial Villas, Hotel Balconies, Luxury Apartments',
      openingDirection: 'Horizontal Sliding',
      availableSizes: 'Custom Engineered',
      installationType: 'Channel Frame Anchored with Stainless Fasteners'
    },
    features: [
      'Heavy 2.0mm profile prevents frame flex',
      'Die-cast zinc and aluminium internal corners',
      'Dust-proof sealed bearing wheels',
      '10-year structural warranty on aluminium frame'
    ],
    bestSuitedFor: ['Luxury Villas', 'Bungalows', 'High-Wind Elevation Flats']
  },
  {
    id: 'asmn-02',
    slug: 'slimline-aluminium-sliding-mosquito-net',
    name: 'Slimline Aluminium Sliding Screen System',
    categoryId: 'aluminium-sliding-mosquito-net',
    categoryName: 'Aluminium Sliding Mosquito Net',
    shortDescription: 'Minimal sightline aluminium profile offering maximum daylight and sleek contemporary aesthetics.',
    detailedDescription: 'Engineered for homeowners who prefer ultra-slim frames. Maximizes visible glass area while maintaining structural rigidity, perfect for compact spaces and narrow balcony channels.',
    image: '/assets/aistudio/IMG-20261024-WA0016_c917c26d.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0016_c917c26d.jpg',
      '/assets/aistudio/IMG-20261024-WA0023_aa6b8f90.jpg'
    ],
    price: 155,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: false,
    specifications: {
      netType: 'Fine Weave Fiberglass Mesh',
      frameMaterial: 'Slimline Extruded Aluminium',
      frameColour: 'Ivory White, Walnut Wood, Carbon Black',
      meshColour: 'Charcoal Black',
      doorSystemType: 'Slim Bottom-Track Sliding',
      application: 'Compact Balconies, Kitchen Service Doors',
      openingDirection: 'Horizontal Slide',
      availableSizes: 'Custom to site',
      installationType: 'Narrow track clip-in'
    },
    features: [
      'Ultra-thin 18mm face profile',
      'Smooth glide rollers with nylon bushing',
      'Easy DIY lift-out for annual water jet cleaning'
    ],
    bestSuitedFor: ['Compact Apartments', 'Bedrooms', 'Kitchen Openings']
  },

  // 4. Pleated Mosquito Net Door
  {
    id: 'pmnd-01',
    slug: 'barrier-free-pleated-mosquito-net-door',
    name: 'Barrier-Free Pleated Mosquito Net Door',
    categoryId: 'pleated-mosquito-net-door',
    categoryName: 'Pleated Mosquito Net Door',
    shortDescription: 'Zero-trip hazard accordion mesh door with a 3mm ultra-low bottom floor guide for elders and kids.',
    detailedDescription: 'The pinnacle of modern screen engineering. Unlike traditional sliding doors with high bottom tracks, our barrier-free pleated net utilizes a virtually flat 3mm PVC floor guide ribbon. Ideal for homes with elderly residents, wheelchair access, and robot vacuum cleaners.',
    image: '/assets/aistudio/IMG-20261024-WA0029_c3d3b00f.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0029_c3d3b00f.jpg',
      '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg'
    ],
    price: 240,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: true,
    specifications: {
      netType: 'Water-Repellent Polypropylene Pleated Mesh (Zig-Zag Fold)',
      frameMaterial: 'Powder-Coated Aluminium Cassette & Side Channels',
      frameColour: 'Wooden Grain, Pure White, Anthracite Grey, Champagne',
      meshColour: 'Black / Grey',
      doorSystemType: 'Caterpillar Track Retractable Pleated System',
      application: 'Main Doors, Balcony Doors, Large Bi-Fold Door Openings',
      openingDirection: 'Single Side Slide or Center Meeting Double Pull',
      availableSizes: 'Spans up to 12ft width with double-pull system; height up to 10ft',
      installationType: 'Inside or Outside Door Reveal Face Mounting',
      durability: 'Mesh tested for 100,000+ open-close cycles'
    },
    features: [
      'Barrier-free 3mm bottom floor ribbon (zero tripping hazard)',
      'High-strength Kevlar tension cords prevent mesh sagging',
      'Waterproof, dust-resistant accordion pleats',
      'Folds into a sleek 7cm cassette when open'
    ],
    bestSuitedFor: ['Homes with Elderly/Children', 'Living Room Balconies', 'Villa Main Entrances']
  },
  {
    id: 'pmnd-02',
    slug: 'double-pleated-mosquito-net-door-large-spans',
    name: 'Double-Pull Pleated Mosquito Net Door (Large Spans)',
    categoryId: 'pleated-mosquito-net-door',
    categoryName: 'Pleated Mosquito Net Door',
    shortDescription: 'Center-closing accordion insect screen system engineered for extra-wide balcony and patio doors.',
    detailedDescription: 'Featuring two cassettes mounted on opposing wall jambs, this system slides from both ends and meets in the middle with a continuous full-height magnetic latch. Perfect for 8ft to 14ft living room balcony openings.',
    image: '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg',
      '/assets/aistudio/IMG-20261024-WA0029_c3d3b00f.jpg'
    ],
    price: 260,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: false,
    specifications: {
      netType: 'Heavy Pleated Polyester Mesh',
      frameMaterial: '6063-T6 Aluminium Cassette Housing',
      frameColour: 'Teak Wood Finish, Matte Black, Pure White',
      meshColour: 'Black',
      doorSystemType: 'Center-Meeting Magnetic Pleated System',
      application: 'Wide Balconies, Sliding French Portals',
      openingDirection: 'Center Split Bi-Parting',
      availableSizes: 'Spans up to 16ft width x 10ft height',
      installationType: 'Jamb Face Fix / Recessed Frame'
    },
    features: [
      'Continuous full-height magnetic closing strip',
      'Dual cassette design reduces stack thickness',
      'Smooth fingertip glide with zero floor obstruction'
    ],
    bestSuitedFor: ['Extra-Wide Balconies', 'Villa Patios', 'Terrace Openings']
  },

  // 5. Collapsible Mosquito Mesh Door
  {
    id: 'cmmd-01',
    slug: 'collapsible-roller-retractable-mosquito-door',
    name: 'Retractable Spring-Loaded Collapsible Mesh Door',
    categoryId: 'collapsible-mosquito-mesh-door',
    categoryName: 'Collapsible Mosquito Mesh Door',
    shortDescription: 'Rolls smoothly into an aluminium protective cassette with speed-controlled spring recoil mechanism.',
    detailedDescription: 'A modern roll-away insect screen where the mesh retracts horizontally inside a compact aluminium vertical box when released. Keeps the mesh shielded from dust, pets, and weather when insect protection is not required.',
    image: '/assets/aistudio/IMG-20261024-WA0024_24c54d60.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0024_24c54d60.jpg',
      '/assets/aistudio/IMG-20261024-WA0031_24cba99a.jpg'
    ],
    price: 220,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: false,
    specifications: {
      netType: 'Flame-Retardant PVC Coated Fiberglass Mesh',
      frameMaterial: 'Aluminium Cassette Box and Guide Channels',
      frameColour: 'Matte Black, Cream White, Dark Walnut',
      meshColour: 'Grey / Black',
      doorSystemType: 'Horizontal Roller Spring Retractable System',
      application: 'Balconies, Single Openable Doors',
      openingDirection: 'Horizontal Roll-away',
      availableSizes: 'Width up to 5ft; Height up to 8.5ft',
      installationType: 'Surface or Reveal Mounting'
    },
    features: [
      'Internal speed governor prevents abrupt snapping back',
      'Enclosed cassette preserves mesh cleanliness',
      'Full magnetic side lock for instantaneous seal'
    ],
    bestSuitedFor: ['Single Balcony Doors', 'Kitchen Exits', 'Studio Apartments']
  },

  // 6. Stainless Steel Mosquito Net Door
  {
    id: 'ssmnd-01',
    slug: 'stainless-steel-ss-304-security-net-door',
    name: 'Stainless Steel SS 304 High-Security Mesh Door',
    categoryId: 'stainless-steel-mosquito-net-door',
    categoryName: 'Stainless Steel Mosquito Net Door',
    shortDescription: 'Heavy-duty 0.8mm SS 304 wire mesh door providing insect barrier plus intruder and rat/rodent protection.',
    detailedDescription: 'The ultimate shield for ground-floor homes, villas, and independent houses. Built with high-tensile marine-grade SS 304 black powder-coated wire mesh that cannot be cut by common knives, scissors, or bitten through by rodents or pets.',
    image: '/assets/aistudio/IMG-20261024-WA0018_96552f95.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0018_96552f95.jpg',
      '/assets/aistudio/IMG-20261024-WA0019_91cba12a.jpg'
    ],
    price: 320,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: true,
    specifications: {
      netType: 'High-Tensile SS 304 Stainless Steel Micro-Wire Mesh (0.8mm Wire Dia)',
      frameMaterial: 'Heavy Structural Extruded Aluminium Section (2.5mm)',
      frameColour: 'Matte Charcoal Grey, Pure White, Royal Bronze',
      meshColour: 'Electrostatic Black Coated SS Mesh',
      doorSystemType: 'Heavy Hinged Door with Multi-Point Security Lock',
      application: 'Main Entrance Safety Door, Villa Rear Entrance',
      openingDirection: 'Swing Open (Outward)',
      availableSizes: 'Custom Made to Order',
      installationType: 'Direct Wall Anchor or Wooden Frame Screwed with Anti-Tamper Fasteners',
      durability: 'Lifetime Rust Free with 15+ Year Warranty',
      meshCount: '12 x 12 Heavy Gauge Weave'
    },
    features: [
      'Anti-theft knife shear & impact resistance',
      'Pet & rodent proof (rats cannot chew through)',
      'Multi-point mortise security lock with brass keys',
      'Resistant to coastal salt air corrosion'
    ],
    bestSuitedFor: ['Ground Floor Homes & Villas', 'Pet Owners (Cats & Dogs)', 'Main Security Doors']
  },
  {
    id: 'ssmnd-02',
    slug: 'ss-316-marine-grade-balcony-mosquito-door',
    name: 'Full Balcony Diamond Safety Grill & Heavy Insect Mesh Enclosure',
    categoryId: 'stainless-steel-mosquito-net-door',
    categoryName: 'Stainless Steel Mosquito Net Door',
    shortDescription: 'Ceiling-to-floor structural diamond safety grill combined with stainless steel mesh for complete balcony protection.',
    detailedDescription: 'Engineered for high-rise apartment balconies and utility spaces. Combines heavy diamond-lattice safety grilles with durable micro-mesh netting to eliminate pigeon droppings, mosquito invasions, and protect playful children from fall hazards.',
    image: '/assets/aistudio/IMG-20261024-WA0019_91cba12a.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0019_91cba12a.jpg',
      '/assets/aistudio/IMG-20261024-WA0017_dbde43d0.jpg',
      '/assets/aistudio/IMG-20261024-WA0014_1ccc08a0.jpg'
    ],
    price: 280,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: false,
    specifications: {
      netType: 'SS 304 Wire Mesh + Heavy MS Diamond Lattice',
      frameMaterial: 'Powder-Coated Structural Channel (2.5mm)',
      frameColour: 'Industrial Jet Black / Deep Brown',
      meshColour: 'Black Powder Coated',
      doorSystemType: 'Fixed Enclosure with Optional Service Hatch',
      application: 'Balconies, Utility Shafts, AC Compressor Enclosures',
      openingDirection: 'Fixed Safety Barrier',
      availableSizes: 'Custom to site',
      installationType: 'Heavy Stainless Fasteners'
    },
    features: [
      'Child fall-proof diamond grid',
      'Anti-pigeon and anti-mosquito dual security',
      'Weather-resistant powder coating'
    ],
    bestSuitedFor: ['High-Rise Balconies', 'Apartment Utility Balconies', 'Homes with Children & Pets']
  },

  // 7. Sliding Mosquito Net Window
  {
    id: 'smnw-01',
    slug: 'upvc-sliding-window-mosquito-net',
    name: 'Custom Sliding Mosquito Net for UPVC Windows',
    categoryId: 'sliding-mosquito-net-window',
    categoryName: 'Sliding Mosquito Net Window',
    shortDescription: 'Precision aluminium track shutter built to seamlessly integrate with standard 2-track & 3-track UPVC windows.',
    detailedDescription: 'Engineered with slim aluminium sections designed to fit standard UPVC window third tracks (Fenesta, Aparna, Kommerling). Features perimeter wool pile to prevent mosquitoes and lizards from squeezing through side gaps.',
    image: '/assets/aistudio/IMG-20261024-WA0034_f4147787.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0034_f4147787.jpg',
      '/assets/aistudio/IMG-20261024-WA0023_aa6b8f90.jpg',
      '/assets/aistudio/IMG-20261024-WA0016_c917c26d.jpg'
    ],
    price: 110,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: true,
    specifications: {
      netType: 'Phifer Fiberglass Mesh / SS 304 Grade',
      frameMaterial: 'Aluminium Alloy 6063 (1.0mm - 1.2mm)',
      frameColour: 'Pure White (UPVC Match), Walnut, Dark Bronze',
      meshColour: 'Grey / Black',
      doorSystemType: 'Window Track Sliding Shutter',
      application: 'Bedroom Windows, Living Room Windows, Kitchen Sliders',
      openingDirection: 'Horizontal Sliding Left/Right',
      availableSizes: 'Custom Made to Window Frame Sizes',
      installationType: 'Snap-in track insertion with security stopper'
    },
    features: [
      'Matches UPVC window profile and white shade perfectly',
      'High-density wool pile sealing against lizards and bugs',
      'Smooth nylon wheels with rust-proof stainless steel axles'
    ],
    bestSuitedFor: ['UPVC Windows in Flats', 'Bedrooms', 'Hall Windows']
  },
  {
    id: 'smnw-02',
    slug: 'add-on-track-sliding-mosquito-window',
    name: 'Exterior Box-Type Window Safety Grill with Mosquito Netting',
    categoryId: 'sliding-mosquito-net-window',
    categoryName: 'Sliding Mosquito Net Window',
    shortDescription: 'Projected exterior window box grills with overhead weather canopy and all-round insect mesh protection.',
    detailedDescription: 'Fitted onto building outer facades over window openings. Provides space for window sashes to swing freely inside while creating an impenetrable insect and pest barrier outside, with a slanted top shield that sheds rain.',
    image: '/assets/aistudio/IMG-20261024-WA0017_dbde43d0.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0017_dbde43d0.jpg',
      '/assets/aistudio/IMG-20261024-WA0014_1ccc08a0.jpg'
    ],
    price: 145,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: false,
    specifications: {
      netType: 'Fiberglass / SS 304 Mesh',
      frameMaterial: 'Mild Steel Safety Box + Aluminium Framing',
      frameColour: 'Architectural Charcoal Black',
      meshColour: 'Charcoal Black',
      doorSystemType: 'Exterior Box Shutter with Top Rain Cover',
      application: 'Bedrooms, Living Rooms with Exterior Projections',
      openingDirection: 'Exterior Fixed / Hinged Service Access',
      availableSizes: 'All standard window spans',
      installationType: 'Anchor Bolted to External Masonry'
    },
    features: [
      'Allows existing glass windows to open completely outward',
      'Overhead sheet blocks direct rain splatter',
      'Safe from monkeys, birds, and insects'
    ],
    bestSuitedFor: ['Independent Houses', 'Low-Rise Apartments', 'Ground-Floor Windows']
  },

  // 8. Aluminium Mosquito Net Window
  {
    id: 'amnw-01',
    slug: 'openable-hinged-aluminium-mosquito-window',
    name: 'Openable Hinged Aluminium Mosquito Net Window',
    categoryId: 'aluminium-mosquito-net-window',
    categoryName: 'Aluminium Mosquito Net Window',
    shortDescription: 'Classic hinged openable frame with push-to-open latch, stainless steel hinges, and magnetic sealing.',
    detailedDescription: 'Ideal for openable casement windows and traditional wooden frames where sliding shutters cannot be installed. Features a sturdy aluminium frame with stainless steel butterfly hinges and magnetic catches that keep the screen firmly closed against breezy winds.',
    image: '/assets/aistudio/IMG-20261024-WA0027_c11c4fea.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0027_c11c4fea.jpg',
      '/assets/aistudio/IMG-20261024-WA0030_876ea08b.jpg',
      '/assets/aistudio/IMG-20261024-WA0033_a31cc30c.jpg'
    ],
    price: 125,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: false,
    specifications: {
      netType: 'Fine Weave Fiberglass / SS 304 Mesh',
      frameMaterial: 'Extruded Aluminium Section',
      frameColour: 'Powder-Coated Off-White, Brown, Charcoal Grey',
      meshColour: 'Grey / Black',
      doorSystemType: 'Hinged Swing Open Casement Shutter',
      application: 'Bedroom Casement Windows, Balcony Ventilation Windows',
      openingDirection: 'Inward or Outward Swing',
      availableSizes: 'Custom Made',
      installationType: 'Mounted on Window Wooden/UPVC Outer Frame'
    },
    features: [
      'Allows easy access to open/close outer glass windows',
      'Magnetic border catch prevents flapping in high winds',
      'Removable hinge pins for easy window glass cleaning'
    ],
    bestSuitedFor: ['Casement Windows', 'Ventilators', 'Traditional Wooden Windows']
  },
  {
    id: 'amnw-02',
    slug: 'fixed-magnetic-aluminium-mosquito-window-frame',
    name: 'Exhaust Fan & Bathroom Ventilator Mosquito Screen',
    categoryId: 'aluminium-mosquito-net-window',
    categoryName: 'Aluminium Mosquito Net Window',
    shortDescription: 'Precision aluminium frame screen fixed over exhaust fan outlets, AC pipes, and bathroom ventilator louvers.',
    detailedDescription: 'A high-reliability insect and pest screen engineered for bathroom exhaust ducts and kitchen ventilators. Prevents lizards, wasps, mosquitoes, and rodents from crawling inside through exhaust pipes while maintaining maximum airflow for dampness extraction.',
    image: '/assets/aistudio/IMG-20261024-WA0026_eab95c8f.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0026_eab95c8f.jpg',
      '/assets/aistudio/IMG-20261024-WA0025_195e1b7c.jpg'
    ],
    price: 90,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: false,
    specifications: {
      netType: 'Heavy SS 304 Grease & Heat Resistant Mesh',
      frameMaterial: 'Slim Aluminium Channel Frame',
      frameColour: 'Ivory White, Matte Brown, Mill Finish',
      meshColour: 'Grey / Black',
      doorSystemType: 'Fixed Frame with Perimeter Silicone Seal',
      application: 'Bathroom Exhaust Windows, Kitchen Ducts, Staircase Ventilators',
      openingDirection: 'Fixed Non-Opening',
      availableSizes: 'Custom from 1ft x 1ft to 3ft x 3ft',
      installationType: 'Screwed into Granite / Tile / External Wall'
    },
    features: [
      'Prevents lizard and insect entry via exhaust fans',
      'Withstands bathroom steam and direct kitchen grease',
      'Can be washed with soap water hose spray'
    ],
    bestSuitedFor: ['Bathroom Ventilators', 'Kitchen Exhaust Vents', 'Staircase Windows']
  },

  // 9. Ceiling Cloth Drying Hanger (Signature Shiva Sai Home Needs Product)
  {
    id: 'cch-01',
    slug: 'balcony-ceiling-cloth-drying-hanger-system',
    name: 'Balcony Ceiling Cloth Drying Pulley Hanger System',
    categoryId: 'ceiling-cloth-drying-hanger',
    categoryName: 'Balcony Ceiling Cloth Hanger',
    shortDescription: 'Space-saving 6-pipe stainless steel ceiling cloth hanger operated with individual smooth nylon pulleys.',
    detailedDescription: 'A signature Shiva Sai Home Needs utility installation. Mounts onto balcony and utility ceilings, allowing you to pull down individual stainless steel pipes to hang laundry, then hoist them up near the ceiling to dry in natural breeze. Completely clears floor space in apartments.',
    image: '/assets/aistudio/IMG-20261024-WA0022_6f5f5714.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0022_6f5f5714.jpg',
      '/assets/aistudio/IMG-20261024-WA0032_fa1d6d56.jpg',
      '/assets/aistudio/IMG-20261024-WA0028_5f769a22.jpg'
    ],
    price: 1800,
    priceUnit: '₹/complete set',
    isPriceOnRequest: false,
    featured: true,
    specifications: {
      netType: 'UV-Stabilized Braided Nylon Pulley Ropes',
      frameMaterial: '100% Rust-Proof Stainless Steel (SS 202/304)',
      frameColour: 'High Gloss Chrome Stainless Steel',
      meshColour: 'White Nylon Cordage',
      doorSystemType: 'Dual Ceiling Pulley with Wall Cleat Pin Mechanism',
      application: 'Balconies, Utility Areas, Covered Terraces, Wash Areas',
      openingDirection: 'Vertical Hoist (Individual Pipe Operation)',
      availableSizes: '4ft, 5ft, 6ft, 7ft, 8ft lengths (6 pipes standard)',
      installationType: 'Ceiling Anchored with Metal Fasteners'
    },
    features: [
      'Individually lower and hoist each of the 6 pipes',
      'Frees up 100% balcony floor area',
      'Holds up to 50kg wet clothes (bedsheets, heavy denims)',
      'Brass pulley rollers prevent rope friction wear'
    ],
    bestSuitedFor: ['Apartment Balconies', 'Utility Areas', 'Compact Living Spaces']
  },
  {
    id: 'cch-02',
    slug: 'wall-mounted-foldable-stainless-steel-cloth-drying-stand',
    name: 'Wall-Mounted Foldable Stainless Steel Cloth Drying Stand',
    categoryId: 'ceiling-cloth-drying-hanger',
    categoryName: 'Balcony Ceiling Cloth Hanger',
    shortDescription: 'Heavy-duty accordion style wall-mount SS drying rack that expands out when drying and folds flat against the wall.',
    detailedDescription: 'Engineered for apartment balconies with low ceilings, false ceilings, or compact utility verandas. Made with 100% rust-proof SS 304 grade pipes with accordion scissor arms. Pulls out smoothly to 2.5 feet when loading wet clothes and collapses flat against the wall to just 2 inches when not in use.',
    image: '/assets/aistudio/IMG-20261024-WA0028_5f769a22.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0028_5f769a22.jpg',
      '/assets/aistudio/IMG-20261024-WA0032_fa1d6d56.jpg',
      '/assets/aistudio/IMG-20261024-WA0022_6f5f5714.jpg'
    ],
    price: 1450,
    priceUnit: '₹/unit',
    isPriceOnRequest: false,
    featured: false,
    specifications: {
      netType: 'Non-Corrosive SS 304 Tubular Rods',
      frameMaterial: 'Pure Stainless Steel 304 Grade',
      frameColour: 'Mirror Finish Chrome',
      meshColour: 'N/A',
      doorSystemType: 'Accordion Scissor Wall Extension',
      application: 'Balconies, Utility Walls, Bathrooms, Terrace Boundaries',
      openingDirection: 'Horizontal Pull-Out & Push-Flat',
      availableSizes: '3ft, 4ft, 5ft, and 6ft widths',
      installationType: 'Wall Anchor Fasteners with Stainless Steel Bolts',
      durability: '15+ Years Rust-Free Lifespan'
    },
    features: [
      'Folds flat to 2 inches when not in use',
      'Zero floor clutter, 100% balcony walkway clear',
      'High weight resistance up to 35kg wet laundry',
      'Zero maintenance rust-proof stainless steel'
    ],
    bestSuitedFor: ['Compact Balconies', 'Utility Verandas', 'Rental Apartments']
  },

  // 10. Center-Closing Double Pleated Mosquito Net Door
  {
    id: 'pmnd-03',
    slug: 'center-closing-double-pleated-mosquito-net-door',
    name: 'Center-Closing Double Pleated Mosquito Net Door for French Doors',
    categoryId: 'pleated-mosquito-net-door',
    categoryName: 'Pleated Mosquito Net Door',
    shortDescription: 'Dual-pull accordion pleated mesh system with central magnetic locking for wide French doors.',
    detailedDescription: 'Engineered for wide 6ft to 14ft living room French balcony portals and villa patio entries. Features two opposing pleated screens that meet in the center with a full-height magnetic latch. When opened, both screens stack neatly into slim side cassettes, providing unobstructed panoramic balcony vistas.',
    image: '/assets/aistudio/IMG-20261024-WA0019_91cba12a.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0019_91cba12a.jpg',
      '/assets/aistudio/IMG-20261024-WA0020_86be2107.jpg',
      '/assets/aistudio/IMG-20261024-WA0021_4bccf820.jpg'
    ],
    price: 310,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: true,
    specifications: {
      netType: 'Waterproof Pleated Polyester-Fiberglass Accordion Mesh',
      frameMaterial: 'Extruded Architectural Aluminium 6063 T6',
      frameColour: 'Royal Walnut Wood-Grain, Pure White, Matt Black, Charcoal Grey',
      meshColour: 'Black (Maximum Light & View Transparency)',
      doorSystemType: 'Center-Meeting Bi-Parting Accordion Pleated System',
      application: 'Wide Balcony French Doors, Villa Living Room Verandas',
      openingDirection: 'Center Bi-Parting (Left & Right Slide Inward to Outward)',
      availableSizes: 'Up to 10ft height and 14ft total span',
      installationType: 'Face or Reveal Jam Mounted',
      durability: 'UV-Stabilized High Tensile Kevlar Tension Strings'
    },
    features: [
      'Barrier-free 3mm ultra-flat bottom runner',
      'Full-height neodymium center magnetic locking bar',
      'Zero rattling even in strong balcony winds',
      'Folds into compact 45mm side cassettes'
    ],
    bestSuitedFor: ['French Doors', 'Living Room Balconies', 'Luxury Villas & Penthouses']
  },

  // 11. Pet-Resistant Heavy SS 304 Tuff-Mesh Security Door
  {
    id: 'ssmnd-03',
    slug: 'pet-resistant-heavy-ss-304-tuff-mesh-door',
    name: 'Pet-Resistant Heavy SS 304 Tuff-Mesh Door',
    categoryId: 'stainless-steel-mosquito-net-door',
    categoryName: 'Stainless Steel Mosquito Net Door',
    shortDescription: 'Cat-claw resistant and dog-scratch proof heavy 0.8mm SS 304 wire mesh door with reinforced kick-plate.',
    detailedDescription: 'The ultimate insect screen door designed specifically for homes with pet dogs, cats, or bird visits. Constructed with heavy 0.8mm wire thickness Stainless Steel 304 mesh that pets cannot puncture, tear, or push through. Features an optional 1-foot bottom aluminium kick-plate to prevent paw scratches and keep pests completely out.',
    image: '/assets/aistudio/IMG-20261024-WA0024_24c54d60.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0024_24c54d60.jpg',
      '/assets/aistudio/IMG-20261024-WA0013_b0b45482.jpg',
      '/assets/aistudio/IMG-20261024-WA0011_a53349ea.jpg'
    ],
    price: 260,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: true,
    specifications: {
      netType: 'Heavy SS 304 Woven Wire (0.8mm Gauge - High Tensile)',
      frameMaterial: 'Extra Heavy Gauge Aluminium Section (2.0mm)',
      frameColour: 'Textured Matt Black, Deep Bronze, Golden Teak Wood',
      meshColour: 'Jet Black Powder Coated SS Wire',
      doorSystemType: 'Hinged Swing Open Door with Mortise Lock & Key',
      application: 'Main Entrance Door, Backside Balcony, Kitchen Pet Access',
      openingDirection: 'Outward or Inward Open',
      availableSizes: 'Custom Made to Door Frame',
      installationType: 'Heavy Stainless Steel Bearings on Frame Jamb',
      durability: '15+ Years (Unbreakable Mesh)'
    },
    features: [
      '100% Cat-claw, dog-scratch, and rat-bite proof',
      'Dual lock latch with key option for secondary security',
      'Bottom aluminium kick-plate protection',
      'Zero corrosion guarantee in coastal/humid conditions'
    ],
    bestSuitedFor: ['Pet Owners (Dogs & Cats)', 'Ground Floor Flats', 'Independent Houses']
  },

  // 12. Magnetic Easy-Clean Detachable Window Mosquito Screen
  {
    id: 'amnw-03',
    slug: 'magnetic-easy-clean-detachable-window-screen',
    name: 'Magnetic Easy-Clean Detachable Window Mosquito Screen',
    categoryId: 'aluminium-mosquito-net-window',
    categoryName: 'Aluminium Mosquito Net Window',
    shortDescription: 'Snap-on neodymium magnetic strip window mesh that can be peeled off in seconds for tap washing.',
    detailedDescription: 'The most convenient, rental-friendly and maintenance-friendly mosquito net for bedroom, bathroom, and kitchen windows. Fitted with flexible PVC framing and permanent magnetic tape, it snaps firmly onto existing UPVC, aluminium, or wooden window jambs with zero screws or drilling required.',
    image: '/assets/aistudio/IMG-20261024-WA0017_dbde43d0.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0017_dbde43d0.jpg',
      '/assets/aistudio/IMG-20261024-WA0027_c11c4fea.jpg',
      '/assets/aistudio/IMG-20261024-WA0026_eab95c8f.jpg'
    ],
    price: 65,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: false,
    specifications: {
      netType: 'Phifer Anti-Fray Fiberglass Mesh',
      frameMaterial: 'Flexible UV-Resistant PVC with Neodymium Magnet Core',
      frameColour: 'Ivory White, Dark Brown, Black',
      meshColour: 'Charcoal Grey',
      doorSystemType: 'Magnetic Border Snap-Fit',
      application: 'Bedroom Windows, Kitchen Windows, Bathroom Ventilators',
      openingDirection: 'Corner Pull-To-Peel',
      availableSizes: 'Custom sized to any window dimension',
      installationType: 'No-Drill Industrial 3M Magnetic Tape Bonding',
      durability: '7+ Years Magnetic Adhesion'
    },
    features: [
      'Zero drilling or wall damage—perfect for rental homes',
      'Peel off in 2 seconds, wash under tap, snap back on',
      'Airtight perimeter magnetic seal prevents smallest midges',
      'Cost-effective and highly transparent'
    ],
    bestSuitedFor: ['Rental Homes', 'Bathroom Windows', 'Kitchen Ventilation']
  },

  // 13. 4-Panel Central Meeting Sliding Mosquito Net Door
  {
    id: 'smnd-03',
    slug: '4-panel-central-meeting-sliding-mosquito-net-door',
    name: '4-Panel Central Meeting Sliding Mosquito Net Door',
    categoryId: 'sliding-mosquito-net-door',
    categoryName: 'Sliding Mosquito Net Door',
    shortDescription: 'Heavy multi-shutter sliding net system for wide 10ft to 14ft living room balcony openings.',
    detailedDescription: 'Designed for large architectural openings where homeowners want maximum open passage. The two center panels slide outwards to meet the fixed side panels, opening up a grand center walkway into the balcony while providing unbroken mosquito protection when closed.',
    image: '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg',
      '/assets/aistudio/IMG-20261024-WA0029_c3d3b00f.jpg',
      '/assets/aistudio/IMG-20261024-WA0016_c917c26d.jpg'
    ],
    price: 185,
    priceUnit: '₹/sq ft',
    isPriceOnRequest: false,
    featured: false,
    specifications: {
      netType: 'Heavy SS 304 / High-Def Fiberglass',
      frameMaterial: 'Heavy Architectural Aluminium (1.5mm - 2.0mm)',
      frameColour: 'Architectural Charcoal, Off-White, Champagne Bronze',
      meshColour: 'Invisible Black Mesh',
      doorSystemType: '4-Panel Bi-Sliding System with Center Interlock',
      application: 'Large Balconies, Penthouse Living Rooms, Villa Patios',
      openingDirection: 'Bi-Directional Central Meeting',
      availableSizes: 'Spans up to 14ft width x 9ft height',
      installationType: 'Dedicated Multi-Track or Existing UPVC Channel',
      durability: '10+ Years Heavy Usage Guarantee'
    },
    features: [
      'Twin center interlocking profiles with magnetic seal',
      'Heavy-duty nylon ball bearing rollers for silent travel',
      'Dense wool-pile weatherstripping eliminates gaps',
      'Uninterrupted natural air circulation'
    ],
    bestSuitedFor: ['Wide Living Room Balconies', 'Villas & Penthouses', 'Patio Entrances']
  }
];

export const sampleVideos: VideoItem[] = [
  {
    id: 'vid-01',
    title: 'Smooth Gliding Action of Balcony Sliding Mosquito Net',
    description: 'Demonstration of smooth sliding nylon wheels and perimeter magnetic sealing on a multi-panel balcony door.',
    thumbnailUrl: '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg',
    videoUrl: '/assets/aistudio/VID-20261024-WA0035_0937a2d1.mp4',
    duration: '0:10'
  },
  {
    id: 'vid-02',
    title: 'Wood-Finish Mosquito Door Latch & Magnetic Seal Demo',
    description: 'Testing the sturdy door closure and magnetic catch on an entryway wood-grain aluminium mosquito net door.',
    thumbnailUrl: '/assets/aistudio/IMG-20261024-WA0011_a53349ea.jpg',
    videoUrl: '/assets/aistudio/VID-20261025-WA0006_52801c00.mp4',
    duration: '0:06'
  },
  {
    id: 'vid-03',
    title: 'French Double Leaf Mosquito Door Operation',
    description: 'Dual leaf swing action and middle T-section locking demonstration for living room balcony access.',
    thumbnailUrl: '/assets/aistudio/IMG-20261024-WA0015_0642790e.jpg',
    videoUrl: '/assets/aistudio/VID-20261025-WA0007_bff80553.mp4',
    duration: '0:08'
  },
  {
    id: 'vid-04',
    title: 'High-Rise Balcony Sliding Mesh Wind Tolerance Test',
    description: 'Live test of heavy aluminium sliding net frame rigidity and lock engagement on a high-floor balcony.',
    thumbnailUrl: '/assets/aistudio/IMG-20261024-WA0029_c3d3b00f.jpg',
    videoUrl: '/assets/aistudio/VID-20261025-WA0008_6db79562.mp4',
    duration: '0:14'
  },
  {
    id: 'vid-05',
    title: 'Pleated Accordion Mosquito Net Barrier-Free Fold Demo',
    description: 'Demonstrating effortless finger-touch zig-zag pleated mesh fold and ultra-low floor track.',
    thumbnailUrl: '/assets/aistudio/IMG-20261024-WA0020_86be2107.jpg',
    videoUrl: '/assets/aistudio/VID-20261025-WA0009_dfbd4e6f.mp4',
    duration: '0:19'
  },
  {
    id: 'vid-06',
    title: 'UPVC Window Mosquito Shutter Smooth Tracking',
    description: 'Demonstrating fingertip sliding glide of custom aluminium insect shutter in UPVC window channels.',
    thumbnailUrl: '/assets/aistudio/IMG-20261024-WA0034_f4147787.jpg',
    videoUrl: '/assets/aistudio/VID-20261025-WA0010_a1301c88.mp4',
    duration: '0:18'
  },
  {
    id: 'vid-07',
    title: 'Multi-Panel Balcony Sliding Shutter Interlock Test',
    description: 'Comprehensive test showing overlapping interlock channels and ball-bearing roller glide on apartment balcony.',
    thumbnailUrl: '/assets/aistudio/IMG-20261024-WA0016_c917c26d.jpg',
    videoUrl: '/assets/aistudio/VID-20261025-WA0012_17abcb88.mp4',
    duration: '1:00'
  },
  {
    id: 'vid-08',
    title: 'Living Room French Balcony Sliding Net Full Walkthrough',
    description: 'Full residential walkthrough demonstrating bug-free balcony ventilation with custom sliding screen doors.',
    thumbnailUrl: '/assets/aistudio/IMG-20261024-WA0014_1ccc08a0.jpg',
    videoUrl: '/assets/aistudio/VID-20261025-WA0013_e35a1b26.mp4',
    duration: '1:18'
  },
  {
    id: 'vid-09',
    title: 'Balcony Ceiling Cloth Drying Pulley Line Operation',
    description: 'Live test showing individual lowering and hoisting of stainless steel pipes on ceiling pulley rack.',
    thumbnailUrl: '/assets/aistudio/IMG-20261024-WA0022_6f5f5714.jpg',
    videoUrl: '/assets/aistudio/VID-20261025-WA0014_392379d4.mp4',
    duration: '0:41'
  },
  {
    id: 'vid-10',
    title: 'Heavy-Duty SS 304 Hinged Entry Door Slam & Latch Check',
    description: 'Demonstrating heavy aluminium frame stiffness, SS 304 wire mesh resistance, and automatic magnetic latch.',
    thumbnailUrl: '/assets/aistudio/IMG-20261024-WA0024_24c54d60.jpg',
    videoUrl: '/assets/aistudio/a09e115ead054e33a13a1918a3de0def_d26a1b9c.mp4',
    duration: '0:39'
  }
];
