import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Users, CheckCircle2, Headphones, BadgePercent } from 'lucide-react';

const features = [
  {
    id: 'lightning',
    icon: <Zap size={28} />,
    title: "Lightning Fast Delivery",
    description: "We use agile methodologies to ensure your project is delivered on time without compromising on quality.",
    gradient: "from-amber-400 to-orange-500",
    hoverText: "group-hover:text-amber-500",
    color: "text-amber-500"
  },
  {
    id: 'shield',
    icon: <Shield size={28} />,
    title: "Secure & Scalable",
    description: "Our architectures are built to grow with your business while maintaining the highest security standards.",
    gradient: "from-blue-electric to-cyan-400",
    hoverText: "group-hover:text-blue-electric",
    color: "text-blue-500"
  },
  {
    id: 'users',
    icon: <Users size={28} />,
    title: "Expert Team",
    description: "A dedicated team of senior developers and designers bringing years of industry experience to your project.",
    gradient: "from-purple-neon to-pink-500",
    hoverText: "group-hover:text-purple-neon",
    color: "text-purple-500"
  },
  {
    id: 'quality',
    icon: <CheckCircle2 size={28} />,
    title: "Quality Assurance",
    description: "Rigorous testing protocols ensure that your digital product is bug-free and performs flawlessly.",
    gradient: "from-emerald-400 to-teal-500",
    hoverText: "group-hover:text-emerald-500",
    color: "text-emerald-500"
  },
  {
    id: 'support',
    icon: <Headphones size={28} />,
    title: "24/7 Dedicated Support",
    description: "Round-the-clock technical assistance, proactive communication, and continuous support for complete peace of mind.",
    gradient: "from-rose-500 to-pink-500",
    hoverText: "group-hover:text-rose-500",
    color: "text-rose-500"
  },
  {
    id: 'pricing',
    icon: <BadgePercent size={28} />,
    title: "Affordable Pricing",
    description: "Transparent, competitive pricing models with flexible packages tailored to deliver maximum ROI for your business.",
    gradient: "from-cyan-400 to-blue-600",
    hoverText: "group-hover:text-cyan-400",
    color: "text-cyan-400"
  }
];

const CardEffect = ({ type, isActive, color, gradient }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Subtle Ambient Color Aura Base */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.3, 1.4, 1.8], opacity: [0, 0.2, 0] }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className={`absolute w-40 h-40 rounded-full bg-gradient-to-br ${gradient} blur-xl`}
          />

          {/* Lightning Effect */}
          {type === 'lightning' && (
            <motion.div
              initial={{ scale: 0.2, opacity: 0, rotate: -20 }}
              animate={{ scale: [0.2, 1.5, 2], opacity: [0, 0.35, 0], rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${color} blur-[1px]`}
            >
              <Zap size={130} strokeWidth={1.5} />
            </motion.div>
          )}

          {/* Shield Forcefield Effect */}
          {type === 'shield' && (
            <>
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: [0.4, 1.4, 2], opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="absolute w-28 h-28 rounded-full border-4 border-cyan-400/60 blur-[2px]"
              />
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: [0.3, 1.4, 1.9], opacity: [0, 0.35, 0] }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
                className={`${color} blur-[1px]`}
              >
                <Shield size={130} strokeWidth={1.5} />
              </motion.div>
            </>
          )}

          {/* Users Network Effect */}
          {type === 'users' && (
            <>
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: [0.3, 1.3, 1.8], opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="absolute w-32 h-32 rounded-full border-2 border-dashed border-purple-400/60 animate-[spin_3s_linear_infinite]"
              />
              <motion.div
                initial={{ scale: 0.3, opacity: 0, y: 15 }}
                animate={{ scale: [0.3, 1.4, 1.9], opacity: [0, 0.35, 0], y: -10 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className={`${color} blur-[1px]`}
              >
                <Users size={130} strokeWidth={1.5} />
              </motion.div>
            </>
          )}

          {/* Quality Assurance Wave Effect */}
          {type === 'quality' && (
            <>
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: [0.3, 1.5, 2.2], opacity: [0, 0.35, 0] }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="absolute w-24 h-24 rounded-full bg-emerald-500/20 blur-lg"
              />
              <motion.div
                initial={{ scale: 0.2, opacity: 0, rotate: -30 }}
                animate={{ scale: [0.2, 1.4, 1.9], opacity: [0, 0.4, 0], rotate: 0 }}
                transition={{ duration: 0.7, ease: "backOut" }}
                className={`${color} blur-[1px]`}
              >
                <CheckCircle2 size={130} strokeWidth={1.5} />
              </motion.div>
            </>
          )}

          {/* Support Soundwave Effect */}
          {type === 'support' && (
            <>
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: [0.4, 1.4, 2.1], opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="absolute w-28 h-28 rounded-full border-2 border-rose-400/50 blur-sm"
              />
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: [0.3, 1.4, 1.9], opacity: [0, 0.35, 0] }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className={`${color} blur-[1px]`}
              >
                <Headphones size={130} strokeWidth={1.5} />
              </motion.div>
            </>
          )}

          {/* Pricing Value Effect */}
          {type === 'pricing' && (
            <>
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: [0.3, 1.5, 2.2], opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="absolute w-28 h-28 rounded-full bg-cyan-500/20 blur-md"
              />
              <motion.div
                initial={{ scale: 0.2, opacity: 0, rotate: 20 }}
                animate={{ scale: [0.2, 1.4, 1.9], opacity: [0, 0.35, 0], rotate: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`${color} blur-[1px]`}
              >
                <BadgePercent size={130} strokeWidth={1.5} />
              </motion.div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FeatureCard = ({ feature, idx }) => {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      onMouseEnter={handleInteraction}
      onMouseLeave={handleMouseLeave}
      onClick={handleInteraction}
      className="group relative bg-slate-800/70 rounded-3xl p-7 md:p-8 cursor-pointer overflow-hidden border border-slate-700/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-slate-500/60 transition-all duration-300 flex flex-col justify-start"
    >
      {/* Unique Signature Card Interactive Effect */}
      <CardEffect type={feature.id} isActive={isActive} color={feature.color} gradient={feature.gradient} />

      {/* Gradient top border */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-t-3xl z-10`} />

      {/* Hover background subtle tint */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-400 rounded-3xl z-0 pointer-events-none`} />

      {/* Icon */}
      <div className="flex items-start justify-between mb-6 relative z-10 pointer-events-none">
        <motion.div
          whileHover={{ scale: 1.08, rotate: -4 }}
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg shrink-0 transition-transform duration-300 group-hover:scale-105`}
        >
          {feature.icon}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 pointer-events-none">
        <h3 className={`text-xl font-bold text-white mb-3 ${feature.hoverText} transition-colors duration-300`}>
          {feature.title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-sm font-normal">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-electric/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-neon/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-purple-neon">DevelUp Solutionz</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            We don't just build software; we engineer digital experiences that drive growth and empower your business.
          </motion.p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.id} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
