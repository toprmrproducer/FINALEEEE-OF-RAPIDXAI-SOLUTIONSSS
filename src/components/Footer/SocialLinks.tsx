import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import { AnimatedIcon } from '../ui/AnimatedIcon';

const socialLinks = [
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/ai.w.raj/reels/',
    label: 'Instagram',
    animation: 'bounce'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/company/rapidxai',
    label: 'LinkedIn',
    animation: 'sway'
  },
  { 
    icon: Facebook, 
    href: 'https://www.facebook.com/profile.php?id=61559948792828',
    label: 'Facebook',
    animation: 'pulse'
  },
  { 
    icon: Twitter, 
    href: 'https://x.com/TopR9595',
    label: 'X (Twitter)',
    animation: 'bounce'
  }
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map(({ icon, href, label, animation }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transform transition-all duration-200"
          aria-label={label}
        >
          <AnimatedIcon 
            icon={icon} 
            className="w-5 h-5" 
            animation={animation as 'bounce' | 'sway' | 'pulse'} 
          />
        </a>
      ))}
    </div>
  );
}