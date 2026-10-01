

export const DisplayHeading = ({ children, className = '' }) => (
  <h1 className={`font-display font-extrabold text-5xl md:text-7xl tracking-wide leading-[1.1] text-emerald-900 ${className}`}>
    {children}
  </h1>
);

export const SectionHeading = ({ children, className = '' }) => (
  <h2 className={`font-display font-extrabold text-4xl md:text-5xl tracking-wide leading-tight text-emerald-900 ${className}`}>
    {children}
  </h2>
);

export const Highlight = ({ children }) => (
  <span className="bg-accent-yellow px-2 py-1 mx-1 rounded-sm inline-block transform -rotate-1">
    {children}
  </span>
);

export const BodyText = ({ children, className = '' }) => (
  <p className={`font-body text-emerald-900/80 text-lg leading-relaxed ${className}`}>
    {children}
  </p>
);

export const HoverText = ({ text, className = '' }) => {
  // A palette of vibrant Tailwind colors for the hover effect
  const hoverColors = [
    'hover:text-emerald-500',
    'hover:text-amber-500',
    'hover:text-rose-500',
    'hover:text-blue-500',
    'hover:text-purple-500',
    'hover:text-cyan-500'
  ];

  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => {
        const colorClass = hoverColors[index % hoverColors.length];
        return (
          <span
            key={index}
            className={`inline-block hover:-translate-y-1 hover:scale-110 ${colorClass} hover:-rotate-3 transition-all duration-200 cursor-default`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
};