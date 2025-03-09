import React, { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import InitiativesSection from '@/components/InitiativesSection';
import InfoBulletin from '@/components/InfoBulletin';
import TeamSection from '@/components/TeamSection';
import EventGallery from '@/components/EventGallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';





const Index: React.FC = () => {
  useEffect(() => {
    const loadFontAwesome = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
      document.head.appendChild(link);
    };
    
    loadFontAwesome();
  }, []);

  return (
    <main className="min-h-screen bg-background text-white tech-gradient overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <InfoBulletin />
      <AboutSection />
      <TestimonialsSection />
      <InitiativesSection />
      <TeamSection />
      <EventGallery />
      <ContactSection />
      <Footer />
      <Toaster />
    </main>
  );
};

export default Index;
