import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ZoomIn, UserX } from 'lucide-react';
import { SHORTS_001_VISUALS, SHORTS_002_VISUALS, ProductVisual } from '../../data/assets';
import { EditorialFaceBlur } from '../common/EditorialFaceBlur';

interface ProductMediaStageProps {
  productId: string;
  productName: string;
}

export const ProductMediaStage: React.FC<ProductMediaStageProps> = ({ productId, productName }) => {
  const visuals: ProductVisual[] = productId === 'lm-shorts-002' ? SHORTS_002_VISUALS : SHORTS_001_VISUALS;
  const isHeather = productId === 'lm-shorts-002';
  
  const [activeVisualIndex, setActiveVisualIndex] = useState(0);
  const [focusMode, setFocusMode] = useState<'full' | 'shorts'>('full');
  const [showAnnotations, setShowAnnotations] = useState(false);
  const [activeAnnotationId, setActiveAnnotationId] = useState<number | null>(null);
  const [faceBlurActive, setFaceBlurActive] = useState(true);
  const [blurStyle, setBlurStyle] = useState<'vintage-bar' | 'vintage-stamp' | 'grain-halftone'>('vintage-bar');
  
  // Mouse position for subtle 2px-4px micro-shift
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeVisual = visuals[activeVisualIndex] || visuals[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6; // max 3px shift
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    setMousePos({ x, y });
  };

  return (
    <div className="space-y-4">
      {/* Top Inspection & Focus Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border border-line bg-black/80 p-2.5 font-mono text-xs">
        {/* Full Look vs Shorts Focus Mode Toggle */}
        <div className="flex items-center space-x-1 border border-line/60 bg-graphite p-0.5">
          <button
            onClick={() => setFocusMode('full')}
            className={`px-3 py-1.5 uppercase font-bold text-[11px] transition-colors ${
              focusMode === 'full'
                ? 'bg-black text-gold border border-gold/60 shadow-sm'
                : 'text-smoke hover:text-bone'
            }`}
          >
            FULL LOOK
          </button>
          <button
            onClick={() => setFocusMode('shorts')}
            className={`px-3 py-1.5 uppercase font-bold text-[11px] transition-colors flex items-center space-x-1.5 ${
              focusMode === 'shorts'
                ? 'bg-black text-gold border border-gold/60 shadow-sm'
                : 'text-smoke hover:text-bone'
            }`}
          >
            <ZoomIn size={12} />
            <span>SHORTS FOCUS</span>
          </button>
        </div>

        {/* Action Controls: Vintage Face Blur & Inspection Annotations */}
        <div className="flex items-center space-x-2">
          {/* Vintage Face Blur Control */}
          {focusMode === 'full' && (
            <button
              onClick={() => {
                if (!faceBlurActive) {
                  setFaceBlurActive(true);
                } else {
                  if (blurStyle === 'vintage-bar') setBlurStyle('vintage-stamp');
                  else if (blurStyle === 'vintage-stamp') setBlurStyle('grain-halftone');
                  else {
                    setBlurStyle('vintage-bar');
                    setFaceBlurActive(false);
                  }
                }
              }}
              className={`px-2.5 py-1.5 uppercase font-mono text-[10px] tracking-wider transition-colors border flex items-center space-x-1.5 ${
                faceBlurActive
                  ? 'border-gold bg-gold/10 text-gold font-bold'
                  : 'border-line text-smoke hover:text-bone'
              }`}
              title="Toggle vintage editorial face obscurity"
            >
              <UserX size={12} />
              <span>
                {faceBlurActive ? `FACE: ${blurStyle === 'vintage-bar' ? 'VINTAGE BAR' : blurStyle === 'vintage-stamp' ? 'LOGO STAMP' : 'GRAIN BLUR'}` : 'FACE: CLEAR'}
              </span>
            </button>
          )}

          {/* Inspection Annotations Toggle */}
          {activeVisual.annotations && activeVisual.annotations.length > 0 && (
            <button
              onClick={() => setShowAnnotations(!showAnnotations)}
              className={`px-3 py-1.5 uppercase font-mono text-[11px] tracking-wider transition-colors border flex items-center space-x-1.5 ${
                showAnnotations
                  ? 'border-gold bg-gold/10 text-gold font-bold'
                  : 'border-line text-smoke hover:text-bone hover:border-smoke'
              }`}
            >
              <Eye size={13} />
              <span>{showAnnotations ? 'HIDE MARKS' : 'INSPECTION MARKS'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Interactive Stage with Print-Frame Border */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        className="relative aspect-[4/5] bg-graphite/40 border border-line overflow-hidden group contact-frame-border"
      >
        {/* Active Image with dynamic smooth zoom/crop animation */}
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
          <motion.img
            key={activeVisual.id}
            src={activeVisual.src}
            alt={activeVisual.alt || productName}
            animate={{
              scale: focusMode === 'shorts' ? activeVisual.crop.desktop.scale : 1.02,
              x: mousePos.x,
              y: mousePos.y,
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transformOrigin: focusMode === 'shorts' ? activeVisual.crop.desktop.objectPosition : '50% 50%',
            }}
            className="w-full h-full object-cover filter contrast-105 brightness-95 select-none"
          />

          {/* Vintage Editorial Face Obscurity Overlay (Active in Full Look Mode) */}
          {faceBlurActive && focusMode === 'full' && (
            <EditorialFaceBlur
              variant={blurStyle}
              top={activeVisual.id.includes('seated') ? '12%' : '8%'}
              left="50%"
              width={activeVisual.id.includes('seated') ? '104px' : '96px'}
              height="34px"
              label="LAWRENCE MONROE"
              badgeType={isHeather ? 'blue' : 'white'}
            />
          )}

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

          {/* Interactive Annotation Markers (Shown when toggle is ON) */}
          <AnimatePresence>
            {showAnnotations && activeVisual.annotations && (
              <>
                {activeVisual.annotations.map((marker) => {
                  const isActive = activeAnnotationId === marker.id;
                  return (
                    <div
                      key={marker.id}
                      style={{ top: marker.top, left: marker.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                    >
                      <button
                        onClick={() => setActiveAnnotationId(isActive ? null : marker.id)}
                        className={`group flex items-center justify-center w-6 h-6 border font-mono text-[10px] font-bold transition-transform ${
                          isActive
                            ? 'bg-gold text-black border-gold scale-125 ring-2 ring-gold/50'
                            : 'bg-black/90 text-gold border-gold/80 hover:scale-110 hover:bg-gold hover:text-black'
                        }`}
                        aria-label={`Annotation marker ${marker.id}`}
                      >
                        0{marker.id}
                      </button>

                      {/* Tooltip on Active Marker */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.95 }}
                          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 bg-black/95 border border-gold p-2.5 shadow-2xl text-left pointer-events-none"
                        >
                          <div className="font-mono text-[10px] text-gold font-bold uppercase border-b border-line/40 pb-1 mb-1">
                            {marker.label}
                          </div>
                          <p className="font-utility text-[11px] text-bone/90 leading-tight">
                            {marker.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Top-Left Stage Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
          <div className="font-mono text-[9px] bg-black/80 border border-gold/60 text-gold px-2.5 py-1 tracking-widest uppercase backdrop-blur-sm">
            {focusMode === 'shorts' ? 'MODE: SHORTS FOCUS' : 'MODE: FULL CAMPAIGN LOOK'} [{activeVisualIndex + 1}/{visuals.length}]
          </div>
        </div>

        {/* Telemetry Bottom Bar inside stage */}
        <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between font-mono text-[9px] text-smoke pointer-events-none">
          <span className="bg-black/60 px-2 py-0.5 border border-line/40">
            SPECIMEN: {activeVisual.label}
          </span>
          <span className="text-gold uppercase tracking-wider">
            REAL ARCHIVE ASSET
          </span>
        </div>
      </div>

      {/* Truthful Real Visuals Selector Rail */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
        {visuals.map((vis, idx) => {
          const isActive = idx === activeVisualIndex;
          return (
            <button
              key={vis.id}
              onClick={() => {
                setActiveVisualIndex(idx);
                setActiveAnnotationId(null);
              }}
              className={`relative aspect-[4/3] border bg-graphite overflow-hidden transition-all duration-300 group focus:outline-none ${
                isActive
                  ? 'border-gold ring-1 ring-gold ring-offset-1 ring-offset-black'
                  : 'border-line hover:border-smoke/60 opacity-60 hover:opacity-100'
              }`}
              aria-label={`Select ${vis.label}`}
            >
              <img
                src={vis.src}
                alt={vis.alt}
                className="w-full h-full object-cover grayscale contrast-115"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/90 text-center font-mono text-[9px] py-1 text-bone font-bold tracking-wider uppercase border-t border-line/40">
                {vis.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
