import React, { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  glowOpacity?: number;
  glowDuration?: number;
  floatDistance?: number;
  scaleAmount?: number;
}

export function InteractiveCard({
  children,
  className,
  glowColor = '#00FFFF',
  glowOpacity = 0.5,
  glowDuration = 1.5,
  floatDistance = 8,
  scaleAmount = 1.05,
}: InteractiveCardProps) {
  const glowStyle = {
    '--glow-color': glowColor,
    '--glow-opacity': glowOpacity,
    '--glow-duration': `${glowDuration}s`,
    '--float-distance': `${floatDistance}px`,
    '--scale-amount': scaleAmount,
  } as React.CSSProperties;

  return (
    <div 
      className={cn(
        'relative group',
        'transition-all duration-500 ease-in-out',
        'hover:-translate-y-[var(--float-distance)] hover:scale-[var(--scale-amount)]',
        className
      )}
      style={glowStyle}
    >
      {/* Glow Effect */}
      <div 
        className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `${glowColor}`,
          filter: 'blur(15px)',
          opacity: glowOpacity,
          transition: `opacity ${glowDuration}s ease-in-out`,
        }}
      />
      
      {/* Content */}
      <div className="relative bg-black rounded-lg border border-gray-800 overflow-hidden">
        {children}
      </div>
    </div>
  );
}