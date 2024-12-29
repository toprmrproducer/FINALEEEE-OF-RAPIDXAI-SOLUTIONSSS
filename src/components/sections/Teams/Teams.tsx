import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { TeamCard } from './TeamCard';
import { GridBackground } from '../../effects/GridBackground';
import { Phone, Mail, MessageSquare, Code } from 'lucide-react';

const teams = [
  {
    code: 'alpha',
    name: 'Team Alpha',
    tagline: 'Your First Line of Offense and Defense in Business Communications',
    description: 'Elite AI voice communication unit specializing in automated cold calling, database reactivation, and 24/7 receptionist services.',
    icon: Phone,
    stats: [
      { value: '1000x', label: 'Call Handling Capacity' },
      { value: '45%', label: 'Cost Reduction' },
      { value: '24/7', label: 'Availability' }
    ],
    capabilities: [
      'AI-Powered Cold Calling',
      'Database Reactivation',
      'Virtual Reception',
      'Call Routing & Management'
    ],
    impact: 'Increased efficiency with simultaneous call handling, significant cost reduction in staffing, and improved lead engagement through personalized interactions.'
  },
  {
    code: 'bravo',
    name: 'Team Bravo',
    tagline: 'Your Elite Squad for Targeted and Automated Prospect Engagement',
    description: 'Special forces unit for outbound marketing, executing precision-targeted campaigns and automated follow-up operations.',
    icon: Mail,
    stats: [
      { value: '30%', label: 'Lead Increase' },
      { value: '65%', label: 'Time Saved' },
      { value: '3x', label: 'Conversion Rate' }
    ],
    capabilities: [
      'AI Email Marketing',
      'Automated Follow-ups',
      'Lead Nurturing',
      'Appointment Scheduling'
    ],
    impact: '30% increase in lead inflow within the first month, automated follow-ups ensuring no leads slip through, and precision-targeted messaging.'
  },
  {
    code: 'delta',
    name: 'Team Delta',
    tagline: 'Your Tactical Support Team for Customer Satisfaction',
    description: 'Rapid-response customer support unit providing 24/7 intelligent assistance across multiple channels.',
    icon: MessageSquare,
    stats: [
      { value: '70%', label: 'Support Reduction' },
      { value: '24/7', label: 'Coverage' },
      { value: '10+', label: 'Languages' }
    ],
    capabilities: [
      'AI Chat Support',
      'Multilingual Assistance',
      'Smart Escalation',
      'Knowledge Base Integration'
    ],
    impact: '70% reduction in support volume, instant response times, and seamless escalation to human agents when needed.'
  },
  {
    code: 'papa',
    name: 'Team Papa Bear',
    tagline: 'Your Human-Driven Software Development Command Unit',
    description: 'Elite engineering battalion combining human creativity with military-grade precision to deliver exceptional software solutions.',
    icon: Code,
    stats: [
      { value: '100%', label: 'Uptime Guarantee' },
      { value: '24/7', label: 'Development' },
      { value: '∞', label: 'Possibilities' }
    ],
    capabilities: [
      'Custom Software Development',
      'AI Integration Services',
      'Scalable Architecture Design',
      'Performance Optimization'
    ],
    impact: 'Transformative software solutions that automate processes, enhance workflows, and future-proof businesses through seamless AI integration and robust architecture.'
  }
];

export function Teams() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Meet Your AI-Powered Elite Teams"
          description="Specialized units working in perfect synergy to transform your business operations"
          gradient
        />
        
        <div className="mt-20 space-y-20">
          {teams.map((team, index) => (
            <TeamCard
              key={team.code}
              {...team}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}