import React from 'react';
import PageBanner from '../../components/PageBanner';

const AboutUsSection = () => {
  return (
    <>
      <PageBanner 
        title="About Us"
        breadcrumb="studyshare > about"
      />
      <section className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Images Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* First Column of Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/about/img1.png" 
                alt="StudySure Students" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/logo-trans.png" 
                alt="StudySure Logo Transparent" 
                className="w-full max-w-64 h-48 object-contain"
              />
            </div>
          </div>
          
          {/* Second Column of Images */}
          <div className="space-y-4 mt-8">
            {/* Experience Card */}
            <div className="bg-[#034833] p-6 rounded-xl shadow-lg text-white text-center">
              <h3 className="text-3xl font-bold mb-2">25+</h3>
              <p className="text-sm font-medium">Years of Experience</p>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/about/img2.png" 
                alt="StudySure Campus" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h6 className="text-[#034833] font-semibold text-sm uppercase tracking-wider">
                ABOUT STUDYSURE
              </h6>
              <svg width="49" height="10" viewBox="0 0 49 10" fill="none" className="ml-2">
                <path d="M48.1773 2.01547C47.3774 2.23875 46.5552 2.37244 45.7258 2.41408L39.0422 3.13824C37.5302 3.31095 36.0391 3.63366 34.591 4.10158C33.8018 4.36723 33.0425 4.71459 32.3255 5.13799C31.5493 5.66103 30.7417 6.13584 29.9072 6.55973C29.4043 6.79511 28.8546 6.91324 28.2994 6.90521C27.6882 6.86965 27.1103 6.6149 26.6717 6.18769C25.828 5.31737 25.5955 4.26103 25.044 3.58337C24.8159 3.25061 24.4728 3.01397 24.0807 2.91901C23.6604 2.82583 23.2221 2.85581 22.8184 3.00537C21.9119 3.33508 21.1517 3.97532 20.6725 4.81245C20.0945 5.66948 19.6427 6.6461 18.985 7.56292C18.3449 8.54807 17.3963 9.29335 16.2877 9.68226C15.7058 9.84842 15.0891 9.84842 14.5072 9.68226C13.9559 9.51874 13.4476 9.23513 13.019 8.8518C12.2526 8.14844 11.6553 7.28083 11.2717 6.31391C10.8864 5.42366 10.6073 4.55998 10.222 3.80261C9.78014 2.76732 8.97778 1.92744 7.96375 1.43875C6.94972 0.95006 5.79286 0.845735 4.70777 1.14514C4.13142 1.29042 3.59268 1.55699 3.12755 1.92704C2.66241 2.29709 2.28157 2.76211 2.01044 3.29105C1.5768 4.10736 1.37028 5.02514 1.41249 5.94852C1.42914 6.54015 1.5553 7.12357 1.78456 7.66923C1.93736 8.05456 2.04366 8.24723 2.01044 8.2738C1.97722 8.30038 1.81777 8.13428 1.59189 7.76888C1.26577 7.22389 1.06387 6.61368 1.00059 5.98173C0.873351 4.97077 1.03939 3.94455 1.47894 3.0253C1.76675 2.39994 2.18562 1.84375 2.70717 1.39442C3.22871 0.945084 3.84076 0.613107 4.50182 0.42098C5.30917 0.185328 6.15903 0.133425 6.98906 0.26908C7.81909 0.404736 8.60823 0.724514 9.29855 1.20494C10.0497 1.76624 10.6519 2.50302 11.0525 3.35084C11.4843 4.1813 11.7899 5.05826 12.1686 5.88872C12.5028 6.71615 13.0208 7.45677 13.6834 8.05456C13.9856 8.34518 14.3585 8.55196 14.7651 8.65448C15.1717 8.75701 15.5981 8.75174 16.002 8.6392C16.8735 8.31252 17.6167 7.71383 18.1213 6.93178C18.6993 6.12789 19.1511 5.15127 19.7823 4.20787C20.1033 3.71873 20.485 3.27226 20.9183 2.87914C21.3749 2.48228 21.9055 2.17971 22.4796 1.98889C23.072 1.78627 23.709 1.75178 24.3199 1.88924C24.9397 2.04241 25.4855 2.40944 25.8612 2.92565C26.5654 3.86905 26.8046 4.91874 27.376 5.44359C27.6353 5.70373 27.9796 5.86174 28.3459 5.88872C28.7495 5.8918 29.1488 5.8056 29.5152 5.63626C30.3175 5.23871 31.0961 4.79506 31.8472 4.30753C32.6248 3.8618 33.4491 3.5031 34.3053 3.2379C35.8205 2.78474 37.3794 2.49301 38.9559 2.36758C41.8127 2.12841 44.1047 2.05532 45.6992 1.9756C46.5242 1.89723 47.3553 1.91061 48.1773 2.01547Z" fill="#034833"/>
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#034833] leading-tight mb-6">
              Dedicated Student <br />
              Consultancy Services
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              <span className="font-bold text-[#034833]">StudySure</span> is a dedicated, detail oriented student consultancy, offering professional advice and guidance to students for study abroad. We serve as a vital link between our students and the foreign universities.
            </p>

            <p>
              At <span className="font-bold text-[#034833]">StudySure</span>, we provide expert guidance with a view to help navigate challenges for study in prestigious foreign Universities around the globe. We provided step by step guidance / coaching to realize your dream of studying abroad including:
            </p>

            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#83CD20]">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#83CD20] rounded-full mt-2 flex-shrink-0"></div>
                  <span><span className="font-semibold text-[#034833]">Selection of best foreign university</span> tailored to your academic requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#83CD20] rounded-full mt-2 flex-shrink-0"></div>
                  <span><span className="font-semibold text-[#034833]">IELTS</span> preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#83CD20] rounded-full mt-2 flex-shrink-0"></div>
                  <span><span className="font-semibold text-[#034833]">Visa processing</span> / <span className="font-semibold text-[#034833]">visa interview preparation</span></span>
                </li>
              </ul>
            </div>

            <p>
              If you are planning to move abroad for study, surely, you are at the right place. Just visit us and we will do our best to turn your dream of studying in your favorite foreign university into reality.
            </p>

            <div className="bg-[#034833] text-white p-6 rounded-xl">
              <p className="text-center font-medium">
                "You will always be proud to begin your journey with StudySure."
              </p>
            </div>

            {/* Vision & Mission Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Vision Card */}
              <div className="bg-white border-2 border-[#83CD20] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#034833] mb-2">Our Vision</h3>
                  <div className="w-12 h-1 bg-[#83CD20] rounded"></div>
                </div>
                <h4 className="text-lg font-semibold text-[#83CD20] mb-3">Shaping Futures</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our vision is to become No.1 global education consultancy service by enabling our students to realize their dreams of study abroad thus help <span className="font-bold text-[#034833]">SHAPE THEIR FUTURES.</span>
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white border-2 border-[#034833] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#034833] mb-2">Our Mission</h3>
                  <div className="w-12 h-1 bg-[#034833] rounded"></div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To enable our worthy students through specific / tailored guidance, with a view to ensure their admissions in International Universities that best suit their academic objectives and help fulfil their career aspirations.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full mx-auto bg-[#034833] rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
              <img 
                src="/about/contact-bg.png" 
                alt="Contact Background" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[300px]">
              {/* Left Content */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Let's Do Great!
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy
                </p>
                <button className="bg-[#83CD20] hover:bg-green-600 cursor-pointer text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Contact us
                </button>
              </div>

              {/* Right Image */}
              <div className="relative h-full flex items-end justify-center lg:justify-end overflow-visible">
                <div className="relative">
                  <img 
                    src="/about/contact-img.png" 
                    alt="Contact" 
                    className="w-80 lg:w-96 xl:w-[450px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};


export default AboutUsSection;