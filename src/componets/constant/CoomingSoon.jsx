import React, { useState, useEffect } from 'react';
import { Clock, Music, Headphones, Guitar, Piano, Mic } from 'lucide-react';

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 20
  });

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const musicIcons = [
    { Icon: Music, delay: '0s' },
    { Icon: Headphones, delay: '0.5s' },
    { Icon: Guitar, delay: '1s' },
    { Icon: Piano, delay: '1.5s' },
    { Icon: Mic, delay: '2s' }
  ];

  return (
    <div className="min-h-screen bg-[#F0E81B] flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {musicIcons.map(({ Icon, delay }, index) => (
          <div
            key={index}
            className="absolute animate-bounce opacity-10"
            style={{
              left: `${20 + index * 15}%`,
              top: `${10 + index * 20}%`,
              animationDelay: delay,
              animationDuration: '3s'
            }}
          >
            <Icon size={48} className="text-black" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full mb-6 shadow-2xl animate-pulse">
            <Music className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black mb-4 tracking-tight">
            Coming Soon
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-black/80 max-w-2xl mx-auto leading-relaxed">
            We're crafting something amazing for your musical journey. 
            <br className="hidden sm:block" />
            <span className="font-semibold">Stay tuned for an extraordinary experience!</span>
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-6 flex items-center justify-center gap-2">
            <Clock className="w-6 h-6" />
            Launch Countdown
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-black/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-black/20 shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-4xl font-bold text-black mb-1 sm:mb-2">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm sm:text-base font-medium text-black/70 uppercase tracking-wide">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Subscription */}
        
        
      
 
      </div>
    </div>
  );
}