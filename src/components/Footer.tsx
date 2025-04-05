
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-event-accent">NEXT</span>SUMMIT
            </div>
            <p className="text-gray-400 mb-6">
              The premier tech event bringing together industry leaders and innovators for three days of learning and networking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-event-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-event-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-event-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-event-accent transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#speakers" className="text-gray-400 hover:text-white transition-colors">Speakers</a>
              </li>
              <li>
                <a href="#sponsors" className="text-gray-400 hover:text-white transition-colors">Sponsors</a>
              </li>
              <li>
                <a href="#register" className="text-gray-400 hover:text-white transition-colors">Register</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Mail className="mr-3 text-gray-400 flex-shrink-0" size={18} />
                <a href="mailto:info@nextsummit.com" className="text-gray-400 hover:text-white transition-colors">
                  info@nextsummit.com
                </a>
              </li>
              <li className="flex">
                <Phone className="mr-3 text-gray-400 flex-shrink-0" size={18} />
                <a href="tel:+1-555-123-4567" className="text-gray-400 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex">
                <MapPin className="mr-3 text-gray-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  Tech Conference Center<br />
                  123 Innovation Avenue<br />
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form>
              <div className="flex mb-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white p-3 rounded-l-md w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-event-accent text-white px-4 rounded-r-md hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-xs">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NextSummit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
