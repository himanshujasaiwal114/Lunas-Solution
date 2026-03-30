import React from 'react';

const Manifesto = () => {
  // Removed heavy scroll-based parallax animations for a more straightforward layout

  return (
    <section id="overview" className="relative py-40 bg-brand-navy overflow-hidden flex items-center min-h-[80vh]">
      {/* Texture Background */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none">
        <div 
          className="manifesto-bg absolute -inset-20 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-brand-navy/60" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-5xl">
        <p className="manifesto-text font-sans font-medium text-lg md:text-xl text-slate-400 mb-8 tracking-wide">
          Most healthcare staffing focuses on: <span className="opacity-70">filling generic headcount.</span>
        </p>
        
        <h2 className="manifesto-text font-sans font-bold text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] text-white">
          We focus on:
          <br />
          <span className="font-serif italic font-medium text-5xl md:text-7xl lg:text-[6rem] text-brand-light mt-4 inline-block drop-shadow-2xl">
            specialized clinical <span className="text-brand-red">operations.</span>
          </span>
        </h2>
        
        <div className="manifesto-text mt-16 max-w-2xl mx-auto text-slate-300 font-light text-lg md:text-xl leading-relaxed">
          <p>
            Bridging health with expertise. We assist healthcare providers in managing complex administrative and documentation demands by combining strong clinical knowledge with structured operational processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
