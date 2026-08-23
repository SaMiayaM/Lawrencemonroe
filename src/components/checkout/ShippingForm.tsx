import React from 'react';
import { OrderCustomerInfo } from '../../types';

interface ShippingFormProps {
  info: OrderCustomerInfo;
  onChange: (field: keyof OrderCustomerInfo, value: any) => void;
}

export const ShippingForm: React.FC<ShippingFormProps> = ({ info, onChange }) => {
  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 border-b border-line pb-2">
          <span className="w-1.5 h-1.5 bg-gold" />
          <span className="font-mono text-xs text-gold uppercase tracking-widest font-bold">
            1. CONTACT INFORMATION
          </span>
        </div>

        <div>
          <label className="block font-mono text-[11px] text-smoke uppercase tracking-wider mb-1">
            CLIENT DISPATCH EMAIL *
          </label>
          <input
            type="email"
            required
            value={info.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="client@domain.com"
            className="w-full bg-black border border-line px-4 py-3 font-mono text-xs text-bone placeholder:text-smoke/40 focus:border-gold focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Shipping Address */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center space-x-2 border-b border-line pb-2">
          <span className="w-1.5 h-1.5 bg-gold" />
          <span className="font-mono text-xs text-gold uppercase tracking-widest font-bold">
            2. DELIVERY ADDRESS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-mono text-[11px] text-smoke uppercase tracking-wider mb-1">
              FIRST NAME *
            </label>
            <input
              type="text"
              required
              value={info.firstName}
              onChange={(e) => onChange('firstName', e.target.value)}
              placeholder="First Name"
              className="w-full bg-black border border-line px-4 py-3 font-mono text-xs text-bone placeholder:text-smoke/40 focus:border-gold focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block font-mono text-[11px] text-smoke uppercase tracking-wider mb-1">
              LAST NAME *
            </label>
            <input
              type="text"
              required
              value={info.lastName}
              onChange={(e) => onChange('lastName', e.target.value)}
              placeholder="Last Name"
              className="w-full bg-black border border-line px-4 py-3 font-mono text-xs text-bone placeholder:text-smoke/40 focus:border-gold focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block font-mono text-[11px] text-smoke uppercase tracking-wider mb-1">
            STREET ADDRESS *
          </label>
          <input
            type="text"
            required
            value={info.address}
            onChange={(e) => onChange('address', e.target.value)}
            placeholder="Street Address, Apt / Suite"
            className="w-full bg-black border border-line px-4 py-3 font-mono text-xs text-bone placeholder:text-smoke/40 focus:border-gold focus:outline-none transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block font-mono text-[11px] text-smoke uppercase tracking-wider mb-1">
              CITY / LOCALITY *
            </label>
            <input
              type="text"
              required
              value={info.city}
              onChange={(e) => onChange('city', e.target.value)}
              placeholder="City"
              className="w-full bg-black border border-line px-4 py-3 font-mono text-xs text-bone placeholder:text-smoke/40 focus:border-gold focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block font-mono text-[11px] text-smoke uppercase tracking-wider mb-1">
              POSTAL / ZIP CODE *
            </label>
            <input
              type="text"
              required
              value={info.postalCode}
              onChange={(e) => onChange('postalCode', e.target.value)}
              placeholder="Postal Code"
              className="w-full bg-black border border-line px-4 py-3 font-mono text-xs text-bone placeholder:text-smoke/40 focus:border-gold focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block font-mono text-[11px] text-smoke uppercase tracking-wider mb-1">
              DESTINATION REGION *
            </label>
            <input
              type="text"
              required
              value={info.country}
              onChange={(e) => onChange('country', e.target.value)}
              placeholder="Country / Territory"
              className="w-full bg-black border border-line px-4 py-3 font-mono text-xs text-bone placeholder:text-smoke/40 focus:border-gold focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Shipping Courier Method */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center space-x-2 border-b border-line pb-2">
          <span className="w-1.5 h-1.5 bg-gold" />
          <span className="font-mono text-xs text-gold uppercase tracking-widest font-bold">
            3. COURIER METHOD
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label
            onClick={() => onChange('shippingOption', 'standard')}
            className={`p-4 border cursor-pointer transition-colors flex items-center justify-between ${
              info.shippingOption === 'standard'
                ? 'border-gold bg-black text-bone ring-1 ring-gold'
                : 'border-line bg-graphite/40 text-smoke'
            }`}
          >
            <div className="space-y-1">
              <div className="font-mono text-xs font-bold uppercase">STANDARD PRIORITY</div>
              <div className="font-mono text-[10px] text-smoke">2–4 BUSINESS DAYS</div>
            </div>
            <span className="font-mono text-xs text-gold font-bold">FREE</span>
          </label>

          <label
            onClick={() => onChange('shippingOption', 'express')}
            className={`p-4 border cursor-pointer transition-colors flex items-center justify-between ${
              info.shippingOption === 'express'
                ? 'border-gold bg-black text-bone ring-1 ring-gold'
                : 'border-line bg-graphite/40 text-smoke'
            }`}
          >
            <div className="space-y-1">
              <div className="font-mono text-xs font-bold uppercase">EXPEDITED COURIER</div>
              <div className="font-mono text-[10px] text-smoke">1–2 BUSINESS DAYS</div>
            </div>
            <span className="font-mono text-xs text-bone font-bold">$25.00</span>
          </label>
        </div>
      </div>
    </div>
  );
};
