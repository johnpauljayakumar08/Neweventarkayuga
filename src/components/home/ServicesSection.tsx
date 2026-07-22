import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../../data/eventData';
import { Service } from '../../types';
import {
  HeartHandshake,
  Building2,
  Cake,
  Rocket,
  LayoutGrid,
  Sliders,
  Flower2,
  Car,
  Music,
  Camera,
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onOpenBookingModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenBookingModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Weddings', 'Corporate', 'Social', 'Production', 'Design'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake': return HeartHandshake;
      case 'Building2': return Building2;
      case 'Cake': return Cake;
      case 'Rocket': return Rocket;
      case 'LayoutGrid': return LayoutGrid;
      case 'Sliders': return Sliders;
      case 'Flower2': return Flower2;
      case 'Car': return Car;
      case 'Music': return Music;
      case 'Camera': return Camera;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#1a1012] text-white relative overflow-hidden">
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#5d1b22]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#9b7855]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5d1b22] border border-[#c4a161]/40 text-xs font-bold uppercase tracking-widest text-[#c4a161]">
            <Sparkles className="w-3.5 h-3.5" />
            Comprehensive Event Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">
            Our Event Management Services
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-sans">
            End-to-end event planning, spatial decor, audiovisual production, artist booking, and guest hospitality curated with perfection.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#9b7855] text-white shadow-lg border border-[#c4a161]'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat} Services
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = getServiceIcon(service.iconName);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[#241619] rounded-2xl overflow-hidden border border-[#9b7855]/30 shadow-xl hover:border-[#c4a161] hover:shadow-2xl transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241619] via-transparent to-transparent" />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#5d1b22]/90 backdrop-blur-md border border-[#c4a161]/50 text-[10px] font-bold uppercase tracking-wider text-[#c4a161]">
                      {service.category}
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-400">
                      Starting {service.startingPrice}
                    </div>

                    {/* Service Icon */}
                    <div className="absolute -bottom-5 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[#9b7855] to-[#5d1b22] text-white flex items-center justify-center p-2.5 shadow-lg border border-[#c4a161]/40">
                      <IconComponent className="w-6 h-6 text-[#c4a161]" />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 pt-8 space-y-4">
                    <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#c4a161] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#c4a161] font-semibold italic">
                      "{service.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm text-white/70 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-white/80">
                          <Check className="w-3.5 h-3.5 text-[#c4a161] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons Footer */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#c4a161]" />
                  </button>

                  <button
                    onClick={() => onOpenBookingModal(service.title)}
                    className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#9b7855] to-[#5d1b22] hover:from-[#b08d6a] hover:to-[#7a242c] text-xs font-bold text-white shadow transition-all border border-[#c4a161]/40 cursor-pointer whitespace-nowrap"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
