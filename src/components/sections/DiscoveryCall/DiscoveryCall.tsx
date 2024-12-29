import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '../../Button';
import { GridBackground } from '../../effects/GridBackground';
import { DiscoveryContent } from './DiscoveryContent';
import { FounderImage } from './FounderImage';

export function DiscoveryCall() {
  return (
    <section className="relative py-24 overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <DiscoveryContent />
          <FounderImage />
        </div>
      </div>
    </section>
  );
}