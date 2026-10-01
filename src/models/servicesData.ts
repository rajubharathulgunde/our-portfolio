export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  iconName: 'laptop' | 'smartphone' | 'bot' | 'mapPin' | 'rocket';
  colorTheme: {
    accentBg: string;
    badgeBg: string;
    badgeText: string;
    borderAccent: string;
    tagBg: string;
  };
  keyFeatures: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Modern Web Development',
    badge: 'Flagship Service',
    summary: 'High-speed, responsive web platforms built with React, Vite, and Tailwind CSS.',
    description: 'We build digital experiences inspired by Apple minimalism and Google Material elegance. Focused on sub-second load times, dynamic micro-interactions, and conversion-focused architectures.',
    iconName: 'laptop',
    colorTheme: {
      accentBg: 'bg-emerald-900',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900',
      borderAccent: 'border-emerald-600/30',
      tagBg: 'bg-emerald-50'
    },
    keyFeatures: [
      'Custom React & Next.js SPAs',
      'Fluid Animations & Motion',
      '60-30-10 Design Harmony',
      'Mobile-First & PWA Ready'
    ],
    deliverables: [
      'Fully responsive codebase',
      'Custom domain & SSL setup',
      'Performance audit (95+ Lighthouse)',
      'Free 30-day post-launch support'
    ]
  },
  {
    id: 'app-dev',
    title: 'Mobile App Development',
    badge: 'Cross-Platform & Native',
    summary: 'High-performance mobile applications engineered with Flutter, Kotlin, and Java.',
    description: 'Native responsiveness with buttery 60fps animations. From real-time sync with Firebase to intuitive offline-first databases and push notifications.',
    iconName: 'smartphone',
    colorTheme: {
      accentBg: 'bg-emerald-800',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900',
      borderAccent: 'border-emerald-500/30',
      tagBg: 'bg-emerald-50'
    },
    keyFeatures: [
      'Cross-platform (Android & iOS)',
      'Kotlin & Flutter Core',
      'Offline Storage & SQLite',
      'Google Play Store Publishing'
    ],
    deliverables: [
      'Production APK / AAB builds',
      'App Store & Play Store deployment',
      'Backend REST / GraphQL API',
      'Push notification pipeline'
    ]
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Automation & Bots',
    badge: '24/7 Lead Machine',
    summary: 'Automate customer support, leads capture, and automated drip sequences on WhatsApp.',
    description: 'Stop losing inbound customers who message after business hours. We configure the Meta WhatsApp Cloud API to handle inquiries, capture customer information, book appointments, and send payment links automatically.',
    iconName: 'bot',
    colorTheme: {
      accentBg: 'bg-emerald-700',
      badgeBg: 'bg-accent-yellow',
      badgeText: 'text-emerald-950',
      borderAccent: 'border-accent-yellow/40',
      tagBg: 'bg-yellow-50'
    },
    keyFeatures: [
      'Official Meta Cloud API',
      'Automated FAQ & Catalogs',
      'Instant Lead Notification to CRM',
      'Broadcasts & Payment Links'
    ],
    deliverables: [
      'Verified WhatsApp Business API account',
      'Custom decision-tree chatbot logic',
      'Google Sheets / CRM synchronization',
      'Staff handoff live chat interface'
    ]
  },
  {
    id: 'google-business-setup',
    title: 'Google Business & Maps Setup',
    badge: 'Local Domination',
    summary: 'Complete Google Business Profile verification, Maps ranking, and local search dominance.',
    description: 'Get discovered by customers searching "near me". We optimize your Google Listing with keyword-rich categories, high-resolution visual assets, review-collection workflows, and local SEO citations.',
    iconName: 'mapPin',
    colorTheme: {
      accentBg: 'bg-emerald-900',
      badgeBg: 'bg-accent-mint',
      badgeText: 'text-emerald-950',
      borderAccent: 'border-accent-mint/50',
      tagBg: 'bg-emerald-50'
    },
    keyFeatures: [
      'Google Map Listing Optimization',
      'Local Citations & NAP Consistency',
      'Automated QR Code for 5-Star Reviews',
      'Direct Click-to-Call / WhatsApp'
    ],
    deliverables: [
      '100% Complete Google Profile Audit',
      'High-converting product & service catalogue',
      'Branded QR code standee design for counter',
      '30-day ranking progress report'
    ]
  },
  {
    id: 'business-launchpad',
    title: 'Complete Online Business Launch',
    badge: 'All-In-One',
    summary: 'Everything a new business needs to start selling, booking, and scaling online.',
    description: 'From brand domain, custom email, website, payment gateway, WhatsApp channel, to Google Maps listing. Handled end-to-end so you can focus strictly on running your business.',
    iconName: 'rocket',
    colorTheme: {
      accentBg: 'bg-emerald-950',
      badgeBg: 'bg-accent-teal',
      badgeText: 'text-emerald-950',
      borderAccent: 'border-accent-teal/40',
      tagBg: 'bg-teal-50'
    },
    keyFeatures: [
      'Domain & Professional Email',
      'Razorpay Payment Gateway Setup',
      'Social Media & Maps Integration',
      'Complete Handover & Video Training'
    ],
    deliverables: [
      'Turnkey business digital suite',
      'Admin training call & documentation',
      'Automated invoice generation',
      'Priority ongoing maintenance'
    ]
  }
];
