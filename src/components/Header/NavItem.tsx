import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItemProps {
  label: string;
  hasDropdown?: boolean;
}

export function NavItem({ label, hasDropdown = false }: NavItemProps) {
  return (
    <div className="relative group">
      <button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 hover:bg-clip-text transition-all duration-300">
        {label}
        {hasDropdown && (
          <ChevronDown className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
        )}
      </button>
      
      {hasDropdown && (
        <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-black/90 backdrop-blur-xl border border-gray-800/50 rounded-xl p-2 shadow-2xl shadow-cyan-500/10">
            <div className="py-1 px-2 text-sm text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 hover:bg-clip-text cursor-pointer">
              Option 1
            </div>
            <div className="py-1 px-2 text-sm text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 hover:bg-clip-text cursor-pointer">
              Option 2
            </div>
          </div>
        </div>
      )}
    </div>
  );
}