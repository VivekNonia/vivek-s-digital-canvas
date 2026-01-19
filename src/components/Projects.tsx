import { ExternalLink, Github, Layers, Palette } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Virtual Event Platform',
      type: 'Full Stack Development',
      description: 'A full-stack application for hosting interactive online events. Features include real-time video streaming, live chat with @mentions, attendee dashboards, and admin analytics.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'WebRTC'],
      icon: Layers,
      featured: true,
    },
    {
      title: 'GDG Community Design Assets',
      type: 'Graphic Design',
      description: 'A collection of event posters and newsletter designs created for the Google Developer Groups on Campus, driving 300+ event registrations.',
      techStack: ['Photoshop', 'Illustrator', 'Figma'],
      icon: Palette,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`glass-card p-8 card-glow transition-all duration-300 hover:border-primary/30 
                        ${project.featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''}`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <project.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-primary text-sm">{project.type}</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    <Github size={20} />
                  </button>
                  <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-md 
                               border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.featured && (
              <div className="hidden md:flex items-center justify-center">
                <div className="w-full h-48 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 
                                border border-border/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Layers className="text-primary" size={32} />
                    </div>
                    <p className="text-muted-foreground text-sm">Featured Project</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
