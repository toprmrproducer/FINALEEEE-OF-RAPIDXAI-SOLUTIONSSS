import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { ServicesContent } from './ServicesContent';
import { GridBackground } from '../../effects/GridBackground';

export function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <GridBackground />
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Our Services"
          gradient
        />
        <ServicesContent />
      </div>
    </section>
  );
}