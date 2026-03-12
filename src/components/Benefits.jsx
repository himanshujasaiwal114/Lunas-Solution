import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Laptop, CreditCard, Award, GraduationCap, TrendingUp, Globe, Calendar, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const sectionRef = useRef(null);

  const perks = [
    { icon: <CreditCard className="w-6 h-6 text-brand-blue" />, text: "Competitive compensation packages" },
    { icon: <Briefcase className="w-6 h-6 text-brand-blue" />, text: "Hybrid work setup for many roles" },
    { icon: <Laptop className="w-6 h-6 text-brand-blue" />, text: "Company-provided work equipment" },
    { icon: <Award className="w-6 h-6 text-brand-blue" />, text: "Performance-based incentives and bonuses" },
    { icon: <GraduationCap className="w-6 h-6 text-brand-blue" />, text: "Structured training programs" },
    { icon: <TrendingUp className="w-6 h-6 text-brand-blue" />, text: "Career growth opportunities" },
    { icon: <Globe className="w-6 h-6 text-brand-blue" />, text: "Exposure to international healthcare partners" },
    { icon: <Calendar className="w-6 h-6 text-brand-blue" />, text: "Paid time off" },
    { icon: <Clock className="w-6 h-6 text-brand-blue" />, text: "Paid US holidays" },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.perk-item', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative background overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #2E4DA7 0%, transparent 50%), radial-gradient(circle at 80% 50%, #E5242A 0%, transparent 50%)'
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-brand-red uppercase mb-3">Rewards & Perks</h2>
          <h3 className="text-4xl font-bold mb-6">Why Choose Lunas Solution?</h3>
          <p className="text-lg text-slate-300">
            We invest in our people because we believe that exceptional patient care and healthcare operations start with supported professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, index) => (
            <div 
              key={index}
              className="perk-item flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="shrink-0 p-3 bg-white/10 rounded-lg">
                {perk.icon}
              </div>
              <div>
                <h4 className="font-semibold text-lg leading-snug">{perk.text}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
