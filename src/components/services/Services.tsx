import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData, ServiceItem } from '../../models/servicesData';
import { Card } from '../ui/Card';
import { SectionHeading, BodyText, HoverText } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import {
  Laptop,
  Smartphone,
  Bot,
  MapPin,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [filter, setFilter] = useState<'all' | 'web-app' | 'automation' | 'growth'>('all');

  const getIcon = (name: ServiceItem['iconName']) => {
    switch (name) {
      case 'laptop':
        return <Laptop className="w-6 h-6" />;
      case 'smartphone':
        return <Smartphone className="w-6 h-6" />;
      case 'bot':
        return <Bot className="w-6 h-6" />;
      case 'mapPin':
        return <MapPin className="w-6 h-6" />;
      case 'rocket':
        return <Rocket className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const filteredServices = servicesData.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'web-app') return item.id === 'web-dev' || item.id === 'app-dev';
    if (filter === 'automation') return item.id === 'whatsapp-automation';
    if (filter === 'growth') return item.id === 'google-business-setup' || item.id === 'business-launchpad';
    return true;
  });

  return (
    <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300/40 text-emerald-900 text-xs font-bold font-mono tracking-wide uppercase mb-4">
          <span>Expert Capabilities</span>
        </div>
        <SectionHeading>
          <HoverText text="Tailored Services for Modern Business" />
        </SectionHeading>
        <BodyText className="mt-4 text-emerald-900/75">
          Everything required to design, launch, and automate your company in one unified team. Engineered with performance and conversion in mind.
        </BodyText>

        {/* Filter Controls (Allowed functional segmented buttons) */}
        <div className="mt-8 inline-flex items-center p-1.5 bg-emerald-950/5 rounded-2xl border border-emerald-950/10 flex-wrap justify-center gap-1">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-white/50'
            }`}
          >
            All Services ({servicesData.length})
          </button>
          <button
            onClick={() => setFilter('web-app')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              filter === 'web-app'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-white/50'
            }`}
          >
            Web & Mobile
          </button>
          <button
            onClick={() => setFilter('automation')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              filter === 'automation'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-white/50'
            }`}
          >
            WhatsApp Bots
          </button>
          <button
            onClick={() => setFilter('growth')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              filter === 'growth'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-white/50'
            }`}
          >
            Google Business & Launch
          </button>
        </div>
      </div>

      {/* Services Grid with Google Material 3 & Apple Aesthetic */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className={service.id === 'business-launchpad' ? 'md:col-span-2 lg:col-span-1' : ''}
          >
            <Card
              hoverLift={true}
              variant="material"
              className="h-full flex flex-col p-6 sm:p-8 bg-white/90 backdrop-blur-md border border-emerald-950/10 hover:border-emerald-600/40 transition-all duration-300 group"
            >
              {/* Header: Icon & Badge */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className={`w-13 h-13 rounded-2xl flex items-center justify-center text-white ${service.colorTheme.accentBg} shadow-sm group-hover:scale-105 transition-transform`}>
                  {getIcon(service.iconName)}
                </div>
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${service.colorTheme.badgeBg} ${service.colorTheme.badgeText}`}>
                  {service.badge}
                </span>
              </div>

              {/* Title with Coolors.co dynamic hover effect */}
              <h3 className="font-display font-bold text-2xl text-emerald-950 mb-3 tracking-tight">
                <HoverText text={service.title} />
              </h3>

              {/* Summary & Description */}
              <p className="font-body text-emerald-900/75 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Key Features Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-emerald-950/10">
                {service.keyFeatures.map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center text-xs font-medium text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/50"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {/* Deliverables Checklist */}
              <div className="mb-6 space-y-2">
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-800/80">
                  Included In Scope:
                </p>
                {service.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-emerald-900/80 font-body">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full mt-auto py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-900 text-emerald-900 hover:text-white font-body text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-emerald-900 group-hover:text-white cursor-pointer"
              >
                <span>Request {service.title.split(' ')[0]} Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
