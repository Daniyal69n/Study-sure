"use client";
import React from "react";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Student Visa",
      image: "/ourservices/service-1.png",
      icon: "/ourservices/icon-1.png",
      description: "We have to a tendency to believe the idea that smart looking of any website."
    },
    {
      id: 2,
      title: "Business Visa", 
      image: "/ourservices/service-2.png",
      icon: "/ourservices/icon-1.png",
      description: "We have to a tendency to believe the idea that smart looking of any website."
    },
    {
      id: 3,
      title: "Family Visa",
      image: "/ourservices/service-3.png", 
      icon: "/ourservices/icon-1.png",
      description: "We have to a tendency to believe the idea that smart looking of any website."
    },
    {
      id: 4,
      title: "Tourist Visa",
      image: "/ourservices/service-4.png",
      icon: "/ourservices/icon-1.png",
      description: "We have to a tendency to believe the idea that smart looking of any website."
    },
    {
      id: 5,
      title: "Residence Visa",
      image: "/ourservices/service-5.png",
      icon: "/ourservices/icon-1.png",
      description: "We have to a tendency to believe the idea that smart looking of any website."
    },
    {
      id: 6,
      title: "Get visa with 100% success rate",
      image: "/ourservices/service-1.png",
      icon: "/ourservices/icon-1.png",
      description: "We have to a tendency to believe the idea that smart looking of any website."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 
            className="uppercase mb-4"
            style={{ 
              color: "#034833",
              fontSize: "14px",
              lineHeight: "14px",
              fontWeight: "700",
              letterSpacing: "1.4px"
            }}
          >
            Our Services
          </h3>
          
          <h2 
            className="mb-6"
            style={{ 
              color: "#034833",
              fontSize: "50px",
              lineHeight: "60px",
              fontWeight: "700",
              letterSpacing: "normal"
            }}
          >
            Outstanding immigration visa services.
          </h2>
          
          <p 
            className="max-w-3xl mx-auto"
            style={{ 
              color: "#727272",
              fontSize: "16px",
              lineHeight: "30px",
              fontWeight: "400",
              letterSpacing: "normal"
            }}
          >
            Experience unparalleled growth with our expert guidance. Navigate challenges, seize opportunities, and watch your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer bg-cover bg-center transition-all duration-300"
              style={{ 
                height: "250px",
                backgroundImage: `url(${service.image})`,
                backgroundColor: "#83CD20"
              }}
            >
              
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Default Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 group-hover:opacity-0 transition-opacity duration-300">
                {/* Icon - Always visible */}
                <div className="flex justify-end">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: "#034833" }}
                  >
                    <img src={service.icon} alt="Service Icon" className="w-6 h-6" />
                  </div>
                </div>
                
                {/* Title */}
                <div>
                  <h3 
                    className="text-white font-bold"
                    style={{ 
                      fontSize: "20px",
                      lineHeight: "1.3"
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Icon - Always visible on hover */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: "#034833" }}
                >
                  <img src={service.icon} alt="Service Icon" className="w-6 h-6" />
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out p-6 shadow-lg">
                <h3 
                  className="font-bold mb-4"
                  style={{ 
                    color: "#034833",
                    fontSize: "20px",
                    lineHeight: "1.3"
                  }}
                >
                  {service.title}
                </h3>
                
                <p 
                  className="mb-6"
                  style={{ 
                    color: "#727272",
                    fontSize: "13px",
                    lineHeight: "1.6"
                  }}
                >
                  {service.description}
                </p>
                
                <button 
                  className="self-start px-4 py-2 rounded-md transition-colors duration-300 hover:bg-opacity-90"
                  style={{ 
                    backgroundColor: "#83CD20",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: "600"
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
