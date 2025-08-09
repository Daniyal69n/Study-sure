import React from 'react';
import Hero from '../components/Hero';
import VisaCategories from '../components/VisaCategories';
import WhyUs from '../components/WhyUs';
import OurServices from '../components/OurServices';
import Destinations from '@/components/Destinations';
import FAQ from '@/components/Faq';
import Contact from '@/components/Contact';
import Widget from '@/components/Widget';

const page = () => {
  return (
    <div>
      {/* Spacer for fixed navbar */}
      <div className="bg-white h-24"></div>
      <Hero />
      <VisaCategories />
      <Widget />
      <WhyUs />
      <OurServices />
      <Destinations />
      <FAQ />
      <Contact />
    </div>
  );
};

export default page;