import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Laptop, CreditCard, Award, GraduationCap, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const sectionRef = useRef(null);

  const perks = [
    { icon: <CreditCard className="w-6 h-6 text-blue-400 group-hover:text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />, text: "Competitive compensation packages" },
    { icon: <Briefcase className="w-6 h-6 text-blue-400 group-hover:text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />, text: "Hybrid work setup for many roles" },
    { icon: <Laptop className="w-6 h-6 text-blue-400 group-hover:text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />, text: "Company-provided work equipment for qualified roles" },
    { icon: <Award className="w-6 h-6 text-blue-400 group-hover:text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />, text: "Performance-based incentives and bonuses" },
    { icon: <GraduationCap className="w-6 h-6 text-blue-400 group-hover:text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />, text: "Structured training programs" },
    { icon: <Globe className="w-6 h-6 text-blue-400 group-hover:text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />, text: "Opportunities to work with international healthcare partners" },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Use fromTo to strictly enforce opacity reaching 1, preventing React 18 strict mode bugs
      gsap.fromTo('.perk-item', 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="py-24 bg-white text-brand-navy relative flex justify-center z-10 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-brand-red"></span>
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase font-mono">Rewards & Perks</h2>
            <span className="w-12 h-[2px] bg-brand-red"></span>
          </div>
          <h3 className="text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-brand-navy">
            Why Choose Lunas Solution?
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {perks.map((perk, index) => (
            <div 
              key={index}
              className="perk-item group flex items-start gap-4 p-6 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl opacity-0"
            >
              <div className="shrink-0 p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-300 shadow-sm">
                {perk.icon}
              </div>
              <div className="pt-2">
                <h4 className="font-sans font-medium text-base leading-snug tracking-wide text-slate-800 transition-colors pr-2">
                  {perk.text}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
