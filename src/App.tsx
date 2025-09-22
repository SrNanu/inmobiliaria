import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import TechFeatures from './components/TechFeatures';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F29] overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <TechFeatures />
      <HowItWorks />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;