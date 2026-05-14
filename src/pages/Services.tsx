import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import heroVideo from '../assets/Herovideo.mp4';
import bg3 from '../assets/BG3.png';
import bg4 from '../assets/BG4.png';
import bg5 from '../assets/BG5.png';
import bg2 from '../assets/BG2.png';

const detailedServices = [
  {
    category: "Knowledge & Education",
    title: 'Educational Support Activities',
    description: 'Empowering institutions with innovative curriculum development, e-learning solutions, and instructional design tailored for the modern age.',
    longDescription: 'We specialize in creating immersive learning experiences that bridge the gap between traditional education and digital innovation. Our team develops custom curriculum frameworks, interactive e-learning modules, and specialized training programs designed to foster critical thinking and practical skills.',
    features: ['Curriculum Development', 'E-Learning Platforms', 'Teacher Training', 'Instructional Design'],
    image: bg2,
    color: 'text-brand-teal',
    bg: 'bg-brand-teal/10'
  },
  {
    category: "Strategic Growth",
    title: 'Management Consultancy',
    description: 'Strategic guidance and practical solutions derived from deep research to improve operational performance and organizational effectiveness.',
    longDescription: 'Our consultancy approach is rooted in data-driven insights and human-centered design. We work closely with leadership teams to identify bottlenecks, optimize workflows, and implement scalable strategies that drive sustainable growth in a rapidly changing market landscape.',
    features: ['Operational Optimization', 'Strategic Planning', 'Change Management', 'Performance Analysis'],
    image: bg3,
    color: 'text-brand-yellow',
    bg: 'bg-brand-yellow/10'
  },
  {
    category: "Immersive Experiences",
    title: 'Specialized Design',
    description: 'Harnessing the power of 3D visualization, VR, and multimedia design to create captivating, immersive experiences that bring ideas to life.',
    longDescription: 'From high-fidelity 3D modeling to fully interactive Virtual Reality environments, we push the boundaries of what is possible in digital design. We create visuals that not only look stunning but serve as functional tools for storytelling, architecture, and marketing.',
    features: ['3D Modeling & Animation', 'Virtual Reality (VR)', 'Immersive Multimedia', 'Visual Brand Identity'],
    image: bg4,
    color: 'text-brand-teal-mid',
    bg: 'bg-brand-teal-mid/10'
  },
  {
    category: "Scientific Insight",
    title: 'Research & Development',
    description: 'Advancing human understanding through innovative research in social sciences and humanities, tackling complex cultural challenges head-on.',
    longDescription: 'Our R&D division focuses on solving complex sociotechnical problems through rigorous academic research and creative experimentation. We specialize in anthropology, sociology, and digital humanities to provide context that informs better design and policy choices.',
    features: ['Socio-cultural Research', 'Data Interpretation', 'Technical Whiteboard', 'Innovation Lab'],
    image: bg5,
    color: 'text-white',
    bg: 'bg-white/10'
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
    <div className="min-h-screen bg-[#f2f2f2] text-dark-charcoal">
      {/* Hero Section styled like ContactPage */}
      <section ref={heroRef} className="relative h-[420px] md:h-[480px] overflow-hidden bg-[#1E5F59]">
        <video 
          src={heroVideo}
          autoPlay 
          loop 
          muted 
          playsInline
          className="hero-bg absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5F59]/90 via-[#1E5F59]/75 to-[#1E5F59]/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pb-16 md:pb-20">
          <div className="hero-content space-y-3 text-white">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/85">
              Capabilities & Expertise
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
              PRECISION <span className="text-brand-yellow">POWERED</span> SOLUTIONS
            </h1>
            <p className="max-w-2xl text-white/95 text-sm md:text-base leading-relaxed font-sans font-bold">
              We navigate the intersection of technical dominance and creative strength 
              to deliver measurable impact across the digital safari.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-32 w-[170%] -translate-x-1/2 rounded-[100%] bg-[#f2f2f2] sm:-bottom-24 sm:h-44 sm:w-[140%]" />
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-32">
            {detailedServices.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "flex flex-col lg:flex-row gap-16 items-center",
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <span className={cn("text-xs font-bold uppercase tracking-widest", service.color)}>
                      {service.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-charcoal">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-xl text-dark-charcoal/80 leading-relaxed font-sans italic">
                    "{service.description}"
                  </p>
                  
                  <p className="text-dark-charcoal/60 leading-relaxed">
                    {service.longDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-dark-charcoal">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className={cn("w-5 h-5", service.color)} />
                        <span className="text-sm font-bold tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => navigate('/contact')}
                    className="flex items-center gap-4 group pt-8"
                  >
                    <div className="w-12 h-12 rounded-full border border-dark-charcoal/20 flex items-center justify-center group-hover:bg-brand-teal group-hover:border-brand-teal transition-all">
                      <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                    </div>
                    <span className="font-bold uppercase tracking-widest text-sm text-dark-charcoal group-hover:text-brand-teal transition-colors">
                      Inquire About {service.category.split(' ')[0]}
                    </span>
                  </button>
                </div>

                {/* Decorative Image Side */}
                <div className="flex-1 relative w-full aspect-video lg:aspect-square flex items-center justify-center">
                  <div className={cn("absolute inset-0 rounded-[4rem] blur-[80px] opacity-10", service.bg)} />
                  <div className="relative z-10 w-full h-full rounded-[3rem] shadow-xl flex items-center justify-center group overflow-hidden bg-dark-charcoal">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                    />
                    
                    {/* Floating accents */}
                    <div className={cn("absolute top-12 left-12 w-3 h-3 rounded-full", service.bg.replace('/10', ''))} />
                    <div className={cn("absolute bottom-20 right-20 w-16 h-1 bg-gradient-to-r from-transparent to-dark-charcoal/10", index % 2 === 0 ? "rotate-45" : "-rotate-45")} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-brand-teal p-12 md:p-24 text-center relative overflow-hidden group">
          {/* Animated background shape */}
          <div className="absolute top-0 left-0 w-full h-full bg-brand-teal-dark opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-0" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-dark-charcoal">
              READY TO UNLEASH <br /> YOUR ALPHA POTENTIAL?
            </h2>
            <p className="text-dark-charcoal/70 text-lg max-w-xl mx-auto font-bold">
              Join the gorilla studio digital safari. Let's build something that dominates the competition.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="px-10 py-5 bg-dark-charcoal text-white font-bold rounded-2xl hover:scale-105 hover:bg-black transition-all shadow-2xl"
            >
              START YOUR PROJECT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
