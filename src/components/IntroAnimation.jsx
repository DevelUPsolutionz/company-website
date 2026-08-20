import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function IntroAnimation({ onComplete }) {
  useEffect(() => {
    // Keep the logo visible on the white screen for exactly 1.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.img 
        src="/logo-intro.jpg" 
        alt="DevelUP Solutionz Logo"
        className="w-[90vw] max-w-[400px] h-auto object-contain"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.div>
  );
}
