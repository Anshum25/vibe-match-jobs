
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UserTypes from '@/components/UserTypes';
import AIFeatures from '@/components/AIFeatures';
import LiveDemo from '@/components/LiveDemo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Hero />
      <Features />
      <UserTypes />
      <AIFeatures />
      <LiveDemo />
      <Footer />
    </div>
  );
};

export default Index;
