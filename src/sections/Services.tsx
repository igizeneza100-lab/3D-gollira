import { motion } from 'motion/react';
import { BookOpen, BarChart3, Palette, Microscope } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    title: 'Educational Support Activities',
    description: 'Empowering institutions with innovative curriculum development, e-learning solutions, and instructional design tailored for the modern age.',
    icon: BookOpen,
    color: 'from-brand-teal to-brand-teal-dark',
  },
  {
    title: 'Management Consultancy',
    description: 'Strategic guidance and practical solutions derived from deep research to improve operational performance and organizational effectiveness.',
    icon: BarChart3,
    color: 'from-brand-yellow to-orange-500',
  },
  {
    title: 'Specialized Design',
    description: 'Harnessing the power of 3D visualization, VR, and multimedia design to create captivating, immersive experiences that bring ideas to life.',
    icon: Palette,
    color: 'from-brand-teal-mid to-brand-teal',
  },
  {
    title: 'Research & Development',
    description: 'Advancing human understanding through innovative research in social sciences and humanities, tackling complex cultural challenges head-on.',
    icon: Microscope,
    color: 'from-white/20 to-white/5',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-main-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-teal font-bold uppercase tracking-widest text-sm"
            >
              Our Expertise
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 leading-none text-dark-charcoal">
              SHAPING THE <span className="text-brand-teal">IMPACTFUL</span> SOLUTIONS
            </h2>
          </div>
          <p className="text-dark-charcoal/40 text-sm max-w-xs md:text-right">
            We merge technology with human-centered research to deliver unparalleled quality across four core domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Card Background Overlay */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br transition-opacity duration-500 opacity-20 group-hover:opacity-40",
                service.color
              )} />
              <div className="absolute inset-0 glass-dark group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="relative h-full p-10 flex flex-col justify-end gap-6 overflow-hidden">
                {/* Floating Icon Decoration */}
                <service.icon className="absolute top-10 right-10 w-16 h-16 opacity-10 group-hover:opacity-30 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" />
                
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-brand-yellow transition-colors duration-300">
                  <service.icon className="w-6 h-6 group-hover:text-dark-charcoal" />
                </div>
                
                <h3 className="text-2xl font-bold font-display leading-tight group-hover:text-brand-yellow transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {service.description}
                </p>

                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-dark-charcoal transition-all">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
