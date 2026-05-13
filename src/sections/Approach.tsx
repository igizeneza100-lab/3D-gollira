import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    role: 'Executive',
    title: 'Strategic Oversight',
    description: 'The CEO ensures brand reputation and strategic policies are executed with precision across all departments.',
  },
  {
    number: '02',
    role: 'Middle Management',
    title: 'Operational Guidance',
    description: 'Department heads ensure output supports executive strategies while maintaining team efficiency.',
  },
  {
    number: '03',
    role: 'Individual Contributors',
    title: 'Creative Execution',
    description: 'Specialists crafting content, PR analysis, and technical releases that communicate our core messages.',
  },
];

export default function Approach() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-6 relative overflow-hidden bg-white rounded-[40px] md:rounded-[80px] shadow-sm my-4 md:my-10 border border-black/5"
    >
      {/* Background Texture from Assets */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ 
          backgroundImage: 'url(/src/assets/BG3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-teal font-bold uppercase tracking-widest text-sm"
            >
              Our Structure
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 text-dark-charcoal uppercase leading-[0.9]">
              THE GORILLA <span className="text-brand-teal decoration-brand-yellow decoration-4 underline-offset-8">ECOSYSTEM</span>
            </h2>
          </div>
          <p className="text-dark-charcoal/40 text-sm max-w-sm md:text-right font-medium">
            Our hierarchical flow is designed for synergy, where every layer fuels the overall brand success and innovation.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-6 items-stretch justify-between mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative w-full md:w-1/3 flex flex-col"
            >
              <div className="flex-1 flex flex-col text-left bg-white/60 backdrop-blur-md p-10 rounded-[32px] border border-black/5 hover:border-black/10 hover:shadow-2xl transition-all duration-500 group">
                <span className="text-6xl font-display font-black text-black/5 mb-6 group-hover:text-brand-teal/20 transition-colors">
                  {step.number}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-3 block">
                  {step.role}
                </span>
                <h3 className="text-2xl font-bold mb-4 font-display text-dark-charcoal max-w-[200px]">
                  {step.title}
                </h3>
                <div className="w-8 h-1 bg-black/10 mb-6 group-hover:w-16 group-hover:bg-brand-teal transition-all duration-500" />
                <p className="text-sm text-dark-charcoal/60 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infographic Visual Aid */}
        <div className="mt-24 bg-main-bg rounded-[40px] p-12 border border-dark-charcoal/5 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-teal/5 -z-10" />
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-display font-bold text-dark-charcoal">Collaborative Communication</h3>
            <p className="text-dark-charcoal/60">
              Our process involves rhythmic exchanges: <span className="text-brand-yellow font-bold">Discussion</span>, <span className="text-brand-teal font-bold">Innovation</span>, 
              and <span className="text-brand-teal-mid font-bold">Execution</span>. 
              We ensure every individual contributor is aligned with the executive vision.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-xs font-bold tracking-widest text-dark-charcoal/40 uppercase">
              <li className="flex items-center gap-2 text-dark-charcoal/60"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> Interaction</li>
              <li className="flex items-center gap-2 text-dark-charcoal/60"><div className="w-1.5 h-1.5 rounded-full bg-brand-teal" /> Efficiency</li>
              <li className="flex items-center gap-2 text-dark-charcoal/60"><div className="w-1.5 h-1.5 rounded-full bg-brand-teal-dark" /> Success</li>
              <li className="flex items-center gap-2 text-dark-charcoal/60"><div className="w-1.5 h-1.5 rounded-full bg-brand-teal-mid" /> Evolution</li>
            </ul>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square w-full max-w-sm mx-auto relative">
              <div className="absolute inset-0 bg-brand-teal/20 rounded-full blur-3xl animate-pulse" />
              <img 
                src="/logo1png.png" 
                alt="Brand Identity" 
                className="w-full h-full object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
