import React from 'react';
import { ArrowUp, Mail, MessageSquare, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fcfaf5] border-t border-emerald-950/15 pt-20 pb-12 px-6 relative overflow-hidden">
      {/* Subtle organic light blob in background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent-yellow/20 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top CTA Banner in Footer */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 mb-16 border border-emerald-950/10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-white/80 via-white/50 to-emerald-50/60 shadow-lg shadow-emerald-950/5">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-bold bg-accent-yellow/50 px-2.5 py-1 rounded-md inline-block mb-3">
              Ready to scale your business?
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-emerald-950 tracking-tight">
              Let&apos;s build your website, app, or automation bot today.
            </h3>
            <p className="font-body text-emerald-900/75 mt-3 text-sm sm:text-base">
              From Google Business verification to full-stack custom software. We bring high-end engineering at transparent turnaround.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 rounded-xl bg-emerald-900 text-[#fcfaf5] font-semibold text-sm hover:bg-emerald-800 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>Schedule Free Call</span>
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-emerald-950/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-accent-yellow flex items-center justify-center font-display font-extrabold text-emerald-950 text-base shadow-xs">
                RH
              </div>
              <span className="font-display font-bold text-xl text-emerald-950">
                Raju Hulgunde Studio
              </span>
            </div>
            <p className="font-body text-emerald-900/75 max-w-sm text-sm leading-relaxed mb-6">
              Engineering modern web platforms, native mobile applications, automated WhatsApp chatbots, and Google Business growth systems.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-100/60 w-fit px-3 py-1.5 rounded-lg border border-emerald-300/30">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for new freelance & contract projects</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-emerald-950 text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 font-body text-sm text-emerald-900/75">
              <li>
                <a href="#services" className="hover:text-emerald-950 transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-950 transition-colors">Mobile App (Flutter / Kotlin)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-950 transition-colors">WhatsApp Automation & Bots</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-950 transition-colors">Google Business & Maps Setup</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-950 transition-colors">Complete Online Business Launch</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-emerald-950 text-sm uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-emerald-900/75">
              <li>
                <a
                  href="mailto:rajuhulgunde029@gmail.com"
                  className="flex items-center gap-2 hover:text-emerald-950 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>rajuhulgunde029@gmail.com</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="flex items-center gap-2 hover:text-emerald-950 transition-colors cursor-pointer text-left"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>WhatsApp Live Consultation</span>
                </button>
              </li>
              <li className="flex items-center gap-2 text-emerald-800/80">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>India · Remote Global Delivery</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-emerald-900/60">
          <p>© {currentYear} Raju Hulgunde. Built with React, Tailwind CSS & Motion.</p>
          <div className="flex items-center gap-6">
            <span>60-30-10 Design Harmony</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 transition-colors font-medium cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
