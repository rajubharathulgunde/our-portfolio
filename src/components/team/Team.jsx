import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamData } from '../../models/teamData';
import { SectionHeading, BodyText, HoverText } from '../ui/Typography';
import { Badge } from '../ui/Badge';

export const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slider logic: changes slides every 4 seconds
  useEffect(() => {
    if (teamData.length <= 1) return; // No need to slide if only 1 member
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="team" className="relative max-w-6xl mx-auto px-6 py-32 rounded-[3rem] overflow-hidden my-12 border border-white/40 shadow-2xl">
      
      {/* Section Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-accent-mint/50 to-accent-yellow/30 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/40 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px] -z-10"></div>

      <div className="text-center mb-16">
        <SectionHeading>
          <HoverText text="Meet the Team" />
        </SectionHeading>
        <BodyText className="mt-4 max-w-xl mx-auto text-emerald-900/80">
          Driven by logic, designed with passion.
        </BodyText>
      </div>

      <div className="relative h-[550px] flex justify-center items-center w-full max-w-sm mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full"
          >
            {/* Vertical Glassmorphic Card */}
            <div className="h-full bg-white/30 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(6,78,59,0.1)] flex flex-col items-center text-center">
              
              <div className="relative mb-6">
                <div className="absolute inset-0 border-[3px] border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
                <img 
                  src={teamData[currentIndex].image} 
                  alt={teamData[currentIndex].name} 
                  className="w-40 h-40 rounded-full object-cover p-2"
                />
              </div>

              <h3 className="font-display font-extrabold text-3xl text-emerald-900 mb-1">
                <HoverText text={teamData[currentIndex].name} />
              </h3>
              <p className="font-body font-bold text-emerald-600 mb-6 uppercase tracking-widest text-xs bg-emerald-50 px-3 py-1 rounded-full">
                {teamData[currentIndex].role}
              </p>
              <p className="font-body text-emerald-900/80 leading-relaxed mb-8 flex-grow">
                {teamData[currentIndex].bio}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {teamData[currentIndex].skills.slice(0, 4).map(skill => (
                  <Badge key={skill} color="bg-white/50" textColor="text-emerald-900 border border-white/40">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Optional Dot Navigation (Only shows if > 1 member) */}
      {teamData.length > 1 && (
        <div className="flex justify-center gap-3 mt-10">
          {teamData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-emerald-600 w-8' : 'bg-emerald-600/30'}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};