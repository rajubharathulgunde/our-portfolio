import { brandsData } from '../../models/brandsData';

export const Brands = () => {
  // Multiply data to guarantee the row is wider than the screen
  const infiniteBrands = [...brandsData, ...brandsData, ...brandsData, ...brandsData, ...brandsData];

  return (
    <section className="py-12 border-y border-neutral-gray/20 bg-canvas overflow-hidden flex flex-col items-center">
      <p className="font-body text-sm font-bold text-emerald-900/40 uppercase tracking-widest mb-8">
        Trusted Technologies & Partners
      </p>
      
      <div className="w-full relative flex overflow-x-hidden group">
        <div className="animate-[marquee_30s_linear_infinite] flex whitespace-nowrap gap-16 px-8 items-center min-w-max group-hover:[animation-play-state:paused]">
          {infiniteBrands.map((brand, idx) => (
            <span key={`${brand.id}-${idx}`} className="font-display font-extrabold text-3xl text-emerald-900/20 hover:text-emerald-900 transition-colors duration-300">
              {brand.logo}
            </span>
          ))}
        </div>
        
        <div className="animate-[marquee_30s_linear_infinite] flex whitespace-nowrap gap-16 px-8 items-center min-w-max absolute top-0 left-full group-hover:[animation-play-state:paused]">
          {infiniteBrands.map((brand, idx) => (
            <span key={`dup-${brand.id}-${idx}`} className="font-display font-extrabold text-3xl text-emerald-900/20 hover:text-emerald-900 transition-colors duration-300">
              {brand.logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};