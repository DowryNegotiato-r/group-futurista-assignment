
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-event-primary/90 to-event-accent/80 mix-blend-multiply"
        aria-hidden="true"
      ></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070")'}}
        aria-hidden="true"
      ></div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl">
          <div className="inline-block bg-event-accent/90 rounded-full px-4 py-1 mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            April 15-17, 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            The Future of Innovation & Technology
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-lg animate-fade-in" style={{animationDelay: '0.6s'}}>
            Join industry leaders and innovators for three days of inspiring talks, 
            workshops, and networking opportunities at the premier tech event of the year.
          </p>
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="flex items-center">
              <Calendar className="mr-2" size={20} />
              <span>April 15-17, 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" size={20} />
              <span>Tech Conference Center, San Francisco</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '1s'}}>
            <a href="#register" className="btn-primary">
              Register Now
            </a>
            <a href="#about" className="bg-white text-event-primary border border-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
