import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const navLinks = [
    { name: 'Services', path: '#services' },
    { name: 'Projects', path: '#projects' },
    { name: 'Team', path: '#team' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-6 pointer-events-none">
      <nav className="max-w-5xl mx-auto pointer-events-auto bg-canvas/80 backdrop-blur-md border border-neutral-gray/30 rounded-full px-4 py-3 flex items-center justify-between shadow-sm">
        
        {/* Logo Lockup */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-accent-yellow flex items-center justify-center font-display font-bold text-emerald-900 group-hover:rotate-6 transition-transform">
            RH
          </div>
          <span className="font-body font-bold text-lg text-emerald-900 hidden sm:block">
            Our Portfolio
          </span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              className="font-body font-medium text-emerald-900/80 hover:text-emerald-900 transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <Button variant="primary" className="!py-2 !px-4 !text-sm !rounded-full">
            Contact Us
          </Button>
        </div>
      </nav>
    </div>
  );
};