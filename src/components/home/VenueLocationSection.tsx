import React, { useState } from 'react';
import { PAN_INDIA_CITIES, COMPANY_INFO } from '../../data/eventData';
import { MapPin, Building, Navigation, Compass, CheckCircle } from 'lucide-react';

export const VenueLocationSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(PAN_INDIA_CITIES[0]);

  return (
    <section id="locations" className="py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5d1b22]/10 border border-[#5d1b22]/20 text-xs font-bold uppercase tracking-widest text-[#5d1b22]">
            <MapPin className="w-3.5 h-3.5 text-[#9b7855]" />
            Pan-India &amp; Destination Destinations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#1a1012] tracking-tight">
            Pan-India Venue &amp; Regional Reach
          </h2>
          <p className="text-base text-[#5a484c] leading-relaxed">
            Headquartered in Chennai with active execution hubs and venue partnerships across India's tier-1 cities and luxury destination hubs.
          </p>
        </div>

        {/* Interactive Cities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left List of Cities */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {PAN_INDIA_CITIES.map((city) => {
              const isSelected = selectedCity.name === city.name;
              return (
                <button
                  key={city.name}
                  onClick={() => setSelectedCity(city)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#5d1b22] text-white border-[#9b7855] shadow-lg scale-[1.02]'
                      : 'bg-white text-[#2c2023] hover:bg-[#5d1b22]/5 border-[#9b7855]/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-extrabold uppercase tracking-wider ${
                      isSelected ? 'text-[#c4a161]' : 'text-[#9b7855]'
                    }`}>
                      {city.region}
                    </span>
                    <MapPin className={`w-4 h-4 ${isSelected ? 'text-[#c4a161]' : 'text-[#5d1b22]'}`} />
                  </div>
                  <h3 className="text-base font-bold font-serif">
                    {city.name}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Selected City Highlight Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#9b7855]/30 shadow-xl space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#9b7855]/20 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#9b7855]">
                  Active Event Hub
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1012] mt-0.5">
                  {selectedCity.name} ({selectedCity.region})
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#5d1b22]/10 text-[#5d1b22] flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#4a3a3e]">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf7f2] border border-[#9b7855]/20">
                <Compass className="w-5 h-5 text-[#5d1b22] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1a1012]">Prime Venue Network</h4>
                  <p className="text-xs text-[#6c5a5e] mt-0.5">{selectedCity.landmark}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5d1b22] block">
                  Services Provided in {selectedCity.name}:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Venue Sourcing &amp; Permissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>3D Stage &amp; Floral Decor Fabrication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Concert Sound &amp; LED Production</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Guest Fleet &amp; Airport Concierge</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#9b7855]/20 text-xs font-semibold text-[#5d1b22]">
              <span>Direct Logistics Line: {COMPANY_INFO.phone}</span>
              <a href="#contact" className="hover:underline flex items-center gap-1 font-bold">
                Inquire Venue Availability &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
