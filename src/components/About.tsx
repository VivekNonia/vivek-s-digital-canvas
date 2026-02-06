import { GraduationCap, MapPin, Calendar, Target, Lightbulb, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useParallax } from '@/hooks/use-parallax';

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const parallaxOffset = useParallax(0.15);

  return (
    <section id="about" className="section-container relative overflow-hidden" ref={ref}>
      {/* Parallax background decoration */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl opacity-50"
        style={{ transform: `translateY(${-parallaxOffset}px)` }}
      />
      <div className={`text-center mb-20 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
        <span className="inline-block px-5 py-2 mb-6 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20 shadow-lg shadow-primary/20">
          👨‍💻 About Me
        </span>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Get to <span className="text-gradient">Know Me</span>
        </h2>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-8 scroll-reveal mb-12 ${isVisible ? 'revealed delay-200' : ''}`}>
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed text-xl">
              I am a <span className="text-foreground font-semibold">B.Tech Computer Science student</span> at Asansol Engineering College, 
              blending technical coding expertise with creative design work. I specialize 
              in the <span className="text-gradient font-semibold">MERN stack, Java, and Python</span>, and I actively contribute to community 
              events like <span className="text-primary font-semibold">Google Developer Groups</span>.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              My passion lies at the <span className="text-foreground font-semibold">intersection of technology and design</span> - creating 
              web experiences that are not only functional but visually compelling. 
              I believe great software should be both <span className="text-gradient font-semibold">powerful and beautiful</span>.
            </p>
          </div>

          {/* What I Do */}
        </div>
        {/* End of intro and what I do sections */}
        
        <div className={`glass-card p-10 space-y-8 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 glow-effect scroll-reveal relative overflow-hidden group ${isVisible ? 'revealed delay-400' : ''}`}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                Education
              </h3>
            
            <div className="space-y-5">
              <div className="border-l-2 border-primary/50 pl-5 hover:border-primary transition-colors duration-300">
                <h4 className="text-lg font-bold text-foreground mb-1">B.Tech in Computer Science</h4>
                <p className="text-primary font-semibold text-sm mb-3">Asansol Engineering College</p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2 bg-gradient-to-r from-secondary/60 to-secondary/40 px-3 py-1.5 rounded-lg border border-border/30 hover:border-primary/30 hover:scale-105 transition-all duration-300">
                    <Calendar size={16} className="text-primary" />
                    2023 - 2027
                  </span>
                  <span className="flex items-center gap-2 bg-gradient-to-r from-secondary/60 to-secondary/40 px-3 py-1.5 rounded-lg border border-border/30 hover:border-primary/30 hover:scale-105 transition-all duration-300">
                    <MapPin size={16} className="text-primary" />
                    Asansol, India
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
