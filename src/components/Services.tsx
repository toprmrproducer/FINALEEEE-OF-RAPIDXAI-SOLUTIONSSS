import React from 'react';
import { Bot, Brain, Cpu, Network } from 'lucide-react';

const services = [
  {
    title: 'AI Process Automation',
    description: 'Streamline your workflows with intelligent automation powered by cutting-edge AI technology.',
    icon: Bot,
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Custom ML models designed to solve your specific business challenges.',
    icon: Brain,
  },
  {
    title: 'Intelligent Analytics',
    description: 'Transform raw data into actionable insights with our AI-powered analytics platform.',
    icon: Cpu,
  },
  {
    title: 'Enterprise Integration',
    description: 'Seamlessly integrate AI solutions into your existing infrastructure.',
    icon: Network,
  },
];

export function Services() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-400">
            Cutting-edge AI solutions for modern businesses
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              <div className="relative bg-gray-900 p-6 rounded-lg">
                <service.icon className="h-8 w-8 text-cyan-400" />
                <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-gray-400">{service.description}</p>
                <a href="#" className="mt-4 inline-block text-cyan-400 hover:text-cyan-300">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}