import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { name: "Discovery", desc: "Mapping visual parameters & defining requirements." },
  { name: "Strategy", desc: "Synthesizing project goals & roadmap structure." },
  { name: "Design", desc: "Drafting interactive wireframes & high-fidelity assets." },
  { name: "Development", desc: "Writing clean, scalable code in microsecond runtimes." },
  { name: "Testing", desc: "Auditing neural pathways, UI states, & security." },
  { name: "Deployment", desc: "Spinning up stable production pipelines." },
  { name: "Scaling", desc: "Multiplying server loads to manage global users." }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-transparent relative overflow-hidden">
      <div className="w-full relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 uppercase text-slate-900"
          >
            THE  DIGITAL <br className="sm:hidden" />
            <span className="text-gradient">HIGHWAY</span>
          </motion.h2>
          <p className="text-slate-600 font-light max-w-xl mx-auto text-base md:text-lg px-4">
            Our step-by-step creation sequence, designed for extreme speed and precision.
          </p>
        </div>

        {/* Uniform Left-Aligned Timeline */}
        <div className="relative flex flex-col gap-8 max-w-3xl mx-auto mt-12 px-4 sm:px-6">
          {/* Connector Line */}
          <div className="absolute left-[24px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-electric via-purple-neon to-indigo-500 opacity-30" aria-hidden="true" />

          {steps.map((step, i) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="relative flex gap-4 items-start w-full pl-12"
            >
              {/* Node */}
              <div className="absolute left-1.5 top-1.5 w-9 h-9 rounded-full bg-slate-900 border-2 border-blue-electric flex items-center justify-center font-mono text-xs font-black shadow-[0_0_15px_rgba(37,99,255,0.4)] z-10">
                <span className="text-blue-400 text-[10px]">0{i+1}</span>
              </div>

              {/* Card wrapper */}
              <div className="w-full text-left">
                <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-2xl p-5 hover:border-blue-electric/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                  <h4 className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-900 mb-2">
                    {step.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
