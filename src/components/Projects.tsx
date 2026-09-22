import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Gamepad2,
  Layers3,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

const projectData = [
  {
    title: 'React To-Do Web Application with Redux',
    description: 'Developed a React web application utilizing Redux for state management and data flow. Implemented Redux fundamentals including store, reducers, actions, and dispatching actions.',
    technologies: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
    icon: Code2,
    category: 'Frontend'
  },
  {
    title: 'Image Generator using OpenAI and Dall-E',
    description: 'Developed an image generation web application using OpenAI\'s DALL-E API and Flask that allows users to generate images by describing them in natural language text.',
    technologies: ['Node.js', 'Express.js', 'OpenAI API', 'Flask', 'Python', 'HTML', 'CSS', 'JavaScript'],
    icon: BrainCircuit,
    category: 'AI'
  },
  {
    title: 'Tableau Project - Netflix Dashboard',
    description: 'Developed an interactive Netflix dashboard using Tableau, integrating multiple data sources to analyze content metrics and user engagement for comprehensive insights.',
    technologies: ['Tableau', 'Data Visualization', 'Analytics', 'Dashboard'],
    icon: BarChart3,
    category: 'Analytics'
  },
  {
    title: 'HR Survey Analysis Power BI',
    description: 'Analyzed survey data from 630 individuals using PowerBI, revealing higher average ratings for better salary and related factors, resulting in a 20% increase in efficiency.',
    technologies: ['PowerBI', 'DAX', 'Data Analysis', 'Survey Analysis'],
    icon: BarChart3,
    category: 'BI'
  },
  {
    title: 'Human Resource Management System',
    description: 'Implemented MongoDB Atlas for automated and streamlined employee data management, while utilizing Cloud Firebase for backend execution and deploying the web interface on Google Cloud\'s App Engine.',
    technologies: ['MongoDB Atlas', 'Firebase', 'Google Cloud', 'App Engine', 'Web Development'],
    icon: Database,
    category: 'Full Stack'
  },
  {
    title: 'Alien Invasion Game',
    description: 'Engineered a Python-based game with over 3 objects and dynamic functionalities, reducing server response time by 70%. Output of the game is a current score feature with difficulty level increasing with each level.',
    technologies: ['Python', 'Game Development', 'Object-Oriented Programming'],
    icon: Gamepad2,
    category: 'Python'
  },
  {
    title: 'Detected Fraudulent Job Postings using Machine Learning',
    description: 'Identified fraudulent job postings from a dataset of over 18k jobs, with 4% being fake. Utilized XG-Boost and Bi-directional LSTM algorithms to develop a machine learning model.',
    technologies: ['Machine Learning', 'XG-Boost', 'LSTM', 'Python', 'Deep Learning', 'Fraud Detection'],
    icon: ShieldCheck,
    category: 'Machine Learning'
  }
];

const Projects: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="portfolio-page min-h-screen">
      <div className="page-grid absolute inset-0" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/[0.05] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
            <Layers3 size={14} />
            Selected work
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Projects that turn ideas
            <span className="block text-slate-400">into working systems.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A mix of application development, analytics, machine learning and cloud-backed work.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectData.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.58,
                  delay: prefersReducedMotion ? 0 : (index % 3) * 0.06,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={prefersReducedMotion ? undefined : { y: -7 }}
                className="group relative overflow-hidden rounded-[1.65rem] border border-white/[0.075] bg-slate-950/44 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/15 sm:p-6"
              >
                <div className="project-card-glow absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-cyan-300 transition duration-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/[0.07]">
                      <Icon size={20} />
                    </div>
                    <span className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="mt-6 text-xl font-semibold leading-7 tracking-tight text-white">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/[0.065] bg-white/[0.025] px-2.5 py-1.5 text-[11px] font-medium text-slate-400 transition-colors duration-300 group-hover:border-white/10 group-hover:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.055] pt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                      Case study {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-300/40 transition-all duration-500 group-hover:w-20" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {[
            ['07', 'Projects'],
            ['15+', 'Technologies'],
            ['04', 'Core domains']
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/[0.065] bg-white/[0.025] p-5 text-center backdrop-blur-xl"
            >
              <div className="text-2xl font-semibold tracking-tight text-white">{value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.035] p-4 text-sm leading-6 text-slate-400"
        >
          <Sparkles size={17} className="mt-1 shrink-0 text-cyan-300" />
          This version intentionally keeps project interactions clean. Once the layout is approved, we can add real GitHub links, screenshots, architecture diagrams and expandable case studies.
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
