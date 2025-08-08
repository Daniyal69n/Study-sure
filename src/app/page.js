import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import ServiceCards from '../components/ServiceCards';
import StatsSection from '../components/StatsSection';
import TestimonialCards from '../components/TestimonialCards';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureCards />
      <ServiceCards />
      <StatsSection />
      <TestimonialCards />
      <CTASection />
      <Footer />
    </div>
  );
};

export default page;