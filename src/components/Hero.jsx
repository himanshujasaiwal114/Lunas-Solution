import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fast fade up to prevent waiting/bouncing
      gsap.from('.hero-text', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
        delay: 0.1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90svh] md:h-svh w-full flex items-center justify-start overflow-hidden bg-white mt-16 md:mt-0"
    >
      {/* Background Image - Authentic healthcare/office setting instead of dark abstract */}
      <div className="absolute inset-0 z-0 bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-15 md:opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80")', // Authentic nurse/medical professional teamwork photo
            backgroundPosition: 'center 20%'
          }}
        />
        {/* Soft white gradient so text remains highly legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:hidden" />
      </div>

      {/* Content centered, responsive to short screens */}
      <div className="container mx-auto px-6 md:px-12 z-10 w-full mt-10 md:mt-24 [@media(max-height:800px)]:mt-10 [@media(max-height:650px)]:mt-4">
        <div className="max-w-4xl">

          <div className="hero-text text-brand-red font-mono text-[10px] md:text-sm tracking-[0.2em] uppercase flex items-center gap-3 mb-6 [@media(max-height:800px)]:mb-4">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            <span className="font-bold">Empowering Healthcare</span>
          </div>

          <h1 className="flex flex-col gap-2 mb-8 md:mb-10 [@media(max-height:800px)]:mb-6 [@media(max-height:800px)]:gap-1 leading-[1.05]">
            <span className="hero-text font-sans font-extrabold text-5xl md:text-7xl lg:text-[6rem] [@media(max-height:800px)]:text-4xl [@media(max-height:800px)]:md:text-5xl [@media(max-height:800px)]:lg:text-[4.5rem] text-brand-navy tracking-tight">
              Lunas Solution
            </span>
          </h1>

          <p className="hero-text font-sans font-medium text-lg md:text-2xl [@media(max-height:800px)]:text-lg text-brand-blue max-w-2xl leading-relaxed mb-10 md:mb-12 [@media(max-height:800px)]:mb-8">
            Bridging healthcare with expertise. Your premier partner in medical administration and compliance.
          </p>

          <div className="hero-text flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              to="/roles"
              className="magnetic-btn relative overflow-hidden bg-brand-red text-white px-8 py-4 sm:px-10 [@media(max-height:800px)]:px-6 [@media(max-height:800px)]:py-3 rounded-full font-bold text-base md:text-lg [@media(max-height:800px)]:text-base shadow-lg shadow-brand-red/20 border border-brand-red/50 hover:border-brand-red transition-all duration-300 text-center"
            >
              <span className="relative z-10 w-full">View Open Roles</span>
              <span className="absolute inset-0 bg-red-600 translate-y-full transition-transform duration-300 ease-in-out hover:translate-y-0 -z-0"></span>
            </Link>
            <a
              href="#culture"
              className="magnetic-btn relative overflow-hidden bg-white text-brand-navy px-8 py-4 sm:px-10 [@media(max-height:800px)]:px-6 [@media(max-height:800px)]:py-3 rounded-full font-bold text-base md:text-lg shadow-sm border border-slate-200 hover:border-brand-blue hover:text-brand-blue transition-all duration-300 text-center"
            >
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
