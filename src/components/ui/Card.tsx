import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div 
      className={cn(
        'bg-black rounded-xl border border-gray-800',
        hover && 'transition-all duration-300 hover:border-cyan-500/50',
        className
      )}
    >
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}