import React from 'react';
import { TESTIMONIALS } from '../../data/eventData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote, Sparkles } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#1a1012] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5d1b22] border border-[#c4a161]/40 text-xs font-bold uppercase tracking-widest text-[#c4a161]">
            <Sparkles className="w-3.5 h-3.5" />
            Client Love &amp; Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">
            What Our Hosts Say
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-sans">
            Real experiences from brides, grooms, marketing heads, and families across India who trusted Arkayuga Events.
          </p>
        </div>

        {/* Swiper Testimonials Slider */}
        <div className="pb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-2xl"
          >
            {TESTIMONIALS.map((test) => (
              <SwiperSlide key={test.id} className="h-full">
                <div className="bg-[#241619] rounded-3xl p-8 border border-[#9b7855]/30 shadow-xl flex flex-col justify-between h-full space-y-6 relative group hover:border-[#c4a161]/60 transition-all">
                  <Quote className="w-10 h-10 text-[#9b7855]/30 absolute top-6 right-6" />

                  <div className="space-y-4">
                    {/* Star rating */}
                    <div className="flex items-center gap-1 text-[#c4a161]">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#c4a161]" />
                      ))}
                    </div>

                    <p className="text-sm text-white/80 leading-relaxed italic">
                      "{test.quote}"
                    </p>
                  </div>

                  {/* Author footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#c4a161]"
                    />
                    <div>
                      <h4 className="text-base font-bold font-serif text-white">
                        {test.name}
                      </h4>
                      <p className="text-xs text-[#c4a161] font-semibold">
                        {test.eventType} • {test.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
