import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useParallax } from '@/hooks/use-parallax';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const parallaxOffset = useParallax(0.25);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'iot23.viveknonia.33@gmail.com',
      href: 'mailto:iot23.viveknonia.33@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Asansol, West Bengal, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/VivekNonia',
    },
  ];

  return (
    <section id="contact" className="section-container relative overflow-hidden py-32" ref={ref}>
      {/* Enhanced Background decoration with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse animate-float"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '2s', transform: `translateY(${-parallaxOffset * 0.6}px)` }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10">
        <div className={`text-center max-w-4xl mx-auto mb-20 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <span className="inline-block px-5 py-2 mb-6 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20 animate-pulse shadow-lg shadow-primary/20">
            ✨ Let's Connect
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Have an exciting project in mind? I'm always open to discussing new opportunities, 
            creative collaborations, or partnership ventures. Whether you need a stunning website, a powerful web application, or innovative design work, 
            I'm here to transform your vision into reality.
            <span className="block mt-4 text-xl text-primary/90 font-semibold">Let's build something extraordinary together! 🚀</span>
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className={`glass-card p-8 group hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 glow-effect scroll-reveal ${isVisible ? `revealed delay-${(index + 2) * 200}` : ''}`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                    <info.icon className="text-primary" size={28} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider font-semibold">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-semibold text-base hover:text-primary transition-colors duration-200 break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-semibold text-base">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA Card */}
          <div className={`glass-card p-10 md:p-16 text-center relative overflow-hidden group border-2 hover:border-primary/60 rounded-3xl glow-effect scroll-reveal ${isVisible ? 'revealed delay-600' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(var(--primary-rgb),0.2),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-3xl bg-gradient-to-br from-primary/40 to-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl shadow-primary/30 border border-primary/30">
                <Mail className="text-primary group-hover:scale-110 transition-transform" size={36} />
              </div>
              
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Ready to start your project? Let me help you turn your ideas into reality!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=iot23.viveknonia.33@gmail.com&su=Project%20Inquiry&body=Hi%20Vivek,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0D%0A%0D%0A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-blue-600 to-primary text-primary-foreground rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Mail size={22} className="group-hover/btn:rotate-12 transition-transform" />
                    Send a Message
                    <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center justify-center gap-5">
                <span className="text-base text-muted-foreground font-medium">Or connect with me:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center 
                               hover:bg-gradient-to-br hover:from-primary/20 hover:to-primary/10 hover:border-primary/60 border-2 border-border/50 
                               transition-all duration-300 group/social hover:scale-110 hover:shadow-lg hover:shadow-primary/30 hover:rotate-6"
                    aria-label={social.label}
                  >
                    <social.icon className="text-muted-foreground group-hover/social:text-primary group-hover/social:scale-110 transition-all" size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
