import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavDropdownProps {
  label: string;
  items: Array<{
    label: string;
    to: string;
  }>;
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  return (
    <div className="relative group">
      <button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 hover:bg-clip-text transition-all duration-300">
        {label}
        <ChevronDown className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
      </button>
      
      <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="bg-black/90 backdrop-blur-xl border border-gray-800/50 rounded-xl p-2 shadow-2xl shadow-cyan-500/10">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="block py-2 px-3 text-sm text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 hover:bg-clip-text transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}