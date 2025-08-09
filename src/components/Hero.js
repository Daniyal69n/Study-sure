"use client";
import React from 'react';

const Hero = () => {
  return (
    <section className="overflow-hidden" style={{ padding: '0 15px' }}>
      <div className="max-w-full mx-auto rounded-3xl overflow-hidden" style={{ height: '790.769px', backgroundColor: '#034833' }}>
        <div className="relative h-full flex flex-col md:flex-row md:items-center px-4 md:px-8 pt-8 md:pt-0">
          
          {/* Heading Content - Always appears first in mobile */}
          <div className="w-full md:w-auto mb-8 md:mb-0" style={{ marginLeft: '0px' }}>
            <div className="md:ml-[167px]">
              <h1 
                className="text-white font-bold text-left"
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: 'clamp(40px, 8vw, 80px)',
                  lineHeight: 'clamp(45px, 9vw, 90px)',
                  fontWeight: '700',
                  letterSpacing: 'normal'
                }}
              >
                Making Your Study
                <br />
                Abroad Dreams 
                <br />
                Possible
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#83CD20] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  Book Consultation
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Images Container - Positioned differently on mobile vs desktop */}
          <div className="relative flex-1 h-full min-h-[300px] md:min-h-0">
            {/* Circle - responsive positioning */}
            <img 
              src="/Hero/circle.png" 
              alt="Circle" 
              className="absolute bottom-0 md:-bottom-[200px] right-1/2 md:right-[20vw] transform translate-x-1/2 md:transform-none w-[300px] md:w-[600px] z-10"
            />
            
            {/* Tower - responsive positioning */}
            <img 
              src="/Hero/tower.png" 
              alt="Tower" 
              className="absolute bottom-16 md:bottom-28 right-1/2 md:right-[16vw] transform translate-x-1/2 md:transform-none w-[200px] md:w-[400px] z-20"
            />
            
            {/* Person - responsive positioning */}
            <img 
              src="/Hero/person.png" 
              alt="Person" 
              className="absolute bottom-0 right-1/2 md:right-[24vw] transform translate-x-1/2 md:transform-none w-[250px] md:w-[500px] z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;