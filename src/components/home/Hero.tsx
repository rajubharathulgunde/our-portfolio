import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { DisplayHeading, Highlight, BodyText, HoverText } from '../ui/Typography';
import { ArrowRight, Sparkles, MessageSquare, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-20 sm:pb-28 flex flex-col items-center text-center overflow-hidden">
      {/* Background Decorative Ambient Gradients (Apple subtle glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-200/25 via-accent-mint/30 to-accent-yellow/20 rounded-full blur-[90px] -z-10 pointer-events-none" />

      {/* Eyebrow / Category Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-yellow border border-yellow-500/30 text-emerald-950 font-body text-xs sm:text-sm font-bold shadow-xs mb-8"
      >
        <Sparkles className="w-3.5 h-3.5 text-emerald-900" />
        <span>Full-Stack Development & Automation Studio</span>
      </motion.div>

      {/* Massive Display Headline with Coolors.co Dynamic Multi-Color Hover Effect */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto mb-6"
      >
        <DisplayHeading className="cursor-default">
          <HoverText text="We build digital experiences that" />{' '}
          <Highlight className="mt-1 sm:mt-0">
            <HoverText text="perform" />
          </Highlight>
          <HoverText text=" and scale." />
        </DisplayHeading>
      </motion.div>

      {/* Subhead Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto mb-10"
      >
        <BodyText className="text-emerald-900/80 text-base sm:text-xl leading-relaxed">
          From modern web platforms and high-speed mobile apps to 24/7 WhatsApp automation workflows and Google Business optimization. We take your business from idea to online powerhouse.
        </BodyText>
      </motion.div>

      {/* CTA Button Stack */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
      >
        <Button
          variant="primary"
          size="lg"
          as="a"
          href="#services"
          icon={<ArrowRight className="w-4 h-4" />}
          className="w-full sm:w-auto !rounded-full shadow-md"
        >
          View Our Services
        </Button>

        <Button
          variant="glass"
          size="lg"
          onClick={onOpenContact}
          icon={<MessageSquare className="w-4 h-4 text-emerald-700" />}
          iconPosition="left"
          className="w-full sm:w-auto !rounded-full"
        >
          Consult on WhatsApp
        </Button>
      </motion.div>

      {/* Trust & Performance Reassurance Strip */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-14 pt-8 border-t border-emerald-950/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-3xl"
      >
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-1.5 text-emerald-950 font-display font-extrabold text-xl sm:text-2xl">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>&lt; 1.0s</span>
          </div>
          <span className="font-body text-xs text-emerald-800/70 font-medium mt-0.5">Ultra-Fast Load Times</span>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-1.5 text-emerald-950 font-display font-extrabold text-xl sm:text-2xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100%</span>
          </div>
          <span className="font-body text-xs text-emerald-800/70 font-medium mt-0.5">Transparent Turnaround</span>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-1.5 text-emerald-950 font-display font-extrabold text-xl sm:text-2xl">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>24/7</span>
          </div>
          <span className="font-body text-xs text-emerald-800/70 font-medium mt-0.5">Automated Lead Bot</span>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-1.5 text-emerald-950 font-display font-extrabold text-xl sm:text-2xl">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>#1 Spot</span>
          </div>
          <span className="font-body text-xs text-emerald-800/70 font-medium mt-0.5">Google Maps Target</span>
        </div>
      </motion.div>
    </section>
  );
};
