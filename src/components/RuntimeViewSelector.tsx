import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, FolderKanban, Layers3 } from 'lucide-react';

export type RuntimeView = 'recruiter' | 'engineer' | 'projects' | 'full';

const views: Array<{
  id: RuntimeView;
  name: string;
  blurb: string;
  icon: React.ElementType;
  accent: string;
}> = [
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Impact, experience, projects and fit first.',
    icon: Briefcase,
    accent: '#fb7185'
  },
  {
    id: 'engineer',
    name: 'Engineer',
    blurb: 'Architecture, backend depth, cloud and lab first.',
    icon: Code2,
    accent: '#38bdf8'
  },
  {
    id: 'projects',
    name: 'Projects',
    blurb: 'Case studies and shipped product work first.',
    icon: FolderKanban,
    accent: '#a78bfa'
  },
  {
    id: 'full',
    name: 'Full Runtime',
    blurb: 'The complete portfolio in its intended order.',
    icon: Layers3,
    accent: '#34d399'
  }
];

const RuntimeViewSelector: React.FC<{ onPick: (view: RuntimeView) => void }> = ({ onPick }) => {
  return (
    <motion.div
      className="runtime-viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
      transition={{ duration: 0.65 }}
      role="dialog"
      aria-label="Choose portfolio view"
    >
      <div className="runtime-viewer-glow" aria-hidden="true" />
      <motion.div
        className="runtime-viewer-heading"
        initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.7 }}
      >
        <p>KARTIK / RUNTIME</p>
        <h2>Choose your view</h2>
        <span>Same experience. Different signal first.</span>
      </motion.div>

      <motion.div
        className="runtime-view-grid"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.16 } } }}
      >
        {views.map((view) => {
          const Icon = view.icon;
          return (
            <motion.button
              key={view.id}
              type="button"
              onClick={() => onPick(view.id)}
              className="runtime-view-card"
              style={{ '--runtime-accent': view.accent } as React.CSSProperties}
              variants={{
                hidden: { opacity: 0, y: 22, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } }
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <span className="runtime-view-icon"><Icon size={28} /></span>
              <strong>{view.name}</strong>
              <span>{view.blurb}</span>
            </motion.button>
          );
        })}
      </motion.div>

      <p className="runtime-view-note">You can switch this anytime from the navigation.</p>
    </motion.div>
  );
};

export default RuntimeViewSelector;
