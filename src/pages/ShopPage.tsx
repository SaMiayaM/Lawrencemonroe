import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Lock, SlidersHorizontal } from 'lucide-react';
import { RELEASED_PRODUCTS } from '../data/products';
import { formatCurrency } from '../utils/format';
import { useCartStore } from '../store/cartStore';
import { brandAssets } from '../data/assets';

export const ShopPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'BLACK' | 'BONE' | 'AVAILABLE'>('ALL');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const { openRequestAccess } = useCartStore();

  const filteredProducts = useMemo(() => {
    let list = [...RELEASED_PRODUCTS];

    if (activeFilter === 'BLACK') {
      list = list.filter((p) => p.selectedColorDefault.toLowerCase().includes('black') || p.code.includes('BLK'));
    } else if (activeFilter === 'BONE') {
      list = list.filter((p) => p.selectedColorDefault.toLowerCase().includes('grey') || p.code.includes('GRY') || p.code.includes('BNE'));
    } else if (activeFilter === 'AVAILABLE') {
      list = list.filter((p) => p.status === 'ACTIVE');
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [activeFilter, sortBy]);

  return (
    <div className="min-h-screen bg-black text-bone pt-28 sm:pt-36 pb-24">
      {/* Background Archival Grid */}
      <div className="absolute inset-0 bg-archival-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Page Header */}
        <div className="border-b border-line pb-8 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-gold inline-block" />
                <span className="font-mono text-xs text-gold tracking-widest uppercase font-bold">
                  RELEASE 001 / CATALOG DOSSIER
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-bone uppercase">
                ACTIVE PIECES.
              </h1>
              <p className="font-utility text-xs sm:text-sm text-smoke max-w-lg">
                Exclusive limited allocation. All shorts constructed from 480GSM cotton with official insignia badges and raw hemline.
              </p>
            </div>

            {/* Release metadata counters */}
            <div className="flex items-center space-x-6 font-mono text-xs text-smoke">
              <div className="border border-line bg-graphite/40 px-3 py-2">
                <span className="text-smoke/60">ALLOCATED: </span>
                <span className="text-gold font-bold">{RELEASED_PRODUCTS.length} EDITIONS</span>
              </div>
              <div className="border border-line bg-graphite/40 px-3 py-2">
                <span className="text-smoke/60">STATUS: </span>
                <span className="text-bone">ACTIVE RELEASE</span>
              </div>
            </div>
          </div>

          {/* Filter and Sort Toolbar */}
          <div className="mt-10 pt-6 border-t border-line/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Minimal Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] text-smoke uppercase tracking-wider mr-2 hidden sm:inline">
                FILTER:
              </span>
              {(['ALL', 'BLACK', 'BONE', 'AVAILABLE'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors border ${
                    activeFilter === tab
                      ? 'border-gold bg-gold text-black font-bold'
                      : 'border-line bg-graphite/40 text-smoke hover:text-bone hover:border-smoke'
                  }`}
                >
                  {tab === 'BONE' ? 'HEATHER GREY' : tab}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-2 font-mono text-xs">
              <SlidersHorizontal size={13} className="text-gold" />
              <span className="text-smoke">SORT:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-black border border-line text-bone px-3 py-1.5 font-mono text-xs focus:border-gold focus:outline-none uppercase"
              >
                <option value="featured">FEATURED CURATION</option>
                <option value="price-asc">PRICE: LOW TO HIGH</option>
                <option value="price-desc">PRICE: HIGH TO LOW</option>
              </select>
            </div>
          </div>
        </div>

        {/* Released Products Grid: Editorial Asymmetry */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {filteredProducts.map((product) => {
            const isHeather = product.id === 'lm-shorts-002';
            const badgeSrc = isHeather ? brandAssets.blueBadge : brandAssets.whiteBadge;

            return (
              <div
                key={product.id}
                className="group bg-graphite/40 border border-line hover:border-gold transition-all duration-500 flex flex-col justify-between"
              >
                {/* Product Header Bar */}
                <div className="p-4 border-b border-line flex items-center justify-between font-mono text-[10px]">
                  <span className="text-gold tracking-widest font-bold">
                    SPEC: {product.code}
                  </span>
                  <span className="text-smoke bg-black/60 px-2 py-0.5 border border-line/40">
                    {product.release}
                  </span>
                </div>

                {/* Main Media Stage */}
                <Link to={`/shop/${product.slug}`} className="block relative aspect-[4/5] bg-black overflow-hidden">
                  <img
                    src={product.heroImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Official Pill Badge Stamp */}
                  <div className="absolute top-4 left-4 z-20 w-32 sm:w-36">
                    <img
                      src={badgeSrc}
                      alt="LawrenceMonroe"
                      className="w-full h-auto object-contain drop-shadow-md"
                    />
                  </div>

                  {/* Micro Detail Inset on Hover */}
                  <div className="absolute bottom-4 right-4 font-mono text-[10px] text-smoke bg-black/80 border border-line px-3 py-1.5 flex items-center space-x-1 group-hover:text-gold group-hover:border-gold transition-colors">
                    <span>INSPECT SPEC</span>
                    <ArrowUpRight size={13} />
                  </div>
                </Link>

                {/* Footer Product Details */}
                <div className="p-6 bg-black/60 border-t border-line space-y-4">
                  <div className="flex items-baseline justify-between">
                    <Link to={`/shop/${product.slug}`}>
                      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-bone group-hover:text-gold transition-colors uppercase tracking-tight">
                        {product.name}
                      </h2>
                    </Link>
                    <span className="font-mono text-lg sm:text-xl font-bold text-bone">
                      {formatCurrency(product.price)}
                    </span>
                  </div>

                  <p className="font-utility text-xs text-smoke leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      to={`/shop/${product.slug}`}
                      className="w-full bg-bone hover:bg-gold text-black py-3.5 px-6 font-mono text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>VIEW DOSSIER & ORDER</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unreleased Concept Archive Teaser Section */}
        <div className="border-t border-line pt-16 mt-16">
          <div className="bg-graphite border border-line p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 pointer-events-none opacity-5 font-display text-9xl font-black text-smoke">
              NEXT
            </div>

            <div className="max-w-2xl space-y-6 relative z-10">
              <div className="flex items-center space-x-2">
                <Lock size={14} className="text-archive-red" />
                <span className="font-mono text-xs text-archive-red tracking-widest uppercase font-bold">
                  ARCHIVE NEXT / UNRELEASED RESEARCH
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-bone uppercase tracking-tight">
                RELEASE 002 (SHIRT) & 003 (HEADWEAR).
              </h2>

              <p className="font-utility text-xs sm:text-sm text-smoke leading-relaxed">
                Future release garments remain locked in laboratory testing. Enrolled clients receive priority dispatch access prior to public allocation.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => openRequestAccess()}
                  className="bg-black border border-gold hover:bg-gold hover:text-black text-gold py-3.5 px-8 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center space-x-2"
                >
                  <Lock size={13} />
                  <span>REQUEST RELEASE ACCESS</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
