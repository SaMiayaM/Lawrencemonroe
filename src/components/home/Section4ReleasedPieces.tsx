import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus, ZoomIn } from 'lucide-react';
import { RELEASED_PRODUCTS } from '../../data/products';
import { formatCurrency } from '../../utils/format';
import { useCartStore } from '../../store/cartStore';

export const Section4ReleasedPieces: React.FC = () => {
  const [product1Focus, setProduct1Focus] = useState<'full' | 'shorts'>('full');
  const [product2Focus, setProduct2Focus] = useState<'full' | 'shorts'>('full');
  const { addItem, openCart } = useCartStore();

  const product1 = RELEASED_PRODUCTS[0]; // LM Shorts 001 (Pitch Black)
  const product2 = RELEASED_PRODUCTS[1]; // LM Shorts 002 (Heather Grey)

  const handleQuickAdd = (e: React.MouseEvent, product: typeof product1) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      code: product.code,
      color: product.selectedColorDefault,
      size: 'M',
      price: product.price,
      image: product.cutoutImage,
      maxStock: product.stockCount,
      quantity: 1,
    });
    openCart();
  };

  return (
    <section
      id="pieces"
      className="relative w-full bg-black text-bone py-24 sm:py-32 md:py-40 overflow-hidden border-b border-line"
    >
      {/* Background Archival Grid */}
      <div className="absolute inset-0 bg-archival-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-line pb-6 mb-16 sm:mb-24">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-gold inline-block" />
              <span className="font-mono text-xs text-gold tracking-widest uppercase font-bold">
                001 / AVAILABLE NOW
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-bone uppercase">
              THE PIECES.
            </h2>
          </div>

          <div className="font-mono text-xs text-smoke text-left sm:text-right space-y-1">
            <div>2 ARCHITECTURAL SILHOUETTES</div>
            <div className="text-gold uppercase tracking-wider">ALL ORDERS SHIPPED CARBON-NEUTRAL</div>
          </div>
        </div>

        {/* Asymmetrical Product 1 Block: LM Shorts 001 (Pitch Black) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 sm:mb-36 group">
          {/* Background Shifting Number */}
          <div className="absolute -top-12 -left-6 pointer-events-none select-none z-0 opacity-15 transition-transform duration-700 group-hover:translate-x-4">
            <span className="font-condensed font-extrabold text-[22vw] text-smoke leading-none">
              01
            </span>
          </div>

          {/* Left Column: Monumental Tall Image Stage with Dynamic Shorts Focus */}
          <div className="lg:col-span-7 relative z-10 space-y-3">
            <div
              onMouseEnter={() => setProduct1Focus('shorts')}
              onMouseLeave={() => setProduct1Focus('full')}
              className="block relative bg-graphite border border-line overflow-hidden aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] group-hover:border-gold transition-colors duration-500"
            >
              {/* Main cutout image with smooth Shorts-Focus zoom on hover */}
              <motion.img
                src={product1.heroImage}
                alt={product1.name}
                animate={{
                  scale: product1Focus === 'shorts' ? 1.85 : 1.02,
                }}
                style={{
                  transformOrigin: '50% 68%',
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover filter brightness-95 contrast-105"
              />

              {/* Floating Gold Edition Stamp */}
              <div className="absolute top-4 left-4 z-20">
                <div className="inline-flex items-center space-x-1.5 font-mono text-[9px] border border-gold bg-black/80 backdrop-blur-sm px-2.5 py-1 text-gold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 bg-gold" />
                  <span>EDITION 001 // BLACK</span>
                </div>
              </div>

              {/* Inset Focus Tag */}
              <div className="absolute bottom-4 right-4 z-20 font-mono text-[9px] bg-black/80 border border-line px-2.5 py-1 text-smoke group-hover:text-gold group-hover:border-gold transition-colors">
                {product1Focus === 'shorts' ? 'FOCUS: LM SHORTS 001' : 'HOVER TO FOCUS ON SHORTS'}
              </div>
            </div>

            {/* Mobile Touch Focus Switcher */}
            <div className="flex sm:hidden justify-between items-center border border-line bg-black/60 p-2 font-mono text-xs">
              <span className="text-smoke text-[10px]">TAP TO FRAME:</span>
              <button
                onClick={() => setProduct1Focus(product1Focus === 'full' ? 'shorts' : 'full')}
                className="px-2.5 py-1 bg-graphite border border-gold text-gold text-[10px] font-bold uppercase"
              >
                {product1Focus === 'full' ? 'VIEW SHORTS FOCUS' : 'VIEW FULL LOOK'}
              </button>
            </div>
          </div>

          {/* Right Column: Key Commerce Data & Controls */}
          <div className="lg:col-span-5 relative z-10 space-y-6 lg:pl-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-smoke">
                <span>CODE: {product1.code}</span>
                <span className="text-gold font-bold">AVAILABLE NOW</span>
              </div>

              <Link to={`/shop/${product1.slug}`}>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-bone group-hover:text-gold transition-colors uppercase tracking-tight">
                  {product1.name}
                </h3>
              </Link>

              <div className="font-mono text-xl sm:text-2xl text-bone font-bold">
                {formatCurrency(product1.price)}
              </div>
            </div>

            <p className="font-utility text-xs sm:text-sm text-smoke leading-relaxed">
              {product1.shortDescription}
            </p>

            {/* Spec breakdown bullet highlights */}
            <div className="border-t border-b border-line/60 py-4 space-y-2 font-mono text-xs text-smoke">
              <div className="flex justify-between">
                <span>GRAPHIC:</span>
                <span className="text-bone">DISTRESSED WHITE ARCH PILL</span>
              </div>
              <div className="flex justify-between">
                <span>FABRIC:</span>
                <span className="text-bone">480GSM COTTON TERRY</span>
              </div>
              <div className="flex justify-between">
                <span>SIZING:</span>
                <span className="text-bone">S • M • L • XL</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to={`/shop/${product1.slug}`}
                className="flex-1 bg-bone hover:bg-gold text-black py-3.5 px-6 font-mono text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
              >
                <span>INSPECT PIECE</span>
                <ArrowUpRight size={14} />
              </Link>

              <button
                onClick={(e) => handleQuickAdd(e, product1)}
                className="border border-line bg-graphite/60 hover:border-gold hover:text-gold text-bone py-3.5 px-5 font-mono text-xs tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
                aria-label="Quick add Size M to bag"
              >
                <Plus size={14} />
                <span>QUICK ALLOCATE [M]</span>
              </button>
            </div>
          </div>
        </div>

        {/* Asymmetrical Product 2 Block: LM Shorts 002 (Heather Grey with Blue Graphic) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group">
          {/* Background Shifting Number */}
          <div className="absolute -top-12 -right-6 pointer-events-none select-none z-0 opacity-15 transition-transform duration-700 group-hover:-translate-x-4">
            <span className="font-condensed font-extrabold text-[22vw] text-smoke leading-none">
              02
            </span>
          </div>

          {/* Left Column: Key Commerce Data (Inverted column order on desktop for asymmetrical rhythm) */}
          <div className="order-2 lg:order-1 lg:col-span-5 relative z-10 space-y-6 lg:pr-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-smoke">
                <span>CODE: {product2.code}</span>
                <span className="text-gold font-bold">LIMITED STOCK</span>
              </div>

              <Link to={`/shop/${product2.slug}`}>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-bone group-hover:text-gold transition-colors uppercase tracking-tight">
                  {product2.name}
                </h3>
              </Link>

              <div className="font-mono text-xl sm:text-2xl text-bone font-bold">
                {formatCurrency(product2.price)}
              </div>
            </div>

            <p className="font-utility text-xs sm:text-sm text-smoke leading-relaxed">
              {product2.shortDescription}
            </p>

            {/* Spec breakdown bullet highlights */}
            <div className="border-t border-b border-line/60 py-4 space-y-2 font-mono text-xs text-smoke">
              <div className="flex justify-between">
                <span>GRAPHIC:</span>
                <span className="text-bone">COBALT BLUE ARCH PILL</span>
              </div>
              <div className="flex justify-between">
                <span>FABRIC:</span>
                <span className="text-bone">480GSM HEATHER COTTON</span>
              </div>
              <div className="flex justify-between">
                <span>SIZING:</span>
                <span className="text-bone">S • M • L • XL</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to={`/shop/${product2.slug}`}
                className="flex-1 bg-bone hover:bg-gold text-black py-3.5 px-6 font-mono text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
              >
                <span>INSPECT PIECE</span>
                <ArrowUpRight size={14} />
              </Link>

              <button
                onClick={(e) => handleQuickAdd(e, product2)}
                className="border border-line bg-graphite/60 hover:border-gold hover:text-gold text-bone py-3.5 px-5 font-mono text-xs tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
                aria-label="Quick add Size M to bag"
              >
                <Plus size={14} />
                <span>QUICK ALLOCATE [M]</span>
              </button>
            </div>
          </div>

          {/* Right Column: Monumental Offset Image Stage with Dynamic Shorts Focus */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative z-10 space-y-3">
            <div
              onMouseEnter={() => setProduct2Focus('shorts')}
              onMouseLeave={() => setProduct2Focus('full')}
              className="block relative bg-graphite border border-line overflow-hidden aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] group-hover:border-gold transition-colors duration-500"
            >
              {/* Main cutout image with smooth Shorts-Focus zoom on hover */}
              <motion.img
                src={product2.heroImage}
                alt={product2.name}
                animate={{
                  scale: product2Focus === 'shorts' ? 1.85 : 1.02,
                }}
                style={{
                  transformOrigin: '50% 68%',
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover filter brightness-95 contrast-105"
              />

              {/* Floating Gold Edition Stamp */}
              <div className="absolute top-4 left-4 z-20">
                <div className="inline-flex items-center space-x-1.5 font-mono text-[9px] border border-gold bg-black/80 backdrop-blur-sm px-2.5 py-1 text-gold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 bg-gold" />
                  <span>EDITION 002 // HEATHER</span>
                </div>
              </div>

              {/* Inset Focus Tag */}
              <div className="absolute bottom-4 left-4 z-20 font-mono text-[9px] bg-black/80 border border-line px-2.5 py-1 text-smoke group-hover:text-gold group-hover:border-gold transition-colors">
                {product2Focus === 'shorts' ? 'FOCUS: LM SHORTS 002' : 'HOVER TO FOCUS ON SHORTS'}
              </div>
            </div>

            {/* Mobile Touch Focus Switcher */}
            <div className="flex sm:hidden justify-between items-center border border-line bg-black/60 p-2 font-mono text-xs">
              <span className="text-smoke text-[10px]">TAP TO FRAME:</span>
              <button
                onClick={() => setProduct2Focus(product2Focus === 'full' ? 'shorts' : 'full')}
                className="px-2.5 py-1 bg-graphite border border-gold text-gold text-[10px] font-bold uppercase"
              >
                {product2Focus === 'full' ? 'VIEW SHORTS FOCUS' : 'VIEW FULL LOOK'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
