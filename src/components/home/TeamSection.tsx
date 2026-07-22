import React from 'react';
import { TEAM_MEMBERS } from '../../data/eventData';
import { Users, Linkedin, Twitter, Instagram, Sparkles } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5d1b22]/10 border border-[#5d1b22]/20 text-xs font-bold uppercase tracking-widest text-[#5d1b22]">
            <Users className="w-3.5 h-3.5 text-[#9b7855]" />
            Meet The Visionaries
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#1a1012] tracking-tight">
            Our Master Planners &amp; Creators
          </h2>
          <p className="text-base text-[#5a484c] leading-relaxed">
            A passionate team of event architects, floral artists, acoustic engineers, and hospitality specialists dedicated to perfection.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#9b7855]/20 shadow-lg hover:shadow-xl hover:border-[#5d1b22]/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1012]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-[#5d1b22] text-[#c4a161] text-[10px] font-bold uppercase tracking-wider">
                      {member.experience}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-serif font-bold text-[#1a1012]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#9b7855]">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#5a484c] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="p-6 pt-0 flex items-center gap-3">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="w-8 h-8 rounded-full bg-[#faf7f2] text-[#5d1b22] hover:bg-[#5d1b22] hover:text-white flex items-center justify-center transition-colors border border-[#9b7855]/20"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    className="w-8 h-8 rounded-full bg-[#faf7f2] text-[#5d1b22] hover:bg-[#5d1b22] hover:text-white flex items-center justify-center transition-colors border border-[#9b7855]/20"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    className="w-8 h-8 rounded-full bg-[#faf7f2] text-[#5d1b22] hover:bg-[#5d1b22] hover:text-white flex items-center justify-center transition-colors border border-[#9b7855]/20"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
