import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../../data/eventData';
import { CountdownTimer } from '../common/CountdownTimer';
import { Sparkles, ArrowRight, ShieldCheck, Star, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#1a1012] text-white overflow-hidden flex items-center">
      {/* Dark luxury background image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519225495810-7517c31d9036?auto=format&fit=crop&q=80&w=2000"
          alt="Arkayuga Grand Event"
          className="w-full h-full object-cover object-center opacity-25 scale-105 animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1012] via-[#1a1012]/80 to-[#1a1012]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#5d1b22]/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5d1b22]/80 border border-[#c4a161]/50 text-xs sm:text-sm font-semibold text-[#c4a161] shadow-lg backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#c4a161] animate-spin" />
              <span>ARKAYUGA EVENTS MANAGEMENT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a161]" />
              <span className="text-white/80">PAN-INDIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight text-white leading-[1.15]">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4a161] via-[#e2c792] to-[#9b7855]">Unforgettable</span> Experiences &amp; Royal Celebrations
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              From palatial royal weddings and high-impact corporate summits to milestone birthday galas and concert-grade entertainment production across India.
            </p>

            {/* Feature Check Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-white/90">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#c4a161]" />
                10+ Years Experience
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin className="w-4 h-4 text-[#c4a161]" />
                25+ Cities Covered
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Star className="w-4 h-4 text-[#c4a161] fill-[#c4a161]" />
                500+ Grand Events
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenBookingModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#5d1b22] via-[#7a242c] to-[#9b7855] hover:from-[#7a242c] hover:to-[#5d1b22] shadow-xl shadow-[#5d1b22]/50 border border-[#c4a161]/60 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Event Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#c4a161]" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto px-7 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center backdrop-blur-md flex items-center justify-center gap-2"
              >
                Instant Budget Calculator
              </a>
            </div>
          </motion.div>

          {/* Right Column: Countdown Card & Upcoming Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-gradient-to-br from-[#2a181c]/90 via-[#1a1012]/95 to-[#3d1318]/90 rounded-3xl p-6 sm:p-8 border border-[#c4a161]/40 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#9b7855]/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#c4a161] font-bold">
                      Upcoming Grand Season
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                      Winter Wedding &amp; Summit Conclave
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#5d1b22] text-[#c4a161] text-[10px] font-bold border border-[#c4a161]/40 uppercase">
                    Live Timer
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="py-2">
                  <p className="text-xs text-white/70 mb-3 text-center sm:text-left">
                    Time remaining until main event booking window:
                  </p>
                  <CountdownTimer targetDate={COMPANY_INFO.upcomingEventDate} variant="hero" />
                </div>

                {/* Event Highlights Card */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-white/90">
                    <span className="text-white/60">Location:</span>
                    <span className="font-semibold text-[#c4a161]">Chennai &amp; Pan-India Destinations</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/90">
                    <span className="text-white/60">Services Included:</span>
                    <span className="font-semibold text-white">Full Event Architecture &amp; AV</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/90">
                    <span className="text-white/60">Consultation Fee:</span>
                    <span className="font-bold text-emerald-400">100% Free Consultation</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBookingModal()}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#9b7855] to-[#5d1b22] hover:from-[#b08d6a] hover:to-[#7a242c] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all border border-[#c4a161]/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#c4a161]" />
                  Reserve Your Date Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
