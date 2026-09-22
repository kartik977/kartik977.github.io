import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Bot,
  Cloud,
  Code2,
  Database,
  Eye,
  Layers3,
  Network,
  TestTube2
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL']
  },
  {
    title: 'Frameworks & APIs',
    icon: Network,
    skills: ['Spring Boot', 'Node.js', 'NestJS', 'Express.js', 'REST APIs', 'GraphQL', 'React.js', 'Next.js', 'Flask', 'Microservices']
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS Lambda', 'AWS CloudFormation', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD']
  },
  {
    title: 'Databases & Messaging',
    icon: Database,
    skills: ['Cassandra', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle', 'Apache Kafka']
  },
  {
    title: 'Testing & Observability',
    icon: TestTube2,
    skills: ['JUnit', 'Rest Assured', 'Karate BDD', 'JMeter', 'k6', 'New Relic', 'Postman']
  },
  {
    title: 'AI & Developer Tools',
    icon: Bot,
    skills: ['Claude Code', 'Claude Skills', 'GitHub Copilot', 'OpenAI API', 'Prompt Engineering', 'Agentic AI Workflows']
  }
];

const coreStack = ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'AWS', 'GraphQL', 'REST APIs', 'New Relic'];

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
            Backend depth,
            <span className="block text-slate-400">cloud delivery and AI tooling.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            The stack from my current resume, organized around how I actually build, ship, test and operate software.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mb-8 flex max-w-5xl flex-wrap justify-center gap-2 rounded-2xl border border-white/[0.065] bg-white/[0.02] p-4 backdrop-blur-xl"
        >
          {coreStack.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.16 + index * 0.035 }}
              className="rounded-xl border border-cyan-300/10 bg-cyan-300/[0.04] px-3 py-2 text-xs font-semibold text-cyan-100"
            >
              {skill}
            </motion.span>
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
                    <span key={skill} className="rounded-lg border border-white/[0.055] bg-white/[0.02] px-2.5 py-1.5 text-[11px] font-medium text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 flex max-w-4xl items-start gap-4 rounded-2xl border border-violet-400/10 bg-violet-400/[0.03] p-5"
        >
          <Eye size={18} className="mt-1 shrink-0 text-violet-300" />
          <p className="text-sm leading-6 text-slate-400">
            The portfolio intentionally avoids percentage-style skill bars. The stronger signal is where each technology appears in real work:
            APIs, migrations, deployments, testing, observability, security remediation and production support.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
