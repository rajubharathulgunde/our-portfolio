import React from 'react';
import { brandsData } from '../../models/brandsData';

export const Brands: React.FC = () => {
  // Render a clean set of partners/ecosystems
  const brandList = brandsData;

  return (
    <section className="py-12 border-y border-emerald-950/10 bg-[#fcfaf5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-800/70 font-semibold">
          Trusted Technologies · Industry Partners · Platforms
        </p>
      </div>

      {/* Marquee Container with Fade Edges */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Left & Right Gradient Scrims for smooth edge fading */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fcfaf5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fcfaf5] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track: Seamless double-loop without collision or overlap */}
        <div className="animate-marquee-infinite">
          {/* Loop Set 1 */}
          <div className="flex shrink-0 items-center gap-10 sm:gap-14 pr-10 sm:pr-14">
            {brandList.map((brand) => (
              <div
                key={`b1-${brand.id}`}
                className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/70 border border-emerald-950/10 hover:border-emerald-600/40 hover:bg-white transition-all duration-200 shadow-xs cursor-default shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-900 text-[#fcfaf5] flex items-center justify-center font-display font-bold text-xs uppercase tracking-tight group-hover:bg-accent-yellow group-hover:text-emerald-950 transition-colors">
                  {brand.name.slice(0, 2)}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-sm sm:text-base text-emerald-950 group-hover:text-emerald-700 transition-colors">
                    {brand.name}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-700/70 font-medium">
                    {brand.tagline}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Loop Set 2 (Exact duplicate for seamless looping) */}
          <div className="flex shrink-0 items-center gap-10 sm:gap-14 pr-10 sm:pr-14" aria-hidden="true">
            {brandList.map((brand) => (
              <div
                key={`b2-${brand.id}`}
                className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/70 border border-emerald-950/10 hover:border-emerald-600/40 hover:bg-white transition-all duration-200 shadow-xs cursor-default shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-900 text-[#fcfaf5] flex items-center justify-center font-display font-bold text-xs uppercase tracking-tight group-hover:bg-accent-yellow group-hover:text-emerald-950 transition-colors">
                  {brand.name.slice(0, 2)}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-sm sm:text-base text-emerald-950 group-hover:text-emerald-700 transition-colors">
                    {brand.name}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-700/70 font-medium">
                    {brand.tagline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
