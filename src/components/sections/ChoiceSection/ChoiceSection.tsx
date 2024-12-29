import React from 'react';
import { Button } from '../../Button';
import { ChoiceOption } from './ChoiceOption';
import { ChoiceTitle } from './ChoiceTitle';

export function ChoiceSection() {
  return (
    <section className="relative py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <ChoiceTitle />
        
        {/* Options Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <ChoiceOption
            title="IGNORE"
            subtitle="The Warnings Universe Gives you"
            points={[
              "You'll stay trapped in mediocrity",
              "Your potential will rot, day by day",
              "Life will pass you by and AI will Replace you",
              "You shall be left behind in the AI Era",
              "You'll die regretting, while others reap rewards"
            ]}
            variant="ignore"
          />

          <ChoiceOption
            title="ACT FAST"
            subtitle="Transform Your Business with AI"
            points={[
              "Unleash your business's true Potential",
              "Dominate the Industry",
              "Ride the AI wave",
              "Make and Save More Money",
              "Increase your Profit Margins"
            ]}
            variant="act"
            ctaButton={
              <Button 
                className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400"
                onClick={() => window.open('https://calendly.com/rapidx-ai/discovery', '_blank')}
              >
                Book Your Discovery Call Now
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}