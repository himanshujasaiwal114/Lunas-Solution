import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NoiseOverlay from '../components/NoiseOverlay';
import { CalendarDays } from 'lucide-react';

const EventsPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    let ctx = gsap.context(() => {
      gsap.from('.stagger-fade', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 selection:bg-brand-red selection:text-white">
      <NoiseOverlay />
      <Header />
      
      <main ref={containerRef} className="flex-1 flex flex-col items-center justify-center pt-40 pb-32 relative z-10">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          
          <div className="stagger-fade mb-10 flex justify-center">
            <div className="w-20 h-20 bg-slate-100 rounded-3xl border border-slate-200 flex items-center justify-center text-slate-400 shadow-inner">
              <CalendarDays size={32} />
            </div>
          </div>

          <div className="stagger-fade">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-red"></div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">Upcoming Opportunities</span>
              <div className="h-[1px] w-12 bg-brand-red"></div>
            </div>
            
            <h1 className="font-sans font-extrabold text-5xl md:text-7xl text-brand-navy mb-8 tracking-tighter leading-tight">
              Recruitment <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-navy">Events</span>
            </h1>
            
            <div className="bg-white rounded-3xl p-10 md:p-14 border border-slate-200 shadow-xl max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Stay Tuned</h3>
              <p className="text-slate-600 font-sans text-lg leading-relaxed">
                No current events have been announced yet. Please check back soon for information on our upcoming job fairs, recruitment drives, and career info sessions.
              </p>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
