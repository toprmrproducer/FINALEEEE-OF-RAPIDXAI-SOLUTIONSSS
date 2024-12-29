import React, { useState } from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { TeamTab } from './TeamTab';
import { TeamContent } from './TeamContent';
import { GridBackground } from '../../effects/GridBackground';

type Team = 'alpha' | 'bravo' | 'delta';

export function ServicesBreakdown() {
  const [activeTeam, setActiveTeam] = useState<Team>('alpha');

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="How We Help You Win"
          description="Discover the comprehensive suite of AI-powered solutions our specialized teams offer"
          gradient
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'alpha' as Team, label: 'Team Alpha' },
            { id: 'bravo' as Team, label: 'Team Bravo' },
            { id: 'delta' as Team, label: 'Team Delta' }
          ].map((team) => (
            <TeamTab
              key={team.id}
              team={team.label}
              isActive={activeTeam === team.id}
              onClick={() => setActiveTeam(team.id)}
            />
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
          <div className="relative">
            <TeamContent team={activeTeam} />
          </div>
        </div>
      </div>
    </section>
  );
}