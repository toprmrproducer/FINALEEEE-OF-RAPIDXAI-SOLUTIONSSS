import React from 'react';
import { Mail, Target, BarChart3, Zap } from 'lucide-react';
import { Button } from '../../components/Button';
import { SectionTitle } from '../../components/ui/SectionTitle';

export function BravoTeam() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Team Bravo: Outbound Marketing Excellence"
          description="AI-powered email marketing and campaign automation"
          gradient
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Scale Your Outreach Operations</h2>
            <p className="text-gray-400">Team Bravo specializes in intelligent outbound marketing automation. Our AI systems craft personalized campaigns, optimize delivery timing, and continuously learn from engagement metrics to improve results.</p>
            
            <div className="grid gap-6">
              {[
                {
                  icon: Mail,
                  title: 'Smart Email Campaigns',
                  description: 'AI-crafted emails that resonate with your audience'
                },
                {
                  icon: Target,
                  title: 'Precision Targeting',
                  description: 'Advanced segmentation and personalization'
                },
                {
                  icon: BarChart3,
                  title: 'Performance Optimization',
                  description: 'Real-time campaign adjustments based on AI insights'
                },
                {
                  icon: Zap,
                  title: 'Automated Follow-ups',
                  description: 'Intelligent sequences that adapt to recipient engagement'
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
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Revolutionize Your Marketing?</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Increase email open rates by 40%
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Improve conversion rates by 65%
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Automated A/B testing
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Smart lead scoring
              </li>
            </ul>
            <Button 
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600"
              onClick={() => window.open('https://calendly.com/rapidx-ai/team-bravo', '_blank')}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}