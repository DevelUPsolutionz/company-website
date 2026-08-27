import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Layers, 
  Network, 
  Video, 
  Sparkles, 
  PenTool, 
  BarChart3, 
  TrendingUp, 
  Bot,
  ArrowRight
} from 'lucide-react';

const servicesList = [
  {
    id: 'web',
    tag: 'Web & Cloud',
    icon: <Code size={26} />,
    title: 'Web Development',
    desc: 'High-performance, responsive web applications built with modern frameworks like React, Next.js, and Node.js.',
    gradient: 'from-blue-500 to-cyan-400',
    color: 'text-blue-400',
    hoverText: 'group-hover:text-blue-400',
    badgeBorder: 'border-blue-500/20'
  },
  {
    id: 'app',
    tag: 'iOS & Android',
    icon: <Smartphone size={26} />,
    title: 'App Development',
    desc: 'Cross-platform mobile applications for iOS & Android engineered with seamless native performance and fluid UX.',
    gradient: 'from-purple-500 to-indigo-500',
    color: 'text-purple-400',
    hoverText: 'group-hover:text-purple-400',
    badgeBorder: 'border-purple-500/20'
  },
  {
    id: 'software',
    tag: 'Enterprise & SaaS',
    icon: <Layers size={26} />,
    title: 'Custom Software Solutions',
    desc: 'Tailor-made software architectures, SaaS platforms, and enterprise tooling designed to scale your operations.',
    gradient: 'from-amber-400 to-orange-500',
    color: 'text-amber-400',
    hoverText: 'group-hover:text-amber-400',
    badgeBorder: 'border-amber-500/20'
  },
  {
    id: 'api',
    tag: 'Integrations',
    icon: <Network size={26} />,
    title: 'API & System Integration',
    desc: 'Robust REST/GraphQL API development, third-party service connections, and unified system automation.',
    gradient: 'from-emerald-400 to-teal-500',
    color: 'text-emerald-400',
    hoverText: 'group-hover:text-emerald-400',
    badgeBorder: 'border-emerald-500/20'
  },
  {
    id: 'video',
    tag: 'Motion & Gen-AI',
    icon: <Video size={26} />,
    title: 'AI Video Creation',
    desc: 'Cutting-edge AI-generated promo videos, dynamic visual animations, and automated video workflows for brands.',
    gradient: 'from-rose-500 to-pink-500',
    color: 'text-rose-400',
    hoverText: 'group-hover:text-rose-400',
    badgeBorder: 'border-rose-500/20'
  },
  {
    id: 'creatives',
    tag: 'Marketing Visuals',
    icon: <Sparkles size={26} />,
    title: 'Posters & Creatives',
    desc: 'High-converting social media creatives, marketing posters, digital ads, and high-impact visual graphic designs.',
    gradient: 'from-violet-500 to-fuchsia-500',
    color: 'text-fuchsia-400',
    hoverText: 'group-hover:text-fuchsia-400',
    badgeBorder: 'border-fuchsia-500/20'
  },
  {
    id: 'brand',
    tag: 'Brand Identity',
    icon: <PenTool size={26} />,
    title: 'Logo & Brand Identity',
    desc: 'Distinctive brand guidelines, memorable logo designs, color systems, and typography assets that define your brand.',
    gradient: 'from-amber-500 to-yellow-400',
    color: 'text-yellow-400',
    hoverText: 'group-hover:text-yellow-400',
    badgeBorder: 'border-yellow-500/20'
  },
  {
    id: 'analytics',
    tag: 'BI & Insights',
    icon: <BarChart3 size={26} />,
    title: 'Data Analytics',
    desc: 'Transforming multi-source business data into actionable strategic intelligence, automated pipelines, and key metrics.',
    gradient: 'from-cyan-400 to-blue-600',
    color: 'text-cyan-400',
    hoverText: 'group-hover:text-cyan-400',
    badgeBorder: 'border-cyan-500/20'
  },
  {
    id: 'forecast',
    tag: 'Predictive Models',
    icon: <TrendingUp size={26} />,
    title: 'Data Visualization & Forecasting',
    desc: 'Interactive real-time dashboards, statistical forecasting models, and clear graphical data representations.',
    gradient: 'from-teal-400 to-emerald-500',
    color: 'text-teal-400',
    hoverText: 'group-hover:text-teal-400',
    badgeBorder: 'border-teal-500/20'
  },
  {
    id: 'ai',
    tag: 'LLM & Agents',
    icon: <Bot size={26} />,
    title: 'AI Powered Solutions',
    desc: 'Custom LLM integrations, intelligent workflow automation agents, smart bots, and predictive machine learning models.',
    gradient: 'from-indigo-500 to-purple-600',
    color: 'text-indigo-400',
    hoverText: 'group-hover:text-indigo-400',
    badgeBorder: 'border-indigo-500/20'
  }
];

const ServiceCardEffect = ({ type, isActive, color, gradient }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Radiant Expansion Wave */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0.8 }}
            animate={{ scale: [0.2, 1.8, 2.5], opacity: [0.8, 0.4, 0] }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`absolute w-36 h-36 rounded-full bg-gradient-to-br ${gradient} blur-xl opacity-20`}
          />

          {/* Flash Light Beam */}
          <motion.div
            initial={{ x: '-100%', opacity: 0, skewX: -20 }}
            animate={{ x: '100%', opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md"
          />

          {/* Type-Specific Background Visual Effect */}
          {type === 'web' && (
            <motion.div
              initial={{ scale: 0, rotate: -20, opacity: 0 }}
              animate={{ scale: [0, 1.6, 2.2], opacity: [0, 0.35, 0], rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${color} blur-[1px]`}
            >
              <Code size={140} strokeWidth={1.5} />
            </motion.div>
          )}

          {type === 'app' && (
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: [0.3, 1.5, 2.2], opacity: [0, 0.35, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${color} blur-[1px]`}
            >
              <Smartphone size={140} strokeWidth={1.5} />
            </motion.div>
          )}

          {type === 'software' && (
            <motion.div
              initial={{ scale: 0.4, y: 30, opacity: 0 }}
              animate={{ scale: [0.4, 1.6, 2.2], y: -20, opacity: [0, 0.35, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${color} blur-[1px]`}
            >
              <Layers size={140} strokeWidth={1.5} />
            </motion.div>
          )}

          {type === 'api' && (
            <motion.div
              initial={{ scale: 0.2, rotate: -45, opacity: 0 }}
              animate={{ scale: [0.2, 1.6, 2.2], rotate: 45, opacity: [0, 0.4, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${color} blur-[1px]`}
            >
              <Network size={140} strokeWidth={1.5} />
            </motion.div>
          )}

          {type === 'video' && (
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: [0.3, 1.8, 2.4], opacity: [0, 0.4, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${color} blur-[1px]`}
            >
              <Video size={140} strokeWidth={1.5} />
            </motion.div>
          )}

          {type === 'creatives' && (
            <motion.div
              initial={{ scale: 0, rotate: 30, opacity: 0 }}
              animate={{ scale: [0, 1.8, 2.4], rotate: -20, opacity: [0, 0.45, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${color} blur-[1px]`}
            >
              <Sparkles size={140} strokeWidth={1.5} />
            </motion.div>
          )}

          {type === 'brand' && (
            <motion.div
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: [0.2, 1.6, 2.2], opacity: [0, 0.4, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${color} blur-[1px]`}
            >
              <PenTool size={140} strokeWidth={1.5} />
            </motion.div>
          )}

          {type === 'analytics' && (
            <motion.div
              initial={{ scale: 0.3, y: 20, opacity: 0 }}
              animate={{ scale: [0.3, 1.6, 2.2], y: -20, opacity: [0, 0.35, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${color} blur-[1px]`}
            >
              <BarChart3 size={140} strokeWidth={1.5} />
            </motion.div>
          )}

          {type === 'forecast' && (
            <motion.div
              initial={{ scale: 0.2, x: -20, opacity: 0 }}
              animate={{ scale: [0.2, 1.6, 2.2], x: 20, opacity: [0, 0.4, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${color} blur-[1px]`}
            >
              <TrendingUp size={140} strokeWidth={1.5} />
            </motion.div>
          )}

          {type === 'ai' && (
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: [0.3, 1.8, 2.4], opacity: [0, 0.4, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${color} blur-[1px]`}
            >
              <Bot size={140} strokeWidth={1.5} />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ServiceCard = ({ service, idx }) => {
  const [isActive, setIsActive] = useState(false);

  const handleInteraction = () => {
    setIsActive(false);
    setTimeout(() => {
      setIsActive(true);
    }, 10);
  };

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setTimeout(() => setIsActive(false), 1000);
    }
    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onMouseEnter={handleInteraction}
      onClick={handleInteraction}
      className="group relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 sm:p-7 md:p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(37,99,255,0.15)] hover:border-slate-600 flex flex-col justify-between"
    >
      {/* Dynamic Animated Effect on Hover / Tap */}
      <ServiceCardEffect 
        type={service.id} 
        isActive={isActive} 
        color={service.color} 
        gradient={service.gradient} 
      />

      {/* Top Accent Gradient Border */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-3xl z-10`} />

      {/* Hover Background Accent Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-3xl z-10 pointer-events-none`} />

      {/* Card Content Top */}
      <div className="relative z-10 pointer-events-none">
        {/* Header: Icon & Category Tag */}
        <div className="flex items-center justify-between mb-6 gap-3">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: -4 }} 
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg shrink-0 transition-transform duration-300 group-hover:scale-105`}
          >
            {service.icon}
          </motion.div>

          <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/80 border ${service.badgeBorder} text-slate-300 backdrop-blur-md shrink-0`}>
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-lg sm:text-xl font-bold text-white mb-3 transition-colors duration-300 ${service.hoverText}`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed text-xs sm:text-sm font-normal">
          {service.desc}
        </p>
      </div>

      {/* Card Footer: Action link & bottom decorative line */}
      <div className="relative z-10 pt-6 mt-2 border-t border-slate-700/40 flex items-center justify-between pointer-events-none">
        <a 
          href="#contact" 
          className="flex items-center gap-1.5 text-xs font-bold text-slate-300 group-hover:text-white transition-colors duration-300"
        >
          <span>Get Started</span>
          <ArrowRight size={13} className="text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
        </a>

        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300`} />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-electric/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-neon/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-xs uppercase tracking-widest mb-4"
          >
            What We Deliver
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight"
          >
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Comprehensive, high-impact digital solutions engineered to scale your brand, automate workflows, and drive business growth.
          </motion.p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {servicesList.map((service, idx) => (
            <ServiceCard key={service.id} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
