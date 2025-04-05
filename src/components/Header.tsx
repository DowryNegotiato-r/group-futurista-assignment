
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-event-primary font-bold text-2xl">
            <span className="text-event-accent mr-2">GROUP</span>
            <span className={isScrolled ? 'text-event-primary' : 'text-white'}>FUTURISTA</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className={`${isScrolled ? 'text-event-primary' : 'text-white'} hover:text-white/80 font-medium`}>Home</a>
          <a href="#about" className={`${isScrolled ? 'text-event-primary' : 'text-white'} hover:text-white/80 font-medium`}>About</a>
          <a href="#speakers" className={`${isScrolled ? 'text-event-primary' : 'text-white'} hover:text-white/80 font-medium`}>Speakers</a>
          <a href="#sponsors" className={`${isScrolled ? 'text-event-primary' : 'text-white'} hover:text-white/80 font-medium`}>Sponsors</a>
          <a href="#register" className="btn-primary">Register Now</a>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full pb-4 shadow-lg animate-fade-in">
          <div className="container-custom flex flex-col space-y-4 pt-4">
            <a 
              href="#home" 
              className={`${isScrolled ? 'text-event-primary' : 'text-white'} hover:text-white/80 font-medium py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`${isScrolled ? 'text-event-primary' : 'text-white'} hover:text-white/80 font-medium py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#speakers" 
              className={`${isScrolled ? 'text-event-primary' : 'text-white'} hover:text-white/80 font-medium py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Speakers
            </a>
            <a 
              href="#sponsors" 
              className={`${isScrolled ? 'text-event-primary' : 'text-white'} hover:text-white/80 font-medium py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsors
            </a>
            <a 
              href="#register" 
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
