import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Cloud, Settings, Layers } from 'lucide-react';

const servicesList = [
  {
    icon: <Code size={32} className="text-blue-electric" />,
    title: 'Web Development',
    desc: 'High-performance web applications built with modern frameworks like React, Next.js, and Node.js.'
  },
  {
    icon: <Smartphone size={32} className="text-purple-neon" />,
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile applications that provide native experiences for iOS and Android.'
  },
  {
    icon: <Palette size={32} className="text-blue-electric" />,
    title: 'UI/UX Design',
    desc: 'User-centric designs that boost engagement, utilizing psychological principles and modern aesthetics.'
  },
  {
    icon: <Cloud size={32} className="text-purple-neon" />,
    title: 'Cloud Architecture',
    desc: 'Scalable cloud solutions on AWS and Google Cloud to power your enterprise with maximum uptime.'
  },
  {
    icon: <Layers size={32} className="text-blue-electric" />,
    title: 'SaaS Platforms',
    desc: 'End-to-end development of Software as a Service products from architecture to deployment.'
  },
  {
    icon: <Settings size={32} className="text-purple-neon" />,
    title: 'Maintenance & Support',
    desc: 'Continuous monitoring, updates, and optimization to ensure your software remains cutting edge.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-electric/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-neon/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-black mb-6 text-white"
          >
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Comprehensive digital solutions tailored to solve complex business problems. We engineer the right tool for the job.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 sm:p-8 hover:shadow-[0_20px_40px_rgba(37,99,255,0.1)] hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-500 group cursor-default relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }} 
                  className="w-12 h-12 sm:w-14 bg-slate-900/80 rounded-2xl flex items-center justify-center text-blue-400 shadow-inner border border-slate-700/50 mb-6 relative z-10 origin-left"
                >
                {service.icon}
              </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 relative z-10 transition-colors group-hover:text-blue-400">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base relative z-10">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
