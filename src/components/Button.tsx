import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'interactive inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400',
        {
          'bg-cyan-500 text-white hover:bg-cyan-600': variant === 'primary',
          'border border-cyan-500 text-cyan-500 hover:bg-cyan-950': variant === 'secondary',
          'h-8 px-4 text-sm': size === 'sm',
          'h-10 px-6 text-base': size === 'md',
          'h-12 px-8 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
}