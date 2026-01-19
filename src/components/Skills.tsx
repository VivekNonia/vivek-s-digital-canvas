import { Code2, Palette } from 'lucide-react';

const Skills = () => {
  const devSkills = [
    'Java',
    'Python',
    'MongoDB',
    'Express.js',
    'React',
    'Node.js',
    'Java Full Stack',
    'Linux',
    'Shell Scripting',
    'TypeScript',
    'Git',
    'REST APIs',
  ];

  const designSkills = [
    'Figma',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Framer',
    'UI/UX Design',
    'Visual Design',
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">
        Skills & <span className="text-gradient">Expertise</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code2 className="text-primary" size={22} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Development</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {devSkills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Palette className="text-primary" size={22} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Design & Tools</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {designSkills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
