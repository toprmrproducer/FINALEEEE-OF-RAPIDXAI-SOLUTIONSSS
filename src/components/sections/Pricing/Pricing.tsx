import React from 'react';
import { Phone, Mail, MessageSquare, Code } from 'lucide-react';
import { Button } from '../../Button';
import { SectionTitle } from '../../ui/SectionTitle';

const teams = [
  {
    icon: Phone,
    name: 'Team Alpha',
    description: 'AI-powered voice solutions for business communications',
    features: [
      'Intelligent cold calling',
      '24/7 virtual reception',
      'Call routing & management',
      'Voice analytics',
      'CRM integration',
      'Custom voice training'
    ],
    calendlyLink: 'https://calendly.com/shreyasrajsony11/30min'
  },
  {
    icon: Mail,
    name: 'Team Bravo',
    description: 'Advanced outbound marketing automation',
    features: [
      'AI email campaigns',
      'Smart segmentation',
      'Automated follow-ups',
      'A/B testing',
      'Performance analytics',
      'Lead scoring'
    ],
    calendlyLink: 'https://calendly.com/shreyasrajsony11/30min'
  },
  {
    icon: MessageSquare,
    name: 'Team Delta',
    description: '24/7 intelligent customer support',
    features: [
      'AI chat support',
      'Multilingual capabilities',
      'Smart escalation',
      'Knowledge base integration',
      'Custom training',
      'Analytics dashboard'
    ],
    calendlyLink: 'https://calendly.com/shreyasrajsony11/30min'
  },
  {
    icon: Code,
    name: 'Team Papa Bear',
    description: 'Elite software engineering battalion',
    features: [
      'Custom software development',
      'AI integration services',
      'Cloud infrastructure',
      'Security hardening',
      'DevOps automation',
      '24/7 operational support'
    ],
    calendlyLink: 'https://calendly.com/shreyasrajsony11/30min'
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Choose Your AI Team"
          description="Get custom pricing based on your specific needs"
          gradient
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((team, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-300 blur" />
              <div className="relative bg-black p-8 rounded-2xl border border-gray-800">
                <team.icon className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">{team.name}</h3>
                <p className="text-gray-400 mb-6">{team.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {team.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <span className="text-cyan-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600"
                    onClick={() => window.open(team.calendlyLink, '_blank')}
                  >
                    Get a Quote
                  </Button>
                  
                  <Button
                    variant="secondary"
                    className="w-full border-cyan-500 hover:bg-cyan-500/10"
                    onClick={() => window.open(team.calendlyLink, '_blank')}
                  >
                    Book a FREE Business Audit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}