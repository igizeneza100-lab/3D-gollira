import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Approach from '../sections/Approach';
import Portfolio from '../sections/Portfolio';
import Team from '../sections/Team';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Approach />
      <Portfolio />
      <Team />
      {/* Partners Placeholder with Infinite Scroll - Light Themed */}
      <div className="py-20 bg-white border-y border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center text-dark-charcoal">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Trusted by Forward-Thinking Institutions</span>
        </div>
        <div className="flex gap-20 whitespace-nowrap animate-infinite-scroll">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="text-4xl font-display font-black text-black/5 hover:text-brand-teal transition-colors">
              PARTNER STUDIOS
            </div>
          ))}
        </div>
      </div>
    </>
  );
}