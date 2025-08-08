"use client"
import React from 'react'

const Slider = () => {
  const logos = [
    { id: 1, src: '/slider/brand-1.png', alt: 'Brand 1' },
    { id: 2, src: '/slider/brand-2.png', alt: 'Brand 2' },
    { id: 3, src: '/slider/brand-3.png', alt: 'Brand 3' },
    { id: 4, src: '/slider/brand-4.png', alt: 'Brand 4' },
  ];

  return (
    <div 
      className="w-full py-8 overflow-hidden"
      style={{ backgroundColor: '#83CD20' }}
    >
      <div className="relative">
        {/* Infinite scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo) => (
            <div
              key={`first-${logo.id}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo) => (
            <div
              key={`second-${logo.id}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          
          {/* Third set for extra smoothness */}
          {logos.map((logo) => (
            <div
              key={`third-${logo.id}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#83CD20] to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#83CD20] to-transparent pointer-events-none z-10"></div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default Slider