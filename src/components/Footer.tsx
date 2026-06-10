import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../constants/services';

const XIcon = (props: any) => (
  <img 
    src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v2.png" 
    alt="X" 
    className={props.className}
  />
);

const TikTokIcon = (props: any) => (
  <img 
    src="https://img.icons8.com/ios-filled/50/FFFFFF/tiktok--v1.png" 
    alt="TikTok" 
    className={props.className}
  />
);

const NAV_COLS = [
  {
    heading: 'Navigate',
    links: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/projects' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: services.map(s => ({ name: s.name, path: s.href })),
  },
  {
    heading: 'Legal',
    links: [
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { name: 'About Us', path: '/' },
      { name: 'Our Work', path: '/projects' },
      { name: 'Careers', path: '#' },
      { name: 'Contact', path: '/contact' },
    ],
  },
];

const SOCIALS = [
  { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/gorilla3dstudio?igsh=MXUzaTN2eWVpNXVleg%3D%3D&utm_source=qr' },
  { Icon: Facebook,  label: 'Facebook',  href: '#'  },
  { Icon: XIcon,     label: 'X / Twitter', href: 'https://x.com/gorilla3dstudio' },
  { Icon: Linkedin,  label: 'LinkedIn',   href: '#'   },
  { Icon: Youtube,   label: 'YouTube',    href: 'https://youtube.com/@kezahub?si=ntphWCO71X8RA-rM'    },
  { Icon: TikTokIcon, label: 'TikTok',     href: 'https://www.tiktok.com/@kezahub?lang=en' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

    try {
      const response = await fetch(`${API_BASE}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{ background: '#0c2b22' }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-16 pb-10">

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-0 mb-12">

          {/* ── Left: 4 Nav Columns ─────────────────── */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 lg:w-[58%] lg:pr-12">
            {NAV_COLS.map((col, ci) => (
              <motion.div
                key={col.heading}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.06 }}
                className="flex-1 min-w-[130px]"
              >
                <h4 className="text-[15px] font-bold text-white mb-5 tracking-tight">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-[14px] text-white/55 hover:text-white transition-colors duration-150 block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* ── Right: Newsletter + Socials ─────────── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:w-[42%] lg:pl-12 lg:border-l border-white/10 flex flex-col gap-8"
          >
            {/* Newsletter */}
            <div>
              <p className="text-[15px] font-bold text-white mb-5 leading-snug">
                Sign up to get our latest work &amp; insights
              </p>

              {/* Email + Subscribe side-by-side */}
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={status === 'success' ? "Subscribed!" : "Your Email Address"}
                  disabled={status === 'loading' || status === 'success'}
                  className="
                    flex-1 min-w-0
                    px-4 py-3
                    bg-white text-[#0c2b22]
                    rounded-xl text-sm font-medium
                    placeholder:text-[#0c2b22]/40
                    focus:outline-none border-0
                    disabled:opacity-70
                  "
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="
                    shrink-0 px-5 py-3
                    bg-brand-yellow text-dark-charcoal
                    text-sm font-bold rounded-xl
                    hover:scale-[1.03] active:scale-[0.97]
                    transition-transform duration-150
                    whitespace-nowrap
                    disabled:opacity-50
                  "
                >
                  {status === 'loading' ? '...' : status === 'success' ? 'Joined' : 'Subscribe'}
                </button>
              </form>
              {status === 'error' && (
                <p className="text-red-400 text-xs mt-2">Something went wrong. Try again.</p>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 items-center">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-150"
                >
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </a>
              ))}
            </div>

            <p className="text-xs font-display font-bold italic text-brand-yellow/70 leading-snug max-w-[260px] mt-auto hidden lg:block">
              Gorilla 3D Studio — Crafting Experiences. Creating Impact.
            </p>
          </motion.div>
        </div>

        {/* ─── Bottom Bar ─────────────────────────────── */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[13px] text-white/45">
            © {currentYear} Gorilla 3D Studio. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/terms"
              className="text-[13px] text-white/45 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-[13px] text-white/45 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}