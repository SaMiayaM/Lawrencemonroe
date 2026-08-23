import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Section7FinalCTA: React.FC = () => {
  return (
    <section className="relative w-full bg-black text-bone py-28 sm:py-36 md:py-48 overflow-hidden border-b border-line">
      {/* Background Silhouette Crop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
        <img
          src="/images/shorts-001-cutout.jpg"
          alt="LM Shorts Silhouette"
          className="w-full h-full object-cover grayscale contrast-150 brightness-75 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
      </div>

      {/* Antique Gold Hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-80 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10 text-center space-y-8 sm:space-y-10">
        {/* Release Run Label */}
        <div className="inline-flex items-center space-x-2 font-mono text-xs text-gold tracking-ultra uppercase border border-gold/40 px-4 py-1.5 bg-black/60 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-gold" />
          <span>001 / LIMITED RUN</span>
        </div>

        {/* Oversized Statement */}
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-bone leading-[0.88] tracking-tighter uppercase max-w-5xl mx-auto">
          THE RELEASE<br />
          IS OPEN.
        </h2>

        <p className="font-serif italic text-lg sm:text-2xl text-smoke max-w-xl mx-auto">
          Every piece serialized. Heavyweight French terry crafted for perpetual form.
        </p>

        {/* Big Action CTA */}
        <div className="pt-4">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-3 bg-bone hover:bg-gold text-black py-4 px-10 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <span>SHOP SHORTS</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
