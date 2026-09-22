import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  Database,
  FileText,
  Github,
  Layers3,
  LockKeyhole,
  ScanSearch,
  Server,
  Sparkles,
  UploadCloud,
  Wand2,
  Workflow
} from 'lucide-react';

const landingScreenshot =
  'https://raw.githubusercontent.com/kartik977/AI-Job-Hunter/main/docs/screenshots/landing-page.png';
const dashboardScreenshot =
  'https://raw.githubusercontent.com/kartik977/AI-Job-Hunter/main/docs/screenshots/dashboard-overview.png';

const stack = [
  'Next.js 16',
  'TypeScript',
  'Tailwind CSS',
  'Supabase',
  'PostgreSQL',
  'Framer Motion',
  'Vitest',
  'Groq',
  'OpenAI'
];

const features = [
  {
    icon: UploadCloud,
    title: 'Resume ingestion',
    text: 'Uploads PDF or DOCX resumes, extracts text with pdf-parse or Mammoth, and keeps resume versions in the product.'
  },
  {
    icon: ScanSearch,
    title: 'ATS analysis',
    text: 'Compares resume content against a job description, finds keyword matches and gaps, and generates an ATS-oriented score.'
  },
  {
    icon: Wand2,
    title: 'Resume optimization',
    text: 'Uses analysis results to improve summary, experience and skills while preserving a structured resume model.'
  },
  {
    icon: Workflow,
    title: 'Job workflow',
    text: 'Includes a Kanban-style job tracker so applications can move through stages such as saved, interview and later states.'
  },
  {
    icon: FileText,
    title: 'PDF export',
    text: 'Renders optimized resume content back into a PDF, keeping the workflow inside one application.'
  },
  {
    icon: LockKeyhole,
    title: 'Multi-user SaaS foundation',
    text: 'Supabase provides authentication, PostgreSQL and private resume storage, with organization and team support included.'
  }
];

const architecture = [
  {
    icon: UploadCloud,
    label: 'Upload',
    sub: 'PDF / DOCX',
    detail: '5 MB guarded input'
  },
  {
    icon: FileText,
    label: 'Extract',
    sub: 'pdf-parse / Mammoth',
    detail: 'Text normalization'
  },
  {
    icon: Bot,
    label: 'Provider Router',
    sub: 'Local / Groq / OpenAI',
    detail: 'Environment-driven'
  },
  {
    icon: ScanSearch,
    label: 'ATS Engine',
    sub: 'Keywords + scoring',
    detail: 'Match and gap analysis'
  },
  {
    icon: Database,
    label: 'Supabase',
    sub: 'Auth / Postgres / Storage',
    detail: 'Persistent SaaS layer'
  },
  {
    icon: FileText,
    label: 'Output',
    sub: 'Optimize / Export',
    detail: 'Resume + cover letter'
  }
];

const principles = [
  {
    number: '01',
    title: 'Local-first by default',
    text: 'The app does not require a paid AI API. Its built-in parser and ATS analysis can run locally, which keeps the personal-use path at zero AI cost.'
  },
  {
    number: '02',
    title: 'Provider flexibility',
    text: 'A provider layer chooses between the local engine, Groq and OpenAI based on environment configuration, so higher-quality model output is optional rather than mandatory.'
  },
  {
    number: '03',
    title: 'Structured data over loose text',
    text: 'Resume parsing produces a structured resume model. Analysis, optimization and PDF rendering all work from that model instead of passing arbitrary text through every step.'
  }
];

const AIJobHunterCaseStudy: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.3
  });
  const heroY = useTransform(smooth, [0, 1], prefersReducedMotion ? [0, 0] : [0, 110]);
  const imageScale = useTransform(smooth, [0, 1], prefersReducedMotion ? [1, 1] : [1, 0.94]);
  const heroOpacity = useTransform(smooth, [0, 0.85], [1, 0.35]);

  return (
    <main className="case-study-page relative min-h-screen overflow-hidden bg-[#06090f]">
      <div className="projects-aurora pointer-events-none fixed inset-0 opacity-70" />

      <section ref={heroRef} className="relative min-h-[104vh] overflow-hidden px-4 pb-20 pt-20 sm:pt-24">
        <div className="page-grid absolute inset-0 opacity-40" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container relative z-10 mx-auto"
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-slate-400 backdrop-blur-xl transition hover:border-white/15 hover:text-white"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
              Projects
            </Link>

            <a
              href="https://github.com/kartik977/AI-Job-Hunter"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-slate-400 backdrop-blur-xl transition hover:border-white/15 hover:text-white"
            >
              <Github size={14} />
              Repository
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mx-auto mt-14 max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto flex w-fit items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.045] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200"
            >
              <Sparkles size={13} />
              Case study · AI / SaaS / Resume intelligence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl"
            >
              JobHunter AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              A production-style ATS resume optimization platform built to work without a paid AI dependency:
              upload a resume, parse it, score it against a job description, optimize it, export it, and track applications in one workflow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-8 flex flex-wrap justify-center gap-2"
            >
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[11px] font-medium text-slate-400"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            style={{ scale: imageScale }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-14 max-w-6xl [perspective:1600px]"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-cyan-400/10 via-blue-500/5 to-violet-500/10 blur-3xl" />
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : { rotateX: [0.8, -0.4, 0.8], rotateY: [-1.2, 1, -1.2], y: [0, -6, 0] }
              }
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-2 shadow-[0_45px_140px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-600">production-style SaaS UI</span>
              </div>
              <img
                src={landingScreenshot}
                alt="JobHunter AI landing page"
                className="w-full rounded-b-[1.45rem]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">The problem</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
                Resume tooling is usually fragmented.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                ['Parsing', 'Candidates often move between separate tools just to extract or rewrite resume content.'],
                ['ATS feedback', 'Keyword scoring and optimization are commonly locked behind paid AI APIs or subscriptions.'],
                ['Versioning', 'Tailored resumes quickly become difficult to organize across many job applications.'],
                ['Tracking', 'Resume optimization and application tracking usually live in separate workflows.']
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-xl"
                >
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">System architecture</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
              Local intelligence first.
              <span className="block text-slate-500">External AI only when you want it.</span>
            </h2>
          </motion.div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-slate-950/52 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_82%_80%,rgba(139,92,246,0.07),transparent_28%)]" />

            <div className="relative grid gap-3 lg:grid-cols-6">
              {architecture.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 22, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    className="relative"
                  >
                    <motion.div
                      whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.02 }}
                      className="relative h-full rounded-2xl border border-white/[0.065] bg-white/[0.028] p-4"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.05] text-cyan-300">
                        <Icon size={16} />
                      </div>
                      <p className="mt-4 text-sm font-semibold text-white">{item.label}</p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-300">{item.sub}</p>
                      <p className="mt-2 text-[10px] leading-5 text-slate-600">{item.detail}</p>
                    </motion.div>

                    {index < architecture.length - 1 && (
                      <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                        <motion.div
                          animate={prefersReducedMotion ? undefined : { x: [0, 4, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.2 }}
                          className="text-slate-700"
                        >
                          <ArrowRight size={14} />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="relative mt-6 grid gap-3 md:grid-cols-3">
              {[
                ['Default', 'Local ATS engine', 'No API key required'],
                ['Optional', 'Groq', 'Free-tier model path'],
                ['Optional', 'OpenAI', 'Paid model path']
              ].map(([type, engine, detail], index) => (
                <motion.div
                  key={engine}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.055] bg-black/10 p-3"
                >
                  <span
                    className={
                      'h-2 w-2 rounded-full ' +
                      (index === 0 ? 'bg-emerald-300' : index === 1 ? 'bg-violet-300' : 'bg-blue-300')
                    }
                  />
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-600">{type}</p>
                    <p className="mt-0.5 text-xs font-semibold text-slate-300">{engine}</p>
                    <p className="mt-0.5 text-[9px] text-slate-600">{detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, x: -28, rotateY: prefersReducedMotion ? 0 : 5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
              className="[perspective:1400px]"
            >
              <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-slate-950/65 p-2 shadow-[0_35px_100px_rgba(0,0,0,0.4)]">
                <img
                  src={dashboardScreenshot}
                  alt="JobHunter AI dashboard overview"
                  className="w-full rounded-[1.35rem]"
                />
              </div>
            </motion.div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">Product scope</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
                More than an ATS score.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                The repository already contains the foundations of a real SaaS product: authentication, organizations,
                resume storage, analysis, optimization, PDF rendering, job tracking, team invitations and optional billing infrastructure.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                    >
                      <Icon size={16} className="text-cyan-300" />
                      <p className="mt-3 text-sm font-semibold text-white">{feature.title}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{feature.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-white/[0.025] p-6"
              >
                <div className="absolute -right-4 -top-6 text-[7rem] font-black tracking-[-0.08em] text-white/[0.025]">
                  {principle.number}
                </div>
                <div className="relative">
                  <p className="text-xs font-semibold tracking-[0.16em] text-cyan-300">{principle.number}</p>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{principle.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-28 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.07] via-slate-950/70 to-violet-400/[0.06] p-7 sm:p-10"
        >
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/12 bg-cyan-400/[0.055] text-cyan-300">
                <Layers3 size={20} />
              </div>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">Source code</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Explore the implementation on GitHub.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                The repository includes the Next.js app, Supabase integration, AI provider layer, local ATS engine,
                resume parsing, PDF rendering, tests and deployment configuration.
              </p>
            </div>

            <a
              href="https://github.com/kartik977/AI-Job-Hunter"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              <Github size={17} />
              Open repository
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        <div className="container mx-auto mt-8 flex max-w-5xl items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            All projects
          </Link>

          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Next case study coming soon
          </span>
        </div>
      </section>
    </main>
  );
};

export default AIJobHunterCaseStudy;
