import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? 'py-2 md:py-4 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.015)]'
          : 'py-3 md:py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="DevelUp Solutionz" 
            className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply" 
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-[0.2em] text-black hover:text-slate-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-premium py-2.5 px-7 text-xs">
            Start Project
          </a>
        </nav>

        <button
          className="md:hidden text-slate-600 hover:text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-menu"
            className="md:hidden overflow-y-auto max-h-[calc(100vh-80px)] bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-lg"
          >
            <ul className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-black uppercase tracking-widest text-black hover:text-slate-700 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="inline-block btn-premium py-3 px-8 text-xs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Project
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
