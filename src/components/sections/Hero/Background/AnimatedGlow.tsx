import React from 'react';

export function AnimatedGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Subtle pulse overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent animate-pulse-slow" />
    </div>
  );
}