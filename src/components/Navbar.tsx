import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Designs', href: '/designs' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If it's the Designs page link
    if (href === '/designs') {
      navigate('/designs');
      return;
    }
    
    // If it's a hash link and we're not on the home page
    if (href.startsWith('#') && location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    
    // If it's a hash link and we're on the home page
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary via-primary to-primary/80 transition-all duration-100 shadow-lg shadow-primary/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg' : 'bg-transparent'
        }`}
        style={{ marginTop: '1px' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="group flex items-center gap-1">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 group-hover:bg-primary/15 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
              <span className="text-xl font-bold text-gradient">V</span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link hover:scale-105 transition-transform"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium 
                       hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            Get in Touch
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
