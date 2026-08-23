import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, closeSizeGuide } = useCartStore();
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSizeGuideOpen) {
        closeSizeGuide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSizeGuideOpen, closeSizeGuide]);

  const sizesInInches = [
    { size: 'S', waist: '28 – 31"', outseam: '18.5"', inseam: '6.5"', legOpening: '24.0"' },
    { size: 'M', waist: '31 – 34"', outseam: '19.0"', inseam: '7.0"', legOpening: '25.0"' },
    { size: 'L', waist: '34 – 37"', outseam: '19.5"', inseam: '7.5"', legOpening: '26.0"' },
    { size: 'XL', waist: '37 – 40"', outseam: '20.0"', inseam: '8.0"', legOpening: '27.0"' },
  ];

  const sizesInCm = [
    { size: 'S', waist: '71 – 79 cm', outseam: '47.0 cm', inseam: '16.5 cm', legOpening: '61.0 cm' },
    { size: 'M', waist: '79 – 86 cm', outseam: '48.3 cm', inseam: '17.8 cm', legOpening: '63.5 cm' },
    { size: 'L', waist: '86 – 94 cm', outseam: '49.5 cm', inseam: '19.0 cm', legOpening: '66.0 cm' },
    { size: 'XL', waist: '94 – 102 cm', outseam: '50.8 cm', inseam: '20.3 cm', legOpening: '68.5 cm' },
  ];

  const data = unit === 'in' ? sizesInInches : sizesInCm;

  return (
    <AnimatePresence>
      {isSizeGuideOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Size and Measurement Guide"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSizeGuide}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container: Styled in Bone/Paper Paper Archival aesthetic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-2xl bg-paper text-ink border border-ash/40 p-6 sm:p-8 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ash/20 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <Ruler size={16} className="text-gold-dark" />
                <span className="font-mono text-xs font-bold text-ash tracking-widest uppercase">
                  SIZE MATRIX / RELEASE 001 SHORTS
                </span>
              </div>
              <button
                onClick={closeSizeGuide}
                className="text-ash hover:text-black p-1 transition-colors focus:outline-none"
                aria-label="Close size guide"
              >
                <X size={18} />
              </button>
            </div>

            {/* Title & Unit Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink uppercase">
                  ARCHITECTURAL FIT SPECIFICATION
                </h3>
                <p className="font-utility text-xs text-smoke mt-1">
                  Engineered with an elastic waistband and extended drawstrings for variable waist fit.
                </p>
              </div>

              {/* Toggle in / cm */}
              <div className="flex border border-ash/30 bg-bone/60 p-0.5 self-start sm:self-auto">
                <button
                  onClick={() => setUnit('in')}
                  className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
                    unit === 'in' ? 'bg-ink text-paper' : 'text-ash hover:text-ink'
                  }`}
                >
                  INCHES
                </button>
                <button
                  onClick={() => setUnit('cm')}
                  className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
                    unit === 'cm' ? 'bg-ink text-paper' : 'text-ash hover:text-ink'
                  }`}
                >
                  CENTIMETERS
                </button>
              </div>
            </div>

            {/* Measurement Table */}
            <div className="overflow-x-auto border border-ash/20 bg-bone/40 mb-6">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-ash/20 bg-ash/5 text-ash">
                    <th className="py-2.5 px-4 font-bold">SIZE</th>
                    <th className="py-2.5 px-4 font-bold">WAIST (RELAXED–STRETCHED)</th>
                    <th className="py-2.5 px-4 font-bold">OUTSEAM</th>
                    <th className="py-2.5 px-4 font-bold">INSEAM</th>
                    <th className="py-2.5 px-4 font-bold">LEG OPENING</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ash/15">
                  {data.map((row) => (
                    <tr key={row.size} className="hover:bg-ash/5 transition-colors">
                      <td className="py-3 px-4 font-bold text-ink bg-ash/10">{row.size}</td>
                      <td className="py-3 px-4 text-ink">{row.waist}</td>
                      <td className="py-3 px-4 text-ink">{row.outseam}</td>
                      <td className="py-3 px-4 text-ink">{row.inseam}</td>
                      <td className="py-3 px-4 text-ink">{row.legOpening}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Curatorial Fit Recommendation */}
            <div className="bg-bone/80 border border-ash/20 p-4 space-y-2 text-xs text-ash">
              <div className="font-mono text-[10px] font-bold text-gold-dark uppercase tracking-wider">
                SILHOUETTE NOTE
              </div>
              <p className="font-utility leading-relaxed">
                LM Shorts feature a dropped crotch and relaxed boxy thigh cut. If you prefer a traditional streetwear drape that hovers right above the knee, choose your standard true waist size. If you desire a more tailored or higher-thigh silhouette, size down one step.
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={closeSizeGuide}
                className="w-full py-3 bg-ink text-paper hover:bg-gold-dark hover:text-white font-mono text-xs font-bold tracking-widest uppercase transition-colors"
              >
                RETURN TO GARMENT
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
