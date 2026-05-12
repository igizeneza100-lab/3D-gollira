import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Split text for animation
    const textLines = new SplitType(textRef.current!, { types: 'lines,words' });
    
    const ctx = gsap.context(() => {
      // 1. Initial entrance
      const tl = gsap.timeline();
      
      tl.from('.hero-word', {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: 'expo.out',
      })
      .from(subTextRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.8')
      .from('.cta-btn', {
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, '-=0.4');

      // 2. Solar Eclipse / Sunlight Reveal on Scroll
      gsap.to(glowRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        scale: 4,
        opacity: 0.8,
        rotate: 45,
        filter: 'blur(100px)',
      });

      gsap.to('.hero-word', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: -100,
        opacity: 0,
        stagger: 0.01,
        filter: 'blur(10px)',
      });

      // Particle floating effect
      gsap.to('.particle', {
        y: 'random(-100, 100)',
        x: 'random(-50, 50)',
        duration: 'random(3, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          amount: 5,
          from: 'random'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-black">
        {/* Gorilla Continuity Visual */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 blur-2xl scale-150">
          <img 
            src="https://storage.googleapis.com/test-media-gen/a-1/input_file_0.png" 
            alt="" 
            className="w-full h-full object-contain filter grayscale invert brightness-200"
          />
        </div>

        {/* The "Eclipse" Light Source */}
        <div 
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[1px] border-brand-teal/20 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #13a085 0%, transparent 70%)',
            boxShadow: '0 0 150px #13a08544'
          }}
        />
        
        {/* Atmospheric Particles */}
        <div ref={particlesRef} className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className={cn(
                "particle absolute w-1 h-1 rounded-full",
                i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-teal"
              )}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-brand-teal-dark/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 0.6, letterSpacing: '0.2em' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-brand-yellow text-xs sm:text-sm font-bold uppercase mb-6"
        >
          Pioneering the Creative Frontier
        </motion.span>
        
        <h1 
          ref={textRef}
          className="text-5xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.8] tracking-tighter mb-8"
        >
          <div className="overflow-hidden">
            <span className="hero-word block">ALPHA</span>
          </div>
          <div className="overflow-hidden">
             <span className="hero-word block text-brand-teal">POWERED</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-word block">DESIGN</span>
          </div>
        </h1>

        <div 
          ref={subTextRef}
          className="max-w-2xl text-lg text-white/50 mb-10 leading-relaxed font-sans px-4"
        >
          Unleashing raw creative strength with technical dominance. We are the guardians 
           of innovation, transforming consultancy and R&D into a cinematic digital safari.
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="cta-btn px-8 py-4 bg-brand-yellow text-dark-charcoal font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-yellow/20">
            Explore Our World
          </button>
          <button className="cta-btn px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all border-white/20">
            Learn Our Approach
          </button>
        </div>
      </div>

      {/* Hero Footer Component */}
      <div className="absolute bottom-10 left-0 w-full px-12 flex justify-between items-end text-[10px] uppercase tracking-widest text-white/30 font-bold hidden md:flex">
        <div className="flex flex-col gap-1">
          <span>Kacyiru, Kigali</span>
          <span>Rwanda</span>
        </div>
        <div className="h-[1px] bg-white/10 flex-1 mx-12 mb-2" />
        <div className="flex flex-col items-end gap-1">
          <span>Gorilla 3D Studio © 2026</span>
          <span>EST. MMXXIII</span>
        </div>
      </div>
    </section>
  );
}
