
import React from 'react';
import { ChevronRight, Download, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-portfolio-primary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">About Me</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 border-white/20">
                <img 
                  src="/images/MyProfile.jpg" 
                  alt="Tanmay Dhiman" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" absolute -bottom-5 left-12  bg-portfolio-accent text-white py-2 px-6 rounded-lg shadow-lg">
                <span className="font-semibold">Software Engineer</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8">
            <h3 className="text-2xl text-white font-bold mb-4">Software Engineer &amp; Web Developer</h3>
            <p className="text-white/90 mb-6">
              I completed my Bachelor's of Technology in Computer science and Information Technology from University, Institute of Engineering & Science, IPS Academy, which is situated in Indore, Madhya Pradesh.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-6">
              <div className="flex text-white/90">
                <ChevronRight size={20} className="text-portfolio-accent flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Wish me On:</span> 16 December
                </div>
              </div>
              <div className="flex text-white/90">
                <ChevronRight size={20} className="text-portfolio-accent flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Degree:</span> Bachelor's 2024
                </div>
              </div>
              <div className="flex text-white/90">
                <ChevronRight size={20} className="text-portfolio-accent flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Phone:</span> +91 7000184797
                </div>
              </div>
              <div className="flex text-white/90">
                <ChevronRight size={20} className="text-portfolio-accent flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Email:</span> tanmay213@gmail.com
                </div>
              </div>
              <div className="flex text-white/90">
                <ChevronRight size={20} className="text-portfolio-accent flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">City:</span> Ratlam &amp; Indore, India
                </div>
              </div>
              <div className="flex text-white/90">
                <ChevronRight size={20} className="text-portfolio-accent flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Freelance:</span> Available
                </div>
              </div>
            </div>
            
            <p className="text-white/90 mb-8">
              Hi! I'm a Software Engineer, Web Developer, and Computer Science student based in Indore, Madhya Pradesh, India. I specialize in building scalable web applications and RESTful APIs using JavaScript, React.js, Node.js, and Express.js.
              <br /><br />
              I'm passionate about creating clean, efficient, and impactful software. With a strong attention to detail and a love for learning, I enjoy working on projects that solve real problems and make a difference. Whether I'm writing code, reading, speaking, or sharing ideas—I'm always looking for ways to grow and contribute.
              <br /><br />
              Thanks for stopping by—feel free to explore my work and get in touch!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/files/Tanmay-MERN-CV.pdf" 
                download="Tanmay-MERN-CV"
                className="flex items-center justify-center gap-2 bg-portfolio-accent hover:bg-portfolio-accent/80 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
              
              <button 
                onClick={scrollToProjects}
                className="flex items-center justify-center gap-2 border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Eye size={20} />
                <span>View My Work</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
