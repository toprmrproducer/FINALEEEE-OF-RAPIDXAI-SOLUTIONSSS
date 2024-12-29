import React, { useState, useEffect } from 'react';

const companies = [
  { name: 'TechCorp Solutions', location: 'San Francisco' },
  { name: 'Digital Dynamics', location: 'London' },
  { name: 'InnovateX', location: 'Singapore' },
  { name: 'Franklin Systems', location: 'Toronto' },
  { name: 'SmartBiz AI', location: 'Dubai' },
  { name: 'Global Techno Space', location: 'Berlin' },
  { name: 'Alison Ventures', location: 'Tokyo' },
  { name: 'DataFlow Inc', location: 'Sydney' }
];

export function BookingNotification() {
  const [notification, setNotification] = useState<{ company: string; location: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomCompany = companies[Math.floor(Math.random() * companies.length)];
      setNotification(randomCompany);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialTimeout = setTimeout(showNotification, 5000);
    const interval = setInterval(() => {
      showNotification();
    }, 30000 + Math.random() * 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 max-w-md transform transition-all duration-500 z-50 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}
    >
      <div className="bg-black rounded-lg shadow-lg p-4 flex items-start gap-3 border border-cyan-900">
        {/* Custom 4-pointed star */}
        <div className="shrink-0 mt-1">
          <svg width="20" height="20" viewBox="0 0 32 32" className="animate-pulse">
            <path
              d="M16 2L30 16L16 30L2 16L16 2Z"
              fill="none"
              stroke="#00f7ff"
              strokeWidth="2"
            />
            <path
              d="M16 6L26 16L16 26L6 16L16 6Z"
              fill="#00f7ff"
            />
          </svg>
        </div>
        
        <div>
          <p className="text-gray-300 text-sm">
            <span className="font-semibold text-cyan-400">{notification.company}</span>
            <span className="text-gray-400"> from </span>
            <span className="font-semibold text-cyan-400">{notification.location}</span>
            <span className="text-gray-400"> just booked a Discovery Call with RapidX</span>
          </p>
        </div>
      </div>
    </div>
  );
}