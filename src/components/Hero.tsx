import React from 'react';
import { Button } from './Button';
import { Bot, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Bot className="w-12 h-12 text-cyan-400" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            RapidX<span className="text-cyan-400">.AI</span>
          </h1>
        </div>

        <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          "Automate YOUR tomorrow, TODAY!"
          <span className="block text-sm mt-2 text-gray-400">- Shreyas Raj (Founder and CEO RapidX.AI)</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto">
            Get Started
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}