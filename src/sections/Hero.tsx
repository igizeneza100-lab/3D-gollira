import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { cn } from '../lib/utils';
import homeCover from '../assets/Home-cover.png';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    new SplitType(textRef.current!, { types: 'lines,words' });

    const ctx = gsap.context(() => {
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
          ease: 'power3.out',
        }, '-=0.8')
        .from('.cta-btn', {
          scale: 0.8,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: 'back.out(1.7)',
        }, '-=0.4')
        .from('.meta-item', {
          opacity: 0,
          y: 10,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.4');

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

      gsap.to('.particle', {
        y: 'random(-100, 100)',
        x: 'random(-50, 50)',
        duration: 'random(3, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { amount: 5, from: 'random' },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-[#0a0a0a]"
    >
      {/* ─── Background Layer ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40">
          <img
            src={homeCover}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Eclipse glow */}
        <div
          ref={glowRef}
          className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[480px] h-[480px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #13a085 0%, transparent 70%)',
            boxShadow: '0 0 150px #13a08530',
          }}
        />

        {/* Particles */}
        <div ref={particlesRef} className="absolute inset-0 opacity-25">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={cn(
                'particle absolute w-1 h-1 rounded-full',
                i % 2 === 0 ? 'bg-brand-yellow' : 'bg-brand-teal'
              )}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />
      </div>

      {/* ─── Main Content Grid ─────────────────────────── */}
      {/*
        Layout uses a 12-col CSS grid so every element snaps to the
        same left edge. Content spans cols 2–8 on desktop, full on mobile.
        Vertical rhythm is handled with gap-based flex rather than
        arbitrary margin overrides.
      */}
      <div
        className="
          relative z-10 h-full
          grid grid-cols-12
          px-6 md:px-0
        "
      >
        {/* Left padding column: 1 col on desktop, 0 on mobile */}
        <div className="hidden md:block col-span-1" />

        {/* Content column */}
        <div
          className="
            col-span-12 md:col-span-7
            flex flex-col justify-center
            gap-6
            pt-20 pb-28
          "
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 0.6, letterSpacing: '0.2em' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="
              meta-item
              text-brand-yellow text-[10px] sm:text-xs
              font-bold uppercase tracking-[0.25em]
              block
            "
          >
            Pioneering the Creative Frontier
          </motion.span>

          {/* Headline */}
          <h1
            ref={textRef}
            className="
              font-display font-bold
              text-[clamp(2.5rem,7vw,5rem)]
              leading-[0.88] tracking-[-0.03em]
              m-0 p-0
            "
          >
            <div className="overflow-hidden">
              <span className="hero-word block text-white">ALPHA POWERED</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-word block text-brand-teal">DESIGN</span>
            </div>
          </h1>

          {/* Subtext */}
          <div
            ref={subTextRef}
            className="
              max-w-[480px]
              text-[clamp(0.875rem,1.5vw,1.0625rem)]
              text-white/50
              leading-relaxed
              font-sans
            "
          >
            Unleashing raw creative strength with technical dominance.
            We are the guardians of innovation — transforming consultancy
            and R&amp;D into a cinematic digital safari.
          </div>

          {/* CTAs */}
          <div className="flex flex-row gap-3 flex-wrap">
            <button
              className="
                cta-btn
                px-7 py-3.5
                bg-brand-yellow text-dark-charcoal
                text-sm font-bold tracking-wide
                rounded-xl
                hover:scale-[1.03] active:scale-[0.97]
                transition-transform duration-150
                shadow-lg shadow-brand-yellow/20
                whitespace-nowrap
              "
            >
              Explore Our World
            </button>
            <button
              className="
                cta-btn
                px-7 py-3.5
                bg-white/5 text-white
                text-sm font-bold tracking-wide
                rounded-xl
                border border-white/15
                hover:bg-white/10 active:scale-[0.97]
                transition-all duration-150
                whitespace-nowrap
              "
            >
              Learn Our Approach
            </button>
          </div>
        </div>
      </div>

      {/* ─── Footer Bar ────────────────────────────────── */}
      {/*
        Pinned to the bottom, sharing the same 12-col grid so the
        left text aligns perfectly with the headline above.
      */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          hidden md:grid grid-cols-12
          px-0 pb-8
          text-[10px] uppercase tracking-[0.18em]
          text-white/25 font-bold
        "
      >
        {/* Left padding — matches content column start */}
        <div className="col-span-1" />

        {/* Left label */}
        <div className="col-span-2 flex flex-col gap-1 justify-end meta-item">
          <span>Kacyiru, Kigali</span>
          <span>Rwanda</span>
        </div>

        {/* Divider line — fills middle */}
        <div className="col-span-6 flex items-end pb-[3px]">
          <div className="w-full h-px bg-white/10" />
        </div>

        {/* Right label */}
        <div className="col-span-2 flex flex-col items-end gap-1 justify-end meta-item">
          <span>Gorilla 3D Studio © 2026</span>
          <span>EST. MMXXIII</span>
        </div>

        {/* Right padding */}
        <div className="col-span-1" />
      </div>
    </section>
  );
}