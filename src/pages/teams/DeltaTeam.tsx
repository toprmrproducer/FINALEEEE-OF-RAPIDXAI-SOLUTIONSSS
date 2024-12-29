import React from 'react';
import { MessageSquare, Globe, Zap, Shield } from 'lucide-react';
import { Button } from '../../components/Button';
import { SectionTitle } from '../../components/ui/SectionTitle';

export function DeltaTeam() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Team Delta: AI Customer Support"
          description="24/7 intelligent chat support for your business"
          gradient
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Elevate Your Customer Support</h2>
            <p className="text-gray-400">Team Delta provides cutting-edge AI chat support solutions that handle customer inquiries instantly, learn from interactions, and seamlessly escalate complex issues when needed.</p>
            
            <div className="grid gap-6">
              {[
                {
                  icon: MessageSquare,
                  title: 'Instant Response',
                  description: 'AI-powered chat support available 24/7'
                },
                {
                  icon: Globe,
                  title: 'Multilingual Support',
                  description: 'Support in over 100 languages'
                },
                {
                  icon: Zap,
                  title: 'Smart Escalation',
                  description: 'Intelligent routing to human agents when needed'
                },
                {
                  icon: Shield,
                  title: 'Knowledge Integration',
                  description: 'Automated learning from your knowledge base'
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <feature.icon className="w-6 h-6 text-cyan-400 shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Ready for 24/7 Customer Support?</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Reduce response time by 95%
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Handle unlimited concurrent chats
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Multilingual capabilities
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Advanced analytics dashboard
              </li>
            </ul>
            <Button 
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600"
              onClick={() => window.open('https://calendly.com/rapidx-ai/team-delta', '_blank')}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}