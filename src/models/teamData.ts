export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
  details?: string;
}

export const teamData = [
  {
    id: 'raju-hulgunde',
    name: 'Raju Hulgunde',
    role: 'Lead Developer & Business Technologist',
    tagline: 'Bridging high-performance engineering with real-world business automation.',
    image: '', // Graceful fallback avatar with initials & custom photo upload/url
    avatarInitials: 'RH',
    bio: 'Specializing in Web and Mobile App development, WhatsApp automation chatbots, and Google Business growth systems. Combines cutting-edge engineering with operational experience across Real Estate and Insurance industries.',
    skills: [
      'React & Node.js',
      'Flutter & Kotlin',
      'WhatsApp Cloud API',
      'Google Maps & SEO',
      'PostgreSQL & Firebase',
      'Python & TensorFlow',
      'Tailwind CSS'
    ],
    // Optional sections for credentials modal/toggle
    education: [
      {
        degree: 'Master of Computer Applications (MCA)',
        institution: 'Computer Applications & Software Engineering',
        year: '2024 – 2026',
        details: 'Advanced algorithms, cloud architecture, and full-stack systems engineering.'
      }
    ],
    experience: [
      {
        title: 'Ice Hockey Game Analyst',
        company: 'Hudl India Pvt Ltd',
        duration: 'March 2025 – Present',
        description: 'Analyzing high-velocity athletic performance telemetry, event tagging, and statistical predictive modeling.'
      },
      {
        title: 'Operations & Systems Specialist',
        company: 'Real Estate & Insurance Operations',
        duration: 'Prior Industry Experience',
        description: 'Streamlined client intake pipelines, CRM integrations, lead generation, and operational compliance.'
      }
    ],
    achievements: [
      'Architected automated WhatsApp business bots improving response times by over 80%',
      'Engineered cross-platform mobile apps using Flutter and Android Studio',
      'Helped local businesses scale from zero digital presence to #1 Google Maps ranking'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'rajuhulgunde029@gmail.com',
      whatsapp: 'https://wa.me/'
    }
  },
  {
    id: 'sneha-patil',
    name: 'Sneha Patil',
    role: 'UI/UX Architect & Frontend Engineer',
    tagline: 'Crafting fluid, human-centric design systems inspired by Apple and Material.',
    image: '',
    avatarInitials: 'SP',
    bio: 'Obsessed with micro-interactions, responsive typography, and tactile digital products. Specializes in translating business visions into high-conversion interfaces.',
    skills: [
      'Figma & Design Systems',
      'React & TypeScript',
      'Framer Motion',
      'Tailwind CSS',
      'Conversion Optimization'
    ],
    education: [
      {
        degree: 'Bachelor of Computer Engineering (B.E.)',
        institution: 'Institute of Technology',
        year: '2020 – 2024',
        details: 'Specialized in Human-Computer Interaction and responsive graphic software.'
      }
    ],
    experience: [
      {
        title: 'Senior Frontend & Product Designer',
        company: 'Creative Studios',
        duration: '2023 – Present',
        description: 'Leading interface design and responsive design engineering for enterprise clients.'
      }
    ],
    achievements: [
      'Designed 25+ production-grade web interfaces with 99.8% accessibility compliance',
      'Reduced bounce rates by 35% across key client landing pages'
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'team@ourportfolio.com',
      whatsapp: 'https://wa.me/'
    }
  }
];

export type TeamMember = typeof teamData[number];
