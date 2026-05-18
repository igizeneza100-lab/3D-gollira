import { useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Mail, X, FileText, Award, GraduationCap, Instagram } from 'lucide-react';

import cyusaImg from '../assets/Teams/cyusa1.jpg';
import latimImg from '../assets/Teams/Latim.png';
import earlImg from '../assets/Teams/Daniel.jpeg';
import munezeroImg from '../assets/Teams/MUNEZERO.jpeg';
import ronaldImg from '../assets/Teams/Ronald Sabiiti.jpg';
import uwaseImg from '../assets/Teams/Constantin Uwase.jpg';
import philippeImg from '../assets/Teams/Philippe Nkwakuzi.jpg';
import brunoImg from '../assets/Teams/Bruno.jpg';
import bahiziImg from '../assets/Teams/Bahizi-David-Blair-Profile-Picture.png';
import alainImg from '../assets/Teams/alain niganze.jpg';
import aishaImg from '../assets/Teams/AishaKabatesi.png';
import lumbasiImg from '../assets/Teams/Lumbasi Jackline Nake.jpg';


const team = [
  // Top row (left -> right): Cyusa, Earl, Ronald, Philippe, Bahizi
  {
    name: 'Cyusa Benjamin',
    role: 'Founder & Managing Director',
    image: cyusaImg,
    bio: 'Visionary leader driving the strategic direction and growth of Gorilla 3D Studio.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['MBA in Business Administration', 'BA in Management'],
      experience: ['Founder & CEO', 'Strategic Business Leader'],
      skills: ['Leadership', 'Strategic Planning', 'Business Development']
    }
  },
  {
    name: 'Earl Daniel Ssekyondwa',
    role: 'Senior Multimedia & Production Manager',
    image: earlImg,
    bio: 'Leading multimedia production with expertise in creating compelling visual narratives.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['MA in Digital Arts', 'BA in Creative Design'],
      experience: ['Senior Production Manager', 'Multimedia Director'],
      skills: ['Production Management', 'Multimedia Design', 'Creative Direction']
    }
  },
  {
    name: 'Ronald Sabiiti',
    role: 'Operations & Business Development Manager',
    image: ronaldImg,
    bio: 'Driving operational excellence and strategic business growth initiatives.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['MBA in Operations Management', 'Business Development Certification'],
      experience: ['Operations Manager', 'Business Development Lead'],
      skills: ['Operations Management', 'Business Strategy', 'Process Optimization']
    }
  },
  {
    name: 'Philippe Nkwakuzi',
    role: 'Educational Support and Research & Development Consultant',
    image: philippeImg,
    bio: 'Expert in educational innovation and research-driven development strategies.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['PhD in Education', 'MA in Research & Development'],
      experience: ['Education Consultant', 'R&D Specialist'],
      skills: ['Curriculum Development', 'Research Methodology', 'Educational Innovation']
    }
  },
  //Add the  lumbasi jackiline 
  {
    name: 'Lumbasi Jackiline',
    role: 'Public Relations & Brand Communications Consultant',
    image: lumbasiImg,
    bio: 'Expert in shaping brand narratives and managing strategic public relations to enhance corporate identity and market presence.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['MSc in Research Methods', 'Development Studies'],
      experience: ['Research Analyst', 'R&D Consultant'],
      skills: ['Research Design', 'Data Analysis', 'Innovation Management']
    }
  },
  {
    name: 'Bahizi David Blair',
    role: 'IT Systems & Technology Specialist',
    image: bahiziImg,
    bio: 'Highly skilled technology specialist bridging design and functionality.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['BSc in Software Engineering', 'Certified Cloud Architect'],
      experience: ['IT Systems Manager', 'Technology Consultant'],
      skills: ['System Architecture', 'Cloud Infrastructure', 'IT Management']
    }
  },

  {
    name: 'Aisha Kabatesi',
    role: 'Social Media & Digital Communications Consultant',
    image: aishaImg,
    bio: 'Specializing in social media strategy and digital communication campaigns.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['BA in Marketing', 'Digital Communications Certification'],
      experience: ['Project Coordinator', 'Client Relations Manager'],
      skills: ['Project Management', 'Client Communication', 'Team Coordination']
    }
  },

  // Bottom row (left -> right): Lawrance, Munezero, UWASE, IHIRWE, Niganze
  {
    name: 'Lawrance Latim Wathum',
    role: 'Creative Design & Visual Communications Specialist',
    image: latimImg,
    bio: 'Creating impactful visual identities and communication strategies for diverse brands.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['BSc in Graphic Design', 'Visual Communications'],
      experience: ['Creative Director', 'Visual Communications Lead'],
      skills: ['Adobe Suite', 'Brand Identity', 'Visual Strategy']
    }
  },
  {
    name: 'Munezero Emmanuel',
    role: 'Videographer & Video Production Specialist',
    image: munezeroImg,
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
    name: 'UWASE Constantin',
    role: 'Photographer & Visual Storytelling Specialist',
    image: uwaseImg,
    bio: 'Professional photographer with an eye for detail and stunning visual composition.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['BA in Photography', 'Visual Arts Diploma'],
      experience: ['Commercial Photographer', 'Portrait Specialist'],
      skills: ['Studio Photography', 'Image Processing', 'Visual Composition']
    }
  },
  {
    name: 'IHIRWE Bruno',
    role: 'Senior Graphic & Brand Designer',
    image: brunoImg,
    bio: 'Crafting distinctive brand identities and visual experiences that resonate.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['BA in Graphic Design', 'Brand Design Certification'],
      experience: ['Senior Brand Designer', 'Creative Lead'],
      skills: ['Brand Identity', 'Graphic Design', 'Visual Systems']
    }
  },
  {
    name: 'Niganze Alain',
    role: 'Software and Digital Solutions Developer',
    image: alainImg,
    bio: 'Building innovative digital solutions with cutting-edge technologies.',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    cv: {
      education: ['BSc in Computer Science', 'Full Stack Development Certification'],
      experience: ['Software Developer', 'Digital Solutions Architect'],
      skills: ['React/Next.js', 'Node.js/Python', 'Digital Innovation']
    }
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <section id="team" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-main-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-teal font-bold uppercase tracking-widest text-xs sm:text-sm"
            >
              Meet Our Team
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-3 md:mt-4 text-dark-charcoal uppercase leading-[0.9]">
              THE MINDS BEHIND <span className="text-brand-teal">THE VISION</span>
            </h2>
          </div>
          <p className="text-dark-charcoal/40 text-xs sm:text-sm max-w-sm md:text-right font-medium">
            A collective of brilliant creatives and technical experts dedicated to bringing extraordinary ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 md:mt-12">
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
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl sm:rounded-[40px] shadow-2xl mb-4 sm:mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-8">
                  <div className="flex gap-3 sm:gap-4">
                    <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-yellow text-dark-charcoal flex items-center justify-center hover:scale-110 transition-transform">
                      <FileText className="w-4 h-4" />
                    </button>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-teal text-white flex items-center justify-center hover:scale-110 transition-transform">
                      <Linkedin className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-dark-charcoal mb-1">{member.name}</h3>
                <p className="text-brand-teal font-bold text-xs sm:text-sm uppercase tracking-wider mb-4">{member.role}</p>
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
              className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-2xl z-50 overflow-y-auto p-6 sm:p-8"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-dark-charcoal" />
              </button>

              <div className="mt-12 space-y-6 sm:space-y-8">
                <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-brand-teal"
                  />
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-dark-charcoal">{selectedMember.name}</h2>
                    <p className="text-brand-teal font-bold uppercase tracking-wider text-sm">{selectedMember.role}</p>
                  </div>
                  
                  <div className="flex gap-3 sm:gap-4 mt-2">
                    <a href={selectedMember.socials.linkedin} className="p-2 rounded-full bg-gray-100 hover:bg-brand-teal hover:text-white transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={selectedMember.socials.twitter} className="p-2 rounded-full bg-gray-100 hover:bg-brand-teal hover:text-white transition-all flex items-center justify-center">
                      <img 
                        src="https://img.icons8.com/ios/50/000000/twitterx--v2.png" 
                        alt="X" 
                        className="w-5 h-5 transition-all group-hover:invert"
                      />
                    </a>
                    <a href={selectedMember.socials.instagram} className="p-2 rounded-full bg-gray-100 hover:bg-brand-teal hover:text-white transition-all">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 border-b pb-2">
                    <GraduationCap className="text-brand-teal w-5 h-5" /> Education
                  </h3>
                  <ul className="space-y-2">
                    {selectedMember.cv?.education.map((item, i) => (
                      <li key={i} className="text-dark-charcoal/70 list-disc ml-6">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 border-b pb-2">
                    <Award className="text-brand-teal w-5 h-5" /> Core Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.cv?.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 sm:pt-8 border-t">
                  <h3 className="text-base sm:text-lg font-bold mb-3">Professional Bio</h3>
                  <p className="text-sm sm:text-base text-dark-charcoal/80 leading-relaxed italic">
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
