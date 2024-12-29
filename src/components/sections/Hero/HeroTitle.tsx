import React from 'react';
import { Logo } from '../../Logo/Logo';
import { TypewriterText } from '../../effects/TypewriterText';
import { RotatingText } from './RotatingText';

export function HeroTitle() {
  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="transform scale-[3]">
        <Logo />
      </div>
      <div className="space-y-6">
        <RotatingText />
      </div>
    </div>
  );
}