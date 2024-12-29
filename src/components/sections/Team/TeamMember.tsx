import React from 'react';
import { Instagram, Linkedin, Youtube, Facebook, Twitter } from 'lucide-react';
import { AnimatedIcon } from '../../ui/AnimatedIcon';
import { GlowCard } from '../../ui/GlowCard';
import { TypewriterText } from '../../effects/TypewriterText';

interface SocialLink {
  platform: 'instagram' | 'linkedin' | 'youtube' | 'facebook' | 'twitter';
  url: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  socials?: SocialLink[];
}

const socialIcons = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  facebook: Facebook,
  twitter: Twitter,
};

export function TeamMember({ name, role, image, bio, socials }: TeamMemberProps) {
  return (
    <GlowCard>
      <div className="p-8 text-center">
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full opacity-0 group-hover:opacity-75 blur transition-opacity duration-500" />
          <img
            src={image}
            alt={name}
            className="relative w-48 h-48 mx-auto rounded-full object-cover border-2 border-cyan-500/20"
          />
        </div>
        
        <TypewriterText
          text={name}
          className="text-2xl font-bold text-white mb-2"
          speed={50}
        />
        <TypewriterText
          text={role}
          className="text-cyan-400 mb-4"
          speed={50}
          delay={500}
        />
        
        {bio && (
          <TypewriterText
            text={bio}
            className="text-gray-400 mb-6 max-w-md mx-auto"
            speed={30}
            delay={1000}
          />
        )}
        
        {socials && (
          <div className="flex justify-center space-x-4">
            {socials.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  <AnimatedIcon icon={Icon} className="w-5 h-5" animation="bounce" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </GlowCard>
  );
}