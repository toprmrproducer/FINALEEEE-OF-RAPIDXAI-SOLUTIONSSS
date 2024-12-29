import React from 'react';
import { Phone, Headphones, Clock, BarChart } from 'lucide-react';
import { Button } from '../../components/Button';
import { SectionTitle } from '../../components/ui/SectionTitle';

export function AlphaTeam() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Team Alpha: AI Voice Solutions"
          description="Advanced AI-powered calling and reception services"
          gradient
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Transform Your Voice Communications</h2>
            <p className="text-gray-400">Team Alpha specializes in revolutionizing business communications through AI-powered voice solutions. Our advanced systems handle everything from cold calling to customer service, operating 24/7 with human-like interaction capabilities.</p>
            
            <div className="grid gap-6">
              {[
                {
                  icon: Phone,
                  title: 'Intelligent Cold Calling',
                  description: 'AI-driven outreach that adapts to conversations in real-time'
                },
                {
                  icon: Headphones,
                  title: '24/7 Virtual Reception',
                  description: 'Never miss a call with our always-on AI receptionists'
                },
                {
                  icon: Clock,
                  title: 'Automated Scheduling',
                  description: 'Seamless appointment setting and calendar management'
                },
                {
                  icon: BarChart,
                  title: 'Performance Analytics',
                  description: 'Detailed insights into call performance and conversion rates'
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
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Voice Operations?</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Reduce operational costs by up to 60%
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Handle unlimited concurrent calls
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> 24/7 availability
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Natural language processing
              </li>
            </ul>
            <Button 
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600"
              onClick={() => window.open('https://calendly.com/rapidx-ai/team-alpha', '_blank')}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}