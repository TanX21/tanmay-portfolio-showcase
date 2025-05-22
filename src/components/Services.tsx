
import React from 'react';
import { Code, Server, Laptop, Database, Brush, PenTool } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  className 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  className?: string;
}) => {
  return (
    <div className={cn(
      "p-6 rounded-xl bg-portfolio-primary/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300",
      className
    )}>
      <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-white/10 text-white mx-auto">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-2">{title}</h3>
      <p className="text-white/80 text-center">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Modern, responsive web interfaces using React, HTML5, CSS3, and JavaScript with a focus on performance and user experience.",
      icon: Laptop
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions using Node.js and Express.js, with secure API design and efficient database integration.",
      icon: Server
    },
    {
      title: "MongoDB Database",
      description: "Schema design, indexing, data modeling, and optimization for MongoDB to ensure your application's data is structured efficiently.",
      icon: Database
    },
    {
      title: "Full Stack MERN Solutions",
      description: "End-to-end web application development using MongoDB, Express.js, React, and Node.js with seamless integration between layers.",
      icon: Code
    },
    {
      title: "UI/UX Design",
      description: "User-centered design with intuitive interfaces, wireframing, and prototyping to create engaging digital experiences.",
      icon: PenTool
    },
    {
      title: "Web Design",
      description: "Creative and visually appealing designs that align with your brand identity and effectively communicate your message.",
      icon: Brush
    }
  ];

  return (
    <section id="services" className="py-20 bg-portfolio-dark relative overflow-hidden">
     
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-white mb-4">Services</h2>
        
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-16">
          I offer comprehensive web development services with a focus on the MERN stack (MongoDB, Express.js, React.js, Node.js).
          From frontend design to backend development, I can help bring your digital ideas to life with modern, scalable solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
      
      {/* Pricing section */}
      <div className="container mx-auto px-4 mt-20 relative z-10">
        <h3 className="text-2xl font-bold text-white text-center mb-12">How I Work</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-portfolio-primary/20 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Consultation</h4>
            <p className="text-white/80">Understanding your requirements, goals, and vision for the project.</p>
          </div>
          
          <div className="bg-portfolio-primary/20 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Development</h4>
            <p className="text-white/80">Creating your solution with regular updates and iterative improvements.</p>
          </div>
          
          <div className="bg-portfolio-primary/20 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Delivery</h4>
            <p className="text-white/80">Final testing, deployment, and ongoing support for your application.</p>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="container mx-auto px-4 mt-20 relative z-10">
        <div className="bg-portfolio-primary/40 backdrop-blur-sm p-8 rounded-xl max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-white/80 mb-6">Let's discuss how I can help you build your next web application.</p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-white text-portfolio-primary font-medium rounded-lg shadow hover:bg-white/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
    
    </section>
  );
};

export default Services;
