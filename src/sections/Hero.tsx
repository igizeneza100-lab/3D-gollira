import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { cn } from '../lib/utils';
import homeCover from '../assets/Home-cover.png';
import heroVideo from '../assets/Herovideo.mp4';

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

      // Ensure elements are visible initially if JS fails or for debugging
      gsap.set('.hero-word, #subtext-content, .cta-btn, .meta-item', { opacity: 1, y: 0 });

      tl.from('.meta-item', {
        opacity: 0,
        x: -50,
        letterSpacing: '0.8em',
        duration: 1.5,
        ease: 'power4.out',
      })
        .from('.hero-word', {
          y: 100,
          opacity: 0,
          skewY: 7,
          stagger: 0.15,
          duration: 1.4,
          ease: 'expo.out',
        }, '-=1')
        .from('#subtext-content', {
          y: 40,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.8')
        .from('.cta-btn', {
          y: 30,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }, '-=0.6')
        .from('.meta-item-footer', {
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
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
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
      </div>
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
            col-span-12 md:col-start-3 md:col-span-8
            flex flex-col justify-center items-center text-center
            gap-6
            pt-20 pb-28
          "
        >
          {/* Subtext */}
          <div
            id="subtext-content"
            ref={subTextRef}
            className="
              max-w-[600px]
              text-[clamp(1rem,1.8vw,1.25rem)]
              text-white
              font-bold
              leading-relaxed
              font-sans
            "
          >
            Unleashing raw creative strength with technical dominance.
            We are the guardians of innovation — transforming consultancy
            and R&amp;D into a cinematic digital safari.
          </div>

          {/* CTAs */}
          <div className="flex flex-row gap-3 flex-wrap justify-center">
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