import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CompanyOverview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.overview-text > *', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      gsap.from('.overview-image', {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
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
            <h2 className="text-sm font-bold tracking-wider text-brand-red uppercase mb-3">
              About Lunas Solution
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-navy leading-tight mb-8">
              Supporting Healthcare Partners with Specialized Needs
            </h3>
            
            <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
              <p>
                Lunas Solution is a healthcare services company that supports healthcare organizations through specialized clinical and operational services. The company works with highly skilled healthcare professionals to deliver solutions such as utilization review, clinical documentation improvement (CDI), and other healthcare support functions that help facilities improve efficiency, maintain compliance, and ensure the appropriate use of medical resources.
              </p>
              <p>
                Built on the principle of bridging health with expertise, Lunas Solution combines clinical knowledge with structured operational processes to assist healthcare providers in managing complex administrative and documentation demands.
              </p>
              <p>
                With a growing network of healthcare professionals and an expanding portfolio of services, Lunas Solution continues to strengthen its role as a reliable partner for healthcare organizations.
              </p>
            </div>
            
            <div className="mt-10 flex gap-4">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-brand-blue mb-1">100+</span>
                <span className="text-sm font-medium text-slate-500 uppercase">Healthcare Pros</span>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-brand-blue mb-1">2</span>
                <span className="text-sm font-medium text-slate-500 uppercase">Office Locations</span>
              </div>
            </div>
          </div>
          
          <div className="overview-image order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-brand-navy rounded-lg -right-4 -bottom-4 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Medical professionals analyzing data" 
              className="relative z-10 w-full rounded-lg shadow-xl object-cover h-[500px]"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
