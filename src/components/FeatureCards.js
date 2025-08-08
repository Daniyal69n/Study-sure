import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      icon: "🎯",
      title: "Expert Consultation",
      description: "Get personalized guidance from visa experts with years of experience"
    },
    {
      icon: "⚡",
      title: "Fast Processing",
      description: "Quick and efficient visa processing to save your valuable time"
    },
    {
      icon: "🛡️",
      title: "Secure & Reliable",
      description: "Your documents and personal information are completely secure with us"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive visa services with a focus on excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
