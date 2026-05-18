import { motion } from 'framer-motion';
import { useEffect } from 'react';
import bg3 from '../assets/BG3.png';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-dark-charcoal font-sans selection:bg-brand-teal selection:text-white">
      {/* Simple Hero Section */}
      <section className="relative h-[40vh] overflow-hidden bg-dark-charcoal flex items-center">
        <img 
          src={bg3} 
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
              TERMS OF <span className="text-brand-teal italic">SERVICE</span>
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
              <h2 className="text-xl font-bold text-dark-charcoal mb-4">1. Introduction</h2>
              <p>
                Welcome to Gorilla 3D Studio. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-charcoal mb-4">2. Intellectual Property</h2>
              <p>
                Unless otherwise stated, Gorilla 3D Studio and/or its licensors own the intellectual property rights for all material on Gorilla 3D Studio. All intellectual property rights are reserved. You may access this from Gorilla 3D Studio for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-charcoal mb-4">3. User Obligations</h2>
              <p>
                You must not:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Republish material from Gorilla 3D Studio</li>
                  <li>Sell, rent or sub-license material from Gorilla 3D Studio</li>
                  <li>Reproduce, duplicate or copy material from Gorilla 3D Studio</li>
                  <li>Redistribute content from Gorilla 3D Studio</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-charcoal mb-4">4. Limitation of Liability</h2>
              <p>
                In no event shall Gorilla 3D Studio, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-charcoal mb-4">5. Governing Law</h2>
              <p>
                These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which Gorilla 3D Studio operates, and you submit to the non-exclusive jurisdiction of the state and federal courts located in for the resolution of any disputes.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
