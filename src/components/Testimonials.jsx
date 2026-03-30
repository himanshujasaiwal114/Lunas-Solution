import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "The structured protocols and continuous support have completely transformed my approach to clinical documentation. It's an environment where precision is truly rewarded.",
    author: "Maria Santos",
    role: "CDI Specialist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Working with Lunas means I get to apply my bedside experience to high-impact operational roles. The integration with US healthcare standards is seamless.",
    author: "David Chen",
    role: "Utilization Review Nurse",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Their dedication to finding the right fit is unparalleled. You aren't just placed; you are aligned with systems that maximize your clinical acumen.",
    author: "Isabella Rodriguez",
    role: "Clinical Compliance Analyst",
    image: "https://images.unsplash.com/photo-1594824416738-1616127e90c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "A refreshing and imaginative agency that consistently delivers exceptional results. Highly recommended for any professional seeking serious clinical growth.",
    author: "Victoria Thompson",
    role: "Senior Abstractor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "From day one, the onboarding felt like a masterclass in modern healthcare operations. They elevate your skills while respecting your background.",
    author: "Jonathan Pierce",
    role: "UR Analyst",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The diagnostic screening process was tough, but it ensured I was placed perfectly. I am now doing the best work of my career.",
    author: "Samantha Johnson",
    role: "HEDIS Specialist",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered fade up for all cards, much faster
      gsap.from('.testimonial-card', {
        y: 30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });
      
      // Floating parallax effect for middle column
      gsap.to('.col-middle', {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="perspectives" ref={containerRef} className="py-32 bg-slate-50 relative z-20 overflow-hidden border-t border-slate-100">
      
      {/* Background grid texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 text-brand-navy">
          <h2 className="font-sans font-bold text-4xl md:text-5xl mb-4 tracking-tight">
            Clinical Perspectives.
          </h2>
          <p className="font-serif text-2xl text-brand-blue italic">
            Voices from inside our operational network.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-start">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6 lg:gap-8 md:mt-12">
            {[testimonials[0], testimonials[3]].map((t, i) => (
              <TestimonialCard key={i} data={t} />
            ))}
          </div>

          {/* Column 2 (Middle - Offset and Parallax) */}
          <div className="col-middle flex flex-col gap-6 lg:gap-8 mt-0">
            {[testimonials[1], testimonials[4]].map((t, i) => (
              <TestimonialCard key={i} data={t} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 lg:gap-8 md:mt-24">
            {[testimonials[2], testimonials[5]].map((t, i) => (
              <TestimonialCard key={i} data={t} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ data }) => {
  return (
    <div className="testimonial-card bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-brand-navy/5 transition-transform duration-300 hover:-translate-y-2 border border-slate-200">
      <div className="text-brand-red mb-6 opacity-80">
        <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6667 30C5.22335 30 0 24.7766 0 18.3333C0 11.89 5.22335 6.66667 11.6667 6.66667V0C3.33333 0 -3.33333 6.66667 -3.33333 15C-3.33333 23.3333 3.33333 30 11.6667 30ZM38.3333 30C31.89 30 26.6667 24.7766 26.6667 18.3333C26.6667 11.89 31.89 6.66667 38.3333 6.66667V0C30 0 23.3333 6.66667 23.3333 15C23.3333 23.3333 30 30 38.3333 30Z" />
        </svg>
      </div>
      
      <p className="font-sans text-slate-800 font-medium text-lg leading-relaxed mb-8">
        {data.quote}
      </p>
      
      <div className="flex items-center gap-4">
        <img 
          src={data.image} 
          alt={data.author} 
          className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue/20"
        />
        <div>
          <h4 className="font-sans font-bold text-brand-navy text-sm md:text-base">{data.author}</h4>
          <p className="font-mono text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">{data.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
