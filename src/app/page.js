import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VisaCategories from '../components/VisaCategories';
import WhyUs from '../components/WhyUs';
import OurServices from '../components/OurServices';
import Destinations from '../components/Destinations';
import Footer from '../components/Footer';
import FAQ from '@/components/Faq';
import Slider from '@/components/Slider';
import Contact from '@/components/Contact';

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VisaCategories />
      <WhyUs />
      <OurServices />
      <Destinations />
      <FAQ />
      <Contact />
      <Slider />
      <Footer />
    </div>
  );
};

export default page;