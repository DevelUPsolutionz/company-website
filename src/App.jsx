import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Experience />

      <SmoothScroll>
        <div className="bg-[#f8fafc] min-h-screen text-slate-900 overflow-x-hidden font-sans">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Process />
            <WhyChooseUs />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
