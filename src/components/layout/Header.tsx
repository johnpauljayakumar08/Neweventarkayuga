import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../../data/eventData';
import { Phone, Mail, MapPin, Calendar, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active link highlight on scroll
      const sections = ['home', 'about', 'services', 'schedule', 'packages', 'gallery', 'locations', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Locations', href: '#locations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-[#4a151b] text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#c4a161] font-medium">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Pan-India Premier Event Management &amp; Luxury Planners
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Calendar className="w-3.5 h-3.5 text-[#9b7855]" />
              Bookings Open for 2026-2027 Wedding &amp; Corporate Season
            </span>
          </div>

          <div className="flex items-center space-x-6 text-white/90">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-[#c4a161] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#9b7855]" />
              {COMPANY_INFO.phone}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-[#c4a161] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#9b7855]" />
              {COMPANY_INFO.email}
            </a>
            <span className="flex items-center gap-1 text-white/70">
              <MapPin className="w-3.5 h-3.5 text-[#9b7855]" />
              Chennai, IN
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#5d1b22]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#9b7855]/30'
            : 'bg-gradient-to-b from-[#1a1012]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#9b7855] to-[#5d1b22] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#1a1012] rounded-[7px] flex items-center justify-center border border-[#c4a161]/40">
                <span className="font-serif font-bold text-xl text-[#c4a161]">A</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl sm:text-2xl text-white tracking-wider flex items-center gap-1">
                ARKAYUGA
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c4a161]" />
              </span>
              <span className="text-[10px] tracking-widest text-[#c4a161] uppercase font-semibold">
                EVENTS &amp; CELEBRATIONS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-full text-xs xl:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#9b7855]/20 text-[#c4a161] border border-[#c4a161]/40'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#c4a161]" />
              Call Direct
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#9b7855] to-[#7a242c] hover:from-[#b08d6a] hover:to-[#5d1b22] shadow-lg shadow-[#5d1b22]/40 transition-all transform hover:-translate-y-0.5 border border-[#c4a161]/50 flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Book Event
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#c4a161]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#1a1012]/98 backdrop-blur-xl border-b border-[#9b7855]/40 shadow-2xl transition-all duration-300">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <div className="p-3 mb-2 rounded-xl bg-[#5d1b22]/40 border border-[#9b7855]/30 text-xs text-white/90 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c4a161]" />
                {COMPANY_INFO.phone}
              </span>
              <span className="text-[#c4a161] font-semibold">10+ Yrs Exp</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-white/90 hover:text-white hover:bg-[#5d1b22]/60 border border-transparent hover:border-[#9b7855]/30 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#c4a161]" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#9b7855] to-[#5d1b22] shadow-lg text-center border border-[#c4a161]/50 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Request Custom Event Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
