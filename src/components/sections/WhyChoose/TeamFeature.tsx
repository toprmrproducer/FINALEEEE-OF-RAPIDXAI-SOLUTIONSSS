import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface TeamFeatureProps {
  icon: LucideIcon;
  team: string;
  title: string;
  description: string;
  className?: string;
}

export function TeamFeature({ icon: Icon, team, title, description, className }: TeamFeatureProps) {
  return (
    <div className={cn(
      "group relative p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800",
      "hover:border-cyan-500/50 transition-all duration-500",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
      
      <div className="relative">
        <div className="flex items-center space-x-3 mb-6">
          <Icon className="h-8 w-8 text-cyan-400" />
          <span className="font-display text-sm text-cyan-400 tracking-wider">{team}</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
          {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed mb-6">
          {description}
        </p>
      </div>
    </div>
  );
}