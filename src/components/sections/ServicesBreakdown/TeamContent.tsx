import React from 'react';
import { Phone, PhoneCall, Clock, Mail, Send, Target, MessageSquare, Globe, ArrowUpRight } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const teamFeatures = {
  alpha: [
    { icon: Phone, title: 'AI-powered call routing', description: 'Smart call distribution based on context and priority' },
    { icon: PhoneCall, title: 'Personalized cold calling', description: 'AI-driven conversation flows adapted to each prospect' },
    { icon: Clock, title: '24/7 AI receptionists', description: 'Never miss a call with always-on virtual reception' }
  ],
  bravo: [
    { icon: Mail, title: 'Automated sequences', description: 'Intelligent email campaigns that adapt to recipient engagement' },
    { icon: Send, title: 'Hyper-personalization', description: 'AI-crafted content that resonates with each recipient' },
    { icon: Target, title: 'Lead generation', description: 'Data-driven strategies to identify and engage prospects' }
  ],
  delta: [
    { icon: MessageSquare, title: 'Real-time AI support', description: 'Instant responses to customer inquiries 24/7' },
    { icon: Globe, title: 'Multilingual capabilities', description: 'Support in multiple languages powered by AI' },
    { icon: ArrowUpRight, title: 'Smart escalation', description: 'Contextual handoff to human agents when needed' }
  ]
};

interface TeamContentProps {
  team: 'alpha' | 'bravo' | 'delta';
}

export function TeamContent({ team }: TeamContentProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {teamFeatures[team].map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}