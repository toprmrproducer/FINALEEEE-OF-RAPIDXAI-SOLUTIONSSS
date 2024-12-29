import React from 'react';
import { ResourceCard } from './ResourceCard';
import { LucideIcon } from 'lucide-react';
import { TypewriterText } from '../../effects/TypewriterText';

interface Resource {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  type: string;
  downloadable?: boolean;
  interactive?: boolean;
}

interface ResourceCategoryProps {
  title: string;
  description: string;
  resources: Resource[];
}

export function ResourceCategory({ title, description, resources }: ResourceCategoryProps) {
  return (
    <div>
      <div className="mb-8">
        <TypewriterText
          text={title}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 mb-2"
          speed={50}
        />
        <TypewriterText
          text={description}
          className="text-gray-400"
          speed={30}
          delay={500}
          cursor={false}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}