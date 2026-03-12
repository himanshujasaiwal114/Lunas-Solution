import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ChevronDown, ArrowUpRight, MapPin, Clock, Upload, Send, ShieldCheck, Database, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NoiseOverlay from '../components/NoiseOverlay';

const OpenRolesPage = () => {
  const containerRef = useRef(null);
  const [expandedRole, setExpandedRole] = useState(null);

  useEffect(() => {
    // Scroll to top when mounting new page
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
      
      gsap.from('.glow-pulse', {
        opacity: 0.3,
        scale: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const roles = [
    {
      id: "ur-nurse",
      title: "Utilization Review Nurse",
      team: "Clinical Operations",
      location: "Dumaguete City, Philippines",
      type: "Full Time",
      icon: ShieldCheck,
      description: "The Utilization Review Nurse is responsible for reviewing clinical documentation to determine the medical necessity and appropriateness of healthcare services based on established guidelines. The role supports healthcare providers by ensuring accurate documentation, appropriate resource utilization, and timely case reviews.",
      responsibilities: [
        "Review patient medical records to assess medical necessity and level of care using established clinical criteria (e.g., InterQual or similar guidelines)",
        "Evaluate admissions, continued stays, and treatment plans to ensure alignment with payer requirements",
        "Document review outcomes clearly and accurately within the required systems",
        "Communicate with teams regarding case findings and documentation requirements",
        "Maintain compliance with healthcare regulations, confidentiality standards, and company policies",
        "Meet productivity and quality expectations set by the operations team"
      ],
      qualifications: [
        "Active PH Registered Nurse (RN) license",
        "Strong clinical knowledge and experience in hospital or bedside care",
        "Excellent analytical and documentation review skills",
        "Ability to work in a structured, deadline-driven environment"
      ]
    },
    {
      id: "cdi-specialist",
      title: "Clinical Documentation Improvement (CDI) Specialist",
      team: "Operational Strategy",
      location: "Dumaguete City, Philippines",
      type: "Full Time",
      icon: Database,
      description: "Responsible for reviewing medical records to ensure accurate, complete, and compliant documentation of patient conditions and treatments, maximizing DRG accuracy.",
    },
    {
      id: "ur-analyst",
      title: "Utilization Review Analyst",
      team: "Metrics & Data",
      location: "Dumaguete City, Philippines",
      type: "Full Time",
      icon: Zap,
      description: "Analyst role focused on extracting and structuring clinical data to support the Utilization Review team in evaluating medical necessity and compliance.",
    },
    {
      id: "bookkeeper",
      title: "Financial Bookkeeper",
      team: "Corporate Support",
      location: "Dumaguete City, Philippines",
      type: "Full Time",
      icon: Database,
      description: "Manage day-to-day financial transactions, payroll support, and operational expense tracking for the local office.",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#050A1A] font-sans text-white selection:bg-brand-red selection:text-white">
      <NoiseOverlay />
      <Header />
      
      <main ref={containerRef} className="flex-1 pt-40 pb-32 relative z-10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
            
            {/* Left Column: Heading & Sticky Sidebar */}
            <div className="lg:w-1/3 shrink-0 relative">
              <div className="sticky top-40">
                <div className="stagger-fade">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] w-12 bg-brand-red"></div>
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">Lunas Network</span>
                  </div>
                  <h1 className="font-sans font-extrabold text-6xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tighter leading-[0.95]">
                    Open<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Roles</span>
                  </h1>
                  <p className="font-serif italic text-xl text-slate-400 mb-12 max-w-md">
                    Join an elite operational layer supporting critical clinical diagnostics worldwide.
                  </p>
                </div>
                
                <div className="stagger-fade mt-16 pt-10 border-t border-white/10 hidden lg:block">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">
                    Direct Inquiry
                  </p>
                  <a href="mailto:careers@lunassolution.com" className="font-serif italic text-2xl text-white hover:text-brand-red transition-colors inline-block hover:-translate-y-1 transform duration-300">
                    careers@lunassolution.com
                  </a>
                  
                  <div className="mt-12 flex flex-col gap-6 font-mono text-sm uppercase tracking-widest text-slate-500 font-bold">
                    <a href="#apply" className="flex items-center gap-4 text-white hover:text-brand-red transition-all group w-fit">
                      <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-red/20 border border-white/10 group-hover:border-brand-red/50 transition-all">
                        <Send size={14} className="text-brand-red" />
                      </span>
                      Submit Credentials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Job Listings */}
            <div className="lg:w-2/3 flex-1 flex flex-col">
              
              <div className="mb-8 flex items-center justify-between stagger-fade">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 glow-pulse"></span>
                  {roles.length} Available Positions
                </span>
              </div>

              <div className="flex flex-col gap-6">
                {roles.map((role) => {
                  const isExpanded = expandedRole === role.id;
                  const Icon = role.icon;
                  
                  return (
                    <div key={role.id} className="stagger-fade group">
                      <div className={`bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] \${isExpanded ? 'bg-white/10 border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.6)]' : ''}`}>
                        
                        {/* Toggle Header */}
                        <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer relative overflow-hidden" onClick={() => setExpandedRole(isExpanded ? null : role.id)}>
                          
                          {/* Radial Gradient Background effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/0 to-brand-red/0 group-hover:from-brand-red/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                          <div className="flex items-start gap-6 relative z-10 w-full md:w-auto flex-1">
                            <div className={`hidden md:flex w-16 h-16 shrink-0 bg-[#050A1A] rounded-2xl border border-white/10 items-center justify-center transition-colors duration-500 \${isExpanded ? 'border-brand-red shadow-[0_0_30px_rgba(229,36,42,0.3)]' : 'group-hover:border-white/30'}`}>
                              <Icon size={24} className={isExpanded ? 'text-brand-red' : 'text-slate-400'} />
                            </div>
                            
                            <div className="flex-1">
                              <div className="font-mono text-[10px] uppercase tracking-widest text-brand-red font-bold mb-3">
                                {role.team}
                              </div>
                              <h2 className={`font-sans font-bold text-3xl md:text-4xl transition-colors duration-300 mb-4 tracking-tight \${isExpanded ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                                {role.title}
                              </h2>
                              <div className="flex flex-wrap items-center text-xs md:text-sm text-slate-400 gap-x-6 gap-y-3 font-mono">
                                <span className="flex items-center gap-2"><Clock size={16} className="text-white/40"/> {role.type}</span>
                                <span className="hidden md:block w-1 h-1 rounded-full bg-white/20"></span>
                                <span className="flex items-center gap-2"><MapPin size={16} className="text-white/40"/> {role.location}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4 relative z-10 shrink-0">
                            <a 
                              href="#apply"
                              onClick={(e) => { e.stopPropagation(); }}
                              className="magnetic-btn hidden lg:flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-sans font-bold text-sm transition-all shadow-[0_0_20px_rgba(229,36,42,0.3)] hover:shadow-[0_0_40px_rgba(229,36,42,0.6)] hover:bg-red-600"
                            >
                              Apply
                              <ArrowUpRight size={16} />
                            </a>
                            <button 
                              className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 \${isExpanded ? 'bg-white text-[#050A1A] border-white rotate-180' : 'bg-[#050A1A] border-white/20 text-white group-hover:border-white/50 group-hover:bg-white/5'}`}
                              aria-label="Toggle Details"
                            >
                              <ChevronDown size={24} />
                            </button>
                          </div>
                        </div>

                        {/* Expandable Body Area */}
                        <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] \${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="p-8 md:p-10 pt-0">
                            <div className="pt-8 border-t border-white/10">
                              <h4 className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Role Overview</h4>
                              <p className="text-slate-300 text-lg leading-relaxed mb-10 font-sans">
                                {role.description}
                              </p>
                              
                              <div className="grid md:grid-cols-2 gap-10">
                                {role.responsibilities && (
                                  <div>
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-6">Key Responsibilities</h4>
                                    <ul className="space-y-4">
                                      {role.responsibilities.map((req, i) => (
                                        <li key={i} className="flex items-start gap-4 text-slate-300 text-sm leading-relaxed">
                                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-2"></span>
                                          <span className="opacity-90">{req}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {role.qualifications && (
                                  <div>
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-6">Qualifications</h4>
                                    <ul className="space-y-4">
                                      {role.qualifications.map((qual, i) => (
                                        <li key={i} className="flex items-start gap-4 text-slate-300 text-sm leading-relaxed">
                                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2"></span>
                                          <span className="opacity-90">{qual}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              <div className="pt-10 mt-10 border-t border-white/5 lg:hidden">
                                <a 
                                  href="#apply"
                                  className="magnetic-btn flex items-center justify-center gap-2 bg-brand-red text-white w-full py-5 rounded-full font-bold text-base shadow-[0_0_20px_rgba(229,36,42,0.3)]"
                                >
                                  Submit Application
                                  <ArrowUpRight size={18} />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Actionable Application Form / Cinematic Dark Mode Protocol */}
              <div id="apply" className="mt-32 bg-white/[0.02] rounded-[3rem] p-8 md:p-14 shadow-2xl border border-white/10 relative overflow-hidden stagger-fade backdrop-blur-3xl">
                {/* Visual glow effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                <div className="relative z-10 max-w-2xl mx-auto text-center mb-14">
                  <h3 className="font-sans font-extrabold text-4xl md:text-5xl text-white mb-6 tracking-tight">Application <span className="text-brand-red">Protocol</span></h3>
                  <p className="font-serif text-slate-400 italic text-xl">Ready to align your expertise with our precision operations? Construct your application payload below.</p>
                </div>
                
                <form className="relative z-10 space-y-8 max-w-3xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-2">Full Name</label>
                      <input type="text" placeholder="Jane Doe" className="w-full bg-black/40 rounded-2xl px-6 py-5 text-base text-white outline-none border border-white/10 focus:border-brand-red focus:bg-white/5 transition-all shadow-inner placeholder-slate-600" />
                    </div>
                    <div className="space-y-3">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-2">Email Address</label>
                      <input type="email" placeholder="jane@example.com" className="w-full bg-black/40 rounded-2xl px-6 py-5 text-base text-white outline-none border border-white/10 focus:border-brand-red focus:bg-white/5 transition-all shadow-inner placeholder-slate-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-2">Target Modality (Role)</label>
                    <div className="relative">
                      <select className="w-full bg-black/40 rounded-2xl px-6 py-5 text-base text-white outline-none border border-white/10 focus:border-brand-red focus:bg-white/5 transition-all appearance-none cursor-pointer shadow-inner">
                        <option value="" disabled selected className="text-slate-500">Select operational alignment...</option>
                        {roles.map(r => <option key={r.id} value={r.id} className="bg-[#050A1A]">{r.title}</option>)}
                        <option value="general" className="bg-[#050A1A]">General Consideration Registry</option>
                      </select>
                      <ChevronDown size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold ml-2">Curriculum Vitae / Dossier</label>
                    <div className="w-full bg-black/20 rounded-2xl border border-dashed border-white/20 hover:border-brand-red hover:bg-white/5 transition-all cursor-pointer p-10 flex flex-col items-center justify-center gap-4 group">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-red/20 transition-all duration-500">
                        <Upload className="w-6 h-6 text-slate-300 group-hover:text-brand-red" />
                      </div>
                      <div className="text-center">
                        <span className="text-white font-bold text-base block mb-2">Initialize Payload Upload</span>
                        <p className="text-sm text-slate-500 font-serif italic">PDF, DOCX format parameters limit: 5MB</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button type="submit" className="magnetic-btn w-full flex items-center justify-center gap-3 py-6 rounded-2xl font-bold bg-white text-[#050A1A] hover:bg-brand-red hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(229,36,42,0.4)] text-lg">
                      Execute Transmission
                      <ArrowUpRight size={20} />
                    </button>
                    <p className="text-center text-[10px] text-slate-500 mt-6 font-mono uppercase tracking-widest">System transmits directly to recruiting infrastructure.</p>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OpenRolesPage;
