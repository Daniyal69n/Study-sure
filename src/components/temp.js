import React from 'react';

const Destinations = () => {
  // Sample destination data - you can update image paths as needed
  const destinations = [
    { id: 1, name: 'United States', image: '/destinations/can.jpg' },
    { id: 2, name: 'United Kingdom', image: '/destinations/dubai.jpg' },
    { id: 3, name: 'Canada', image: '/destinations/ireland.jpg' },
    { id: 4, name: 'Australia', image: '/destinations/nz.jpg' },
    { id: 5, name: 'Germany', image: '/destinations/uk-img.jpg' },
    { id: 6, name: 'France', image: '/destinations/usa.jpg' }
  ];

  return (
    <section className="overflow-hidden" style={{ padding: '0 15px' }}>
      <div className="max-w-full mx-auto rounded-3xl overflow-hidden" style={{ height: '790.769px', backgroundColor: '#034833' }}>
        <div className="relative h-full flex items-center px-8">
          <div className="w-full flex">
            
            {/* Left Side - Title */}
            <div className="w-1/2 flex items-center">
              <div style={{ marginLeft: '167px' }}>
                {/* Green line above the text */}
                <div 
                  className="mb-6"
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
                    fontSize: '80px',
                    lineHeight: '90px',
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

            {/* Right Side - Cards Grid */}
            <div className="w-1/2 flex flex-col justify-center items-center pr-16">
              {/* Cards Container */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {destinations.map((destination) => (
                  <div 
                    key={destination.id}
                    className="relative w-52 h-52 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  >
                    {/* Placeholder for image - you'll replace with actual images */}
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        backgroundImage: `url(${destination.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                    </div>
                    
                    {/* Country Name Plate */}
                    <div className="absolute w-28 -bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 text-black text-center py-1">
                      <span 
                        className="text-xs font-semibold"
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      >
                        {destination.name}
                      </span>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Explore Countries Button */}
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                Explore Countries
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;