import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Visas Processed",
      icon: "📄"
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: "✅"
    },
    {
      number: "50+",
      label: "Countries Covered",
      icon: "🌍"
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: "🎧"
    }
  ];

  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Our track record speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-green-100 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
