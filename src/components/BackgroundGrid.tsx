const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(217 91% 60% / 0.05) 0%, hsl(0 0% 4%) 50%, hsl(200 100% 50% / 0.03) 100%)',
          animation: 'gradientShift 15s ease-in-out infinite',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(217 91% 60% / 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(217 91% 60% / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite',
        }}
      />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(0_0%_4%)_100%)]" />
      
      {/* Animated glow spots with aurora effect */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        style={{
          animation: 'float-slow 12s ease-in-out infinite',
          animationDelay: '0s'
        }}
      />
      
      <div 
        className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none"
        style={{
          animation: 'float-drift 16s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />

      {/* Additional subtle floating accent */}
      <div 
        className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(200 100% 50% / 0.05), transparent 70%)',
          animation: 'aurora 8s ease-in-out infinite',
          animationDelay: '4s'
        }}
      />
    </div>
  );
};

export default BackgroundGrid;
