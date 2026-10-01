import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { MessageSquare, Mail, Send, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Web Development'
}) => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [selectedService, setSelectedService] = useState(defaultService);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Web Development',
    'App Development (Flutter/Kotlin)',
    'WhatsApp Automation Bot',
    'Google Business & Maps Setup',
    'Complete Online Business Launch'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitted(true);
    // Safe dynamic confetti trigger that never throws even if module is pending
    import('canvas-confetti')
      .then((mod) => {
        const confettiFn = mod.default || mod;
        if (typeof confettiFn === 'function') {
          confettiFn({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 }
          });
        }
      })
      .catch(() => {
        // Safe fallback
      });

    setTimeout(() => {
      // Reset after a brief delay
      setTimeout(() => {
        setIsSubmitted(false);
        setName('');
        setContactInfo('');
        setMessage('');
        onClose();
      }, 2500);
    }, 500);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi Raju! I saw your portfolio and I'm interested in ${selectedService}. My name is ${name || 'a client'}. ${message || 'Would love to discuss a project!'}`
    );
    // WhatsApp direct link
    return `https://wa.me/?text=${text}`;
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Start Your Project"
      subtitle="Tell us what you're looking to build. We reply within a few hours."
      maxWidth="lg"
    >
      {isSubmitted ? (
        <div className="py-12 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-display font-bold text-2xl text-emerald-950 mb-2">
            Inquiry Received!
          </h4>
          <p className="font-body text-emerald-900/80 max-w-sm text-sm">
            Thank you, {name}! Raju will review your project details and reach out right away.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Quick Instant WhatsApp Option */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-900 text-white flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-accent-yellow" />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-emerald-950">
                  Prefer instant WhatsApp chat?
                </p>
                <p className="font-body text-xs text-emerald-800/80">
                  Fastest way to get a quote and timeline.
                </p>
              </div>
            </div>
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900 transition-colors whitespace-nowrap"
            >
              Open Chat →
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-body text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-emerald-950/15 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 font-body text-sm text-emerald-950"
              />
            </div>

            <div>
              <label className="block font-body text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-1.5">
                Email or WhatsApp Number *
              </label>
              <input
                type="text"
                required
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="email@domain.com or +91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-emerald-950/15 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 font-body text-sm text-emerald-950"
              />
            </div>

            <div>
              <label className="block font-body text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-1.5">
                Service Needed
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-emerald-950/15 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 font-body text-sm text-emerald-950"
              >
                {services.map((srv) => (
                  <option key={srv} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-body text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-1.5">
                Project Details / Goals
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your business, desired features, or launch date..."
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-emerald-950/15 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 font-body text-sm text-emerald-950 resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-emerald-900/70 hover:text-emerald-950 cursor-pointer"
              >
                Cancel
              </button>
              <Button
                type="submit"
                variant="primary"
                size="md"
                icon={<Send className="w-3.5 h-3.5" />}
              >
                Send Project Inquiry
              </Button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
};
