import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-canvas selection:bg-accent-yellow selection:text-emerald-900">
      <Navbar />
      
      {/* 
        We add pt-28 to account for the fixed floating navbar 
        so it doesn't cover the top of your page content 
      */}
      <main className="flex-grow pt-28">
        {children}
      </main>

      <Footer />
    </div>
  );
};