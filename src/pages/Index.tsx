
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SpeakersSection from '../components/SpeakersSection';
import SponsorshipSection from '../components/SponsorshipSection';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';

const Index = () => {
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
