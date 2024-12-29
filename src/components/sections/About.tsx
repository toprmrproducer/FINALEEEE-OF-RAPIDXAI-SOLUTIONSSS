import React from 'react';
import { Cpu, Network, Zap } from 'lucide-react';

export function About() {
  return (
    <section className="relative py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 text-transparent bg-clip-text mb-4">
            About RapidX.AI
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We're revolutionizing business automation through cutting-edge AI solutions. Our mission is to empower organizations with intelligent systems that drive efficiency and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Cpu,
              title: 'Advanced AI',
              description: 'State-of-the-art artificial intelligence powering your business processes'
            },
            {
              icon: Network,
              title: 'Seamless Integration',
              description: 'Effortlessly integrate our solutions with your existing infrastructure'
            },
            {
              icon: Zap,
              title: 'Rapid Deployment',
              description: 'Quick implementation and deployment of AI solutions'
            }
          ].map((item, index) => (
            <div key={index} className="group relative p-6 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              <item.icon className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}