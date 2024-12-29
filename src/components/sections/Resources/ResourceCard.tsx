import React from 'react';
import { LucideIcon, Download, ExternalLink } from 'lucide-react';
import { AnimatedIcon } from '../../ui/AnimatedIcon';
import { cn } from '../../../utils/cn';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  type: string;
  downloadable?: boolean;
  interactive?: boolean;
}

export function ResourceCard({
  title,
  description,
  icon,
  link,
  type,
  downloadable,
  interactive
}: ResourceCardProps) {
  return (
    <a 
      href={link}
      className="block group relative"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-300 blur" />
      <div className="relative bg-black p-6 rounded-2xl border border-gray-800 transition-all duration-300 group-hover:border-cyan-500/50">
        <div className="flex items-start gap-4">
          <AnimatedIcon 
            icon={icon}
            className="w-8 h-8 text-cyan-400 mt-1"
            animation="bounce"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <div className="flex items-center gap-2">
                <span className={cn(
                  "text-xs font-medium px-2 py-1 rounded-full",
                  interactive ? "text-cyan-400 bg-cyan-950/50" : "text-gray-400 bg-gray-900"
                )}>
                  {type}
                </span>
                {downloadable && <Download className="w-4 h-4 text-cyan-400" />}
                {interactive && <ExternalLink className="w-4 h-4 text-cyan-400" />}
              </div>
            </div>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}