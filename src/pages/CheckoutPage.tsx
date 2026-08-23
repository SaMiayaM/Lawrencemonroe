import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { ShippingForm } from '../components/checkout/ShippingForm';
import { SquarePaymentForm } from '../components/checkout/SquarePaymentForm';
import { OrderSuccessModal } from '../components/checkout/OrderSuccessModal';
import { OrderCustomerInfo, OrderResult } from '../types';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getSubtotal, clearCart } = useCartStore();

  const [customerInfo, setCustomerInfo] = useState<OrderCustomerInfo>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    suite: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: '',
    shippingOption: 'standard',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [completedOrder, setCompletedOrder] = useState<OrderResult | null>(null);

  const subtotal = getSubtotal();
  const shippingCost = customerInfo.shippingOption === 'express' ? 25.00 : 0.00;
  const estimatedTax = subtotal * 0.0825; // standard rate
  const total = subtotal + shippingCost + estimatedTax;

  const handleFieldChange = (field: keyof OrderCustomerInfo, value: any) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
    setErrorMessage(null);
  };

  const handlePaymentSuccess = (orderResult: any) => {
    setIsProcessing(false);
    setCompletedOrder(orderResult);
    clearCart();
  };

  const handlePaymentError = (errorMsg: string) => {
    setIsProcessing(false);
    setErrorMessage(errorMsg);
  };

  if (items.length === 0 && !completedOrder) {
    return (
      <div className="min-h-screen bg-black text-bone pt-36 pb-24 flex flex-col items-center justify-center p-6 text-center space-y-6">
        <div className="w-16 h-16 border border-line bg-graphite flex items-center justify-center text-smoke">
          <ShoppingBag size={28} />
        </div>
        <div className="space-y-2">
          <h1 className="font-display text-3xl font-bold uppercase">BAG IS CURRENTLY EMPTY</h1>
          <p className="font-mono text-xs text-smoke max-w-sm mx-auto">
            You must allocate at least one piece from Release 001 to proceed to checkout.
          </p>
        </div>
        <Link
          to="/shop"
          className="border border-gold bg-black px-8 py-3.5 font-mono text-xs font-bold text-bone hover:bg-gold hover:text-black uppercase tracking-widest transition-colors"
        >
          EXPLORE THE PIECES
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-bone pt-28 sm:pt-36 pb-24">
      {/* Background Archival Grid */}
      <div className="absolute inset-0 bg-archival-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Top Minimal Checkout Header */}
        <div className="flex items-center justify-between border-b border-line pb-6 mb-12">
          <Link
            to="/shop"
            className="flex items-center space-x-2 font-mono text-xs text-smoke hover:text-gold transition-colors uppercase tracking-wider"
          >
            <ArrowLeft size={14} />
            <span>RETURN TO SHOP</span>
          </Link>

          <div className="text-center">
            <h1 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-bone uppercase">
              CHECKOUT TELEMETRY
            </h1>
          </div>

          <div className="font-mono text-[10px] text-smoke hidden sm:inline-block">
            SQUARE ENCRYPTION PROTOCOL
          </div>
        </div>

        {/* Error Alert if any */}
        {errorMessage && (
          <div className="mb-8 p-4 bg-archive-red/20 border border-archive-red text-bone font-mono text-xs flex items-center space-x-3">
            <AlertCircle size={16} className="text-archive-red flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* 2-Column Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Customer & Shipping & Square Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-graphite/40 border border-line p-6 sm:p-8 space-y-8">
              <ShippingForm info={customerInfo} onChange={handleFieldChange} />
              
              <SquarePaymentForm
                items={items}
                customerInfo={customerInfo}
                isProcessing={isProcessing}
                onPaymentSuccess={handlePaymentSuccess}
                onPaymentError={handlePaymentError}
              />
            </div>
          </div>

          {/* Right Column: Sticky Order Summary (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <OrderSummary
              items={items}
              subtotal={subtotal}
              shippingCost={shippingCost}
              tax={estimatedTax}
              total={total}
            />
          </div>
        </div>
      </div>

      {/* Completed Order Confirmation Modal */}
      {completedOrder && (
        <OrderSuccessModal
          order={completedOrder}
          onClose={() => {
            setCompletedOrder(null);
            navigate('/');
          }}
        />
      )}
    </div>
  );
};
