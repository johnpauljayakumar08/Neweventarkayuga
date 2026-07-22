import React from 'react';
import { motion } from 'motion/react';
import { PACKAGE_TIERS } from '../../data/eventData';
import { PackageTier } from '../../types';
import { Sparkles, Check, X, ShieldCheck, ArrowRight } from 'lucide-react';

interface PackagesSectionProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="packages" className="py-24 bg-[#1a1012] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5d1b22] border border-[#c4a161]/40 text-xs font-bold uppercase tracking-widest text-[#c4a161]">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Investment &amp; Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">
            Curated Service Packages
          </h2>
          <p className="text-base text-white/70 leading-relaxed">
            Choose from our all-inclusive event management tiers or customize a bespoke setup tailored to your guest list and venue vision.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGE_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 border flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? 'bg-gradient-to-b from-[#3a1318] to-[#1a1012] border-[#c4a161] shadow-2xl md:-translate-y-3'
                  : 'bg-[#241619] border-[#9b7855]/30 shadow-xl hover:border-[#c4a161]/50'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#c4a161] text-[#1a1012] text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-[#1a1012]" />
                  Most Popular
                </div>
              )}

              <div>
                {/* Header */}
                <div className="space-y-2 border-b border-white/10 pb-6 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c4a161]">
                    {tier.guestCapacity}
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-white">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-white/60">
                    {tier.subtitle}
                  </p>

                  <div className="pt-4 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold font-serif text-[#c4a161]">
                      {tier.price}
                    </span>
                    <span className="text-xs text-white/50">/ Starting Estimate</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#c4a161] block">
                    What's Included:
                  </span>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}

                  {tier.notIncluded && tier.notIncluded.map((notFeat, nIdx) => (
                    <div key={nIdx} className="flex items-start gap-2.5 text-xs text-white/40 line-through">
                      <div className="w-4 h-4 rounded-full bg-white/5 text-white/30 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3" />
                      </div>
                      <span>{notFeat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBookingModal(`Package: ${tier.name}`)}
                className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all border shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                  tier.popular
                    ? 'bg-gradient-to-r from-[#c4a161] to-[#9b7855] text-[#1a1012] border-[#c4a161] hover:brightness-110'
                    : 'bg-gradient-to-r from-[#9b7855] to-[#5d1b22] text-white border-[#c4a161]/40 hover:from-[#b08d6a] hover:to-[#7a242c]'
                }`}
              >
                <span>Select {tier.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
