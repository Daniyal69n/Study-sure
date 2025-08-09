"use client"
import React, { useState, useEffect } from 'react';

const Destinations = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showContent, setShowContent] = useState(null);

  // Sample destination data - you can update image paths as needed
  const destinations = [
    { id: 1, name: 'UK', image: '/destinations/usa.jpg', flag: '/destinations/flag1.png' },
    { id: 2, name: 'Europe', image: '/destinations/uk-img.jpg', flag: '/destinations/flag2.png' },
    { id: 3, name: 'USA', image: '/destinations/can.jpg', flag: '/destinations/flag3.png' },
    { id: 4, name: 'Canada', image: '/destinations/australia.jpg', flag: '/destinations/flag4.png' },
    { id: 5, name: 'Australia', image: '/destinations/germany.jpg', flag: '/destinations/flag5.png' },
    { id: 6, name: 'Turkey', image: '/destinations/usa.jpg', flag: '/destinations/flag1.png' },
    { id: 7, name: 'China', image: '/destinations/uk-img.jpg', flag: '/destinations/flag2.png' },
    { id: 8, name: 'Dubai', image: '/destinations/can.jpg', flag: '/destinations/flag3.png' },
  ];

  const cardsPerPage = 6;
  const totalPages = Math.ceil(destinations.length / cardsPerPage);
  
  // Handle delayed content display
  useEffect(() => {
    let timer;
    if (hoveredCard) {
      // Show content after card expansion is complete (500ms)
      timer = setTimeout(() => {
        setShowContent(hoveredCard);
      }, 500);
    } else {
      // Hide content immediately when hover ends
      setShowContent(null);
    }
    
    return () => clearTimeout(timer);
  }, [hoveredCard]);
  
  const getCurrentCards = () => {
    const startIndex = currentPage * cardsPerPage;
    return destinations.slice(startIndex, startIndex + cardsPerPage);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setHoveredCard(null);
    setShowContent(null);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setHoveredCard(null);
    setShowContent(null);
  };

  const currentCards = getCurrentCards();

  // Calculate widths to maintain constant total width
  const getCardWidth = (cardId) => {
    const totalCards = currentCards.length;
    const expandedWidth = 400; // Width when expanded
    const collapsedWidth = 120; // Width when collapsed (other cards when one is hovered)
    const normalWidth = 200; // Width when no card is hovered
    
    if (!hoveredCard) {
      // No card hovered - all cards equal width
      return normalWidth;
    } else if (hoveredCard === cardId) {
      // This card is hovered - expanded
      return expandedWidth;
    } else {
      // Other cards when one is hovered - collapsed
      return collapsedWidth;
    }
  };

  return (
    <section className="overflow-hidden" style={{ padding: '0 15px' }}>
      <div className="max-w-full mx-auto rounded-3xl overflow-hidden" style={{ backgroundColor: '#034833' }}>
        <div className="relative h-full flex flex-col justify-center px-48 py-8">
          
          {/* Header Section */}
          <div className="mb-16">
            {/* Green line above the text */}
            <div 
              className="mb-6"
              style={{
                width: '80px',
                height: '4px',
                backgroundColor: '#83CD20'
              }}
            ></div>
            
            <div className="flex items-center justify-between">
              {/* Title - Left Aligned */}
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
                Top Study Abroad
                <br />
                Destinations
              </h1>
              
              {/* Navigation Buttons - Right Side */}
              <div className="flex items-center gap-4">
                {/* Left Arrow Button */}
                <button 
                  onClick={goToPrevPage}
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* Right Arrow Button */}
                <button 
                  onClick={goToNextPage}
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Cards Container - Fixed width container */}
          <div 
            className="mx-auto overflow-hidden"
            style={{ 
              width: '1200px', // Fixed container width
              height: '400px'
            }}
          >
            <div 
              className="flex items-center gap-2 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 1200}px)`, // Slide animation
                width: `${totalPages * 1200}px` // Total width for all pages
              }}
            >
              {/* Render all destinations, not just current page */}
              {destinations.map((destination, index) => {
                const pageIndex = Math.floor(index / cardsPerPage);
                const isInCurrentPage = pageIndex === currentPage;
                
                return (
                  <div 
                    key={destination.id}
                    className="relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden rounded-lg flex-shrink-0"
                    style={{
                      width: isInCurrentPage ? `${getCardWidth(destination.id)}px` : '200px',
                      height: '400px',
                      backgroundImage: `url(${destination.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      marginRight: index % cardsPerPage === cardsPerPage - 1 ? '0' : '8px' // Gap between cards
                    }}
                    onMouseEnter={() => isInCurrentPage && setHoveredCard(destination.id)}
                    onMouseLeave={() => {
                      if (isInCurrentPage) {
                        setHoveredCard(null);
                        setShowContent(null);
                      }
                    }}
                  >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/30"></div>
                    
                    {/* Flag Image - Top Right (Circular) */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full overflow-hidden shadow-lg">
                      <img 
                        src={destination.flag} 
                        alt={`${destination.name} flag`}
                        className="w-full h-full object-cover object-center"
                        style={{
                          background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)'
                        }}
                      />
                    </div>
                    
                    {/* Expanded Content - Only shows after delay */}
                    {showContent === destination.id && isInCurrentPage && (
                      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center animate-fade-in">
                        <div className="bg-white bg-opacity-95 rounded-xl p-6 w-full max-w-xs transform transition-all duration-300 animate-slide-up">
                          <h3 
                            className="text-2xl font-bold mb-4"
                            style={{ 
                              color: '#034833',
                              fontFamily: '"Plus Jakarta Sans", sans-serif'
                            }}
                          >
                            {destination.name}
                          </h3>
                          
                          <p 
                            className="text-gray-600 mb-6 text-sm"
                            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                          >
                            Discover world-class education opportunities and vibrant student life.
                          </p>
                          
                          <button 
                            className="px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:transform hover:scale-105"
                            style={{ backgroundColor: '#83CD20' }}
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {/* Vertical Country Name - Hidden when content is shown */}
                    {showContent !== destination.id && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span 
                          className="text-white font-black text-4xl transform rotate-90 whitespace-nowrap uppercase tracking-wider"
                          style={{ 
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            opacity: '0.8',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                            letterSpacing: '0.15em'
                          }}
                        >
                          {destination.name}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Page Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index);
                  setHoveredCard(null);
                  setShowContent(null);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index ? 'bg-white' : 'bg-white bg-opacity-40'
                }`}
              />
            ))}
          </div>

          {/* Explore Countries Button */}
          <div className="text-center mt-8">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto">
              Explore Countries
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
      
      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px); 
          }
          to { 
            opacity: 1;
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Destinations;