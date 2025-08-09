"use client";
import React from 'react';

const VisaCategories = () => {
  const visaCards = [
    {
      id: "01",
      title: "University Selection",
      description: "We help you choose the best foreign university tailored to your academic goals, ensuring the right fit for your future career.",
      icon: "/visa/university.png"
    },
    {
      id: "02", 
      title: "IELTS Preparation",
      description: "Our expert coaching prepares you to achieve the IELTS score you need for admission to prestigious universities abroad.",
      icon: "/visa/ielets.png"
    },
    {
      id: "03",
      title: "Visa & Interview Support", 
      description: "From documentation to mock interviews, we guide you through every step of the visa process for a smooth approval.",
      icon: "/visa/visa.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#034833' }}>
          Your Journey Abroad Starts Here
          </h2>
          <p className="text-xl" style={{ color: '#034833' }}>
          End-to-end support for university admission, IELTS preparation, and student visas.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 justify-items-center">
          {visaCards.map((card, index) => (
            <div 
              key={index} 
              className="p-8 transition-all duration-300 group"
              style={{ 
                backgroundColor: '#F6F6F6',
                width: '409.981px',
                height: '434.307px',
                borderRadius: '10px'
              }}
            >
              {/* PNG Icon */}
              <div className="mb-6">
                <img 
                  src={card.icon}
                  alt={card.title}
                  width="60"
                  height="60"
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </div>

              {/* Green Line and Number on Same Line */}
              <div className="flex items-center mb-4">
                <div 
                  className="h-1 w-16 bg-[#83CD20] transition-all duration-300 group-hover:w-20"
                ></div>
                <div 
                  className="text-2xl font-bold ml-4"
                  style={{ color: '#034833' }}
                >
                  {card.id}
                </div>
              </div>

              {/* Title */}
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: '#034833' }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p 
                className="mb-6 leading-relaxed"
                style={{ color: '#727272' }}
              >
                {card.description}
              </p>

              {/* Button */}
              <button 
                className="flex items-center bg-[#034833] space-x-2 px-6 py-3 rounded-full font-semibold text-white transition-colors duration-200 cursor-pointer hover:bg-[#83CD20]"
              >
                <span>More Detail</span>
                <svg 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaCategories;