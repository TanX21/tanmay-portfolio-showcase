
import React from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  percentage: number;
}

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-white/80">{percentage}%</span>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 75 },
    { name: "C/C++", percentage: 90 },
    { name: "Photoshop", percentage: 55 }
  ];

  const backendSkills: Skill[] = [
    { name: "Python", percentage: 80 },
    { name: "MongoDB", percentage: 80 },
    { name: "Express.js", percentage: 65 },
    { name: "React.js", percentage: 75 },
    { name: "Node.js", percentage: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-portfolio-dark relative overflow-hidden">
      {/* Top decorative element */}
      <div className="absolute top-0 left-0 w-full">
        <img 
          src="/images/bush2.png" 
          alt=""
          className="w-full object-cover rotate-180 opacity-20"
          style={{ height: '80px' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-white">Skills</h2>
        
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-10">
          As a Computer Science graduate, I've completed several projects and an internship focused on both front-end and back-end web development. My skills include HTML, CSS, JavaScript, PHP, and C/C++. I've worked with a variety of technologies, and my core tech stack revolves around the MERN stack—MongoDB, Express.js, React.js, and Node.js.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-portfolio-primary/30 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:scale-105 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Frontend Development</h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
            ))}
          </div>
          
          <div className="bg-portfolio-primary/30 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:scale-105 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Backend Development</h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Left leaf decoration */}
      <div className="absolute bottom-0 left-0 opacity-20 z-0">
        <img 
          src="/images/leaf1.png" 
          alt=""
          className="w-64 h-auto"
        />
      </div>
      
      {/* Right leaf decoration */}
      <div className="absolute bottom-0 right-0 opacity-20 z-0">
        <img 
          src="/images/leaf2.png" 
          alt=""
          className="w-64 h-auto"
        />
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full">
        <img 
          src="/images/mount2.png" 
          alt=""
          className="w-full object-cover opacity-10"
          style={{ height: '100px' }}
        />
      </div>
    </section>
  );
};

export default Skills;
