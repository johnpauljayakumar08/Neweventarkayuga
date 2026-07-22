import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, Check, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

interface CalculatorProps {
  onOpenBookingModal: (customNotes?: string) => void;
}

export const InteractiveQuoteCalculator: React.FC<CalculatorProps> = ({ onOpenBookingModal }) => {
  const [eventType, setEventType] = useState('Wedding');
  const [guestCount, setGuestCount] = useState(250);
  const [days, setDays] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'Custom 3D Theme & Decor',
    '4K Drone Photography & Cinematic Film',
  ]);

  const eventTypes = [
    { name: 'Wedding', basePrice: 200000, perGuest: 400 },
    { name: 'Corporate Summit', basePrice: 120000, perGuest: 300 },
    { name: 'Birthday Party', basePrice: 60000, perGuest: 250 },
    { name: 'Product Launch', basePrice: 150000, perGuest: 350 },
    { name: 'Social Gala', basePrice: 100000, perGuest: 300 },
    { name: 'Live Concert', basePrice: 250000, perGuest: 200 },
  ];

  const addonsList = [
    { name: 'Custom 3D Theme & Decor', price: 80000 },
    { name: 'Concert Sound & Intelligent Lighting', price: 65000 },
    { name: 'Gourmet Catering Curation', price: 90000 },
    { name: 'VIP Guest Hospitality & Fleet', price: 50000 },
    { name: 'Celebrity Artist / Live Band', price: 150000 },
    { name: '4K Drone Photography & Film', price: 45000 },
  ];

  const toggleAddon = (addonName: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonName)
        ? prev.filter((a) => a !== addonName)
        : [...prev, addonName]
    );
  };

  // Calculation Logic
  const selectedEventObj = eventTypes.find((e) => e.name === eventType) || eventTypes[0];
  const basePrice = selectedEventObj.basePrice;
  const guestCost = guestCount * selectedEventObj.perGuest;
  const daysMultiplier = days === 1 ? 1 : days === 2 ? 1.7 : 2.4;

  const addonsCost = selectedAddons.reduce((sum, addonName) => {
    const item = addonsList.find((a) => a.name === addonName);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalEstimateMin = Math.round((basePrice + guestCost + addonsCost) * daysMultiplier);
  const totalEstimateMax = Math.round(totalEstimateMin * 1.25);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleApplyEstimate = () => {
    const summaryNote = `Estimated ${eventType} for ${guestCount} guests over ${days} day(s). Addons: ${
      selectedAddons.length > 0 ? selectedAddons.join(', ') : 'Standard'
    }. Estimated Cost Range: ${formatINR(totalEstimateMin)} - ${formatINR(totalEstimateMax)}`;

    onOpenBookingModal(summaryNote);
  };

  return (
    <section id="calculator" className="py-24 bg-[#1a1012] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5d1b22] border border-[#c4a161]/40 text-xs font-bold uppercase tracking-widest text-[#c4a161]">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Investment Tool
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">
            Instant Budget &amp; Quote Calculator
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-sans">
            Customize your event parameters to generate a real-time estimated budget range based on guest count, duration, and bespoke production add-ons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 bg-[#241619] rounded-3xl p-6 sm:p-8 border border-[#9b7855]/30 shadow-2xl space-y-8">
            {/* Step 1: Event Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#c4a161] block">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {eventTypes.map((et) => (
                  <button
                    key={et.name}
                    type="button"
                    onClick={() => setEventType(et.name)}
                    className={`p-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                      eventType === et.name
                        ? 'bg-[#5d1b22] text-[#c4a161] border-[#c4a161] shadow-lg'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {et.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                <span className="text-[#c4a161] uppercase tracking-wider">
                  2. Expected Guest Capacity
                </span>
                <span className="text-white text-base font-serif px-3 py-1 rounded-lg bg-[#5d1b22] border border-[#c4a161]/40">
                  {guestCount} Guests
                </span>
              </div>

              <input
                type="range"
                min="50"
                max="1500"
                step="25"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-[#c4a161] h-2 rounded-lg bg-white/20 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-white/50 font-medium">
                <span>50 Guests (Intimate)</span>
                <span>500 Guests (Grand)</span>
                <span>1500+ Guests (Royal Arena)</span>
              </div>
            </div>

            {/* Step 3: Event Duration */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#c4a161] block">
                3. Event Duration
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: '1 Day Event', value: 1 },
                  { label: '2 Days Celebration', value: 2 },
                  { label: '3+ Days Festival', value: 3 },
                ].map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    onClick={() => setDays(d.value)}
                    className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                      days === d.value
                        ? 'bg-[#9b7855] text-white border-[#c4a161]'
                        : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-on Production Modules */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#c4a161] block">
                4. Select Bespoke Modules &amp; Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.name);
                  return (
                    <div
                      key={addon.name}
                      onClick={() => toggleAddon(addon.name)}
                      className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-[#5d1b22]/70 text-white border-[#c4a161]'
                          : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span className="pr-2">{addon.name}</span>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#c4a161] border-[#c4a161] text-[#1a1012]' : 'border-white/30'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Estimate Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#3d1318] via-[#241619] to-[#1a1012] rounded-3xl p-6 sm:p-8 border border-[#c4a161]/50 shadow-2xl space-y-6 relative sticky top-28">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c4a161] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Instant Estimate Summary
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                Estimated Budget Range
              </h3>
            </div>

            {/* Price Output Display */}
            <div className="bg-black/50 rounded-2xl p-6 border border-[#c4a161]/30 text-center space-y-2">
              <span className="text-xs text-white/60 uppercase tracking-wider block">
                Estimated Total (INR)
              </span>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#c4a161] via-[#e2c792] to-[#9b7855]">
                {formatINR(totalEstimateMin)} - {formatINR(totalEstimateMax)}
              </div>
              <p className="text-[11px] text-emerald-400 font-medium pt-1">
                Includes planning, stage setup, vendor coordination &amp; tax buffer
              </p>
            </div>

            {/* Itemized Parameters list */}
            <div className="space-y-2 text-xs text-white/80 bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex justify-between">
                <span className="text-white/60">Event Type:</span>
                <span className="font-bold text-white">{eventType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Guest Capacity:</span>
                <span className="font-bold text-white">{guestCount} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Duration:</span>
                <span className="font-bold text-white">{days} Day(s)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Selected Addons:</span>
                <span className="font-bold text-[#c4a161] text-right">{selectedAddons.length} Modules</span>
              </div>
            </div>

            <button
              onClick={handleApplyEstimate}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c4a161] via-[#9b7855] to-[#5d1b22] text-[#1a1012] hover:text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all border border-[#c4a161] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Official Written Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-white/50 leading-normal">
              * This estimator provides an indicative range based on standard regional rates in India. Final quotes are issued after full site inspection and menu selection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
