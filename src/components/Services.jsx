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
    id: 'web-development',
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
    id: 'app-development',
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
    id: 'custom-software',
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
    id: 'api-integration',
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
    id: 'ai-video',
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
    id: 'posters-creatives',
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
    id: 'logo-branding',
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
    id: 'data-analytics',
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
    id: 'data-visualization',
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
    id: 'ai-solutions',
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

const ServiceGraphic = ({ service }) => {
  const [imgSrc, setImgSrc] = useState(`/services/${service.id}.webp`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc.endsWith('.webp')) {
      setImgSrc(`/services/${service.id}.jpg`);
    } else if (imgSrc.endsWith('.jpg')) {
      setImgSrc(`/services/${service.id}.png`);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <motion.div 
        whileHover={{ scale: 1.08, rotate: -4 }} 
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg shrink-0 transition-transform duration-300 group-hover:scale-105`}
      >
        {service.icon}
      </motion.div>
    );
  }

  return (
    <div className="relative shrink-0">
      {/* Soft Ambient Glow behind the curved badge */}
      <div className={`absolute -inset-1.5 bg-gradient-to-br ${service.gradient} opacity-20 rounded-2xl blur-lg group-hover:opacity-45 transition-opacity duration-500`} />
      
      {/* Curved Edge Square Badge matching card aesthetics */}
      <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-700/70 p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.4)] group-hover:border-slate-500/80 transition-all duration-500 group-hover:shadow-[0_12px_28px_rgba(37,99,255,0.25)] flex items-center justify-center">
        <img
          src={imgSrc}
          alt={service.title}
          onError={handleError}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500 pointer-events-none select-none"
        />
      </div>
    </div>
  );
};

const ServiceCardEffect = ({ isActive, gradient }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Gentle Ambient Color Aura */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.2, 1.4], opacity: [0, 0.25, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br ${gradient} blur-2xl`}
          />

          {/* Smooth Subtle Corner Pulse */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: [0.4, 1.1, 1.3], opacity: [0, 0.2, 0] }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className={`absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-gradient-to-tr ${gradient} blur-2xl`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ServiceCard = ({ service, idx }) => {
  const [isActive, setIsActive] = useState(false);

  const handleInteraction = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setTimeout(() => setIsActive(false), 900);
    }
    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ delay: idx * 0.04, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      onMouseEnter={handleInteraction}
      onMouseLeave={handleMouseLeave}
      onClick={handleInteraction}
      className="group relative bg-slate-800/70 border border-slate-700/60 rounded-3xl p-6 sm:p-7 md:p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-slate-500/50 flex flex-col justify-start"
    >
      {/* Silky Glitch-Free Ambient Aura on Hover / Tap */}
      <ServiceCardEffect 
        isActive={isActive} 
        gradient={service.gradient} 
      />

      {/* Top Accent Gradient Border */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-3xl z-10`} />

      {/* Smooth Ambient Background Glow on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-400 rounded-3xl z-0 pointer-events-none`} />

      {/* Card Content */}
      <div className="relative z-10 pointer-events-none">
        {/* Header: Curved 3D Image Badge & Category Tag */}
        <div className="flex items-center justify-between mb-5 gap-3">
          <ServiceGraphic service={service} />

          <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/80 border ${service.badgeBorder} text-slate-300 backdrop-blur-md shrink-0`}>
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-lg sm:text-xl font-bold text-white mb-2.5 transition-colors duration-300 ${service.hoverText}`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed text-xs sm:text-sm font-normal">
          {service.desc}
        </p>
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
