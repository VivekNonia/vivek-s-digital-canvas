import { Download, Github, Layers, Palette, ArrowUpRight, Code2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useParallax } from '@/hooks/use-parallax';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const parallaxOffset = useParallax(0.2);

  const projects = [
    {
      title: 'EventFlow: Virtual Event Platform',
      type: 'Full Stack Development',
      description: 'A full-stack application for hosting interactive online events. Features include real-time video streaming, live chat with @mentions, attendee dashboards, and admin analytics.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'WebRTC'],
      icon: Layers,
      featured: true,
      liveUrl: 'https://eventstream-live.web.app/',
      githubUrl: 'https://github.com/VivekNonia/EventFlow',
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      title: 'Brand Identity & Design System',
      type: 'UI/UX & Graphic Design',
      description: 'A comprehensive design system and brand identity project created for multiple clients. Includes logo design, typography guidelines, color palettes, component library, and complete visual branding standards ensuring consistency across all digital and print media.',
      techStack: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Canva'],
      icon: Palette,
      featured: false,
      liveUrl: '/designs',
      githubUrl: null,
      gradient: 'from-pink-500/20 to-rose-500/20',
    },
  ];

  return (
    <section id="projects" className="section-container relative overflow-hidden" ref={ref}>
      {/* Parallax background decoration */}
      <div 
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl opacity-60"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-60"
        style={{ transform: `translateY(${-parallaxOffset * 0.8}px)` }}
      />
      <div className={`text-center mb-20 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
        <span className="inline-block px-5 py-2 mb-6 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20 shadow-lg shadow-primary/20">
          💡 Portfolio
        </span>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          A selection of my recent work, showcasing full-stack applications and creative design projects.
        </p>
      </div>
      
      <div className="grid gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`glass-card overflow-hidden card-glow transition-all duration-300 hover:border-primary/40 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 glow-effect scroll-reveal ${isVisible ? `revealed delay-${(index + 2) * 200}` : ''}`}
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

                {/* Key Features */}
                {project.featured && (
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-xs text-muted-foreground">Real-time Video Streaming</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-xs text-muted-foreground">Live Chat with @mentions</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-xs text-muted-foreground">Attendee Dashboards</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-xs text-muted-foreground">Admin Analytics</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="group/tech px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-secondary to-secondary/80 text-foreground rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        <span className="relative">
                          {tech}
                          <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover/tech:opacity-100 transition-opacity blur-sm" />
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                {project.featured && (
                  <div className="mb-8 grid grid-cols-3 gap-3">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-400">2.8K+</div>
                      <div className="text-xs text-muted-foreground">Active Users</div>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-400">50+</div>
                      <div className="text-xs text-muted-foreground">Events Hosted</div>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-emerald-400">4.9★</div>
                      <div className="text-xs text-muted-foreground">User Rating</div>
                    </div>
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    project.type.includes('Design') ? (
                      <Link
                        to={project.liveUrl}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border group/btn hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-800 hover:via-purple-700 hover:to-indigo-700 text-white border-purple-300/60 hover:border-purple-200 shadow-lg shadow-purple-600/35 hover:shadow-purple-500/55 hover:saturate-125 hover:brightness-110"
                      >
                        <Palette size={18} className="transition-all" />
                        View Designs
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                      </Link>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border group/btn hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-emerald-400/50 hover:border-emerald-300 shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60"
                      >
                        <Globe size={18} className="group-hover/btn:animate-spin transition-all" />
                        View Live Demo
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                      </a>
                    )
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-lg font-semibold transition-all duration-200 border border-slate-500/50 hover:border-slate-400 group/btn shadow-lg shadow-slate-700/40 hover:shadow-xl hover:shadow-slate-700/60 hover:scale-105 hover:-translate-y-0.5"
                    >
                      <Code2 size={18} className="group-hover/btn:-rotate-12 transition-all" />
                      View Code
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Featured Project Visual */}
              {project.featured && (
                <div className="hidden md:flex md:col-span-2 items-center justify-center p-3 relative overflow-hidden group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                  
                  {/* Browser Mockup */}
                  <div className="relative z-10 w-full h-full min-h-[400px] rounded-xl overflow-hidden border-2 border-primary/40 hover:border-primary/60 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 bg-gradient-to-b from-slate-900 to-slate-950 group/img">
                    {/* Browser Header */}
                    <div className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700/50 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-slate-700/50 rounded px-3 py-1.5 text-xs text-slate-300">eventflow.app</div>
                      </div>
                    </div>

                    {/* Website Content */}
                    <div className="overflow-hidden h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6">
                      {/* Live Event Header */}
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/20 rounded-lg border border-red-500/50 mb-3">
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-xs font-bold text-red-400">LIVE NOW</span>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-1">Tech Conference 2025</h2>
                        <p className="text-sm text-slate-400">2,847 people watching</p>
                      </div>

                      {/* Video Player Container */}
                      <div className="bg-slate-800/60 backdrop-blur rounded-lg border border-slate-700/50 overflow-hidden mb-4">
                        <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center relative">
                          {/* Video placeholder */}
                          <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mx-auto mb-3 flex items-center justify-center shadow-lg">
                              <svg className="w-8 h-8 text-white fill-white ml-1" viewBox="0 0 24 24">
                                <path d="M5 3v18l15-9z" />
                              </svg>
                            </div>
                            <p className="text-white font-semibold">Main Stage Stream</p>
                            <p className="text-slate-400 text-xs mt-1">1080p • 60fps</p>
                          </div>
                          
                          {/* Quality Badge */}
                          <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-600/50 text-xs font-semibold text-slate-200">
                            HD 1080p
                          </div>
                        </div>
                      </div>

                      {/* Chat and Stats Row */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Chat */}
                        <div className="bg-slate-800/60 backdrop-blur rounded-lg border border-slate-700/50 p-3">
                          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-700/30">
                            <svg className="w-3.5 h-3.5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                            </svg>
                            <span className="text-xs font-bold text-slate-200">Chat</span>
                          </div>
                          <div className="space-y-1.5">
                            <div className="text-xs">
                              <span className="text-blue-400 font-semibold">Alex:</span>
                              <span className="text-slate-300 ml-1">Great talk!</span>
                            </div>
                            <div className="text-xs">
                              <span className="text-purple-400 font-semibold">Jordan:</span>
                              <span className="text-slate-300 ml-1">Amazing insights 🚀</span>
                            </div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="bg-slate-800/60 backdrop-blur rounded-lg border border-slate-700/50 p-3">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-slate-400">Attendees</span>
                              <span className="text-sm font-bold text-emerald-400">2,847</span>
                            </div>
                            <div className="h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                              <div className="h-full w-4/5 bg-emerald-500" />
                            </div>
                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-700/30">
                              <span className="text-xs text-slate-400">Rating</span>
                              <span className="text-xs text-yellow-400">★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Overlay effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-lg" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* More Projects CTA */}
      <div className="text-center mt-16 space-y-6">
        <a
          href="https://github.com/VivekNonia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <Github size={18} />
          <span>View more projects on GitHub</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
        <div>
          <a
            href="https://drive.google.com/drive/folders/10eNVZbAup_sGJxZm3J55a20znRMx-Fqq?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 text-primary rounded-xl font-semibold transition-all duration-300 border border-primary/40 hover:border-primary/60 group hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            <span>Download my resume</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
