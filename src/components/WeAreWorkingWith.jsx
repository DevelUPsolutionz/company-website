import React from 'react';
import { motion } from 'framer-motion';

const collaborations = [
  {
    name: 'AADAI',
    url: 'https://wearaadai.vercel.app/',
    logo: '/aadai-logo.webp',
    fallbackLogo: '/aadai-logo.png',
    alt: 'AADAI Fashion Brand - Official Client of DevelUp Solutionz',
    bg: 'bg-[#111111]',
    borderHover: 'group-hover:border-yellow-600/30',
    textHover: 'group-hover:text-yellow-600',
    imgPadding: '',
    imgFit: 'object-cover',
  },
  {
    name: 'JOHANNA BRIGHT MENTORS',
    url: 'https://www.johannabrightmentors.com/',
    logo: '/johannabrightmentors-logo.png',
    fallbackLogo: 'https://via.placeholder.com/150?text=Logo',
    alt: 'Johanna Bright Mentors - Official Client of DevelUp Solutionz',
    bg: 'bg-white',
    borderHover: 'group-hover:border-red-600/30 border-slate-100',
    textHover: 'group-hover:text-red-700',
    imgPadding: 'p-3 md:p-4',
    imgFit: 'object-contain',
  },
];

const WeAreWorkingWith = () => {
  return (
    <section id="collaborations" className="py-10 md:py-16 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl md:text-4xl font-black mb-12 text-slate-900"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-purple-neon">Collaborations</span>
        </motion.h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {collaborations.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4"
              >
                <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full ${client.bg} shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden border-4 border-transparent ${client.borderHover} transition-all duration-300`}>
                  <img 
                    src={client.logo} 
                    alt={client.alt} 
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full ${client.imgFit} ${client.imgPadding} transition-transform duration-500 group-hover:scale-110`}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = client.fallbackLogo;
                    }}
                  />
                </div>
                <span className={`text-sm font-bold text-slate-500 tracking-wider uppercase ${client.textHover} transition-colors`}>
                  {client.name}
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeAreWorkingWith;
