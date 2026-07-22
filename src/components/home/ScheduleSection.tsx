import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SCHEDULE_ITEMS } from '../../data/eventData';
import { Calendar, Clock, MapPin, User, Bookmark, Check, Sparkles } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

  const tabs = ['All', 'Day 1', 'Day 2', 'Keynote', 'Weddings', 'Corporate', 'Entertainment'];

  const filteredSchedule = activeTab === 'All'
    ? SCHEDULE_ITEMS
    : activeTab.startsWith('Day')
      ? SCHEDULE_ITEMS.filter((s) => s.day === activeTab)
      : SCHEDULE_ITEMS.filter((s) => s.tag === activeTab || s.category.includes(activeTab));

  const toggleBookmark = (id: string) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="schedule" className="py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5d1b22]/10 border border-[#5d1b22]/20 text-xs font-bold uppercase tracking-widest text-[#5d1b22]">
            <Calendar className="w-3.5 h-3.5 text-[#9b7855]" />
            Program Agenda &amp; Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#1a1012] tracking-tight">
            Event Execution Schedule
          </h2>
          <p className="text-base text-[#5a484c] leading-relaxed">
            Follow our structured masterclass timeline, planning workshops, live production rehearsals, and evening gala spectacles.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#5d1b22] text-white shadow border border-[#9b7855]'
                    : 'bg-white text-[#2c2023] hover:bg-[#5d1b22]/10 border border-[#9b7855]/30'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Agenda Cards Timeline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {filteredSchedule.map((item, idx) => {
            const isSaved = bookmarked[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#9b7855]/25 shadow-md hover:shadow-xl hover:border-[#5d1b22]/40 transition-all group flex flex-col sm:flex-row items-start gap-6 relative"
              >
                {/* Left Column: Time & Day Badge */}
                <div className="sm:w-48 shrink-0 space-y-2 border-b sm:border-b-0 sm:border-r border-[#9b7855]/20 pb-4 sm:pb-0 sm:pr-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5d1b22] text-[#c4a161] text-[11px] font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    {item.time}
                  </div>
                  <div className="text-xs font-extrabold text-[#5d1b22] uppercase tracking-wider">
                    {item.day} • {item.category}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#5a484c]">
                    <MapPin className="w-3.5 h-3.5 text-[#9b7855]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Center Content Column */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold font-serif text-[#1a1012] group-hover:text-[#5d1b22] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Bookmark Button */}
                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`p-2 rounded-xl transition-colors cursor-pointer shrink-0 ${
                        isSaved
                          ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                          : 'bg-[#faf7f2] text-[#5a484c] hover:bg-[#5d1b22] hover:text-white border border-[#9b7855]/30'
                      }`}
                      title={isSaved ? 'Saved to agenda' : 'Add session to agenda'}
                    >
                      {isSaved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5a484c] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Speaker Info Badge */}
                  <div className="pt-2 flex items-center gap-3">
                    <img
                      src={item.speaker.avatar}
                      alt={item.speaker.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#9b7855]"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1a1012]">
                        {item.speaker.name}
                      </h4>
                      <p className="text-[11px] text-[#9b7855] font-medium">
                        {item.speaker.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
