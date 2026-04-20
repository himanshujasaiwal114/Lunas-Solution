import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Handshake, Brain, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {
  const sectionRef = useRef(null);

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-brand-blue" />,
      title: "Integrity",
      description: "We uphold transparency, professionalism, and accountability in every service we provide."
    },
    {
      icon: <Handshake className="w-8 h-8 text-brand-blue" />,
      title: "Partnership",
      description: "We work closely with healthcare organizations to deliver streamlined and collaborative solutions."
    },
    {
      icon: <Brain className="w-8 h-8 text-brand-blue" />,
      title: "Expertise",
      description: "Our healthcare professionals bring strong clinical knowledge and continuous learning to every engagement."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-blue" />,
      title: "Impact",
      description: "Our work ultimately supports better care delivery by improving efficiency and operational performance."
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.value-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="values" ref={sectionRef} className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-brand-red uppercase mb-3">Our Foundation</h2>
          <h3 className="text-4xl font-bold text-brand-navy mb-6">Core Values</h3>
          <p className="text-lg text-brand-gray">
            These principles guide our work, our partnerships, and the culture we build for our healthcare professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="value-card bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-lg bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-4">{value.title}</h4>
              <p className="text-brand-gray leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
