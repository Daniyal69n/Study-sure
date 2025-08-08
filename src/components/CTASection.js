import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Don't let visa complications hold you back. Get expert assistance and make your travel dreams a reality today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Free Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
