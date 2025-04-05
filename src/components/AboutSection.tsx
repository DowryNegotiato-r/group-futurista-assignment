
import React, { useEffect, useRef } from 'react';
import { CalendarDays, Users, Clock, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    // Observe the main section for slide-up animation
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe each staggered item
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="section bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-event-primary opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-event-accent opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 slide-up">
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
              {[
                {
                  icon: <CalendarDays className="text-event-primary mb-4" size={36} />,
                  title: "3 Full Days",
                  desc: "Packed with keynotes, workshops, and networking events"
                },
                {
                  icon: <Users className="text-event-primary mb-4" size={36} />,
                  title: "50+ Speakers",
                  desc: "Industry leaders and innovators sharing insights"
                },
                {
                  icon: <Clock className="text-event-primary mb-4" size={36} />,
                  title: "20+ Sessions",
                  desc: "Covering the latest trends and technologies"
                },
                {
                  icon: <Lightbulb className="text-event-primary mb-4" size={36} />,
                  title: "10+ Workshops",
                  desc: "Hands-on learning with industry experts"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  ref={el => itemsRef.current[index] = el}
                  className="bg-white p-6 rounded-lg shadow-md card-hover staggered-item"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.icon}
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className="order-1 md:order-2 staggered-item" 
            ref={el => itemsRef.current[4] = el} 
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-event-secondary/20 rounded-full floating-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-event-accent/20 rounded-full floating"></div>
              
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
      </div>
    </section>
  );
};

export default AboutSection;
