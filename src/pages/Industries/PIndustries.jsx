import React from 'react';
import TopHeader from '../../components/common/TopHeader';
import Footer from '../../components/common/Footer';
import PrimaryHeader from '../../components/common/PrimaryHeader';
import SecondaryHeroSection from '../../components/common/SecondaryHeroSection';
import IndustrySection from './industryComponent/IndustrySection';
import ContactCTA from './industryComponent/ContactCTA';

const PIndustries = () => {
  const breadcrumbItem = [
    { label: 'Home', path: '/' },
    { label: 'Industries', path: '/industries', className:'text-red-500' },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      
      <TopHeader />
      <PrimaryHeader />
      
      <main className="flex-grow">
        <SecondaryHeroSection 
          title="Industries" 
          breadcrumbItem={breadcrumbItem} 
        />
        
        <IndustrySection />
        <ContactCTA />
        
      </main>
     
      
      <Footer />
    </div>
  );
};

export default PIndustries;