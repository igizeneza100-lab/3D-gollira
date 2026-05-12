import { useEffect, useRef } from 'react';
import gsap from 'gsap';
interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gorillaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => onComplete()
      });

      // Cinematic Entry
      tl.fromTo(gorillaRef.current, 
        { scale: 0.2, opacity: 0, filter: 'blur(20px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 2, ease: 'expo.out' }
      )
      .fromTo(textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=1'
      )
      // Pulse effect while loading
      .to(gorillaRef.current, {
        scale: 1.05,
        duration: 2,
        repeat: 1,
        yoyo: true,
        ease: 'sine.inOut'
      })
      // The Grand Opening
      .to(containerRef.current, {
        clipPath: 'circle(0% at 50% 50%)',
        duration: 1.5,
        ease: 'expo.inOut',
      })
      .to(gorillaRef.current, {
        scale: 2,
        opacity: 0,
        filter: 'blur(40px)',
        duration: 1.5,
        ease: 'expo.inOut'
      }, '-=1.5');
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
      style={{ clipPath: 'circle(150% at 50% 50%)' }}
    >
      <div className="relative group perspective-1000">
        {/* Animated Glow behind Gorilla */}
        <div className="absolute inset-0 bg-brand-teal/10 blur-[100px] rounded-full animate-pulse" />
        
        <div ref={gorillaRef} className="relative z-10 w-64 md:w-96 aspect-square flex items-center justify-center">
          {/* Official Gorilla 3D Studio Logo from user request */}
          <img 
            src="/logo1png.png" 
            alt="Gorilla 3D Studio Logo"
            className="w-full h-auto object-contain filter drop-shadow-[0_0_30px_rgba(0,0,0,0.1)] transform-gpu"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      {/* Decorative Cinematic Borders */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100/50 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100/50 to-transparent opacity-50" />
    </div>
  );
}
