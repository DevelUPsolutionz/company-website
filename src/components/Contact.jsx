import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbxOQMpf3yf6HVOMzzUWoBuFAp2R9jZIcaG6l8j1I_JwQA0DbJ_hep_qmsB0dsBmGKg-cA/exec', {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then((response) => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        console.error('Error!', error.message);
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-black mb-6 text-slate-900"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-purple-neon">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Ready to engineer your next big idea? Drop us a line and let's start building the future together.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-white rounded-3xl lg:rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row"
        >
          {/* Left Side: Contact Info (Dark) */}
          <div className="lg:w-2/5 bg-slate-900 relative p-6 sm:p-10 md:p-14 overflow-hidden flex flex-col justify-between">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-electric/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-neon/20 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">Contact Information</h3>
              <p className="text-slate-400 mb-12 text-sm leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours. We're excited to hear about your project!
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400 shrink-0 border border-white/5">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-1">Email Us</h4>
                    <a href="mailto:develupsolutionz@gmail.com" className="text-white font-medium text-base sm:text-lg hover:text-blue-400 transition-colors break-all">
                      develupsolutionz@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Aesthetic Tech Pattern - Live Heartbeat */}
            <div className="relative z-10 mt-20 hidden md:block heartbeat-container">
              <svg width="100%" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                {/* Static Background Path */}
                <path 
                  d="M0,30 L50,30 L60,10 L80,50 L90,30 L200,30" 
                  className="heartbeat-bg" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                {/* Glowing Outer Path (Cyan) */}
                <path 
                  d="M0,30 L50,30 L60,10 L80,50 L90,30 L200,30" 
                  className="heartbeat-glow" 
                  strokeWidth="3.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                {/* White Inner Path (Core Pulse) */}
                <path 
                  d="M0,30 L50,30 L60,10 L80,50 L90,30 L200,30" 
                  className="heartbeat-pulse" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
          </div>

          {/* Right Side: Form (Light) */}
          <div className="lg:w-3/5 p-6 sm:p-10 md:p-14 bg-white">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="John"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-electric/20 focus:border-blue-electric transition-all focus:bg-white shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-electric/20 focus:border-blue-electric transition-all focus:bg-white shadow-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-electric/20 focus:border-blue-electric transition-all focus:bg-white shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Project Details</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell us about your project goals..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-electric/20 focus:border-blue-electric transition-all focus:bg-white shadow-sm resize-none"
                ></textarea>
              </div>
              
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-electric to-purple-neon text-white font-black uppercase tracking-widest text-xs py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_10px_30px_rgba(37,99,255,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Transmitting Data...' : 'Send Message'}
                  {!isSubmitting && <Send size={18} />}
                </motion.button>
              </div>

              {submitStatus === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 border border-green-200 rounded-xl mt-6">
                  <p className="text-green-700 text-sm text-center font-bold">
                    Message sent successfully! We'll be in touch shortly.
                  </p>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 border border-red-200 rounded-xl mt-6">
                  <p className="text-red-700 text-sm text-center font-bold">
                    Failed to send message. Please try again or email us directly.
                  </p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
