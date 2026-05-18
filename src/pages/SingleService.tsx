import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '../constants/services';
import gsap from 'gsap';
import bg2 from '../assets/BG2.png';
import bg3 from '../assets/BG3.png';
import bg4 from '../assets/BG4.png';
import bg5 from '../assets/BG5.png';

// Using the same detailed data structure but filtered for single page
const detailedServicesData = [
  {
    id: 'creative-design',
    category: "Creative Design",
    title: 'Creative Design & Branding',
    description: 'Logo systems, corporate branding, and marketing materials that shape memorable identities.',
    longDescription: 'We craft cohesive brand systems, visual identities, and marketing assets that align with your strategy and audience. From print to social templates, our design work is made to perform across platforms.',
    features: ['Graphic Design', 'Corporate Branding', 'Marketing Materials', 'Social Media Content'],
    color: 'text-brand-teal',
    bg: 'bg-brand-teal/10',
    accent: 'bg-brand-teal',
    image: bg2
  },
  {
    id: 'animation',
    category: "Animation",
    title: 'Animation & Motion Graphics',
    description: '2D and 3D animation, explainer videos, and motion graphics to communicate with clarity and flair.',
    longDescription: 'Our animation team produces explainer films, product demos, animated infographics and eye-catching campaign content. We combine storytelling, sound design and motion to deliver memorable narratives.',
    features: ['2D Animation', '3D Animation', 'Explainer Videos', 'Motion Graphics'],
    color: 'text-brand-yellow',
    bg: 'bg-brand-yellow/10',
    accent: 'bg-brand-yellow',
    image: bg3
  },
  {
    id: 'production',
    category: "Production",
    title: 'Multimedia Production',
    description: 'Photography, videography, event coverage and post-production for polished visual stories.',
    longDescription: "From location shoots to editing suites, we manage end-to-end production — capturing high-quality footage and delivering polished final assets tailored for broadcast, web and social platforms.",
    features: ['Photography', 'Videography', 'Video Editing', 'Post-Production'],
    color: 'text-brand-teal-mid',
    bg: 'bg-brand-teal-mid/10',
    accent: 'bg-brand-teal-mid',
    image: bg4
  },
  {
    id: 'learning',
    category: "Learning",
    title: 'Educational Content Development',
    description: 'E-learning, instructional design, storyboarding and educational visual content.',
    longDescription: 'We design learner-centered courses and digital learning materials, including storyboards, interactive modules and assessment assets that improve comprehension and retention.',
    features: ['E-learning Content', 'Instructional Design', 'Digital Learning Materials', 'Storyboarding'],
    color: 'text-brand-teal',
    bg: 'bg-brand-teal/10',
    accent: 'bg-brand-teal',
    image: bg5
  },
  {
    id: 'digital',
    category: "Digital",
    title: 'Web & Digital Solutions',
    description: 'Website design, UX, interactive content and platform development.',
    longDescription: 'We build user-focused websites and digital platforms with strong UX and performant code — delivering interactive experiences that convert and engage.',
    features: ['Website Design', 'User Experience Design', 'Interactive Content', 'Digital Platforms'],
    color: 'text-brand-teal',
    bg: 'bg-brand-teal/10',
    accent: 'bg-brand-teal',
    image: bg2
  },
  {
    id: 'strategy',
    category: "Strategy",
    title: 'Consultancy & Research',
    description: 'Creative strategy, communication consultancy and research support to inform better decisions.',
    longDescription: 'Our consultancy services combine research, strategy and creative thinking to help organizations solve problems, communicate effectively and innovate responsibly.',
    features: ['Creative Strategy', 'Communication Consultancy', 'Research Support', 'Innovation Solutions'],
    color: 'text-brand-yellow',
    bg: 'bg-brand-yellow/10',
    accent: 'bg-brand-yellow',
    image: bg3
  },
];

export default function SingleService() {
  const { id } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const service = detailedServicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-charcoal text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-brand-yellow hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center bg-dark-charcoal overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-charcoal/80 via-dark-charcoal/40 to-white" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-brand-yellow transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">All Services</span>
          </Link>
          
          <div className="max-w-4xl">
            <div className={`h-1 rounded-full mb-6 ${service.accent} w-16`} />
            <span className={`inline-block text-[12px] font-bold uppercase tracking-[0.3em] mb-4 ${service.color}`}>
              {service.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[0.95] mb-8">
              {service.title}
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-2xl font-bold bg-dark-charcoal/40 backdrop-blur-sm p-4 rounded-xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold text-dark-charcoal">Overview</h3>
              <p className="text-dark-charcoal/70 text-lg leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            <div className="bg-dark-charcoal/5 p-10 rounded-[2.5rem] border border-dark-charcoal/10">
              <h4 className="text-xl font-display font-bold mb-8 text-dark-charcoal">Core Specializations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${service.color}`} />
                    <span className="text-sm font-bold text-dark-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

             <div className={`p-8 rounded-3xl ${service.bg} border border-dark-charcoal/10 flex flex-col justify-between h-48 shadow-sm`}>
              <h4 className="text-2xl font-display font-bold text-dark-charcoal">Ready to start with {service.category}?</h4>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-dark-charcoal hover:gap-5 transition-all w-fit"
              >
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <div className="aspect-[4/5] rounded-[2.5rem] bg-dark-charcoal/10 overflow-hidden relative border border-dark-charcoal/5 shadow-inner">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="relative py-24 overflow-visible">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
          style={{ backgroundImage: `url(${bg2})`, backgroundAttachment: 'fixed' }}
        />
        <div className="absolute inset-0 bg-dark-charcoal/90 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-16 text-center">Explore More Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.filter(s => s.id !== id).slice(0, 3).map((s) => (
              <Link 
                key={s.id}
                to={`/services/${s.id}`}
                className="group relative h-64 rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end overflow-hidden hover:bg-white/10 transition-colors"
              >
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-yellow group-hover:text-dark-charcoal transition-all">
                  <ArrowRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">{s.name}</h4>
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest group-hover:text-brand-yellow transition-colors">View Details</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
