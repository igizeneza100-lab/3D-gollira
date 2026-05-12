import { motion } from 'motion/react';
import { Users, UserCog, UserCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    role: 'Executive',
    title: 'Strategic Oversight',
    description: 'The CEO ensures brand reputation and strategic policies are executed with precision across all departments.',
    icon: UserCheck,
    color: 'bg-brand-yellow',
    textColor: 'text-dark-charcoal'
  },
  {
    role: 'Middle Management',
    title: 'Operational Guidance',
    description: 'Department heads ensure output supports executive strategies while maintaining team efficiency.',
    icon: UserCog,
    color: 'bg-brand-teal',
    textColor: 'text-white'
  },
  {
    role: 'Individual Contributors',
    title: 'Creative Execution',
    description: 'Specialists crafting content, PR analysis, and technical releases that communicate our core messages.',
    icon: Users,
    color: 'bg-brand-teal-dark',
    textColor: 'text-white'
  },
];

export default function Approach() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-yellow font-bold uppercase tracking-widest text-sm"
          >
            Our Structure
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">
            THE GORILLA <span className="text-brand-teal">ECOSYSTEM</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto mt-6">
            Our hierarchical flow is designed for synergy, where every layer fuels the overall brand success and innovation.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 items-center justify-between">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.role}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 w-full md:w-1/3 flex flex-col items-center"
            >
              <div className="group relative">
                <div className={step.color + " w-24 h-24 rounded-full flex items-center justify-center shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500"}>
                  <step.icon className={step.textColor + " w-10 h-10"} />
                </div>
                {/* Visual pulse effect */}
                <div className={step.color + " absolute inset-0 rounded-full animate-ping opacity-20 -z-10"} />
              </div>

              <div className="mt-8 text-center glass-dark p-8 rounded-3xl border-white/5 hover:border-brand-teal/20 transition-all group hover:-translate-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal opacity-60 mb-2 block">{step.role}</span>
                <h3 className="text-2xl font-bold mb-4 font-display">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {index < steps.length - 1 && (
                    <ArrowRight className="md:hidden w-6 h-6 text-brand-teal opacity-50 mt-4 mx-auto" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infographic Visual Aid */}
        <div className="mt-24 glass-dark rounded-[40px] p-12 border-white/5 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-teal/5 -z-10" />
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-display font-bold">Collaborative Communication</h3>
            <p className="text-white/60">
              Our process involves rhythmic exchanges: <span className="text-brand-yellow font-bold">Discussion</span>, <span className="text-brand-teal font-bold">Innovation</span>, 
              and <span className="text-brand-teal-mid font-bold">Execution</span>. 
              We ensure every individual contributor is aligned with the executive vision.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-xs font-bold tracking-widest text-white/40 uppercase">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" /> Interaction</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-teal" /> Teamwork</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-teal-mid" /> Technology</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white" /> Advice</li>
            </ul>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 perspective-1000">
             <div className="h-48 glass rounded-2xl rotate-y-12 flex flex-col items-center justify-center p-6 text-center border-white/20">
                <div className="text-3xl text-brand-yellow mb-2">⚡</div>
                <div className="font-bold text-xs">EXCHANGE</div>
             </div>
             <div className="h-48 glass rounded-2xl -rotate-y-12 flex flex-col items-center justify-center p-6 text-center border-white/20 translate-y-8">
                <div className="text-3xl text-brand-teal mb-2">💡</div>
                <div className="font-bold text-xs">INFORMATION</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
