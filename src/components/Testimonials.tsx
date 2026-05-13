import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import jackieImg from '../assets/testimonials/Jackie-Lumbasi.png';
import chrisImg from '../assets/testimonials/Ishimwe-Chris.png';

const testimonials = [
  {
    name: 'Jacky Lumbasi',
    image: jackieImg,
    text: "Gorilla 3D Studio has consistently demonstrated their versatility and expertise through collaborations with clients spanning various sectors such as technology, healthcare, finance, and lifestyle. Their dedication to delivering high-quality work tailored to each client's needs is commendable.",
  },
  {
    name: 'Ishimwe Chris',
    image: chrisImg,
    text: "Gorilla 3D Studio's exceptional work speaks volumes as they seamlessly blend creativity with technical prowess. Their ability to cater to a broad spectrum of industries, from technology and healthcare to finance and lifestyle, showcases their versatility and commitment to delivering top-notch 3D solutions.",
  }
];

export default function Testimonials() {
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-teal font-bold uppercase tracking-widest text-sm"
            >
              Testimonials
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 text-dark-charcoal uppercase leading-[0.9]">
              WHAT OUR <span className="text-brand-teal">CLIENTS</span> SAY
            </h2>
          </div>
          <p className="text-dark-charcoal/60 text-sm max-w-md md:text-right font-medium leading-relaxed">
            Gorilla 3D Studio has had the privilege of working with a diverse range of clients across industries, including technology, healthcare, finance, and lifestyle. Our client portfolio includes startups, established corporations, nonprofit organizations, and individuals seeking to enhance their public image.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group flex flex-col justify-between relative bg-main-bg rounded-[40px] p-8 md:p-12 border border-black/5 hover:border-black/10 hover:shadow-2xl transition-all duration-500"
            >
              <div>
                <Quote className="w-12 h-12 text-brand-teal/20 mb-6 group-hover:text-brand-teal transition-colors duration-500" />
                <p className="text-lg md:text-xl text-dark-charcoal/80 leading-relaxed font-sans italic mb-10">
                  "{t.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-yellow shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-charcoal font-display text-xl">{t.name}</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Valued Client</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}