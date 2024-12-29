import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface ProcessStepProps {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function ProcessStep({ icon: Icon, step, title, description, isLast }: ProcessStepProps) {
  return (
    <div className="relative">
      {!isLast && (
        <div className="absolute top-20 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent md:block hidden" />
      )}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <div className="text-cyan-400 font-display text-sm tracking-wider">Step {step}</div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-400 max-w-xs">{description}</p>
        </div>
      </div>
    </div>
  );
}