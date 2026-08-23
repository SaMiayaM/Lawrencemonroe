import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Ruler, ShieldCheck, Check, ArrowRight, Truck } from 'lucide-react';
import { Product, Size } from '../../types';
import { ProductAccordion } from './ProductAccordion';
import { formatCurrency } from '../../utils/format';
import { useCartStore } from '../../store/cartStore';

interface ProductPurchasingPanelProps {
  product: Product;
}

export const ProductPurchasingPanel: React.FC<ProductPurchasingPanelProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<string>(product.selectedColorDefault);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const navigate = useNavigate();
  const { addItem, openCart, openSizeGuide } = useCartStore();

  const handleColorChange = (colorName: string) => {
    setSelectedColor(colorName);
    // If the color matches the alternate product, we can seamlessly navigate to its page
    if (colorName.toLowerCase().includes('bone') && product.slug === 'lm-shorts-001') {
      navigate('/shop/lm-shorts-002');
    } else if (colorName.toLowerCase().includes('black') && product.slug === 'lm-shorts-002') {
      navigate('/shop/lm-shorts-001');
    }
  };

  const handleSizeSelect = (size: Size) => {
    setSelectedSize(size);
    setSizeError(false);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }

    setIsAdded(true);
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      code: product.code,
      color: selectedColor,
      size: selectedSize,
      price: product.price,
      image: product.cutoutImage,
      maxStock: product.stockCount,
      quantity: 1,
    });

    setTimeout(() => {
      setIsAdded(false);
      openCart();
    }, 450);
  };

  const accordionItems = [
    {
      id: 'story',
      title: '1. STORY & DESIGN CONCEPT',
      content: product.story,
    },
    {
      id: 'fit',
      title: '2. SILHOUETTE & FIT SPEC',
      content: product.fit,
    },
    {
      id: 'construction',
      title: '3. CRAFT & CONSTRUCTION',
      content: product.construction,
    },
    {
      id: 'fabric',
      title: '4. 480GSM TEXTILE & CARE',
      content: product.fabricAndCare,
    },
    {
      id: 'shipping',
      title: '5. SHIPPING & RETURNS',
      content: product.shippingAndReturns,
    },
  ];

  return (
    <div className="space-y-8 bg-graphite/40 border border-line p-6 sm:p-8 lg:p-10 sticky top-28">
      {/* 1. Release Label & Code Header */}
      <div className="space-y-1 border-b border-line pb-4">
        <div className="flex items-center justify-between font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-gold" />
            <span className="text-gold uppercase tracking-widest font-bold">
              {product.release}
            </span>
          </div>
          <span className="text-smoke">SPEC: {product.code}</span>
        </div>

        {/* 3. Product Name */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-bone tracking-tight uppercase pt-2">
          {product.name}
        </h1>

        {/* 4. Price */}
        <div className="font-mono text-2xl sm:text-3xl font-bold text-bone pt-1">
          {formatCurrency(product.price)}
        </div>
      </div>

      {/* 5. Short Description */}
      <p className="font-utility text-xs sm:text-sm text-smoke leading-relaxed">
        {product.shortDescription}
      </p>

      {/* 6. Color Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-smoke uppercase tracking-wider">COLORWAY:</span>
          <span className="text-bone font-bold uppercase">{selectedColor}</span>
        </div>

        <div className="flex space-x-3">
          {product.colors.map((color) => {
            const isSelected = selectedColor === color.name;
            return (
              <button
                key={color.name}
                onClick={() => handleColorChange(color.name)}
                className={`group flex items-center space-x-2.5 px-3 py-2 border transition-all duration-200 ${
                  isSelected
                    ? 'border-gold bg-black text-bone ring-1 ring-gold'
                    : 'border-line bg-graphite text-smoke hover:border-smoke'
                }`}
                aria-label={`Select color ${color.name}`}
              >
                <span
                  className="w-4 h-4 rounded-none border"
                  style={{
                    backgroundColor: color.hex,
                    borderColor: color.borderHex || '#303030',
                  }}
                />
                <span className="font-mono text-xs uppercase font-medium">
                  {color.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 7. Size Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-smoke uppercase tracking-wider">SELECT SIZE:</span>
          <button
            onClick={openSizeGuide}
            className="text-gold hover:text-bone flex items-center space-x-1 font-mono text-xs transition-colors"
          >
            <Ruler size={13} />
            <span className="underline decoration-gold underline-offset-4">SIZE GUIDE</span>
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2.5">
          {product.sizes.map((sizeObj) => {
            const isSelected = selectedSize === sizeObj.size;
            return (
              <button
                key={sizeObj.size}
                disabled={!sizeObj.available}
                onClick={() => handleSizeSelect(sizeObj.size)}
                className={`py-3.5 border font-mono text-xs font-bold transition-all duration-200 relative ${
                  isSelected
                    ? 'border-gold bg-black text-gold ring-1 ring-gold'
                    : sizeObj.available
                    ? 'border-line bg-graphite/80 text-bone hover:border-gold hover:text-gold'
                    : 'border-line/30 bg-black/40 text-smoke/30 cursor-not-allowed line-through'
                }`}
                aria-label={`Size ${sizeObj.size} ${sizeObj.available ? 'available' : 'unavailable'}`}
              >
                <span>{sizeObj.size}</span>
                {isSelected && (
                  <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-gold" />
                )}
              </button>
            );
          })}
        </div>

        {/* Size Error Feedback */}
        {sizeError && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[11px] text-archive-red font-bold uppercase tracking-wider pt-1"
          >
            SELECT A SIZE TO CONTINUE.
          </motion.div>
        )}
      </div>

      {/* 8. Inventory Note */}
      <div className="border border-line/60 bg-black/50 p-3.5 space-y-1.5 font-mono text-[11px]">
        <div className="flex items-center justify-between">
          <span className="text-smoke">PRODUCTION ALLOCATION:</span>
          <span className="text-gold font-bold">LIMITED PRODUCTION RUN</span>
        </div>
        <div className="flex items-center justify-between text-smoke/80">
          <span>INVENTORY DISPATCH:</span>
          <span className="text-bone">SHIPS IN 2–4 BUSINESS DAYS</span>
        </div>
      </div>

      {/* 9. Add to Cart Button */}
      <div className="space-y-3">
        <button
          onClick={handleAddToCart}
          className="w-full relative group overflow-hidden bg-bone hover:bg-gold text-black py-4 px-6 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          {/* Animated Gold Motion Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

          {isAdded ? (
            <span className="flex items-center space-x-2">
              <Check size={16} />
              <span>ADDED TO BAG</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2">
              <span>ADD TO BAG</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </button>

        {/* 10. Shipping Line Guarantee */}
        <div className="flex items-center justify-center space-x-4 font-mono text-[10px] text-smoke pt-1">
          <div className="flex items-center space-x-1">
            <Truck size={12} className="text-gold" />
            <span>COMPLIMENTARY COURIER</span>
          </div>
          <span className="text-gold">•</span>
          <div className="flex items-center space-x-1">
            <ShieldCheck size={12} className="text-gold" />
            <span>SERIALIZED PACKAGING</span>
          </div>
        </div>
      </div>

      {/* 12. Accordions */}
      <div className="pt-4">
        <ProductAccordion items={accordionItems} />
      </div>
    </div>
  );
};
