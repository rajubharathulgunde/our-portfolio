import React from 'react';

// Vibrant color cycle for the Coolors.co style dynamic hover effect
const VIBRANT_HOVER_COLORS = [
  'hover:text-emerald-600',
  'hover:text-amber-500',
  'hover:text-rose-500',
  'hover:text-blue-600',
  'hover:text-purple-600',
  'hover:text-teal-500',
  'hover:text-orange-500',
  'hover:text-cyan-600'
];

interface HoverTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

/**
 * Coolors.co inspired interactive multi-color dynamic typography.
 * Wraps words to prevent accidental mid-word line-wrapping on smaller screens,
 * while animating individual characters on hover.
 */
export const HoverText: React.FC<HoverTextProps> = ({
  text,
  className = '',
  wordClassName = ''
}) => {
  const words = text.split(' ');
  let charCounter = 0;

  return (
    <span className={`inline ${className}`}>
      {words.map((word, wordIndex) => {
        return (
          <span key={wordIndex} className={`inline-block whitespace-nowrap ${wordClassName}`}>
            {word.split('').map((char) => {
              const colorClass = VIBRANT_HOVER_COLORS[charCounter % VIBRANT_HOVER_COLORS.length];
              charCounter++;

              return (
                <span
                  key={charCounter}
                  className={`inline-block transition-all duration-200 ease-out cursor-default hover:-translate-y-1.5 hover:scale-115 hover:-rotate-3 active:scale-95 ${colorClass}`}
                >
                  {char}
                </span>
              );
            })}
            {/* Preserve natural spacing between words */}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </span>
  );
};

export const DisplayHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => (
  <h1 className={`font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.05] text-emerald-950 text-balance ${className}`}>
    {children}
  </h1>
);

export const SectionHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => (
  <h2 className={`font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1.12] text-emerald-950 text-balance ${className}`}>
    {children}
  </h2>
);

export const Highlight: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => (
  <span className={`bg-accent-yellow text-emerald-950 px-2 py-0.5 rounded-sm inline-block transform -rotate-1 font-extrabold shadow-[2px_2px_0px_0px_rgba(6,78,59,0.15)] ${className}`}>
    {children}
  </span>
);

export const BodyText: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => (
  <p className={`font-body text-emerald-900/80 text-base sm:text-lg leading-relaxed ${className}`}>
    {children}
  </p>
);
