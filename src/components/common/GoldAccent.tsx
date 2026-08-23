import React from 'react';

interface GoldLineProps {
  className?: string;
  vertical?: boolean;
}

export const GoldLine: React.FC<GoldLineProps> = ({ className = '', vertical = false }) => {
  if (vertical) {
    return <div className={`w-[1px] bg-gold/50 ${className}`} />;
  }
  return <div className={`h-[1px] bg-gold/50 ${className}`} />;
};

interface EditionStampProps {
  code: string;
  label?: string;
  className?: string;
}

export const EditionStamp: React.FC<EditionStampProps> = ({ code, label = 'EDITION', className = '' }) => {
  return (
    <div className={`inline-flex items-center space-x-1.5 font-mono text-[9px] border border-gold/40 bg-black/60 px-2 py-0.5 text-gold tracking-widest uppercase ${className}`}>
      <span className="w-1 h-1 bg-gold rounded-full" />
      <span>{label} [{code}]</span>
    </div>
  );
};
