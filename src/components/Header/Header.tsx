import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { Button } from '../Button';

export function Header() {
  return (
    <>
      {/* Announcement Strip */}
      <div className="fixed top-0 left-0 right-0 bg-cyan-500/10 backdrop-blur-sm border-b border-cyan-500/20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <p className="text-center text-sm text-cyan-400">
            <span className="font-medium">Limited Time Offer:</span>{' '}
            <a 
              href="https://calendly.com/shreyasrajsony11/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-cyan-300 transition-colors duration-300"
            >
              Book Your Free Business Audit (Valid until Jan 31, 2025)
            </a>{' '}
            →
          </p>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-16 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-cyan-950/30 backdrop-blur-xl border border-cyan-500/20 rounded-full px-6 py-3 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:border-cyan-500/30 transition-all duration-300">
          <div className="flex items-center space-x-8">
            <Link to="/" className="interactive">
              <Logo />
            </Link>
            
            <Navigation />

            <Button 
              size="sm" 
              className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/20"
              onClick={() => window.open('https://calendly.com/shreyasrajsony11/30min', '_blank')}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}