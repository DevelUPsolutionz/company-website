import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <Zap size={28} />,
    title: "Lightning Fast Delivery",
    description: "We use agile methodologies to ensure your project is delivered on time without compromising on quality.",
    gradient: "from-amber-400 to-orange-500",
    hoverText: "group-hover:text-amber-500",
  },
  {
    icon: <Shield size={28} />,
    title: "Secure & Scalable",
    description: "Our architectures are built to grow with your business while maintaining the highest security standards.",
    gradient: "from-blue-electric to-cyan-400",
    hoverText: "group-hover:text-blue-electric",
  },
  {
    icon: <Users size={28} />,
    title: "Expert Team",
    description: "A dedicated team of senior developers and designers bringing years of industry experience to your project.",
    gradient: "from-purple-neon to-pink-500",
    hoverText: "group-hover:text-purple-neon",
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Quality Assurance",
    description: "Rigorous testing protocols ensure that your digital product is bug-free and performs flawlessly.",
    gradient: "from-emerald-400 to-teal-500",
    hoverText: "group-hover:text-emerald-500",
  }
];

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
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 cursor-default overflow-hidden border border-slate-700/50 hover:shadow-[0_20px_40px_rgba(37,99,255,0.1)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-t-3xl`} />

              {/* Hover background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl`} />

              {/* Icon */}
              <div className="flex items-start justify-between mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg`}
                >
                  {feature.icon}
                </motion.div>
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold text-white mb-3 ${feature.hoverText} transition-colors duration-300`}>
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Bottom decorative line */}
              <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
