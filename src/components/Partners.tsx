import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gizLogo from '../assets/partner_logoes/GIZ-GmbH Logo.png';
import imbutoLogo from '../assets/partner_logoes/IMBUTO FOUNDATION LOGO PNG.png';
import interpeaceLogo from '../assets/partner_logoes/Interpeace-2019.png';
import logo2 from '../assets/partner_logoes/Logo-2.png';
import logo from '../assets/partner_logoes/Logo.png';
import narLogo from '../assets/partner_logoes/NAR LOGO FINAL.png';
import unctLogo from '../assets/partner_logoes/New_UNCT_logo_vertical_transparent.png';
import peacebuildingLogo from '../assets/partner_logoes/Peacebuilding Logo.png';
import rebLogo from '../assets/partner_logoes/REB_Logo.png';
import remcoLogo from '../assets/partner_logoes/REMCO-OG.png';
import undpLogo from '../assets/partner_logoes/UNDP_logo.png';
import unVolunteersLogo from '../assets/partner_logoes/Un-Volunteers-logo.jpg';
import downloadLogo from '../assets/partner_logoes/download.png';
import download1Logo from '../assets/partner_logoes/download_1.png';
import startimesLogo from '../assets/partner_logoes/startimes-logo.jpg';
import bg2 from '../assets/BG2.png';

const logos = [
  gizLogo,
  imbutoLogo,
  interpeaceLogo,
  logo2,
  logo,
  narLogo,
  unctLogo,
  peacebuildingLogo,
  rebLogo,
  remcoLogo,
  undpLogo,
  unVolunteersLogo,
  downloadLogo,
  download1Logo,
  startimesLogo
];

export default function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.partner-item');
      
      items.forEach((item) => {
        const element = item as HTMLElement;
        element.addEventListener('mouseenter', () => {
          gsap.to(element, {
            scale: 1.05,
            backgroundColor: '#f8fafc',
            duration: 0.3,
            ease: 'power2.out'
          });
          
          // Subtle "magic" push to neighbors
          const index = items.indexOf(item);
          if (items[index - 1]) gsap.to(items[index - 1] as HTMLElement, { x: -5, duration: 0.3 });
          if (items[index + 1]) gsap.to(items[index + 1] as HTMLElement, { x: 5, duration: 0.3 });
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(items as HTMLElement[], {
            scale: 1,
            x: 0,
            backgroundColor: '#ffffff',
            duration: 0.3,
            ease: 'power2.inOut'
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-24 bg-white border-y border-black/5 overflow-hidden relative">
      {/* Background Decoration */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
                <h2 className="text-3xl md:text-4xl font-display font-black text-brand-teal uppercase tracking-tight">OUR CLIENTS</h2>
                <div className="flex gap-1">
                    <div className="w-6 h-3 bg-brand-yellow/30" />
                    <div className="w-12 h-3 bg-brand-teal" />
                </div>
            </div>
            <p className="text-black/60 max-w-sm mt-4 font-medium">
              See the companies who trusted Gollira studio to bring their vision to life.
            </p>
          </div>

          <Link 
            to="/contact"
            className="group flex items-center gap-3 bg-brand-teal text-white px-6 py-4 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-black transition-colors"
          >
            Want to partner with us?
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
        <div className="w-full h-px bg-black/10 mt-8" />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-t border-black/5 relative z-10 bg-white/50 backdrop-blur-sm">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="partner-item aspect-video flex items-center justify-center p-8 border-r border-b border-black/5 bg-white cursor-pointer overflow-hidden"
          >
            <img 
              src={logo} 
              alt="Partner Logo" 
              className="max-h-full max-w-full object-contain pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
