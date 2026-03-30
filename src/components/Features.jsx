import { Activity } from 'lucide-react';

const Features = () => {
  return (
    <section id="why-us" className="py-32 bg-slate-50 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-brand-navy mb-4">Precision Instrumentation</h2>
          <p className="font-serif text-2xl text-brand-gray italic">Built for modern healthcare operations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Static List */}
          <div className="feature-card glass-panel rounded-[2.5rem] p-8 flex flex-col justify-between h-[450px] relative overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-500">
            <div className="relative z-10 mb-12">
              <h3 className="font-sans font-bold text-xl text-brand-navy">Adaptive Specialties</h3>
              <p className="text-sm text-slate-500 mt-2">Dynamic allocation of clinical resources.</p>
            </div>
            
            <div className="flex flex-col gap-3 w-full mt-auto">
              <div className="w-full p-4 rounded-xl shadow-sm bg-brand-navy text-white text-sm font-sans font-bold flex justify-between items-center">
                <span>Utilization Review</span>
                <span className="font-serif italic opacity-60">01.</span>
              </div>
              <div className="w-full p-4 rounded-xl shadow-sm bg-slate-100 text-brand-navy text-sm font-sans font-bold flex justify-between items-center opacity-80">
                <span>CDI Improvement</span>
                <span className="font-serif italic opacity-60">02.</span>
              </div>
              <div className="w-full p-4 rounded-xl shadow-sm border border-slate-100 text-brand-gray text-sm font-sans font-bold flex justify-between items-center opacity-60">
                <span>Clinical Compliance</span>
                <span className="font-serif italic opacity-60">03.</span>
              </div>
            </div>
          </div>

          {/* Card 2: Static Telemetry */}
          <div className="feature-card bg-brand-navy rounded-[2.5rem] p-8 flex flex-col h-[450px] relative overflow-hidden shadow-xl border border-white/10 group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-sans font-bold text-xl text-white">Operational Telemetry</h3>
                <p className="text-sm text-brand-blue mt-2">Live compliance monitoring.</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-brand-red/10 rounded-full border border-brand-red/30">
                <span className="w-2 h-2 rounded-full bg-brand-red opacity-80"></span>
                <span className="text-[10px] font-mono text-brand-red uppercase tracking-widest leading-none mt-px">System Active</span>
              </div>
            </div>
            
            <div className="flex-1 bg-[#050A1A] rounded-2xl p-6 font-mono text-xs md:text-sm text-green-400 leading-relaxed shadow-inner overflow-hidden border border-white/5 whitespace-pre-line relative">
              {`Analyzing UR data...\nStatus: Nominal\n> Executing compliance check...\n> All protocols aligned.\nSystem readiness: 99.9%`}
              <span className="inline-block w-2 bg-green-400 h-4 ml-1 align-middle opacity-80"></span>
              
              {/* Subtle grid lines background inside terminal */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to bottom, #4ade80 1px, transparent 1px)', backgroundSize: '100% 24px' }}
              />
            </div>
          </div>

          {/* Card 3: Static Protocol Scheduler */}
          <div className="feature-card glass-panel bg-white rounded-[2.5rem] p-8 flex flex-col justify-between h-[450px] relative overflow-hidden hover:shadow-2xl transition-shadow duration-500">
            <div className="mb-6">
              <h3 className="font-sans font-bold text-xl text-brand-navy">Structured Protocols</h3>
              <p className="text-sm text-slate-500 mt-2">Consistent execution, every shift.</p>
            </div>
            
            <div className="relative w-full h-48 bg-slate-50 rounded-2xl border border-slate-100 p-4 mt-auto">
              {/* Weekly Grid */}
              <div className="grid grid-cols-7 gap-1 h-full">
                {['S','M','T','W','T','F','S'].map((day, i) => (
                  <div key={i} className="flex flex-col border-r border-slate-200 last:border-0 opacity-50 relative">
                    <span className="text-[10px] font-mono text-center text-slate-400 mb-2">{day}</span>
                    <div className={`flex-1 rounded-md mx-1 transition-colors duration-300 ${i > 0 && i < 6 ? 'bg-slate-200' : 'bg-transparent'}`}>
                       {/* Static highlight */}
                       {i === 3 && (
                         <div className="absolute inset-x-1 inset-y-8 bg-brand-navy/10 rounded-md border border-brand-navy/30 flex items-center justify-center">
                           <Activity size={12} className="text-brand-navy opacity-50" />
                         </div>
                       )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-4 right-4 bg-brand-navy text-white text-[10px] font-mono px-3 py-1 rounded-md shadow uppercase opacity-80">
                Routine Saved
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
