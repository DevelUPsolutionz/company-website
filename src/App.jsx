import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WeAreWorkingWith from './components/WeAreWorkingWith';
import IntroAnimation from './components/IntroAnimation';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Prevent browser from remembering the previous scroll position on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Force scroll to top when the component mounts (page reloads)
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Main app content fades in softly or just exists under the absolute intro */}
      <div style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 0.8s ease-in' }}>
        <SmoothScroll>
          <div className="bg-[#f8fafc] min-h-screen text-slate-900 overflow-x-hidden font-sans">
            <Navbar />
            <main>
              <Hero />
              <About />
              <VisionMission />
              <Services />
              <Process />
              <WhyChooseUs />
              <WeAreWorkingWith />
              <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </SmoothScroll>
      </div>
    </>
  );
}

export default App;
