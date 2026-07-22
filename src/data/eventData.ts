import { Service, GalleryItem, PackageTier, ScheduleItem, Testimonial, TeamMember, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'ARKAYUGA',
  fullName: 'Arkayuga Events',
  tagline: 'Premier Event Management & Luxury Celebration Planners in India',
  description: 'Creating timeless, flawless, and extraordinary experiences across weddings, corporate summits, brand activations, and grand entertainment spectacles.',
  email: 'info@arkayugaevents.com',
  secondaryEmail: 'info@arkayuga.com',
  phone: '+91 9962999819',
  address: 'No. 45, Royal Crest Towers, Anna Salai, Chennai, Tamil Nadu 600002',
  experienceYears: '10+',
  eventsCompleted: '500+',
  citiesCovered: '25+',
  clientSatisfaction: '99.4%',
  upcomingEventDate: '2026-11-15T09:00:00', // For countdown timer
};

export const ARKAYUGA_EDGES = [
  {
    title: 'Experienced Planners',
    desc: 'A dedicated team of experts in Indian event management with 10+ years of collective experience.',
    iconName: 'Users'
  },
  {
    title: 'Customized Themes',
    desc: 'Bespoke designs ranging from traditional Marwari & South Indian royal setups to modern minimal aesthetics.',
    iconName: 'Sparkles'
  },
  {
    title: 'Reliable Vendor Network',
    desc: 'Access to top florists, gourmet caterers, production crews, and artists across major Indian cities.',
    iconName: 'Award'
  },
  {
    title: 'On-time Flawless Execution',
    desc: 'Precise timeline coordination and backstage management that ensures your event runs like clockwork.',
    iconName: 'Clock'
  },
  {
    title: 'Local Expertise & Pan-India Reach',
    desc: 'Deep roots in regional Indian traditions combined with execution capabilities in all tier-1 and destination cities.',
    iconName: 'MapPin'
  },
  {
    title: 'Transparent Pricing & Tech-First',
    desc: 'Zero hidden costs, detailed budget breakdowns, and digital guest management apps for seamless events.',
    iconName: 'ShieldCheck'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 's1',
    slug: 'wedding-event-management',
    title: 'Wedding Event Management',
    tagline: 'Crafting Royal & Destination Indian Weddings',
    category: 'Weddings',
    startingPrice: '₹2,50,000',
    iconName: 'HeartHandshake',
    description: 'Palatial venues, grand mandaps, vibrant sangeet nights, and flawless guest hospitality for your dream wedding.',
    longDescription: 'At Arkayuga Events, we transform your dream wedding into a majestic reality. From traditional South Indian muhurthams and grand Marwari sangeets to luxury beach destination weddings in Goa and royal palace celebrations in Jaipur, our end-to-end wedding management covers every intricate detail with grace and perfection.',
    heroImage: 'https://images.unsplash.com/photo-1519225495810-7517c31d9036?auto=format&fit=crop&q=80&w=1200',
    features: ['Royal Mandap Design', 'Sangeet & Mehendi Setup', 'Gourmet Catering Curation', 'VIP Guest Hospitality', 'Destination Logistics'],
    subServices: [
      { name: 'Venue Selection', desc: 'Palatial venues, heritage hotels, and luxury beach resorts across India.' },
      { name: 'Mandap & Stage Decor', desc: 'Bespoke floral installations and traditional royal setups.' },
      { name: 'Catering & Menu Curation', desc: 'Authentic regional cuisines and gourmet global live stations.' },
      { name: 'Guest Hospitality & Travel', desc: 'VIP guest relations, luxury car fleets, and hotel check-in coordination.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1519225495810-7517c31d9036?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 's2',
    slug: 'corporate-event-management',
    title: 'Corporate Event Management',
    tagline: 'High-Impact Summits, Conclaves & Award Galas',
    category: 'Corporate',
    startingPrice: '₹1,50,000',
    iconName: 'Building2',
    description: 'Seamless corporate conferences, annual summits, brand launches, gala dinners, and executive offsites.',
    longDescription: 'Powering corporate excellence through precise event logistics, high-definition AV production, stage setups, and immersive branding experiences. We work with leading MNCs, tech enterprises, and growth startups to deliver memorable business conclaves.',
    heroImage: 'https://images.unsplash.com/photo-1540575861501-7c91c14c9951?auto=format&fit=crop&q=80&w=1200',
    features: ['Conferences & Summits', 'Gala Dinners & Awards', 'Brand Conclaves', 'Team Building Offsites', 'Live Keynotes & AV'],
    subServices: [
      { name: 'Conferences & Summits', desc: 'End-to-end management of summits, seminars, and international keynotes.' },
      { name: 'Gala Dinners & Awards Nights', desc: 'High-end corporate hospitality, celebrity anchors, and grand stage production.' },
      { name: 'Team Building Offsites', desc: 'Innovative employee engagement activities in scenic resort destinations.' },
      { name: 'Exhibition & Branding Booths', desc: 'Custom brand backdrops, registration desks, and digital displays.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1540575861501-7c91c14c9951?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 's3',
    slug: 'birthday-party-organizer',
    title: 'Birthday Party Organizer',
    tagline: 'Immersive Themes & Joyful Milestone Celebrations',
    category: 'Social',
    startingPrice: '₹75,000',
    iconName: 'Cake',
    description: 'Customized birthday themes, designer backdrops, entertainment acts, and gourmet catering for all ages.',
    longDescription: 'Whether it’s a magical 1st birthday extravaganza, a stylish sweet 16, or a luxurious 50th milestone celebration, Arkayuga Events crafts immersive party environments filled with laughter, customized props, interactive games, and designer cakes.',
    heroImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200',
    features: ['3D Theme Installations', 'Magicians & Anchors', 'Custom Designer Cakes', 'Interactive Play Corners', 'Personalized Return Favors'],
    subServices: [
      { name: 'Theme Design & Props', desc: 'Customized 3D props and immersive fantasy world-building.' },
      { name: 'Entertainment & Games', desc: 'Magicians, anchors, puppet shows, and interactive carnival stalls.' },
      { name: 'Gourmet Cakes & Dessert Tables', desc: 'Designer multi-tier cakes tailored to your party theme.' },
      { name: 'Curated Return Gifts', desc: 'Personalized favors and hamper boxes for all guests.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 's4',
    slug: 'product-launch-events',
    title: 'Product Launch Events',
    tagline: 'High-Energy Brand Reveals & Experiential PR',
    category: 'Corporate',
    startingPrice: '₹2,00,000',
    iconName: 'Rocket',
    description: 'Dramatic product reveals, high-tech stage mechanics, media PR coordination, and influencer engagement.',
    longDescription: 'Turn your new product launch into an unforgettable viral moment. We combine intelligent lighting, cold pyro effects, high-resolution LED screens, and celebrity presence to make every product reveal command industry attention.',
    heroImage: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=1200',
    features: ['Mall & Arena Activations', 'Grand Tech Unveiling', 'Promoter Manpower', 'Influencer & PR Invites', 'Viral Social Corners'],
    subServices: [
      { name: 'Mall & Public Activations', desc: 'Creative pop-up stalls and interactive booths in high-traffic Indian malls.' },
      { name: 'Grand Unveiling Mechanics', desc: 'Dramatic reveals with motorized stages, laser shows, and fog effects.' },
      { name: 'Promoter Manpower', desc: 'Professional, trained staff for seamless brand representation.' },
      { name: 'Social Media PR & Influencers', desc: 'Viral launch strategies, live streams, and influencer media passes.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 's5',
    slug: 'exhibition-stall-designers',
    title: 'Exhibition Stall Designers',
    tagline: 'Bespoke 3D Stalls & Trade Show Booth Fabrication',
    category: 'Corporate',
    startingPrice: '₹1,20,000',
    iconName: 'LayoutGrid',
    description: 'Custom 3D exhibition booth designs, high-finish fabrication, interactive display tech, and trade show logistics.',
    longDescription: 'Stand out on the expo floor. We design and construct custom 3D trade show booths that maximize footfall, showcase your products interactively, and represent your corporate identity with architectural elegance.',
    heroImage: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200',
    features: ['Custom 3D Rendering', 'Precision Fabrication', 'Touchscreen Touchpoints', 'Lead Capture Tech', 'On-site Expo Support'],
    subServices: [
      { name: '3D Stall Design', desc: 'Creative 3D spatial renderings for maximum brand visibility.' },
      { name: 'High-Finish Fabrication', desc: 'Precision stall construction with acrylic, wood, and metal finishes.' },
      { name: 'Visitor Engagement Displays', desc: 'Touchscreen displays, AR/VR product demos, and digital kiosks.' },
      { name: 'On-site Logistics & Dismantling', desc: 'Seamless material handling, power backup, and breakdown service.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 's6',
    slug: 'production-tech-support',
    title: 'Production & Tech Support',
    tagline: 'Concert-Grade Sound, Intelligent Lighting & LED Walls',
    category: 'Production',
    startingPrice: '₹1,00,000',
    iconName: 'Sliders',
    description: 'Line-array audio systems, P2/P3 high-res LED screens, intelligent moving beam lights, and truss structures.',
    longDescription: 'Audio-visual perfection for live events of any scale. From intimate corporate conferences to massive outdoor musical festivals with 10,000+ attendees, our tech team operates concert-grade equipment.',
    heroImage: 'https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=1200',
    features: ['Line-Array Sound', 'P2/P3 Indoor & Outdoor LED', 'Intelligent Moving Head Beams', 'Modular Aluminum Trussing', 'Sound Engineers'],
    subServices: [
      { name: 'Sound Engineering', desc: 'Line-array speakers and acoustic management for crystal clear audio.' },
      { name: 'Intelligent Lighting', desc: 'Moving heads, beam lights, and architectural washes for mood control.' },
      { name: 'Visual Media & LED Walls', desc: 'High-resolution P2/P3 seamless LED screens for live video feeds.' },
      { name: 'Stage Construction', desc: 'Modular heavy-duty stages and custom scenic scenic framing.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 's7',
    slug: 'decor-design-services',
    title: 'Decor & Design Services',
    tagline: 'Exquisite Floral Styling, Backdrops & Ambient Scenery',
    category: 'Design',
    startingPrice: '₹1,80,000',
    iconName: 'Flower2',
    description: 'Fresh exotic floral arrangements, custom themed props, luxury lounge furniture sets, and mood lighting.',
    longDescription: 'Transforming bland spaces into enchanting visual landscapes. Our floral artisans and scenic stylists craft exquisite arches, crystal chandeliers, traditional Marigold setups, and contemporary geometric lounges.',
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
    features: ['Fresh Exotic Flowers', 'Traditional & Modern Fusion', 'Luxury Lounge Styling', 'Custom Photo Booth Backdrops', 'Ambient Candle & Fairy Lights'],
    subServices: [
      { name: 'Floral Design', desc: 'Exquisite floral installations using fresh exotic and seasonal blooms.' },
      { name: 'Prop & Backdrop Design', desc: 'Custom-built backdrops and themed artistic installations.' },
      { name: 'Lounge Styling', desc: 'High-end sofa lounges, velvet draping, and fabric sets.' },
      { name: 'Mood & Architectural Lighting', desc: 'Warm fairy lights, warm uplighting, and candle arrangements.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 's8',
    slug: 'hospitality-logistics',
    title: 'Hospitality & Logistics',
    tagline: 'VIP Concierge, Airport Transfers & Resort Bookings',
    category: 'Weddings',
    startingPrice: '₹90,000',
    iconName: 'Car',
    description: 'VIP guest relations, luxury car rentals, bulk resort accommodations, and digital guest check-in software.',
    longDescription: 'Ensuring every guest feels cherished and pampered. We manage hotel check-ins, luxury luggage coordination, private chauffeur transfers, custom welcome hampers, and 24/7 guest desk helplines.',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    features: ['VIP Helpdesk', 'Luxury Car Fleets', 'Bulk Resort Bookings', 'Personalized Welcome Kits', 'Digital Guest Apps'],
    subServices: [
      { name: 'Hospitality Management', desc: 'VIP guest relations, welcome desks, and check-in assistance.' },
      { name: 'Travel & Fleet Logistics', desc: 'Luxury car rentals, SUVs, and airport transfer scheduling.' },
      { name: 'Accommodation Bookings', desc: 'Bulk room reservations at 5-star hotels and luxury heritage resorts.' },
      { name: 'Welcome Kits & Hampers', desc: 'Customized luxury gift hampers placed in guest suites.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 's9',
    slug: 'entertainment-artist-management',
    title: 'Entertainment & Artist Management',
    tagline: 'A-List Celebrities, Live Bands, Top DJs & Performers',
    category: 'Social',
    startingPrice: '₹1,50,000',
    iconName: 'Music',
    description: 'Direct booking of Bollywood celebrities, playback singers, fusion bands, DJs, Emcees, and traditional dance troupes.',
    longDescription: 'Elevate your event with thrilling live entertainment. We manage direct booking, artist riders, green room luxury, security, and stage coordination for renowned musicians, comedians, celebrity stars, and cultural performers.',
    heroImage: 'https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=1200',
    features: ['Celebrity Guest Stars', 'Live Fusion Bands', 'EDM & Bollywood DJs', 'Professional Emcees/Anchors', 'Cultural & LED Dance Acts'],
    subServices: [
      { name: 'Celebrity Booking', desc: 'Sourcing and managing A-list talent, actors, and playback singers.' },
      { name: 'Live Bands & Ensembles', desc: 'Fusion bands, acoustic sets, classical instrumentalists, and brass bands.' },
      { name: 'DJs & Sound Producers', desc: 'Top-tier club DJs and wedding celebration music curators.' },
      { name: 'Performance Art & Dance', desc: 'Traditional Kathakali/Bharatanatyam, aerialists, and LED percussionists.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 's10',
    slug: 'event-photography-videography',
    title: 'Cinematic Photography & Film',
    tagline: '4K Storytelling, Candid Shots & Live Drone Streams',
    category: 'Production',
    startingPrice: '₹85,000',
    iconName: 'Camera',
    description: 'Story-driven 4K wedding films, candid emotional photography, aerial drone cinematography, and live digital webcasts.',
    longDescription: 'Memories that stay vibrant forever. Our award-winning team of photographers and cinematographers captures spontaneous smiles, grand scale aesthetics, and heartwarming emotions in crisp 4K visual quality.',
    heroImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200',
    features: ['4K Teaser & Feature Film', 'Candid Emotional Shots', '4K Drone Aerial Footage', 'Live HD Webcast Feed', 'Custom Leather Photo Albums'],
    subServices: [
      { name: 'Cinematic Event Films', desc: 'Story-driven high-resolution films edited with color grading.' },
      { name: 'Candid Photography', desc: 'Capturing natural emotions, reactions, and spontaneous moments.' },
      { name: 'Drone Aerial Coverage', desc: 'Stunning aerial drone angles for large outdoor venues and processions.' },
      { name: 'Live Streaming & Digital Feeds', desc: 'Broadcast your celebration live to overseas family and global teams.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, category: 'Weddings', img: 'https://images.unsplash.com/photo-1519225495810-7517c31d9036?auto=format&fit=crop&q=80&w=1200', title: 'The Royal Mandap', subtitle: 'Royal Palace Celebration', location: 'Jaipur, Rajasthan' },
  { id: 2, category: 'Corporate', img: 'https://images.unsplash.com/photo-1540575861501-7c91c14c9951?auto=format&fit=crop&q=80&w=1200', title: 'Business Conclave 2024', subtitle: 'Global Tech Leadership Summit', location: 'Bangalore, Karnataka' },
  { id: 3, category: 'Decor', img: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200', title: 'Traditional Floral Decor', subtitle: 'Exotic Jasmine & Marigold Setup', location: 'Chennai, Tamil Nadu' },
  { id: 4, category: 'Social', img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200', title: 'Grand Sangeet Night', subtitle: 'Luxury Lighting & Stage Production', location: 'Hyderabad, Telangana' },
  { id: 5, category: 'Weddings', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200', title: 'Elegant Indian Couple', subtitle: 'Destination Beach Wedding', location: 'Goa, India' },
  { id: 6, category: 'Corporate', img: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=1200', title: 'Annual Brand Launch', subtitle: 'Interactive Product Unveiling', location: 'Mumbai, Maharashtra' },
  { id: 7, category: 'Decor', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200', title: 'Modern Reception Setup', subtitle: 'Crystal Chandelier & Lounge', location: 'New Delhi, NCR' },
  { id: 8, category: 'Social', img: 'https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=1200', title: 'Vibrant Party Celebration', subtitle: 'Milestone 50th Birthday Gala', location: 'Kochi, Kerala' },
  { id: 9, category: 'Decor', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200', title: 'Lakeside Wedding Theme', subtitle: 'Serene Waterborne Mandap', location: 'Udaipur, Rajasthan' }
];

export const PACKAGE_TIERS: PackageTier[] = [
  {
    id: 'p1',
    name: 'Silver Classic',
    subtitle: 'Essential Elegance for Intimate Events',
    price: '₹1,99,000',
    priceNum: 199000,
    guestCapacity: 'Up to 200 Guests',
    description: 'Perfect for intimate family weddings, milestone birthdays, and boutique corporate workshops.',
    color: 'from-slate-700 to-slate-900',
    features: [
      'Dedicated Event Coordinator',
      'Standard Stage & Backdrop Decor',
      'Basic Sound System & Ambient Lighting',
      'HD Photography (Single Camera)',
      'Basic Guest Entry Desk Setup',
      'Standard Vendor Liaison'
    ],
    notIncluded: ['Celebrity Artist Booking', 'P2 LED Wall', 'VIP Valet Fleet']
  },
  {
    id: 'p2',
    name: 'Gold Signature',
    subtitle: 'Most Popular Choice for Grand Celebrations',
    price: '₹4,50,000',
    priceNum: 450000,
    popular: true,
    guestCapacity: '200 to 600 Guests',
    description: 'Our signature package packed with custom floral installations, 4K multi-camera video, and concert audio.',
    color: 'from-[#5d1b22] to-[#7a242c]',
    features: [
      'Senior Lead Planner + 4 On-site Assistants',
      'Custom 3D Theme & Exotic Floral Decor',
      'Line-Array Sound & Intelligent Moving Head Lights',
      'Cinematic 4K Video Film + Candid Photography',
      'P3 High-Res LED Screen Display (16x10 ft)',
      'Gourmet Catering Menu Consultation',
      'Guest Hospitality & Check-in Desk'
    ]
  },
  {
    id: 'p3',
    name: 'Platinum Royal Edition',
    subtitle: 'Ultra-Luxury Bespoke Experience',
    price: '₹9,99,000',
    priceNum: 999000,
    guestCapacity: '600+ Guests / Unlimited',
    description: 'Unmatched luxury with destination logistics, celebrity performance curation, and palatial scenery.',
    color: 'from-[#7f6245] to-[#9b7855]',
    features: [
      'Executive Director & Full Backstage Production Team',
      'Royal Palatial / Bespoke Theme Fabrication',
      'Concert-Grade Sound & Custom Laser Lighting',
      'A-List Celebrity Artist / Live Band Booking',
      'Multi-Screen P2 Seamless LED Stage Walls',
      'Drone Aerial Cinema + 4K Live Broadcast Stream',
      'Luxury Car Chauffeur Fleet & Airport VIP Desk',
      'Customized Designer Keepsakes for All Guests'
    ]
  }
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: 'sch1',
    day: 'Day 1',
    time: '09:00 AM - 11:30 AM',
    category: 'Keynote Conclave',
    title: 'The Future of Experiential Event Design & Tech',
    speaker: {
      name: 'Rajesh Varma',
      role: 'Senior Creative Director, Arkayuga Events',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    location: 'Grand Ballroom A',
    description: 'Keynote discussion on integrating spatial 3D visuals, ambient LED walls, and sustainable decor in grand Indian celebrations.',
    tag: 'Keynote'
  },
  {
    id: 'sch2',
    day: 'Day 1',
    time: '01:00 PM - 03:30 PM',
    category: 'Wedding Masterclass',
    title: 'Crafting Destination Royal Indian Weddings',
    speaker: {
      name: 'Priya Sundaram',
      role: 'Head of Luxury Wedding Operations',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    location: 'Royal Pavilion',
    description: 'Deep dive into Rajasthan palace logistics, beach mandap engineering, and guest hospitality management.',
    tag: 'Weddings'
  },
  {
    id: 'sch3',
    day: 'Day 2',
    time: '10:00 AM - 12:30 PM',
    category: 'Corporate Conclave',
    title: 'Executing Flawless Tech Summits & Brand Launches',
    speaker: {
      name: 'Vikramaditya Rao',
      role: 'Corporate Events & AV Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    location: 'Tech Innovation Stage',
    description: 'How to manage live product launches with zero downtime, high-speed streaming, and interactive attendee engagement.',
    tag: 'Corporate'
  },
  {
    id: 'sch4',
    day: 'Day 2',
    time: '04:00 PM - 08:00 PM',
    category: 'Entertainment Gala',
    title: 'Live Musical Night & Artist Showcase',
    speaker: {
      name: 'Ananya Deshmukh',
      role: 'Artist Relations & Celebrity Booking Lead',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
    },
    location: 'Main Arena',
    description: 'Spectacular live performance featuring fusion artists, acoustic sets, intelligent lighting choreography, and cocktail hospitality.',
    tag: 'Entertainment'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 't1',
    name: 'Rajesh Varma',
    role: 'Founder & Chief Event Architect',
    bio: 'Over 12 years designing grand celebrations, corporate summits, and luxury destination weddings across Asia.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    experience: '12+ Years Experience',
    socials: { linkedin: '#', instagram: '#' }
  },
  {
    id: 't2',
    name: 'Priya Sundaram',
    role: 'Head of Luxury Wedding Design',
    bio: 'Renowned floral stylist and space designer specializing in royal South Indian and Rajasthani palace themes.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    experience: '10+ Years Experience',
    socials: { linkedin: '#', instagram: '#' }
  },
  {
    id: 't3',
    name: 'Vikramaditya Rao',
    role: 'AV & Technical Production Director',
    bio: 'Pioneer in line-array acoustics, intelligent beam lighting, and high-tech stage mechanics for live arenas.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    experience: '9+ Years Experience',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 't4',
    name: 'Ananya Deshmukh',
    role: 'Celebrity Relations & Hospitality Lead',
    bio: 'Expert in VIP guest logistics, celebrity artist riders, luxury concierge, and 5-star resort management.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    experience: '8+ Years Experience',
    socials: { instagram: '#', linkedin: '#' }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test1',
    name: 'Arjun & Sneha Mehta',
    role: 'Groom & Bride',
    eventType: 'Destination Palace Wedding',
    location: 'Udaipur, Rajasthan',
    quote: 'Arkayuga Events turned our dream wedding into an absolute fairy tale! From the royal lakeside mandap to the seamless guest transfers from Maharana Pratap Airport, everything was executed with unbelievable perfection.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test2',
    name: 'Karthik Subramanian',
    role: 'VP of Marketing, TechGlobal India',
    eventType: 'Annual Tech Leadership Conclave',
    location: 'Bangalore, Karnataka',
    quote: 'We hired Arkayuga for our 800-delegate corporate summit. Their sound engineering, LED screen management, and instant badge registration app set a new benchmark for our corporate events!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test3',
    name: 'Dr. Meenakshi & Ramesh Krishnan',
    role: 'Parents',
    eventType: 'Grand Sangeet & Reception',
    location: 'Chennai, Tamil Nadu',
    quote: 'The Arkayuga team is so warm, respectful, and punctual. The floral decor was so breathtaking that our guests are still talking about it 3 months later. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq1',
    category: 'Booking & Timeline',
    question: 'How far in advance should we book Arkayuga Events for our event?',
    answer: 'For luxury weddings and major corporate summits, we recommend booking 3 to 6 months in advance to secure prime venues and vendor teams. However, for birthdays and corporate dinners, we can execute events with 2 to 4 weeks notice.'
  },
  {
    id: 'faq2',
    category: 'Locations & Coverage',
    question: 'Does Arkayuga Events manage destination weddings outside Chennai?',
    answer: 'Yes! We have pan-India execution capabilities. We regularly plan destination events in Goa, Udaipur, Jaipur, Mahabalipuram, Hyderabad, Bangalore, Kochi, Delhi NCR, and international beach locations.'
  },
  {
    id: 'faq3',
    category: 'Budget & Customization',
    question: 'Can we customize our event package according to our specific budget?',
    answer: 'Absolutely. All our service packages are fully customizable. Use our interactive Quote Estimator on the website or schedule a free consultation with our lead planner to build a bespoke budget plan.'
  },
  {
    id: 'faq4',
    category: 'Vendors & Production',
    question: 'Do you work with outside caterers or decorators if we have specific preferences?',
    answer: 'Yes, while we have an in-house team of top floral designers and production engineers, we are happy to coordinate seamlessly with your preferred caterers, family priests, or specific artists.'
  },
  {
    id: 'faq5',
    category: 'On-site Execution',
    question: 'Will there be a dedicated event planner present on the day of the event?',
    answer: 'Yes! Every event assigned to Arkayuga receives a Senior Lead Planner plus a dedicated backstage logistics team who remain present on-site from setup to teardown.'
  }
];

export const PAN_INDIA_CITIES = [
  { name: 'Chennai', region: 'Tamil Nadu', landmark: 'Anna Salai & ECR Beach Resorts' },
  { name: 'Bangalore', region: 'Karnataka', landmark: 'Palace Grounds & Tech Hubs' },
  { name: 'Hyderabad', region: 'Telangana', landmark: 'Gachibowli & Falaknuma' },
  { name: 'Udaipur & Jaipur', region: 'Rajasthan', landmark: 'Royal Heritage Palaces' },
  { name: 'Goa', region: 'India', landmark: 'Luxury Beachfront Resorts' },
  { name: 'Mumbai & Pune', region: 'Maharashtra', landmark: 'Arena Grounds & Luxury Hotels' },
  { name: 'Delhi NCR', region: 'North India', landmark: 'Farmhouses & Convention Centers' },
  { name: 'Kochi & Kovalam', region: 'Kerala', landmark: 'Backwater & Seaside Pavilions' }
];
