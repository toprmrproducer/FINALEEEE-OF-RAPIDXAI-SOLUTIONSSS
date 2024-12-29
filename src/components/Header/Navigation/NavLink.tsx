import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 hover:bg-clip-text transition-all duration-300"
    >
      {children}
    </Link>
  );
}