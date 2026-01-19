import { Briefcase, Calendar, Users } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">
        <span className="text-gradient">Experience</span>
      </h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />
        
        {/* Experience item */}
        <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
          <div className="md:w-1/2 md:pr-12 md:text-right">
            <div className="flex items-center gap-2 md:justify-end text-primary font-mono text-sm mb-2">
              <Calendar size={14} />
              Nov 2025 – Present
            </div>
          </div>
          
          {/* Timeline dot */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
          
          <div className="md:w-1/2 md:pl-12">
            <div className="glass-card p-6 card-glow transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Graphic Design Team Member</h3>
                  <p className="text-primary font-medium">Google Developer Groups on Campus</p>
                  <p className="text-muted-foreground text-sm">Asansol Engineering College</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Designed high-impact posters for 'Cloud Study Jams' (300+ registrations) 
                and the 'S.P.A.R.K.' event. Created visual assets and layouts for community 
                newsletters, driving engagement and participation.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users size={14} />
                <span>300+ event registrations achieved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
