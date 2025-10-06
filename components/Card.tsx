import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10 ${className}`}
    >
      {children}
    </div>
  );
};