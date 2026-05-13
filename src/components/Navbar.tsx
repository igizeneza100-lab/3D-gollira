import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  { name: 'Educational Support Activities', href: '/services' },
  { name: 'Management Consultancy', href: '/services' },
  { name: 'Specialized Design', href: '/services' },
  { name: 'Research & Experimental Development', href: '/services' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6',
        isScrolled 
          ? 'bg-dark-charcoal/90 backdrop-blur-xl py-2 border-b border-white/5' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <a href="/" className="flex items-center group transition-colors">
          <div className="w-24 h-24 flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform">
            <img 
              src="/logoheader.png" 
              alt="Gorilla 3D" 
              className="w-full h-full object-contain"
            />
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">Home</a>
          <a href="#about" className="text-xs font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">About</a>
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">
              Services <ChevronDown className="w-3 h-3" />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-dark-charcoal/95 backdrop-blur-xl rounded-xl border border-white/10 p-2 shadow-2xl"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-brand-yellow hover:text-dark-charcoal transition-all"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <a href="#portfolio" className="text-xs font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">Portfolio</a>
          <a href="#team" className="text-xs font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">Our Team</a>
          
          <Link to="/contact" className="ml-4 px-6 py-2 bg-brand-yellow text-dark-charcoal rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-charcoal border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {['Home', 'About', 'Portfolio', 'Our Team'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="block text-xl font-display font-bold text-white hover:text-brand-yellow transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Link 
                to="/contact"
                className="block w-full py-4 bg-brand-yellow text-dark-charcoal rounded-2xl text-center font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
