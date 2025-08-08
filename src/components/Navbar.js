"use client"
import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-transparent" style={{ padding: '15px' }}>
      <nav className="bg-white shadow-2xl rounded-full w-full">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="StudySure Logo" 
                className="h-12 w-12"
              />
              <div className="text-2xl font-bold" style={{ color: '#034833' }}>
                StudySure
              </div>
            </div>
            
            {/* Navigation Links - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
              <div className="flex items-baseline space-x-4">
                <a 
                  href="#" 
                  className="px-3 py-2 text-base font-bold transition-colors duration-200"
                  style={{ color: '#034833' }}
                  onMouseEnter={(e) => e.target.style.color = '#83CD20'}
                  onMouseLeave={(e) => e.target.style.color = '#034833'}
                >
                  Home
                </a>
                <a 
                  href="#" 
                  className="px-3 py-2 text-base font-bold transition-colors duration-200"
                  style={{ color: '#034833' }}
                  onMouseEnter={(e) => e.target.style.color = '#83CD20'}
                  onMouseLeave={(e) => e.target.style.color = '#034833'}
                >
                  Services
                </a>
                <a 
                  href="#" 
                  className="px-3 py-2 text-base font-bold transition-colors duration-200"
                  style={{ color: '#034833' }}
                  onMouseEnter={(e) => e.target.style.color = '#83CD20'}
                  onMouseLeave={(e) => e.target.style.color = '#034833'}
                >
                  About
                </a>
                <a 
                  href="#" 
                  className="px-3 py-2 text-base font-bold transition-colors duration-200"
                  style={{ color: '#034833' }}
                  onMouseEnter={(e) => e.target.style.color = '#83CD20'}
                  onMouseLeave={(e) => e.target.style.color = '#034833'}
                >
                  Contact
                </a>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <button 
                className="flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-white transition-colors duration-200"
                style={{ backgroundColor: '#034833' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#83CD20'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#034833'}
              >
                <span>Get An Appointment</span>
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
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-green-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;