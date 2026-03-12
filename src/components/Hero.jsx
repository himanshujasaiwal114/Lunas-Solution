import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background slow reverse zoom
      gsap.fromTo('.cinematic-bg',
        { scale: 1.1 },
        { scale: 1, duration: 4, ease: 'power2.out' }
      );

      // Fade up text elements stagger
      gsap.from('.hero-text', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-[100dvh] w-full flex items-end justify-start overflow-hidden bg-brand-navy"
    >
      {/* Full Bleed Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="cinematic-bg absolute inset-0 bg-cover bg-center mix-blend-screen opacity-50"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: '50% 30%'
          }}
        />
        {/* Heavy primary-to-black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A1A] via-brand-navy/80 to-transparent" />
      </div>

      {/* Content pushed to bottom-left third */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pb-20 md:pb-32 w-full">
        <div className="max-w-4xl">
          
          <div className="hero-text text-brand-red font-mono text-sm tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brand-red"></span>
            Specialized Clinical Operations
          </div>
          
          <h1 className="flex flex-col gap-2 mb-10 leading-none">
            <span className="hero-text font-sans font-extrabold text-5xl md:text-7xl lg:text-[6rem] text-white tracking-tight">
              Bridging operations with
            </span>
            <span className="hero-text font-serif font-medium italic text-6xl md:text-8xl lg:text-[8rem] text-brand-light tracking-tighter ml-0 md:ml-12 drop-shadow-xl">
              clinical expertise.
            </span>
          </h1>
          
          <p className="hero-text font-sans font-light text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-12">
            Join a network of highly skilled professionals supporting critical healthcare systems in a structured, competitive, and continuous learning environment.
          </p>
          
          <div className="hero-text flex gap-6">
            <a 
              href="#roles" 
              className="magnetic-btn relative overflow-hidden bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(229,36,42,0.3)] border border-brand-red/50 hover:border-brand-red"
            >
              <span className="relative z-10">View Open Positions</span>
              <span className="absolute inset-0 bg-red-600 translate-y-full transition-transform duration-300 ease-in-out hover:translate-y-0 -z-0"></span>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
