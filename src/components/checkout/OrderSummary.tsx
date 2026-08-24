import React from 'react';
import { CartItem } from '../../types';
import { formatCurrency } from '../../utils/format';
import { ShieldCheck, Truck } from 'lucide-react';

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  subtotal,
  shippingCost,
  tax,
  total
}) => {
  return (
    <div className="bg-graphite/50 border border-line p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between border-b border-line pb-4 font-mono text-xs">
        <span className="text-gold uppercase tracking-widest font-bold">ORDER SPECIFICATION</span>
        <span className="text-smoke">[{items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'}]</span>
      </div>

      {/* Item List */}
      <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
        {items.map((item) => (
          <div
            key={item.cartItemId}
            className="flex items-center space-x-4 border-b border-line/40 pb-4 last:border-0 last:pb-0"
          >
            {/* Thumbnail */}
            <div className="w-16 h-20 bg-black border border-line/60 overflow-hidden flex-shrink-0 relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover grayscale brightness-95"
              />
              <div className="absolute top-1 left-1 font-mono text-[8px] bg-black/80 px-1 text-gold">
                {item.size}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 space-y-1">
              <div className="font-mono text-[9px] text-smoke">{item.code}</div>
              <h4 className="font-display text-sm font-bold text-bone leading-tight">
                {item.name}
              </h4>
              <div className="font-mono text-[10px] text-smoke">
                COLOR: {item.color} • QTY: {item.quantity}
              </div>
            </div>

            {/* Price */}
            <div className="font-mono text-xs font-bold text-bone">
              {formatCurrency(item.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      {/* Financial Breakdown */}
      <div className="border-t border-line pt-4 space-y-2 font-mono text-xs">
        <div className="flex items-center justify-between text-smoke">
          <span>SUBTOTAL</span>
          <span className="text-bone">{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between text-smoke">
          <span>SHIPPING (CARBON-NEUTRAL COURIER)</span>
          <span className="text-gold">
            {shippingCost === 0 ? 'COMPLIMENTARY' : formatCurrency(shippingCost)}
          </span>
        </div>

        <div className="flex items-center justify-between text-smoke">
          <span>ESTIMATED TAX</span>
          <span className="text-bone">{formatCurrency(tax)}</span>
        </div>

        <div className="flex items-center justify-between font-mono text-sm pt-3 border-t border-line/60">
          <span className="font-bold text-bone uppercase tracking-wider">TOTAL</span>
          <span className="font-bold text-gold text-lg">{formatCurrency(total)}</span>
        </div>
      </div>

      {/* Assurance Notes */}
      <div className="border-t border-line pt-4 space-y-2 font-mono text-[10px] text-smoke">
        <div className="flex items-center space-x-2">
          <ShieldCheck size={13} className="text-gold" />
          <span>SQUARE ENCRYPTED TRANSACTION</span>
        </div>
        <div className="flex items-center space-x-2">
          <Truck size={13} className="text-gold" />
          <span>SHIPS IN 2–4 BUSINESS DAYS WITH SIGNATURE</span>
        </div>
      </div>
    </div>
  );
};
