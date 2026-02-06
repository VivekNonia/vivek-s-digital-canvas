import { Code2, Palette, Database, Globe, Terminal, GitBranch, Server, Layers, FileCode, Box, Paintbrush, Figma, Pen, Layout, Zap, Smartphone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useParallax } from '@/hooks/use-parallax';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const parallaxOffset = useParallax(0.18);

  const devSkills = [
    { name: 'React', icon: Layers, proficiency: 95 },
    { name: 'JavaScript', icon: FileCode, proficiency: 90 },
    { name: 'HTML', icon: FileCode, proficiency: 95 },
    { name: 'CSS', icon: Paintbrush, proficiency: 92 },
    { name: 'Node.js', icon: Box, proficiency: 85 },
    { name: 'MongoDB', icon: Database, proficiency: 85 },
    { name: 'React.js', icon: Server, proficiency: 85 },
    { name: 'Java', icon: FileCode, proficiency: 80 },
    { name: 'Python', icon: Terminal, proficiency: 80 },
    { name: 'REST APIs', icon: Globe, proficiency: 90 },
    { name: 'Git', icon: GitBranch, proficiency: 88 },
    { name: 'Linux', icon: Terminal, proficiency: 82 },
    { name: 'Tailwind CSS', icon: Zap, proficiency: 95 },
    { name: 'SQL', icon: Database, proficiency: 82 },
  ];

  const designSkills = [
    { name: 'Figma', icon: Figma, proficiency: 92 },
    { name: 'UI/UX Design', icon: Palette, proficiency: 88 },
    { name: 'Adobe Photoshop', icon: Paintbrush, proficiency: 85 },
    { name: 'Adobe Illustrator', icon: Pen, proficiency: 82 },
    { name: 'Visual Design', icon: Paintbrush, proficiency: 88 },
    { name: 'Web Design', icon: Smartphone, proficiency: 90 },
  ];

  const categorySkills = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Figma'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'React.js', 'MongoDB', 'REST APIs'],
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Tools & Platform',
      skills: ['Git', 'Linux', 'Python', 'Java'],
      color: 'from-orange-500/20 to-red-500/20'
    },
  ];

  return (
    <section id="skills" className="section-container relative overflow-hidden" ref={ref}>
      {/* Parallax background decoration */}
      <div 
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl opacity-60"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl opacity-60"
        style={{ transform: `translateY(${-parallaxOffset * 0.7}px)` }}
      />
      <div className={`text-center mb-20 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
        <span className="inline-block px-5 py-2 mb-6 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20 shadow-lg shadow-primary/20">
          ⚡ Skills
        </span>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
          A comprehensive toolkit of technologies and tools I use to create exceptional digital experiences.
        </p>
      </div>
      
      {/* Skills by Category */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {categorySkills.map((category, index) => (
          <div
            key={category.title}
            className={`glass-card p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 glow-effect scroll-reveal ${isVisible ? `revealed delay-${(index + 1) * 200}` : ''}`}
          >
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center border border-white/5 mb-6`}>
              <Code2 className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-6">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all duration-200 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Development Skills */}
        <div className={`glass-card p-10 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 glow-effect scroll-reveal relative overflow-hidden group ${isVisible ? 'revealed delay-200' : ''}`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Code2 className="text-primary" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Development</h3>
            </div>
            
            <div className="space-y-5">
              {devSkills.map((skill, idx) => (
                <div key={skill.name} className="group/skill" style={{ animationDelay: `${idx * 50}ms` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon size={18} className="text-primary group-hover/skill:scale-125 group-hover/skill:rotate-12 transition-all duration-300" />
                      <span className="font-semibold text-foreground group-hover/skill:text-primary transition-colors">{skill.name}</span>
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden border border-border/50 group-hover/skill:border-primary/30 transition-colors">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 via-primary to-cyan-500 rounded-full transition-all duration-700 group-hover/skill:shadow-lg group-hover/skill:shadow-primary/50 relative overflow-hidden"
                      style={{ width: `${skill.proficiency}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Design Skills */}
        <div className={`glass-card p-10 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 glow-effect scroll-reveal relative overflow-hidden group ${isVisible ? 'revealed delay-400' : ''}`}>
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Palette className="text-primary" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Design & Tools</h3>
            </div>
            
            <div className="space-y-5">
              {designSkills.map((skill, idx) => (
                <div key={skill.name} className="group/skill" style={{ animationDelay: `${idx * 50}ms` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon size={18} className="text-primary group-hover/skill:scale-125 group-hover/skill:rotate-12 transition-all duration-300" />
                      <span className="font-semibold text-foreground group-hover/skill:text-primary transition-colors">{skill.name}</span>
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden border border-border/50 group-hover/skill:border-primary/30 transition-colors">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 rounded-full transition-all duration-700 group-hover/skill:shadow-lg group-hover/skill:shadow-purple-500/50 relative overflow-hidden"
                      style={{ width: `${skill.proficiency}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
