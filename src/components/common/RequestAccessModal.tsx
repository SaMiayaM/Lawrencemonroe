import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Lock } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export const RequestAccessModal: React.FC = () => {
  const { isRequestAccessOpen, closeRequestAccess, requestAccessCategory } = useCartStore();
  const [email, setEmail] = useState('');
  const [shirtSelected, setShirtSelected] = useState(true);
  const [hatSelected, setHatSelected] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Set category preselection if provided
  useEffect(() => {
    if (requestAccessCategory === 'SHIRT') {
      setShirtSelected(true);
      setHatSelected(false);
    } else if (requestAccessCategory === 'HEADWEAR') {
      setShirtSelected(false);
      setHatSelected(true);
    } else {
      setShirtSelected(true);
      setHatSelected(true);
    }
    setIsSubmitted(false);
    setEmail('');
  }, [requestAccessCategory, isRequestAccessOpen]);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isRequestAccessOpen) {
        closeRequestAccess();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRequestAccessOpen, closeRequestAccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isRequestAccessOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Request Access to Unreleased Archive"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeRequestAccess}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-graphite border border-line p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Top decorative archival hairline */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <Lock size={14} className="text-gold" />
                <span className="font-mono text-xs text-gold tracking-widest uppercase">
                  ARCHIVE NEXT / SPECIMEN ACCESS
                </span>
              </div>
              <button
                onClick={closeRequestAccess}
                className="text-smoke hover:text-bone p-1 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content Body */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full border border-gold mx-auto flex items-center justify-center text-gold">
                  <Check size={20} />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-bone uppercase">
                  ACCESS REQUESTED.
                </h3>
                <p className="font-mono text-xs text-smoke max-w-xs mx-auto leading-relaxed">
                  THE NEXT RELEASE WILL ARRIVE FIRST. YOUR TELEMETRY KEY HAS BEEN RECORDED FOR UNRELEASED ALLOCATIONS.
                </p>
                <button
                  onClick={closeRequestAccess}
                  className="mt-6 border border-line bg-black px-6 py-2.5 font-mono text-xs text-bone hover:border-gold hover:text-gold transition-colors tracking-widest uppercase"
                >
                  RETURN TO ARCHIVE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-bone tracking-tight uppercase">
                    REQUEST RELEASE ACCESS.
                  </h3>
                  <p className="font-utility text-xs sm:text-sm text-smoke leading-relaxed">
                    RECEIVE PRIVATE ALLOCATION ACCESS WHEN THE NEXT PIECE OPENS. PROTOCOL IS RESTRICTED TO ENROLLED CLIENTS.
                  </p>
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[11px] text-smoke uppercase tracking-wider">
                    CLIENT DISPATCH EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full bg-black border border-line px-4 py-3 font-mono text-xs text-bone placeholder:text-smoke/50 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                {/* Optional Category Interests */}
                <div className="space-y-2">
                  <label className="block font-mono text-[11px] text-smoke uppercase tracking-wider">
                    SPECIMEN OF INTEREST
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label
                      onClick={() => setShirtSelected(!shirtSelected)}
                      className={`cursor-pointer border p-3 flex items-center justify-between transition-colors ${
                        shirtSelected
                          ? 'border-gold bg-black text-bone'
                          : 'border-line bg-black/40 text-smoke'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="font-mono text-xs font-bold uppercase">SHIRT</div>
                        <div className="font-mono text-[9px] text-smoke">RELEASE 002</div>
                      </div>
                      <div
                        className={`w-4 h-4 border flex items-center justify-center ${
                          shirtSelected ? 'border-gold bg-gold text-black' : 'border-line'
                        }`}
                      >
                        {shirtSelected && <Check size={12} strokeWidth={3} />}
                      </div>
                    </label>

                    <label
                      onClick={() => setHatSelected(!hatSelected)}
                      className={`cursor-pointer border p-3 flex items-center justify-between transition-colors ${
                        hatSelected
                          ? 'border-gold bg-black text-bone'
                          : 'border-line bg-black/40 text-smoke'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="font-mono text-xs font-bold uppercase">HEADWEAR</div>
                        <div className="font-mono text-[9px] text-smoke">RELEASE 003</div>
                      </div>
                      <div
                        className={`w-4 h-4 border flex items-center justify-center ${
                          hatSelected ? 'border-gold bg-gold text-black' : 'border-line'
                        }`}
                      >
                        {hatSelected && <Check size={12} strokeWidth={3} />}
                      </div>
                    </label>
                  </div>
                </div>

                {/* CTA & Privacy */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-bone hover:bg-gold text-black py-3.5 px-6 font-mono text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <span>REQUEST ACCESS</span>
                  </button>
                  <p className="font-mono text-[10px] text-smoke/70 text-center tracking-wider">
                    RELEASE COMMUNICATION ONLY. PRIVATE ENROLLMENT.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
