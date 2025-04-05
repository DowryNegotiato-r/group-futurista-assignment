
import React from 'react';
import { Calendar, Users, Check } from 'lucide-react';

const RegistrationForm = () => {
  return (
    <section id="register" className="section bg-event-primary text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserve Your Spot</h2>
            <p className="text-xl opacity-90 mb-8">
              Join us for three days of insights, innovation, and networking at NextSummit 2025.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Calendar className="text-event-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">April 15-17, 2025</h3>
                  <p className="opacity-90">9:00 AM - 5:00 PM daily</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <Users className="text-event-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Tech Conference Center</h3>
                  <p className="opacity-90">123 Innovation Avenue, San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="text-event-accent mr-2 mt-1" size={18} />
                <span>Access to all keynotes and sessions</span>
              </div>
              <div className="flex items-start">
                <Check className="text-event-accent mr-2 mt-1" size={18} />
                <span>Networking events and refreshments</span>
              </div>
              <div className="flex items-start">
                <Check className="text-event-accent mr-2 mt-1" size={18} />
                <span>Workshop materials and resources</span>
              </div>
              <div className="flex items-start">
                <Check className="text-event-accent mr-2 mt-1" size={18} />
                <span>Certificate of participation</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Register Now</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-event-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-event-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-event-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="jobTitle" className="block text-gray-700 mb-2">Job Title *</label>
                <input
                  type="text"
                  id="jobTitle"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-event-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 mb-2">Company/Organization *</label>
                <input
                  type="text"
                  id="company"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-event-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="dietaryRestrictions" className="block text-gray-700 mb-2">Dietary Restrictions (if any)</label>
                <input
                  type="text"
                  id="dietaryRestrictions"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-event-primary"
                />
              </div>
              
              <div className="mb-6">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">
                    I'd like to receive updates about future events and opportunities from NextSummit.
                  </span>
                </label>
              </div>
              
              <button
                type="submit"
                className="bg-event-primary text-white w-full py-3 rounded-md hover:bg-opacity-90 transition-all font-bold"
              >
                Complete Registration
              </button>
              
              <p className="text-gray-600 text-sm mt-4 text-center">
                By registering, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
