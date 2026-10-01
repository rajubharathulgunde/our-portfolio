export interface Brand {
  id: string;
  name: string;
  tagline: string;
  category: string;
}

export const brandsData: Brand[] = [
  { id: 'google', name: 'Google Business & Cloud', tagline: 'Verified Partner & Maps', category: 'SEO & Infrastructure' },
  { id: 'meta', name: 'Meta / WhatsApp API', tagline: 'Official Cloud API Integration', category: 'Automation' },
  { id: 'hudl', name: 'Hudl Sports Analytics', tagline: 'Ice Hockey Game Analytics', category: 'Data Analysis' },
  { id: 'aws', name: 'Amazon Web Services', tagline: 'Cloud Compute & Storage', category: 'Cloud Infrastructure' },
  { id: 'razorpay', name: 'Razorpay Payments', tagline: 'Seamless Checkout Integration', category: 'FinTech' },
  { id: 'flutter', name: 'Flutter & Kotlin', tagline: 'Cross-platform Mobile', category: 'App Ecosystem' },
  { id: 'react', name: 'React & Modern Web', tagline: 'Full-stack Performance', category: 'Web Ecosystem' },
  { id: 'firebase', name: 'Firebase & Supabase', tagline: 'Realtime Backend Systems', category: 'Databases' },
];
