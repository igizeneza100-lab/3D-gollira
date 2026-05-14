import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Phone, MapPin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import heroVideo from '../assets/Herovideo.mp4';

const TikTokIcon = (props: any) => (
  <img 
    src="https://img.icons8.com/ios-filled/50/FFFFFF/tiktok--v1.png" 
    alt="TikTok" 
    className={props.className}
  />
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"] as const
  });

  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.8]);
  const glowRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
        <motion.div
          style={{
            scale: glowScale,
            opacity: glowOpacity,
            rotate: glowRotate,
            background: 'radial-gradient(circle, #13a085 0%, transparent 70%)',
            boxShadow: '0 0 150px #13a08530',
          }}
          className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[480px] h-[480px] rounded-full"
        />

        {/* Particles */}
        <div className="absolute inset-0 opacity-25">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={cn(
                'absolute w-1 h-1 rounded-full',
                i % 2 === 0 ? 'bg-brand-yellow' : 'bg-brand-teal'
              )}
              initial={{ 
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                y: 0,
                x: 0
              }}
              animate={{ 
                y: [0, Math.random() * 200 - 100],
                x: [0, Math.random() * 100 - 50]
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      {/* ─── Social Sidebar (Desktop) ──────────────────── */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-20"
      >
        {[
          { icon: Facebook, href: 'https://www.facebook.com/gorilla3dstudio' },
          { icon: Linkedin, href: 'https://www.linkedin.com/company/gorilla3dstudio' },
          { icon: Instagram, href: 'https://www.instagram.com/gorilla3dstudio?igsh=MXUzaTN2eWVpNXVleg%3D%3D&utm_source=qr' },
          { icon: TikTokIcon, href: 'https://www.tiktok.com/@kezahub?lang=en' },
          { icon: Phone, href: 'tel:+250783723705' }
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-yellow hover:text-dark-charcoal transition-all duration-300 hover:scale-110"
          >
            <item.icon className="w-4 h-4" />
          </a>
        ))}
      </motion.div>

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
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, x: -50, letterSpacing: '0.8em' }}
            animate={{ opacity: 0.6, x: 0, letterSpacing: '0.2em' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="
              text-brand-yellow text-[10px] sm:text-xs
              font-bold uppercase
              block
            "
          >
            Welcome to
          </motion.span>

          {/* Headline */}
          <motion.h1
            style={{ y: heroY, opacity: heroOpacity }}
            className="
              font-display font-bold
              text-[clamp(2.5rem,7vw,5rem)]
              leading-[0.88] tracking-[-0.03em]
              m-0 p-0
            "
          >
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: 100, opacity: 0, skewY: 7 }}
                animate={{ y: 0, opacity: 1, skewY: 0 }}
                transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                className="block text-white"
              >
                GORILLA 3D
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: 100, opacity: 0, skewY: 7 }}
                animate={{ y: 0, opacity: 1, skewY: 0 }}
                transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1], delay: 0.35 }}
                className="block text-brand-teal"
              >
                STUDIO
              </motion.span>
            </div>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
            className="
              max-w-[600px]
              text-[clamp(1rem,1.8vw,1.25rem)]
              text-white
              font-bold
              leading-relaxed
              font-sans
            "
          >
            Dedicated to providing comprehensive solutions through specialized design, management consultancy, and innovative research & development.
          </motion.div>

          {/* CTAs */}
          <div className="flex flex-row gap-3 flex-wrap justify-center">
            <motion.button
              onClick={() => navigate('/projects')}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275], delay: 1 }}
              className="
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
            </motion.button>
            <motion.button
              onClick={() => navigate('/services')}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275], delay: 1.15 }}
              className="
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
            </motion.button>
          </div>
        </div>
      </div>

      {/* ─── Bottom Contact Bar ────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="
          absolute bottom-0 left-0 right-0 z-20
          px-4 md:px-8 pb-6 md:pb-8
          flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12
          text-[11px] md:text-sm text-white/90 font-medium tracking-wide
        "
      >
        <a href="#" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-brand-yellow" />
          <span>KG 684 St, Kigali, Kacyiru</span>
        </a>
        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
        <a href="tel:+250782750432" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
          <Phone className="w-4 h-4 md:w-5 md:h-5 text-brand-yellow" />
          <span>+250 782 750 432 / +250 788 307 952</span>
        </a>
        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
        <a href="mailto:info@gorilla3d.rw" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
          <Mail className="w-4 h-4 md:w-5 md:h-5 text-brand-yellow" />
          <span>info@gorilla3d.rw</span>
        </a>
      </motion.div>
    </section>
  );
}