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
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
        delay: 0.1
      });
      
      gsap.from('.glow-pulse', {
        opacity: 0.3,
        scale: 0.8,
        duration: 1.5,
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
      team: "Operations",
      location: "Dumaguete City, Philippines",
      type: "Full Time (Hybrid)",
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
      team: "Operations",
      location: "Dumaguete City, Philippines",
      type: "Full Time (Hybrid)",
      icon: Database,
      description: "Responsible for reviewing medical records to ensure accurate, complete, and compliant documentation of patient conditions and treatments, maximizing DRG accuracy.",
    },
    {
      id: "ur-analyst",
      title: "Utilization Review Analyst",
      team: "Operations",
      location: "Dumaguete City, Philippines",
      type: "Full Time (Hybrid)",
      icon: Zap,
      description: "Analyst role focused on extracting and structuring clinical data to support the Utilization Review team in evaluating medical necessity and compliance.",
    },
    {
      id: "bookkeeper",
      title: "Bookkeeper",
      team: "Support",
      location: "Dumaguete City, Philippines",
      type: "Full Time",
      icon: Database,
      description: "Manage day-to-day financial transactions, payroll support, and operational expense tracking for the local office.",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 selection:bg-brand-red selection:text-white">
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
                  <h1 className="font-sans font-extrabold text-6xl md:text-7xl lg:text-8xl text-brand-navy mb-6 tracking-tighter leading-[0.95]">
                    Open<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-navy">Roles</span>
                  </h1>
                  <p className="font-sans text-sm text-slate-600 mb-12 max-w-md leading-relaxed">
                    We want candidates to understand that Lunas Solution is a professional environment where healthcare expertise is valued, and that we play an important role in supporting healthcare providers through services such as utilization review. While our work requires accountability and attention to detail, we aim to provide a collaborative workplace where professionals can continue developing their skills and contribute meaningfully to healthcare operations.
                  </p>
                </div>
                
                <div className="stagger-fade mt-16 pt-10 border-t border-slate-200 hidden lg:block">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-4">
                    Direct Inquiry
                  </p>
                  <a href="mailto:LunasRecruitmentTeam@hurc.com" className="font-serif italic text-2xl text-brand-navy hover:text-brand-red transition-colors inline-block hover:-translate-y-1 transform duration-300">
                    LunasRecruitmentTeam@hurc.com
                  </a>
                  
                  <div className="mt-12 flex flex-col gap-6 font-mono text-sm uppercase tracking-widest text-slate-500 font-bold">
                    <a href="#apply" className="flex items-center gap-4 text-brand-navy hover:text-brand-red transition-all group w-fit">
                      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-brand-red/10 border border-slate-200 group-hover:border-brand-red/30 transition-all shadow-sm">
                        <Send size={14} className="text-brand-red" />
                      </span>
                      Submit
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
                      <div className={`bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-brand-blue/30 ${isExpanded ? 'shadow-2xl border-brand-blue/50 ring-4 ring-brand-blue/5' : 'shadow-sm'}`}>
                        
                        {/* Toggle Header */}
                        <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer relative overflow-hidden" onClick={() => setExpandedRole(isExpanded ? null : role.id)}>
                          
                          {/* Radial Gradient Background effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/0 to-brand-red/0 group-hover:from-brand-red/5 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                          <div className="flex items-start gap-6 relative z-10 w-full md:w-auto flex-1">
                            <div className={`hidden md:flex w-16 h-16 shrink-0 bg-slate-50 rounded-2xl border border-slate-200 items-center justify-center transition-colors duration-500 ${isExpanded ? 'border-brand-red bg-brand-red/5 text-brand-red' : 'group-hover:border-slate-300 text-slate-400'}`}>
                              <Icon size={24} className={isExpanded ? 'text-brand-red' : 'text-slate-400 group-hover:text-brand-navy'} />
                            </div>
                            
                            <div className="flex-1">
                              <div className="font-mono text-[10px] uppercase tracking-widest text-brand-red font-bold mb-3">
                                {role.team}
                              </div>
                              <h2 className={`font-sans font-bold text-3xl md:text-4xl transition-colors duration-300 mb-4 tracking-tight ${isExpanded ? 'text-brand-navy' : 'text-slate-800 group-hover:text-brand-navy'}`}>
                                {role.title}
                              </h2>
                              <div className="flex flex-wrap items-center text-xs md:text-sm text-slate-500 gap-x-6 gap-y-3 font-mono">
                                <span className="flex items-center gap-2"><Clock size={16} className="text-brand-blue"/> {role.type}</span>
                                <span className="hidden md:block w-1 h-1 rounded-full bg-slate-300"></span>
                                <span className="flex items-center gap-2"><MapPin size={16} className="text-brand-blue"/> {role.location}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4 relative z-10 shrink-0">
                            <a 
                              href="#apply"
                              onClick={(e) => { e.stopPropagation(); }}
                              className="magnetic-btn hidden lg:flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-sans font-bold text-sm transition-all shadow-[0_4px_14px_rgba(229,36,42,0.39)] hover:shadow-[0_6px_20px_rgba(229,36,42,0.23)] hover:bg-red-600"
                            >
                              Submit
                              <ArrowUpRight size={16} />
                            </a>
                            <button 
                              className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 ${isExpanded ? 'bg-brand-navy text-white border-brand-navy rotate-180 shadow-lg' : 'bg-white border-slate-200 text-slate-600 group-hover:border-slate-300 group-hover:bg-slate-50'}`}
                              aria-label="Toggle Details"
                            >
                              <ChevronDown size={24} />
                            </button>
                          </div>
                        </div>

                        {/* Expandable Body Area */}
                        <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="p-8 md:p-10 pt-0">
                            <div className="pt-8 border-t border-slate-100">
                              <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">Role Overview</h4>
                              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-sans">
                                {role.description}
                              </p>
                              
                              <div className="grid md:grid-cols-2 gap-10">
                                {role.responsibilities && (
                                  <div>
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">Key Responsibilities</h4>
                                    <ul className="space-y-4">
                                      {role.responsibilities.map((req, i) => (
                                        <li key={i} className="flex items-start gap-4 text-slate-600 text-sm leading-relaxed">
                                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-2"></span>
                                          <span className="opacity-90">{req}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {role.qualifications && (
                                  <div>
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">Qualifications</h4>
                                    <ul className="space-y-4">
                                      {role.qualifications.map((qual, i) => (
                                        <li key={i} className="flex items-start gap-4 text-slate-600 text-sm leading-relaxed">
                                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-2"></span>
                                          <span className="opacity-90">{qual}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              <div className="pt-10 mt-10 border-t border-slate-100 lg:hidden">
                                <a 
                                  href="#apply"
                                  className="magnetic-btn flex items-center justify-center gap-2 bg-brand-red text-white w-full py-5 rounded-full font-bold text-base shadow-[0_4px_14px_rgba(229,36,42,0.39)]"
                                >
                                  Submit
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

              {/* Actionable Application Form */}
              <div id="apply" className="mt-32 bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl border border-slate-200 relative overflow-hidden stagger-fade">
                {/* Visual glow effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                <div className="relative z-10 max-w-2xl mx-auto text-center mb-14">
                  <h3 className="font-sans font-extrabold text-4xl md:text-5xl text-brand-navy mb-6 tracking-tight">Application <span className="text-brand-red">Protocol</span></h3>
                  <p className="font-serif text-slate-500 italic text-xl">Ready to align your expertise with our precision operations? Construct your application payload below.</p>
                </div>
                
                <form action="https://formsubmit.co/LunasRecruitmentTeam@hurc.com" method="POST" encType="multipart/form-data" className="relative z-10 space-y-8 max-w-3xl mx-auto">
                  {/* Honeypot for spam protection */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  {/* Disable captcha for smoother UX */}
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-2">Full Name</label>
                      <input type="text" name="name" required placeholder="Jane Doe" className="w-full bg-slate-50 rounded-2xl px-6 py-5 text-base text-slate-800 outline-none border border-slate-200 focus:border-brand-red focus:bg-white transition-all shadow-sm placeholder-slate-400" />
                    </div>
                    <div className="space-y-3">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-2">Email Address</label>
                      <input type="email" name="email" required placeholder="jane@example.com" className="w-full bg-slate-50 rounded-2xl px-6 py-5 text-base text-slate-800 outline-none border border-slate-200 focus:border-brand-red focus:bg-white transition-all shadow-sm placeholder-slate-400" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-2">Phone Number</label>
                      <input type="tel" name="phone" required placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 rounded-2xl px-6 py-5 text-base text-slate-800 outline-none border border-slate-200 focus:border-brand-red focus:bg-white transition-all shadow-sm placeholder-slate-400" />
                    </div>
                    <div className="space-y-3">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-2">Target Modality (Role)</label>
                      <div className="relative">
                        <select name="role" required className="w-full bg-slate-50 rounded-2xl px-6 py-5 text-base outline-none border border-slate-200 focus:border-brand-red focus:bg-white transition-all appearance-none cursor-pointer shadow-sm text-slate-800" defaultValue="">
                          <option value="" disabled className="text-slate-400">Select operational alignment...</option>
                          {roles.map(r => <option key={r.id} value={r.title}>{r.title}</option>)}
                          <option value="General Consideration Registry">General Consideration Registry</option>
                        </select>
                        <ChevronDown size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-2">Curriculum Vitae / Dossier</label>
                    <label htmlFor="resume-upload" className="w-full block bg-slate-50 rounded-2xl border border-dashed border-slate-300 hover:border-brand-red hover:bg-slate-100 transition-all cursor-pointer p-10 flex flex-col items-center justify-center gap-4 group">
                      <input id="resume-upload" type="file" name="attachment" accept=".pdf,.doc,.docx" className="hidden" required />
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:text-brand-red transition-all duration-500 text-slate-400">
                        <Upload className="w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <span className="text-brand-navy font-bold text-base block mb-2">Initialize Payload Upload</span>
                        <p className="text-sm text-slate-500 font-serif italic">PDF, DOCX format parameters limit: 5MB</p>
                      </div>
                    </label>
                  </div>

                  <div className="pt-8">
                    <button type="submit" className="magnetic-btn w-full flex items-center justify-center gap-3 py-6 rounded-2xl font-bold bg-brand-navy text-white hover:bg-brand-red transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-brand-red/30 text-lg">
                      Submit
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
