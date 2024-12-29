import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { TeamMember } from './TeamMember';

const teamMembers = [
  {
    name: 'Shreyas Raj',
    role: 'Founder and CEO',
    image: 'https://imgur.com/gERx2Jm.jpeg', // Updated to direct image URL
    bio: "Visionary entrepreneur and AI enthusiast with a passion for transforming businesses through automation. Leading RapidX.AI's mission to revolutionize how companies operate in the AI era.",
    socials: [
      { platform: 'instagram', url: 'https://www.instagram.com/ai.w.raj/' },
      { platform: 'twitter', url: 'https://x.com/TopR9595' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/shreyas-raj-156217280/' },
      { platform: 'youtube', url: 'https://www.youtube.com/channel/UCSpCDzr3CLmVuFPdtrWLl0w/' },
      { platform: 'facebook', url: 'https://www.facebook.com/profile.php?id=61559948792828' }
    ]
  },
  {
    name: 'Yash Raj Singh',
    role: 'CTO and Co-founder',
    image: 'https://imgur.com/OJTp1yn.jpeg', // Updated to direct image URL
    bio: "Technical innovator and AI architect with deep expertise in cutting-edge technologies. Spearheading RapidX.AI's technical vision and ensuring delivery of robust, scalable solutions."
  }
];

export function Team() {
  return (
    <section className="py-24 bg-black" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Meet Our Team"
          description="The innovators behind RapidX.AI's mission to revolutionize business automation"
          gradient
        />
        
        <div className="mt-16 grid md:grid-cols-2 gap-12 justify-items-center">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}