
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Services from '@/components/Services';

const Portfolio = () => {
  useEffect(() => {
    // Update document title
    document.title = "Tanmay Dhiman | Software Engineer & Web Developer";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Portfolio;
