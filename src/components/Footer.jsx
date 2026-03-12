import { Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="bg-[#050A1A] text-white pt-24 pb-8 rounded-t-[4rem] relative z-30 mt-[-4rem]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-20 border-b border-white/10 pb-16">
          
          <div className="md:col-span-4">
            <div className="mb-6 flex items-center">
              <Logo className="w-48 opacity-90" textClass="fill-white" />
            </div>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm">
              Bridging healthcare with expertise. Supporting critical clinical operations through precision and continuous learning.
            </p>
            
            {/* System Operational Indicator */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-xs uppercase tracking-widest text-slate-300">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              System Operational
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-sans font-bold text-lg mb-6 text-white tracking-wide">Platform</h4>
            <ul className="space-y-4 font-sans text-slate-400 text-sm">
              <li><a href={isHome ? '#overview' : '/#overview'} className="hover:text-brand-red transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-brand-red transition-all"></span>Philosophy</a></li>
              <li><a href={isHome ? '#why-us' : '/#why-us'} className="hover:text-brand-red transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-brand-red transition-all"></span>Values</a></li>
              <li><a href={isHome ? '#culture' : '/#culture'} className="hover:text-brand-red transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-brand-red transition-all"></span>Protocol</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans font-bold text-lg mb-6 text-white tracking-wide">Careers</h4>
            <ul className="space-y-4 font-sans text-slate-400 text-sm">
              <li><Link to="/roles" className="hover:text-brand-red transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-brand-red transition-all"></span>Open Positions</Link></li>
              <li><a href="/roles#apply" className="hover:text-brand-red transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-brand-red transition-all"></span>Join Network</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans font-bold text-lg mb-6 text-white tracking-wide">Legal</h4>
            <ul className="space-y-4 font-sans text-slate-400 text-sm">
              <li><a href="#" className="hover:text-brand-red transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-brand-red transition-all"></span>Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-brand-red transition-all"></span>Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-500 font-sans text-sm">
            <Heart size={14} className="text-brand-red" /> 
            <span>Equal Opportunity Employer</span>
          </div>
          <div className="text-slate-500 font-sans text-sm font-mono opacity-60">
            &copy; {new Date().getFullYear()} LUNAS SOLUTION CORP. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
