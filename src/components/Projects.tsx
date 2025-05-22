
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "BookStore E-commerce",
    description: "Full-stack MERN application for an online BookStore with user authentication and shopping cart functionalities.",
    image: "/images/bookstore.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT"],
    liveUrl: "https://tanmay-book-store.vercel.app/",
    githubUrl: "https://github.com/TanX21?tab=repositories",
    category: "web"
  },
  {
    id: 2,
    title: "Online Bike Rental System",
    description: "A web application that allows users to rent bikes and request repair services with admin panel.",
    image: "/images/BikeRental.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    // githubUrl: "https://github.com/TanX21/bike-rental",
    category: "web"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Professional portfolio website showcasing skills, projects, and resume with contact form.",
    image: "/images/portfolio.png",
    tags: ["React", "Tailwind CSS", "Animation", "TypeScript"],
    liveUrl: "#",
    category: "web"
  },
  {
    id: 4,
    title: "Neon Shop",
    description: "E-commerce website with sales analytics, inventory management and user tracking.",
    image: "/images/Neonshop.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    liveUrl: "https://tanx21.github.io/Neon-Shop/",
    githubUrl: "https://github.com/TanX21?tab=repositories",
    category: "web"
  },
  {
    id: 5,
    title: "Weather App",
    description: "Real-time weather application that shows current weather and forecast based on geolocation.",
    image: "/images/weather.png",
    tags: ["JavaScript", "API", "Responsive"],
    githubUrl: "https://github.com/TanX21/Wheater-App",
    liveUrl: "https://tanx21.github.io/Wheater-App/",
    category: "app"
  },
  {
    id: 6,
    title: "Rock, Paper & Scissors",
    description: "A interactive game where users play against the computer by selecting one of the three options.",
    image: "/images/game.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/TanX21/RockPaperS",
    liveUrl: "https://tanx21.github.io/RockPaperS/",
    category: "app"
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories = [
    { value: "all", label: "All" },
    { value: "web", label: "Web" },
    { value: "app", label: "App" }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-primary/90">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">Projects</h2>
        
        <div className="flex justify-center mb-10">
          <div className="flex bg-white/10 rounded-lg p-1">
            {categories.map(category => (
              <button
                key={category.value}
                className={cn(
                  "px-4 py-2 rounded-md transition-all",
                  activeCategory === category.value
                    ? "bg-portfolio-accent text-white"
                    : "text-white hover:bg-white/10"
                )}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white/5 rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-portfolio-accent/20 text-white text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
