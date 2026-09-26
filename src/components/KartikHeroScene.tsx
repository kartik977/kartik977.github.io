import React from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Coffee, Cpu, Play, Sparkles } from 'lucide-react';
import { KartikAvatar } from './Kartik3DGuide';
import './KartikHeroScene.css';

const START_TOUR_EVENT = 'portfolio:start-kartik-tour';

const KartikHeroScene: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 18, mass: 0.5 });
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 18, mass: 0.5 });

  const sceneRotateY = useTransform(smoothX, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [-5, 5]);
  const sceneRotateX = useTransform(smoothY, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [4, -4]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], ['28%', '72%']);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ['32%', '68%']);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const startTour = () => {
    window.dispatchEvent(new Event(START_TOUR_EVENT));
  };

  return (
    <div
      className="kartik-hero-scene-wrap"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div
        className="kartik-hero-scene-glow"
        style={{ left: glowX, top: glowY }}
        aria-hidden="true"
      />

      <motion.div
        className="kartik-hero-scene"
        style={{ rotateX: sceneRotateX, rotateY: sceneRotateY }}
      >
        <div className="kartik-hero-window" aria-hidden="true">
          <span className="kartik-hero-city-dot kartik-hero-city-dot-1" />
          <span className="kartik-hero-city-dot kartik-hero-city-dot-2" />
          <span className="kartik-hero-city-dot kartik-hero-city-dot-3" />
          <span className="kartik-hero-city-line" />
        </div>

        <div className="kartik-hero-ambient-panel kartik-hero-ambient-panel-left" aria-hidden="true">
          <div className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-cyan-300/70">
            <Cpu size={10} />
            system map
          </div>
          <div className="mt-3 flex items-center gap-2">
            {['API', 'Service', 'AWS', 'Data'].map((item, index) => (
              <React.Fragment key={item}>
                <span className="kartik-hero-node">{item}</span>
                {index < 3 && <span className="kartik-hero-node-line">→</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[8px] text-slate-600">
            <span>prod.ready</span>
            <span className="text-emerald-300/70">200 OK</span>
          </div>
        </div>

        <motion.div
          className="kartik-hero-code-panel"
          animate={prefersReducedMotion ? undefined : { y: [0, -5, 0], opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <span className="text-cyan-300">GET</span> /engineer/kartik
          <span className="ml-2 text-emerald-300">72 ms</span>
        </motion.div>

        <div className="kartik-hero-character-zone">
          <div className="kartik-hero-chair" aria-hidden="true">
            <div className="kartik-hero-chair-back" />
            <div className="kartik-hero-chair-seat" />
          </div>

          <div className="kartik-hero-character-scale">
            <KartikAvatar walking={false} compact={false} sipping />
          </div>
        </div>

        <div className="kartik-hero-desk" aria-hidden="true">
          <div className="kartik-hero-desk-edge" />
          <div className="kartik-hero-laptop">
            <div className="kartik-hero-laptop-screen">
              <div className="kartik-hero-laptop-topbar">
                <span />
                <span />
                <span />
              </div>
              <div className="kartik-hero-terminal-line kartik-hero-terminal-line-1" />
              <div className="kartik-hero-terminal-line kartik-hero-terminal-line-2" />
              <div className="kartik-hero-terminal-line kartik-hero-terminal-line-3" />
              <div className="kartik-hero-terminal-status">
                <span>deploy</span>
                <strong>healthy</strong>
              </div>
            </div>
            <div className="kartik-hero-laptop-base" />
          </div>
          <div className="kartik-hero-desk-light" />
        </div>

        <motion.div
          className="kartik-hero-dialogue-card"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2">
            <Coffee size={13} className="text-cyan-300" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-cyan-300/75">
              coffee loaded · guide ready
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
            Hey — I’m Kartik.
          </h2>
          <p className="mt-3 max-w-md text-xs leading-6 text-slate-400 sm:text-sm">
            I’ll walk you through the production systems, projects and engineering decisions behind my work.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button type="button" onClick={startTour} className="kartik-hero-tour-button">
              <Play size={13} />
              Start walkthrough
              <ArrowRight size={13} />
            </button>
            <span className="text-[9px] font-medium uppercase tracking-[0.11em] text-slate-600">
              or explore on your own
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2 border-t border-white/[0.055] pt-3 text-[8px] font-semibold uppercase tracking-[0.13em] text-slate-700">
            <Sparkles size={10} className="text-violet-300/60" />
            stage 1 · stylized 3D guide prototype
          </div>
        </motion.div>

        <div className="kartik-hero-floor-glow" aria-hidden="true" />
      </motion.div>
    </div>
  );
};

export default KartikHeroScene;
