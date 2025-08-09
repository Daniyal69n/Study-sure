'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const CountriesFilter = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Country data organized by regions - only countries with available flags
  const countries = {
    Asia: [
      { name: 'China', flag: '/flag/china.webp' },
      { name: 'Turkey', flag: '/flag/turkey.png' }
    ],
    Europe: [
      { name: 'Belarus', flag: '/flag/belarus.png' },
      { name: 'Cyprus', flag: '/flag/cyprus.png' },
      { name: 'Denmark', flag: '/flag/denmark.jpg' },
      { name: 'France', flag: '/flag/france.png' },
      { name: 'Germany', flag: '/flag/germany.png' },
      { name: 'Georgia', flag: '/flag/georgia.png' },
      { name: 'Hungary', flag: '/flag/hungary.jpg' },
      { name: 'Italy', flag: '/flag/italy.jpg' },
      { name: 'Turkey', flag: '/flag/turkey.png' },
      { name: 'United Kingdom', flag: '/flag/uk.png' }
    ],
    'North America': [
      { name: 'Canada', flag: '/flag/canada.jpg' },
      { name: 'United States', flag: '/flag/usa.png' }
    ],
    Australia: [
      { name: 'Australia', flag: '/flag/australia.png' }
    ],
    'Latin America': [],
    Africa: [],
    'Middle East': [
      { name: 'Dubai (UAE)', flag: '/flag/dubai.jpg' },
      { name: 'United Arab Emirates', flag: '/flag/uae.png' }
    ]
  };

  const filters = ['All', 'Asia', 'Europe', 'North America', 'Australia', 'Latin America', 'Africa', 'Middle East'];

  const getFilteredCountries = () => {
    if (activeFilter === 'All') {
      return Object.values(countries).flat();
    }
    return countries[activeFilter] || [];
  };

  const filteredCountries = getFilteredCountries();

  return (
    <div className="py-16 px-8 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#034833] text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <div
                key={`${country.name}-${index}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center group cursor-pointer"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-gray-200">
                    <Image
                      src={country.flag}
                      alt={`${country.name} flag`}
                      fill
                      className="object-cover group-hover:rotate-360 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#034833] transition-colors duration-300">
                  {country.name}
                </h3>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No countries available in this region yet.</p>
            </div>
          )}
        </div>

        {/* Active Filter Display */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-[#034833]">{filteredCountries.length}</span> countries
            {activeFilter !== 'All' && (
              <span> in <span className="font-semibold text-[#034833]">{activeFilter}</span></span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountriesFilter;
