

export const Badge = ({ children, color = 'bg-neutral-whisper', textColor = 'text-emerald-900' }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${color} ${textColor}`}>
      {children}
    </span>
  );
};