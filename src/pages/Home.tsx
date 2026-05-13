import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Approach from '../sections/Approach';
import Portfolio from '../sections/Portfolio';
import Team from '../sections/Team';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Approach />
      <Portfolio />
      <Team />
      <Testimonials />
      <Partners />
    </>
  );
}