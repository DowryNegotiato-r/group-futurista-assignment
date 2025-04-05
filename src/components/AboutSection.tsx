
import React from 'react';
import { CalendarDays, Users, Clock, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About The Event</h2>
          <div className="h-1 w-20 bg-event-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            NextSummit brings together the brightest minds in technology and innovation for an 
            immersive three-day experience of learning, collaboration, and inspiration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <CalendarDays className="text-event-primary mb-4" size={36} />
                <h3 className="font-bold text-xl mb-2">3 Full Days</h3>
                <p className="text-gray-600">Packed with keynotes, workshops, and networking events</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <Users className="text-event-primary mb-4" size={36} />
                <h3 className="font-bold text-xl mb-2">50+ Speakers</h3>
                <p className="text-gray-600">Industry leaders and innovators sharing insights</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <Clock className="text-event-primary mb-4" size={36} />
                <h3 className="font-bold text-xl mb-2">20+ Sessions</h3>
                <p className="text-gray-600">Covering the latest trends and technologies</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <Lightbulb className="text-event-primary mb-4" size={36} />
                <h3 className="font-bold text-xl mb-2">10+ Workshops</h3>
                <p className="text-gray-600">Hands-on learning with industry experts</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Attend NextSummit 2025?</h3>
            <p className="text-gray-600 mb-6">
              At NextSummit, we're bringing together the tech community to explore emerging trends, 
              share knowledge, and build lasting professional connections.
            </p>
            
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-2 text-gray-800">Event Agenda</h4>
              <p className="text-gray-600 mb-4">
                Our agenda includes keynotes from tech leaders, panel discussions on emerging technologies, 
                hands-on workshops, and networking opportunities.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Keynote presentations from industry leaders</li>
                <li>Panel discussions on emerging tech trends</li>
                <li>Interactive workshops and tech demonstrations</li>
                <li>Networking events and social gatherings</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Expected Outcomes</h4>
              <p className="text-gray-600">
                Attendees will gain insights into future tech trends, develop new skills through 
                workshops, expand their professional networks, and discover new opportunities for 
                innovation and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
