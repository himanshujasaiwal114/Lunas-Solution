import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CultureTeam = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.culture-image', {
        scale: 0.98,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });

      gsap.from('.culture-text > *', {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="culture" ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="culture-text order-2 md:order-1">
            <h2 className="text-sm font-bold tracking-wider text-brand-red uppercase mb-3">
              Life with Lunas Solution
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-navy leading-tight mb-8">
              Built on clinical expertise and collaboration
            </h3>
            
            <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
              <p>
                At Lunas Solution, we bring together healthcare professionals who share a commitment to quality, collaboration, and continuous learning. Whether working remotely or onsite, our professionals play an important role in helping healthcare providers manage critical processes that support patient care.
              </p>
              <p>
                Day-to-day work at Lunas is structured yet collaborative. Team members work closely with leads, trainers, and peers to ensure accuracy, efficiency, and consistency in every case handled. We encourage open communication, knowledge sharing, and professional development so that our nurses and healthcare specialists can continue growing in their roles while delivering dependable service to our partners.
              </p>
            </div>
          </div>
          
          <div className="culture-image order-1 md:order-2 relative h-[600px]">
            {/* Collage style layout */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 z-10">
              <img 
                src="/assets/For Website/2025/Lunas-1875.jpg" 
                alt="Healthcare professionals collaborating" 
                className="w-full h-full object-cover rounded-xl shadow-xl border-4 border-white"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-1/2 z-20">
              <img 
                src="/assets/For Website/2025/IMG_20250513_153022 (1).jpg" 
                alt="Asian nurse" 
                className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-10 left-10 w-full h-full bg-brand-blue/5 rounded-xl border border-brand-blue/10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CultureTeam;
