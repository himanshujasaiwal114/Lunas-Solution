import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Eye, ActivitySquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // We create a ScrollTrigger for the stacking effect
    let ctx = gsap.context(() => {
      // The container pins, and we animate cards based on overall progress
      const cards = cardsRef.current;
      
      cards.forEach((card, index) => {
        if (index === 0) return; // First card is static initially

        // Animate the current card coming in
        gsap.to(card, {
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            id: `card-${index}`
          }
        });
        
        // Animate the previous card scaling down and blurring
        const prevCard = cards[index - 1];
        gsap.to(prevCard, {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(10px)',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          }
        });
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      id: "01",
      title: "Diagnostic Screening",
      desc: "We don't just hire; we diagnose capability. Every registered nurse undergoes a rigorous vetting process focusing on clinical acumen, critical thinking, and communication clarity.",
      icon: <Cpu className="w-12 h-12 text-brand-blue" />,
      AnimationContent: () => (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           <svg className="w-64 h-64 animate-[spin_20s_linear_infinite]" viewBox="0 0 200 200">
             <circle cx="100" cy="100" r="90" fill="none" stroke="#2E4DA7" strokeWidth="2" strokeDasharray="10 10"/>
             <circle cx="100" cy="100" r="70" fill="none" stroke="#2E4DA7" strokeWidth="1"/>
             <polygon points="100,20 180,140 20,140" fill="none" stroke="#2E4DA7" strokeWidth="1"/>
           </svg>
        </div>
      )
    },
    {
      id: "02",
      title: "System Alignment",
      desc: "Continuous, structured learning environments ensure our professionals are calibrated to US healthcare standards, from Utilization Review to CDI processes.",
      icon: <Eye className="w-12 h-12 text-brand-red" />,
      AnimationContent: () => (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="w-full h-full relative" style={{ backgroundImage: 'linear-gradient(to right, #E5242A 1px, transparent 1px), linear-gradient(to bottom, #E5242A 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-red shadow-[0_0_15px_rgba(229,36,42,1)] animate-[scan_4s_ease-in-out_infinite_alternate]" />
          </div>
          <style>{`
            @keyframes scan {
              0% { transform: translateY(-10px); }
              100% { transform: translateY(500px); }
            }
          `}</style>
        </div>
      )
    },
    {
      id: "03",
      title: "Operational Deployment",
      desc: "Live integration into your clinical ecosystem. Immediate impact on documentation integrity, authorization speed, and overall operational efficiency.",
      icon: <ActivitySquare className="w-12 h-12 text-brand-navy" />,
      AnimationContent: () => (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           <svg className="w-full h-32" viewBox="0 0 400 100" preserveAspectRatio="none">
             <path 
               d="M0,50 L50,50 L75,20 L100,90 L125,10 L150,50 L400,50" 
               fill="none" 
               stroke="#0F1C3F" 
               strokeWidth="4" 
               strokeLinecap="round" 
               strokeLinejoin="round"
               className="animate-[dash_3s_linear_infinite]"
               strokeDasharray="1000"
               strokeDashoffset="1000"
             />
           </svg>
           <style>{`
             @keyframes dash {
               to { stroke-dashoffset: 0; }
             }
           `}</style>
        </div>
      )
    }
  ];

  return (
    <section id="culture" ref={containerRef} className="bg-slate-900 py-32 relative text-white selection:bg-brand-red">
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <h2 className="font-sans font-bold text-4xl md:text-5xl mb-4 text-white">The Lunas Protocol</h2>
        <p className="font-serif italic text-2xl text-slate-400">Methodical progression from talent to expertise.</p>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        {steps.map((step, idx) => (
          <div 
            key={step.id} 
            ref={el => cardsRef.current[idx] = el}
            className={`sticky top-32 w-full min-h-[60vh] rounded-[3rem] p-10 md:p-16 flex flex-col justify-center overflow-hidden border border-white/10 shadow-2xl transition-all will-change-transform ${
              idx === 0 ? 'bg-slate-800' : idx === 1 ? 'bg-slate-100 text-brand-navy border-slate-300' : 'bg-white text-brand-navy border-slate-200'
            }`}
            style={{ 
              zIndex: idx + 10,
              // Start cards off-screen except the first one
              transform: idx === 0 ? 'translateY(0)' : 'translateY(100px)'
            }}
          >
            {/* Background Animation */}
            <step.AnimationContent />

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-6 mb-10">
                <span className="font-mono text-xl tracking-widest opacity-60">PHASE // {step.id}</span>
                <div className="h-px bg-current opacity-20 flex-1"></div>
                {step.icon}
              </div>
              
              <h3 className="font-sans font-extrabold text-5xl md:text-6xl tracking-tight mb-8">
                {step.title}
              </h3>
              
              <p className="font-serif italic text-2xl md:text-3xl opacity-80 leading-relaxed max-w-2xl">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
        {/* Extra spacing at bottom to allow scrolling through the last card */}
        <div className="h-[40vh]"></div>
      </div>
    </section>
  );
};

export default Protocol;
