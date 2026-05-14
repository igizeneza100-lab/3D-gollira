import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowLeft, Heart, Share2, Tag, Calendar, MapPin, Target, Sparkles, Layout, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import bg4 from '../assets/BG2.png';

// Import project images (reusing the SEO descriptive names)
import edTechImg from '../assets/project/educational-support-activities-gorilla-3d.png';
import urbanImg from '../assets/project/specialized-3d-design-rwanda.png';
import consultancyImg from '../assets/project/gorilla-studio-management-consultancy.png';
import researchImg from '../assets/project/social-sciences-humanities-research-rwanda.png';
import digitalLearningImg from '../assets/project/innovative-digital-solutions-kigali.png';
import brandImg from '../assets/project/brand-identity-specialized-design.png';

const PROJECT_LIST = [
  {
    id: 'edtech',
    title: 'EdTech Ecosystem',
    category: 'Educational Support',
    image: edTechImg,
    description: 'Transforming traditional learning into immersive digital experiences through interactive 3D platforms and AI-driven curriculum.',
    stats: { completion: '2025', team: '12 Experts', result: '+40% Engagement' },
    tags: ['Education', '3D UI', 'AI Integration'],
    icon: Database
  },
  {
    id: 'urban-design',
    title: 'Urban Design Visualization',
    category: 'Specialized Design',
    image: urbanImg,
    description: 'Hyper-realistic architectural visualizations used by urban planners to simulate human-centric city developments in Kigali.',
    stats: { completion: '2024', team: '8 Designers', result: 'Planning Approved' },
    tags: ['Architecture', 'UE5', 'Planning'],
    icon: Layout
  },
  {
    id: 'consultancy',
    title: 'Consultancy Insights',
    category: 'Management',
    image: consultancyImg,
    description: 'Data-driven strategy visualization for regional growth, helping executives see the logic behind complex market shifts.',
    stats: { completion: '2024', team: '5 Strategists', result: '150% ROI' },
    tags: ['Strategy', 'Data Vis', 'Growth'],
    icon: Target
  },
  {
    id: 'research-lab',
    title: 'Social Research Lab',
    category: 'R&D',
    image: researchImg,
    description: 'Exploratory R&D project examining the impact of digital media on social cohesion in suburban communities.',
    stats: { completion: 'Ongoing', team: '4 PhDs', result: '2 Papers Published' },
    tags: ['Research', 'Socio-Digital', 'Analysis'],
    icon: Database
  },
  {
    id: 'learning-portal',
    title: 'Digital Learning Portal',
    category: 'Educational Support',
    image: digitalLearningImg,
    description: 'A national-scale platform providing accessible 3D-assisted training for vocational students across Rwanda.',
    stats: { completion: '2025', team: '10 Devs', result: '5k Users' },
    tags: ['Accessibility', 'React', 'Cloud'],
    icon: Zap
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    category: 'Specialized Design',
    image: brandImg,
    description: 'Crafting the visual language for the next generation of African tech startups.',
    stats: { completion: '2024', team: '3 Creatives', result: 'Global Launch' },
    tags: ['Branding', 'Motion', 'Logo'],
    icon: Sparkles
  }
];

export default function Project() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f2f2f2] pb-24 font-sans">
      {/* Dynamic Header */}
      <section className="relative h-[60vh] flex flex-col justify-end px-6 md:px-24 pb-16 overflow-hidden bg-dark-charcoal text-white">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={edTechImg} 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-brand-teal mb-8 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Studio</span>
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none tracking-tighter text-white"
          >
            OUR <span className="text-white">LEGACY</span> IN<br />EXPLORATION
          </motion.h1>
          
          <div className="flex flex-wrap gap-8 mt-12 items-center">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Location</span>
              <span className="text-brand-yellow font-bold uppercase tracking-tight">Kigali, Rwanda</span>
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Studio Status</span>
              <span className="text-white font-bold uppercase tracking-tight">Active R&D Phase</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Filter / Navigation */}
      <div className="sticky top-0 z-50 bg-[#f2f2f2]/80 backdrop-blur-xl border-b border-black/5 px-6 md:px-24 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-8 overflow-x-auto no-scrollbar pb-1">
            {['All Projects', 'Educational', 'Design', 'Management', 'R&D'].map((cat, i) => (
              <button 
                key={cat} 
                className={`text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-colors ${i === 0 ? 'text-brand-teal' : 'text-dark-charcoal/40 hover:text-dark-charcoal'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            <button className="p-3 bg-white rounded-full border border-black/5 hover:border-brand-teal/20 transition-all">
              <Tag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Project Feed */}
      <section className="mt-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto space-y-32">
          {PROJECT_LIST.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              <div className="flex-1 w-full group">
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[0.98]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                     <button className="px-8 py-3 bg-white text-dark-charcoal font-bold rounded-full flex items-center gap-3 hover:bg-brand-teal hover:text-white transition-colors">
                       Deep Dive <ExternalLink className="w-4 h-4" />
                     </button>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-teal">{project.category}</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold text-dark-charcoal leading-tight">
                  {project.title}
                </h2>
                
                <p className="text-lg text-dark-charcoal/60 leading-relaxed font-sans max-w-xl">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-black/5">
                   {Object.entries(project.stats).map(([label, value]) => (
                     <div key={label}>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-dark-charcoal/30 block mb-1">{label}</span>
                        <span className="text-sm font-bold text-dark-charcoal">{value}</span>
                     </div>
                   ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-main-bg border border-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Project Footer */}
      <section className="mt-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-teal rounded-[60px] p-12 md:p-24 text-white text-center flex flex-col items-center relative overflow-hidden group">
            <img 
              src={bg4} 
              alt="Background" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 relative z-10">HAVE A VISION FOR <br />THE NEXT LEGACY?</h2>
            <Link to="/contact" className="px-12 py-5 bg-brand-yellow text-dark-charcoal font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20 text-lg relative z-10">
              Let's Build It
            </Link>
            
            <div className="mt-16 flex flex-wrap justify-center gap-12 text-white font-bold relative z-10">
               <div className="flex items-center gap-3">
                 <Calendar className="w-5 h-5" /> <span>Next Intake: June 2026</span>
               </div>
               <div className="flex items-center gap-3">
                 <MapPin className="w-5 h-5" /> <span>Kacyiru, Kigali</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
