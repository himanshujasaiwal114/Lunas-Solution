import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Building, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const OpenRoles = () => {
  const sectionRef = useRef(null);

  const locations = [
    {
      city: "Alabang, Muntinlupa City",
      type: "Main Operations & Admin",
      desc: "Supporting recruitment, training, and healthcare operations services."
    },
    {
      city: "Dumaguete City",
      region: "Negros Oriental",
      type: "Operations Center",
      desc: "Dedicated operations center supporting specialized healthcare services."
    }
  ];

  const roles = [
    { title: "Utilization Review Nurse", location: "Dumaguete City", featured: true },
    { title: "Clinical Documentation Improvement (CDI) Specialist", location: "Dumaguete City", featured: false },
    { title: "Utilization Review Analyst", location: "Dumaguete City", featured: false },
    { title: "Bookkeeper", location: "Dumaguete City", featured: false },
    { title: "Scheduling Specialist", location: "Hybrid / Alabang", featured: false },
    { title: "Data Entry", location: "Hybrid / Alabang", featured: false }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Locations animation
      gsap.from('.location-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.locations-grid',
          start: 'top 80%',
        }
      });

      // Roles animation
      gsap.from('.role-card', {
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.roles-list',
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="roles" ref={sectionRef} className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Office Locations Top Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-wider text-brand-red uppercase mb-3">Our Footprint</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Office Locations</h3>
            <p className="text-brand-gray">
              We operate a hybrid work model, blending remote flexibility with world-class office facilities in the Philippines.
            </p>
          </div>

          <div className="locations-grid grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((loc, idx) => (
              <div key={idx} className="location-card bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-4">
                <MapPin className="w-8 h-8 text-brand-red shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-brand-navy">{loc.city}</h4>
                  {loc.region && <p className="text-sm text-slate-500 mb-2">{loc.region}</p>}
                  <div className="inline-block mt-1 mb-3 px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold rounded-full uppercase tracking-wide">
                    {loc.type}
                  </div>
                  <p className="text-brand-gray text-sm leading-relaxed">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 my-16"></div>

        {/* Open Roles Bottom Section */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-4 sticky top-24">
            <h2 className="text-sm font-bold tracking-wider text-brand-red uppercase mb-3">Join The Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Careers</h3>
            <p className="text-brand-gray mb-8">
              We are actively looking for highly skilled professionals to support our growing network of healthcare partners.
            </p>
            <div className="bg-brand-navy p-6 rounded-xl text-white">
              <h4 className="font-bold flex items-center gap-2 mb-2">
                <Building size={18} className="text-brand-blue" />
                Work Model Note
              </h4>
              <p className="text-sm text-slate-300">
                All roles currently require a hybrid setup. Fully remote positions are not available at this time.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-8 roles-list flex flex-col gap-4">
            
            {/* Featured Job Focus */}
            <div className="role-card bg-white border-2 border-brand-blue p-6 md:p-8 rounded-xl shadow-md relative overflow-hidden group hover:border-brand-navy transition-colors">
              <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Priority Role
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">Utilization Review Nurse</h4>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 font-medium font-sans">
                    <span className="flex items-center gap-1.5 bg-brand-light px-3 py-1 rounded-full"><MapPin size={14} /> Dumaguete City</span>
                    <span className="flex items-center gap-1.5 bg-brand-light px-3 py-1 rounded-full"><Building size={14} /> Hybrid</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-brand-gray text-sm hidden md:block">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                      Review patient records to assess medical necessity
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                      Evaluate admissions using clinical criteria (InterQual)
                    </li>
                  </ul>
                  <div className="mt-4 text-sm font-semibold text-brand-navy">
                    Requires: Active PH RN License
                  </div>
                </div>
                <div className="shrink-0 flex md:flex-col gap-3 w-full md:w-auto">
                  <button className="flex-1 md:w-full bg-brand-red hover:bg-brand-red/90 text-white px-6 py-3 rounded-md font-semibold text-center transition-colors">
                    Apply Now
                  </button>
                  <button className="flex-1 md:w-full bg-white border border-brand-navy hover:bg-brand-light text-brand-navy px-6 py-3 rounded-md font-semibold text-center transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Other Roles */}
            {roles.filter(r => !r.featured).map((role, idx) => (
              <a 
                key={idx} 
                href="#apply"
                className="role-card flex items-center justify-between bg-white p-6 rounded-xl border border-slate-200 hover:border-brand-blue hover:shadow-md transition-all group"
              >
                <div>
                  <h4 className="text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-1">{role.title}</h4>
                  <p className="text-sm text-brand-gray flex items-center gap-1.5">
                    <MapPin size={14} /> {role.location}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </div>
              </a>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default OpenRoles;
