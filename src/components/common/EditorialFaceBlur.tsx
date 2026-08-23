import React from 'react';
import { motion } from 'framer-motion';
import { brandAssets } from '../../data/assets';

interface EditorialFaceBlurProps {
  variant?: 'vintage-bar' | 'vintage-stamp' | 'grain-halftone' | 'monogram-censor';
  className?: string;
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  label?: string;
  badgeType?: 'white' | 'blue';
}

export const EditorialFaceBlur: React.FC<EditorialFaceBlurProps> = ({
  variant = 'vintage-bar',
  className = '',
  top = '7%',
  left = '50%',
  width = '96px',
  height = '36px',
  label = 'LAWRENCE MONROE',
  badgeType = 'white',
}) => {
  if (variant === 'vintage-stamp') {
    return (
      <div
        style={{ top, left, width: '110px', height: '36px' }}
        className={`absolute -translate-x-1/2 z-20 pointer-events-none ${className}`}
      >
        {/* Official Brand Badge Stamp used as vintage censor */}
        <div className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] rotate-[-2deg] transition-transform hover:rotate-0">
          <img
            src={badgeType === 'blue' ? brandAssets.blueBadge : brandAssets.whiteBadge}
            alt="LawrenceMonroe"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
  }

  if (variant === 'grain-halftone') {
    return (
      <div
        style={{ top, left, width: '74px', height: '74px' }}
        className={`absolute -translate-x-1/2 -translate-y-1/4 z-20 pointer-events-none rounded-full overflow-hidden ${className}`}
      >
        {/* Vintage Halftone & Heavy Film Grain Mask */}
        <div className="w-full h-full backdrop-blur-2xl bg-black/60 border border-gold/40 flex items-center justify-center shadow-2xl">
          <div className="text-center font-mono text-[7px] text-gold tracking-ultra uppercase font-bold">
            [LM / OBS]
          </div>
        </div>
      </div>
    );
  }

  // Default: Authentic Vintage Redaction Bar / Tape Stamp
  return (
    <motion.div
      style={{ top, left, width, height }}
      initial={{ opacity: 0.95 }}
      whileHover={{ scale: 1.04, opacity: 1 }}
      className={`absolute -translate-x-1/2 z-20 pointer-events-none ${className}`}
    >
      <div className="w-full h-full bg-black/95 border-y border-gold/70 backdrop-blur-md flex items-center justify-between px-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.9)] rotate-[-1deg]">
        <span className="w-1 h-1 bg-gold rounded-full" />
        <span className="font-mono text-[8px] font-bold text-bone tracking-widest uppercase select-none">
          {label}
        </span>
        <span className="font-mono text-[7px] text-gold tracking-wider">[001]</span>
      </div>
    </motion.div>
  );
};
