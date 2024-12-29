import React from 'react';
import { cn } from '../../utils/cn';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg group-hover:animate-pulse" />
      
      {/* Card content */}
      <div className={cn(
        "relative bg-black rounded-2xl border border-gray-800 transition-all duration-300",
        "group-hover:border-cyan-500/50",
        className
      )}>
        {children}
      </div>
    </div>
  );
}