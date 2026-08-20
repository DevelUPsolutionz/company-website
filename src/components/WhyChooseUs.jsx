import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Users, CheckCircle2 } from 'lucide-react';

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
  }
];

const CardEffect = ({ type, isActive, color }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Lightning Flash Effect */}
          {type === 'lightning' && (
            <motion.div
              initial={{ x: '-100%', opacity: 0, skewX: -20 }}
              animate={{ x: '100%', opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.6, ease: "linear" }}
              className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent blur-md"
            />
          )}
          {type === 'lightning' && (
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -20 }}
              animate={{ scale: [0, 2, 3], opacity: [0, 0.4, 0], rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`${color} blur-[2px]`}
            >
              <Zap size={150} strokeWidth={1.5} />
            </motion.div>
          )}

          {/* Shield Forcefield Effect */}
          {type === 'shield' && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [1, 2, 3], opacity: [0, 0.3, 0] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-32 h-32 rounded-full border-[8px] border-cyan-400 blur-sm"
            />
          )}
          {type === 'shield' && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.5, 2], opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className={`${color} blur-[2px]`}
            >
              <Shield size={160} strokeWidth={1.5} />
            </motion.div>
          )}

          {/* Users Network Effect */}
          {type === 'users' && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0.5, 1.5, 2], opacity: [0, 0.4, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute w-40 h-40 rounded-full border-4 border-dashed border-purple-500 animate-[spin_4s_linear_infinite] blur-[1px]"
            />
          )}
          {type === 'users' && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: [0.5, 1.5, 2], opacity: [0, 0.5, 0], y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${color} blur-[2px]`}
            >
              <Users size={160} strokeWidth={1.5} />
            </motion.div>
          )}

          {/* Quality Assurance Wave Effect */}
          {type === 'quality' && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 3], opacity: [0.6, 0] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-24 h-24 rounded-full bg-emerald-500/20 blur-md"
            />
          )}
          {type === 'quality' && (
            <motion.div
              initial={{ scale: 0.2, opacity: 0, rotate: -45 }}
              animate={{ scale: [0.2, 1.5, 2], opacity: [0, 0.6, 0], rotate: 0 }}
              transition={{ duration: 0.7, ease: "backOut" }}
              className={`${color} blur-[2px]`}
            >
              <CheckCircle2 size={160} strokeWidth={1.5} />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FeatureCard = ({ feature, idx }) => {
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      onMouseEnter={handleInteraction}
      onClick={handleInteraction}
      className="group relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 cursor-pointer overflow-hidden border border-slate-700/50 hover:shadow-[0_20px_40px_rgba(37,99,255,0.1)] hover:-translate-y-2 transition-all duration-500"
    >
      <CardEffect type={feature.id} isActive={isActive} color={feature.color} />

      {/* Gradient top border */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-t-3xl z-10`} />

      {/* Hover background glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl z-10 pointer-events-none`} />

      {/* Icon */}
      <div className="flex items-start justify-between mb-6 relative z-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg`}
        >
          {feature.icon}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 pointer-events-none">
        <h3 className={`text-xl font-bold text-white mb-3 ${feature.hoverText} transition-colors duration-300`}>
          {feature.title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-sm">
          {feature.description}
        </p>
      </div>

      {/* Bottom decorative line */}
      <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10`} />
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-black mb-6 text-white"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-purple-neon">DevelUp Solutionz</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            We don't just build software; we engineer digital experiences that drive growth and empower your business.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
