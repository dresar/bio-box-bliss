
import React from 'react';
import ProfileSection from '../components/ProfileSection';
import ServicesSection from '../components/ServicesSection';
import ProductsSection from '../components/ProductsSection';
import SocialSection from '../components/SocialSection';
import FloatingDots from '../components/FloatingDots';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      <FloatingDots />
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-md">
        <ProfileSection />
        <ServicesSection />
        <ProductsSection />
        <SocialSection />
      </div>
    </div>
  );
};

export default Index;
