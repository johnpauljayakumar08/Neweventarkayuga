import React, { useState } from 'react';
import { FAQ_ITEMS, COMPANY_INFO } from '../../data/eventData';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  const filteredFAQs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-[#1a1012] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5d1b22] border border-[#c4a161]/40 text-xs font-bold uppercase tracking-widest text-[#c4a161]">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-sans">
            Everything you need to know about booking, venue selection, vendor logistics, and event execution with Arkayuga.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto pt-4">
            <Search className="w-4 h-4 text-[#c4a161] absolute left-4 top-7" />
            <input
              type="text"
              placeholder="Search questions (e.g. venue, budget, locations)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#241619] border border-[#9b7855]/40 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#c4a161]"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFAQs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#241619] rounded-2xl border border-[#9b7855]/30 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#c4a161]">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                      {item.question}
                    </h3>
                  </div>
                  <div className={`p-2 rounded-full bg-white/10 text-[#c4a161] transition-transform ${
                    isOpen ? 'rotate-180 bg-[#5d1b22]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-white/80 leading-relaxed border-t border-white/10">
                    <p className="pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12 text-white/50 text-sm">
              No matching questions found. Contact our team directly at {COMPANY_INFO.phone}!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
