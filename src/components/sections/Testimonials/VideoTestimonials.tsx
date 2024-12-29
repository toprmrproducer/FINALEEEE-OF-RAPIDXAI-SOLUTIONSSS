import React from 'react';
import { Card } from '../../ui/Card';

export function VideoTestimonials() {
  const videos = [
    {
      id: 'IIjhViAlMTA',
      title: 'Client Success Story',
      description: 'See how our AI solutions transformed customer service operations'
    },
    {
      id: 'ktfwr3nOFeU',
      title: 'Client Success Story',
      description: 'Learn about the impact of AI automation on business growth'
    },
    {
      id: 'Oe2s8j6JomQ',
      title: 'Client Success Story',
      description: 'Discover how AI automation revolutionized business processes'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {videos.map((video, index) => (
        <Card key={index} className="overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
          <div className="relative w-full pt-[177.78%]"> {/* 9:16 aspect ratio */}
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
            <p className="text-gray-400 text-sm">{video.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}