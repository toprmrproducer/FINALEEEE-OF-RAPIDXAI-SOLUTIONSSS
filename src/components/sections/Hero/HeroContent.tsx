import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '../../Button';
import { TypewriterText } from '../../effects/TypewriterText';

export function HeroContent() {
  return (
    <div className="mt-12 space-y-12">
      <TypewriterText
        text="Automate YOUR tomorrow, TODAY!"
        className="font-display text-2xl md:text-4xl text-gray-300 max-w-3xl mx-auto font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white tracking-wide"
        delay={1500}
        speed={80}
      />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[fadeIn_0.5s_ease-out_2.5s_forwards]">
        <Button 
          size="lg" 
          className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 font-medium tracking-wide text-lg py-6 px-8"
        >
          Book a Discovery Call
          <Sparkles className="ml-2 h-6 w-6" />
        </Button>
        <Button 
          variant="secondary" 
          size="lg" 
          className="w-full sm:w-auto font-medium tracking-wide text-lg py-6 px-8"
        >
          Learn More About Our Teams
        </Button>
      </div>
    </div>
  );
}