import React from 'react';
import { MessageSquare, Mail, Phone } from 'lucide-react';

const services = [
  {
    team: 'Team Alpha',
    title: 'AI Voice Solutions',
    description: 'Advanced virtual receptionists and intelligent cold calling systems',
    icon: Phone,
  },
  {
    team: 'Team Bravo',
    title: 'Outbound Marketing',
    description: 'AI-powered email marketing and campaign automation',
    icon: Mail,
  },
  {
    team: 'Team Delta',
    title: 'Chat Agents',
    description: 'Intelligent chat-based support and customer service solutions',
    icon: MessageSquare,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 text-transparent bg-clip-text">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl opacity-20 group-hover:opacity-100 transition duration-300 blur" />
              <div className="relative bg-black p-8 rounded-xl">
                <service.icon className="h-8 w-8 text-cyan-400 mb-4" />
                <p className="text-cyan-400 text-sm font-medium mb-2">{service.team}</p>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}