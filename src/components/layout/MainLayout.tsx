import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ContactModal } from '../contact/ContactModal';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfaf5] text-emerald-950 font-body selection:bg-accent-yellow selection:text-emerald-950">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <main className="flex-grow pt-24 sm:pt-28">
        {children}
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Global Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};
