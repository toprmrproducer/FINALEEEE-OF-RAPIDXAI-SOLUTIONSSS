import React from 'react';
import { MessageSquare, Mail, Phone } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

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

export function ServicesContent() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}