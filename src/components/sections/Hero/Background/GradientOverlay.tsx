import React from 'react';

export function GradientOverlay() {
  return (
    <div className="absolute inset-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900" />
      
      {/* Ambient gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />
      
      {/* Image overlay with reduced opacity */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center opacity-20"
        aria-hidden="true"
      />
    </div>
  );
}