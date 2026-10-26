import React from 'react';

import Hero from '../../components/home/Hero';
import AboutSection from '../../components/home/AboutSection';
import FeaturedTools from '../../components/home/FeaturedTools';
import HowItWorks from '../../components/home/HowItWorks';
import PricingSection from '../../components/home/PricingSection';
import Testimonials from '../../components/home/Testimonials';
import FAQ from '../../components/home/FAQ';
import FinalCTA from '../../components/home/FinalCTA';

const Home = () => {
  return (
    <div className="cp-home-page">
      <Hero />
      <AboutSection />
      <FeaturedTools />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Home;
