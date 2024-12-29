import React from 'react';
import { GradientOverlay } from './GradientOverlay';
import { AnimatedGlow } from './AnimatedGlow';

export function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <GradientOverlay />
      <AnimatedGlow />
    </div>
  );
}