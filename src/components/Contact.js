"use client"
import React, { useState } from 'react';
import { Phone, Clock, MapPin, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Message sent successfully!');
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {/* Email and Phone Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="email" className="block text-base font-normal leading-[30px] tracking-normal text-[#034833] mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-4 pr-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                      required
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Mail className="w-5 h-5 text-[#034833]" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="phone" className="block text-base font-normal leading-[30px] tracking-normal text-[#034833] mb-2">
                    Your Phone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      className="w-full px-4 py-4 pr-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                      required
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Phone className="w-5 h-5 text-[#034833]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="relative">
                <label htmlFor="address" className="block text-base font-normal leading-[30px] tracking-normal text-[#034833] mb-2">
                  Your Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your Address"
                    className="w-full px-4 py-4 pr-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                    required
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <MapPin className="w-5 h-5 text-[#034833]" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label htmlFor="message" className="block text-base font-normal leading-[30px] tracking-normal text-[#034833] mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write Message.."
                    rows={6}
                    className="w-full px-4 py-4 pr-12 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                    required
                  />
                  <div className="absolute right-4 top-4">
                    <Mail className="w-5 h-5 text-[#034833]" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-[#83CD20] hover:bg-[#73bd10] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h6 className="text-[#034833] font-semibold text-sm uppercase tracking-wider">
                  MESSAGE US
                </h6>
                <svg width="49" height="10" viewBox="0 0 49 10" fill="none" className="ml-2">
                  <path d="M48.1773 2.01547C47.3774 2.23875 46.5552 2.37244 45.7258 2.41408L39.0422 3.13824C37.5302 3.31095 36.0391 3.63366 34.591 4.10158C33.8018 4.36723 33.0425 4.71459 32.3255 5.13799C31.5493 5.66103 30.7417 6.13584 29.9072 6.55973C29.4043 6.79511 28.8546 6.91324 28.2994 6.90521C27.6882 6.86965 27.1103 6.6149 26.6717 6.18769C25.828 5.31737 25.5955 4.26103 25.044 3.58337C24.8159 3.25061 24.4728 3.01397 24.0807 2.91901C23.6604 2.82583 23.2221 2.85581 22.8184 3.00537C21.9119 3.33508 21.1517 3.97532 20.6725 4.81245C20.0945 5.66948 19.6427 6.6461 18.985 7.56292C18.3449 8.54807 17.3963 9.29335 16.2877 9.68226C15.7058 9.84842 15.0891 9.84842 14.5072 9.68226C13.9559 9.51874 13.4476 9.23513 13.019 8.8518C12.2526 8.14844 11.6553 7.28083 11.2717 6.31391C10.8864 5.42366 10.6073 4.55998 10.222 3.80261C9.78014 2.76732 8.97778 1.92744 7.96375 1.43875C6.94972 0.95006 5.79286 0.845735 4.70777 1.14514C4.13142 1.29042 3.59268 1.55699 3.12755 1.92704C2.66241 2.29709 2.28157 2.76211 2.01044 3.29105C1.5768 4.10736 1.37028 5.02514 1.41249 5.94852C1.42914 6.54015 1.5553 7.12357 1.78456 7.66923C1.93736 8.05456 2.04366 8.24723 2.01044 8.2738C1.97722 8.30038 1.81777 8.13428 1.59189 7.76888C1.26577 7.22389 1.06387 6.61368 1.00059 5.98173C0.873351 4.97077 1.03939 3.94455 1.47894 3.0253C1.76675 2.39994 2.18562 1.84375 2.70717 1.39442C3.22871 0.945084 3.84076 0.613107 4.50182 0.42098C5.30917 0.185328 6.15903 0.133425 6.98906 0.26908C7.81909 0.404736 8.60823 0.724514 9.29855 1.20494C10.0497 1.76624 10.6519 2.50302 11.0525 3.35084C11.4843 4.1813 11.7899 5.05826 12.1686 5.88872C12.5028 6.71615 13.0208 7.45677 13.6834 8.05456C13.9856 8.34518 14.3585 8.55196 14.7651 8.65448C15.1717 8.75701 15.5981 8.75174 16.002 8.6392C16.8735 8.31252 17.6167 7.71383 18.1213 6.93178C18.6993 6.12789 19.1511 5.15127 19.7823 4.20787C20.1033 3.71873 20.485 3.27226 20.9183 2.87914C21.3749 2.48228 21.9055 2.17971 22.4796 1.98889C23.072 1.78627 23.709 1.75178 24.3199 1.88924C24.9397 2.04241 25.4855 2.40944 25.8612 2.92565C26.5654 3.86905 26.8046 4.91874 27.376 5.44359C27.6353 5.70373 27.9796 5.86174 28.3459 5.88872C28.7495 5.8918 29.1488 5.8056 29.5152 5.63626C30.3175 5.23871 31.0961 4.79506 31.8472 4.30753C32.6248 3.8618 33.4491 3.5031 34.3053 3.2379C35.8205 2.78474 37.3794 2.49301 38.9559 2.36758C41.8127 2.12841 44.1047 2.05532 45.6992 1.9756C46.5242 1.89723 47.3553 1.91061 48.1773 2.01547Z" fill="#034833"/>
                </svg>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#034833] leading-tight">
                Voyages of Wonder of <br />
                Exploring Unknown
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg">
              Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div>
                  <Phone className="w-6 h-6 text-[#83CD20]" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Requesting A Call:</p>
                  <a href="tel:6295550129" className="text-xl font-semibold text-[#034833] hover:text-green-600 transition-colors">
                    (629) 555-0129
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div>
                  <Clock className="w-6 h-6 text-[#83CD20]" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Open Hours:</p>
                  <h4 className="text-xl font-semibold text-[#034833]">9 am - 8 pm</h4>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div>
                  <MapPin className="w-6 h-6 text-[#83CD20]" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Location:</p>
                  <a 
                    href="https://maps.app.goo.gl/R8Y6ZY6s1KrcGWc67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-[#034833] hover:text-green-600 transition-colors"
                  >
                    6391 Elgin St. Celina, Delaware 10299
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;