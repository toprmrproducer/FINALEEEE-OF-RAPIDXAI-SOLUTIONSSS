import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  animation?: 'bounce' | 'sway' | 'pulse';
}

export function AnimatedIcon({ icon: Icon, className, animation = 'bounce' }: AnimatedIconProps) {
  const animationClasses = {
    bounce: 'hover:animate-icon-bounce',
    sway: 'hover:animate-icon-sway',
    pulse: 'hover:animate-icon-pulse'
  };

  return (
    <Icon 
      className={cn(
        'transition-all duration-300',
        animationClasses[animation],
        className
      )}
    />
  );
}