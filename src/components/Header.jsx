import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Transition from transparent to floating pill after scrolling 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'About', href: isHome ? '#overview' : '/#overview' },
    { name: 'Values', href: isHome ? '#values' : '/#values' },
    { name: 'Culture', href: isHome ? '#culture' : '/#culture' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <div 
          className={`pointer-events-auto flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isScrolled && !isMobileMenuOpen
              ? 'w-[90%] md:w-3/4 max-w-5xl bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 rounded-[2rem] py-3 px-6 md:px-8' 
              : 'w-full max-w-7xl py-4 px-6 md:px-12 bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 relative z-10 group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo 
              className="h-10 md:h-12 lg:h-14 w-auto transition-transform duration-500 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm tracking-tight transition-all hover:-translate-y-[1px] font-semibold ${
                  isScrolled && !isMobileMenuOpen ? 'text-slate-700 hover:text-brand-red' : 'text-white hover:text-white/80'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/events" 
              className={`text-sm tracking-tight transition-all hover:-translate-y-[1px] font-semibold ${
                isScrolled && !isMobileMenuOpen ? 'text-slate-700 hover:text-brand-red' : 'text-white hover:text-white/80'
              }`}
            >
              Events
            </Link>
            <Link
              to="/roles"
              className="magnetic-btn relative overflow-hidden bg-brand-navy text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md"
            >
              <span className="relative z-10">Careers</span>
              <span className="absolute inset-0 bg-brand-red translate-y-full transition-transform duration-300 ease-in-out hover:translate-y-0 -z-0"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden relative z-10 p-2 transition-colors ${
              isScrolled && !isMobileMenuOpen ? 'text-brand-navy' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation Full Screen Dropdown */}
      <div 
        className={`fixed inset-0 bg-[#050A1A] z-[40] flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <nav className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-4xl font-serif text-white hover:text-brand-red transition-all duration-700 italic transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${100 + index * 100}ms` : '0ms' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Link 
            to="/events" 
            className={`text-4xl font-serif text-white hover:text-brand-red transition-all duration-700 italic transform ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? `${100 + navLinks.length * 100}ms` : '0ms' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Events
          </Link>
          <div 
            className={`w-full max-w-xs mt-8 transition-all duration-700 transform ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? `${100 + (navLinks.length + 1) * 100}ms` : '0ms' }}
          >
            <Link
              to="/roles"
              className="magnetic-btn block text-white w-full text-center py-4 rounded-full font-sans font-bold text-lg bg-brand-navy shadow-lg shadow-brand-navy/30 active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
