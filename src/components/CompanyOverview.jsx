import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CompanyOverview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Speed up text animation to eliminate waiting
      gsap.from('.overview-text > *', {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });

      // Speed up image animation
      gsap.from('.overview-image', {
        x: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        delay: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="overview" ref={containerRef} className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="overview-text order-2 md:order-1">
            <div className="mb-10 relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-brand-navy leading-tight tracking-tight">
                About Lunas Solution
              </h2>
              <div className="absolute -bottom-5 left-0 w-20 h-1.5 bg-brand-red rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-brand-gray text-lg leading-relaxed mt-10">
              <p>
                Lunas Solution is a healthcare services company that supports healthcare organizations through specialized clinical and operational services. The company works with highly skilled healthcare professionals to deliver solutions such as utilization review, clinical documentation improvement (CDI), and other healthcare support functions that help facilities improve efficiency, maintain compliance, and ensure the appropriate use of medical resources.
              </p>
              <p>
                Built on the principle of bridging health with expertise, Lunas Solution combines clinical knowledge with structured operational processes to assist healthcare providers in managing complex administrative and documentation demands.
              </p>
              <p>
                Now with a growing network of healthcare professionals and an expanding portfolio of services, Lunas Solution continues to strengthen its role as a reliable partner for healthcare organizations.
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h4 className="font-bold text-brand-navy mb-4 font-sans uppercase tracking-wider text-sm">Our Locations & Setup</h4>
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                
                {/* Alabang Location */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123616.48622153574!2d120.94793836338576!3d14.421683416805166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d19bb6df8895%3A0xcbbbff9117f7d3cc!2sAlabang%2C%20Muntinlupa%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="150" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="p-4 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-red md:mt-2 shrink-0 hidden md:block" />
                    <div>
                      <strong className="text-brand-navy block text-sm tracking-tight mb-1">Alabang, Muntinlupa City, Philippines</strong>
                      <span className="text-xs text-brand-gray leading-tight block">Main operations and administrative office supporting recruitment and training.</span>
                    </div>
                  </div>
                </div>

                {/* Dumaguete Location */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125746.52086435647!2d123.23075240217036!3d9.309489279510526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab6ece1bd91465%3A0x6bfe76ffdf7985cc!2sDumaguete%2C%20Negros%20Oriental%2C%20Philippines!5e0!3m2!1sen!2sus!4v1700000000001!5m2!1sen!2sus" 
                    width="100%" 
                    height="150" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="p-4 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-red md:mt-2 shrink-0 hidden md:block" />
                    <div>
                      <strong className="text-brand-navy block text-sm tracking-tight mb-1">Dumaguete City, Negros Oriental, Philippines</strong>
                      <span className="text-xs text-brand-gray leading-tight block">Operations site supporting healthcare services and clinical functions.</span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="mt-6 bg-brand-light p-4 rounded-lg text-sm text-brand-navy border border-brand-blue/10">
                Lunas Solution currently operates on a <strong>hybrid work setup</strong>. Team members work partly from home and partly from our office locations in the Philippines. Fully remote roles are not currently offered.
              </div>
            </div>
          </div>
          
          <div className="overview-image order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-brand-navy rounded-lg -right-4 -bottom-4 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Healthcare professionals collaborating in an office" 
              className="relative z-10 w-full rounded-lg shadow-xl object-cover h-[400px] md:h-[500px]"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
