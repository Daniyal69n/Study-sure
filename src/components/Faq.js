"use client"
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={`bg-[white] border-2 border-[#034833] rounded-3xl shadow-lg cursor-pointer mb-4 hover:shadow-xl transition-all duration-300 w-full`}
      onClick={toggleFAQ}
      tabIndex="0"
      style={{
        maxWidth: '100%',
        minHeight: '80px',
        boxShadow: "rgba(0, 0, 0, 0.03) 0px 0.602187px 1.80656px -0.25px, rgba(0, 0, 0, 0.05) 0px 2.28853px 6.8656px -0.5px, rgba(0, 0, 0, 0.13) 0px 10px 30px -0.75px"
      }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center">
          <div className="mr-5">
            <div 
              className={`transition-transform duration-300 ease-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgb(23,24,29)]">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </div>
          <div className="text-left text-[#034833] font-semibold text-lg">
            {question}
          </div>
        </div>
        <div 
          className={`overflow-hidden transition-all duration-400 ease-out ${
            isOpen 
              ? 'max-h-96 opacity-100 mt-5' 
              : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="pl-11 text-[rgba(23,24,29,0.7)] text-base pr-4">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "What is the study abroad process?",
      answer: "The study abroad process involves researching universities, preparing application materials, meeting admission requirements, obtaining student visas, and arranging accommodation. We guide you through each step to ensure a smooth application process."
    },
    {
      question: "How long does it take to get admission?",
      answer: "Admission timelines vary by country and university. Generally, it takes 3-6 months from application submission to receive an admission decision. We recommend starting the process at least 8-12 months before your intended start date."
    },
    {
      question: "What are the English language requirements?",
      answer: "Most universities require IELTS, TOEFL, or PTE scores. Requirements vary by institution and program level. We provide guidance on test preparation and help you meet the specific language requirements for your chosen universities."
    },
    {
      question: "How much does it cost to study abroad?",
      answer: "Costs vary significantly by country and university. This includes tuition fees, living expenses, accommodation, and other costs. We provide detailed cost breakdowns and help you explore scholarship opportunities to make your education affordable."
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-[262px]">
        {/* Content section - Image on left (hidden on mobile), FAQ content on right */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          {/* Image section - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block w-full lg:w-1/2 lg:pr-8 mb-0 lg:mb-0">
            <div className="relative w-full max-w-[585px] mx-auto lg:mx-0">
              <img 
                src="/faq/girl.png" 
                alt="Study Abroad FAQ" 
                width="585" 
                height="776"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          
          {/* FAQ content section - full width on mobile, half width on desktop */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            {/* Header section */}
            <div className="flex flex-col mb-2">
              <h3 
                className="text-[#034833] mb-4"
                style={{
                  fontSize: 'clamp(18px, 4vw, 24px)',
                  lineHeight: '14px',
                  fontWeight: '700',
                  letterSpacing: '1.4px'
                }}
              >
                Have Any Questions?
              </h3>
              <h2 
                className="text-[#034833] mb-8"
                style={{
                  fontSize: 'clamp(32px, 8vw, 50px)',
                  lineHeight: 'clamp(38px, 9vw, 60px)',
                  fontWeight: '700',
                  letterSpacing: 'normal'
                }}
              >
                Frequently Asked Questions
              </h2>
            </div>
            
            {/* FAQ items */}
            <div className="flex flex-col items-start space-y-6">
              {faqItems.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;