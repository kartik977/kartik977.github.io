import React, { useEffect, useState } from 'react';
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
import CommandPalette from './components/CommandPalette';
import EngineeringLab from './components/EngineeringLab';
import RecruiterAssistant from './components/RecruiterAssistant';
import RuntimeOpening from './components/RuntimeOpening';
import RuntimeViewSelector, { RuntimeView } from './components/RuntimeViewSelector';
import './App.css';

const VIEW_KEY = 'kartik-runtime-view';

const readStoredView = (): RuntimeView | null => {
  try {
    const value = sessionStorage.getItem(VIEW_KEY);
    return value === 'recruiter' || value === 'engineer' || value === 'projects' || value === 'full'
      ? value
      : null;
  } catch {
    return null;
  }
};

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
      <motion.div className="global-scroll-progress runtime-progress" style={{ scaleX: progress }} />
      <motion.div className="cursor-aura runtime-cursor-aura" style={{ x: smoothX, y: smoothY }} />
      <motion.div className="cursor-dot runtime-cursor-dot" style={{ x: smoothX, y: smoothY }} />
      <div className="global-grain" aria-hidden="true" />
    </>
  );
};

const AnimatedRoutes: React.FC<{ runtimeView: RuntimeView }> = ({ runtimeView }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.995,
          filter: 'blur(8px)'
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)'
        }}
        exit={{
          opacity: 0,
          y: -12,
          scale: 0.997,
          filter: 'blur(7px)'
        }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home runtimeView={runtimeView} />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ai-job-hunter" element={<AIJobHunterCaseStudy />} />
          <Route path="/projects/grocery-ordering" element={<GroceryCaseStudy />} />
          <Route path="/projects/ai-image-generator" element={<ImageGeneratorCaseStudy />} />
          <Route path="/lab" element={<EngineeringLab />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const RuntimeApp: React.FC = () => {
  const location = useLocation();
  const stored = readStoredView();
  const [runtimeView, setRuntimeView] = useState<RuntimeView>(stored ?? 'full');
  const [stage, setStage] = useState<'opening' | 'viewer' | 'home'>(() => {
    if (window.location.pathname !== '/') return 'home';
    return stored ? 'home' : 'opening';
  });

  useEffect(() => {
    const openViewer = () => setStage('viewer');
    const replayIntro = () => setStage('opening');
    window.addEventListener('portfolio:choose-view', openViewer);
    window.addEventListener('portfolio:replay-runtime', replayIntro);
    return () => {
      window.removeEventListener('portfolio:choose-view', openViewer);
      window.removeEventListener('portfolio:replay-runtime', replayIntro);
    };
  }, []);

  useEffect(() => {
    if (stage === 'home') {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [stage]);

  useEffect(() => {
    if (location.pathname !== '/' && stage !== 'home') setStage('home');
  }, [location.pathname, stage]);

  const pickView = (view: RuntimeView) => {
    setRuntimeView(view);
    try {
      sessionStorage.setItem(VIEW_KEY, view);
    } catch {
      // Session storage is optional; the selected view still works for this render.
    }
    setStage('home');
  };

  return (
    <div className="App runtime-app">
      {stage === 'home' && (
        <>
          <GlobalFX />
          <CommandPalette />
          <RecruiterAssistant />
          <Navbar />
          <main>
            <AnimatedRoutes runtimeView={runtimeView} />
          </main>
        </>
      )}

      <AnimatePresence>
        {stage === 'opening' && (
          <RuntimeOpening key="runtime-opening" onDone={() => setStage('viewer')} />
        )}
        {stage === 'viewer' && (
          <RuntimeViewSelector key="runtime-viewer" onPick={pickView} />
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <Router>
      <RuntimeApp />
    </Router>
  );
}

export default App;
