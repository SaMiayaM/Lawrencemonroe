import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brandAssets } from '../../data/assets';
import { EditorialFaceBlur } from '../common/EditorialFaceBlur';

export const Section1Hero: React.FC = () => {
  const [isHoveredCTA, setIsHoveredCTA] = useState(false);

  // Mouse position values for subtle layered parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Layer translations (2px to 6px subtle shift)
  const cutoutX = useTransform(smoothMouseX, [-500, 500], [-6, 6]);
  const cutoutY = useTransform(smoothMouseY, [-500, 500], [-5, 5]);
  const bgShiftX = useTransform(smoothMouseX, [-500, 500], [4, -4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleScrollToManifesto = () => {
    const el = document.getElementById('manifesto');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-14 border-b border-line selection:bg-gold selection:text-black"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-archival-grid opacity-60 pointer-events-none" />

      {/* Faint oversized LM Monogram behind model at 3-6% opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-5 w-[65vw] max-w-[680px]">
        <img src={brandAssets.monogram} alt="" className="w-full h-auto object-contain" />
      </div>

      {/* Kinetic Layer 1: Real Campaign Silhouette in Studio with Fun Editorial Face Blur */}
      <motion.div
        style={{ x: bgShiftX }}
        className="absolute right-[-2%] sm:right-[4%] top-[12%] w-[68vw] sm:w-[45vw] md:w-[38vw] max-w-[480px] h-[55vh] max-h-[620px] pointer-events-none z-0 opacity-40 md:opacity-60 overflow-hidden border border-line"
      >
        <div className="relative w-full h-full">
          <img
            src="/images/campaign-hero-motion.jpg"
            alt="Campaign silhouette in motion"
            className="w-full h-full object-cover grayscale contrast-125 brightness-90 filter"
          />
          <EditorialFaceBlur top="16%" left="50%" width="72px" height="38px" label="LM // PRIVATE" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-3 left-3 font-mono text-[9px] text-smoke/80 tracking-widest uppercase bg-black/60 px-2 py-0.5 border border-line/40">
          STUDIO TELEMETRY / FRAME 01
        </div>
      </motion.div>

      {/* Kinetic Layer 2: Transparent Shorts Centerpiece Cutout */}
      <motion.div
        style={{ x: cutoutX, y: cutoutY }}
        className="absolute left-[8%] sm:left-[22%] md:left-[28%] top-[24%] sm:top-[18%] w-[72vw] sm:w-[52vw] md:w-[44vw] max-w-[560px] pointer-events-none z-10 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
      >
        <div className="relative w-full h-auto">
          <img
            src="/images/shorts-001-cutout.jpg"
            alt="LM Shorts 001 with signature vertical arch graphic"
            className="w-full h-auto object-contain"
          />
          {/* Fun Editorial Face Blur on full look cutout */}
          <EditorialFaceBlur top="7%" left="50%" width="84px" height="44px" label="LM // 001" />
        </div>
        {/* Archival Pin Label */}
        <div className="absolute top-[35%] right-[10%] bg-black/80 border border-gold/60 backdrop-blur-sm px-2.5 py-1 flex items-center space-x-1.5 shadow-xl">
          <span className="w-1.5 h-1.5 bg-gold rounded-none" />
          <span className="font-mono text-[9px] text-bone tracking-widest uppercase">
            SPEC: LMS-001 / ARCHIVE
          </span>
        </div>
      </motion.div>

      {/* Top Banner Tag inside Hero */}
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 md:px-12 relative z-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-2 h-2 bg-gold" />
          <span className="font-mono text-[11px] sm:text-xs text-gold tracking-widest uppercase font-bold">
            RELEASE 001 / FIRST ALLOCATION
          </span>
        </div>
        <div className="font-mono text-[10px] text-smoke hidden sm:inline-block tracking-ultra uppercase">
          PRIVATE ARCHIVE • NON-GEOGRAPHIC
        </div>
      </div>

      {/* Center Display: Official LAWRENCE MONROE Wordmark Asset */}
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 md:px-12 relative z-20 my-auto py-12 md:py-20">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl"
          >
            <img
              src={brandAssets.wordmark}
              alt="LAWRENCE MONROE"
              className="w-full h-auto object-contain filter brightness-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            />
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pt-2">
            <div className="flex items-center space-x-4">
              <span className="font-mono text-xs sm:text-sm text-gold tracking-widest uppercase font-bold">
                [001]
              </span>
              <span className="font-serif italic text-lg sm:text-2xl text-smoke">
                Two pieces. One uniform.
              </span>
            </div>
            <div className="font-mono text-[11px] text-smoke max-w-sm leading-relaxed">
              ARCHITECTURAL SILHOUETTES CRAFTED FROM 480GSM COTTON WITH DISTRESSED ARCH GRAPHICS.
            </div>
          </div>
        </div>
      </div>

      {/* Hover Gold Line across screen when CTA is hovered */}
      <motion.div
        className="absolute left-0 w-full h-[1px] bg-gold pointer-events-none z-30 transition-all duration-500"
        style={{
          bottom: '100px',
          opacity: isHoveredCTA ? 1 : 0,
          scaleX: isHoveredCTA ? 1 : 0,
          transformOrigin: 'left',
        }}
      />

      {/* Hero Bottom CTAs & Metadata */}
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 md:px-12 relative z-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-line/60 pt-6">
          {/* Action CTAs */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <button
              onClick={handleScrollToManifesto}
              onMouseEnter={() => setIsHoveredCTA(true)}
              onMouseLeave={() => setIsHoveredCTA(false)}
              className="group relative bg-bone hover:bg-gold text-black px-6 sm:px-8 py-3.5 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold shadow-2xl"
            >
              <span>ENTER RELEASE</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </button>

            <Link
              to="/shop"
              className="group inline-flex items-center space-x-1.5 font-mono text-xs text-bone hover:text-gold tracking-widest uppercase transition-colors"
            >
              <span className="gold-line-sweep">VIEW INDEX</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-gold" />
            </Link>
          </div>

          {/* Edition / Release Coordinates */}
          <div className="flex items-center space-x-6 font-mono text-[10px] text-smoke">
            <div>
              <span className="text-smoke/60">EDITION: </span>
              <span className="text-gold font-bold">01 / 02</span>
            </div>
            <div>
              <span className="text-smoke/60">AVAILABILITY: </span>
              <span className="text-bone">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
