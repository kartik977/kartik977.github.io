import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring
} from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AIJobHunterCaseStudy from './components/AIJobHunterCaseStudy';
import GroceryCaseStudy from './components/GroceryCaseStudy';
import ImageGeneratorCaseStudy from './components/ImageGeneratorCaseStudy';
import './App.css';

const GlobalFX: React.FC = () => {
  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 28, mass: 0.25 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 28, mass: 0.25 });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    window.addEventListener('pointermove', handlePointer, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointer);
  }, [pointerX, pointerY]);

  return (
    <>
      <motion.div className="global-scroll-progress" style={{ scaleX: progress }} />
      <motion.div className="cursor-aura" style={{ x: smoothX, y: smoothY }} />
      <motion.div className="cursor-dot" style={{ x: smoothX, y: smoothY }} />
      <div className="global-grain" aria-hidden="true" />
    </>
  );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 28,
          scale: 0.992,
          filter: 'blur(10px)',
          clipPath: 'inset(2% 0 0 0 round 28px)'
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          clipPath: 'inset(0% 0 0 0 round 0px)'
        }}
        exit={{
          opacity: 0,
          y: -16,
          scale: 0.995,
          filter: 'blur(8px)'
        }}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ai-job-hunter" element={<AIJobHunterCaseStudy />} />
          <Route path="/projects/grocery-ordering" element={<GroceryCaseStudy />} />
          <Route path="/projects/ai-image-generator" element={<ImageGeneratorCaseStudy />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalFX />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
