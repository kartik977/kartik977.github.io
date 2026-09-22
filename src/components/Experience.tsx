import React, { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring
} from 'framer-motion';
import {
  Activity,
  Bot,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  Gauge,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Development Engineer',
    company: 'Cognizant',
    location: 'Plano, TX',
    period: 'September 2023 – Present',
    accent: 'cyan',
    summary: 'Own architecture decisions and cross-team technical delivery for mission-critical debit-card, servicing, multi-lender and payment systems across Capital One and Verizon engagements.',
    highlights: [
      {
        icon: Gauge,
        title: '~72 ms core API latency',
        text: 'Re-engineered Java and Spring Boot services, reducing API response time 50% across banking workflows.'
      },
      {
        icon: Rocket,
        title: '25% faster deployments',
        text: 'Automated serverless delivery with AWS Lambda and CloudFormation to improve release speed and consistency.'
      },
      {
        icon: Code2,
        title: 'Java → Node.js / TypeScript',
        text: 'Led migration of distributed APIs for core debit-card workflows while coordinating dependent interfaces and rollout.'
      },
      {
        icon: Bot,
        title: 'VulnHunter-Fix',
        text: 'Built a Claude Code security-remediation skill that remediated 100+ vulnerabilities and saved an estimated 400+ hours of manual work.'
      },
      {
        icon: Activity,
        title: '35% faster incident detection',
        text: 'Implemented New Relic monitoring, structured logging and error tracking to improve production response.'
      },
      {
        icon: ShieldCheck,
        title: 'Verizon payments',
        text: 'Built backend services using Cassandra for high-throughput persistence, improving scalability 25% while maintaining data consistency.'
      }
    ]
  },
  {
    title: 'Graduate Research & Teaching Assistant',
    company: 'University of Texas at Arlington',
    location: 'Arlington, TX',
    period: 'August 2022 – May 2023',
    accent: 'violet',
    summary: 'Supported instruction and research across data analysis, statistical modeling and predictive analytics.',
    highlights: [
      {
        icon: Code2,
        title: 'Python & R instruction',
        text: 'Guided students from analytical requirements through working code, modeling, visualization and project deliverables.'
      }
    ]
  },
  {
    title: 'Software Developer I',
    company: 'Perpule',
    location: 'Gurugram, India',
    period: '2019 – 2021',
    accent: 'emerald',
    summary: 'Built backend components and REST APIs for a high-volume self-checkout retail platform.',
    highlights: [
      {
        icon: Code2,
        title: 'Backend + REST APIs',
        text: 'Built and maintained Python-based backend components and scalable algorithms that improved transaction-processing efficiency.'
      },
      {
        icon: CheckCircle2,
        title: 'Cross-functional delivery',
        text: 'Partnered with product, QA and engineering teams to validate integrations, ship business-critical features and resolve production issues.'
      }
    ]
  }
];

const impactStats = [
  ['50%', 'API latency reduction'],
  ['25%', 'Deployment speed'],
  ['40%', 'Automated test coverage'],
  ['100+', 'Vulnerabilities remediated']
];

const Experience: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.78', 'end 0.28']
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35
  });

  return (
    <section className="portfolio-page min-h-screen">
      <div className="page-grid absolute inset-0" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            <Clock3 size={14} />
            Professional journey
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            From implementation
            <span className="block text-slate-400">to architecture and ownership.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My work has evolved toward end-to-end responsibility across backend architecture, cloud delivery,
            automated testing, observability, security remediation and production reliability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mb-14 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impactStats.map(([value, label], index) => (
            <motion.div
              key={label}
              whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950/45 p-5 text-center backdrop-blur-xl"
            >
              <motion.div
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.08 }}
              />
              <div className="text-2xl font-semibold tracking-tight text-white">{value}</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div ref={timelineRef} className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-[19px] top-3 w-px bg-white/[0.07] sm:left-[27px]" />
          <motion.div
            style={{ scaleY: progress, transformOrigin: 'top' }}
            className="absolute bottom-0 left-[19px] top-3 w-px bg-gradient-to-b from-cyan-300 via-blue-400 to-violet-400 shadow-[0_0_18px_rgba(34,211,238,0.45)] sm:left-[27px]"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -34 : 34, y: 18 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.7,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative pl-14 sm:pl-20"
              >
                <motion.div
                  whileInView={prefersReducedMotion ? undefined : { scale: [0.82, 1.12, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-slate-950 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)] sm:h-14 sm:w-14"
                >
                  <Building2 size={20} />
                </motion.div>

                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  className="group overflow-hidden rounded-[1.85rem] border border-white/[0.075] bg-slate-950/50 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl transition-colors duration-500 hover:border-cyan-300/15"
                >
                  <div className="experience-sheen pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative border-b border-white/[0.065] p-5 sm:p-7">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          {index === 0 && (
                            <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                              Current
                            </span>
                          )}
                        </div>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">{exp.title}</h2>
                        <p className="mt-1 text-base font-medium text-slate-300">{exp.company}</p>
                        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">{exp.summary}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-400">
                        <span className="inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2">
                          <MapPin size={14} /> {exp.location}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2">
                          <CalendarDays size={14} /> {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative grid gap-3 p-5 sm:grid-cols-2 sm:p-7">
                    {exp.highlights.map((highlight, highlightIndex) => {
                      const Icon = highlight.icon;
                      return (
                        <motion.div
                          key={highlight.title}
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: prefersReducedMotion ? 0 : 0.5,
                            delay: prefersReducedMotion ? 0 : highlightIndex * 0.055
                          }}
                          whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }}
                          className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-colors duration-300 hover:bg-white/[0.045]"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.05] text-cyan-300">
                            <Icon size={16} />
                          </div>
                          <h3 className="mt-4 text-sm font-semibold text-slate-100">{highlight.title}</h3>
                          <p className="mt-2 text-xs leading-5 text-slate-500">{highlight.text}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="mx-auto mt-16 max-w-5xl rounded-[1.75rem] border border-violet-400/10 bg-gradient-to-br from-violet-400/[0.05] to-cyan-400/[0.025] p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/[0.06] text-violet-300">
              <Sparkles size={19} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">The pattern behind the timeline</p>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-400">
                Each role moved me closer to full engineering ownership: building services, validating integrations,
                optimizing performance, automating delivery, monitoring production and now creating AI-assisted tooling
                that improves the development lifecycle itself.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
