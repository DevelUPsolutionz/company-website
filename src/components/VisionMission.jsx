import { motion } from 'framer-motion';
import { Compass, Target, CheckCircle2, Sparkles, Zap, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';

const VisionMission = () => {
  const values = [
    {
      icon: <Zap size={22} className="text-amber-500" />,
      title: "Agile Precision",
      desc: "Delivering world-class code with rapid iteration and zero compromise on code quality.",
      gradient: "from-amber-400 to-orange-500",
      accent: "bg-amber-50 border-amber-200/80 text-amber-900"
    },
    {
      icon: <ShieldCheck size={22} className="text-blue-600" />,
      title: "Zero-Compromise Security",
      desc: "Architecting resilient, fortified, and enterprise-grade cloud software ecosystems.",
      gradient: "from-blue-500 to-cyan-400",
      accent: "bg-blue-50 border-blue-200/80 text-blue-900"
    },
    {
      icon: <Rocket size={22} className="text-purple-600" />,
      title: "High-ROI Impact",
      desc: "Engineering digital products tailored to drive tangible, sustainable business revenue.",
      gradient: "from-purple-500 to-pink-500",
      accent: "bg-purple-50 border-purple-200/80 text-purple-900"
    }
  ];

  return (
    <section id="vision-mission" className="py-24 md:py-32 bg-slate-100/70 relative overflow-hidden border-y border-slate-200/80">
      {/* Ambient Lighting Blooms */}
      <div className="absolute top-0 left-1/6 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/6 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Matrix Dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0f172a 1px, transparent 0)', backgroundSize: '36px 36px' }} 
      />

      {/* Huge Typographical Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] sm:text-[7rem] md:text-[11rem] lg:text-[15rem] font-black text-slate-200/40 whitespace-nowrap z-0 pointer-events-none tracking-tighter select-none">
        PURPOSE
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/90 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 shadow-sm backdrop-blur-md"
          >
            <Sparkles size={14} className="text-blue-600" />
            Purpose & Direction
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight"
          >
            Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Vision & Mission</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            We don’t just write code; we empower next-generation founders and enterprises to dominate their industries with scalable, human-centered digital architectures.
          </motion.p>
        </div>

        {/* Dual Cards Grid: Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-20">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-10 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_-15px_rgba(37,99,255,0.14)] hover:border-blue-300 transition-all duration-500 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Accent Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 rounded-t-[2.5rem]" />

            {/* Decorative Watermark Number */}
            <div className="absolute top-6 right-8 text-7xl sm:text-8xl font-black text-slate-100/70 select-none pointer-events-none group-hover:text-blue-100/70 transition-colors duration-500">
              01
            </div>

            {/* Subtle Aura Glow on Hover */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10">
              {/* Header Badge & 3D Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-xl shadow-blue-500/20 group-hover:scale-105 group-hover:rotate-1 transition-all duration-400">
                  <Compass size={36} strokeWidth={2} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 shadow-sm">
                  Future Horizon
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                Our Vision
              </h3>

              {/* Styled Quote Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border-l-4 border-blue-600 mb-6 shadow-sm">
                <p className="text-slate-800 font-bold text-sm sm:text-base leading-relaxed italic">
                  "To be the global benchmark for transformative digital engineering, intuitive design, and AI-driven business intelligence."
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal mb-8">
                We envision a digital-first ecosystem where businesses seamlessly harness the power of modern web architectures, mobile intelligence, and scalable cloud systems to operate effortlessly, outpace competition, and deliver extraordinary user experiences.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="relative z-10 pt-6 border-t border-slate-100 space-y-3.5">
              <div className="flex items-center gap-3 text-slate-800 text-xs sm:text-sm font-semibold">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <CheckCircle2 size={15} />
                </div>
                <span>Global Digital Leadership & Industry Standards</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 text-xs sm:text-sm font-semibold">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <CheckCircle2 size={15} />
                </div>
                <span>Human-Centric Psychological UX Design</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 text-xs sm:text-sm font-semibold">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <CheckCircle2 size={15} />
                </div>
                <span>Future-Proof Cloud & Autonomous AI Architectures</span>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-10 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_-15px_rgba(147,51,234,0.14)] hover:border-purple-300 transition-all duration-500 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Accent Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 rounded-t-[2.5rem]" />

            {/* Decorative Watermark Number */}
            <div className="absolute top-6 right-8 text-7xl sm:text-8xl font-black text-slate-100/70 select-none pointer-events-none group-hover:text-purple-100/70 transition-colors duration-500">
              02
            </div>

            {/* Subtle Aura Glow on Hover */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-purple-400/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10">
              {/* Header Badge & 3D Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-xl shadow-purple-500/20 group-hover:scale-105 group-hover:rotate-1 transition-all duration-400">
                  <Target size={36} strokeWidth={2} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 shadow-sm">
                  Execution & Impact
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-purple-600 transition-colors">
                Our Mission
              </h3>

              {/* Styled Quote Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border-l-4 border-purple-600 mb-6 shadow-sm">
                <p className="text-slate-800 font-bold text-sm sm:text-base leading-relaxed italic">
                  "To engineer robust, ultra-fast, and secure digital software solutions that drive measurable business ROI and sustainable growth."
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal mb-8">
                Our mission is to translate complex business challenges into sleek, reliable, and lightning-fast software products. We bridge the gap between creative visual artistry and deep engineering, ensuring every solution delivers maximum business velocity.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="relative z-10 pt-6 border-t border-slate-100 space-y-3.5">
              <div className="flex items-center gap-3 text-slate-800 text-xs sm:text-sm font-semibold">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <CheckCircle2 size={15} />
                </div>
                <span>Precision Engineering & Microsecond Runtimes</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 text-xs sm:text-sm font-semibold">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <CheckCircle2 size={15} />
                </div>
                <span>Transparent Collaboration & Rapid Agile Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 text-xs sm:text-sm font-semibold">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <CheckCircle2 size={15} />
                </div>
                <span>Empowering Brands with Scalable High-ROI Platforms</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values / Ethos Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group flex items-start gap-4 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(37,99,255,0.08)] hover:border-slate-300 transition-all duration-400"
            >
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
                {val.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisionMission;
