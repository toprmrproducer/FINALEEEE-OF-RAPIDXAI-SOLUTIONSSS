import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '../../Button';
import { TypewriterText } from '../../effects/TypewriterText';

export function DiscoveryContent() {
  return (
    <div className="flex-1 text-center md:text-left">
      <TypewriterText
        text="Ready to Automate YOUR Business? Let's Talk!"
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-cyan-300 text-transparent bg-clip-text mb-6"
        speed={50}
      />
      <TypewriterText
        text="Book a free Discovery Call to explore how RapidX.AI can transform your business with AI-powered Teams Alpha, Bravo, and Delta."
        className="text-xl text-gray-300 mb-8 max-w-2xl"
        delay={1000}
        speed={30}
      />
      <Button 
        size="lg"
        className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 font-medium tracking-wide text-lg py-6 px-8"
      >
        <Calendar className="w-6 h-6 mr-2" />
        Book My Discovery Call Now!
      </Button>
    </div>
  );
}