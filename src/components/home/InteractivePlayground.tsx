import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading, BodyText, HoverText } from '../ui/Typography';
import {
  MessageSquare,
  MapPin,
  Zap,
  Smartphone,
  CheckCheck,
  Send,
  Sparkles,
  Star,
  ExternalLink,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { Button } from '../ui/Button';

interface InteractivePlaygroundProps {
  onOpenContact: () => void;
}

export const InteractivePlayground: React.FC<InteractivePlaygroundProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'google' | 'performance'>('whatsapp');

  // WhatsApp bot chat simulator state
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string; card?: string }>>([
    {
      sender: 'bot',
      text: '👋 Welcome to Blue Sparrow! Looking for wedding dates, package brochures, or custom catering quotes?',
      time: '10:00 AM'
    }
  ]);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSimulateChat = (userOption: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setChatMessages((prev) => [...prev, { sender: 'user', text: userOption, time }]);
    setIsBotTyping(true);

    setTimeout(() => {
      let botResponse = '';
      let card = undefined;

      if (userOption.includes('Brochure')) {
        botResponse = '📄 Here is our 2025 Luxury Package Catalog (PDF). Instant download:';
        card = 'Blue_Sparrow_Brochure_2025.pdf (4.2 MB)';
      } else if (userOption.includes('Site Visit')) {
        botResponse = '📅 I have open slots this Saturday at 11:30 AM or 3:00 PM. Shall I confirm 11:30 AM for you?';
      } else {
        botResponse = '⚡ Our packages range from ₹1.5L to ₹8L with custom decor & lighting. Would you like our manager Raju to call you directly?';
      }

      setChatMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botResponse, time, card }
      ]);
      setIsBotTyping(false);
    }, 700);
  };

  const resetChat = () => {
    setChatMessages([
      {
        sender: 'bot',
        text: '👋 Welcome to Blue Sparrow! Looking for wedding dates, package brochures, or custom catering quotes?',
        time: '10:00 AM'
      }
    ]);
  };

  return (
    <section id="interactive-demo" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-yellow border border-yellow-500/30 text-emerald-950 text-xs font-bold font-mono tracking-wide uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-emerald-900" />
          <span>Live Interactive Sandbox</span>
        </div>
        <SectionHeading>
          <HoverText text="Experience Our Systems in Action" />
        </SectionHeading>
        <BodyText className="mt-3 text-emerald-900/75">
          Test drive how our WhatsApp bots, Google Business listings, and ultra-fast web architectures behave in production.
        </BodyText>

        {/* Tab Switcher */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-emerald-950/5 rounded-2xl border border-emerald-950/10 max-w-lg mx-auto">
          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'whatsapp'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-white/40'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Bot Demo</span>
          </button>
          <button
            onClick={() => setActiveTab('google')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'google'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-white/40'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Google Maps Ranking</span>
          </button>
          <button
            onClick={() => setActiveTab('performance')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'performance'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-emerald-900/70 hover:text-emerald-950 hover:bg-white/40'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Speed Benchmark</span>
          </button>
        </div>
      </div>

      {/* Simulator Frame */}
      <div className="max-w-4xl mx-auto">
        <div className="liquid-glass rounded-3xl p-6 sm:p-10 border border-white/80 shadow-xl bg-gradient-to-br from-white/90 via-white/70 to-emerald-50/40">
          <AnimatePresence mode="wait">
            {activeTab === 'whatsapp' && (
              <motion.div
                key="tab-whatsapp"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Simulator Controls & Highlights */}
                <div className="md:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-950 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Meta Cloud API Simulation</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-emerald-950">
                    Never Miss an Inbound Client at Night
                  </h3>
                  <p className="font-body text-emerald-900/80 text-sm leading-relaxed">
                    Over 60% of high-intent buyers message after 7:00 PM. Our automated bots reply in under 3 seconds with PDF catalogs, appointment scheduling, and CRM logging.
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="font-mono text-xs uppercase tracking-wider text-emerald-800 font-bold">
                      Click a simulated customer prompt below:
                    </p>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleSimulateChat('📄 Send Event Brochure')}
                        disabled={isBotTyping}
                        className="text-left px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 text-emerald-950 text-xs sm:text-sm font-medium transition-colors cursor-pointer disabled:opacity-50"
                      >
                        1. &ldquo;📄 Send Event Brochure & Pricing&rdquo;
                      </button>
                      <button
                        onClick={() => handleSimulateChat('📅 Book a Site Visit this weekend')}
                        disabled={isBotTyping}
                        className="text-left px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 text-emerald-950 text-xs sm:text-sm font-medium transition-colors cursor-pointer disabled:opacity-50"
                      >
                        2. &ldquo;📅 Book a Site Visit this weekend&rdquo;
                      </button>
                      <button
                        onClick={() => handleSimulateChat('💰 What are the custom package rates?')}
                        disabled={isBotTyping}
                        className="text-left px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 text-emerald-950 text-xs sm:text-sm font-medium transition-colors cursor-pointer disabled:opacity-50"
                      >
                        3. &ldquo;💰 What are the custom package rates?&rdquo;
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      onClick={resetChat}
                      className="text-xs font-mono text-emerald-700 hover:text-emerald-950 underline cursor-pointer"
                    >
                      Reset Simulator
                    </button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={onOpenContact}
                    >
                      Deploy This For Your Business
                    </Button>
                  </div>
                </div>

                {/* WhatsApp Phone Mockup Frame */}
                <div className="md:col-span-6 flex justify-center">
                  <div className="w-full max-w-[340px] bg-[#0b141a] rounded-[2.5rem] p-3 shadow-2xl border-[4px] border-[#222e35]">
                    {/* Phone Top Speaker & Camera */}
                    <div className="w-24 h-4 bg-[#1f2c34] rounded-full mx-auto mb-2" />

                    {/* WhatsApp Header */}
                    <div className="bg-[#202c33] rounded-t-2xl px-4 py-3 flex items-center justify-between text-white border-b border-[#2a3942]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xs">
                          BS
                        </div>
                        <div>
                          <p className="font-bold text-xs leading-none">Blue Sparrow Concierge</p>
                          <p className="text-[10px] text-emerald-400 font-mono mt-0.5">Verified Business Bot</p>
                        </div>
                      </div>
                      <Phone className="w-4 h-4 text-emerald-400" />
                    </div>

                    {/* WhatsApp Chat Canvas */}
                    <div className="bg-[#0b141a] min-h-[300px] max-h-[320px] overflow-y-auto p-3 space-y-2.5 font-sans text-xs">
                      {chatMessages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                        >
                          <div
                            className={`p-2.5 rounded-xl max-w-[85%] leading-relaxed ${
                              msg.sender === 'user'
                                ? 'bg-[#005c4b] text-white rounded-tr-none'
                                : 'bg-[#202c33] text-[#e9edef] rounded-tl-none'
                            }`}
                          >
                            <p>{msg.text}</p>
                            {msg.card && (
                              <div className="mt-2 p-2 bg-[#111b21] rounded-lg border border-[#2a3942] flex items-center gap-2">
                                <span className="text-base">📄</span>
                                <span className="text-[11px] text-emerald-300 font-medium truncate">
                                  {msg.card}
                                </span>
                              </div>
                            )}
                            <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-[#8696a0]">
                              <span>{msg.time}</span>
                              {msg.sender === 'user' && (
                                <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      {isBotTyping && (
                        <div className="flex items-center gap-1.5 p-2 bg-[#202c33] rounded-xl w-fit text-[#8696a0]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
                        </div>
                      )}
                    </div>

                    {/* Chat Input Bar */}
                    <div className="bg-[#202c33] rounded-b-2xl p-2 flex items-center gap-2">
                      <div className="flex-1 bg-[#2a3942] text-[#8696a0] text-xs px-3 py-1.5 rounded-full">
                        Type a message...
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#00a884] flex items-center justify-center text-white">
                        <Send className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'google' && (
              <motion.div
                key="tab-google"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-950 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span>Google Maps #1 Ranking Blueprint</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-emerald-950">
                    Dominate Local Searches in Your City
                  </h3>
                  <p className="font-body text-emerald-900/80 text-sm leading-relaxed">
                    We optimize your Google Business Listing with verified NAP data, rich category tags, automated review funnels, and geo-targeted photo updates.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="p-3 bg-white/80 rounded-xl border border-emerald-950/10 flex items-center justify-between">
                      <span className="font-body text-xs text-emerald-900 font-medium">1. Instant NFC/QR 5-Star Review Funnel</span>
                      <span className="font-mono text-xs font-bold text-emerald-700">+140 Reviews</span>
                    </div>
                    <div className="p-3 bg-white/80 rounded-xl border border-emerald-950/10 flex items-center justify-between">
                      <span className="font-body text-xs text-emerald-900 font-medium">2. High-Intent Phone Calls & Directions</span>
                      <span className="font-mono text-xs font-bold text-emerald-700">+340% Traffic</span>
                    </div>
                    <div className="p-3 bg-white/80 rounded-xl border border-emerald-950/10 flex items-center justify-between">
                      <span className="font-body text-xs text-emerald-900 font-medium">3. Google Verified Badge & Catalog</span>
                      <span className="font-mono text-xs font-bold text-emerald-700">100% Active</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" size="sm" onClick={onOpenContact}>
                      Get Your Business Verified & Ranked
                    </Button>
                  </div>
                </div>

                {/* Google Maps Simulated Snippet */}
                <div className="md:col-span-6 flex justify-center">
                  <div className="w-full max-w-[380px] bg-white rounded-3xl p-5 border border-emerald-950/10 shadow-xl space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          #1 Ranked on Google Maps
                        </span>
                        <h4 className="font-display font-bold text-xl text-emerald-950 mt-1">
                          Urban Bloom Studio
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1 text-xs">
                          <span className="font-bold text-emerald-900">5.0</span>
                          <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                            ))}
                          </div>
                          <span className="text-emerald-700/70">(148 reviews)</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-emerald-900 text-white flex items-center justify-center font-display font-bold">
                        G
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-neutral-100 text-xs text-emerald-900/80">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Commercial Hub · Open until 9:00 PM</span>
                    </div>

                    {/* Action buttons simulated */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <button className="py-2 rounded-xl bg-emerald-900 text-white text-xs font-medium text-center">
                        Directions
                      </button>
                      <button className="py-2 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-medium text-center">
                        Call Now
                      </button>
                      <button className="py-2 rounded-xl bg-accent-yellow text-emerald-950 text-xs font-bold text-center">
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'performance' && (
              <motion.div
                key="tab-perf"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
              >
                <div className="p-6 rounded-2xl bg-white/80 border border-emerald-950/10 shadow-xs">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-display font-extrabold text-2xl mx-auto mb-3">
                    100
                  </div>
                  <h4 className="font-display font-bold text-lg text-emerald-950">
                    Google Lighthouse
                  </h4>
                  <p className="font-body text-xs text-emerald-800/80 mt-1">
                    Maximum performance, accessibility, SEO, and best-practice scores.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/80 border border-emerald-950/10 shadow-xs">
                  <div className="w-16 h-16 rounded-full bg-accent-mint text-emerald-950 flex items-center justify-center font-display font-extrabold text-2xl mx-auto mb-3">
                    0.4s
                  </div>
                  <h4 className="font-display font-bold text-lg text-emerald-950">
                    First Contentful Paint
                  </h4>
                  <p className="font-body text-xs text-emerald-800/80 mt-1">
                    Instant rendering on slow 4G mobile networks with optimized Vite bundles.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/80 border border-emerald-950/10 shadow-xs">
                  <div className="w-16 h-16 rounded-full bg-accent-yellow text-emerald-950 flex items-center justify-center font-display font-extrabold text-2xl mx-auto mb-3">
                    60fps
                  </div>
                  <h4 className="font-display font-bold text-lg text-emerald-950">
                    Fluid GPU Motion
                  </h4>
                  <p className="font-body text-xs text-emerald-800/80 mt-1">
                    Apple-inspired physics transitions using compositor-only Framer Motion properties.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
