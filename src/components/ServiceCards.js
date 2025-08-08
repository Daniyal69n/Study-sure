import React from 'react';

const ServiceCards = () => {
  const services = [
    {
      title: "Tourist Visa",
      description: "Perfect for leisure travel and vacation planning",
      features: ["Quick Processing", "Document Support", "24/7 Assistance"],
      price: "Starting from $99",
      popular: false
    },
    {
      title: "Business Visa",
      description: "Ideal for business meetings and conferences",
      features: ["Priority Processing", "Business Documentation", "Expert Consultation"],
      price: "Starting from $199",
      popular: true
    },
    {
      title: "Student Visa",
      description: "For educational opportunities abroad",
      features: ["Education Counseling", "University Liaison", "Post-arrival Support"],
      price: "Starting from $299",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Visa Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of visa services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-white rounded-xl p-8 shadow-lg relative ${service.popular ? 'ring-2 ring-green-600' : ''}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="text-3xl font-bold text-green-600 mb-6">
                  {service.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                service.popular 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'border-2 border-green-600 text-green-600 hover:bg-green-50'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
