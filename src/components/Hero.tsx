import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      const title = document.querySelector('.hero-title') as HTMLElement | null;
      const leaf1 = document.querySelector('.leaf1') as HTMLElement | null;
      const leaf2 = document.querySelector('.leaf2') as HTMLElement | null;
      const bush2 = document.querySelector('.bush2') as HTMLElement | null;
      const mount1 = document.querySelector('.mount1') as HTMLElement | null;
      const mount2 = document.querySelector('.mount2') as HTMLElement | null;

      if (title) title.style.marginTop = value * 1.1 + 'px';
      if (leaf1) leaf1.style.marginLeft = -value + 'px';
      if (leaf2) leaf2.style.marginLeft = value + 'px';
      if (bush2) bush2.style.marginBottom = -value + 'px';
      if (mount1) mount1.style.marginBottom = -value * 1.1 + 'px';
      if (mount2) mount2.style.marginBottom = -value * 1.2 + 'px';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden hero-gradient z-0">
      {/* Hero Title */}
      <div className="hero-title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[40] text-center">
        <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-white font-cambria drop-shadow-lg">
          Hello, I'm <br />
          <span className="text-portfolio-primary">Tanmay Dhiman</span>
        </h1>
        <p className="text-white text-xl mt-4 opacity-90">Software Engineer &amp; Web Developer</p>
      </div>

      {/* Parallax Images */}
      <img src="/images/mount2.png" alt="Mountains background" className="mount2 absolute bottom-0 w-full object-cover pointer-events-none z-10" />
      <img src="/images/mount1.png" alt="Mountains foreground" className="mount1 absolute bottom-0 w-full object-cover pointer-events-none z-20" />
      <img src="/images/bush2.png" alt="Bush background" className="bush2 absolute bottom-0 w-full object-cover pointer-events-none z-30" />
      <img src="/images/bush1.png" alt="Bush foreground" className="bush1 absolute bottom-0 w-full object-cover pointer-events-none z-40" />
      <img src="/images/leaf2.png" alt="Leaf right" className="leaf2 absolute bottom-0 right-0 w-1/3 pointer-events-none z-30" />
      <img src="/images/leaf1.png" alt="Leaf left" className="leaf1 absolute bottom-0 left-0 w-1/3 pointer-events-none z-30" />

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-[40] flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity no-underline border-none"
      >
        <span className="mb-2 text-lg">Scroll Down</span>
        <ArrowDown size={50} className="animate-bounce-light" />
      </a>
    </section>
  );
};

export default Hero;
