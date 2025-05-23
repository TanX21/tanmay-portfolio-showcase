
import React from 'react';
import { Download, ChevronRight } from 'lucide-react';

const ResumeItem = ({ 
  title, 
  subtitle, 
  date, 
  description,
  bullets = []
}: { 
  title: string;
  subtitle?: string;
  date?: string;
  description?: string;
  bullets?: string[];
}) => {
  return (
    <div className="bg-white/5 rounded-xl p-6 mb-6 hover:bg-white/10 transition-colors">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {subtitle && <h4 className="text-portfolio-accent mt-1">{subtitle}</h4>}
      {date && <p className="inline-block bg-portfolio-accent/20 text-portfolio-accent px-3 py-1 rounded mt-2 text-sm">{date}</p>}
      {description && <p className="text-white/80 mt-3">{description}</p>}
      
      {bullets.length > 0 && (
        <ul className="mt-3 space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex text-white/80">
              <ChevronRight size={18} className="text-portfolio-accent flex-shrink-0 mt-1 mr-2" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">Resume</h2>
        
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-10">
          To work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and
          knowledge appropriately.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Education & Skills</h3>
            
            <ResumeItem 
              title="Bachelor of Technology in Computer Science & Information Technology"
              subtitle="Institute of Engineering & Science, IPS Academy, Indore, IN"
              date="2020 - 2024"
              description="An Autonomous Institution that is based on Rajiv Gandhi Proudyogiki Vishwavidyalaya, Madhya Pradesh"
            />
            
            <ResumeItem 
              title="Skills"
              bullets={[
                "Programming Languages - C/C++, Python, JavaScript",
                "Frontend – HTML5, CSS3, React.js",
                "Frameworks & Libraries – Express.js, Bootstrap, React.js, Redux",
                "Backend - Node.js, Express.js",
                "Others – TailwindCSS, DaisyUI, Github, SQL, MongoDB, Cloudinary, JWT, Bcrypt, Render, Vercel"
              ]}
            />
            
            <ResumeItem 
              title="Interests & Hobbies"
              bullets={[
                "Photography",
                "Football",
                "Travelling",
                "Sketching"
              ]}
            />

            <ResumeItem 
              title="CERTIFICATION"
              bullets={[
                "MERN Stack Developer"
              ]}
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Professional Experience</h3>
            
            <ResumeItem 
              title="MERN Stack Developer"
              subtitle="Clean Code, Indore, IN"
              date="October 2024 - April 2025"
              bullets={[
                "Internship on MERN Stack",
                "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
                "Supervise the assessment of all UI/UX materials in order to ensure quality and accuracy of the design"
              ]}
            />
            
            <ResumeItem 
              title="Web Developer"
              subtitle="Afame Technology, Bangalore, IN"
              date="February 2024 - April 2024"
              bullets={[
                "Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements)",
                "Managed projects or tasks at a given time while under pressure",
                "Created 4+ design presentations and proposals"
              ]}
            />
            
            <ResumeItem 
              title="Digital marketing & Business development"
              subtitle="LUDIFU (LSP program), Indore, IN"
              date="May 2023 - June 2023"
              bullets={[
                "Learn about Digital marketing and Communication skills",
                "Complete Workshop with team on Entrepreneurship",
                "Enhanced my Soft Skills and Verbal Language"
              ]}
            />
            
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <a 
            href="/files/Tanmay-MERN-CV.pdf" 
            download="Tanmay-MERN-CV"
            className="flex items-center gap-2 bg-portfolio-accent hover:bg-portfolio-accent/80 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
