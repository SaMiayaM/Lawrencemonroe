import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Section5ObjectInMotion: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Layer transforms
  const bgImageX = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const cutoutY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const textFormX = useTransform(scrollYProgress, [0, 1], ['-10%', '15%']);
  const textWeightX = useTransform(scrollYProgress, [0, 1], ['15%', '-10%']);
  const textRepeatX = useTransform(scrollYProgress, [0, 1], ['-15%', '10%']);
  const textMotionX = useTransform(scrollYProgress, [0, 1], ['10%', '-15%']);

  const opacityResolve = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[240vh] bg-black">
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center border-b border-line">
        {/* Abstract Low-Opacity Repeated Monogram Pattern */}
        <div className="absolute inset-0 select-none pointer-events-none opacity-[0.03] flex flex-wrap gap-12 p-8 font-mono text-8xl font-black">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i}>LM</span>
          ))}
        </div>

        {/* Large Vertical Release Number */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 select-none pointer-events-none z-10 hidden sm:block">
          <div className="font-condensed text-[12vh] md:text-[18vh] font-black text-smoke/20 tracking-tighter leading-none [writing-mode:vertical-lr] rotate-180">
            RELEASE 001
          </div>
        </div>

        {/* Moving Background Fashion Campaign Layer (Cropped silhouette/movement, no facial focus) */}
        <motion.div
          style={{ x: bgImageX }}
          className="absolute inset-y-0 -left-[10%] w-[120%] z-0 pointer-events-none"
        >
          <img
            src="/images/campaign-hero-motion.jpg"
            alt="Campaign in motion"
            className="w-full h-full object-cover filter grayscale contrast-130 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </motion.div>

        {/* Background Moving Typography Layers */}
        <div className="absolute inset-0 flex flex-col justify-around py-16 pointer-events-none select-none z-10 overflow-hidden">
          <motion.div style={{ x: textFormX }} className="whitespace-nowrap">
            <span className="font-display font-extrabold text-7xl sm:text-9xl md:text-[14vw] text-bone/15 uppercase tracking-tighter">
              FORM • FORM • FORM
            </span>
          </motion.div>

          <motion.div style={{ x: textWeightX }} className="whitespace-nowrap text-right">
            <span className="font-display font-extrabold text-7xl sm:text-9xl md:text-[14vw] text-bone/15 uppercase tracking-tighter">
              WEIGHT • WEIGHT • WEIGHT
            </span>
          </motion.div>

          <motion.div style={{ x: textRepeatX }} className="whitespace-nowrap">
            <span className="font-display font-extrabold text-7xl sm:text-9xl md:text-[14vw] text-bone/15 uppercase tracking-tighter">
              REPEAT • REPEAT • REPEAT
            </span>
          </motion.div>

          <motion.div style={{ x: textMotionX }} className="whitespace-nowrap text-right">
            <span className="font-display font-extrabold text-7xl sm:text-9xl md:text-[14vw] text-gold/20 uppercase tracking-tighter">
              MOTION • MOTION • MOTION
            </span>
          </motion.div>
        </div>

        {/* Foreground Floating Product Silhouette Cutout */}
        <motion.div
          style={{ y: cutoutY }}
          className="relative z-20 w-[75vw] sm:w-[50vw] md:w-[36vw] max-w-[500px] pointer-events-none filter drop-shadow-[0_25px_50px_rgba(0,0,0,1)]"
        >
          <img
            src="/images/shorts-001-cutout.jpg"
            alt="LM Shorts 001 kinetic float"
            className="w-full h-auto object-contain"
          />

          {/* Stamped Telemetry Tag */}
          <div className="absolute bottom-6 right-2 bg-black/90 border border-gold/70 px-3 py-1.5 backdrop-blur-md">
            <div className="font-mono text-[9px] text-gold tracking-widest uppercase">
              STUDIO ISOLATION // LMS-001
            </div>
            <div className="font-mono text-[8px] text-smoke">
              STABILITY UNDER STRESS TEST
            </div>
          </div>
        </motion.div>

        {/* Resolving Garment-Detail Overlay near end of scroll */}
        <motion.div
          style={{ opacity: opacityResolve }}
          className="absolute inset-0 z-30 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-line p-6 sm:p-10 bg-graphite">
            <div className="relative aspect-square overflow-hidden border border-line bg-black">
              <img
                src="/images/campaign-contact-hardware.jpg"
                alt="Resolved Garment Craft Detail"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute bottom-2 left-2 font-mono text-[9px] text-gold bg-black/80 px-2 py-0.5 border border-gold/40">
                RESOLVED DETAIL SPEC
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-mono text-xs text-gold uppercase tracking-widest">
                GARMENT RESOLUTION
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-bone uppercase">
                UNCOMPROMISED WEAVE & STRUCTURAL INTEGRITY.
              </h3>
              <p className="font-utility text-xs text-smoke leading-relaxed">
                EVERY SEAM REINFORCED WITH BAR-TACK ANCHORS. HEAVYWEIGHT FRENCH TERRY TESTED FOR ZERO DEFORMATION ACROSS 100+ CYCLES.
              </p>
              <div className="font-mono text-[10px] text-bone/80 border-t border-line/60 pt-3 flex justify-between">
                <span>BATCH: LMS-RELEASE-001</span>
                <span className="text-gold">VERIFIED SPEC</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
