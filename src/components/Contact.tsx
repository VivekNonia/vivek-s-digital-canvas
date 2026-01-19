import { Mail, Phone, Github, Linkedin, Send, MapPin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Iot23.viveknonia.33@gmail.com',
      href: 'mailto:Iot23.viveknonia.33@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8617846959',
      href: 'tel:+918617846959',
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
      href: 'https://github.com',
    },
  ];

  return (
    <section id="contact" className="section-container relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="text-primary" size={24} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-foreground font-medium hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium text-sm">{info.value}</p>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA Card */}
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to start a project?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Whether you need a website, web application, or design work, I'm here to help bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="mailto:Iot23.viveknonia.33@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 group/btn shadow-lg shadow-primary/25"
                >
                  <Send size={18} />
                  Send a Message
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-muted-foreground">Or connect with me:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center 
                               hover:bg-primary/10 hover:border-primary/50 border border-border/50 
                               transition-all duration-300 group/social"
                    aria-label={social.label}
                  >
                    <social.icon className="text-muted-foreground group-hover/social:text-primary transition-colors" size={18} />
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
