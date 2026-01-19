import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">
        About <span className="text-gradient">Me</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I am a B.Tech Computer Science student at Asansol Engineering College, 
            blending technical coding expertise with creative design work. I specialize 
            in the MERN stack, Java, and Python, and I actively contribute to community 
            events like Google Developer Groups.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            My passion lies at the intersection of technology and design — creating 
            web experiences that are not only functional but visually compelling. 
            I believe great software should be both powerful and beautiful.
          </p>
        </div>
        
        <div className="glass-card p-6 space-y-6">
          <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
            <GraduationCap className="text-primary" size={24} />
            Education
          </h3>
          
          <div className="space-y-4">
            <div className="border-l-2 border-primary/50 pl-4">
              <h4 className="font-semibold text-foreground">B.Tech in Computer Science</h4>
              <p className="text-muted-foreground">Asansol Engineering College</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  2023 - 2027
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  Asansol, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
