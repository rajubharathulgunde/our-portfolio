import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Interactive Demo', href: '#interactive-demo' },
    { name: 'Team', href: '#team' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-3 sm:pt-5 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 border ${
            isScrolled
              ? 'bg-white/80 backdrop-blur-xl border-emerald-950/10 shadow-[0_10px_30px_-10px_rgba(6,78,59,0.12)]'
              : 'bg-[#fcfaf5]/90 backdrop-blur-lg border-emerald-900/15 shadow-[0_4px_20px_-4px_rgba(6,78,59,0.06)]'
          }`}
        >
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-yellow border border-yellow-500/40 flex items-center justify-center font-display font-extrabold text-emerald-950 text-base shadow-xs group-hover:rotate-6 transition-transform">
              RH
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg text-emerald-950 tracking-tight leading-tight">
                Raju Hulgunde
              </span>
              <span className="font-mono text-[10px] text-emerald-700 font-medium tracking-wide uppercase">
                Web · App · Automation
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-body text-sm font-medium text-emerald-900/80 hover:text-emerald-950 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-emerald-600 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenContact}
              className="!rounded-full shadow-xs"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Get in Touch
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-emerald-900 hover:bg-emerald-100/60 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-2xl rounded-2xl border border-emerald-900/10 shadow-xl pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-emerald-900 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-emerald-100 flex flex-col gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full justify-center"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Contact Us on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
