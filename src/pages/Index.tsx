
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SpeakersSection from '../components/SpeakersSection';
import SponsorshipSection from '../components/SponsorshipSection';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set up scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.slide-up, .staggered-item');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If element is in viewport
        if (rect.top <= windowHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <SponsorshipSection />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
