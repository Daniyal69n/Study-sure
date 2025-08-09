import React from 'react';
import Link from 'next/link';

const Destinations = () => {
  // Sample destination data - you can update image paths as needed
  const destinations = [
    { id: 1, name: 'United States', image: '/destinations/usa.jpg' },
    { id: 2, name: 'United Kingdom', image: '/destinations/uk.jpg' },
    { id: 3, name: 'Canada', image: '/destinations/canada.jpg' },
    { id: 4, name: 'Australia', image: '/destinations/australia.jpg' },
    { id: 5, name: 'Germany', image: '/destinations/germany.jpg' },
    { id: 6, name: 'China', image: '/destinations/china.jpg' }
  ];

  return (
    <section className="overflow-hidden" style={{ padding: '0 15px' }}>
      <div className="max-w-full mx-auto rounded-3xl overflow-hidden" style={{ height: '790.769px', backgroundColor: '#034833' }}>
        <div className="relative h-full flex flex-col md:flex-row md:items-center px-4 md:px-8 py-8 md:py-0">
          
          {/* Header Section - Always appears first on mobile */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center mb-8 md:mb-0">
            <div className="text-center md:text-left" style={{ marginLeft: '0px' }}>
              <div className="md:ml-[167px]">
                {/* Green line above the text */}
                <div 
                  className="mb-6 mx-auto md:mx-0"
                  style={{
                    width: '80px',
                    height: '4px',
                    backgroundColor: '#83CD20'
                  }}
                ></div>
                <h1 
                  className="text-white font-bold"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: 'clamp(40px, 8vw, 80px)',
                    lineHeight: 'clamp(45px, 9vw, 90px)',
                    fontWeight: '700',
                    letterSpacing: 'normal'
                  }}
                >
                  Top Study
                  <br />
                  Abroad
                  <br />
                  Destinations
                </h1>
              </div>
            </div>
          </div>

          {/* Cards and Button Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:pr-16">
            
            {/* Cards Container */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 px-4 md:px-0">
              {destinations.map((destination) => (
                <Link 
                  key={destination.id}
                  href={`/destinations/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div 
                    className="relative shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                    style={{
                      width: 'clamp(140px, 20vw, 208px)',
                      height: 'clamp(140px, 20vw, 208px)'
                    }}
                  >
                    {/* Image container */}
                    <div 
                      className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: `url(${destination.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                    </div>
                    
                    {/* Country Name Plate */}
                    <div 
                      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-black text-center py-1 rounded shadow-md"
                      style={{
                        width: 'clamp(100px, 15vw, 112px)'
                      }}
                    >
                      <span 
                        className="font-semibold"
                        style={{ 
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontSize: 'clamp(10px, 2vw, 12px)'
                        }}
                      >
                        {destination.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Explore Countries Button - Always appears last */}
            <div className="w-full flex justify-center">
              <Link href="/destinations">
                <button className="bg-white text-black mt-6 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-[#83CD20] hover:text-white cursor-pointer transition-colors flex items-center gap-2" 
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif'
                }}>
                  Explore Countries
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;