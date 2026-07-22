import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../../data/eventData';
import { Phone, Mail, MapPin, Sparkles, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#10090b] text-white pt-20 pb-12 border-t border-[#9b7855]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Top Newsletter & Brand Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#2a1317] via-[#5d1b22] to-[#3a1318] border border-[#c4a161]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c4a161] flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="w-4 h-4" />
              Stay Updated With Event Trends
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Subscribe To Our Event Inspiration Journal
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-lg">
              Get exclusive access to venue guides, seasonal floral trends, celebrity artist availability, and budget planning tips.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex items-center gap-2 max-w-md">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="px-4 py-3.5 rounded-xl bg-black/60 border border-white/20 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#c4a161] flex-1"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-[#c4a161] hover:bg-[#e2c792] text-[#1a1012] font-extrabold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4 text-emerald-800" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pt-4">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#9b7855] to-[#5d1b22] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#1a1012] rounded-[7px] flex items-center justify-center border border-[#c4a161]/40">
                  <span className="font-serif font-bold text-xl text-[#c4a161]">A</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-white tracking-wider">
                  ARKAYUGA
                </span>
                <span className="text-[10px] tracking-widest text-[#c4a161] uppercase font-semibold">
                  EVENTS &amp; CELEBRATIONS
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-2 text-xs text-white/60 space-y-1">
              <p className="font-semibold text-[#c4a161]">Pan-India Coverage:</p>
              <p>Chennai • Bangalore • Hyderabad • Goa • Udaipur • Jaipur • Mumbai • Delhi NCR • Kochi</p>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#c4a161]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#home" className="hover:text-white transition-colors">Home Page</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Event Schedule</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Service Packages</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Venue Reach</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Planner</a></li>
            </ul>
          </div>

          {/* Col 3: Event Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#c4a161]">
              Event Categories
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Direct Line */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#c4a161]">
              Contact Desk
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#c4a161] shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#c4a161] transition-colors font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#c4a161] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#c4a161] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c4a161] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.fullName}. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Pan-India Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
