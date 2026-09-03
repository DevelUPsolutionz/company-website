import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Services', 'Why Us', 'Collaborations', 'Contact'];
  const services = [
    'Web Development',
    'App Development',
    'Custom Software',
    'API Integration',
    'AI Video Creation',
    'Posters & Creatives',
    'Logo & Branding',
    'Data Analytics & Prediction',
    'AI Powered Solutions',
    'SEO Strategy & Optimization',
    'Digital Marketing & Growth'
  ];

  return (
    <footer className="relative pt-20 md:pt-32 pb-10 overflow-hidden bg-blue-200">
      {/* Dynamic Sea Waves Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] h-[50px] md:h-[120px]">
        {/* Layer 1 - Slowest, lowest opacity */}
        <svg
          className="absolute left-0 top-0 block w-[300%] max-w-none h-full animate-wave-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3600 150"
          preserveAspectRatio="none"
        >
          <path
            className="fill-slate-100/40"
            d="M 0 70 Q 300 140 600 70 T 1200 70 Q 1500 140 1800 70 T 2400 70 Q 2700 140 3000 70 T 3600 70 L 3600 0 L 0 0 Z"
          ></path>
        </svg>

        {/* Layer 2 - Medium speed, reverse direction, medium opacity */}
        <svg
          className="absolute left-0 top-0 block w-[300%] max-w-none h-full animate-wave-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3600 150"
          preserveAspectRatio="none"
        >
          <path
            className="fill-slate-100/70"
            d="M 0 50 Q 300 120 600 50 T 1200 50 Q 1500 120 1800 50 T 2400 50 Q 2700 120 3000 50 T 3600 50 L 3600 0 L 0 0 Z"
          ></path>
        </svg>

        {/* Layer 3 - Fastest, front layer, solid */}
        <svg
          className="absolute left-0 top-0 block w-[300%] max-w-none h-full animate-wave-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3600 150"
          preserveAspectRatio="none"
        >
          <path
            className="fill-slate-100"
            d="M 0 30 Q 300 100 600 30 T 1200 30 Q 1500 100 1800 30 T 2400 30 Q 2700 100 3000 30 T 3600 30 L 3600 0 L 0 0 Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <a href="#home" className="flex items-center gap-3 mb-8">
              <img 
                src="/logo.webp" 
                alt="DevelUp Solutionz - Custom Software & Web Development Company Logo" 
                className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain mix-blend-multiply" 
              />
            </a>
            <p 
              className="text-blue-electric leading-relaxed mb-8 italic max-w-sm"
              style={{ fontFamily: 'var(--font-chancery)', fontSize: '1.25rem', letterSpacing: '0.01em' }}
            >
              Engineering next-generation digital solutions for forward-thinking businesses.
            </p>
            <div id="footer-social-dock" className="flex items-center gap-3.5 text-slate-400">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/develupsolutionz?igsh=eGQ1Yng2aHpxa2Jx" 
                target="_blank" 
                rel="noreferrer" 
                title="Follow us on Instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-115 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center bg-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                  <defs>
                    <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%" fx="30%" fy="107%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="5%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                  <rect width="24" height="24" rx="5.5" ry="5.5" fill="url(#ig-grad)" />
                  <rect x="5" y="5" width="14" height="14" rx="4" ry="4" fill="none" stroke="white" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3.2" fill="none" stroke="white" strokeWidth="2" />
                  <circle cx="16.5" cy="7.5" r="1.1" fill="white" />
                </svg>
              </a>

              {/* WhatsApp Dock Target Anchor */}
              <div id="footer-whatsapp-anchor" className="w-10 h-10 relative flex items-center justify-center">
                {/* Fallback stationary icon inside footer */}
                <a
                  href="https://wa.me/919489918729?text=Hello%20DevelUp%20Solutionz%2C%20I%20would%20like%20to%20discuss%20a%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-sm hover:shadow-md hover:scale-115 hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>

              {/* Email Direct Action */}
              <a 
                href="mailto:develupsolutionz@gmail.com?subject=Project%20Inquiry%20-%20DevelUp%20Solutionz" 
                title="Send an Email to develupsolutionz@gmail.com"
                aria-label="Email Us"
                className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-sm hover:shadow-md hover:scale-115 hover:-translate-y-1 transition-all duration-300"
              >
                <Mail size={20} />
              </a>

              {/* Mobile Phone Dialer Action */}
              <a 
                href="tel:+919489918729" 
                title="Call +91 9489918729"
                aria-label="Call Us"
                className="w-10 h-10 rounded-xl bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center shadow-sm hover:shadow-md hover:scale-115 hover:-translate-y-1 transition-all duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-8">Navigate</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-slate-800 hover:text-slate-900 transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="justify-self-end text-right lg:justify-self-start lg:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-8">Solutions</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-800 hover:text-slate-900 transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Signal / Contact Info - Centered on Mobile */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left mt-6 lg:mt-0">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-6">Direct Signal</h4>
            <div className="space-y-4 text-sm flex flex-col items-center lg:items-start w-full">
              <a 
                href="tel:+919489918729"
                className="flex items-center justify-center lg:justify-start gap-2.5 text-slate-800 hover:text-blue-900 transition-colors font-semibold"
              >
                <Phone size={16} className="text-slate-900 shrink-0" />
                <span>+91 9489918729</span>
              </a>

              <a 
                href="mailto:develupsolutionz@gmail.com"
                className="flex items-center justify-center lg:justify-start gap-2.5 text-slate-800 hover:text-blue-900 transition-colors font-medium break-all"
              >
                <Mail size={16} className="text-slate-900 shrink-0" />
                <span>develupsolutionz@gmail.com</span>
              </a>

              <div className="flex items-center justify-center lg:justify-start gap-2.5 text-slate-800 font-medium text-center lg:text-left">
                <MapPin size={16} className="text-slate-900 shrink-0" />
                <span>Thanjavur, Tamil Nadu - 613001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-300 pt-8 flex items-center justify-center text-xs text-black font-black uppercase tracking-widest text-center">
          <p>&copy; {new Date().getFullYear()} DevelUp Solutionz. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
