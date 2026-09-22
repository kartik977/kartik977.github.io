import React, { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import {
  Activity,
  Bot,
  CheckCircle2,
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
    period: '2023 — Present',
    kicker: 'BANKING · PAYMENTS · CLOUD',
    statement: 'I moved from building services to owning architecture, delivery and production outcomes.',
    accent: 'cyan',
    metrics: [
      ['50%', 'lower API latency'],
      ['25%', 'faster deployments'],
      ['100+', 'vulnerabilities fixed']
    ],
    highlights: [
      {
        icon: Gauge,
        title: '~72 ms core API latency',
        text: 'Re-engineered Java and Spring Boot services for banking workflows and cut response time by 50%.'
      },
      {
        icon: Rocket,
        title: 'Serverless delivery',
        text: 'Automated AWS Lambda and CloudFormation deployments to improve release speed and consistency.'
      },
      {
        icon: Code2,
        title: 'Java → TypeScript migration',
        text: 'Led migration of distributed debit-card APIs to Node.js and TypeScript across dependent services.'
      },
      {
        icon: Bot,
        title: 'VulnHunter-Fix',
        text: 'Built a Claude Code remediation skill that fixed 100+ vulnerabilities and saved an estimated 400+ hours.'
      },
      {
        icon: Activity,
        title: 'Production observability',
        text: 'Used New Relic, structured logging and error tracking to cut incident detection time by 35%.'
      },
      {
        icon: ShieldCheck,
        title: 'Verizon payments',
        text: 'Built Cassandra-backed payment services that improved scalability by 25% while preserving consistency.'
      }
    ]
  },
  {
    title: 'Graduate Research & Teaching Assistant',
    company: 'University of Texas at Arlington',
    location: 'Arlington, TX',
    period: '2022 — 2023',
    kicker: 'DATA · MODELING · TEACHING',
    statement: 'I learned how to turn complex technical ideas into something another person can actually use.',
    accent: 'violet',
    metrics: [
      ['Python', 'hands-on instruction'],
      ['R', 'statistical modeling'],
      ['UTA', 'research + teaching']
    ],
    highlights: [
      {
        icon: Code2,
        title: 'From requirements to code',
        text: 'Guided students through data analysis, predictive modeling, visualization and working project deliverables.'
      },
      {
        icon: CheckCircle2,
        title: 'Technical communication',
        text: 'Translated analytical concepts into practical labs, tutorials and implementation guidance.'
      }
    ]
  },
  {
    title: 'Software Developer I',
    company: 'Perpule',
    location: 'Gurugram, India',
    period: '2019 — 2021',
    kicker: 'RETAIL · REST APIS · SCALE',
    statement: 'This is where backend engineering became real: transactions, integrations and production issues.',
    accent: 'emerald',
    metrics: [
      ['REST', 'backend APIs'],
      ['Python', 'core services'],
      ['Retail', 'high-volume platform']
    ],
    highlights: [
      {
        icon: Code2,
        title: 'Self-checkout backend',
        text: 'Built Python backend components and REST APIs for a high-volume self-checkout platform.'
      },
      {
        icon: CheckCircle2,
        title: 'Cross-functional delivery',
        text: 'Worked with product, QA and engineering to validate integrations, ship features and resolve production issues.'
      }
    ]
  }
];

const accentClasses: Record<string, string> = {
  cyan: 'from-cyan-400/25 via-blue-500/10 to-transparent',
  violet: 'from-violet-400/25 via-fuchsia-500/10 to-transparent',
  emerald: 'from-emerald-400/25 via-cyan-500/10 to-transparent'
};

const ExperienceChapter: React.FC<{
  experience: typeof experiences[number];
  index: number;
}> = ({ experience, index }) => {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.82', 'end 0.24']
  });

  const eased = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 25,
    mass: 0.35
  });
  const numberY = useTransform(eased, [0, 1], prefersReducedMotion ? [0, 0] : [80, -60]);
  const glowScale = useTransform(eased, [0, 0.55, 1], prefersReducedMotion ? [1, 1, 1] : [0.82, 1.08, 0.94]);
  const glowOpacity = useTransform(eased, [0, 0.35, 1], [0.1, 0.34, 0.08]);

  return (
    <section ref={ref} className="experience-chapter relative min-h-[118vh]">
      <div className="sticky top-[88px] flex min-h-[calc(100vh-100px)] items-center overflow-hidden py-8">
        <motion.div
          style={{ scale: glowScale, opacity: glowOpacity }}
          className={'pointer-events-none absolute -right-20 top-[12%] h-[34rem] w-[34rem] rounded-full bg-gradient-to-br blur-3xl ' + accentClasses[experience.accent]}
        />

        <motion.div
          style={{ y: numberY }}
          className="pointer-events-none absolute -right-3 top-8 select-none text-[10rem] font-black leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[14rem] lg:text-[18rem]"
        >
          0{index + 1}
        </motion.div>

        <div className="container relative z-10 mx-auto w-full px-4">
          <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -38 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.35 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.68, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-32"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-bold text-cyan-200 backdrop-blur-xl">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">{experience.kicker}</p>
                  <p className="mt-1 text-sm text-slate-400">{experience.period}</p>
                </div>
              </div>

              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                {experience.company}
              </h2>
              <p className="mt-3 text-xl font-medium text-slate-400">{experience.title}</p>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={15} />
                {experience.location}
              </div>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
                {experience.statement}
              </p>

              <div className="mt-8 grid grid-cols-3 gap-2">
                {experience.metrics.map(([value, label], metricIndex) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: metricIndex * 0.08 }}
                    whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.025 }}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3.5 backdrop-blur-xl"
                  >
                    <p className="text-base font-semibold text-white sm:text-lg">{value}</p>
                    <p className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-[0.13em] text-slate-600">{label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-4">
              {experience.highlights.map((highlight, highlightIndex) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{
                      opacity: 0,
                      y: 70,
                      rotateX: prefersReducedMotion ? 0 : 8,
                      scale: prefersReducedMotion ? 1 : 0.96
                    }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.7,
                      delay: prefersReducedMotion ? 0 : highlightIndex * 0.07,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={prefersReducedMotion ? undefined : { x: 10, scale: 1.012 }}
                    className="experience-feature group relative overflow-hidden rounded-[1.6rem] border border-white/[0.075] bg-slate-950/58 p-5 shadow-[0_22px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-6"
                  >
                    <div className="experience-feature-light pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/12 bg-cyan-400/[0.055] text-cyan-300">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                          IMPACT {String(highlightIndex + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">{highlight.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{highlight.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience: React.FC = () => {
  return (
    <main className="experience-page relative bg-[#070b12]">
      <div className="experience-intro relative overflow-hidden px-4 pb-12 pt-20 sm:pt-24">
        <div className="experience-beam pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[70rem] -translate-x-1/2 opacity-70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="container relative z-10 mx-auto text-center"
        >
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 backdrop-blur-xl">
            <Sparkles size={14} className="text-cyan-300" />
            Career as a scroll story
          </div>
          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
            Three chapters.
            <span className="block text-slate-500">One engineering trajectory.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Scroll slowly. Each role takes over the screen and reveals the work that moved me closer to end-to-end engineering ownership.
          </p>
        </motion.div>
      </div>

      {experiences.map((experience, index) => (
        <ExperienceChapter key={experience.company} experience={experience} index={index} />
      ))}
    </main>
  );
};

export default Experience;
