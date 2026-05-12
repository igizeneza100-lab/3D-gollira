import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Mail, X, FileText, Award, GraduationCap, Instagram } from 'lucide-react';
import gsap from 'gsap';

const team = [
  {
    name: 'Earl Daniel Ssekyondwa',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bio: 'Creative visionary leading the artistic direction and innovative design solutions.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['MA in Digital Arts', 'BA in Creative Design'],
      experience: ['Senior Art Director', 'Brand Strategist'],
      skills: ['Creative Direction', 'Brand Identity', 'Visual Storytelling']
    }
  },
  {
    name: 'CYUSA Benjamin',
    role: 'Animator/Motion Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Specialist in bringing static designs to life through fluid animation and motion graphics.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['BFA in Animation', 'Motion Graphics Certification'],
      experience: ['VFX Artist', '2D/3D Animator'],
      skills: ['After Effects', 'Cinema 4D', 'Character Animation']
    }
  },
  {
    name: 'Munezero Emmanuel',
    role: 'Videographer',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1974&auto=format&fit=crop',
    bio: 'Capturing compelling visual stories through high-quality video production.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['Diploma in Film Production', 'Cinematography Workshop'],
      experience: ['Event Videographer', 'Commercial Film Maker'],
      skills: ['Cinematography', 'Lighting', 'Video Production']
    }
  },
  {
    name: 'Bruno IHIRWE',
    role: 'Photographer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    bio: 'Professional photographer with an eye for detail and stunning visual composition.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['BA in Photography', 'Visual Arts Diploma'],
      experience: ['Commercial Photographer', 'Portait Specialist'],
      skills: ['Studio Photography', 'Image Processing', 'Visual Composition']
    }
  },
  {
    name: 'Lawrance Latim Wathum',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Creating impactful visual identities and graphic solutions for diverse brands.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['BSc in Graphic Design', 'Visual Communications'],
      experience: ['Freelance Graphic Artist', 'Junior Designer'],
      skills: ['Adobe Suite', 'Vector Illustration', 'Layout Design']
    }
  },
  {
    name: 'Ronald Sabiiti',
    role: 'Editor/Post-production specialist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop',
    bio: 'Expert in post-production, weaving together footage into seamless narratives.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['Certificate in Post-Production', 'Film Studies'],
      experience: ['Senior Video Editor', 'Colorist'],
      skills: ['DaVinci Resolve', 'Premiere Pro', 'Sound Design']
    }
  },
  {
    name: 'Bahizi David Blair',
    role: 'Full-stack Developer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Highly skilled developer bridging the gap between design and functionality.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['BSc in Software Engineering', 'Certified Cloud Architect'],
      experience: ['Lead Developer at Fintech Startup', 'System Architect'],
      skills: ['React/Next.js', 'Node.js/Python', 'Cloud Infrastructure']
    }
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <section id="team" className="py-24 px-6 bg-main-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-teal font-bold uppercase tracking-widest text-sm"
          >
            Meet Our Team
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 text-dark-charcoal">
            THE MINDS BEHIND THE <span className="text-brand-teal">VISION</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[40px] shadow-2xl mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-brand-yellow text-dark-charcoal flex items-center justify-center hover:scale-110 transition-transform">
                      <FileText className="w-4 h-4" />
                    </button>
                    <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center hover:scale-110 transition-transform">
                      <Linkedin className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-display font-bold text-dark-charcoal mb-1">{member.name}</h3>
                <p className="text-brand-teal font-bold text-sm uppercase tracking-wider mb-4">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CV Sidebar */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto p-8"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-dark-charcoal" />
              </button>

              <div className="mt-12 space-y-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-brand-teal"
                  />
                  <div>
                    <h2 className="text-3xl font-display font-bold text-dark-charcoal">{selectedMember.name}</h2>
                    <p className="text-brand-teal font-bold uppercase tracking-wider">{selectedMember.role}</p>
                  </div>
                  
                  <div className="flex gap-4 mt-2">
                    <a href={selectedMember.socials.linkedin} className="p-2 rounded-full bg-gray-100 hover:bg-brand-teal hover:text-white transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={selectedMember.socials.twitter} className="p-2 rounded-full bg-gray-100 hover:bg-brand-teal hover:text-white transition-all">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={selectedMember.socials.instagram} className="p-2 rounded-full bg-gray-100 hover:bg-brand-teal hover:text-white transition-all">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 border-b pb-2">
                    <GraduationCap className="text-brand-teal" /> Education
                  </h3>
                  <ul className="space-y-2">
                    {selectedMember.cv?.education.map((item, i) => (
                      <li key={i} className="text-dark-charcoal/70 list-disc ml-6">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 border-b pb-2">
                    <Award className="text-brand-teal" /> Core Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.cv?.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t">
                  <h3 className="text-lg font-bold mb-3">Professional Bio</h3>
                  <p className="text-dark-charcoal/80 leading-relaxed italic">
                    "{selectedMember.bio}"
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
