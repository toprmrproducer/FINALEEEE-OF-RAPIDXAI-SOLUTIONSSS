import React from 'react';
import { TypewriterText } from '../../effects/TypewriterText';

export function FounderImage() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl opacity-50 group-hover:opacity-100 transition duration-300 blur" />
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
          alt="Shreyas Raj"
          className="w-72 h-72 object-cover rounded-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-2xl">
          <TypewriterText
            text="Shreyas Raj"
            className="text-white font-semibold"
            speed={50}
          />
          <TypewriterText
            text="Founder & CEO of RapidX.AI"
            className="text-cyan-400 text-sm"
            delay={500}
            speed={30}
          />
        </div>
      </div>
    </div>
  );
}