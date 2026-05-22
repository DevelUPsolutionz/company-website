import React from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Services', 'Why Us', 'Contact'];
  const services = ['Web Development', 'Mobile Apps', 'UI/UX Design', 'AI Integration', 'SaaS Platforms', 'Cloud Solutions'];

  return (
    <footer className="relative pt-20 md:pt-32 pb-10 overflow-hidden bg-blue-200">
      {/* Dynamic Sea Waves Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] h-[50px] md:h-[120px]">
        {/* Layer 1 - Slowest, lowest opacity */}
        <svg
          className="absolute left-0 top-0 block w-[300%] max-w-none h-full animate-wave-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3600 150"
          preserveAspectRatio="none"
        >
          <path
            className="fill-slate-100/40"
            d="M 0 70 Q 300 140 600 70 T 1200 70 Q 1500 140 1800 70 T 2400 70 Q 2700 140 3000 70 T 3600 70 L 3600 0 L 0 0 Z"
          ></path>
        </svg>

        {/* Layer 2 - Medium speed, reverse direction, medium opacity */}
        <svg
          className="absolute left-0 top-0 block w-[300%] max-w-none h-full animate-wave-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3600 150"
          preserveAspectRatio="none"
        >
          <path
            className="fill-slate-100/70"
            d="M 0 50 Q 300 120 600 50 T 1200 50 Q 1500 120 1800 50 T 2400 50 Q 2700 120 3000 50 T 3600 50 L 3600 0 L 0 0 Z"
          ></path>
        </svg>

        {/* Layer 3 - Fastest, front layer, solid */}
        <svg
          className="absolute left-0 top-0 block w-[300%] max-w-none h-full animate-wave-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3600 150"
          preserveAspectRatio="none"
        >
          <path
            className="fill-slate-100"
            d="M 0 30 Q 300 100 600 30 T 1200 30 Q 1500 100 1800 30 T 2400 30 Q 2700 100 3000 30 T 3600 30 L 3600 0 L 0 0 Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-8">
              <img 
                src="/logo.png" 
                alt="DevelUp Solutionz" 
                className="h-16 sm:h-18 md:h-20 w-auto object-contain mix-blend-multiply" 
              />
            </a>
            <p 
              className="text-blue-electric leading-relaxed mb-8 italic"
              style={{ fontFamily: 'var(--font-chancery)', fontSize: '1.25rem', letterSpacing: '0.01em' }}
            >
              Engineering next-generation digital solutions for forward-thinking businesses.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a 
                href="https://www.instagram.com/develupsolutionz?igsh=eGQ1Yng2aHpxa2Jx" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:scale-110 hover:-translate-y-1 transition-all duration-300 drop-shadow-sm hover:drop-shadow-md inline-block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                  <defs>
                    <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%" fx="30%" fy="107%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="5%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                  <rect width="24" height="24" rx="5.5" ry="5.5" fill="url(#ig-grad)" />
                  <rect x="5" y="5" width="14" height="14" rx="4" ry="4" fill="none" stroke="white" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3.2" fill="none" stroke="white" strokeWidth="2" />
                  <circle cx="16.5" cy="7.5" r="1.1" fill="white" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-8">Navigate</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-slate-800 hover:text-slate-900 transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-8">Solutions</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-800 hover:text-slate-900 transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Signal */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-4 lg:mt-0">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-8">Direct Signal</h4>
            <p className="text-slate-800 text-sm mb-6">Ready to engineer your future?</p>
            <a
              href="mailto:develupsolutionz@gmail.com"
              className="inline-block text-[10px] sm:text-xs font-black tracking-widest uppercase bg-slate-900 text-white border border-slate-900 hover:bg-slate-800 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-300 break-all max-w-full text-center"
            >
              develupsolutionz@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-300 pt-8 flex items-center justify-center text-xs text-black font-black uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} DevelUp Solutionz. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
