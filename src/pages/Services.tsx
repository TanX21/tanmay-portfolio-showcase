
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ServicesComponent from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const ServicesPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "Services | Tanmay Dhiman - Software Engineer & Web Developer";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 md:pt-0"> {/* Add padding for mobile navigation */}
        <ServicesComponent />
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ServicesPage;
