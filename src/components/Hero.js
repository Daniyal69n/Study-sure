"use client";
import React from 'react';

const Hero = () => {
  return (
    <section className="overflow-hidden" style={{ padding: '0 15px' }}>
      <div className="max-w-full mx-auto rounded-3xl overflow-hidden" style={{ height: '790.769px', backgroundColor: '#034833' }}>
        <div className="relative h-full flex items-center px-8">
          <div className="w-full">
          {/* Heading Content */}
          <div className="mb-8" style={{ marginLeft: '167px' }}>
            <h1 
              className="text-white font-bold"
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '80px',
                lineHeight: '90px',
                fontWeight: '700',
                letterSpacing: 'normal'
              }}
            >
              Visa Made Easy
              <br />
              Dreams Made
              <br />
              Possible
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
                Read More
              </button>
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
                Watch Videos
              </button>
            </div>
          </div>
          
          {/* All Images Absolutely Positioned at Bottom */}
          {/* Circle at bottom right */}
          <img 
            src="/Hero/circle.png" 
            alt="Circle" 
            className="absolute -bottom-[200px] right-[20vw] w-[600px] z-10"
          />
          
          {/* Tower above circle */}
          <img 
            src="/Hero/tower.png" 
            alt="Tower" 
            className="absolute bottom-28 right-[16vw] w-[400px] z-20"
          />
          
          {/* Person at the very top */}
          <img 
            src="/Hero/person.png" 
            alt="Person" 
            className="absolute bottom-0 right-[24vw] w-[500px] z-30"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;