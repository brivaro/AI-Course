
import React from 'react';

export const ChipIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 3v2" />
        <path d="M12 3v2" />
        <path d="M17 3v2" />
        <path d="M3 7h2" />
        <path d="M3 12h2" />
        <path d="M3 17h2" />
        <path d="M21 7h-2" />
        <path d="M21 12h-2" />
        <path d="M21 17h-2" />
        <path d="M7 21v-2" />
        <path d="M12 21v-2" />
        <path d="M17 21v-2" />
    </svg>
);
