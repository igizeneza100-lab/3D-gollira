import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import edTechImg from '../assets/project/educational-support-activities-gorilla-3d.png';
import urbanImg from '../assets/project/specialized-3d-design-rwanda.png';
import consultancyImg from '../assets/project/gorilla-studio-management-consultancy.png';
import researchImg from '../assets/project/social-sciences-humanities-research-rwanda.png';
import digitalLearningImg from '../assets/project/innovative-digital-solutions-kigali.png';

const projects = [
  {
    title: 'EdTech Ecosystem',
    category: 'Educational Support',
    image: edTechImg,
    size: 'md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-0'
  },
  {
    title: 'Urban Design Visualization',
    category: 'Specialized Design',
    image: urbanImg,
    size: 'md:col-span-1 md:row-span-1 min-h-[300px] md:min-h-0'
  },
  {
    title: 'Consultancy Insights',
    category: 'Management',
    image: consultancyImg,
    size: 'md:col-span-1 md:row-span-2 min-h-[300px] md:min-h-0'
  },
  {
    title: 'Social Research Lab',
    category: 'R&D',
    image: researchImg,
    size: 'md:col-span-1 md:row-span-1 min-h-[300px] md:min-h-0'
  },
  {
    title: 'Digital Learning Portal',
    category: 'Educational Support',
    image: digitalLearningImg,
    size: 'md:col-span-2 md:row-span-1 min-h-[300px] md:min-h-0'
  }
];

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-teal font-bold uppercase tracking-widest text-sm"
            >
              Our Work
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 text-dark-charcoal">
              CRAFTING <span className="text-brand-teal">LEGACY</span>
            </h2>
          </div>
          <p className="text-dark-charcoal/40 text-sm max-w-sm md:text-right">
            A showcase of our most ambitious projects where creativity meets technical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 md:grid-rows-3 gap-6 md:h-[800px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => navigate('/projects')}
              className={`${project.size} relative group overflow-hidden rounded-[40px] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-teal transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => navigate('/projects')}
            className="px-10 py-4 bg-main-bg border border-black/5 hover:bg-black hover:text-white text-dark-charcoal font-bold rounded-2xl transition-all"
          >
            View All Projects
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="px-10 py-4 bg-brand-yellow hover:bg-black hover:text-white text-dark-charcoal font-bold rounded-2xl transition-all shadow-lg"
          >
            Want to start your project?
          </button>
        </div>
      </div>
    </section>
  );
}
