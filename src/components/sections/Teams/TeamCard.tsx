import React from 'react';
import { LucideIcon } from 'lucide-react';
import { TypewriterText } from '../../effects/TypewriterText';
import { cn } from '../../../utils/cn';
import { InteractiveCard } from '../../ui/InteractiveCard';

interface TeamCardProps {
  code: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  stats: Array<{ value: string; label: string; }>;
  capabilities: string[];
  impact: string;
  reverse?: boolean;
}

export function TeamCard({
  code,
  name,
  tagline,
  description,
  icon: Icon,
  stats,
  capabilities,
  impact,
  reverse
}: TeamCardProps) {
  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-12 items-center",
      reverse && "md:flex-row-reverse"
    )}>
      {/* Visual Side */}
      <div className="flex-1">
        <InteractiveCard
          glowColor="#00e5ff"
          glowOpacity={0.3}
          glowDuration={1.5}
          floatDistance={8}
        >
          <div className="bg-black p-8 rounded-2xl">
            {/* Team Icon and Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shrink-0">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                {getTeamTitle(code)}
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <TypewriterText
                    text={stat.value}
                    className="text-2xl font-bold text-cyan-400"
                    delay={index * 200}
                  />
                  <TypewriterText
                    text={stat.label}
                    className="text-sm text-gray-400"
                    delay={500 + index * 200}
                    cursor={false}
                  />
                </div>
              ))}
            </div>
            
            {/* Capabilities */}
            <div className="space-y-2">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-cyan-500/10 to-transparent p-2 rounded"
                >
                  <TypewriterText
                    text={capability}
                    className="text-gray-300"
                    delay={1000 + index * 200}
                    cursor={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </InteractiveCard>
      </div>

      {/* Content Side */}
      <div className="flex-1 text-center md:text-left">
        <div className="inline-block bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-400 font-mono text-sm mb-4">
          {code.toUpperCase()} UNIT
        </div>
        <TypewriterText
          text={name}
          className="text-3xl font-bold text-white mb-2"
          speed={50}
        />
        <TypewriterText
          text={tagline}
          className="text-xl text-cyan-400 mb-4"
          delay={500}
          speed={30}
        />
        <TypewriterText
          text={description}
          className="text-gray-400 mb-6"
          delay={1000}
          speed={20}
        />
        <div className="bg-gradient-to-r from-cyan-500/20 to-transparent p-4 rounded-lg">
          <TypewriterText
            text={impact}
            className="text-gray-300"
            delay={1500}
            speed={20}
          />
        </div>
      </div>
    </div>
  );
}

function getTeamTitle(code: string): string {
  switch (code) {
    case 'alpha':
      return 'Your Callers and Receptionists';
    case 'bravo':
      return 'Automate Your Outbound Outreach';
    case 'delta':
      return 'Compliment Your Customer Support';
    case 'papa':
      return 'Get Custom AI-Powered Software Built';
    default:
      return '';
  }
}