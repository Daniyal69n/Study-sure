"use client";
import React from 'react'

const Widget = () => {
  return (
    <section className="overflow-hidden" style={{ padding: '0 15px' }}>
      <div className="max-w-full mx-auto rounded-3xl overflow-hidden relative bg-[#034833] py-16 px-4" style={{ marginTop: '30px' }}>
      {/* Background Shape Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/widget/counter-bg-shape.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Plane Image - Absolute Left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <img 
          src="/widget/counter-plane-img.png" 
          alt="Plane" 
          className="w-32 h-auto opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Happy Clients */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-24 h-24 bg-[#83CD20] rounded-full flex items-center justify-center shadow-lg">
              <img 
                src="/widget/counter-icon-1.png" 
                alt="Happy Clients Icon" 
                className="w-12 h-12"
              />
            </div>
            <div className="text-white text-center">
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
          </div>

          {/* Successful Rates */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-24 h-24 bg-[#83CD20] rounded-full flex items-center justify-center shadow-lg">
              <img 
                src="/widget/counter-icon-2.png" 
                alt="Successful Rates Icon" 
                className="w-12 h-12"
              />
            </div>
            <div className="text-white text-center">
              <div className="text-5xl font-bold mb-2">99+</div>
              <div className="text-lg opacity-90">Successful Rates</div>
            </div>
          </div>

          {/* Visa Process */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-24 h-24 bg-[#83CD20] rounded-full flex items-center justify-center shadow-lg">
              <img 
                src="/widget/counter-icon-3.png" 
                alt="Visa Process Icon" 
                className="w-12 h-12"
              />
            </div>
            <div className="text-white text-center">
              <div className="text-5xl font-bold mb-2">129+</div>
              <div className="text-lg opacity-90">Visa Process</div>
            </div>
          </div>

          {/* Fourth Counter */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-24 h-24 bg-[#83CD20] rounded-full flex items-center justify-center shadow-lg">
              <img 
                src="/widget/counter-icon-4.png" 
                alt="Counter Icon" 
                className="w-12 h-12"
              />
            </div>
            <div className="text-white text-center">
              <div className="text-5xl font-bold mb-2">600+</div>
              <div className="text-lg opacity-90">Projects</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Widget