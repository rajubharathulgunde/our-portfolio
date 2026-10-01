import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTeamSlider } from '../../hooks/useTeamSlider';
import { SectionHeading, BodyText, HoverText } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { TeamCredentialsModal } from './TeamCredentialsModal';
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Mail
} from 'lucide-react';

interface TeamProps {
  onOpenContact: () => void;
}

export const Team: React.FC<TeamProps> = ({ onOpenContact }) => {
  const {
    currentIndex,
    currentMember,
    totalMembers,
    isPaused,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseAutoPlay,
    resumeAutoPlay
  } = useTeamSlider({ autoPlayInterval: 5000 });

  const [isCredentialsModalOpen, setIsCredentialsModalOpen] = useState(false);

  return (
    <section id="team" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background Soft Fluid Gradients (No chunky outer box!) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-emerald-200/30 via-accent-mint/35 to-accent-yellow/25 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-400/15 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-yellow/20 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300/40 text-emerald-950 text-xs font-bold font-mono tracking-wide uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-emerald-900" />
          <span>Talent & Leadership</span>
        </div>
        <SectionHeading>
          <HoverText text="Meet the Team Behind Your Growth" />
        </SectionHeading>
        <BodyText className="mt-3 text-emerald-900/75">
          Engineering precision combined with deep domain operations in real estate, insurance, and sports analytics.
        </BodyText>
      </div>

      {/* Vertical Liquid Glass Card Slider Container */}
      <div
        className="relative max-w-md sm:max-w-lg mx-auto"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMember.id}
            initial={{ opacity: 0, y: 15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full"
          >
            {/* Pure Liquid Glass Front Card (No text clipping, no overflow!) */}
            <div className="liquid-glass rounded-[2.5rem] p-7 sm:p-10 border border-white/90 shadow-[0_20px_50px_-10px_rgba(6,78,59,0.14)] bg-gradient-to-b from-white/75 via-white/50 to-white/65 flex flex-col items-center text-center relative overflow-hidden">
              {/* Subtle top specular glass highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/90 to-transparent" />

              {/* Verified Status Tag */}
              <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/5 border border-emerald-900/10 text-emerald-900 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Q2/Q3 Projects</span>
              </div>

              {/* Avatar Frame: Proper margins, circular ring, no clipping */}
              <div className="relative mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-emerald-600 via-accent-mint to-accent-yellow shadow-md flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white">
                    {currentMember.image ? (
                      <img
                        src={currentMember.image}
                        alt={currentMember.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-emerald-900 to-emerald-800 text-[#fcfaf5] flex flex-col items-center justify-center font-display font-black text-3xl sm:text-4xl shadow-inner">
                        <span>{currentMember.avatarInitials}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Developer Name with Coolors.co dynamic multi-color hover effect */}
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-950 mb-1.5 tracking-tight">
                <HoverText text={currentMember.name} />
              </h3>

              {/* Role Badge */}
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-300/40 px-3 py-1 rounded-lg mb-4">
                {currentMember.role}
              </p>

              {/* Tagline & Bio */}
              <p className="font-body text-xs sm:text-sm font-semibold text-emerald-900 mb-2">
                &ldquo;{currentMember.tagline}&rdquo;
              </p>
              <p className="font-body text-xs sm:text-sm text-emerald-900/75 leading-relaxed mb-6">
                {currentMember.bio}
              </p>

              {/* Core Skills (Flex-wrap with proper gap so nothing overflows outside the card) */}
              <div className="w-full pt-4 border-t border-emerald-950/10 mb-6">
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-800/80 mb-3">
                  Core Technologies:
                </p>
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                  {currentMember.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-white/80 border border-emerald-950/10 text-emerald-950 text-xs font-mono font-medium shadow-2xs hover:border-emerald-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Credentials Button (Opens optional education & experience details) */}
              <div className="w-full space-y-2.5 mt-auto">
                <button
                  onClick={() => setIsCredentialsModalOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-900 text-[#fcfaf5] hover:bg-emerald-800 font-body text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <GraduationCap className="w-4 h-4 text-accent-yellow" />
                  <span>View Verified Education & Experience</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <p className="font-mono text-[10px] text-emerald-800/60">
                  MCA (2024-2026) · Hudl India Analyst · Real Estate Operations
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls (Only visible when > 1 member, or handy preview) */}
        {totalMembers > 1 && (
          <>
            {/* Prev / Next Buttons */}
            <div className="flex items-center justify-between mt-6 px-2">
              <button
                onClick={prevSlide}
                aria-label="Previous member"
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-emerald-950/10 text-emerald-900 flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-all shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Slide Indicator Dots */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalMembers }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex
                        ? 'w-8 bg-emerald-800 shadow-xs'
                        : 'w-2.5 bg-emerald-800/25 hover:bg-emerald-800/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next member"
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-emerald-950/10 text-emerald-900 flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-all shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Detailed Credentials Modal */}
      <TeamCredentialsModal
        member={currentMember}
        isOpen={isCredentialsModalOpen}
        onClose={() => setIsCredentialsModalOpen(false)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
