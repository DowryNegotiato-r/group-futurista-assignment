
import React from 'react';

interface IllustrationProps {
  type: 'dots' | 'circles' | 'waves' | 'lines';
  className?: string;
  color?: string;
}

const Illustrations = ({ type, className = '', color = '#4567b7' }: IllustrationProps) => {
  switch (type) {
    case 'dots':
      return (
        <div className={`absolute pointer-events-none ${className}`}>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="40" cy="10" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="70" cy="10" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="100" cy="10" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="130" cy="10" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="160" cy="10" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="190" cy="10" r="4" fill={color} fillOpacity="0.3" />
            
            <circle cx="10" cy="40" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="40" cy="40" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="70" cy="40" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="100" cy="40" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="130" cy="40" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="160" cy="40" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="190" cy="40" r="4" fill={color} fillOpacity="0.3" />
            
            <circle cx="10" cy="70" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="40" cy="70" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="70" cy="70" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="100" cy="70" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="130" cy="70" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="160" cy="70" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="190" cy="70" r="4" fill={color} fillOpacity="0.3" />
            
            <circle cx="10" cy="100" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="40" cy="100" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="70" cy="100" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="100" cy="100" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="130" cy="100" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="160" cy="100" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="190" cy="100" r="4" fill={color} fillOpacity="0.3" />
            
            <circle cx="10" cy="130" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="40" cy="130" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="70" cy="130" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="100" cy="130" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="130" cy="130" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="160" cy="130" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="190" cy="130" r="4" fill={color} fillOpacity="0.3" />
            
            <circle cx="10" cy="160" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="40" cy="160" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="70" cy="160" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="100" cy="160" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="130" cy="160" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="160" cy="160" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="190" cy="160" r="4" fill={color} fillOpacity="0.3" />
            
            <circle cx="10" cy="190" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="40" cy="190" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="70" cy="190" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="100" cy="190" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="130" cy="190" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="160" cy="190" r="4" fill={color} fillOpacity="0.3" />
            <circle cx="190" cy="190" r="4" fill={color} fillOpacity="0.3" />
          </svg>
        </div>
      );
    
    case 'circles':
      return (
        <div className={`absolute pointer-events-none ${className}`}>
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="150" r="100" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <circle cx="150" cy="150" r="80" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <circle cx="150" cy="150" r="60" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <circle cx="150" cy="150" r="40" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <circle cx="150" cy="150" r="20" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
          </svg>
        </div>
      );

    case 'waves':
      return (
        <div className={`absolute pointer-events-none ${className}`}>
          <svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50C100 20 150 80 400 50" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <path d="M0 80C100 50 150 110 400 80" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <path d="M0 110C100 80 150 140 400 110" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
          </svg>
        </div>
      );

    case 'lines':
      return (
        <div className={`absolute pointer-events-none ${className}`}>
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="50" x2="300" y2="50" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <line x1="0" y1="100" x2="300" y2="100" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <line x1="0" y1="150" x2="300" y2="150" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <line x1="0" y1="200" x2="300" y2="200" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <line x1="0" y1="250" x2="300" y2="250" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            
            <line x1="50" y1="0" x2="50" y2="300" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <line x1="100" y1="0" x2="100" y2="300" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <line x1="150" y1="0" x2="150" y2="300" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <line x1="200" y1="0" x2="200" y2="300" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
            <line x1="250" y1="0" x2="250" y2="300" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
          </svg>
        </div>
      );
      
    default:
      return null;
  }
};

export default Illustrations;
