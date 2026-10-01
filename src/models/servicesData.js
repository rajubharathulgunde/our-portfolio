import { FaLaptopCode, FaMobileAlt, FaRobot, FaGoogle } from 'react-icons/fa';

export const servicesData = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Clean, modern, and responsive websites built with React and Tailwind CSS. We create digital experiences inspired by top-tier design systems.",
    icon: FaLaptopCode, 
    color: "bg-emerald-600",
  },
  {
    id: "app-dev",
    title: "App Development",
    description: "High-performance mobile applications developed natively and cross-platform using Flutter, Kotlin, and Java.",
    icon: FaMobileAlt,
    color: "bg-emerald-800",
  },
  {
    id: "wa-automation",
    title: "WhatsApp Automation",
    description: "Custom automated workflows and chatbots to help you engage with your customers 24/7 without manual intervention.",
    icon: FaRobot,
    color: "bg-accent-yellow",
    textColor: "text-emerald-900" // Because yellow background needs dark text
  },
  {
    id: "business-setup",
    title: "Google Business Setup",
    description: "Complete online business setup including Google Listing, Maps integration, and SEO foundations to get your business discovered.",
    icon: FaGoogle,
    color: "bg-accent-mint",
    textColor: "text-emerald-900"
  }
];