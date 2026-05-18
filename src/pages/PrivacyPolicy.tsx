import { motion } from 'framer-motion';
import { useEffect } from 'react';
import bg5 from '../assets/BG5.png';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-dark-charcoal font-sans selection:bg-brand-teal selection:text-white">
      {/* Simple Hero Section */}
      <section className="relative h-[40vh] overflow-hidden bg-dark-charcoal flex items-center">
        <img 
          src={bg5} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/20 to-dark-charcoal/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tighter">
              PRIVACY <span className="text-brand-teal italic">POLICY</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto py-24 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-12 text-dark-charcoal/70 leading-relaxed text-lg">
            <section>
              <h2 className="text-xl font-bold text-dark-charcoal mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us. This may include your name, email address, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-charcoal mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Gorilla 3D Studio and our users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-charcoal mb-4">3. Information Sharing</h2>
              <p>
                We do not share your personal information with companies, organizations, or individuals outside of Gorilla 3D Studio except in the following cases: with your consent, for external processing, or for legal reasons.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-charcoal mb-4">4. Data Security</h2>
              <p>
                We work hard to protect Gorilla 3D Studio and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-charcoal mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete the personal information we have on you. Whenever made possible, you can access, update or request deletion of your personal information directly within your account settings section.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}