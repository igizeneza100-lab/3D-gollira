import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../constants/services';
import gsap from 'gsap';
import heroVideo from '../assets/Herovideo.mp4';
import bg3 from '../assets/BG3.png';
import bg4 from '../assets/BG4.png';
import bg5 from '../assets/BG5.png';
import bg2 from '../assets/BG2.png';

const detailedServices = [
  {
    id: 'creative-design',
    category: "Creative Design",
    title: 'Creative Design & Branding',
    description: 'Logo systems, corporate branding, and marketing materials that shape memorable identities.',
    longDescription: 'We craft cohesive brand systems, visual identities, and marketing assets that align with your strategy and audience. From print to social templates, our design work is made to perform across platforms.',
    features: ['Graphic Design', 'Corporate Branding', 'Marketing Materials', 'Social Media Content'],
    image: bg2,
    color: 'text-brand-teal',
    bg: 'bg-brand-teal/10'
  },
  {
    id: 'animation',
    category: "Animation",
    title: 'Animation & Motion Graphics',
    description: '2D and 3D animation, explainer videos, and motion graphics to communicate with clarity and flair.',
    longDescription: 'Our animation team produces explainer films, product demos, animated infographics and eye-catching campaign content. We combine storytelling, sound design and motion to deliver memorable narratives.',
    features: ['2D Animation', '3D Animation', 'Explainer Videos', 'Motion Graphics'],
    image: bg3,
    color: 'text-brand-yellow',
    bg: 'bg-brand-yellow/10'
  },
  {
    id: 'production',
    category: "Production",
    title: 'Multimedia Production',
    description: 'Photography, videography, event coverage and post-production for polished visual stories.',
    longDescription: "From location shoots to editing suites, we manage end-to-end production — capturing high-quality footage and delivering polished final assets tailored for broadcast, web and social platforms.",
    features: ['Photography', 'Videography', 'Video Editing', 'Post-Production'],
    image: bg4,
    color: 'text-brand-teal-mid',
    bg: 'bg-brand-teal-mid/10'
  },
  {
    id: 'learning',
    category: "Learning",
    title: 'Educational Content Development',
    description: 'E-learning, instructional design, storyboarding and educational visual content.',
    longDescription: 'We design learner-centered courses and digital learning materials, including storyboards, interactive modules and assessment assets that improve comprehension and retention.',
    features: ['E-learning Content', 'Instructional Design', 'Digital Learning Materials', 'Storyboarding'],
    image: bg5,
    color: 'text-white',
    bg: 'bg-white/10'
  },
  {
    id: 'digital',
    category: "Digital",
    title: 'Web & Digital Solutions',
    description: 'Website design, UX, interactive content and platform development.',
    longDescription: 'We build user-focused websites and digital platforms with strong UX and performant code — delivering interactive experiences that convert and engage.',
    features: ['Website Design', 'User Experience Design', 'Interactive Content', 'Digital Platforms'],
    image: bg2,
    color: 'text-brand-teal',
    bg: 'bg-brand-teal/10'
  },
  {
    id: 'strategy',
    category: "Strategy",
    title: 'Consultancy & Research',
    description: 'Creative strategy, communication consultancy and research support to inform better decisions.',
    longDescription: 'Our consultancy services combine research, strategy and creative thinking to help organizations solve problems, communicate effectively and innovate responsibly.',
    features: ['Creative Strategy', 'Communication Consultancy', 'Research Support', 'Innovation Solutions'],
    image: bg3,
    color: 'text-brand-yellow',
    bg: 'bg-brand-yellow/10'
  },
];

const servicesList = [
  {
    title: 'Creative Design & Branding',
    items: [
      'Graphic Design',
      'Corporate Branding',
      'Marketing Materials',
      'Social Media Content',
      'Print & Digital Design',
    ],
  },
  {
    title: 'Animation & Motion Graphics',
    items: [
      '2D Animation',
      '3D Animation',
      'Explainer Videos',
      'Motion Graphics & Animated Infographics',
      'GIF Creation',
    ],
  },
  {
    title: 'Multimedia & Production',
    items: [
      'Photography',
      'Videography',
      'Video Editing & Post-Production',
      'Event Coverage',
      'Promotional Videos',
    ],
  },
  {
    title: 'Educational Content',
    items: [
      'E-learning Content',
      'Instructional Design',
      'Digital Learning Materials',
      'Storyboarding',
      'Educational Visual Content',
    ],
  },
  {
    title: 'Web & Digital Solutions',
    items: [
      'Website Design',
      'User Experience Design',
      'Interactive Content',
      'Digital Platforms',
    ],
  },
  {
    title: 'Consultancy & Research',
    items: [
      'Creative Strategy',
      'Communication Consultancy',
      'Research Support',
      'Innovation Solutions',
    ],
  },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.hero-bg', {
        scale: 1.1,
        duration: 2,
        ease: 'power2.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white text-dark-charcoal font-sans selection:bg-brand-teal selection:text-white">
      {/* Dynamic Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] md:h-[80vh] overflow-hidden flex items-center">
        <video 
          src={heroVideo}
          autoPlay 
          loop 
          muted 
          playsInline
          className="hero-bg absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-charcoal/80 via-dark-charcoal/40 to-white" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
          <div className="hero-content space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white leading-[0.95] tracking-tighter">
              PRECISION <br/>
              <span className="text-brand-yellow italic">POWERED</span> <br/>
              SOLUTIONS
            </h1>
            
            <p className="max-w-xl text-white/95 text-base md:text-lg leading-relaxed font-bold">
              We navigate the intersection of technical dominance and creative strength 
              to deliver measurable impact across the digital safari.
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="w-12 h-1 bg-brand-yellow rounded-full" />
              <span className="text-white/60 text-sm font-bold tracking-widest uppercase">Scroll to explore</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List - modern floating grid with BG2 */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        {/* Background image and curved separators using BG2.png */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45 z-0"
          style={{ backgroundImage: `url(${bg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.12)', transformOrigin: 'center' }}
        />
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[150%] h-36 bg-white rounded-b-[50%] z-20" />
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[150%] h-36 bg-white rounded-t-[50%] z-20" />

        <div className="max-w-7xl mx-auto relative z-30">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-dark-charcoal/5 pb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-dark-charcoal tracking-tight">
                OUR <span className="text-brand-teal">SERVICES</span>
              </h2>
              <p className="text-dark-charcoal/60 mt-4 text-base md:text-lg font-medium leading-relaxed">
                A full-service innovation studio tailored to bridge the gap between complex ideas and human connection.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-[100px] font-display font-bold text-dark-charcoal/5 leading-none select-none">
                06+
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative h-full flex flex-col p-10 rounded-[2.5rem] bg-white shadow-lg border border-dark-charcoal/5 transition-all hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:border-brand-teal/20"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#f9f9f9] shadow-sm flex items-center justify-center mb-8 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                    <span className="text-xl font-display font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  
                  <h4 className="text-2xl font-display font-bold mb-6 text-dark-charcoal group-hover:text-brand-teal transition-colors">
                    {group.title}
                  </h4>
                  
                  <ul className="space-y-4 mb-10">
                    {group.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 group/item">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-teal/40 group-hover/item:bg-brand-teal transition-colors shrink-0" />
                        <span className="text-sm font-medium text-dark-charcoal/70 group-hover/item:text-dark-charcoal transition-colors">
                          {it}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate(`/services/${services[i].id}`)}
                    className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-dark-charcoal/40 group-hover:text-brand-teal transition-all group/btn"
                  >
                    View Details 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Reveal */}
      <section className="py-24 space-y-32 bg-white">
        {detailedServices.map((service, index) => (
          <div 
            key={service.title}
            id={service.id}
            className="group/section scroll-mt-32"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div 
                className={cn(
                  "flex flex-col lg:flex-row gap-16 lg:gap-24 items-center",
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-10">
                  <div className="space-y-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 60 }}
                      className={cn("h-1 rounded-full", service.bg.replace('/10', ''))}
                    />
                    <span className={cn("inline-block text-[10px] font-bold uppercase tracking-[0.2em]", service.color)}>
                      {service.category}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-dark-charcoal tracking-tight leading-[0.95]">
                      {service.title.split(' & ').map((part, p) => (
                        <span key={part}>{part}{p === 0 && service.title.includes(' & ') ? ' &' : ''}</span>
                      ))}
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-xl text-dark-charcoal/40 leading-tight font-display font-medium">
                      {service.description}
                    </p>
                    <p className="text-dark-charcoal/60 text-base leading-relaxed max-w-xl">
                      {service.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 pt-8 text-black">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex flex-col gap-2 group/feature">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className={cn("w-5 h-5", service.color)} />
                          <span className="text-sm font-bold tracking-wide">{feature}</span>
                        </div>
                        <div className="w-full h-px bg-dark-charcoal/5 group-hover/feature:bg-brand-teal/20 transition-colors" />
                      </div>
                    ))}
                  </div>

                  <div className="pt-10">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="group flex items-center gap-6"
                    >
                      <div className="relative w-16 h-16 rounded-full border border-dark-charcoal/10 flex items-center justify-center group-hover:bg-dark-charcoal group-hover:border-dark-charcoal transition-all duration-500 overflow-hidden">
                        <ArrowRight className="relative z-10 w-6 h-6 group-hover:text-white group-hover:-rotate-45 transition-all duration-500" />
                        <div className="absolute inset-0 bg-dark-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </div>
                      <div className="space-y-1">
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-dark-charcoal/40 text-left">Ready to start?</span>
                        <span className="block font-display font-bold group-hover:text-brand-teal transition-colors tracking-tight">Discuss your vision</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 w-full">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-[4/5] md:aspect-square group/img"
                  >
                    {/* Decorative blobs */}
                    <div className={cn("absolute -inset-10 rounded-full blur-[100px] opacity-20 transition-opacity group-hover/img:opacity-30", service.bg)} />
                    
                    <div className="relative h-full w-full rounded-[4rem] overflow-hidden bg-dark-charcoal shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover opacity-90 group-hover/img:scale-110 transition-transform duration-1000" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/60 via-transparent to-transparent opacity-60" />
                      
                      {/* Floating accent elements */}
                      <motion.div 
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className={cn("absolute top-12 right-12 w-4 h-4 rounded-full", service.bg.replace('/10', ''))} 
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Modern High-Impact CTA */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative rounded-[4rem] bg-dark-charcoal p-12 md:p-32 text-center overflow-hidden"
          >
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
              <div className="absolute -top-1/2 -right-1/4 w-[80%] h-[150%] bg-brand-teal/30 rounded-full blur-[150px] animate-pulse" />
              <div className="absolute -bottom-1/2 -left-1/4 w-[80%] h-[150%] bg-brand-yellow/20 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 space-y-10">
              <h2 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tighter leading-none">
                READY TO <br /> <span className="text-brand-teal italic">DOMINATE?</span>
              </h2>
              
              <div className="max-w-xl mx-auto space-y-8">
                <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed">
                  Join the Gorilla Studio digital safari. Let's build something that stands the test of time and leaves the competition behind.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="px-12 py-6 bg-brand-yellow text-dark-charcoal font-bold rounded-2xl hover:scale-105 hover:bg-white transition-all shadow-[0_20px_40px_-10px_rgba(255,203,71,0.3)] text-lg"
                  >
                    START YOUR PROJECT
                  </button>
                  <button 
                    onClick={() => navigate('/projects')}
                    className="px-12 py-6 bg-white/5 backdrop-blur-md text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-all text-lg"
                  >
                    VIEW OUR WORK
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
