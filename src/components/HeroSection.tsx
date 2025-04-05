
import React, { useEffect } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxBg = document.querySelector('.parallax-bg');
      const heroContent = document.querySelector('.hero-content');
      
      if (parallaxBg) {
        (parallaxBg as HTMLElement).style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
      
      if (heroContent) {
        (heroContent as HTMLElement).style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 parallax">
      <div 
        className="parallax-bg" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=7360&auto=format&fit=crop")'
        }}
        aria-hidden="true"
      ></div>
      
      <div 
        className="absolute inset-0 bg-gradient-to-r from-event-primary/90 to-event-accent/80 mix-blend-multiply"
        aria-hidden="true"
      ></div>
      
      <div className="blob floating-slow" 
        style={{
          width: '300px', 
          height: '300px', 
          backgroundColor: '#4567b7', 
          top: '15%', 
          right: '10%',
          opacity: 0.2
        }}>
      </div>
      
      <div className="blob floating-delayed" 
        style={{
          width: '200px', 
          height: '200px', 
          backgroundColor: '#2196f3', 
          bottom: '15%', 
          left: '10%',
          opacity: 0.15
        }}>
      </div>
      
      <div className="container-custom relative z-10 text-white hero-content">
        <div className="max-w-3xl">
          <div className="inline-block bg-event-accent/90 rounded-full px-4 py-1 mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            April 15-17, 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Group Futurista: Tech Innovation Summit
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
            <a href="#register" className="btn-primary group">
              Register Now
              <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={18} />
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
