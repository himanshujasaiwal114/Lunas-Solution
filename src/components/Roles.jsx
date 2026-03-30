import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Roles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.role-card', {
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
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const roles = [
    {
      title: "Utilization Review Nurse",
      team: "Operations",
      location: "Dumaguete City, Philippines",
      features: ["InterQual / MCG Guidelines", "Medical Necessity Review", "Concurrent Review", "Competitive Comp"],
      isPopular: true,
    },
    {
      title: "CDI Specialist",
      team: "Operations",
      location: "Dumaguete City, Philippines",
      features: ["Clinical Documentation", "Physician Querying", "DRG Accuracy", "Coding Compliance"],
      isPopular: false,
    },
    {
      title: "UR Analyst",
      team: "Operations",
      location: "Dumaguete City, Philippines",
      features: ["Data Extraction", "Clinical Reporting", "Compliance Evaluation"],
      isPopular: false,
    }
  ];

  return (
    <section id="roles" ref={containerRef} className="py-32 bg-white relative z-20 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-brand-navy mb-4">Select Your Trajectory</h2>
          <p className="font-serif text-2xl text-brand-gray italic">Join a structured environment built for clinical excellence.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {roles.map((role, idx) => (
            <div 
              key={idx} 
              className={`role-card rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2 ${
                role.isPopular 
                  ? 'bg-brand-navy text-white shadow-2xl scale-105 border border-brand-blue/30 relative z-10' 
                  : 'bg-white text-brand-navy shadow-lg border border-slate-100'
              }`}
            >
              {role.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider drop-shadow-md">
                  High Demand
                </div>
              )}
              
              <div className="mb-8 border-b border-current/10 pb-8">
                <span className={`font-mono text-xs tracking-widest uppercase mb-4 block ${role.isPopular ? 'text-brand-red' : 'text-brand-blue'}`}>
                  {role.team} &mdash; {role.location}
                </span>
                <h3 className="font-sans font-bold text-3xl leading-tight">
                  {role.title}
                </h3>
              </div>
              
              <ul className="space-y-4 mb-10">
                {role.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${role.isPopular ? 'text-brand-red' : 'text-brand-blue'}`} />
                    <span className={`text-sm md:text-base ${role.isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/roles" 
                className={`magnetic-btn group w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold transition-all ${
                  role.isPopular 
                    ? 'bg-brand-red hover:bg-red-600 text-white shadow-lg shadow-brand-red/25' 
                    : 'bg-slate-100 hover:bg-slate-200 text-brand-navy'
                }`}
              >
                Apply Now 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;
