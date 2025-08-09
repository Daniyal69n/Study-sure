"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <div className="fixed top-0 z-50 w-full bg-transparent" style={{ padding: '15px' }}>
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
                <div className="text-2xl font-bold font-plus-jakarta-sans" style={{ color: '#034833' }}>
                  StudySure
                </div>
              </div>
              
              {/* Navigation Links - Centered (Desktop only) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                <div className="flex items-baseline space-x-4">
                  <Link 
                    href="/" 
                    className="px-3 py-2 text-base font-bold font-plus-jakarta-sans transition-colors duration-200"
                    style={{ color: '#034833' }}
                    onMouseEnter={(e) => e.target.style.color = '#83CD20'}
                    onMouseLeave={(e) => e.target.style.color = '#034833'}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/destinations" 
                    className="px-3 py-2 text-base font-bold font-plus-jakarta-sans transition-colors duration-200"
                    style={{ color: '#034833' }}
                    onMouseEnter={(e) => e.target.style.color = '#83CD20'}
                    onMouseLeave={(e) => e.target.style.color = '#034833'}
                  >
                    Destinations
                  </Link>
                  <Link 
                    href="/about" 
                    className="px-3 py-2 text-base font-bold font-plus-jakarta-sans transition-colors duration-200"
                    style={{ color: '#034833' }}
                    onMouseEnter={(e) => e.target.style.color = '#83CD20'}
                    onMouseLeave={(e) => e.target.style.color = '#034833'}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-3 py-2 text-base font-bold font-plus-jakarta-sans transition-colors duration-200"
                    style={{ color: '#034833' }}
                    onMouseEnter={(e) => e.target.style.color = '#83CD20'}
                    onMouseLeave={(e) => e.target.style.color = '#034833'}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              
              {/* CTA Button (Desktop only) */}
              <div className="hidden md:block">
                <button 
                  className="flex items-center bg-[#034833] space-x-2 px-6 py-3 rounded-full font-semibold text-white transition-colors duration-200 cursor-pointer hover:bg-[#83CD20]"
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
              
              {/* Mobile hamburger button */}
              <div className="md:hidden">
                <button 
                  className="flex items-center justify-center h-10 px-4 bg-[#034833] rounded-full hover:bg-[#83CD20] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <svg 
                    className="h-6 w-6 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    ) : (
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 6h16M4 12h16M4 18h16" 
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[90px] left-4 right-4 bg-white shadow-2xl rounded-2xl p-6 z-40">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="w-full py-3 px-4 text-base font-bold font-plus-jakarta-sans rounded-lg transition-colors duration-200 hover:bg-gray-50"
              style={{ color: '#034833' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/destinations" 
              className="w-full py-3 px-4 text-base font-bold font-plus-jakarta-sans rounded-lg transition-colors duration-200 hover:bg-gray-50"
              style={{ color: '#034833' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              href="/about" 
              className="w-full py-3 px-4 text-base font-bold font-plus-jakarta-sans rounded-lg transition-colors duration-200 hover:bg-gray-50"
              style={{ color: '#034833' }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="w-full py-3 px-4 text-base font-bold font-plus-jakarta-sans rounded-lg transition-colors duration-200 hover:bg-gray-50"
              style={{ color: '#034833' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button 
              className="w-full flex items-center justify-center bg-[#034833] space-x-2 px-6 py-3 rounded-full font-semibold text-white transition-colors duration-200 cursor-pointer hover:bg-[#83CD20] mt-4"
              onClick={() => setIsMenuOpen(false)}
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
        </div>
      )}
    </div>
  );
};

export default Navbar;