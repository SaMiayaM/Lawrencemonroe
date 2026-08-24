import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Printer, ShieldCheck } from 'lucide-react';
import { OrderResult } from '../../types';
import { formatCurrency } from '../../utils/format';

interface OrderSuccessModalProps {
  order: OrderResult;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-3xl bg-graphite border border-line p-6 sm:p-10 space-y-8 shadow-2xl relative"
      >
        {/* Top Gold Archival Hairline */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Success Header */}
        <div className="text-center space-y-3 border-b border-line pb-6">
          <div className="w-14 h-14 border border-gold mx-auto flex items-center justify-center text-gold bg-black">
            <Check size={26} strokeWidth={2.5} />
          </div>

          <div className="inline-block font-mono text-[10px] text-gold uppercase tracking-ultra border border-gold/40 px-3 py-0.5 bg-black">
            ORDER AUTHORIZED & SERIALIZED
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-bone uppercase tracking-tight">
            ALLOCATION CONFIRMED.
          </h2>

          <p className="font-utility text-xs sm:text-sm text-smoke max-w-md mx-auto">
            Your telemetry and shipping record has been sealed. A confirmation dispatch has been sent to{' '}
            <span className="text-bone font-mono">{order.customer.email}</span>.
          </p>
        </div>

        {/* Order Dossier Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-line bg-black/60 p-5 font-mono text-xs">
          <div className="space-y-2">
            <div className="text-smoke">ORDER SERIAL NUMBER:</div>
            <div className="text-gold font-bold text-sm sm:text-base">{order.orderId}</div>
            <div className="text-smoke/60 text-[10px]">PAYMENT REF: {order.paymentId}</div>
          </div>

          <div className="space-y-2">
            <div className="text-smoke">SHIPPING DESTINATION:</div>
            <div className="text-bone">
              {order.customer.firstName} {order.customer.lastName}
            </div>
            <div className="text-smoke/80 text-[11px]">
              {order.customer.address}, {order.customer.city}, {order.customer.postalCode}, {order.customer.country}
            </div>
          </div>
        </div>

        {/* Items List */}
        <div className="space-y-3">
          <div className="font-mono text-xs text-gold uppercase tracking-wider">
            SERIALIZED SPECIMENS
          </div>
          <div className="border border-line divide-y divide-line/40 bg-black">
            {order.items.map((item) => (
              <div key={item.cartItemId} className="p-3.5 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-12 bg-graphite border border-line overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <div className="text-bone font-bold">{item.name}</div>
                    <div className="text-smoke text-[10px]">
                      {item.code} • COLOR: {item.color} • SIZE: {item.size} • QTY: {item.quantity}
                    </div>
                  </div>
                </div>
                <div className="text-bone font-bold">
                  {formatCurrency(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total & Courier Note */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-line pt-4 font-mono text-xs">
          <div className="flex items-center space-x-2 text-smoke">
            <ShieldCheck size={14} className="text-gold" />
            <span>DISPATCH WITHIN 2–4 BUSINESS DAYS</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-smoke">TOTAL BILLED:</span>
            <span className="font-bold text-gold text-lg">{formatCurrency(order.totalAmount)}</span>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={handlePrint}
            className="border border-line bg-black hover:border-gold hover:text-gold text-bone py-3.5 px-6 font-mono text-xs tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
          >
            <Printer size={14} />
            <span>PRINT DOSSIER RECEIPT</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-bone hover:bg-gold text-black py-3.5 px-6 font-mono text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
          >
            <span>RETURN TO RELEASE 001</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
