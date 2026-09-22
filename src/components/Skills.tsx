import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BarChart3,
  Cloud,
  Code2,
  Database,
  Globe2,
  Layers3,
  Wrench
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'R', 'SQL', 'HTML', 'CSS']
  },
  {
    title: 'Cloud Services',
    icon: Cloud,
    skills: ['Google Cloud Platform (GCP)', 'Amazon Web Services (AWS)', 'Microsoft Azure']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MS SQL Server', 'MySQL', 'Oracle DB', 'Postgres', 'MongoDB']
  },
  {
    title: 'Data Visualization',
    icon: BarChart3,
    skills: ['Excel', 'Tableau', 'PowerBI']
  },
  {
    title: 'Web & Frameworks',
    icon: Globe2,
    skills: ['React.js', 'Node.js', 'Express.js', 'Flask', 'Django', 'Rest Assured', 'Karate', 'TypeScript', 'GraphQL']
  },
  {
    title: 'Engineering Tooling',
    icon: Wrench,
    skills: ['Git', 'Docker', 'Kubernetes', 'Restful API', 'Big Query', 'Pandas', 'Numpy', 'PyTorch', 'CI/CD', 'TensorFlow', 'Jenkins', 'Kafka', 'JMeter', 'K6', 'Junit']
  }
];

const coreStack = ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'AWS', 'GraphQL', 'REST', 'JMeter'];

const Skills: React.FC = () => {
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
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            <Layers3 size={14} />
            Technical stack
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Tools for building,
            <span className="block text-slate-400">shipping and understanding systems.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My stack spans backend development, cloud platforms, testing, data and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mb-8 flex max-w-5xl flex-wrap justify-center gap-2 rounded-2xl border border-white/[0.065] bg-white/[0.02] p-4 backdrop-blur-xl"
        >
          {coreStack.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-cyan-300/10 bg-cyan-300/[0.04] px-3 py-2 text-xs font-semibold text-cyan-100"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.55,
                  delay: prefersReducedMotion ? 0 : (index % 3) * 0.05
                }}
                whileHover={prefersReducedMotion ? undefined : { y: -5 }}
                className="group rounded-[1.6rem] border border-white/[0.07] bg-slate-950/42 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/15 sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.075] bg-white/[0.035] text-cyan-300 transition group-hover:bg-cyan-300/[0.055]">
                  <Icon size={20} />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-white">{category.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.055] bg-white/[0.02] px-2.5 py-1.5 text-[11px] font-medium text-slate-400 transition-colors duration-300 group-hover:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
