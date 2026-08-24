import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getProductBySlug, RELEASED_PRODUCTS } from '../data/products';
import { ProductMediaStage } from '../components/product/ProductMediaStage';
import { ProductPurchasingPanel } from '../components/product/ProductPurchasingPanel';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = slug ? getProductBySlug(slug) : RELEASED_PRODUCTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-bone flex flex-col items-center justify-center p-6 space-y-4">
        <h1 className="font-display text-3xl font-bold uppercase">SPECIMEN NOT FOUND</h1>
        <p className="font-mono text-xs text-smoke">The requested garment record does not exist in Release 001.</p>
        <button
          onClick={() => navigate('/shop')}
          className="border border-gold bg-black px-6 py-3 font-mono text-xs text-gold uppercase"
        >
          RETURN TO SHOP
        </button>
      </div>
    );
  }

  const alternateProduct = RELEASED_PRODUCTS.find((p) => p.id !== product.id);

  return (
    <div className="min-h-screen bg-black text-bone pt-28 sm:pt-36 pb-24">
      {/* Background Archival Grid */}
      <div className="absolute inset-0 bg-archival-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-8 sm:mb-12 font-mono text-xs text-smoke">
          <Link
            to="/shop"
            className="flex items-center space-x-2 text-smoke hover:text-gold transition-colors uppercase tracking-wider"
          >
            <ArrowLeft size={14} />
            <span>RETURN TO CATALOG</span>
          </Link>

          <div className="flex items-center space-x-3">
            <span>RELEASE 001</span>
            <span className="text-gold">•</span>
            <span className="text-bone font-bold">{product.code}</span>
          </div>
        </div>

        {/* Main Product Layout: Media Stage (Left) & Purchasing Panel (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Media Stage with dynamic Shorts Focus and Annotations (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <ProductMediaStage productId={product.id} productName={product.name} />

            {/* Curatorial Garment Note below stage */}
            <div className="border border-line bg-graphite/30 p-6 space-y-2">
              <div className="font-mono text-[10px] text-gold tracking-widest uppercase font-bold">
                ARCHIVAL SPECIFICATION NOTE
              </div>
              <p className="font-serif italic text-base sm:text-lg text-smoke leading-relaxed">
                “Engineered to maintain strict structural lines regardless of physical cadence. The heavy 480GSM weight creates a distinct drape that resists fabric breakdown over time.”
              </p>
            </div>
          </div>

          {/* Right Column: Purchasing Panel (5 cols) */}
          <div className="lg:col-span-5">
            <ProductPurchasingPanel product={product} />
          </div>
        </div>

        {/* Alternate Colorway Recommendation / Dossier Link */}
        {alternateProduct && (
          <div className="mt-24 pt-16 border-t border-line">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div className="space-y-1">
                <div className="font-mono text-xs text-gold uppercase tracking-widest">
                  COMPLEMENTARY SPECIMEN
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-bone uppercase">
                  EXPLORE {alternateProduct.name}
                </h3>
              </div>
              <Link
                to={`/shop/${alternateProduct.slug}`}
                className="font-mono text-xs text-smoke hover:text-gold flex items-center space-x-1 uppercase"
              >
                <span>VIEW DOSSIER</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="bg-graphite/40 border border-line p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-4 aspect-[4/3] bg-black border border-line overflow-hidden">
                <img
                  src={alternateProduct.heroImage}
                  alt={alternateProduct.name}
                  className="w-full h-full object-cover grayscale contrast-115 hover:scale-105 transition-transform"
                />
              </div>
              <div className="sm:col-span-8 space-y-3">
                <div className="font-mono text-xs text-gold">{alternateProduct.code}</div>
                <h4 className="font-display text-xl font-bold text-bone">{alternateProduct.name}</h4>
                <p className="font-utility text-xs text-smoke leading-relaxed">{alternateProduct.shortDescription}</p>
                <Link
                  to={`/shop/${alternateProduct.slug}`}
                  className="inline-block bg-bone hover:bg-gold text-black py-2.5 px-5 font-mono text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  SWITCH TO {alternateProduct.name}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
