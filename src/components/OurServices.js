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
    },
    {
      id: 7,
      title: "Apply Now",
      image: "/ourservices/service-1.png",
      icon: "/ourservices/icon-1.png",
      description: "Start your visa application process today with our expert guidance."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* First Row - Header Cards + 2 Service Cards */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Merged Header Card - Spans 2 columns */}
          <div 
            className="col-span-2 relative rounded-2xl overflow-hidden transition-all duration-300"
            style={{ 
              height: "250px",
              backgroundColor: "transparent",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-start">
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
                className="font-bold mb-8"
                style={{ 
                  color: "#034833",
                  fontSize: "32px",
                  lineHeight: "1.2"
                }}
              >
                Outstanding immigration visa services.
              </h2>
              
              <button 
                className="px-8 py-3 rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:transform hover:scale-105"
                style={{ 
                  backgroundColor: "#83CD20",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "700"
                }}
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* First Service Card */}
          <div 
            className="relative rounded-2xl overflow-hidden group cursor-pointer bg-cover bg-center transition-all duration-300"
            style={{ 
              height: "250px",
              backgroundImage: `url(${services[0].image})`,
              backgroundColor: "#83CD20"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-between p-6 group-hover:opacity-0 transition-opacity duration-300">
              <div className="flex justify-end">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: "#034833" }}
                >
                  <img src={services[0].icon} alt="Service Icon" className="w-6 h-6" />
                </div>
              </div>
              
              <div>
                <h3 
                  className="text-white font-bold"
                  style={{ 
                    fontSize: "20px",
                    lineHeight: "1.3"
                  }}
                >
                  {services[0].title}
                </h3>
              </div>
            </div>

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: "#034833" }}
              >
                <img src={services[0].icon} alt="Service Icon" className="w-6 h-6" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out p-6 shadow-lg">
              <h3 
                className="font-bold mb-4"
                style={{ 
                  color: "#034833",
                  fontSize: "20px",
                  lineHeight: "1.3"
                }}
              >
                {services[0].title}
              </h3>
              
              <p 
                className="mb-6"
                style={{ 
                  color: "#727272",
                  fontSize: "13px",
                  lineHeight: "1.6"
                }}
              >
                {services[0].description}
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

          {/* Second Service Card */}
          <div 
            className="relative rounded-2xl overflow-hidden group cursor-pointer bg-cover bg-center transition-all duration-300"
            style={{ 
              height: "250px",
              backgroundImage: `url(${services[1].image})`,
              backgroundColor: "#83CD20"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-between p-6 group-hover:opacity-0 transition-opacity duration-300">
              <div className="flex justify-end">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: "#034833" }}
                >
                  <img src={services[1].icon} alt="Service Icon" className="w-6 h-6" />
                </div>
              </div>
              
              <div>
                <h3 
                  className="text-white font-bold"
                  style={{ 
                    fontSize: "20px",
                    lineHeight: "1.3"
                  }}
                >
                  {services[1].title}
                </h3>
              </div>
            </div>

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: "#034833" }}
              >
                <img src={services[1].icon} alt="Service Icon" className="w-6 h-6" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out p-6 shadow-lg">
              <h3 
                className="font-bold mb-4"
                style={{ 
                  color: "#034833",
                  fontSize: "20px",
                  lineHeight: "1.3"
                }}
              >
                {services[1].title}
              </h3>
              
              <p 
                className="mb-6"
                style={{ 
                  color: "#727272",
                  fontSize: "13px",
                  lineHeight: "1.6"
                }}
              >
                {services[1].description}
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
        </div>

        {/* Second Row - 4 Service Cards */}
        <div className="grid grid-cols-4 gap-6">
          {services.slice(2, 6).map((service) => (
            <div 
              key={service.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer bg-cover bg-center transition-all duration-300"
              style={{ 
                height: "250px",
                backgroundImage: `url(${service.image})`,
                backgroundColor: "#83CD20"
              }}
            >
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-between p-6 group-hover:opacity-0 transition-opacity duration-300">
                <div className="flex justify-end">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: "#034833" }}
                  >
                    <img src={service.icon} alt="Service Icon" className="w-6 h-6" />
                  </div>
                </div>
                
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

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: "#034833" }}
                >
                  <img src={service.icon} alt="Service Icon" className="w-6 h-6" />
                </div>
              </div>

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