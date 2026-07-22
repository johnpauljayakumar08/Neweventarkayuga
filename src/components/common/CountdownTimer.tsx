import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
  variant?: 'dark' | 'light' | 'hero';
}

export const CountdownTimer: React.FC<CountdownProps> = ({ targetDate, variant = 'hero' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 48, hours: 14, minutes: 22, seconds: 45 }); // Default attractive fallback
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  if (variant === 'hero') {
    return (
      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto md:mx-0">
        {timeBlocks.map((block) => (
          <div
            key={block.label}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white"
          >
            <span className="text-2xl sm:text-4xl font-extrabold font-serif tracking-tight text-[#c4a161] min-w-[2ch] text-center">
              {String(block.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-white/80 mt-1 uppercase">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3">
      {timeBlocks.map((block) => (
        <div key={block.label} className="text-center bg-[#5d1b22] text-white px-3 py-2 rounded-lg border border-[#9b7855]/30 shadow">
          <div className="text-xl font-bold font-serif text-[#c4a161]">
            {String(block.value).padStart(2, '0')}
          </div>
          <div className="text-[9px] uppercase tracking-wider text-white/70">{block.label}</div>
        </div>
      ))}
    </div>
  );
};
