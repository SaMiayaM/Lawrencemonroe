import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowUpRight, Eye } from 'lucide-react';
import { ARCHIVE_ITEMS } from '../../data/archive';
import { useCartStore } from '../../store/cartStore';

export const Section6ArchiveNext: React.FC = () => {
  const [hoveredArchiveId, setHoveredArchiveId] = useState<string | null>(null);
  const { openRequestAccess } = useCartStore();

  return (
    <section
      id="archive"
      className="relative w-full bg-graphite text-bone py-24 sm:py-32 md:py-40 overflow-hidden border-b border-line"
    >
      {/* Background Archival Grid */}
      <div className="absolute inset-0 bg-archival-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-line pb-6 mb-16 sm:mb-20">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-archive-red inline-block" />
              <span className="font-mono text-xs text-archive-red tracking-widest uppercase font-bold">
                ARCHIVE NEXT / EXPERIMENTAL LAB
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-bone uppercase">
              RELEASE 002 & 003.
            </h2>
          </div>

          <div className="font-mono text-xs text-smoke text-left sm:text-right space-y-1">
            <div>PROTOTYPE SPECIMENS IN DEVELOPMENT</div>
            <div className="text-gold uppercase tracking-wider">RESTRICTED TO ENROLLED CLIENTS</div>
          </div>
        </div>

        {/* Unreleased Specimen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {ARCHIVE_ITEMS.map((item) => {
            const isHovered = hoveredArchiveId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredArchiveId(item.id)}
                onMouseLeave={() => setHoveredArchiveId(null)}
                className="group relative bg-black border border-line hover:border-gold/60 transition-all duration-500 flex flex-col justify-between overflow-hidden p-6 sm:p-8"
              >
                {/* Top Telemetry Header */}
                <div className="flex items-center justify-between border-b border-line/60 pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Lock size={13} className="text-archive-red" />
                    <span className="font-mono text-[10px] text-archive-red uppercase tracking-widest font-bold">
                      {item.status} // {item.releaseTarget}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] text-smoke">
                    CODE: {item.code}
                  </div>
                </div>

                {/* Masked / Photocopy Graphic Specimen Stage */}
                <div className="relative aspect-[4/3] bg-graphite/40 border border-line/40 overflow-hidden mb-6 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isHovered ? 'scale-105 filter contrast-125 brightness-100 grayscale-0' : 'filter contrast-130 brightness-75 grayscale'
                    }`}
                  />

                  {/* Cut-paper Halftone & Vignette Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Center Watermark Stamp */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="border border-line/80 bg-black/80 px-4 py-2 rotate-[-6deg] backdrop-blur-sm">
                      <span className="font-mono text-[11px] font-bold text-bone tracking-ultra uppercase">
                        NOT YET RELEASED
                      </span>
                    </div>
                  </div>

                  {/* Hover Peek Indicator */}
                  <div className="absolute bottom-3 right-3 p-1.5 bg-black/80 border border-line text-smoke group-hover:text-gold transition-colors">
                    <Eye size={14} />
                  </div>
                </div>

                {/* Specimen Info */}
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-mono text-xs text-gold uppercase tracking-wider">
                      {item.category} / UNRELEASED
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-bone group-hover:text-gold transition-colors uppercase">
                      {item.name}
                    </h3>
                    <p className="font-utility text-xs sm:text-sm text-smoke leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Feature specs list */}
                  <div className="border-t border-line/40 pt-4 space-y-1.5">
                    {item.details.slice(0, 3).map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2 font-mono text-[10px] text-smoke">
                        <span className="w-1 h-1 bg-gold rounded-full" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Request Access Action */}
                  <div className="pt-6">
                    <button
                      onClick={() => openRequestAccess(item.category)}
                      className="w-full bg-graphite border border-line hover:border-gold hover:bg-gold hover:text-black text-bone py-3.5 px-6 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      <Lock size={13} />
                      <span>REQUEST ACCESS</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
