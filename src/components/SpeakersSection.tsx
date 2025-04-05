
import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface SpeakerProps {
  name: string;
  title: string;
  company: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const speakers: SpeakerProps[] = [
  {
    name: 'Alexandra Chen',
    title: 'Chief Technology Officer',
    company: 'Future Tech Inc.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Michael Rodriguez',
    title: 'Director of Innovation',
    company: 'Global Solutions',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Sarah Johnson',
    title: 'VP of Product',
    company: 'TechVision Corp',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'David Kim',
    title: 'AI Research Lead',
    company: 'NextGen AI',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    linkedin: '#',
    twitter: '#'
  }
];

const SpeakerCard = ({ name, title, company, image, linkedin, twitter }: SpeakerProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-800">{name}</h3>
        <p className="text-event-primary font-medium">{title}</p>
        <p className="text-gray-600 mb-4">{company}</p>
        <div className="flex space-x-4">
          {linkedin && (
            <a href={linkedin} className="text-gray-600 hover:text-event-primary transition-colors">
              <Linkedin size={20} />
            </a>
          )}
          {twitter && (
            <a href={twitter} className="text-gray-600 hover:text-event-primary transition-colors">
              <Twitter size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  return (
    <section id="speakers" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Speakers</h2>
          <div className="h-1 w-20 bg-event-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Learn from industry experts and thought leaders who are shaping the future of technology and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            More speakers to be announced soon. Stay tuned!
          </p>
          <a href="#register" className="btn-primary inline-block">
            Register to Attend
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
