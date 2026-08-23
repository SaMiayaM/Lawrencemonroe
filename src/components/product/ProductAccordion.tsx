import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: string | string[];
}

interface ProductAccordionProps {
  items: AccordionItem[];
}

export const ProductAccordion: React.FC<ProductAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="border-t border-line divide-y divide-line/60">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-3">
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-gold py-1"
              aria-expanded={isOpen}
            >
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-bone group-hover:text-gold transition-colors">
                {item.title}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-smoke group-hover:text-gold transition-colors"
              >
                <ChevronDown size={14} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-2 text-xs text-smoke space-y-2 font-utility">
                    {Array.isArray(item.content) ? (
                      <ul className="space-y-1.5 list-none">
                        {item.content.map((line, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-gold font-mono text-[10px] mt-0.5">•</span>
                            <span className="text-bone/80 leading-relaxed">{line}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="leading-relaxed text-bone/80">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
