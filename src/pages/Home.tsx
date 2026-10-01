import React, { useState } from 'react';
import { Hero } from '../components/home/Hero';
import { Brands } from '../components/home/Brands';
import { Services } from '../components/services/Services';
import { InteractivePlayground } from '../components/home/InteractivePlayground';
import { Projects } from '../components/projects/Projects';
import { Team } from '../components/team/Team';
import { ContactModal } from '../components/contact/ContactModal';

export const Home: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Web Development');

  const handleOpenContactWithService = (service: string) => {
    setSelectedServiceForContact(service);
    setIsContactOpen(true);
  };

  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <Hero onOpenContact={() => handleOpenContactWithService('Web Development')} />

      {/* 2. Infinite Brands / Partners Ticker */}
      <Brands />

      {/* 3. Services Section */}
      <Services onSelectService={handleOpenContactWithService} />

      {/* 4. Interactive Live Sandbox (WhatsApp Bot Simulator + Google Maps) */}
      <InteractivePlayground onOpenContact={() => handleOpenContactWithService('WhatsApp Automation')} />

      {/* 5. Featured Projects & Case Studies */}
      <Projects onOpenContact={handleOpenContactWithService} />

      {/* 6. Meet the Team (Liquid Glass Card & Autoslider) */}
      <Team onOpenContact={() => handleOpenContactWithService('Custom Engineering')} />

      {/* Contextual Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={selectedServiceForContact}
      />
    </div>
  );
};
