"use client";
import React from "react";

const WhyUs = () => {
  const points = [
    {
      title: "Student-Centered Approach",
      description:
        "We understand each student's unique challenges and provide tailored guidance and advice.",
      icon: "/whyus/student.png"
    },
    {
      title: "Expert Team",
      description:
        "Our experienced, friendly counselors stay up-to-date with the latest trends and provide the best guidance to our students.",
      icon: "/whyus/team.png"
    },
    {
      title: "All-in-One Solution",
      description:
        "StudySure offers complete support — university/country selection, IELTS preparation, visa filing and interview coaching.",
      icon: "/whyus/allinone.png"
    },
    {
      title: "Diverse Destinations",
      description:
        "We partner with universities across Europe, Asia, America and Australia — study in the country/university of your choice.",
      icon: "/whyus/destination.png"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Align top so right content lines up with left image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="relative pr-8">
            {/* Background Frame */}
            <div 
              className="absolute rounded-3xl"
              style={{ 
                width: "90%", 
                height: "100%", 
                border: "6px solid #83CD20",
                backgroundColor: "transparent",
                transform: "translate(-40px, 24px)",
                zIndex: 5
              }}
            ></div>
            
            {/* Experience Box */}
            <div 
              className="absolute rounded-2xl flex items-center gap-4 px-6 py-4"
              style={{ 
                backgroundColor: "#83CD20",
                top: "70%",
                right: "0%",
                zIndex: 10
              }}
            >
              <div className="text-white">
                <div 
                  style={{ 
                    fontSize: "48px",
                    fontWeight: "700",
                    lineHeight: "1"
                  }}
                >
                  25
                </div>
              </div>
              <div className="text-white">
                <div 
                  style={{ 
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "1.2"
                  }}
                >
                  Years Of<br />Experience
                </div>
              </div>
            </div>
            
            {/* Main Image */}
            <img
              src="/whyus/girl.png"
              alt="Girl"
              className="rounded-3xl relative"
              style={{ 
                width: "90%", 
                height: "100%", 
                objectFit: "contain",
                zIndex: 1
              }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Section Title (heading + small svg in same row) */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h3
                  className="uppercase"
                  style={{ 
                    color: "#034833",
                    fontSize: "14px",
                    lineHeight: "14px",
                    fontWeight: "700",
                    letterSpacing: "1.4px"
                  }}
                >
                  WHY CHOOSE US
                </h3>

                {/* small decorative SVG inline with heading */}
                <svg
                  width="52"
                  height="10"
                  viewBox="0 0 52 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g clipPath="url(#clip0_3795_96)">
                    <path
                      d="M47.2095 2.14437C46.4096 2.36766 45.5874 2.50135 44.758 2.54299L38.0745 3.26714C36.5625 3.43986 35.0713 3.76256 33.6232 4.23048C32.834 4.49614 32.0748 4.84349 31.3577 5.2669C30.5815 5.78994 29.7739 6.26475 28.9394 6.68864C28.4366 6.92402 27.8868 7.04215 27.3317 7.03411C26.7204 6.99856 26.1425 6.7438 25.704 6.3166C24.8602 5.44628 24.6277 4.38993 24.0763 3.71228C23.8482 3.37951 23.505 3.14288 23.1129 3.04791C22.6926 2.95474 22.2543 2.98472 21.8506 3.13427C20.9442 3.46398 20.1839 4.10423 19.7047 4.94135C19.1267 5.79839 18.675 6.775 18.0172 7.69183C17.3771 8.67698 16.4285 9.42226 15.3199 9.81116C14.738 9.97733 14.1213 9.97733 13.5394 9.81116C12.9881 9.64765 12.4799 9.36403 12.0512 8.9807C11.2848 8.27735 10.6875 7.40973 10.3039 6.44282C9.91861 5.55257 9.63957 4.68889 9.25423 3.93151C8.81236 2.89622 8.01001 2.05634 6.99598 1.56765C5.98195 1.07897 4.82509 0.974642 3.74 1.27404C3.16364 1.41933 2.62491 1.6859 2.15977 2.05594C1.69463 2.42599 1.3138 2.89102 1.04267 3.41996C0.609026 4.23627 0.40251 5.15404 0.444721 6.07742C0.461366 6.66905 0.587529 7.25247 0.816785 7.79813C0.969589 8.18346 1.07589 8.37613 1.04267 8.40271C1.00945 8.42928 0.849998 8.26318 0.624113 7.89778C0.297997 7.3528 0.0960956 6.74258 0.0328167 6.11063C-0.094422 5.09968 0.0716196 4.07346 0.511162 3.1542C0.798973 2.52884 1.21785 1.97266 1.73939 1.52332C2.26094 1.07399 2.87299 0.742013 3.53404 0.549886C4.3414 0.314234 5.19125 0.262331 6.02128 0.397987C6.85131 0.533642 7.64045 0.85342 8.33077 1.33384C9.08192 1.89515 9.6841 2.63192 10.0847 3.47975C10.5165 4.31021 10.8221 5.18716 11.2008 6.01762C11.535 6.84506 12.053 7.58567 12.7156 8.18347C13.0179 8.47409 13.3907 8.68086 13.7973 8.78339C14.204 8.88592 14.6303 8.88064 15.0342 8.7681C15.9058 8.44143 16.6489 7.84273 17.1536 7.06068C17.7316 6.2568 18.1833 5.28018 18.8145 4.33678C19.1355 3.84764 19.5172 3.40117 19.9505 3.00804C20.4071 2.61118 20.9377 2.30862 21.5118 2.11779C22.1043 1.91517 22.7412 1.88068 23.3521 2.01814C23.9719 2.17131 24.5177 2.53834 24.8934 3.05455C25.5977 3.99795 25.8368 5.04765 26.4082 5.5725C26.6675 5.83263 27.0118 5.99065 27.3782 6.01762C27.7818 6.02071 28.1811 5.9345 28.5475 5.76517C29.3497 5.36762 30.1284 4.92396 30.8794 4.43644C31.657 3.99071 32.4814 3.632 33.3375 3.36681C34.8527 2.91365 36.4116 2.62192 37.9881 2.49649C40.8449 2.25731 43.1369 2.18423 44.7314 2.1045C45.5564 2.02614 46.3875 2.03952 47.2095 2.14437Z"
                      fill="#034833"
                    />
                    <path
                      d="M45.4762 6.2697C45.4231 6.13018 46.1406 5.7382 47.2235 5.08712C47.7683 4.76158 48.4127 4.36296 49.1036 3.89126C49.4491 3.65873 49.768 3.39963 50.1666 3.13388C50.3373 3.0178 50.4954 2.88421 50.6383 2.73527C50.7579 2.61795 50.8527 2.47789 50.9173 2.32336C50.9506 2.19713 50.9173 2.20377 50.9173 2.15726C50.821 2.06916 50.7009 2.01139 50.5719 1.99117L49.283 1.64571C48.4592 1.41982 47.7218 1.20058 47.1039 0.981341C45.8682 0.582721 45.1108 0.263819 45.1573 0.124302C45.2038 -0.0152149 46.001 0.0379361 47.2833 0.250534C47.9476 0.356832 48.6784 0.502993 49.5155 0.675728L50.8443 0.968051C51.184 1.02987 51.4955 1.19726 51.7345 1.4464C51.8826 1.61431 51.9774 1.82242 52.0069 2.04432C52.0341 2.24825 52.0113 2.45574 51.9405 2.6489C51.8291 2.94985 51.6521 3.2222 51.4223 3.44614C51.235 3.63879 51.0254 3.80831 50.7978 3.95105C50.4124 4.23009 50.0205 4.47591 49.6484 4.70179C48.9845 5.09883 48.2916 5.44528 47.5756 5.7382C46.3399 6.25641 45.5294 6.40257 45.4762 6.2697Z"
                      fill="#034833"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3795_96">
                      <rect
                        width="52"
                        height="9.86585"
                        fill="white"
                        transform="translate(0 0.0664062)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h2 
                style={{ 
                  color: "#034833",
                  fontSize: "50px",
                  lineHeight: "60px",
                  fontWeight: "700",
                  letterSpacing: "normal"
                }}
              >
                Experiencing Traditions Cultural Immersion
              </h2>
            </div>

            {/* Points */}
            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  {/* Green circle with PNG icon inside */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#83CD20" }}
                      aria-hidden="true"
                    >
                      <img 
                        src={point.icon}
                        alt={point.title}
                        width="32"
                        height="32"
                        className="object-contain"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </div>

                  {/* Title + Description */}
                  <div>
                    <h4 
                      style={{ 
                        color: "#034833",
                        fontSize: "16px",
                        lineHeight: "28px",
                        fontWeight: "700",
                        letterSpacing: "normal"
                      }}
                    >
                      {point.title}
                    </h4>
                    <p 
                      style={{ 
                        color: "#727272",
                        fontSize: "16px",
                        lineHeight: "30px",
                        fontWeight: "400",
                        letterSpacing: "normal"
                      }}
                    >
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex items-center gap-6">
              <button
                className="flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-white transition-colors duration-200"
                style={{ backgroundColor: "#034833" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#83CD20")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#034833")}
              >
                <span>Learn More</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Help Button */}
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#034833" }}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" 
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#034833" }}>
                    Need help?
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#034833" }}>
                    (808) 555-0111
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;