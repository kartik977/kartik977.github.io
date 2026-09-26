import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Coffee, Cpu, MousePointer2, Play, Sparkles } from 'lucide-react';
import KartikWebGLAvatar from './KartikWebGLAvatar';
import './KartikHeroScene.css';

const START_TOUR_EVENT = 'portfolio:start-kartik-tour';

const KartikHeroScene: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const startTour = () => {
    window.dispatchEvent(new Event(START_TOUR_EVENT));
  };

  return (
    <div className="kartik-hero-scene-wrap">
      <motion.div
        className="kartik-hero-scene-glow"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 70, -30, 0],
                y: [0, -45, 25, 0],
                scale: [1, 1.12, 0.94, 1]
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="kartik-hero-scene kartik-hero-scene-v2">
        <div className="kartik-hero-window" aria-hidden="true">
          <span className="kartik-hero-city-dot kartik-hero-city-dot-1" />
          <span className="kartik-hero-city-dot kartik-hero-city-dot-2" />
          <span className="kartik-hero-city-dot kartik-hero-city-dot-3" />
          <span className="kartik-hero-city-line" />
        </div>

        <div className="kartik-webgl-canvas-shell">
          <KartikWebGLAvatar mode="hero" walking={false} sipping={!prefersReducedMotion} />
        </div>

        <div className="kartik-hero-v2-badge" aria-hidden="true">
          <span className="kartik-hero-v2-dot" />
          WebGL character runtime
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

        <div className="kartik-hero-orbit-hint" aria-hidden="true">
          <MousePointer2 size={11} />
          Move cursor to orbit
        </div>

        <motion.div
          className="kartik-hero-dialogue-card kartik-hero-dialogue-card-v2"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
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
            This version is actually rendered in 3D. Move around the scene, then I’ll walk you through the systems,
            projects and engineering decisions behind my work.
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
            v2 · real meshes · lighting · camera depth
          </div>
        </motion.div>

        <div className="kartik-hero-floor-glow" aria-hidden="true" />
      </div>
    </div>
  );
};

export default KartikHeroScene;
