import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Target, Eye, Rocket } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import aboutCover from '../assets/aboutcover.png';

const stats = [
  { label: 'Completed Projects', value: 100, suffix: '+', color: 'text-brand-teal' },
  { label: 'Organizations Supported', value: 50, suffix: '+', color: 'text-brand-yellow' },
  { label: 'Research Initiatives', value: 30, suffix: '+', color: 'text-white' },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden relative bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-teal/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-dark-charcoal">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-yellow font-bold uppercase tracking-widest text-sm"
              >
                The Spirit of the Gorilla
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 leading-tight">
                STRENGTH, <span className="text-brand-teal">INTELLIGENCE</span>, LEADERSHIP.
              </h2>
            </div>
            
            <p className="text-lg text-dark-charcoal/70 leading-relaxed font-serif italic">
              "In the digital jungle, the Gorilla stands as a guardian of innovation—Combining raw creative power with surgical technical precision."
            </p>

            <p className="text-base text-dark-charcoal/60 leading-relaxed">
              Gorilla 3D Studio isn't just a design firm; it's a digital ecosystem. Inspired by the alpha's leadership, we navigate complex challenges in specialized design, management consultancy, and R&D with unwavering strength and protective expertise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="bg-[#1E5F59]/5 p-8 rounded-2xl border border-[#1E5F59]/10 hover:border-[#1E5F59]/50 transition-colors">
                <Target className="w-8 h-8 text-brand-yellow mb-4" />
                <h4 className="text-xl font-bold mb-2">Alpha Precision</h4>
                <p className="text-sm text-dark-charcoal/50 leading-relaxed">
                  We lead the charge in educational support and specialized design, ensuring every project carries the weight of excellence.
                </p>
              </div>
              <div className="bg-[#1E5F59]/5 p-8 rounded-2xl border border-[#1E5F59]/10 hover:border-[#1E5F59]/50 transition-colors">
                <Eye className="w-8 h-8 text-brand-teal mb-4" />
                <h4 className="text-xl font-bold mb-2">The Guardian Vision</h4>
                <p className="text-sm text-dark-charcoal/50 leading-relaxed">
                  Protecting and nurturing the creative spirit while delivering measurable, high-impact technical results.
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 h-full">
            <div className="relative z-10 rounded-3xl overflow-hidden glass p-1 h-full">
              <div className="h-full min-h-[500px] lg:min-h-full bg-dark-charcoal flex items-center justify-center overflow-hidden rounded-2xl relative group">
                {/* Local Visual */}
                <img 
                  src={aboutCover} 
                  alt="About Gorilla 3D Studio" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Animated Marketing Word Overlay */}
                <div className="absolute inset-0 bg-dark-charcoal/30 group-hover:bg-dark-charcoal/10 transition-colors duration-700 z-0" />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute z-10 pointer-events-none flex flex-col items-center justify-center"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <h3 className="text-5xl md:text-7xl font-display font-bold text-white tracking-widest lowercase drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
                      innovate.
                    </h3>
                    <p className="mt-4 text-white/90 text-sm md:text-base max-w-[80%] font-medium drop-shadow-md">
                      Pioneering the future of design and research.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-6 md:right-10 glass-dark p-8 rounded-3xl shadow-2xl z-20 max-w-[280px]"
            >
              <div className="flex flex-col gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className={`text-3xl font-display font-bold ${stat.color}`}>
                      <Counter value={stat.value} />{stat.suffix}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest font-bold opacity-40 text-white">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}