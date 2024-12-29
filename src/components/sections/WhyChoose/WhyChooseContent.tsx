import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { TeamFeature } from './TeamFeature';

const teams = [
  {
    icon: Phone,
    team: 'Team Alpha',
    title: 'AI Voice Solutions',
    description: 'Never miss a lead. Let AI-powered receptionists and cold callers handle your calls with precision and empathy.',
  },
  {
    icon: Mail,
    team: 'Team Bravo',
    title: 'Outbound Marketing',
    description: 'Scale your outreach like never before with personalized AI-powered email campaigns and outbound strategies.',
  },
  {
    icon: MessageSquare,
    team: 'Team Delta',
    title: 'Chat-Based Support',
    description: 'Enhance customer satisfaction 24/7 with intelligent AI chat agents tailored to your business.',
  },
];

export function WhyChooseContent() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {teams.map((team, index) => (
        <TeamFeature
          key={index}
          {...team}
          className={index === 1 ? 'lg:transform lg:-translate-y-6' : ''}
        />
      ))}
    </div>
  );
}