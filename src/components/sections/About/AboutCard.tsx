import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function AboutCard({ icon: Icon, title, description }: AboutCardProps) {
  return (
    <div className="group relative p-6 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
      <Icon className="h-8 w-8 text-cyan-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}