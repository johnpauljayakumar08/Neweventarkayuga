import React from 'react';
import { motion } from 'motion/react';
import { ARKAYUGA_EDGES, COMPANY_INFO } from '../../data/eventData';
import { Users, Sparkles, Award, Clock, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBookingModal }) => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Users,
    Sparkles,
    Award,
    Clock,
    MapPin,
    ShieldCheck,
  };

  return (
    <section id="about" className="py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5d1b22]/10 border border-[#5d1b22]/20 text-xs font-bold uppercase tracking-widest text-[#5d1b22]">
            <Sparkles className="w-3.5 h-3.5 text-[#9b7855]" />
            About Arkayuga Events
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#1a1012] tracking-tight leading-tight">
            Crafting Timeless Moments With Precision, Passion &amp; Elegance
          </h2>
          <p className="text-base sm:text-lg text-[#5a484c] leading-relaxed">
            Founded with a vision to redefine Indian event management, Arkayuga Events blends rich cultural traditions with contemporary stage design, state-of-the-art audiovisual production, and seamless hospitality.
          </p>
        </div>

        {/* Story & Feature Cards Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Image with Badge Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
                alt="Arkayuga Event Setup"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1012]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#5d1b22]/90 backdrop-blur-md border border-[#c4a161]/40 text-white space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#c4a161] font-bold">
                  The Arkayuga Guarantee
                </span>
                <p className="text-sm font-serif font-semibold leading-snug">
                  "Every celebration is a masterpiece of emotion, floral art, and flawless stage engineering."
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-6 sm:right-4 bg-gradient-to-br from-[#9b7855] to-[#5d1b22] text-white p-5 rounded-2xl shadow-xl border border-[#c4a161]/50 text-center">
              <span className="block text-3xl font-extrabold font-serif text-[#c4a161]">
                {COMPANY_INFO.experienceYears}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">
                Years Of Excellence
              </span>
            </div>
          </motion.div>

          {/* Right Column: Key Details & Bullet points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9b7855]">
                Why Leading Families &amp; Corporations Choose Us
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#1a1012]">
                Your Vision, Planned To Perfection
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#4a3a3e] leading-relaxed">
              Whether you are planning a royal palace wedding in Udaipur, a beachside mandap in Goa, or an 800-delegate corporate conclave in Bangalore or Chennai, our in-house team handles every moving part: from 3D theme visualization and exotic floral setups to concert acoustics, catering curation, and VIP logistics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                'Full In-House AV & Lighting Production',
                'Custom 3D Spatial Rendering & Staging',
                'VIP Airport & Resort Concierge Management',
                'A-List Celebrity & Artist Booking Direct',
                '100% Transparent Itemized Pricing',
                'Digital Guest Check-In & App Support',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white shadow-sm border border-[#9b7855]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#5d1b22] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#2c2023]">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onOpenBookingModal()}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#5d1b22] hover:bg-[#7a242c] shadow-lg transition-all border border-[#9b7855]/40 cursor-pointer"
              >
                Schedule Planning Call
              </button>
              <a
                href="#services"
                className="text-xs sm:text-sm font-bold text-[#5d1b22] hover:text-[#9b7855] underline underline-offset-4 transition-colors"
              >
                Explore All 10 Services &rarr;
              </a>
            </div>
          </motion.div>
        </div>

        {/* The Arkayuga Edge Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1012]">
              The Arkayuga Edge
            </h3>
            <p className="text-sm text-[#6c5a5e] mt-1">
              Six core promises that define our event management standard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARKAYUGA_EDGES.map((edge, idx) => {
              const IconComp = iconMap[edge.iconName] || Sparkles;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-[#9b7855]/20 shadow-md hover:shadow-xl hover:border-[#5d1b22]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#5d1b22]/10 text-[#5d1b22] flex items-center justify-center mb-4 group-hover:bg-[#5d1b22] group-hover:text-[#c4a161] transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-serif text-[#1a1012] mb-2 group-hover:text-[#5d1b22] transition-colors">
                    {edge.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5a484c] leading-relaxed">
                    {edge.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
