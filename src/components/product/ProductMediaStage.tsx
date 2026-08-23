import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ZoomIn } from 'lucide-react';
import { ProductGalleryItem } from '../../types';

interface ProductMediaStageProps {
  images: ProductGalleryItem[];
  productName: string;
}

export const ProductMediaStage: React.FC<ProductMediaStageProps> = ({ images, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomCoords, setZoomCoords] = useState({ x: 50, y: 50 });

  const activeImage = images[activeIndex] || images[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomCoords({ x, y });
  };

  return (
    <div className="space-y-4">
      {/* Main Interactive Stage with Print-Frame Border */}
      <div
        onMouseMove={handleMouseMove}
        className="relative aspect-[4/5] bg-black border border-line overflow-hidden group contact-frame-border"
      >
        {/* Active Image with smooth crossfade and zoom on hover */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <img
              src={activeImage.url}
              alt={activeImage.alt || productName}
              className={`w-full h-full object-cover transition-transform duration-200 ${
                isZoomed ? 'scale-150' : 'scale-100 group-hover:scale-105'
              } filter brightness-95 contrast-105`}
              style={
                isZoomed
                  ? {
                      transformOrigin: `${zoomCoords.x}% ${zoomCoords.y}%`,
                    }
                  : undefined
              }
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Frame Label Tag */}
        <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
          <div className="font-mono text-[9px] bg-black/80 border border-gold/60 text-gold px-2.5 py-1 tracking-widest uppercase backdrop-blur-sm">
            ANGLE: {activeImage.label} [{activeIndex + 1}/{images.length}]
          </div>
        </div>

        {/* Zoom Mode Toggle Button */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute top-4 right-4 z-20 p-2 bg-black/80 border border-line hover:border-gold text-smoke hover:text-gold transition-colors focus:outline-none"
          aria-label={isZoomed ? "Reset Zoom" : "Zoom Image Detail"}
        >
          {isZoomed ? <Maximize2 size={14} /> : <ZoomIn size={14} />}
        </button>

        {/* Telemetry Footer Info inside frame */}
        <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between font-mono text-[9px] text-smoke pointer-events-none">
          <span className="bg-black/60 px-2 py-0.5 border border-line/40">
            SPECIMEN ISOLATION // DOSSIER STAGE
          </span>
          <span className="text-gold">480GSM FRENCH TERRY</span>
        </div>
      </div>

      {/* Gallery Image Selector Rail */}
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {images.map((img, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={img.id}
              onClick={() => {
                setActiveIndex(idx);
                setIsZoomed(false);
              }}
              className={`relative aspect-square border bg-graphite overflow-hidden transition-all duration-300 group focus:outline-none ${
                isActive
                  ? 'border-gold ring-1 ring-gold ring-offset-1 ring-offset-black'
                  : 'border-line hover:border-smoke/60 opacity-60 hover:opacity-100'
              }`}
              aria-label={`View ${img.label} image`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover grayscale contrast-115"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/85 text-center font-mono text-[8px] py-0.5 text-bone font-medium tracking-wider uppercase">
                {img.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
