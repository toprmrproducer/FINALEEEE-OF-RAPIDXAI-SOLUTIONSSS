import React from 'react';

const navLinks = [
  { label: 'Team Alpha', href: '#alpha' },
  { label: 'Team Bravo', href: '#bravo' },
  { label: 'Team Delta', href: '#delta' },
  { label: 'Contact Us', href: '#contact' },
];

export function FooterNav() {
  return (
    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
      {navLinks.map((link, index) => (
        <React.Fragment key={link.href}>
          <a
            href={link.href}
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
          >
            {link.label}
          </a>
          {index < navLinks.length - 1 && (
            <span className="text-gray-700 hidden md:inline">|</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}