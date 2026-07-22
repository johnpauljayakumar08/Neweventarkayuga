import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/eventData';
import { GalleryItem } from '../../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Camera, Maximize2, X, MapPin, Sparkles } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Weddings', 'Corporate', 'Decor', 'Social'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5d1b22]/10 border border-[#5d1b22]/20 text-xs font-bold uppercase tracking-widest text-[#5d1b22]">
            <Camera className="w-3.5 h-3.5 text-[#9b7855]" />
            Visual Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#1a1012] tracking-tight">
            Event Gallery &amp; Past Moments
          </h2>
          <p className="text-base text-[#5a484c] leading-relaxed">
            Explore glimpses of our royal mandaps, corporate brand launches, floral installations, and grand celebration stages.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#5d1b22] text-white shadow border border-[#9b7855]'
                    : 'bg-white text-[#2c2023] hover:bg-[#5d1b22]/10 border border-[#9b7855]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative pb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-2xl overflow-visible"
          >
            {filteredItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  onClick={() => setSelectedImage(item)}
                  className="group relative h-80 rounded-2xl overflow-hidden shadow-lg border border-[#9b7855]/30 cursor-pointer bg-[#1a1012]"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1012] via-[#1a1012]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Overlay content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 rounded-full bg-[#5d1b22]/90 border border-[#c4a161]/50 text-[10px] font-bold uppercase tracking-widest text-[#c4a161]">
                        {item.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <h3 className="text-xl font-bold font-serif text-white">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs text-[#c4a161] font-medium">
                          {item.subtitle}
                        </p>
                      )}
                      {item.location && (
                        <div className="flex items-center gap-1 text-[11px] text-white/70 pt-1">
                          <MapPin className="w-3 h-3 text-[#9b7855]" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#1a1012] rounded-3xl overflow-hidden border border-[#c4a161]/50 shadow-2xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#5d1b22] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain bg-black"
            />

            <div className="p-6 bg-[#241619] border-t border-white/10 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c4a161] font-bold">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold font-serif mt-0.5">
                  {selectedImage.title}
                </h3>
                {selectedImage.subtitle && (
                  <p className="text-xs text-white/70">{selectedImage.subtitle}</p>
                )}
              </div>

              {selectedImage.location && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-xs text-white/90">
                  <MapPin className="w-4 h-4 text-[#c4a161]" />
                  <span>{selectedImage.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
