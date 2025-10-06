import React from 'react';
import { RobotIcon } from './icons/RobotIcon';

const Particle: React.FC<{ style: React.CSSProperties }> = ({ style }) => {
    return (
        <div className="absolute text-cyan-500/10 animate-float" style={style}>
            <RobotIcon className="w-full h-full" />
        </div>
    );
};

export const BackgroundParticles: React.FC = () => {
    const particleCount = 20;
    const particles = Array.from({ length: particleCount }).map((_, i) => {
        const size = Math.random() * 80 + 20; // size between 20px and 100px
        const goesDown = Math.random() > 0.5;

        const style: React.CSSProperties = {
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 20}s`, // duration 20s to 40s
            animationDelay: `${Math.random() * 20}s`,
        };
        
        if (goesDown) {
            style.top = '-150px';
            style.animationDirection = 'reverse';
        } else {
            style.bottom = '-150px';
        }

        return <Particle key={i} style={style} />;
    });

    return <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">{particles}</div>;
};