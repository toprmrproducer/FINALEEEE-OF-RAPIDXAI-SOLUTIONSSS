import React from 'react';

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Breathing animation overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent animate-pulse-slow" />
      
      {/* Radial gradients for ambient effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
    </div>
  );
}