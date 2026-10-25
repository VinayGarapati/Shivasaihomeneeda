export interface FAQItem {
  id: string;
  category: 'mosquito-doors' | 'window-screens' | 'materials-durability' | 'cloth-hangers' | 'pricing-installation' | 'maintenance';
  categoryLabel: string;
  question: string;
  answer: string;
  tags?: string[];
}

export const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'mosquito-doors', label: 'Mosquito Net Doors' },
  { id: 'window-screens', label: 'Window Mesh Screens' },
  { id: 'materials-durability', label: 'SS 304 Mesh & Materials' },
  { id: 'cloth-hangers', label: 'Ceiling Cloth Hangers' },
  { id: 'pricing-installation', label: 'Pricing & Free Visit' },
  { id: 'maintenance', label: 'Cleaning & Maintenance' }
] as const;

export const faqsData: FAQItem[] = [
  // 1. Mosquito Net Doors
  {
    id: 'faq-01',
    category: 'mosquito-doors',
    categoryLabel: 'Mosquito Net Doors',
    question: 'Which mosquito net door is best suited for balcony French doors?',
    answer: 'For balcony French doors and large patio glass doors, we highly recommend our 2-Track or 3-Track Aluminium Sliding Mosquito Net Door, or the Barrier-Free Pleated Accordion Mesh Door. Sliding doors glide effortlessly on sealed nylon rollers alongside your existing glass panels, while pleated accordion doors fold into a slim side cassette with a flat bottom floor track (less than 4mm tall), preventing tripping hazards.',
    tags: ['balcony', 'sliding door', 'french door', 'pleated']
  },
  {
    id: 'faq-02',
    category: 'mosquito-doors',
    categoryLabel: 'Mosquito Net Doors',
    question: 'Can you install mosquito net doors on existing wooden, UPVC, or granite door frames?',
    answer: 'Yes! All Shiva Sai Home Needs mosquito net doors are custom-fabricated to fit your specific frame jambs. Whether your doorway has a wooden frame, UPVC profile, polished granite casing, or masonry wall, we use specialized stainless steel masonry fasteners and matching perimeter weatherstrip seals to ensure zero insect entry gaps.',
    tags: ['installation', 'wooden frame', 'upvc', 'granite']
  },
  {
    id: 'faq-03',
    category: 'mosquito-doors',
    categoryLabel: 'Mosquito Net Doors',
    question: 'Do openable mosquito net doors come with self-closing springs and magnetic seals?',
    answer: 'Yes, our heavy-duty hinged mosquito net doors feature full-length vertical magnetic strips for an airtight seal against mosquitoes and insects. Additionally, we provide pneumatic door closers or adjustable spring hinges as standard or add-on options so the door closes smoothly on its own after passing through.',
    tags: ['hinged door', 'magnetic seal', 'door closer']
  },
  {
    id: 'faq-04',
    category: 'mosquito-doors',
    categoryLabel: 'Mosquito Net Doors',
    question: 'How does the Barrier-Free Pleated Mosquito Net Door work?',
    answer: 'The pleated system uses an accordion zig-zag folding polyester/fiberglass mesh guided by high-tensile internal tension cords. It requires no bottom floor threshold or elevated track—only a 3mm ultra-flat bottom guide runner. When opened, the mesh stacks into a compact 40mm side profile, preserving 90% of your doorway walkway.',
    tags: ['pleated', 'accordion', 'barrier-free']
  },

  // 2. Window Mesh Screens
  {
    id: 'faq-05',
    category: 'window-screens',
    categoryLabel: 'Window Mesh Screens',
    question: 'How do you install sliding mosquito nets on 2-track or 3-track UPVC windows?',
    answer: 'Modern UPVC windows typically have an inner or outer channel designed for mosquito shutters. If your UPVC frame has an existing track, our custom aluminium mesh sash clips directly into the channel with precision top guides and bottom rollers. If no track exists, our technicians install a slim add-on top and bottom track matched to your frame color.',
    tags: ['upvc windows', 'sliding net', 'window tracks']
  },
  {
    id: 'faq-06',
    category: 'window-screens',
    categoryLabel: 'Window Mesh Screens',
    question: 'Are magnetic insect screens easy to remove and wash?',
    answer: 'Yes! Magnetic insect screens are framed with flexible PVC strips and bonded with neodymium magnetic tape that snaps directly onto a matching strip installed on your window perimeter. You can gently pull the corner tab to peel the screen off, rinse it under running tap water or spray with a shower hose, and snap it right back in place in seconds.',
    tags: ['magnetic net', 'washable', 'window screen']
  },
  {
    id: 'faq-07',
    category: 'window-screens',
    categoryLabel: 'Window Mesh Screens',
    question: 'Will installing mosquito mesh block daylight or outside visibility?',
    answer: 'Not at all. We use genuine charcoal grey and pitch-black optical mesh weaves. Because human eyes focus past dark meshes to the bright outside view, black fiberglass and SS 304 wire meshes provide superior outward optical clarity and transparency compared to light grey or white nets, while still keeping 100% of mosquitoes and midges out.',
    tags: ['visibility', 'optical clarity', 'daylight', 'ventilation']
  },

  // 3. Materials & Durability
  {
    id: 'faq-08',
    category: 'materials-durability',
    categoryLabel: 'SS 304 Mesh & Materials',
    question: 'Can rats, cats, or dogs tear through your mosquito mesh?',
    answer: 'Standard nylon or cheap plastic nets can be chewed through by rodents or torn by pet claws. However, Shiva Sai Home Needs specializes in Stainless Steel 304 (SS 304) High-Tensile Wire Mesh and Heavy-Duty Tuff Mesh. SS 304 wire mesh is completely rodent-proof, cat-claw resistant, and dog-bite proof, making it ideal for ground floors, balconies, and pet-owning households.',
    tags: ['ss 304', 'pet proof', 'rat bite proof', 'cat safe']
  },
  {
    id: 'faq-09',
    category: 'materials-durability',
    categoryLabel: 'SS 304 Mesh & Materials',
    question: 'Will the aluminium frames rust or corrode in rain and coastal humidity?',
    answer: 'No. We exclusively use virgin 6063-T6 architectural grade extruded aluminium profiles treated with multi-stage chemical pre-treatment and finished with 60-80 micron architectural powder coating (available in White, Dark Bronze, Jet Black, Charcoal Grey, and Wood Grain). It is 100% rust-proof and weather-resistant with an expected lifespan of 10+ years.',
    tags: ['rust proof', 'aluminium', 'powder coating', 'longevity']
  },
  {
    id: 'faq-10',
    category: 'materials-durability',
    categoryLabel: 'SS 304 Mesh & Materials',
    question: 'What is the difference between Fiberglass Mesh and Stainless Steel Mesh?',
    answer: 'Fiberglass mesh is flexible, rust-proof, budget-friendly, and offers excellent ventilation and outward clarity. Stainless Steel 304 mesh is a rigid, woven metal wire that delivers superior physical security, impact resistance, and 100% protection against sharp pet claws, birds, and rodents. Our technician brings physical samples of both so you can inspect them before ordering.',
    tags: ['fiberglass vs ss304', 'mesh comparison', 'durability']
  },

  // 4. Balcony Ceiling Cloth Drying Hangers
  {
    id: 'faq-11',
    category: 'cloth-hangers',
    categoryLabel: 'Ceiling Cloth Hangers',
    question: 'How does the Balcony Ceiling Cloth Drying Pulley Hanger work?',
    answer: 'Our ceiling cloth hanger consists of 6 individual stainless steel round pipes suspended from ceiling-anchored dual brass-nylon pulley brackets. Using durable UV-resistant nylon braided cords secured to a wall cleat plate, you can lower any individual pipe down to chest height, hang your wet laundry comfortably, and then pull the cord to hoist it up near the balcony ceiling where warm air naturally dries clothes fast.',
    tags: ['ceiling hanger', 'pulley system', 'balcony laundry']
  },
  {
    id: 'faq-12',
    category: 'cloth-hangers',
    categoryLabel: 'Ceiling Cloth Hangers',
    question: 'What is the load-carrying capacity of the 6-pipe ceiling cloth drying system?',
    answer: 'Each stainless steel pipe can hold up to 8–10 kg of wet laundry, giving the complete 6-pipe system an overall capacity of 50+ kg. It comfortably accommodates heavy winter blankets, bedsheets, denim jeans, and daily laundry without sagging or bending.',
    tags: ['weight capacity', 'heavy load', 'blankets']
  },
  {
    id: 'faq-13',
    category: 'cloth-hangers',
    categoryLabel: 'Ceiling Cloth Hangers',
    question: 'Can the ceiling cloth hanger be mounted on false ceilings or open balconies?',
    answer: 'The system requires solid structural ceiling anchoring (concrete ceiling or concrete beam). For balconies with gypsum or POP false ceilings, our technicians use specialized heavy-duty threaded rod ceiling extenders anchored directly into the parent concrete slab, ensuring 100% safety and zero ceiling cracks.',
    tags: ['false ceiling', 'concrete slab', 'ceiling mounting']
  },

  // 5. Pricing & Free Visit
  {
    id: 'faq-14',
    category: 'pricing-installation',
    categoryLabel: 'Pricing & Free Visit',
    question: 'How is the price calculated for mosquito net doors and window screens?',
    answer: 'Pricing is primarily based on total square footage (Height × Width) and the chosen system (e.g., standard sliding mesh door starts around ₹165–₹195/sq ft, heavy openable doors ₹185–₹220/sq ft, pleated barrier-free doors ₹280–₹350/sq ft, and window sliding screens ₹140–₹170/sq ft). Ceiling cloth hangers are priced per complete set (₹1,800 to ₹3,200 depending on pipe length 4ft to 8ft).',
    tags: ['price per sq ft', 'cost', 'quotation']
  },
  {
    id: 'faq-15',
    category: 'pricing-installation',
    categoryLabel: 'Pricing & Free Visit',
    question: 'Is the doorstep measurement visit and quotation really free?',
    answer: 'Yes! Shiva Sai Home Needs provides 100% Free Doorstep Laser Measurement and Consultation across our service regions. Our technician visits your home with catalog samples, takes laser-accurate measurements, explains suitable frame options, and hands over an itemized written quote with zero purchase obligation.',
    tags: ['free measurement', 'site visit', 'quote']
  },
  {
    id: 'faq-16',
    category: 'pricing-installation',
    categoryLabel: 'Pricing & Free Visit',
    question: 'How many days does it take to manufacture and install?',
    answer: 'Because we own our fabrication workshop and maintain pre-finished aluminium sections in stock, typical turnaround is 24 to 48 hours from measurement confirmation. The on-site installation itself is completed quickly and cleanly within 1 to 2 hours with minimal noise and zero mess.',
    tags: ['turnaround time', 'fast delivery', 'installation']
  },
  {
    id: 'faq-17',
    category: 'pricing-installation',
    categoryLabel: 'Pricing & Free Visit',
    question: 'What warranty is provided with Shiva Sai Home Needs products?',
    answer: 'We provide a 5-Year Warranty on our aluminium frames and powder-coating against corrosion, chipping, and joint defects, plus a 1-to-2 Year Warranty on rollers, locks, hinges, and pulley mechanisms. We also provide prompt after-sales service and replacement mesh restringing.',
    tags: ['warranty', 'after sales', 'guarantee']
  },

  // 6. Maintenance & Cleaning
  {
    id: 'faq-18',
    category: 'maintenance',
    categoryLabel: 'Cleaning & Maintenance',
    question: 'How do I clean and wash dust off the mosquito mesh?',
    answer: 'For regular maintenance, simply use a soft feather duster, micro-fiber cloth, or handheld vacuum cleaner with a brush nozzle. For deep cleaning, sliding and openable screens can be gently wiped down with a sponge and mild soapy water, or lifted off the tracks and washed outdoors with a water spray.',
    tags: ['cleaning', 'washing mesh', 'maintenance']
  },
  {
    id: 'faq-19',
    category: 'maintenance',
    categoryLabel: 'Cleaning & Maintenance',
    question: 'What should I do if the pleated net or sliding rollers become stiff after years of use?',
    answer: 'Simply spray a silicone-based lubricant or dry Teflon spray into the bottom track once every 6–12 months to clear out accumulated balcony dust. If a roller ever wears out, Shiva Sai Home Needs offers quick replacement roller service at your doorstep.',
    tags: ['lubrication', 'sliding track maintenance', 'smooth glide']
  }
];
