import React from 'react';
import { Code, Database, Cloud, Lock } from 'lucide-react';
import { Button } from '../../components/Button';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Shield, Sword } from '../../components/icons/MilitaryIcons';

export function PapaTeam() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Team Papa Bear: Elite Software Engineering Battalion"
          description="Custom software development with military-grade precision"
          gradient
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Deploy Battle-Tested Software Solutions</h2>
            <p className="text-gray-400">Team Papa Bear combines human expertise with AI capabilities to deliver robust, scalable, and secure software solutions that stand the test of time.</p>
            
            <div className="grid gap-6">
              {[
                {
                  icon: Code,
                  title: 'Custom Development',
                  description: 'Battle-hardened code built to your specifications'
                },
                {
                  icon: Database,
                  title: 'Scalable Architecture',
                  description: 'Infrastructure that grows with your mission'
                },
                {
                  icon: Cloud,
                  title: 'Cloud Operations',
                  description: 'Strategic deployment and maintenance'
                },
                {
                  icon: Lock,
                  title: 'Security First',
                  description: 'Military-grade protection for your assets'
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
            <div className="flex items-center gap-4 mb-6">
              <Shield />
              <Sword />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Deploy?</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Rapid development cycles
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> 24/7 operational support
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Continuous integration
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span> Battle-tested security
              </li>
            </ul>
            <Button 
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600"
              onClick={() => window.open('https://calendly.com/rapidx-ai/team-papa', '_blank')}
            >
              Request Deployment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}