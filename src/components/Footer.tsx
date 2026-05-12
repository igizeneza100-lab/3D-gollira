import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1E5F59] text-white py-12 md:py-16 overflow-hidden">
      {/* Cinematic Background Image/Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E5F59] via-[#1E5F59]/80 to-transparent" />
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop" 
          alt="Cinematic Background"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Section: Central Logo & Tagline */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-32 h-32 md:w-36 md:h-36 mb-6"
          >
            <img 
              src="/logo1pngwhite.png" 
              alt="Gorilla 3D" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            />
          </motion.div>
          <p className="max-w-xl text-base md:text-lg text-white/70 font-display tracking-tight leading-relaxed">
            The National <span className="text-white font-bold">Gorilla 3D Studio</span> is a pioneer in digital rehabilitation, combining creativity and technology for a better tomorrow.
          </p>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12 border-t border-white/10 pt-12">
          <div className="col-span-2 md:col-span-1 md:border-r border-white/5 md:pr-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6">About</h4>
            <p className="text-sm text-white/50 leading-relaxed">
              Combining creativity, technology, and research to provide impactful solutions for a better tomorrow.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'Collaborate'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Expertise</h4>
            <ul className="space-y-3">
              {['Design', 'Consultancy', 'Research', 'Innovation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Contact</h4>
              <p className="text-sm text-white/60 italic">hello@gorilla3d.com</p>
            </div>
            <div className="mt-8">
              <h4 className="text-[11px] font-display font-bold text-brand-yellow italic">"Together, We Build A Better Future"</h4>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Crisis Info */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
              © {currentYear} Gorilla 3D Studio.
            </p>
            <a href="#" className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
