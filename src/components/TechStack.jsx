import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  { name: "React", type: "FRONTEND" },
  { name: "Next.js", type: "PRODUCTION" },
  { name: "Node.js", type: "RUNTIME" },
  { name: "Flutter", type: "CROSS-PLATFORM" },
  { name: "Python", type: "INTELLIGENCE" },
  { name: "AWS", type: "INFRASTRUCTURE" },
  { name: "Firebase", type: "DATABASE" },
  { name: "MongoDB", type: "DATASTORE" }
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 bg-slate-900 relative overflow-hidden flex items-center">
      {/* Narrative grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e1326_1px,transparent_1px),linear-gradient(to_bottom,#0e1326_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-25 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        {/* Chapter Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-xs text-[#00f2ff] tracking-[0.4em] uppercase font-black">
            CHAPTER 04 // CORE ORBIT
          </span>
          <span className="w-12 h-[1px] bg-[#00f2ff]/30" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-[1.1] uppercase text-white"
            >
              CORE <br />
              <span className="text-gradient">ORBIT</span>
            </motion.h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl font-light">
              Our framework systems revolve around a centralized, AI-optimized core structure. Designed to maintain extreme data load stability and continuous processing power.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {techs.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="h-20 sm:h-24 md:h-28 bg-slate-800/40 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center border border-slate-700/50 hover:border-[#00f2ff]/40 hover:bg-[#00f2ff]/5 transition-all duration-500 relative group overflow-hidden"
              >
                <span className="font-mono text-[8px] text-slate-500 mb-2 group-hover:text-[#00f2ff]/60 tracking-wider">
                  {tech.type}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-widest text-white group-hover:text-[#00f2ff]">
                  {tech.name}
                </span>
                
                {/* Visual tech line decoration */}
                <div className="absolute top-0 left-0 w-2 h-[1px] bg-white/5 group-hover:bg-[#00f2ff]" />
                <div className="absolute top-0 left-0 w-[1px] h-2 bg-white/5 group-hover:bg-[#00f2ff]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
