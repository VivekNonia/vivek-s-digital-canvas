import { ExternalLink, Github, Layers, Palette, ArrowUpRight, Code2, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Virtual Event Platform',
      type: 'Full Stack Development',
      description: 'A full-stack application for hosting interactive online events. Features include real-time video streaming, live chat with @mentions, attendee dashboards, and admin analytics.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'WebRTC'],
      icon: Layers,
      featured: true,
      liveUrl: '#',
      githubUrl: 'https://github.com',
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      title: 'GDG Community Design Assets',
      type: 'Graphic Design',
      description: 'A collection of event posters and newsletter designs created for the Google Developer Groups on Campus, driving 300+ event registrations.',
      techStack: ['Photoshop', 'Illustrator', 'Figma'],
      icon: Palette,
      featured: false,
      liveUrl: '#',
      githubUrl: null,
      gradient: 'from-orange-500/20 to-pink-500/20',
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of my recent work, from full-stack applications to design projects.
        </p>
      </div>
      
      <div className="grid gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass-card overflow-hidden card-glow transition-all duration-300 hover:border-primary/30 group"
          >
            <div className={`grid ${project.featured ? 'md:grid-cols-5' : 'md:grid-cols-1'} gap-0`}>
              {/* Project Info */}
              <div className={`p-8 ${project.featured ? 'md:col-span-3' : ''}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center border border-white/5`}>
                      <project.icon className="text-primary" size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">{project.type}</span>
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    </div>
                  </div>
                  
                  {project.featured && (
                    <span className="hidden md:inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary text-muted-foreground rounded-lg border border-border/50 hover:border-primary/30 hover:text-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg font-medium transition-all duration-200 border border-border/50 hover:border-primary/30 group/btn"
                    >
                      <Code2 size={18} />
                      View Code
                      <ArrowUpRight size={14} className="text-muted-foreground group-hover/btn:text-primary group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                    </a>
                  )}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-200 shadow-lg shadow-primary/20 group/btn"
                  >
                    <Eye size={18} />
                    Live Demo
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
              
              {/* Featured Project Visual */}
              {project.featured && (
                <div className="hidden md:flex md:col-span-2 items-center justify-center p-6 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
                  
                  {/* Decorative elements */}
                  <div className="relative z-10 w-full h-full min-h-[200px] flex items-center justify-center">
                    <div className="relative">
                      {/* Animated rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border border-primary/20 animate-pulse" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full border border-primary/30" />
                      </div>
                      
                      {/* Center icon */}
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/10">
                        <project.icon className="text-primary" size={36} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* More Projects CTA */}
      <div className="text-center mt-12">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <Github size={18} />
          <span>View more projects on GitHub</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
