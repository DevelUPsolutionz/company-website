import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Code, Smartphone, Zap } from 'lucide-react';

const BouncingCard = ({ containerRef, mousePos, initialX, initialY, initialVx, initialVy, children, className }) => {
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);
  const v = useRef({ x: initialVx, y: initialVy });
  const cardRef = useRef(null);

  useAnimationFrame(() => {
    if (!containerRef.current || !cardRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const card = cardRef.current.getBoundingClientRect();
    let newX = x.get() + v.current.x;
    let newY = y.get() + v.current.y;
    if (newX <= 0) { newX = 0; v.current.x = Math.abs(v.current.x); }
    if (newX + card.width >= container.width) { newX = container.width - card.width; v.current.x = -Math.abs(v.current.x); }
    if (newY <= 0) { newY = 0; v.current.y = Math.abs(v.current.y); }
    if (newY + card.height >= container.height) { newY = container.height - card.height; v.current.y = -Math.abs(v.current.y); }
    const mouseLocalX = mousePos.current.x - container.left;
    const mouseLocalY = mousePos.current.y - container.top;
    const cardCenterX = newX + card.width / 2;
    const cardCenterY = newY + card.height / 2;
    const dx = cardCenterX - mouseLocalX;
    const dy = cardCenterY - mouseLocalY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 150 && dist > 0) {
      const force = (150 - dist) / 150;
      v.current.x += (dx / dist) * force * 1.5;
      v.current.y += (dy / dist) * force * 1.5;
    }
    const currentSpeed = Math.sqrt(v.current.x ** 2 + v.current.y ** 2);
    const maxSpeed = 6;
    const minSpeed = 1.0;
    if (currentSpeed > maxSpeed) {
      v.current.x = (v.current.x / currentSpeed) * maxSpeed;
      v.current.y = (v.current.y / currentSpeed) * maxSpeed;
    } else if (currentSpeed > minSpeed) {
      v.current.x *= 0.98;
      v.current.y *= 0.98;
    } else if (currentSpeed < minSpeed && currentSpeed > 0.1) {
      v.current.x = (v.current.x / currentSpeed) * minSpeed;
      v.current.y = (v.current.y / currentSpeed) * minSpeed;
    }
    x.set(newX);
    y.set(newY);
  });

  return (
    <motion.div ref={cardRef} style={{ x, y, position: 'absolute', top: 0, left: 0 }} className={`will-change-transform ${className}`}>
      {children}
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => { mousePos.current = { x: e.clientX, y: e.clientY }; };
    const handleTouchMove = (e) => { if (e.touches.length > 0) mousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
    const handleTouchEnd = () => { mousePos.current = { x: -1000, y: -1000 }; };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-36 md:pt-40 lg:pt-48 pb-12 overflow-hidden flex items-center bg-[#f8fafc]">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 w-full">

        {/* Left Content */}
        <div className="flex flex-col items-start text-left space-y-5 md:space-y-8 z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-electric/10 border border-blue-electric/20 text-blue-electric font-semibold text-[10px] md:text-xs uppercase tracking-widest"
          >
            Welcome to the future
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-slate-900 tracking-tighter"
          >
            We Build <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-purple-neon">
              Digital Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-700 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed"
          >
            DevelUp Solutionz delivers award-winning software, dynamic web experiences, and robust architectures designed to scale your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 w-full sm:w-auto"
          >
            <a href="#contact" className="btn-premium flex items-center justify-center text-[11px] md:text-xs px-6 md:px-10 py-3.5 md:py-4 w-full sm:w-auto">
              Let's Talk
            </a>
            <a href="#services" className="btn-outline flex items-center justify-center text-[11px] md:text-xs px-6 md:px-10 py-3.5 md:py-4 w-full sm:w-auto">
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Right Bouncing Container (simplified on mobile) */}
        {!isMobile ? (
          <div ref={containerRef} className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[580px] mt-4 lg:mt-0">
          {/* Central Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-tr from-blue-electric/20 to-purple-neon/20 rounded-full blur-[80px]" />

          {/* Card 1: Gradient */}
          <BouncingCard
            containerRef={containerRef} mousePos={mousePos}
            initialX={10} initialY={10} initialVx={1.2} initialVy={1.5}
            className="w-36 sm:w-44 md:w-52 lg:w-60 bg-gradient-to-br from-blue-electric to-purple-neon border border-white/20 shadow-[0_20px_40px_rgba(139,92,246,0.25)] rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-6 cursor-default"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center text-white mb-2 md:mb-3 pointer-events-none">
              <Code size={16} />
            </div>
            <h4 className="font-bold text-white mb-1.5 select-none text-xs md:text-sm pointer-events-none">Scalable Code</h4>
            <div className="h-1 md:h-1.5 w-full bg-white/30 rounded-full mb-1.5 pointer-events-none" />
            <div className="h-1 md:h-1.5 w-2/3 bg-white/20 rounded-full pointer-events-none" />
          </BouncingCard>

          {/* Card 2: White Glass */}
          <BouncingCard
            containerRef={containerRef} mousePos={mousePos}
            initialX={70} initialY={130} initialVx={-1.5} initialVy={1.2}
            className="w-40 sm:w-48 md:w-56 lg:w-64 bg-white/85 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_rgba(139,92,246,0.12)] rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-6 cursor-default"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-purple-neon/10 flex items-center justify-center text-purple-neon mb-2 md:mb-3 pointer-events-none">
              <Smartphone size={16} />
            </div>
            <h4 className="font-bold text-slate-800 mb-1.5 select-none text-xs md:text-sm pointer-events-none">Mobile App</h4>
            <div className="h-1 md:h-1.5 w-full bg-slate-200 rounded-full mb-1.5 pointer-events-none" />
            <div className="h-1 md:h-1.5 w-3/4 bg-slate-100 rounded-full pointer-events-none" />
          </BouncingCard>

          {/* Card 3: Dark */}
          <BouncingCard
            containerRef={containerRef} mousePos={mousePos}
            initialX={30} initialY={220} initialVx={1.5} initialVy={-1.5}
            className="w-36 sm:w-40 md:w-48 lg:w-52 bg-slate-900/90 backdrop-blur-xl border border-slate-700 shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-6 cursor-default"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-400/20 flex items-center justify-center text-blue-400 mb-2 md:mb-3 pointer-events-none">
              <Zap size={16} />
            </div>
            <h4 className="font-bold text-white mb-1.5 select-none text-xs md:text-sm pointer-events-none">Performance</h4>
            <div className="h-1 md:h-1.5 w-full bg-slate-700 rounded-full mb-1.5 pointer-events-none" />
            <div className="h-1 md:h-1.5 w-2/3 bg-slate-800 rounded-full pointer-events-none" />
          </BouncingCard>
          </div>
        ) : (
          <div className="w-full mt-6 flex flex-col items-center gap-4">
            <div className="w-11/12 bg-gradient-to-br from-blue-electric to-purple-neon rounded-2xl p-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white">
                  <Code size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Scalable Code</h4>
                  <p className="text-white/80 text-xs">Built for growth.</p>
                </div>
              </div>
            </div>

            <div className="w-11/12 bg-white/90 rounded-2xl p-4 shadow-md border border-white/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-neon/10 flex items-center justify-center text-purple-neon">
                  <Smartphone size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Mobile App</h4>
                  <p className="text-slate-600 text-xs">Optimized for small screens.</p>
                </div>
              </div>
            </div>

            <div className="w-11/12 bg-slate-900/90 rounded-2xl p-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-400/20 flex items-center justify-center text-blue-400">
                  <Zap size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Performance</h4>
                  <p className="text-white/80 text-xs">Fast, reliable, efficient.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Huge Borderless Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-electric/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-neon/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Hero;
