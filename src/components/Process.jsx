import { useRef, useState, useEffect } from 'react';
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
  const containerRef = useRef(null);
  const lastNodeRef = useRef(null);
  const [lineHeight, setLineHeight] = useState('100%');

  useEffect(() => {
    const updateLineHeight = () => {
      if (containerRef.current && lastNodeRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const nodeRect = lastNodeRef.current.getBoundingClientRect();
        // Calculate the exact height from the top of the container to the bottom of the last node.
        // We subtract 24 because the line starts at top-6 (24px).
        const exactHeight = nodeRect.bottom - containerRect.top - 24;
        setLineHeight(`${exactHeight}px`);
      }
    };

    updateLineHeight();
    window.addEventListener('resize', updateLineHeight);
    // Optional timeout to ensure layout is complete
    const timeout = setTimeout(updateLineHeight, 100);
    return () => {
      window.removeEventListener('resize', updateLineHeight);
      clearTimeout(timeout);
    };
  }, []);

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
        <div ref={containerRef} className="relative flex flex-col gap-8 max-w-3xl mx-auto mt-12 px-4 sm:px-6">
          {/* Animated Digital Highway Track */}
          <div 
            className="absolute left-[21px] top-6 w-[6px] bg-slate-200/50 rounded-full overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] transition-all duration-300"
            style={{ height: lineHeight }}
          >
            <motion.div
              className="w-full h-[200%]"
              style={{
                backgroundImage: 'repeating-linear-gradient(to bottom, #2563eb 0px, #9333ea 12px, transparent 12px, transparent 24px)',
                backgroundSize: '100% 24px'
              }}
              animate={{ backgroundPosition: ['0px 0px', '0px 24px'] }}
              transition={{ duration: 0.8, ease: "linear", repeat: Infinity }}
            />
          </div>
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
              <div 
                ref={i === steps.length - 1 ? lastNodeRef : null}
                className="absolute left-1.5 top-1.5 w-9 h-9 rounded-full bg-slate-900 border-2 border-blue-electric flex items-center justify-center font-mono text-xs font-black shadow-[0_0_15px_rgba(37,99,255,0.4)] z-10"
              >
                <span className="text-blue-400 text-[10px]">0{i+1}</span>
              </div>

              {/* Card wrapper */}
              <div className="w-full text-left group perspective">
                <div className="relative bg-white border border-slate-200 rounded-xl p-5 md:p-6 transition-all duration-300 transform group-hover:-translate-y-1.5 group-hover:-translate-x-1.5 shadow-[3px_3px_0_0_#2563eb,6px_6px_0_0_#9333ea,9px_9px_0_0_rgba(15,23,42,0.1)] group-hover:shadow-[5px_5px_0_0_#2563eb,10px_10px_0_0_#9333ea,15px_15px_0_0_rgba(15,23,42,0.1)]">
                  {/* Subtle top-left highlight for 3D effect */}
                  <div className="absolute inset-0 rounded-xl border-t-2 border-l-2 border-white/60 pointer-events-none" />
                  
                  <h4 className="text-base sm:text-lg font-black uppercase tracking-wider text-slate-900 mb-2">
                    {step.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
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
