import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../../data/eventData';
import { X, Sparkles, CheckCircle, Calendar, Phone, Mail, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
  presetNotes?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  presetService = 'Wedding Event Management',
  presetNotes = '',
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    eventType: presetService,
    eventDate: '',
    location: '',
    guestCount: '200-500',
    notes: presetNotes,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full bg-[#1a1012] rounded-3xl overflow-hidden border border-[#c4a161]/50 shadow-2xl my-8 text-white p-6 sm:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-[#5d1b22] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-400/40">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-serif font-bold text-white">
                Booking Reservation Request Sent!
              </h3>
              <p className="text-sm text-white/80 max-w-md mx-auto">
                Thank you <span className="font-bold text-[#c4a161]">{formData.fullName}</span>. Our senior event architect will contact you shortly on <span className="font-bold text-white">{formData.mobile}</span> to confirm date availability.
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-[#5d1b22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#7a242c] transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c4a161] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Arkayuga Events Reservation
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                Book Free Event Consultation
              </h3>
              <p className="text-xs text-white/60">
                Reserve your event date or request a bespoke proposal from our master planners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#241619] border border-[#9b7855]/40 text-xs sm:text-sm text-white focus:outline-none focus:border-[#c4a161]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#241619] border border-[#9b7855]/40 text-xs sm:text-sm text-white focus:outline-none focus:border-[#c4a161]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="priya@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#241619] border border-[#9b7855]/40 text-xs sm:text-sm text-white focus:outline-none focus:border-[#c4a161]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Service / Package
                </label>
                <input
                  type="text"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#241619] border border-[#9b7855]/40 text-xs sm:text-sm text-[#c4a161] font-bold focus:outline-none focus:border-[#c4a161]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Target Date
                </label>
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-3 py-3 rounded-xl bg-[#241619] border border-[#9b7855]/40 text-xs text-white focus:outline-none focus:border-[#c4a161]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-white/80">
                  City / Venue
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chennai, Goa"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-3 rounded-xl bg-[#241619] border border-[#9b7855]/40 text-xs text-white focus:outline-none focus:border-[#c4a161]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Guest Count
                </label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="w-full px-3 py-3 rounded-xl bg-[#241619] border border-[#9b7855]/40 text-xs text-white focus:outline-none focus:border-[#c4a161]"
                >
                  <option>50 - 150 Guests</option>
                  <option>150 - 400 Guests</option>
                  <option>400 - 800 Guests</option>
                  <option>800+ Royal Guests</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-white/80">
                Additional Notes or Estimator Summary
              </label>
              <textarea
                rows={3}
                placeholder="Mention specific theme preferences, artist choices..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#241619] border border-[#9b7855]/40 text-xs sm:text-sm text-white focus:outline-none focus:border-[#c4a161]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c4a161] via-[#9b7855] to-[#5d1b22] text-[#1a1012] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:brightness-110 transition-all border border-[#c4a161] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Confirm Consultation Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
