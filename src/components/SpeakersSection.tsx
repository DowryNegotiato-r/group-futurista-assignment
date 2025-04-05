
import React, { useEffect, useRef } from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center p-4">
          <div className="flex space-x-4">
            {linkedin && (
              <a href={linkedin} className="text-white hover:text-event-accent transition-colors p-2 bg-black/30 rounded-full">
                <Linkedin size={20} />
              </a>
            )}
            {twitter && (
              <a href={twitter} className="text-white hover:text-event-accent transition-colors p-2 bg-black/30 rounded-full">
                <Twitter size={20} />
              </a>
            )}
          </div>
        </div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-800">{name}</h3>
        <p className="text-event-primary font-medium">{title}</p>
        <p className="text-gray-600 mb-4">{company}</p>
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="speakers" className="section relative overflow-hidden" ref={sectionRef}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-gray-100 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-event-primary rounded-full opacity-10"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-event-accent rounded-full opacity-10"></div>
      
      <div className="container-custom">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Speakers</h2>
          <div className="h-1 w-20 bg-event-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Learn from industry experts and thought leaders who are shaping the future of technology and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="staggered-item"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <SpeakerCard {...speaker} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center" ref={el => cardsRef.current[4] = el} className="staggered-item">
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
