import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LOGS = [
  "SYSTEM INITIALIZATION...",
  "VERIFYING INTEGRITY...",
  "ESTABLISHING SECURE PROTOCOLS...",
  "MOUNTING 3D COGNITIVE ENVIRONMENT...",
  "INITIALIZING NEURAL NETWORKS...",
  "ACTIVATING HOLOGRAPHIC COMPILERS...",
  "SYSTEM READY // INTEGRATION ONLINE."
];

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [currentLogs, setCurrentLogs] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + step, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Match logs to progress
    const logStep = 100 / BOOT_LOGS.length;
    const currentStep = Math.floor(progress / logStep);
    
    if (currentStep > logIndex && logIndex < BOOT_LOGS.length) {
      setCurrentLogs(prev => [...prev, BOOT_LOGS[logIndex]]);
      setLogIndex(currentStep);
    }
  }, [progress, logIndex]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.1,
          filter: "blur(20px)",
          transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }}
        className="fixed inset-0 z-[999] bg-[#f8fafc] flex flex-col items-center justify-center p-4 sm:p-6 select-none overflow-auto"
      >
        {/* Futuristic Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(240,240,245,0)_50%,rgba(240,240,245,0.25)_50%),linear-gradient(90deg,rgba(37,99,255,0.03),rgba(139,92,246,0.02),rgba(99,102,241,0.03))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-45" />
        
        {/* Center Card */}
        <div className="w-full max-w-xl glass-panel relative border border-slate-200/60 bg-white/90 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#2563FF] animate-pulse" />
              <h3 className="font-outfit text-sm font-black uppercase tracking-widest text-[#2563FF]">
                SYSTEM RUNTIME // COGNITIVE DEPLOY
              </h3>
            </div>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest">
              REV: 05.20.26
            </span>
          </div>

          {/* Console logs */}
          <div className="h-32 sm:h-40 overflow-y-auto font-mono text-[10px] text-slate-500 space-y-2 mb-6 pr-2">
            {currentLogs.map((log, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                key={idx}
                className="flex items-start gap-2"
              >
                <span className="text-[#2563FF]/50">&gt;</span>
                <span className={idx === currentLogs.length - 1 ? "text-[#2563FF] font-bold" : ""}>
                  {log}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 uppercase tracking-wider">NEURAL COGNITION STATE</span>
              <span className="text-[#2563FF] font-black">{progress}%</span>
            </div>
            <div className="h-[3px] w-full bg-slate-100 rounded-full overflow-hidden relative border border-slate-200/50">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#2563FF] via-[#8B5CF6] to-[#6366f1] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Action button */}
          <div className="mt-8 flex justify-center">
            {isReady ? (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(37,99,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onComplete}
                className="bg-slate-900 text-white font-black uppercase tracking-widest text-xs py-3 px-6 sm:px-10 rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(15,23,42,0.15)] hover:bg-[#2563FF]"
              >
                ENTER INTERCONNECTED SYSTEM
              </motion.button>
            ) : (
              <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-slate-400 animate-pulse">
                Securing digital footprint...
              </div>
            )}
          </div>
        </div>

        {/* Ambient watermark */}
        <div className="absolute bottom-10 left-10 font-mono text-[9px] text-slate-400 select-none hidden md:block">
          SYS_STATUS: RUNNING // DEV_SYS: ACTIVE // WORKSPACE: d:/DevelUP_solutionz
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
