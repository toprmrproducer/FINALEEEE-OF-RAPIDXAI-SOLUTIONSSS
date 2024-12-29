import React from 'react';
import { InteractiveCard } from './InteractiveCard';
import { Sparkles } from 'lucide-react';

export function InteractiveCardDemo() {
  return (
    <div className="grid md:grid-cols-3 gap-8 p-8">
      {/* Example Card 1 */}
      <InteractiveCard>
        <div className="p-6 space-y-4">
          <Sparkles className="w-8 h-8 text-cyan-400" />
          <h3 className="text-xl font-bold text-white">Interactive Card</h3>
          <p className="text-gray-400">
            Hover over this card to see smooth animations including float, glow, and scale effects.
          </p>
        </div>
      </InteractiveCard>

      {/* Example Card 2 - Custom Colors */}
      <InteractiveCard
        glowColor="#FF00FF"
        glowOpacity={0.4}
        floatDistance={10}
      >
        <div className="p-6 space-y-4">
          <Sparkles className="w-8 h-8 text-pink-400" />
          <h3 className="text-xl font-bold text-white">Custom Glow</h3>
          <p className="text-gray-400">
            This card demonstrates custom glow color and opacity settings.
          </p>
        </div>
      </InteractiveCard>

      {/* Example Card 3 - Custom Animation */}
      <InteractiveCard
        glowDuration={2}
        scaleAmount={1.08}
        floatDistance={12}
      >
        <div className="p-6 space-y-4">
          <Sparkles className="w-8 h-8 text-cyan-400" />
          <h3 className="text-xl font-bold text-white">Custom Animation</h3>
          <p className="text-gray-400">
            Modified duration, scale, and float distance for unique effects.
          </p>
        </div>
      </InteractiveCard>
    </div>
  );
}