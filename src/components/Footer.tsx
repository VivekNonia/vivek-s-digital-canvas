const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Vivek Nonia. Built with passion & code.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#about" className="nav-link text-xs">About</a>
          <a href="#projects" className="nav-link text-xs">Projects</a>
          <a href="#contact" className="nav-link text-xs">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
