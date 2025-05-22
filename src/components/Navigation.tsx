
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, FileText, BarChart3, Code, Mail, Menu, X, Laptop } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      const scrollPosition = window.pageYOffset;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} />, path: '/' },
    { id: 'about', label: 'About', icon: <User size={20} />, path: '/#about' },
    { id: 'skills', label: 'Skills', icon: <BarChart3 size={20} />, path: '/#skills' },
    { id: 'services', label: 'Services', icon: <Laptop size={20} />, path: '/#services' },
    { id: 'projects', label: 'Projects', icon: <Code size={20} />, path: '/#projects' },
    { id: 'resume', label: 'Resume', icon: <FileText size={20} />, path: '/#resume' },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} />, path: '/#contact' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button 
          onClick={toggleMobileMenu}
          className="p-2 bg-portfolio-primary rounded-full text-white shadow-lg"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop navigation */}
      <nav className="fixed top-0 right-0 h-full z-40 hidden md:block">
        <div className="h-full flex flex-col items-center justify-center pr-4">
          <div className="bg-black/20 backdrop-blur-md p-2 rounded-full shadow-lg">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.path.startsWith('/#') ? (
                    <a
                      href={item.path.substring(1)} // Remove the leading slash for hash links
                      className={cn(
                        'flex items-center justify-center w-12 h-12 rounded-full transition-all',
                        activeSection === item.id
                          ? 'bg-portfolio-accent text-white'
                          : 'bg-white/70 text-portfolio-primary hover:bg-portfolio-accent hover:text-white'
                      )}
                      title={item.label}
                    >
                      {item.icon}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={cn(
                        'flex items-center justify-center w-12 h-12 rounded-full transition-all',
                        activeSection === item.id
                          ? 'bg-portfolio-accent text-white'
                          : 'bg-white/70 text-portfolio-primary hover:bg-portfolio-accent hover:text-white'
                      )}
                      title={item.label}
                    >
                      {item.icon}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      <nav 
        className={cn(
          "fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-sm z-40 transform transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-center h-full">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.id} className="text-center">
                {item.path.startsWith('/#') ? (
                  <a
                    href={item.path.substring(1)} // Remove the leading slash for hash links
                    className={cn(
                      'flex items-center gap-3 text-lg px-8 py-3 rounded-lg transition-all',
                      activeSection === item.id
                        ? 'bg-portfolio-accent text-white'
                        : 'text-white hover:bg-portfolio-accent/30'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      'flex items-center gap-3 text-lg px-8 py-3 rounded-lg transition-all',
                      activeSection === item.id
                        ? 'bg-portfolio-accent text-white'
                        : 'text-white hover:bg-portfolio-accent/30'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
