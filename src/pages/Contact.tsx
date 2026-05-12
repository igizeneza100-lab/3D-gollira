import { FormEvent, useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const FAQ_ITEMS = [
  {
    question: 'What industries does Gorilla 3D Studio specialize in?',
    answer: 'We specialize in high-impact digital solutions for Educational Support, Management Consultancy, Specialized Design, and R&D in Social Sciences and Humanities.',
  },
  {
    question: 'How do you approach a new 3D or design project?',
    answer: 'Every project starts with our "Alpha Strategy"—a deep dive into your goals followed by rapid prototyping and technical precision to ensure a dominant market presence.',
  },
  {
    question: 'Can you help with educational content and research?',
    answer: 'Yes, our dedicated research lab focuses on developing innovative educational tools and experimental R&D projects tailored to academic and professional growth.',
  },
  {
    question: 'Where is Gorilla 3D Studio located?',
    answer: 'Our main innovation hub is located in Kacyiru, Kigali, though we collaborate with visionary partners and clients globally on digital transformation initiatives.',
  },
  {
    question: 'How can I start a collaboration with your team?',
    answer: 'Simply fill out the contact form above with your inquiry type, or reach out via email. Our project leads will respond within 24 hours to schedule a strategy session.',
  },
];

const INITIAL_FORM: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate request so the page has a complete submit UX before backend integration.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setForm(INITIAL_FORM);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section ref={heroRef} className="relative h-[420px] md:h-[480px] overflow-hidden bg-[#1E5F59]">
        <img
          src="/contactimg.jpg"
          alt="Contact Gorilla 3D Studio"
          className="hero-bg absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E5F59]/90 via-[#1E5F59]/75 to-[#1E5F59]/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pb-16 md:pb-20">
          <div className="hero-content space-y-3 text-white">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/85">Contact Us</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">Let&apos;s Build Something Extraordinary</h1>
            <p className="max-w-2xl text-white/95 text-sm md:text-base">
              Reach out to discuss your next 3D project, digital innovation, or research collaboration. We're here to transform your vision into reality.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-32 w-[170%] -translate-x-1/2 rounded-[100%] bg-white sm:-bottom-24 sm:h-44 sm:w-[140%]" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 md:pt-10 md:pb-16 space-y-14">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.25em] text-[#1E5F59]">Innovation Team</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch Directly</h2>
              <p className="text-muted-foreground max-w-lg">
                Share your project vision and our team will respond within 24 hours with the right strategy for your digital transformation.
              </p>
            </div>

            <div className="rounded-2xl bg-card p-6 md:p-8 space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-[#1E5F59]" />
                <div>
                  <h2 className="font-semibold">Studio Location</h2>
                  <p className="text-muted-foreground">Kacyiru, Kigali, Rwanda</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 text-[#1E5F59]" />
                <div>
                  <h2 className="font-semibold">Contact</h2>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">
                      Phone: <a href="tel:+250783723705" className="hover:text-[#1E5F59] transition-colors">+250 783 723 705</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-[#1E5F59]" />
                <div>
                  <h2 className="font-semibold">Email</h2>
                  <p className="text-muted-foreground">info@gorilla3dstudio.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-card p-6 md:p-8"
          >
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Send a Message</h2>

            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm"
              >
                Thank you. Your message has been received.
              </motion.div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Full name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Your full name"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone number</label>
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="+250 7XX XXX XXX"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  className="w-full min-h-36 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={form.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us what you need..."
                  required
                />
              </div>

              <button type="submit" className="w-full md:w-auto px-8 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Message'}
              </button>
            </form>
          </motion.div>
        </section>

        <section className="rounded-2xl bg-card p-3 md:p-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight px-3 md:px-4 pt-3 md:pt-4 pb-4">Our Studio Location</h2>
            <iframe
              title="Gorilla 3D Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5193!2d30.0937!3d-1.9445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTYnNDAuMiJTIDMwwrAwNSczNy4zIkU!5e0!3m2!1sen!2srw!4v1234567890"
              className="w-full h-[520px] rounded-xl border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="rounded-2xl bg-card p-6 md:p-8">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#1E5F59]">Support</p>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => (
              <motion.details 
                key={faq.question} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-xl px-4 py-3 open:bg-muted/40"
              >
                <summary className="cursor-pointer list-none font-medium flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-[#1E5F59] transition-transform group-open:rotate-45">+</span>
                 </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}