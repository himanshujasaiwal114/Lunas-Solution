import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const containerRef = useRef(null);

  // --- Card 1: Diagnostic Shuffler State ---
  const [shufflerCards, setShufflerCards] = useState([
    { id: 1, title: 'Utilization Review', color: 'bg-brand-navy', text: 'text-white', z: 30, scale: 1, y: 0 },
    { id: 2, title: 'CDI Improvement', color: 'bg-white', text: 'text-brand-navy', z: 20, scale: 0.95, y: -15 },
    { id: 3, title: 'Clinical Compliance', color: 'bg-slate-100', text: 'text-brand-gray', z: 10, scale: 0.9, y: -30 },
  ]);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      setShufflerCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        
        // Re-assign rendering properties based on new array order
        return newArr.map((card, idx) => ({
          ...card,
          z: 30 - idx * 10,
          scale: 1 - idx * 0.05,
          y: idx * -15
        }));
      });
    }, 3000);
    return () => clearInterval(shuffleInterval);
  }, []);

  // --- Card 2: Telemetry Typewriter State ---
  const typewriterText = "Analyzing UR data...\\nStatus: Nominal\\n> Executing compliance check...\\n> All protocols aligned.\\nSystem readiness: 99.9%";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < typewriterText.length) {
        setDisplayedText(prev => prev + typewriterText.charAt(i));
        i++;
      } else {
        // Reset after a delay
        setTimeout(() => {
          setDisplayedText('');
          i = 0;
        }, 4000);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  // --- Scroll Animations ---
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={containerRef} className="py-32 bg-slate-50 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-brand-navy mb-4">Precision Instrumentation</h2>
          <p className="font-serif text-2xl text-brand-gray italic">Built for modern healthcare operations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Diagnostic Shuffler */}
          <div className="feature-card glass-panel rounded-[2.5rem] p-8 flex flex-col justify-between h-[450px] relative overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-500">
            <div className="relative z-10 mb-12">
              <h3 className="font-sans font-bold text-xl text-brand-navy">Adaptive Specialties</h3>
              <p className="text-sm text-slate-500 mt-2">Dynamic allocation of clinical resources.</p>
            </div>
            
            <div className="relative h-48 w-full flex items-end justify-center perspective-1000">
              {shufflerCards.map((card) => (
                <div 
                  key={card.id}
                  className={`absolute w-full p-6 rounded-2xl shadow-xl transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${card.color} ${card.text}`}
                  style={{ 
                    zIndex: card.z, 
                    transform: `translateY(${card.y}px) scale(${card.scale})` 
                  }}
                >
                  <div className="font-serif italic text-lg opacity-80 mb-4">0{card.id}.</div>
                  <div className="font-sans font-bold text-lg">{card.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Telemetry Typewriter */}
          <div className="feature-card bg-brand-navy rounded-[2.5rem] p-8 flex flex-col h-[450px] relative overflow-hidden shadow-xl border border-white/10 group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-sans font-bold text-xl text-white">Operational Telemetry</h3>
                <p className="text-sm text-brand-blue mt-2">Live compliance monitoring.</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-brand-red/10 rounded-full border border-brand-red/30">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                <span className="text-[10px] font-mono text-brand-red uppercase tracking-widest leading-none mt-px">Live feed</span>
              </div>
            </div>
            
            <div className="flex-1 bg-[#050A1A] rounded-2xl p-6 font-mono text-xs md:text-sm text-green-400 leading-relaxed shadow-inner overflow-hidden border border-white/5 whitespace-pre-line relative">
              {displayedText}
              <span className="inline-block w-2 bg-green-400 h-4 ml-1 animate-pulse align-middle"></span>
              
              {/* Subtle grid lines background inside terminal */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to bottom, #4ade80 1px, transparent 1px)', backgroundSize: '100% 24px' }}
              />
            </div>
          </div>

          {/* Card 3: Cursor Protocol Scheduler */}
          <div className="feature-card glass-panel bg-white rounded-[2.5rem] p-8 flex flex-col justify-between h-[450px] relative overflow-hidden hover:shadow-2xl transition-shadow duration-500">
            <div className="mb-6">
              <h3 className="font-sans font-bold text-xl text-brand-navy">Structured Protocols</h3>
              <p className="text-sm text-slate-500 mt-2">Consistent execution, every shift.</p>
            </div>
            
            <div className="relative w-full h-48 bg-slate-50 rounded-2xl border border-slate-100 p-4">
              {/* Weekly Grid */}
              <div className="grid grid-cols-7 gap-1 h-full">
                {['S','M','T','W','T','F','S'].map((day, i) => (
                  <div key={i} className="flex flex-col border-r border-slate-200 last:border-0 opacity-50 relative">
                    <span className="text-[10px] font-mono text-center text-slate-400 mb-2">{day}</span>
                    <div className={`flex-1 rounded-md mx-1 transition-colors duration-300 ${i > 0 && i < 6 ? 'bg-slate-200 group-hover:bg-brand-blue/20' : 'bg-transparent'}`}>
                       {/* Animated highlight effect will target one of these */}
                       {i === 3 && (
                         <div className="absolute inset-x-1 inset-y-8 bg-brand-red/20 rounded-md border border-brand-red animate-pulse"></div>
                       )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Animated SVG Cursor using CSS keyframes inline for simplicity */}
              <div className="absolute z-10 w-6 h-6 text-brand-navy" style={{
                animation: 'cursorMoveClick 4s cubic-bezier(0.5, 0, 0.5, 1) infinite'
              }}>
                <MousePointer2 fill="currentColor" size={24} className="drop-shadow-md" />
              </div>
              
              <style>{`
                @keyframes cursorMoveClick {
                  0% { transform: translate(10px, 100px) scale(1); opacity: 0; }
                  10% { opacity: 1; }
                  30% { transform: translate(130px, 40px) scale(1); }
                  35% { transform: translate(130px, 40px) scale(0.85); } /* click */
                  45% { transform: translate(130px, 40px) scale(1); }
                  70% { transform: translate(200px, 120px) scale(1); }
                  75% { transform: translate(200px, 120px) scale(0.85); } /* save click */
                  80% { transform: translate(200px, 120px) scale(1); opacity: 1; }
                  100% { transform: translate(220px, 140px) scale(1); opacity: 0; }
                }
              `}</style>
              
              <div className="absolute bottom-4 right-4 bg-brand-navy text-white text-[10px] font-mono px-3 py-1 rounded-md shadow uppercase">
                Save Routine
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
