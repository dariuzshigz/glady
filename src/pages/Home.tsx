import React from 'react';
import { 
 Hero, 
 ServiceCategories, 
 HowItWorks, 
 FeaturedVendors, 
 TechInnovation, 
 TrustSafety, 
 GeographicCoverage, 
 CallToAction 
} from '../components/home';

function Home() {
  return (
    <>
      <Hero />
      <ServiceCategories />
      <HowItWorks />
      <FeaturedVendors />
      <TechInnovation />
      <TrustSafety />
      <GeographicCoverage />
      <CallToAction />
    </>
  );
}

export default Home;