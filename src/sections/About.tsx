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
                About Us
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 leading-tight">
                Who We Are
              </h2>
            </div>

            <p className="text-lg text-dark-charcoal/70 leading-relaxed font-serif italic">
              Gorilla 3D Studio is a creative and innovation-driven studio specializing in visual storytelling, digital design, animation, educational content, and multimedia production.
            </p>

            <p className="text-base text-dark-charcoal/60 leading-relaxed">
              We combine creativity, technology, and strategic thinking to transform ideas into engaging experiences that communicate clearly, connect emotionally, and create measurable impact. From development organizations and institutions to businesses and startups, we help clients bring their vision to life through powerful design and digital solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="bg-[#1E5F59]/5 p-8 rounded-2xl border border-[#1E5F59]/10 hover:border-[#1E5F59]/50 transition-colors">
                <Target className="w-8 h-8 text-brand-yellow mb-4" />
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-sm text-dark-charcoal/50 leading-relaxed">
                 To empower organizations, communities, and brands through innovative creative solutions that educate, inspire, and drive meaningful change.
                </p>
              </div>
              <div className="bg-[#1E5F59]/5 p-8 rounded-2xl border border-[#1E5F59]/10 hover:border-[#1E5F59]/50 transition-colors">
                <Eye className="w-8 h-8 text-brand-teal mb-4" />
                <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                <p className="text-sm text-dark-charcoal/50 leading-relaxed">
                  To become Africa’s leading creative and digital innovation studio recognized for transforming ideas into impactful visual experiences.
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
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute z-10 pointer-events-none left-10 md:left-16 top-10 md:top-16 max-w-[80%]"
                >
                  <div className="overflow-hidden">
                    <motion.h3 
                      animate={{ opacity: [0.8, 1, 0.8] }} 
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-none drop-shadow-2xl"
                    >
                      Impactful <br/> <span className="text-brand-yellow">Stories.</span>
                    </motion.h3>
                  </div>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 text-white text-sm md:text-base font-bold leading-relaxed drop-shadow-lg pr-4 border-l-2 border-brand-yellow pl-4"
                  >
                    At Gorilla 3D Studio, we create high-impact animation, motion graphics, multimedia content, digital experiences, and strategic creative solutions that help organizations... tell stories that inspire action.
                  </motion.p>
                </motion.div>
              </div>
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-20 -right-4 md:-right-8 lg:-right-12 glass-dark p-8 rounded-3xl shadow-2xl z-20 max-w-[280px]"
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