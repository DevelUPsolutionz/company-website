import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '919489918729';
  const defaultMessage = encodeURIComponent('Hello DevelUp Solutionz, I would like to discuss a project!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleObserver = (entries) => {
      const [entry] = entries;
      setIsFooterVisible(entry.isIntersecting);
    };

    const target = document.getElementById('footer-social-dock') || document.querySelector('footer');

    if (!target) return;

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {!isFooterVisible && (
        <motion.div 
          key="floating-whatsapp"
          initial={{ opacity: 0, scale: 0.5, x: 40, y: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            x: 0, 
            y: [0, -6, 0] 
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.7, 
            x: -20, 
            y: 30,
            transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] } 
          }}
          transition={{ 
            y: {
              repeat: Infinity, 
              duration: 2.4, 
              ease: "easeInOut" 
            },
            opacity: { duration: 0.35 },
            scale: { duration: 0.35 }
          }}
          className="fixed bottom-6 right-6 z-50 flex items-center group pointer-events-auto"
        >
          {/* Tooltip on hover */}
          <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold shadow-xl border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
            Chat with us on WhatsApp
          </span>

          {/* Floating Animated WhatsApp Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with DevelUp Solutionz on WhatsApp"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.55)] transition-all duration-300 cursor-pointer"
          >
            {/* Soft Ambient Glow Aura */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 blur-md group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

            {/* Crisp Official WhatsApp SVG Icon */}
            <svg 
              className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
