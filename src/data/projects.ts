import { ProjectItem } from '../types/product';

export const projectsCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'mosquito-doors', label: 'Mosquito Doors' },
  { id: 'sliding-balcony', label: 'Balcony Sliding Mesh' },
  { id: 'window-screens', label: 'Window Screens' },
  { id: 'safety-grills-mesh', label: 'Safety Grills & Mesh' },
  { id: 'ventilator-exhaust', label: 'Ventilator & Exhaust' },
  { id: 'ceiling-cloth-hangers', label: 'Ceiling Cloth Hangers' }
];

export const googleProfileShareUrl = 'https://share.google/l9Fym1QXIF7213ToH';

export const projects: ProjectItem[] = [
  // 1. Mosquito Doors
  {
    id: 'proj-01',
    title: 'Teak Wood-Grain Hinged Mosquito Net Door',
    category: 'Mosquito Net Doors',
    categorySlug: 'mosquito-doors',
    location: 'Jubilee Hills, Hyderabad',
    description: 'Custom powder-coated architectural wood-grain aluminium hinged mosquito screen door installed with magnetic catch and reinforced corner bracket joints.',
    image: '/assets/aistudio/IMG-20261024-WA0011_a53349ea.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0011_a53349ea.jpg',
      '/assets/aistudio/IMG-20261024-WA0013_b0b45482.jpg',
      '/assets/aistudio/IMG-20261024-WA0024_24c54d60.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Openable Single Leaf Swing Door',
      frameMaterial: '6063-T6 Extruded Aluminium (Wood Powder Coated)',
      meshType: 'High-Tensile Charcoal Fiberglass Mesh',
      warranty: '5 Years Frame Warranty',
      dimensions: '7.5 ft x 3.5 ft'
    },
    highlights: [
      'Matches interior natural teak wood finish',
      'Hydraulic door closer with silent magnetic seal',
      'Zero mosquito or lizard infiltration'
    ],
    badge: 'Original Google Showcase',
    clientReview: {
      author: 'Rajesh K., Villa Owner',
      rating: 5,
      comment: 'The wood finish blends seamlessly with our main teak door. Flawless measurement and prompt fitting.'
    },
    googleListingUrl: googleProfileShareUrl
  },
  {
    id: 'proj-02',
    title: 'Double-Leaf French Door Insect Screen System',
    category: 'Mosquito Net Doors',
    categorySlug: 'mosquito-doors',
    location: 'Banjara Hills, Hyderabad',
    description: 'Precision twin leaf openable mosquito screen system custom-fitted over double glass French doors with center T-joint profile and tower bolts.',
    image: '/assets/aistudio/IMG-20261024-WA0015_0642790e.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0015_0642790e.jpg',
      '/assets/aistudio/IMG-20261024-WA0021_4bccf820.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Dual Leaf French Style Openable System',
      frameMaterial: 'Heavy 2.0mm Gauge Architectural Aluminium',
      meshType: 'American Phifer Charcoal Mesh',
      warranty: '5 Years Frame Warranty',
      dimensions: '8.0 ft x 5.0 ft'
    },
    highlights: [
      'Allows single leaf or full double leaf opening',
      'Concealed tower bolts for clean aesthetics',
      'Heavy-duty hinges with stainless steel pins'
    ],
    badge: 'Verified On-Site Work',
    clientReview: {
      author: 'Dr. Srinivas Rao',
      rating: 5,
      comment: 'Very professional double door mesh work. Keeps insects out while allowing gentle cross breeze into the hall.'
    },
    googleListingUrl: googleProfileShareUrl
  },
  {
    id: 'proj-03',
    title: 'Heavy-Duty Door with Bottom Protective Kick-Plate',
    category: 'Mosquito Net Doors',
    categorySlug: 'mosquito-doors',
    location: 'Kondapur, Hyderabad',
    description: 'Entrance mosquito door equipped with an aluminium grooved kick-plate at the bottom to withstand footwear bumps and prevent pet claw tears.',
    image: '/assets/aistudio/IMG-20261024-WA0013_b0b45482.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0013_b0b45482.jpg',
      '/assets/aistudio/IMG-20261024-WA0010_ecfb542d.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Hinged Single Leaf with Protective Panel',
      frameMaterial: 'Powder-Coated Dark Walnut Aluminium',
      meshType: 'High-Density SS 304 Wire Mesh',
      warranty: '5 Years Frame Warranty',
      dimensions: '7.0 ft x 3.2 ft'
    },
    highlights: [
      'Bottom 1-foot solid kick plate against scuffs',
      'Pet & child resistant structure',
      'Magnetic border sealing strips'
    ],
    badge: 'Original Photo',
    clientReview: {
      author: 'Anand Kumar',
      rating: 5,
      comment: 'The bottom plate was a great recommendation for our dog. Extremely sturdy construction.'
    },
    googleListingUrl: googleProfileShareUrl
  },
  {
    id: 'proj-04',
    title: 'Master Technician On-Site Balcony Door Handover',
    category: 'Mosquito Net Doors',
    categorySlug: 'mosquito-doors',
    location: 'Gachibowli, Hyderabad',
    description: 'Full height brown aluminium mosquito net door installed for an apartment balcony entryway, verified by our lead technician.',
    image: '/assets/aistudio/IMG-20261024-WA0024_24c54d60.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0024_24c54d60.jpg',
      '/assets/aistudio/IMG-20261024-WA0010_ecfb542d.jpg',
      '/assets/aistudio/IMG-20261024-WA0031_24cba99a.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Single Leaf Openable Balcony Net Door',
      frameMaterial: '6063-T6 Extruded Aluminium',
      meshType: 'Fiberglass Charcoal Mesh (18x16 weave)',
      warranty: '3 Years Warranty',
      dimensions: '7.0 ft x 3.0 ft'
    },
    highlights: [
      'Laser-aligned square fitting',
      'Smooth push-latch mechanism',
      'Zero vibration in high winds'
    ],
    badge: 'Technician Verified',
    clientReview: {
      author: 'Praveen Varma',
      rating: 5,
      comment: 'Shiva Sai team did the measurement and finished installation within 48 hours. Excellent service!'
    },
    googleListingUrl: googleProfileShareUrl
  },
  {
    id: 'proj-05',
    title: 'Living Room Passage Single Mosquito Net Door',
    category: 'Mosquito Net Doors',
    categorySlug: 'mosquito-doors',
    location: 'Kukatpally, Hyderabad',
    description: 'Dark brown powder-coated single swing mosquito net door installed on the main passage between the living room and sit-out.',
    image: '/assets/aistudio/IMG-20261024-WA0031_24cba99a.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0031_24cba99a.jpg',
      '/assets/aistudio/IMG-20261024-WA0020_86be2107.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Swing Open Passage Net Door',
      frameMaterial: 'Pure Aluminium Alloy 6063',
      meshType: 'High-Tensile Fiberglass Mesh',
      warranty: '5 Years Frame Warranty',
      dimensions: '6.8 ft x 2.8 ft'
    },
    highlights: [
      'Zero gap perimeter wool pile seal',
      'Rust-proof stainless steel butterfly hinges',
      'Easy to clean and maintain'
    ],
    badge: 'Verified Installation',
    googleListingUrl: googleProfileShareUrl
  },

  // 2. Sliding Balcony Mesh Systems
  {
    id: 'proj-06',
    title: '4-Panel Wide Balcony Multi-Track Sliding Insect Net System',
    category: 'Balcony Sliding Mesh',
    categorySlug: 'sliding-balcony',
    location: 'Madhapur, Hyderabad',
    description: 'Massive 4-panel sliding mosquito partition covering an expansive 14-foot living room balcony portal. Built with heavy-duty top and bottom tracks and silent nylon rollers.',
    image: '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg',
      '/assets/aistudio/IMG-20261024-WA0029_c3d3b00f.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: '4-Panel Multi-Track Sliding Partition',
      frameMaterial: 'Heavy Aluminium Section (2.0mm thickness)',
      meshType: 'Micro-Fiber Optical High-Transparency Mesh',
      warranty: '5 Years System Warranty',
      dimensions: '14.0 ft span x 8.0 ft height'
    },
    highlights: [
      'Twin nylon ball-bearing rollers for fingertip gliding',
      'Wind deflector interlocking middle sections',
      'Zero floor obstruction when opened'
    ],
    badge: 'Masterpiece Installation',
    clientReview: {
      author: 'Venkatesh Murthy, Flat 1204',
      rating: 5,
      comment: 'Our balcony view is completely preserved and we can now leave the doors open all night without bugs.'
    },
    googleListingUrl: googleProfileShareUrl
  },
  {
    id: 'proj-07',
    title: 'Multi-Panel Partition Sliding Screen for High-Rise Balcony',
    category: 'Balcony Sliding Mesh',
    categorySlug: 'sliding-balcony',
    location: 'Financial District, Hyderabad',
    description: 'Tall multi-panel sliding mosquito door installed on the 18th floor with high wind-load tolerance and weather sealing.',
    image: '/assets/aistudio/IMG-20261024-WA0029_c3d3b00f.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0029_c3d3b00f.jpg',
      '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'High-Rise Heavy Sliding Shutter',
      frameMaterial: '6063-T6 Architectural Bronze Powder Coat',
      meshType: 'SS 304 High-Tensile Wire Mesh',
      warranty: '10 Years Frame Warranty',
      dimensions: '10.5 ft x 8.5 ft'
    },
    highlights: [
      'Reinforced internal corners prevent wind buckling',
      'Continuous magnetic interlock between panels',
      'Smooth multi-point tracking'
    ],
    badge: 'High-Rise Certified',
    googleListingUrl: googleProfileShareUrl
  },

  // 3. Window Mesh Screens
  {
    id: 'proj-08',
    title: '2-Track White Powder-Coated Aluminium Sliding Window Mesh',
    category: 'Window Screens',
    categorySlug: 'window-screens',
    location: 'Miyapur, Hyderabad',
    description: 'Sleek white powder-coated sliding insect screen installed on bedroom aluminium window with upper fixed transom section.',
    image: '/assets/aistudio/IMG-20261024-WA0016_c917c26d.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0016_c917c26d.jpg',
      '/assets/aistudio/IMG-20261024-WA0034_f4147787.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: '2-Track Horizontal Window Slider',
      frameMaterial: 'Pure White Architectural Aluminium',
      meshType: 'Phifer Invisible Fiberglass Mesh',
      warranty: '3 Years Warranty',
      dimensions: '5.0 ft x 4.0 ft'
    },
    highlights: [
      'Perimeter wool pile against dust and bugs',
      'Effortless slide with embedded nylon wheels',
      'Easily removable for washing'
    ],
    badge: 'Clean Modern Finish',
    clientReview: {
      author: 'Sunita Reddy',
      rating: 5,
      comment: 'Neat white finish that matches our UPVC windows perfectly. Very impressed with the quality.'
    },
    googleListingUrl: googleProfileShareUrl
  },
  {
    id: 'proj-09',
    title: '3-Panel Openable Screens on Traditional Arched Window Grills',
    category: 'Window Screens',
    categorySlug: 'window-screens',
    location: 'Benz Circle, Vijayawada',
    description: 'Custom fabricated 3-section openable aluminium mosquito net frames engineered to fit behind existing decorative iron window grills.',
    image: '/assets/aistudio/IMG-20261024-WA0030_876ea08b.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0030_876ea08b.jpg',
      '/assets/aistudio/IMG-20261024-WA0027_c11c4fea.jpg',
      '/assets/aistudio/IMG-20261024-WA0033_a31cc30c.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Triple Leaf Hinged Window Casement',
      frameMaterial: 'Wood Finish Powder-Coated Aluminium',
      meshType: 'Fine Weave SS 304 Mesh',
      warranty: '5 Years Warranty',
      dimensions: '6.0 ft x 5.0 ft'
    },
    highlights: [
      'Zero modification to existing heritage wood frames',
      'Magnetic catch ensures firm closure against high wind',
      'Provides unobstructed view through arched iron grill'
    ],
    badge: 'Custom Architecture',
    googleListingUrl: googleProfileShareUrl
  },
  {
    id: 'proj-10',
    title: 'Retrofit 2-Panel Hinged Window Mosquito Net Screens',
    category: 'Window Screens',
    categorySlug: 'window-screens',
    location: 'Nallagandla, Hyderabad',
    description: 'Two-panel hinged insect screen frames fitted cleanly onto standard window jambs, enabling independent opening of both window sashes.',
    image: '/assets/aistudio/IMG-20261024-WA0027_c11c4fea.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0027_c11c4fea.jpg',
      '/assets/aistudio/IMG-20261024-WA0033_a31cc30c.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Twin Openable Window Screen',
      frameMaterial: 'Extruded Aluminium Section',
      meshType: 'Grey Fiberglass Mesh',
      warranty: '3 Years Warranty',
      dimensions: '4.5 ft x 4.0 ft'
    },
    highlights: [
      'Stainless steel butterfly hinges',
      'Simple thumb latch for daily opening',
      'Affordable and highly durable'
    ],
    badge: 'Popular Choice',
    googleListingUrl: googleProfileShareUrl
  },
  {
    id: 'proj-11',
    title: 'Precision UPVC Window Track Mosquito Screen Installation',
    category: 'Window Screens',
    categorySlug: 'window-screens',
    location: 'Hitec City, Hyderabad',
    description: 'Manufacturer-calibrated mosquito net frame installed directly into standard UPVC window track with protective film prior to site handover.',
    image: '/assets/aistudio/IMG-20261024-WA0034_f4147787.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0034_f4147787.jpg',
      '/assets/aistudio/IMG-20261024-WA0023_aa6b8f90.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'UPVC Sliding Channel Shutter',
      frameMaterial: 'Aluminium Shutter with Nylon Guides',
      meshType: 'High-Definition Black Mesh',
      warranty: '3 Years Warranty',
      dimensions: '4.0 ft x 3.5 ft'
    },
    highlights: [
      'Factory protective tape removed after deep cleaning',
      'Perimeter sealing blocks tiny gnats and flies',
      'Smooth track gliding action'
    ],
    badge: 'Factory Precision',
    googleListingUrl: googleProfileShareUrl
  },

  // 4. Safety Grills & Mesh Enclosures
  {
    id: 'proj-12',
    title: 'Integrated Security Grill Door with Stainless Steel Mosquito Mesh',
    category: 'Safety Grills & Mesh',
    categorySlug: 'safety-grills-mesh',
    location: 'Manikonda, Hyderabad',
    description: 'Heavy structural steel security safety grill door fabricated with an integrated stainless steel wire mesh layer, providing dual anti-theft and insect protection.',
    image: '/assets/aistudio/IMG-20261024-WA0018_96552f95.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0018_96552f95.jpg',
      '/assets/aistudio/IMG-20261024-WA0019_91cba12a.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Dual Security Grill + SS Mosquito Screen',
      frameMaterial: 'Heavy Mild Steel Box Section + Aluminium Mesh Bead',
      meshType: 'SS 304 High-Tensile Heavy Wire Mesh',
      warranty: '10 Years Rust-Free Warranty',
      dimensions: '7.2 ft x 3.2 ft'
    },
    highlights: [
      'Heavy-duty mortise lock with central plate',
      'Knife-shear resistant wire mesh',
      'Stops rats, lizards, mosquitoes, and intruders'
    ],
    badge: 'Heavy Security',
    clientReview: {
      author: 'Col. K. R. Sharma (Retd.)',
      rating: 5,
      comment: 'Provides supreme peace of mind for our ground-floor home. Solid fabrication and finish.'
    },
    googleListingUrl: googleProfileShareUrl
  },
  {
    id: 'proj-13',
    title: 'Full Balcony Diamond Safety Grill & Heavy Insect Mesh Enclosure',
    category: 'Safety Grills & Mesh',
    categorySlug: 'safety-grills-mesh',
    location: 'Tellapur, Hyderabad',
    description: 'Complete ceiling-to-floor balcony safety enclosure fabricated with diamond safety grill and fine mesh overlay, protecting children, preventing bird nesting, and stopping mosquitoes.',
    image: '/assets/aistudio/IMG-20261024-WA0019_91cba12a.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0019_91cba12a.jpg',
      '/assets/aistudio/IMG-20261024-WA0017_dbde43d0.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Full Balcony Enclosure with Diamond Grill & Mesh',
      frameMaterial: 'Powder-Coated Structural Steel & Aluminium Beading',
      meshType: 'Dual Pigeon & Insect Mesh Barrier',
      warranty: '10 Years Structural Warranty',
      dimensions: '18 ft span x 10 ft height'
    },
    highlights: [
      'Child fall-proof structural diamond grid',
      'Zero pigeon entry and zero mosquito ingress',
      'Overhead canopy protects from direct rainwater'
    ],
    badge: 'Complete Balcony Solution',
    googleListingUrl: googleProfileShareUrl
  },
  {
    id: 'proj-14',
    title: 'Exterior Projected Box-Type Window Grills with Mosquito Netting',
    category: 'Safety Grills & Mesh',
    categorySlug: 'safety-grills-mesh',
    location: 'Attapur, Hyderabad',
    description: 'Projected exterior window box grills fitted with top protective polycarbonate rain cover and tight stainless steel insect netting along all facets.',
    image: '/assets/aistudio/IMG-20261024-WA0017_dbde43d0.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0017_dbde43d0.jpg',
      '/assets/aistudio/IMG-20261024-WA0014_1ccc08a0.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Exterior Projected Window Safety Box',
      frameMaterial: 'Black Powder-Coated MS Section + Aluminium Beading',
      meshType: 'High-Tensile SS 304 Mesh',
      warranty: '5 Years Warranty',
      dimensions: '6.0 ft x 4.5 ft x 1.5 ft projection'
    },
    highlights: [
      'Top shade prevents rainwater splash into room',
      'Extended projection allows keeping plants on window sill',
      '100% insect and monkey safe'
    ],
    badge: 'All-Weather Protection',
    googleListingUrl: googleProfileShareUrl
  },

  // 5. Ventilator & Exhaust Screens
  {
    id: 'proj-15',
    title: 'Exterior Wall Exhaust Fan & Ventilator Pest Barrier Screen',
    category: 'Ventilator & Exhaust',
    categorySlug: 'ventilator-exhaust',
    location: 'Kondapur, Hyderabad',
    description: 'Square aluminium insect screen frame anchored over exterior bathroom/kitchen exhaust duct, stopping lizards, wasps, and mosquitoes from entering through vents.',
    image: '/assets/aistudio/IMG-20261024-WA0026_eab95c8f.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0026_eab95c8f.jpg',
      '/assets/aistudio/IMG-20261024-WA0025_195e1b7c.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Fixed Exhaust Port Screen',
      frameMaterial: 'Aluminium Channel with Wall Anchor Screws',
      meshType: 'Heavy SS 304 Mesh (Heat & Grease Resistant)',
      warranty: '5 Years Warranty',
      dimensions: '1.5 ft x 1.5 ft'
    },
    highlights: [
      'Prevents lizard and bird entry into exhaust pipe',
      'Heat & steam resistant wire mesh',
      'Clean silicone edge seal against external wall'
    ],
    badge: 'Duct & Vent Protection',
    googleListingUrl: googleProfileShareUrl
  },

  // 6. Ceiling Cloth Drying Hangers
  {
    id: 'proj-16',
    title: '6-Pipe Stainless Steel Balcony Ceiling Cloth Drying Pulley System',
    category: 'Ceiling Cloth Hangers',
    categorySlug: 'ceiling-cloth-hangers',
    location: 'Nanakramguda, Hyderabad',
    description: 'Ceiling-mounted individual pulley operated stainless steel cloth drying hanger system installed in an apartment balcony, freeing up valuable floor space.',
    image: '/assets/aistudio/IMG-20261024-WA0022_6f5f5714.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0022_6f5f5714.jpg',
      '/assets/aistudio/IMG-20261024-WA0032_fa1d6d56.jpg',
      '/assets/aistudio/IMG-20261024-WA0028_5f769a22.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Individual Pipe Pulley Ceiling Hanger',
      frameMaterial: '100% Pure SS 202 / SS 304 Pipes & Ceiling Brackets',
      meshType: 'High-Strength Nylon UV Protected Ropes',
      warranty: '3 Years Warranty on Pulley Mechanism',
      dimensions: '6 pipes x 6 ft length each (36 ft total drying span)'
    },
    highlights: [
      'Lowers each pipe individually with smooth nylon pulley',
      'Frees 100% of balcony floor space for walking',
      'Takes up to 50 kg wet clothes load with ease'
    ],
    badge: 'Popular Home Needs Service',
    clientReview: {
      author: 'Lakshmi Narayana, Apartment Secretary',
      rating: 5,
      comment: 'Very practical and clean work. Installed in less than an hour. Shiva Sai team also did our mosquito doors.'
    },
    googleListingUrl: googleProfileShareUrl
  },
  {
    id: 'proj-17',
    title: 'On-Site Tension Calibration of Balcony Roof Cloth Hanger',
    category: 'Ceiling Cloth Hangers',
    categorySlug: 'ceiling-cloth-hangers',
    location: 'Kukatpally Housing Board (KPHB), Hyderabad',
    description: 'Technician adjusting nylon rope tension and wall anchor cleats during final handover of a 6-pipe stainless steel drying system on a covered terrace.',
    image: '/assets/aistudio/IMG-20261024-WA0032_fa1d6d56.jpg',
    images: [
      '/assets/aistudio/IMG-20261024-WA0032_fa1d6d56.jpg',
      '/assets/aistudio/IMG-20261024-WA0028_5f769a22.jpg'
    ],
    completionDate: 'Recent Installation',
    specifications: {
      systemType: 'Wall-Anchored Pulley Cleat System',
      frameMaterial: 'Stainless Steel Pipes with Brass Wheel Pulleys',
      meshType: 'Heavy Braided Nylon Rope',
      warranty: '3 Years Warranty',
      dimensions: '6 pipes x 7 ft'
    },
    highlights: [
      'Brass pulley wheels ensure silent rope travel',
      'Stainless steel wall cleat holds ropes securely',
      'Easy operation for elders and homemakers'
    ],
    badge: 'Quality Handover',
    googleListingUrl: googleProfileShareUrl
  }
];
