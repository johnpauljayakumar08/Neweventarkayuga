import React from 'react';
import { COMPANY_INFO } from '../../data/eventData';
import { Trophy, CalendarCheck, Award, MapPin, Smile } from 'lucide-react';

export const QuickStatsRibbon: React.FC = () => {
  const stats = [
    {
      icon: Trophy,
      label: 'Events Delivered',
      value: COMPANY_INFO.eventsCompleted,
      subtext: 'Weddings, Summits & Galas',
    },
    {
      icon: Award,
      label: 'Industry Experience',
      value: COMPANY_INFO.experienceYears,
      subtext: 'Bespoke Event Excellence',
    },
    {
      icon: MapPin,
      label: 'Cities Covered',
      value: COMPANY_INFO.citiesCovered,
      subtext: 'Pan-India & Destination',
    },
    {
      icon: CalendarCheck,
      label: 'On-Time Execution',
      value: '100%',
      subtext: 'Flawless Backstage Control',
    },
    {
      icon: Smile,
      label: 'Client Satisfaction',
      value: COMPANY_INFO.clientSatisfaction,
      subtext: 'Five-Star Reviews & Ratings',
    },
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-[#5d1b22] via-[#7a242c] to-[#4a151b] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#9b7855]/40 text-white">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-2 ${
                  index > 0 ? 'pt-4 md:pt-0' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-[#c4a161]/30 mb-3 text-[#c4a161] shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold font-serif text-[#c4a161] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white/90 mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-white/60 mt-0.5 hidden sm:block">
                  {stat.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
