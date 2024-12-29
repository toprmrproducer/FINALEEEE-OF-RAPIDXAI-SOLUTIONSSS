import React from 'react';
import { TypewriterText } from '../../effects/TypewriterText';
import { Card } from '../../ui/Card';
import { Play } from 'lucide-react';

export function VideoResources() {
  const channelUrl = "https://www.youtube.com/channel/UCSpCDzr3CLmVuFPdtrWLl0w";

  return (
    <div>
      <div className="mb-8">
        <TypewriterText
          text="Video Tutorials"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 mb-2"
          speed={50}
        />
        <TypewriterText
          text="Watch our experts demonstrate AI solutions in action"
          className="text-gray-400"
          speed={30}
          delay={500}
          cursor={false}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* AI Voice Solutions Demo */}
        <a 
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <Card className="overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-lg">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Play className="w-16 h-16 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">AI Voice Solutions Demo</h3>
                <p className="text-gray-400 text-sm">See Team Alpha in action with real-world examples</p>
              </div>
            </div>
          </Card>
        </a>

        {/* Marketing Automation Masterclass */}
        <a 
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <Card className="overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-lg">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Play className="w-16 h-16 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">Marketing Automation Masterclass</h3>
                <p className="text-gray-400 text-sm">Learn how Team Bravo transforms outbound marketing</p>
              </div>
            </div>
          </Card>
        </a>
      </div>
    </div>
  );
}