import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Over more than two years at Lunas, the journey has been dynamic yet rewarding. Supportive colleagues ease the pressure, and the experience continues to develop my skills and uncover untapped potential.",
    author: "Rona Barola",
    role: "Clinical Nurse Auditor",
  },
  {
    quote: "Working with Lunas has strengthened my clinical judgment, attention to detail, and leadership. It offers a great support system, growth opportunities, performance incentives, and a flexible setup that saves time, cost, and effort.",
    author: "Aprilyn Saraza",
    role: "Production Team Leader",
  },
  {
    quote: "Working with Lunas has improved my accuracy and efficiency in handling medical records. The team is supportive, and the workflow allows me to consistently deliver high-quality results.",
    author: "Reymond Entes",
    role: "Utilization Review Analyst",
  },
  {
    quote: "Being part of Lunas has been an amazing experience so far. It offers meaningful career growth, and strong team collaboration is clearly evident, ensuring that the quality of care and services are never compromised.",
    author: "Aaron Eric Tolentino",
    role: "Production Team Leader",
  },
  {
    quote: "As a UR Nurse, I'm able to use my critical thinking and knowledge in pathophysiology to analyze cases, identify correct subsets, and help pinpoint accurate diagnosis. This role allows me to continuously learn and grow through ongoing retraining and experience.",
    author: "Channa Louise Beroin",
    role: "Utilization Review Nurse",
  },
  {
    quote: "As a Lunas team member, I've navigated structured workflows, met performance targets, and managed tasks independently. My role has provided me valuable exposure to a metrics-driven environment and remote operational processes.",
    author: "Charles Fel Estrada",
    role: "Utilization Review Nurse",
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
        <div>
          <h4 className="font-sans font-bold text-brand-navy text-sm md:text-base">{data.author}</h4>
          <p className="font-mono text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">{data.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
