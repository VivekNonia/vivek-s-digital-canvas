import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="section-title">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Have a project in mind or want to collaborate? I'd love to hear from you. 
          Let's create something amazing together.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <div className="space-y-6">
          <a
            href="mailto:Iot23.viveknonia.33@gmail.com"
            className="glass-card p-6 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Mail className="text-primary" size={22} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="text-foreground font-medium">Iot23.viveknonia.33@gmail.com</p>
            </div>
          </a>
          
          <a
            href="tel:+918617846959"
            className="glass-card p-6 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Phone className="text-primary" size={22} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <p className="text-foreground font-medium">+91 8617846959</p>
            </div>
          </a>
        </div>
        
        <div className="glass-card p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">Connect with me</h3>
          
          <div className="flex gap-4 mb-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center 
                         hover:bg-primary/10 hover:border-primary/50 border border-border/50 
                         transition-all duration-300 group"
            >
              <Linkedin className="text-muted-foreground group-hover:text-primary transition-colors" size={22} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center 
                         hover:bg-primary/10 hover:border-primary/50 border border-border/50 
                         transition-all duration-300 group"
            >
              <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={22} />
            </a>
          </div>
          
          <a
            href="mailto:Iot23.viveknonia.33@gmail.com"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary 
                       text-primary-foreground rounded-lg font-medium hover:bg-primary/90 
                       transition-colors duration-200"
          >
            <Send size={18} />
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
