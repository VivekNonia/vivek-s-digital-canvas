import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container text-center relative z-10">
        <div className="opacity-0 animate-fade-up">
          <p className="text-primary font-mono text-sm mb-4">Hello, I'm</p>
        </div>
        
        <h1 className="opacity-0 animate-fade-up delay-100 text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Vivek Nonia
        </h1>
        
        <p className="opacity-0 animate-fade-up delay-200 text-xl md:text-2xl text-muted-foreground mb-6">
          Creative <span className="text-gradient">Frontend Developer</span> & <span className="text-gradient">Graphic Designer</span>
        </p>
        
        <p className="opacity-0 animate-fade-up delay-300 text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Blending code and creativity to build immersive web experiences. 
          MERN Stack Specialist & UI/UX Enthusiast.
        </p>
        
        <div className="opacity-0 animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium 
                       hover:bg-primary/90 transition-all duration-300 animate-glow-pulse"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border text-foreground rounded-lg font-medium 
                       hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
        
        <div className="opacity-0 animate-fade-up delay-500 flex gap-6 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:Iot23.viveknonia.33@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary 
                   transition-colors duration-200 animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
