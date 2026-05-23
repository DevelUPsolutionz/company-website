import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Massive Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3.5rem] sm:text-[5.5rem] md:text-[10rem] lg:text-[14rem] font-black text-slate-50/60 whitespace-nowrap z-0 pointer-events-none tracking-tighter select-none">
        ABOUT US
      </div>
      <div className="container mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-tight">
              Innovating at the <br />
              Intersection of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-purple-neon">Design & Tech</span>
            </h2>
            <p className="text-slate-800 text-lg mb-6 leading-relaxed">
              At <strong className="font-bold text-slate-900">DevelUp Solutionz</strong>, we combine psychological design principles with cutting-edge engineering to build products that not only work flawlessly but feel extraordinary to use.
            </p>
            <p className="text-slate-800 text-lg mb-8 leading-relaxed">
              Our mission is to help forward-thinking brands transform complex challenges into elegant, scalable digital ecosystems.
            </p>
            
            <a href="#services" className="inline-flex items-center text-blue-electric font-bold hover:gap-3 transition-all duration-300 gap-2">
              Discover Our Work <span>→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative background shadow for the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-electric/10 to-purple-neon/10 rounded-3xl transform translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 pointer-events-none" />
            
            <img 
              src="/about-image.png" 
              alt="About DevelUp Solutionz" 
              className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-[0_8px_40px_rgba(37,99,255,0.08)] border border-slate-200/50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
