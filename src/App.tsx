import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { QuickStatsRibbon } from './components/home/QuickStatsRibbon';
import { AboutSection } from './components/home/AboutSection';
import { ServicesSection } from './components/home/ServicesSection';
import { ScheduleSection } from './components/home/ScheduleSection';
import { PackagesSection } from './components/home/PackagesSection';
import { InteractiveQuoteCalculator } from './components/home/InteractiveQuoteCalculator';
import { GallerySection } from './components/home/GallerySection';
import { VenueLocationSection } from './components/home/VenueLocationSection';
import { TeamSection } from './components/home/TeamSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { FAQSection } from './components/home/FAQSection';
import { ContactSection } from './components/home/ContactSection';
import { ServiceDetailModal } from './components/modals/ServiceDetailModal';
import { BookingModal } from './components/modals/BookingModal';
import { Service } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPresetService, setBookingPresetService] = useState('Wedding Event Management');
  const [bookingPresetNotes, setBookingPresetNotes] = useState('');

  const handleOpenBookingModal = (serviceName?: string) => {
    if (serviceName) {
      if (serviceName.startsWith('Estimated')) {
        setBookingPresetNotes(serviceName);
      } else {
        setBookingPresetService(serviceName);
      }
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2c2023] font-sans selection:bg-[#5d1b22] selection:text-white flex flex-col">
      {/* Sticky Header Navbar */}
      <Header onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Page Body */}
      <main className="flex-grow">
        {/* Hero Section with Live Timer */}
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* Floating Quick Stats Ribbon */}
        <QuickStatsRibbon />

        {/* About & The Arkayuga Edge */}
        <AboutSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Comprehensive 10 Services Grid */}
        <ServicesSection
          onSelectService={(srv) => setSelectedService(srv)}
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* Program Agenda & Schedule */}
        <ScheduleSection />

        {/* Service Tiers & Packages */}
        <PackagesSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Interactive Quote & Budget Calculator */}
        <InteractiveQuoteCalculator onOpenBookingModal={handleOpenBookingModal} />

        {/* Photo Gallery & Lightbox */}
        <GallerySection />

        {/* Pan-India Venues & Locations */}
        <VenueLocationSection />

        {/* Visionary Team */}
        <TeamSection />

        {/* Client Endorsements & Reviews */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact Form & Direct Desk */}
        <ContactSection initialNotes={bookingPresetNotes} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Service Detail Drawer Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Booking & Consultation Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        presetService={bookingPresetService}
        presetNotes={bookingPresetNotes}
      />
    </div>
  );
}
