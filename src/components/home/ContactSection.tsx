import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../../data/eventData';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialNotes = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    eventType: 'Wedding Management',
    eventDate: '',
    location: '',
    budgetRange: '₹3,00,000 - ₹5,00,000',
    message: initialNotes,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5d1b22]/10 border border-[#5d1b22]/20 text-xs font-bold uppercase tracking-widest text-[#5d1b22]">
                <Send className="w-3.5 h-3.5 text-[#9b7855]" />
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#1a1012] tracking-tight">
                Let's Plan Your Next Celebration
              </h2>
              <p className="text-base text-[#5a484c] leading-relaxed">
                Have an upcoming wedding, corporate summit, or milestone birthday? Speak directly with our lead event planners or request a tailored proposal.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="p-5 rounded-2xl bg-white border border-[#9b7855]/20 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5d1b22]/10 text-[#5d1b22] flex items-center justify-center shrink-0 group-hover:bg-[#5d1b22] group-hover:text-[#c4a161] transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9b7855]">
                    Direct Planning Line
                  </span>
                  <h4 className="text-lg font-bold text-[#1a1012]">
                    {COMPANY_INFO.phone}
                  </h4>
                  <p className="text-[11px] text-[#6c5a5e]">Available 24/7 for urgent event inquiries</p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-5 rounded-2xl bg-white border border-[#9b7855]/20 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5d1b22]/10 text-[#5d1b22] flex items-center justify-center shrink-0 group-hover:bg-[#5d1b22] group-hover:text-[#c4a161] transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9b7855]">
                    Email Proposals
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-[#1a1012]">
                    {COMPANY_INFO.email}
                  </h4>
                  <p className="text-[11px] text-[#6c5a5e]">Responses guaranteed within 4 hours</p>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-white border border-[#9b7855]/20 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#5d1b22]/10 text-[#5d1b22] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9b7855]">
                    Chennai Headquarters
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1a1012] leading-snug">
                    {COMPANY_INFO.address}
                  </h4>
                  <p className="text-[11px] text-[#6c5a5e] pt-0.5">Execution Hubs: Chennai, Bangalore, Hyderabad, Goa, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#9b7855]/30 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-4 border-emerald-200">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif font-bold text-[#1a1012]">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-[#5a484c] max-w-md mx-auto">
                    Thank you, <span className="font-bold text-[#5d1b22]">{formData.fullName}</span>. Our senior lead planner is reviewing your details and will connect with you shortly at <span className="font-bold">{formData.mobile}</span>.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      mobile: '',
                      eventType: 'Wedding Management',
                      eventDate: '',
                      location: '',
                      budgetRange: '₹3,00,000 - ₹5,00,000',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#5d1b22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#7a242c] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#9b7855]/20 pb-4">
                  <h3 className="text-2xl font-serif font-bold text-[#1a1012]">
                    Request Custom Event Proposal
                  </h3>
                  <p className="text-xs text-[#6c5a5e]">
                    Fill out the form below for a free consultation and itemized budget estimate.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2c2023] uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Varma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf7f2] border border-[#9b7855]/30 text-xs sm:text-sm text-[#1a1012] focus:outline-none focus:border-[#5d1b22]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2c2023] uppercase tracking-wider">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf7f2] border border-[#9b7855]/30 text-xs sm:text-sm text-[#1a1012] focus:outline-none focus:border-[#5d1b22]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2c2023] uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf7f2] border border-[#9b7855]/30 text-xs sm:text-sm text-[#1a1012] focus:outline-none focus:border-[#5d1b22]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2c2023] uppercase tracking-wider">
                      Event Category
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf7f2] border border-[#9b7855]/30 text-xs sm:text-sm text-[#1a1012] focus:outline-none focus:border-[#5d1b22]"
                    >
                      <option>Wedding Management</option>
                      <option>Corporate Summit &amp; Conclave</option>
                      <option>Birthday Party Celebration</option>
                      <option>Product Launch &amp; Mall Activation</option>
                      <option>Exhibition Stall Design</option>
                      <option>Tech &amp; Production AV Support</option>
                      <option>Floral Decor &amp; Lounge Setup</option>
                      <option>Celebrity &amp; Artist Booking</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2c2023] uppercase tracking-wider">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf7f2] border border-[#9b7855]/30 text-xs sm:text-sm text-[#1a1012] focus:outline-none focus:border-[#5d1b22]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2c2023] uppercase tracking-wider">
                      Event City / Venue
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chennai, Goa, Jaipur"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf7f2] border border-[#9b7855]/30 text-xs sm:text-sm text-[#1a1012] focus:outline-none focus:border-[#5d1b22]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2c2023] uppercase tracking-wider">
                    Special Requirements &amp; Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about guest count, theme preferences, catering needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf7f2] border border-[#9b7855]/30 text-xs sm:text-sm text-[#1a1012] focus:outline-none focus:border-[#5d1b22]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#5d1b22] via-[#7a242c] to-[#9b7855] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:brightness-110 transition-all border border-[#c4a161]/50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#c4a161]" />
                  Send Proposal Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
