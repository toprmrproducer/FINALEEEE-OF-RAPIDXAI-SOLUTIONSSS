import React from 'react';
import { Book, Video, FileText, Calculator, ClipboardCheck } from 'lucide-react';
import { SectionTitle } from '../../ui/SectionTitle';
import { ResourceCategory } from './ResourceCategory';
import { VideoResources } from './VideoResources';

const resources = {
  guides: [
    {
      title: 'Getting Started with AI',
      description: 'A comprehensive guide to understanding AI basics',
      icon: Book,
      link: 'https://encouraging-stone-0ea.notion.site/Complete-Automation-Blueprint-1367ef2e387180a3aa82e81afe652d5d',
      type: 'PDF Guide',
      downloadable: true
    },
    {
      title: 'AI Implementation Roadmap',
      description: 'Step-by-step guide to implementing AI in your business',
      icon: FileText,
      link: 'https://whimsical.com/roadmap-to-25k-month-with-automation-P5K6f1h9YpY5ngzvCW93Pg',
      type: 'Interactive Guide',
      interactive: true
    }
  ],
  videos: [
    {
      title: 'AI Voice Solutions Demo',
      description: 'See Team Alpha in action with real-world examples',
      icon: Video,
      link: 'https://www.youtube.com/channel/UCSpCDzr3CLmVuFPdtrWLl0w',
      type: 'Video Tutorial'
    },
    {
      title: 'Marketing Automation Masterclass',
      description: 'Learn how Team Bravo transforms outbound marketing',
      icon: Video,
      link: 'https://www.youtube.com/channel/UCSpCDzr3CLmVuFPdtrWLl0w',
      type: 'Webinar Recording'
    }
  ],
  tools: [
    {
      title: 'ROI Calculator',
      description: 'Calculate potential savings with AI automation',
      icon: Calculator,
      link: '#',
      type: 'Interactive Tool',
      interactive: true
    },
    {
      title: 'AI Readiness Assessment',
      description: 'Evaluate your business\'s AI implementation readiness',
      icon: ClipboardCheck,
      link: '#',
      type: 'Online Tool',
      interactive: true
    }
  ]
};

export function Resources() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Free Resources & Learning"
          description="Explore our library of guides, videos, and tools to master AI implementation"
          gradient
        />

        <div className="mt-16 space-y-20">
          <ResourceCategory
            title="Learning Guides"
            description="Comprehensive guides to help you understand and implement AI"
            resources={resources.guides}
          />

          <VideoResources />

          <ResourceCategory
            title="Free Tools"
            description="Interactive tools to help you evaluate and plan your AI journey"
            resources={resources.tools}
          />
        </div>
      </div>
    </section>
  );
}