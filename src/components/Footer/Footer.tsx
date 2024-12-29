import React from 'react';
import { FooterNav } from './FooterNav';
import { SocialLinks } from './SocialLinks';
import { Logo } from '../Logo/Logo';

export function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="transform scale-75">
            <Logo />
          </div>
          
          <FooterNav />
          
          <SocialLinks />
          
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} RapidX.AI. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}