

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-canvas border-t border-neutral-gray/20 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-8 h-8 rounded bg-emerald-900 flex items-center justify-center font-display font-bold text-canvas">
                RH
             </div>
             <span className="font-display font-bold text-xl text-emerald-900">Our Portfolio</span>
          </div>
          <p className="font-body text-emerald-900/70 max-w-sm">
            Crafting digital experiences through modern web development, high-performance apps, and seamless business automation.
          </p>
        </div>
        
        <div>
          <h4 className="font-display font-bold text-emerald-900 mb-4">Services</h4>
          <ul className="space-y-2 font-body text-sm text-emerald-900/70">
            <li>Web Development</li>
            <li>App Development</li>
            <li>WhatsApp Automation</li>
            <li>Google Business Setup</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-emerald-900 mb-4">Connect</h4>
          <ul className="space-y-2 font-body text-sm text-emerald-900/70">
            <li><a href="#" className="hover:text-emerald-900 transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-emerald-900 transition-colors">Twitter</a></li>
            <li><a href="mailto:hello@example.com" className="hover:text-emerald-900 transition-colors">Email Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8 border-t border-neutral-gray/20 flex flex-col md:flex-row items-center justify-between font-body text-xs text-emerald-900/60">
        <p>&copy; {currentYear} Our Portfolio. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with precision.</p>
      </div>
    </footer>
  );
};