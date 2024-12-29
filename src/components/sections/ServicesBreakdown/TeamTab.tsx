import React from 'react';
import { cn } from '../../../utils/cn';

interface TeamTabProps {
  team: string;
  isActive: boolean;
  onClick: () => void;
}

export function TeamTab({ team, isActive, onClick }: TeamTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-lg font-display text-sm tracking-wider transition-all duration-300",
        "border border-transparent",
        isActive ? 
          "bg-gradient-to-r from-cyan-500/20 to-transparent border-cyan-500/50 text-cyan-400" : 
          "hover:bg-cyan-500/10 text-gray-400 hover:text-cyan-400"
      )}
    >
      {team}
    </button>
  );
}