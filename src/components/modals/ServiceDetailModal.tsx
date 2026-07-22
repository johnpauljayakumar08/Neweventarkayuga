import React from 'react';
import { Service } from '../../types';
import { X, Check, ArrowRight, Sparkles, MapPin, ShieldCheck } from 'lucide-react';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onOpenBookingModal: (serviceName?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenBookingModal,
}) => {
  if (!service) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#1a1012] rounded-3xl overflow-hidden border border-[#c4a161]/50 shadow-2xl my-8 text-white max-h-[90vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#5d1b22] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto space-y-8 p-6 sm:p-8">
          {/* Hero Banner Header */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#9b7855]/40">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1012] via-[#1a1012]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#5d1b22] border border-[#c4a161]/50 text-xs font-bold uppercase tracking-widest text-[#c4a161]">
                {service.category} Category
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                {service.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#c4a161] font-semibold italic">
                "{service.tagline}"
              </p>
            </div>
          </div>

          {/* Pricing & Summary Badge */}
          <div className="bg-[#241619] p-6 rounded-2xl border border-[#9b7855]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-white/60 uppercase tracking-wider block">
                Estimated Starting Investment
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#c4a161]">
                {service.startingPrice}
              </span>
              <p className="text-xs text-emerald-400 mt-0.5">
                Includes full planning, execution, and regional coordination
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBookingModal(service.title);
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9b7855] to-[#5d1b22] hover:from-[#b08d6a] hover:to-[#7a242c] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all border border-[#c4a161]/50 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#c4a161]" />
              Book This Service
            </button>
          </div>

          {/* Detailed Description */}
          <div className="space-y-3">
            <h3 className="text-xl font-serif font-bold text-white">
              Service Overview
            </h3>
            <p className="text-sm text-white/80 leading-relaxed font-sans">
              {service.longDescription}
            </p>
          </div>

          {/* Features Included */}
          <div className="space-y-3">
            <h3 className="text-xl font-serif font-bold text-white">
              Core Highlights &amp; Features Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90">
                  <Check className="w-4 h-4 text-[#c4a161] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subservices Breakdown */}
          {service.subServices && service.subServices.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">
                Detailed Module Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.subServices.map((sub, sIdx) => (
                  <div key={sIdx} className="p-4 rounded-xl bg-[#241619] border border-[#9b7855]/20 space-y-1">
                    <h4 className="text-sm font-bold text-[#c4a161]">
                      {sub.name}
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Image Previews */}
          {service.galleryImages && service.galleryImages.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-serif font-bold text-white">
                Past Execution Previews
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {service.galleryImages.map((img, gIdx) => (
                  <div key={gIdx} className="h-36 rounded-xl overflow-hidden border border-white/10">
                    <img src={img} alt="Execution preview" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
