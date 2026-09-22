import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from 'framer-motion';
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Cloud,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare
} from 'lucide-react';

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 20, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 20, mass: 0.6 });

  const heroX = useTransform(smoothX, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [-18, 18]);
  const heroY = useTransform(smoothY, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [-12, 12]);
  const cardRotateY = useTransform(smoothX, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [-5, 5]);
  const cardRotateX = useTransform(smoothY, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [4, -4]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = window.setInterval(() => setCurrentStep((prev) => (prev + 1) % 4), 3200);
    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const steps = [
    {
      icon: Code2,
      eyebrow: 'Backend engineering',
      text: 'Java, Spring Boot, Node.js & TypeScript',
      accent: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Cloud,
      eyebrow: 'Cloud delivery',
      text: 'AWS Lambda, CloudFormation & CI/CD',
      accent: 'from-blue-500 to-violet-500'
    },
    {
      icon: ShieldCheck,
      eyebrow: 'Quality & security',
      text: 'Automated testing and vulnerability remediation',
      accent: 'from-violet-500 to-fuchsia-500'
    },
    {
      icon: Bot,
      eyebrow: 'AI developer tooling',
      text: 'Claude Code skills, Copilot & agentic workflows',
      accent: 'from-emerald-400 to-cyan-500'
    }
  ];

  const workflow = [
    { label: 'Architect', detail: 'Distributed services & APIs', icon: Code2 },
    { label: 'Validate', detail: 'Functional + performance testing', icon: CheckCircle2 },
    { label: 'Deploy', detail: 'AWS + automated delivery', icon: Cloud },
    { label: 'Observe', detail: 'New Relic + production support', icon: Server }
  ];

  const technologies = ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'AWS', 'GraphQL'];

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      className="portfolio-hero relative min-h-[calc(100vh-80px)] overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-noise absolute inset-0" aria-hidden="true" />
      <div className="hero-spotlight pointer-events-none absolute inset-0" aria-hidden="true" />

      <motion.div
        className="pointer-events-none absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        animate={prefersReducedMotion ? undefined : { x: [0, 28, -12, 0], y: [0, -18, 14, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[5%] right-[8%] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
        animate={prefersReducedMotion ? undefined : { x: [0, -22, 18, 0], y: [0, 18, -10, 0], scale: [1, 0.96, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-80px)] items-center px-4 py-14 lg:py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              style={{ x: heroX, y: heroY }}
              className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:mx-0"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.19em] text-slate-300">
                Senior Software Development Engineer · Dallas, TX
              </span>
            </motion.div>

            <h1 className="text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-[5.1rem]">
              Backend systems
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                built for production.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
            >
              I&apos;m Kartik Kataria, a backend software engineer with 5+ years building distributed,
              cloud-native services and APIs for banking, payments and retail platforms. At Cognizant,
              I own architecture and technical delivery across Capital One and Verizon engagements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex min-h-[76px] items-center justify-center lg:justify-start"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 backdrop-blur-xl"
                >
                  <div className={'flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ' + steps[currentStep].accent}>
                    {React.createElement(steps[currentStep].icon, { size: 19, className: 'text-white' })}
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{steps[currentStep].eyebrow}</p>
                    <p className="mt-0.5 text-sm font-medium text-slate-100 sm:text-base">{steps[currentStep].text}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Link to="/projects" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(255,255,255,0.14)]">
                Explore my work
                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a href="/Kartik_Kataria_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.045] px-5 py-3 text-sm font-semibold text-slate-100 backdrop-blur-lg transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.075]">
                <Download size={17} />
                Resume
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition duration-300 hover:text-white">
                <Mail size={17} />
                Contact
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-9 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {technologies.map((technology) => (
                <span key={technology} className="rounded-lg border border-white/8 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-400">
                  {technology}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }} className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              <a href="https://github.com/kartik977" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-xl border border-white/8 bg-white/[0.035] p-2.5 text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-white">
                <Github size={19} />
              </a>
              <a href="https://www.linkedin.com/in/kartikkataria2023/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rounded-xl border border-white/8 bg-white/[0.035] p-2.5 text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-white">
                <Linkedin size={19} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 36, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-xl [perspective:1200px]">
            <motion.div
              style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformPerspective: 1200 }}
              className="hero-console relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  <TerminalSquare size={14} />
                  engineering-impact
                </div>
              </div>

              <div className="relative p-5 sm:p-7">
                <div className="relative flex items-start gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan-400/35 via-blue-500/20 to-violet-500/35 blur-xl" />
                    <img src="/WhatsApp Image 2025-08-07 at 10.48.20 AM.jpeg" alt="Kartik Kataria" className="relative h-20 w-20 rounded-2xl border border-white/10 object-cover shadow-2xl sm:h-24 sm:w-24" />
                  </div>
                  <div className="min-w-0 pt-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Current role</p>
                    <h2 className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">Senior Software Development Engineer</h2>
                    <p className="mt-1 text-sm text-slate-400">Cognizant · Plano, TX</p>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    ['~72 ms', 'Core API latency'],
                    ['25%', 'Faster deployments'],
                    ['100+', 'Vulnerabilities fixed'],
                    ['35%', 'Faster incident detection']
                  ].map(([value, label]) => (
                    <motion.div key={label} whileHover={prefersReducedMotion ? undefined : { y: -3 }} className="rounded-2xl border border-white/[0.065] bg-white/[0.035] p-3.5">
                      <p className="text-lg font-semibold text-white">{value}</p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="relative mt-7">
                  <div className="absolute bottom-6 left-[23px] top-6 w-px bg-gradient-to-b from-cyan-400/50 via-blue-400/35 to-violet-400/15" />
                  <div className="space-y-3">
                    {workflow.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div key={item.label} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.45 + index * 0.1 }} whileHover={prefersReducedMotion ? undefined : { x: 5 }} className="group relative flex items-center gap-4 rounded-2xl border border-white/[0.065] bg-white/[0.035] p-3.5 transition-colors duration-300 hover:bg-white/[0.055]">
                          <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950 text-cyan-300 shadow-lg"><Icon size={18} /></div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-semibold text-slate-100">{item.label}</p>
                              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">0{index + 1}</span>
                            </div>
                            <p className="mt-0.5 text-xs text-slate-500">{item.detail}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.035] p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-200"><Sparkles size={15} />AI-assisted engineering</div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Building Claude Code skills and agentic developer workflows to accelerate API development and security remediation.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
