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
  Bot,
  SearchCheck,
  Megaphone
} from 'lucide-react';

const servicesList = [
  {
    id: 'web-development',
    img: 'web-development',
    tag: 'Web & Cloud',
    icon: <Code size={24} />,
    title: 'Web Development',
    desc: 'High-performance, responsive web applications built with modern frameworks like React, Next.js, and Node.js.',
    highlights: ['React / Next.js', 'Ultra-Fast Performance'],
    gradient: 'from-blue-500 to-cyan-400',
    hoverText: 'group-hover:text-blue-400',
    color: 'text-blue-400'
  },
  {
    id: 'app-development',
    img: 'app-development',
    tag: 'iOS & Android',
    icon: <Smartphone size={24} />,
    title: 'App Development',
    desc: 'Cross-platform mobile applications for iOS & Android engineered with seamless native performance and fluid UX.',
    highlights: ['Cross-Platform', 'Fluid Native UX'],
    gradient: 'from-purple-500 to-indigo-500',
    hoverText: 'group-hover:text-purple-400',
    color: 'text-purple-400'
  },
  {
    id: 'custom-software',
    img: 'custom-software-development',
    tag: 'Enterprise & SaaS',
    icon: <Layers size={24} />,
    title: 'Custom Software Solutions',
    desc: 'Tailor-made software architectures, SaaS platforms, and enterprise tooling designed to scale your operations.',
    highlights: ['Scalable SaaS', 'Custom Architecture'],
    gradient: 'from-amber-400 to-orange-500',
    hoverText: 'group-hover:text-amber-400',
    color: 'text-amber-400'
  },
  {
    id: 'api-integration',
    img: 'api-system-integration',
    tag: 'Integrations',
    icon: <Network size={24} />,
    title: 'API & System Integration',
    desc: 'Robust REST/GraphQL API development, third-party service connections, and unified system automation.',
    highlights: ['REST & GraphQL', 'Workflow Automation'],
    gradient: 'from-emerald-400 to-teal-500',
    hoverText: 'group-hover:text-emerald-400',
    color: 'text-emerald-400'
  },
  {
    id: 'ai-video',
    img: 'ai-video',
    tag: 'Motion & Gen-AI',
    icon: <Video size={24} />,
    title: 'AI Video Creation',
    desc: 'Cutting-edge AI-generated promo videos, dynamic visual animations, and automated video workflows for brands.',
    highlights: ['Gen-AI Video', 'Dynamic Motion VFX'],
    gradient: 'from-rose-500 to-pink-500',
    hoverText: 'group-hover:text-rose-400',
    color: 'text-rose-400'
  },
  {
    id: 'posters-creatives',
    img: 'poster',
    tag: 'Marketing Visuals',
    icon: <Sparkles size={24} />,
    title: 'Posters & Creatives',
    desc: 'High-converting social media creatives, marketing posters, digital ads, and high-impact visual graphic designs.',
    highlights: ['Ad Creatives', 'High-Impact Design'],
    gradient: 'from-violet-500 to-fuchsia-500',
    hoverText: 'group-hover:text-fuchsia-400',
    color: 'text-fuchsia-400'
  },
  {
    id: 'logo-branding',
    img: 'logo-branding',
    tag: 'Brand Identity',
    icon: <PenTool size={24} />,
    title: 'Logo & Brand Identity',
    desc: 'Distinctive brand guidelines, memorable logo designs, color systems, and typography assets that define your brand.',
    highlights: ['Brand Systems', 'Iconic Identity'],
    gradient: 'from-amber-500 to-yellow-400',
    hoverText: 'group-hover:text-yellow-400',
    color: 'text-yellow-400'
  },
  {
    id: 'data-analytics',
    img: 'data-analytics-prediction',
    tag: 'BI & Predictions',
    icon: <BarChart3 size={24} />,
    title: 'Data Analytics & Prediction',
    desc: 'Transforming multi-source business data into actionable strategic intelligence, automated pipelines, and predictive models.',
    highlights: ['Predictive Models', 'Strategic BI'],
    gradient: 'from-cyan-400 to-blue-600',
    hoverText: 'group-hover:text-cyan-400',
    color: 'text-cyan-400'
  },
  {
    id: 'ai-solutions',
    img: 'ai-powered-solutions',
    tag: 'LLM & Agents',
    icon: <Bot size={24} />,
    title: 'AI Powered Solutions',
    desc: 'Custom LLM integrations, intelligent workflow automation agents, smart bots, and predictive machine learning models.',
    highlights: ['Custom LLM / GPT', 'Autonomous Agents'],
    gradient: 'from-indigo-500 to-purple-600',
    hoverText: 'group-hover:text-indigo-400',
    color: 'text-indigo-400'
  },
  {
    id: 'seo',
    img: 'seo',
    tag: 'Rank & Visibility',
    icon: <SearchCheck size={24} />,
    title: 'SEO Strategy & Optimization',
    desc: 'Data-driven on-page, technical, and off-page SEO strategies engineered to rank #1 on Google and capture organic traffic.',
    highlights: ['Google #1 Ranking', 'Technical SEO'],
    gradient: 'from-emerald-400 to-cyan-500',
    hoverText: 'group-hover:text-emerald-400',
    color: 'text-emerald-400'
  },
  {
    id: 'digital-marketing',
    img: 'digital-marketing',
    tag: 'Performance & Ads',
    icon: <Megaphone size={24} />,
    title: 'Digital Marketing & Growth',
    desc: 'High-converting paid ad campaigns, performance marketing funnels, and targeted audience acquisition across Meta & Google.',
    highlights: ['Meta & Google Ads', 'High-ROI Funnels'],
    gradient: 'from-pink-500 to-rose-500',
    hoverText: 'group-hover:text-pink-400',
    color: 'text-pink-400'
  }
];

const ServiceVisualStage = ({ service }) => {
  const [imgSrc, setImgSrc] = useState(`/services/${service.img || service.id}.webp`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc.endsWith('.webp')) {
      setImgSrc(`/services/${service.img || service.id}.png`);
    } else if (imgSrc.endsWith('.png')) {
      setImgSrc(`/services/${service.img || service.id}.jpg`);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="relative w-full h-48 xs:h-52 sm:h-56 md:h-60 rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-700/60 mb-5 sm:mb-6 group-hover:border-slate-600 transition-all duration-500 shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]">
      {/* Category Tag Pill in Top Right */}
      <span className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-20 text-[9px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-slate-300 shadow-md">
        {service.tag}
      </span>

      {/* Large 3D Illustration Filling the Box Completely */}
      {!hasError ? (
        <img
          src={imgSrc}
          alt={service.title}
          onError={handleError}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out select-none pointer-events-none"
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white`}>
          {service.icon}
        </div>
      )}
    </div>
  );
};

const ServiceCardEffect = ({ isActive, gradient }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[2rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* Ambient Color Glow Aura */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.2, 1.4], opacity: [0, 0.22, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`absolute -top-10 -right-10 w-52 h-52 rounded-full bg-gradient-to-br ${gradient} blur-2xl`}
          />

          {/* Smooth Subtle Corner Pulse */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: [0.4, 1.1, 1.3], opacity: [0, 0.18, 0] }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className={`absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-gradient-to-tr ${gradient} blur-2xl`}
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
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      onMouseEnter={handleInteraction}
      onMouseLeave={handleMouseLeave}
      onClick={handleInteraction}
      className="group relative bg-slate-800/70 border border-slate-700/60 rounded-3xl sm:rounded-[2rem] p-5 sm:p-6 md:p-8 cursor-pointer overflow-hidden transition-all duration-400 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] hover:border-slate-500/70 flex flex-col justify-between"
    >
      {/* Silky Glitch-Free Ambient Aura on Hover / Tap */}
      <ServiceCardEffect 
        isActive={isActive} 
        gradient={service.gradient} 
      />

      {/* Top Accent Gradient Border */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient} rounded-t-3xl sm:rounded-t-[2rem] z-10`} />

      {/* Subtle Background Glow on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-400 rounded-3xl sm:rounded-[2rem] z-0 pointer-events-none`} />

      {/* Main Content Area */}
      <div className="relative z-10 pointer-events-none">
        
        {/* Prominent Large 3D Visual Stage */}
        <ServiceVisualStage service={service} />

        {/* Title */}
        <h3 className={`text-lg sm:text-xl md:text-2xl font-black text-white mb-2.5 sm:mb-3 tracking-tight transition-colors duration-300 ${service.hoverText}`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed text-xs sm:text-sm font-normal mb-5 sm:mb-6">
          {service.desc}
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
          {service.highlights.map((item, i) => (
            <span 
              key={i} 
              className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg bg-slate-900/80 border border-slate-700/70 text-slate-300 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-electric/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-neon/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-3.5 sm:mb-4 shadow-sm"
          >
            What We Deliver
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white tracking-tight"
          >
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-purple-neon">Services</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Comprehensive, high-impact digital solutions engineered to scale your brand, automate workflows, and drive exponential business growth.
          </motion.p>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {servicesList.map((service, idx) => (
            <ServiceCard key={service.id} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
