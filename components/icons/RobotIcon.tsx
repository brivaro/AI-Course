
import React from 'react';

export const RobotIcon: React.FC<{ className?: string }> = ({ className }) => (
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
        <rect width="16" height="12" x="4" y="4" rx="2" />
        <path d="M12 16v4" />
        <path d="M8 20h8" />
        <path d="M8.5 4V2" />
        <path d="M15.5 4V2" />
        <path d="M9 10h0" />
        <path d="M15 10h0" />
    </svg>
);
