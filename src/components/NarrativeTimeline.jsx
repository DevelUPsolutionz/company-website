import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHAPTERS = [
  { id: 'home', num: '00', name: 'Genesis', label: 'THE INCEPTION', desc: 'Out of the void, engineering the future.' },
  { id: 'about', num: '01', name: 'Synthesis', label: 'TRANSFORMATION', desc: 'Turning concepts into structured codebases.' },
  { id: 'services', num: '02', name: 'Capabilities', label: 'HOLOGRAPHIC SYSTEMS', desc: 'Psychology-driven digital solutions.' },
  { id: 'process', num: '03', name: 'The Highway', label: 'CREATIVE VELOCITY', desc: 'Navigating development milestones.' },
  { id: 'contact', num: '04', name: 'Connection', label: 'INITIATE CONTACT', desc: 'Standing by for transmission signal.' },
];

const NarrativeTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [telemetry, setTelemetry] = useState({ x: 0, y: 0, z: 15 });

  useEffect(() => {
    // 1. Intersection Observer for active chapters
    const observers = [];
    CHAPTERS.forEach((chapter, idx) => {
      const el = document.getElementById(chapter.id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveIndex(idx);
              // Update mock telemetry values for coordinate feeling
              const coords = [
                { x: 0, y: 0, z: 15 },      // Hero
                { x: 0, y: -15, z: 15 },    // About
                { x: 10, y: -35, z: 20 },   // Services
                { x: 0, y: -60, z: 30 },    // Process
                { x: 0, y: -135, z: 5 },    // Contact
              ];
              setTelemetry(coords[idx] || { x: 0, y: 0, z: 15 });
            }
          },
          { threshold: 0.3, rootMargin: '-10% 0px -40% 0px' }
        );
        observer.observe(el);
        observers.push({ observer, el });
      }
    });

    // 2. Scroll progress calculator
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Narrative Progress Sidebar - Left (Sticky) */}
      <div aria-hidden="true" className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-6 items-start font-mono pointer-events-none">
        <div className="text-[10px] text-slate-400 uppercase tracking-[0.25em] mb-4">
          SYSTEM_NAV // CHAPTERS
        </div>
        
        <div className="relative flex flex-col gap-4">
          {/* Vertical indicator line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-[1px] bg-slate-200">
            <motion.div 
              className="w-full bg-gradient-to-b from-[#2563FF] via-[#8B5CF6] to-[#6366f1] origin-top"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {CHAPTERS.map((chap, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div key={chap.id} className="flex items-center gap-6 group pointer-events-auto cursor-pointer" onClick={() => handleNav(chap.id)}>
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <motion.div 
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      isActive ? 'bg-[#2563FF]' : 'bg-slate-300 group-hover:bg-slate-500'
                    }`}
                  />
                  {isActive && (
                    <motion.div 
                      layoutId="activeRing"
                      className="absolute inset-0 border border-[#2563FF]/60 rounded-full scale-125"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>

                <div className="flex flex-col select-none">
                  <span className={`text-[10px] uppercase tracking-widest font-black transition-colors duration-300 ${
                    isActive ? 'text-[#2563FF]' : 'text-slate-400 group-hover:text-slate-600'
                  }`}>
                    {chap.num} // {chap.name}
                  </span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.span 
                        initial={{ opacity: 0, x: -10, height: 0 }}
                        animate={{ opacity: 1, x: 0, height: 'auto' }}
                        exit={{ opacity: 0, x: -10, height: 0 }}
                        className="text-[9px] text-slate-500 max-w-[200px] leading-relaxed mt-1 font-light"
                      >
                        {chap.desc}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cybernetic Telemetry overlay - Top Right */}
      <div aria-hidden="true" className="fixed right-8 top-28 z-40 hidden lg:flex flex-col gap-2 font-mono text-[9px] text-slate-400 text-right pointer-events-none">
        <div>COORDS_X: <span className="text-slate-800">{telemetry.x.toFixed(3)}</span></div>
        <div>COORDS_Y: <span className="text-slate-800">{telemetry.y.toFixed(3)}</span></div>
        <div>COORDS_Z: <span className="text-slate-800">{telemetry.z.toFixed(3)}</span></div>
        <div className="w-16 h-[1px] bg-slate-200 ml-auto my-1" />
        <div>SYS_LOAD: <span className="text-[#2563FF]">{(scrollProgress + 1).toFixed(1)}%</span></div>
        <div>RENDER_GL: <span className="text-green-600 font-bold">ACTIVE</span></div>
      </div>

      {/* Scroll instruction indicator - Bottom Centered */}
      <div aria-hidden="true" className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none flex flex-col items-center gap-2 font-mono">
        <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400 animate-pulse">
          {scrollProgress > 95 ? "TRANSMISSION_COMPLETE" : "SCROLL_TO_DESCEND"}
        </span>
        <div className="w-5 h-8 border border-slate-300 rounded-full flex items-start justify-center p-1 bg-white/50 backdrop-blur-sm">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-1.5 bg-[#2563FF] rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default NarrativeTimeline;
