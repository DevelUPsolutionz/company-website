import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CharacterController = () => {
  const { scrollYProgress } = useScroll();
  
  // Map scroll progress to different animation states
  // 0-0.2: Hero (Hello + Laptop)
  // 0.2-0.4: Transition (Peeking)
  // 0.4-0.7: Middle (Pulling details)
  // 0.7-1.0: Contact (Phone call)
  
  const [activeState, setActiveState] = useState('hello');

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest < 0.2) setActiveState('hello');
      else if (latest < 0.45) setActiveState('peek');
      else if (latest < 0.75) setActiveState('pull');
      else setActiveState('call');
    });
  }, [scrollYProgress]);

  // Position and Scale based on scroll
  const x = useTransform(scrollYProgress, [0, 0.2, 0.45, 0.75, 1], ["60%", "90%", "-10%", "70%", "80%"]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.45, 0.75, 1], ["60%", "50%", "30%", "40%", "70%"]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.45, 1], [1.2, 0.8, 1.5, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 0.45, 0.75], [0, 10, -5]);

  const [show, setShow] = useState(true);

  useEffect(() => {
    const update = () => setShow(window.innerWidth >= 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{
        left: x,
        top: y,
        scale: scale,
        rotate: rotate,
        x: "-50%",
        y: "-50%",
      }}
    >
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        {/* The Boy Character (Styled SVG) */}
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Head */}
          <motion.circle 
            cx="100" cy="60" r="30" 
            fill="#FFDBAC" 
            animate={activeState === 'hello' ? { y: [0, -5, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          {/* Hair */}
          <path d="M70 50 Q100 20 130 50 L135 60 Q100 40 65 60 Z" fill="#2D1B00" />
          
          {/* Eyes */}
          <g fill="#000">
            <circle cx="90" cy="60" r="2" />
            <circle cx="110" cy="60" r="2" />
          </g>

          {/* Body */}
          <rect x="80" y="90" width="40" height="60" rx="10" fill="#2563FF" />
          
          {/* Arms - HELLO / TYPING */}
          {activeState === 'hello' && (
            <g>
              {/* Right Arm Waving */}
              <motion.path 
                d="M120 100 L150 70" 
                stroke="#FFDBAC" strokeWidth="8" strokeLinecap="round"
                animate={{ rotate: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                style={{ transformOrigin: "120px 100px" }}
              />
              {/* Left Arm on Laptop */}
              <path d="M80 100 L60 120" stroke="#FFDBAC" strokeWidth="8" strokeLinecap="round" />
              {/* Laptop */}
              <motion.g animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.5 }}>
                <rect x="40" y="120" width="40" height="5" fill="#333" />
                <rect x="40" y="100" width="5" height="20" fill="#444" transform="rotate(-20 40 120)" />
              </motion.g>
            </g>
          )}

          {/* PEEKING animation */}
          {activeState === 'peek' && (
            <motion.g initial={{ x: 50 }} animate={{ x: 0 }}>
              {/* Head peeking */}
              <circle cx="160" cy="100" r="25" fill="#FFDBAC" />
              <path d="M140 85 Q160 65 180 85" fill="#2D1B00" />
              <circle cx="155" cy="100" r="2" fill="#000" />
              <circle cx="165" cy="100" r="2" fill="#000" />
            </motion.g>
          )}

          {/* PULLING animation */}
          {activeState === 'pull' && (
            <g>
              {/* Arms pulling rope/content */}
              <motion.path 
                d="M80 110 L20 110" 
                stroke="#FFDBAC" strokeWidth="8" strokeLinecap="round"
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              <motion.path 
                d="M120 110 L180 110" 
                stroke="#FFDBAC" strokeWidth="8" strokeLinecap="round"
                animate={{ x: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </g>
          )}

          {/* CALLING animation */}
          {activeState === 'call' && (
            <g>
              {/* Arm holding phone */}
              <motion.path 
                d="M120 100 L135 70" 
                stroke="#FFDBAC" strokeWidth="8" strokeLinecap="round"
              />
              {/* Phone */}
              <rect x="130" y="60" width="10" height="20" rx="2" fill="#111" />
              <motion.circle 
                cx="100" cy="70" r="5" fill="#FFDBAC"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </g>
          )}
        </svg>

        {/* Speech Bubble */}
        {activeState === 'hello' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-navy px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap shadow-xl"
          >
            Hi! I'm your Dev Assistant 👋
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CharacterController;
