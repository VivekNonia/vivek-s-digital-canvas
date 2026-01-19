import { Briefcase, Calendar, Users, ArrowUpRight, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Graphic Design Team Member',
      company: 'Google Developer Groups on Campus',
      location: 'Asansol Engineering College',
      duration: 'Nov 2025 – Present',
      description: 'Designed high-impact posters for "Cloud Study Jams" (300+ registrations) and the "S.P.A.R.K." event. Created visual assets and layouts for community newsletters, driving engagement and participation.',
      achievements: [
        '300+ event registrations achieved',
        'Designed assets for 5+ major events',
        'Improved newsletter engagement',
      ],
      skills: ['Photoshop', 'Illustrator', 'Figma'],
      current: true,
    },
  ];

  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
          Career
        </span>
        <h2 className="text-4xl md:text-5xl font-bold">
          Work <span className="text-gradient">Experience</span>
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline connector */}
            {index < experiences.length - 1 && (
              <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-primary/50 to-border hidden md:block" />
            )}
            
            <div className="glass-card p-8 card-glow transition-all duration-300 hover:border-primary/30 relative overflow-hidden group">
              {/* Background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <Briefcase className="text-primary" size={28} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-green-500/10 text-green-500 rounded-full border border-green-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-semibold">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full border border-border/50">
                    <Calendar size={14} className="text-primary" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                    <Award size={16} className="text-primary" />
                    Key Achievements
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 px-3 py-2 rounded-lg border border-border/50"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Skills used */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-muted-foreground">Tools used:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
