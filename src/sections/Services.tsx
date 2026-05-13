import { motion } from 'motion/react';
const services = [
  {
    title: 'Educational Support Activities',
    description: 'Empowering institutions with innovative curriculum development, e-learning solutions, and instructional design tailored for the modern age.',
    color: 'from-brand-teal to-brand-teal-dark',
  },
  {
    title: 'Management Consultancy',
    description: 'Strategic guidance and practical solutions derived from deep research to improve operational performance and organizational effectiveness.',
    color: 'from-brand-yellow to-orange-500',
  },
  {
    title: 'Specialized Design',
    description: 'Harnessing the power of 3D visualization, VR, and multimedia design to create captivating, immersive experiences that bring ideas to life.',
    color: 'from-brand-teal-mid to-brand-teal',
  },
  {
    title: 'Research & Development',
    description: 'Advancing human understanding through innovative research in social sciences and humanities, tackling complex cultural challenges head-on.',
    color: 'from-white/20 to-white/5',
  }
];
export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-main-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-teal font-bold uppercase tracking-widest text-sm"
            >
              Our Expertise
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 text-dark-charcoal uppercase leading-[0.9]">
              SHAPING THE <span className="text-brand-teal">IMPACTFUL</span> SOLUTIONS
            </h2>
          </div>
          <p className="text-dark-charcoal/40 text-sm max-w-sm md:text-right font-medium">
            We merge technology with human-centered research to deliver unparalleled quality across four core domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative h-[280px] rounded-3xl overflow-hidden cursor-pointer border border-white/10"
            >
              {/* Card Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-30"
                style={{ backgroundImage: 'url(/src/assets/BG5.png)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal via-dark-charcoal/80 to-dark-charcoal/40" />
              
              <div className="relative h-full p-8 flex flex-col justify-end gap-3 overflow-hidden z-10">
                <h3 className="text-2xl font-bold font-display leading-tight text-white">
                  {service.title}
                </h3>
                
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                  className="text-white font-bold text-sm leading-relaxed"
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}