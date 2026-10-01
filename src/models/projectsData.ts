export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web Development' | 'App Development' | 'WhatsApp Automation' | 'Google Business';
  client: string;
  duration: string;
  year: string;
  tagline: string;
  description: string;
  outcome: string;
  techStack: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  demoUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'blue-sparrow-events',
    title: 'Blue Sparrow Events',
    category: 'Web Development',
    client: 'Blue Sparrow Luxury Hospitality',
    duration: '3 Weeks',
    year: '2025',
    tagline: 'High-conversion, luxury event management platform with fluid animations.',
    description: 'Developed an immersive, responsive brand experience converted meticulously from Canva/Figma concepts into high-speed React code with customized micro-interactions.',
    outcome: 'Increased booking consultation requests by 65% in the first 45 days post-launch.',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Node.js'],
    features: [
      'Interactive date & package inquiry calculator',
      'Dynamic photo gallery with masonry lightbox',
      'Instant WhatsApp booking webhook',
      'Mobile-optimized touch carousels'
    ],
    metrics: [
      { label: 'Load Time', value: '0.8s' },
      { label: 'Lead Inquiries', value: '+65%' },
      { label: 'Mobile Score', value: '98/100' }
    ]
  },
  {
    id: 'doctor-helper',
    title: 'Doctor Helper Medical App',
    category: 'App Development',
    client: 'Healthcare Practitioners Cohort',
    duration: '6 Weeks',
    year: '2025',
    tagline: 'Streamlined clinic operations, patient timelines, and digital prescriptions.',
    description: 'Engineered a specialized native application designed to replace paper filing systems for independent medical practices, featuring offline patient records and rapid PDF prescription dispatch.',
    outcome: 'Saved doctors an estimated 14 hours per week on paperwork and manual appointments.',
    techStack: ['Kotlin', 'Android Studio', 'Firebase Firestore', 'Room DB', 'Material 3'],
    features: [
      'Offline-first patient health record management',
      'One-tap digital prescription generation & sharing',
      'Automated follow-up reminders via SMS/WhatsApp',
      'Secure encrypted local and cloud synchronization'
    ],
    metrics: [
      { label: 'Time Saved', value: '14 hrs/wk' },
      { label: 'Active Users', value: '1,200+' },
      { label: 'Crash Rate', value: '< 0.01%' }
    ]
  },
  {
    id: 'real-estate-bot',
    title: 'Real Estate 24/7 WhatsApp Lead Engine',
    category: 'WhatsApp Automation',
    client: 'Apex Property Developers',
    duration: '10 Days',
    year: '2025',
    tagline: 'Instant automated property brochure dispatch, unit filtering, and site visit scheduling.',
    description: 'Leveraging our domain background in real estate operations, we architected an automated Meta Cloud API system that qualifies buyer budget, sends floorplans instantly, and confirms agent site tours.',
    outcome: 'Converted 42% of night-time website visitors who previously abandoned static inquiry forms.',
    techStack: ['Meta WhatsApp Cloud API', 'Node.js', 'Webhooks', 'Google Sheets API', 'Express'],
    features: [
      'Interactive button menus for 2BHK/3BHK property filters',
      'Instant automated PDF brochure delivery within 3 seconds',
      'Automatic slot reservation synced to Google Calendar',
      'Real-time alert pushed to sales team with lead budget data'
    ],
    metrics: [
      { label: 'Response Time', value: '< 3s' },
      { label: 'Lead Capture', value: '42%' },
      { label: 'Hours Active', value: '24/7' }
    ]
  },
  {
    id: 'retail-google-local',
    title: 'Urban Bloom Local Google Business Dominance',
    category: 'Google Business',
    client: 'Urban Bloom Retail & Studio',
    duration: '2 Weeks',
    year: '2025',
    tagline: 'Zero to #1 Google Maps ranking with automated 5-star customer review funnels.',
    description: 'Complete digital setup including Google Listing verification, localized keyword optimization, geotagged photo cataloging, and an automated NFC/QR review acquisition system.',
    outcome: 'Propelled client from page 3 to the #1 "Near Me" search rank, generating 3.4x more in-store walk-ins.',
    techStack: ['Google Business Profile API', 'Local Schema Markup', 'NFC & QR Tech', 'Google Analytics'],
    features: [
      'Full profile verification & category keyword optimization',
      'Custom smart QR counter card for instant Google 5-star reviews',
      'Product and service catalog integration with direct calling',
      'Weekly automated Google Post and photo updates'
    ],
    metrics: [
      { label: 'Local Map Rank', value: '#1 Spot' },
      { label: 'Walk-ins', value: '+340%' },
      { label: '5-Star Reviews', value: '140+' }
    ]
  }
];
