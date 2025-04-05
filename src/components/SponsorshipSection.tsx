
import React from 'react';
import { Check, ExternalLink } from 'lucide-react';

const SponsorshipSection = () => {
  return (
    <section id="sponsors" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Sponsorship Opportunities</h2>
          <div className="h-1 w-20 bg-event-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Showcase your brand to industry leaders and decision-makers. Choose the sponsorship package that aligns with your marketing objectives.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md" id="sponsor-form">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Become a Sponsor</h3>
              <p className="text-gray-600 mb-4">
                Sponsoring NextSummit offers unique opportunities to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="text-event-secondary mr-2 mt-1" size={18} />
                  <span>Connect with industry leaders and decision-makers</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-event-secondary mr-2 mt-1" size={18} />
                  <span>Showcase your products and services</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-event-secondary mr-2 mt-1" size={18} />
                  <span>Build brand recognition in the tech community</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-event-secondary mr-2 mt-1" size={18} />
                  <span>Demonstrate thought leadership</span>
                </li>
              </ul>
              <p className="text-gray-600">
                For custom sponsorship packages or additional information, please contact us at{' '}
                <a href="mailto:sponsors@nextsummit.com" className="text-event-primary hover:underline">
                  sponsors@nextsummit.com
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800">Sponsorship Interest Form</h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-event-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-event-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-event-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-event-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="package" className="block text-gray-700 mb-2">Sponsorship Interest *</label>
                  <select
                    id="package"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-event-primary"
                    required
                  >
                    <option value="">Select your interest level</option>
                    <option value="high">Very Interested</option>
                    <option value="medium">Somewhat Interested</option>
                    <option value="low">Just exploring options</option>
                    <option value="custom">Interested in custom package</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Additional Information</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-event-primary"
                    placeholder="Tell us about your organization and sponsorship objectives..."
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="mt-1 mr-2"
                      required
                    />
                    <span className="text-gray-700">
                      I confirm my interest in sponsoring NextSummit 2025 and would like to be contacted with more information. *
                    </span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Submit Interest
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
