import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CultureTeam = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.culture-image', {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });

      gsap.from('.culture-text > *', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
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
              Company Culture
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-navy leading-tight mb-8">
              A Structured Yet Collaborative Environment
            </h3>
            
            <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
              <p>
                At Lunas Solution, healthcare professionals work in an environment focused on quality, accountability, and continuous learning.
              </p>
              <p>
                Team members collaborate closely with leads, trainers, and peers to ensure accuracy and efficiency in every case handled. We believe that structured support and open communication are key to delivering exceptional results.
              </p>
              <p>
                Professionals are encouraged to share knowledge, develop their clinical expertise, and grow their careers while supporting healthcare providers in managing critical healthcare operations.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-brand-light p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-navy mb-2">95%</div>
                <div className="text-sm text-brand-gray font-medium">Retention Rate</div>
              </div>
              <div className="bg-brand-light p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-navy mb-2">100%</div>
                <div className="text-sm text-brand-gray font-medium">Focused Training</div>
              </div>
            </div>
          </div>
          
          <div className="culture-image order-1 md:order-2 relative h-[600px]">
            {/* Collage style layout */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 z-10">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Healthcare professionals collaborating" 
                className="w-full h-full object-cover rounded-xl shadow-xl border-4 border-white"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-1/2 z-20">
              <img 
                src="https://images.unsplash.com/photo-1543269664-56d5d56ed50c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team meeting" 
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
