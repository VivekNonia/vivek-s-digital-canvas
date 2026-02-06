import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useParallax } from '@/hooks/use-parallax';

const Hero = () => {
  const parallaxOffset1 = useParallax(0.3);
  const parallaxOffset2 = useParallax(0.5);
  const parallaxOffset3 = useParallax(0.2);
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Enhanced Background glow effects with animation and parallax */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 via-purple-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse animate-float" 
        style={{ transform: `translateY(${parallaxOffset1}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-l from-pink-500/15 via-primary/10 to-blue-500/10 rounded-full blur-3xl animate-float" 
        style={{ animationDelay: '2s', transform: `translateY(${parallaxOffset2}px)` }} 
      />
      <div 
        className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1s', transform: `translateY(${parallaxOffset3}px)` }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent" 
        style={{ transform: `translate(-50%, calc(-50% + ${parallaxOffset3}px))` }}
      />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '2.5s' }} />
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="section-container text-center relative z-10 max-w-5xl">
        <div className="opacity-0 animate-fade-up">
          <p className="text-primary font-mono text-base mb-6 tracking-wider">👋 Hello, I'm</p>
        </div>
        
        <h1 className="opacity-0 animate-fade-up delay-100 text-6xl md:text-8xl font-bold mb-8 tracking-tight">
          Vivek Nonia
        </h1>
        
        <p className="opacity-0 animate-fade-up delay-200 text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
          Creative <span className="text-gradient">Frontend Developer</span> & <span className="text-gradient">Graphic Designer</span>
        </p>
        
        <p className="opacity-0 animate-fade-up delay-300 text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Blending code and creativity to build immersive web experiences. 
          MERN Stack Specialist & UI/UX Enthusiast.
        </p>
        
        <div className="opacity-0 animate-fade-up delay-400 flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
          <a
            href="#projects"
            className="group relative px-10 py-4 bg-gradient-to-r from-primary via-blue-600 to-primary text-primary-foreground rounded-xl font-semibold text-lg
                       hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
          <a
            href="#contact"
            className="group px-10 py-4 border-2 border-primary/40 text-foreground rounded-xl font-semibold text-lg backdrop-blur-sm
                       hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Contact Me
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </a>
        </div>
        
        <div className="opacity-0 animate-fade-up delay-500 flex gap-6 justify-center">
          <a
            href="https://github.com/VivekNonia"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl border-2 border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
          >
            <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl border-2 border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
          >
            <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=iot23.viveknonia.33@gmail.com&su=Project%20Inquiry&body=Hi%20Vivek,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0D%0A%0D%0A"
            className="group p-3 rounded-xl border-2 border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
          >
            <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
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
