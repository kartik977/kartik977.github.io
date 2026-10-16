import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Play } from 'lucide-react';

const beats = [
  { at: 250, value: 1 },
  { at: 1250, value: 2 },
  { at: 2150, value: 3 },
  { at: 3000, value: 4 },
  { at: 3850, value: 5 }
];

const portrait = "/WhatsApp%20Image%202025-08-07%20at%2010.48.20%20AM.jpeg";

const RuntimeOpening: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const reduced = useReducedMotion();
  const [beat, setBeat] = useState(reduced ? 5 : 0);

  useEffect(() => {
    if (reduced) return;
    const timers = beats.map(({ at, value }) => window.setTimeout(() => setBeat(value), at));
    return () => timers.forEach(window.clearTimeout);
  }, [reduced]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter') onDone();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);

  return (
    <motion.div
      className="runtime-opening"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.035, filter: 'blur(14px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-label="Portfolio opening"
    >
      <div className="runtime-opening-glow" aria-hidden="true" />
      <motion.div
        className="runtime-opening-scan"
        aria-hidden="true"
        animate={reduced ? undefined : { x: ['-130%', '160%'] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
      />

      <motion.p
        className="runtime-opening-studio"
        initial={{ opacity: 0, letterSpacing: '0.18em' }}
        animate={beat >= 1 ? { opacity: beat === 1 ? 1 : 0, letterSpacing: '0.55em' } : {}}
        transition={{ duration: 0.8 }}
      >
        BACKEND ENGINEERING • CLOUD • AI
      </motion.p>

      <motion.div
        className="runtime-opening-portrait"
        initial={{ opacity: 0, scale: 1.12, filter: 'blur(18px) brightness(.45)' }}
        animate={beat >= 3 ? { opacity: 0.86, scale: 1, filter: 'blur(0px) brightness(.82)' } : {}}
        transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={portrait} alt="" />
      </motion.div>

      <div className="runtime-opening-title-wrap">
        <motion.h1
          className="runtime-opening-name"
          initial={{ opacity: 0, scale: 1.18, filter: 'blur(16px)', letterSpacing: '0.35em' }}
          animate={beat >= 2 ? { opacity: 1, scale: 1, filter: 'blur(0px)', letterSpacing: '0.02em', y: beat >= 3 ? 'var(--opening-title-shift)' : 0 } : {}}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          KARTIK
        </motion.h1>
        <motion.p
          className="runtime-opening-series"
          initial={{ opacity: 0, letterSpacing: '0.9em' }}
          animate={beat >= 2 ? { opacity: 1, letterSpacing: '0.48em', y: beat >= 3 ? 'var(--opening-title-shift)' : 0 } : {}}
          transition={{ duration: 0.95, delay: 0.15 }}
        >
          BACKEND ENGINEER
        </motion.p>
      </div>

      <motion.div
        className="runtime-opening-bottom"
        initial={{ opacity: 0, y: 20 }}
        animate={beat >= 4 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75 }}
      >
        <p>BACKEND SYSTEMS • CLOUD DELIVERY • AI TOOLING</p>
        <motion.button
          type="button"
          onClick={onDone}
          className="runtime-play-button"
          initial={{ opacity: 0, scale: 0.86 }}
          animate={beat >= 5 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55 }}
        >
          <Play size={16} fill="currentColor" />
          VIEW PORTFOLIO
        </motion.button>
      </motion.div>

      <button type="button" onClick={onDone} className="runtime-skip">SKIP INTRO</button>
    </motion.div>
  );
};

export default RuntimeOpening;
