import React from 'react';
import { motion } from 'framer-motion';
import { brandAssets } from '../../data/assets';

interface EditorialFaceBlurProps {
  variant?: 'frosted-glass' | 'pixel-tape' | 'monogram-censor' | 'chromatic-blur';
  className?: string;
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  label?: string;
}

export const EditorialFaceBlur: React.FC<EditorialFaceBlurProps> = ({
  variant = 'frosted-glass',
  className = '',
  top = '7%',
  left = '50%',
  width = '88px',
  height = '48px',
  label = 'LM // OBSCURED',
}) => {
  if (variant === 'pixel-tape') {
    return (
      <div
        style={{ top, left, width, height }}
        className={`absolute -translate-x-1/2 z-20 pointer-events-none ${className}`}
      >
        {/* High-fashion editorial censor tape */}
        <div className="w-full h-full bg-black/90 border border-gold/60 backdrop-blur-lg flex items-center justify-center rotate-[-2deg] shadow-2xl">
          <div className="flex items-center space-x-1.5 px-2">
            <span className="w-1 h-1 bg-gold rounded-full animate-ping" />
            <span className="font-mono text-[8px] text-gold tracking-widest uppercase font-bold select-none">
              {label}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'monogram-censor') {
    return (
      <div
        style={{ top, left, width, height }}
        className={`absolute -translate-x-1/2 z-20 pointer-events-none ${className}`}
      >
        <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-md border border-line flex items-center justify-center p-2 shadow-xl">
          <img src={brandAssets.monogram} alt="" className="w-full h-full object-contain opacity-80" />
        </div>
      </div>
    );
  }

  // Default: Frosted glass editorial blur with gold hairline
  return (
    <motion.div
      style={{ top, left, width, height }}
      initial={{ opacity: 0.9 }}
      whileHover={{ scale: 1.05, opacity: 1 }}
      className={`absolute -translate-x-1/2 z-20 pointer-events-none rounded-sm overflow-hidden ${className}`}
    >
      <div className="w-full h-full backdrop-blur-xl bg-graphite/50 border border-gold/40 flex flex-col items-center justify-between p-1 shadow-2xl">
        <div className="w-full flex items-center justify-between px-1 font-mono text-[7px] text-gold tracking-widest">
          <span>[LM]</span>
          <span className="w-1 h-1 bg-gold rounded-full" />
        </div>
        <div className="font-mono text-[8px] font-bold text-bone tracking-widest uppercase text-center select-none">
          ANONYMOUS
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>
    </motion.div>
  );
};
