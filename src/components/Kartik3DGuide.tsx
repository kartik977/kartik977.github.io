import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, Coffee, Map, Play, RotateCcw, X } from 'lucide-react';
import './Kartik3DGuide.css';

type TourStop = {
  path: string;
  eyebrow: string;
  title: string;
  message: string;
};

const START_TOUR_EVENT = 'portfolio:start-kartik-tour';

const tourStops: TourStop[] = [
  {
    path: '/',
    eyebrow: 'Welcome',
    title: 'Hey, I’m Kartik.',
    message: 'Coffee first. Then I’ll show you the systems, projects and engineering work behind this portfolio.'
  },
  {
    path: '/experience',
    eyebrow: 'Stop 01 · Experience',
    title: 'This is where production gets real.',
    message: 'Here’s the work behind banking, payments, APIs, cloud delivery, testing and production support.'
  },
  {
    path: '/projects',
    eyebrow: 'Stop 02 · Projects',
    title: 'Now let’s look at what I build.',
    message: 'These projects show how I think about backend architecture, product flows and AI-assisted systems.'
  },
  {
    path: '/lab',
    eyebrow: 'Stop 03 · Engineering Lab',
    title: 'This is my favorite part.',
    message: 'Run the performance, CI/CD, security and observability simulations instead of only reading about them.'
  },
  {
    path: '/skills',
    eyebrow: 'Stop 04 · Skills',
    title: 'The tools behind the systems.',
    message: 'Java, Spring Boot, Node.js, TypeScript, AWS, testing, observability and AI developer tooling.'
  },
  {
    path: '/contact',
    eyebrow: 'Final stop · Contact',
    title: 'That’s the walkthrough.',
    message: 'If the work lines up with what you’re building, I’d be happy to talk.'
  }
];

const getStopForPath = (pathname: string) => {
  if (pathname.startsWith('/projects/')) {
    return {
      path: pathname,
      eyebrow: 'Project deep dive',
      title: 'Let’s open the hood.',
      message: 'This case study goes deeper into the architecture, product flow and engineering decisions behind the project.'
    };
  }

  return tourStops.find((stop) => stop.path === pathname) ?? tourStops[0];
};

export const KartikAvatar: React.FC<{ walking: boolean; compact: boolean; sipping: boolean }> = ({
  walking,
  compact,
  sipping
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={'kartik-avatar-stage ' + (compact ? 'kartik-avatar-compact' : '')}
      animate={
        prefersReducedMotion
          ? undefined
          : walking
            ? { x: [0, -14, 14, 0], y: [0, -5, 0] }
            : { y: [0, -4, 0], rotateY: [-3, 3, -3] }
      }
      transition={{ duration: walking ? 0.6 : 4.8, repeat: walking ? 0 : Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <div className="kartik-avatar-shadow" />
      <div className="kartik-avatar-person">
        <motion.div
          className="kartik-avatar-head"
          animate={
            prefersReducedMotion
              ? undefined
              : sipping
                ? { rotateZ: [0, -5, -5, 0], y: [0, 2, 2, 0] }
                : { rotateZ: [0, 2, 0, -2, 0] }
          }
          transition={{ duration: sipping ? 2.7 : 6, repeat: Infinity, repeatDelay: sipping ? 1.6 : 0 }}
        >
          <div className="kartik-avatar-hair" />
          <div className="kartik-avatar-ear kartik-avatar-ear-left" />
          <div className="kartik-avatar-ear kartik-avatar-ear-right" />
          <div className="kartik-avatar-face">
            <span className="kartik-avatar-brow kartik-avatar-brow-left" />
            <span className="kartik-avatar-brow kartik-avatar-brow-right" />
            <span className="kartik-avatar-eye kartik-avatar-eye-left" />
            <span className="kartik-avatar-eye kartik-avatar-eye-right" />
            <span className="kartik-avatar-nose" />
            <span className="kartik-avatar-smile" />
          </div>
        </motion.div>

        <div className="kartik-avatar-neck" />
        <div className="kartik-avatar-torso">
          <div className="kartik-avatar-shirt-panel" />
          <div className="kartik-avatar-shirt-line" />
        </div>

        <motion.div
          className="kartik-avatar-arm kartik-avatar-arm-left"
          animate={prefersReducedMotion ? undefined : walking ? { rotateZ: [18, -20, 18] } : { rotateZ: [8, 2, 8] }}
          transition={{ duration: walking ? 0.5 : 3.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="kartik-avatar-hand" />
        </motion.div>

        <motion.div
          className="kartik-avatar-arm kartik-avatar-arm-right"
          animate={
            prefersReducedMotion
              ? undefined
              : sipping
                ? { rotateZ: [8, -58, -58, 8], x: [0, -9, -9, 0], y: [0, -18, -18, 0] }
                : walking
                  ? { rotateZ: [-18, 20, -18] }
                  : { rotateZ: [6, 10, 6] }
          }
          transition={{
            duration: sipping ? 2.7 : walking ? 0.5 : 3.8,
            repeat: Infinity,
            repeatDelay: sipping ? 1.6 : 0,
            ease: 'easeInOut'
          }}
        >
          <div className="kartik-avatar-hand kartik-avatar-coffee-hand">
            <div className="kartik-avatar-mug">
              <span className="kartik-avatar-mug-handle" />
              <motion.span
                className="kartik-avatar-steam kartik-avatar-steam-one"
                animate={prefersReducedMotion ? undefined : { y: [0, -12], x: [0, 3, -2], opacity: [0, 0.72, 0] }}
                transition={{ duration: 1.7, repeat: Infinity }}
              />
              <motion.span
                className="kartik-avatar-steam kartik-avatar-steam-two"
                animate={prefersReducedMotion ? undefined : { y: [0, -14], x: [0, -2, 2], opacity: [0, 0.55, 0] }}
                transition={{ duration: 1.9, repeat: Infinity, delay: 0.45 }}
              />
            </div>
          </div>
        </motion.div>

        <div className="kartik-avatar-hips" />
        <motion.div
          className="kartik-avatar-leg kartik-avatar-leg-left"
          animate={prefersReducedMotion ? undefined : walking ? { rotateZ: [-17, 18, -17] } : { rotateZ: 0 }}
          transition={{ duration: 0.5, repeat: walking ? Infinity : 0, ease: 'easeInOut' }}
        >
          <div className="kartik-avatar-shoe" />
        </motion.div>
        <motion.div
          className="kartik-avatar-leg kartik-avatar-leg-right"
          animate={prefersReducedMotion ? undefined : walking ? { rotateZ: [17, -18, 17] } : { rotateZ: 0 }}
          transition={{ duration: 0.5, repeat: walking ? Infinity : 0, ease: 'easeInOut' }}
        >
          <div className="kartik-avatar-shoe" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Kartik3DGuide: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [tourActive, setTourActive] = useState(false);
  const [walking, setWalking] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(true);

  const currentStop = useMemo(() => getStopForPath(location.pathname), [location.pathname]);
  const currentIndex = tourStops.findIndex((stop) => stop.path === location.pathname);

  const travelTo = (path: string) => {
    setWalking(true);
    setBubbleOpen(false);

    window.setTimeout(
      () => {
        navigate(path);
        window.setTimeout(() => {
          setWalking(false);
          setBubbleOpen(true);
        }, prefersReducedMotion ? 40 : 420);
      },
      prefersReducedMotion ? 40 : 520
    );
  };

  const startTour = () => {
    setVisible(true);
    setTourActive(true);
    travelTo('/experience');
  };

  useEffect(() => {
    const handleStartTour = () => startTour();
    window.addEventListener(START_TOUR_EVENT, handleStartTour);
    return () => window.removeEventListener(START_TOUR_EVENT, handleStartTour);
  });

  useEffect(() => {
    if (!tourActive) return;
    setBubbleOpen(true);
  }, [location.pathname, tourActive]);

  const nextStop = () => {
    if (location.pathname.startsWith('/projects/')) {
      travelTo('/lab');
      return;
    }

    const index = currentIndex >= 0 ? currentIndex : 0;
    if (index >= tourStops.length - 1) {
      setTourActive(false);
      travelTo('/');
      return;
    }

    travelTo(tourStops[index + 1].path);
  };

  if (location.pathname === '/') return null;

  if (!visible) {
    return (
      <button
        type="button"
        onClick={() => {
          setVisible(true);
          setBubbleOpen(true);
        }}
        className="kartik-guide-restore"
        aria-label="Restore Kartik guide"
      >
        <Map size={15} />
        <span>Guide</span>
      </button>
    );
  }

  return (
    <div className="kartik-guide-shell kartik-guide-shell-compact">
      <AnimatePresence>
        {bubbleOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 8, scale: 0.97, filter: 'blur(5px)' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="kartik-guide-dialogue"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Coffee size={12} className="text-cyan-300" />
                  <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-cyan-300/80">
                    {currentStop.eyebrow}
                  </p>
                </div>
                <h3 className="mt-2 text-sm font-semibold tracking-tight text-white sm:text-base">{currentStop.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setBubbleOpen(false)}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-slate-600 transition hover:text-white"
                aria-label="Minimize guide message"
              >
                <X size={12} />
              </button>
            </div>

            <p className="mt-2.5 text-[11px] leading-5 text-slate-400 sm:text-xs sm:leading-6">{currentStop.message}</p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button type="button" onClick={nextStop} className="kartik-guide-primary-action">
                {currentIndex >= tourStops.length - 1 ? <RotateCcw size={12} /> : <ChevronRight size={12} />}
                {currentIndex >= tourStops.length - 1 ? 'Back to Home' : 'Next stop'}
              </button>

              <button
                type="button"
                onClick={() => setVisible(false)}
                className="rounded-lg px-2.5 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-600 transition hover:text-slate-300"
              >
                Hide guide
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!bubbleOpen && (
        <button
          type="button"
          onClick={() => setBubbleOpen(true)}
          className="kartik-guide-message-button"
          aria-label="Open Kartik guide message"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          Talk to Kartik
        </button>
      )}

      <KartikAvatar walking={walking} compact sipping={false} />
    </div>
  );
};

export default Kartik3DGuide;
