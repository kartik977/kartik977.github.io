import React, { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import {
  ArrowUpRight,
  Bot,
  Check,
  Github,
  Search,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Wand2
} from 'lucide-react';

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  github: string;
  number: string;
  kind: 'job' | 'grocery' | 'image';
  accent: string;
};

const projectData: Project[] = [
  {
    title: 'AI Job Hunter',
    eyebrow: 'AI-POWERED CAREER PLATFORM',
    description: 'Analyzes resumes, matches jobs and scores ATS fit to surface personalized recommendations through an end-to-end TypeScript and Node.js platform.',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Next.js', 'React'],
    github: 'https://github.com/kartik977/AI-Job-Hunter',
    number: '01',
    kind: 'job',
    accent: 'from-cyan-400/25 via-blue-500/10 to-transparent'
  },
  {
    title: 'Grocery Ordering',
    eyebrow: 'FULL-STACK ORDERING SYSTEM',
    description: 'A Node.js, Express.js and MongoDB platform with a React client covering product catalog, inventory and end-to-end order management.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'React.js'],
    github: 'https://github.com/kartik977/grocery-app',
    number: '02',
    kind: 'grocery',
    accent: 'from-emerald-400/25 via-teal-500/10 to-transparent'
  },
  {
    title: 'AI Image Generator',
    eyebrow: 'GENERATIVE AI SERVICE',
    description: 'A Flask and Node.js service integrating the OpenAI DALL-E API to generate images from prompts through reusable API-driven components.',
    technologies: ['Flask', 'Node.js', 'OpenAI API', 'DALL-E', 'Python'],
    github: 'https://github.com/kartik977/Image-Generator-using-OpenAI-and-Dall-e',
    number: '03',
    kind: 'image',
    accent: 'from-violet-400/25 via-fuchsia-500/10 to-transparent'
  }
];

const JobHunterMockup: React.FC = () => (
  <div className="project-ui h-full min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#090f18] shadow-2xl">
    <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-rose-400/80" />
        <span className="h-2 w-2 rounded-full bg-amber-300/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
      </div>
      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">job-hunter.ai</span>
    </div>

    <div className="grid h-[calc(100%-45px)] grid-cols-[0.72fr_1.28fr]">
      <div className="border-r border-white/[0.06] p-4">
        <div className="flex items-center gap-2 text-cyan-300">
          <Bot size={16} />
          <span className="text-xs font-semibold">AI Resume Scan</span>
        </div>
        <div className="relative mt-5 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
          <motion.div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_14px_rgba(34,211,238,0.9)]"
            animate={{ y: [0, 128, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="space-y-2">
            {[82, 94, 64, 88, 76, 58].map((width, index) => (
              <motion.div
                key={index}
                initial={{ width: 0 }}
                whileInView={{ width: width + '%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="h-1.5 rounded-full bg-white/[0.07]"
              />
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.14em] text-slate-600">ATS SCORE</span>
            <motion.span
              className="text-xl font-semibold text-cyan-300"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              92
            </motion.span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-600">MATCHED ROLES</p>
            <p className="mt-1 text-sm font-semibold text-white">Recommended for you</p>
          </div>
          <Search size={15} className="text-slate-600" />
        </div>

        <div className="mt-4 space-y-2.5">
          {[
            ['Backend Engineer', '96%'],
            ['Software Engineer II', '91%'],
            ['Platform Engineer', '88%']
          ].map(([role, score], index) => (
            <motion.div
              key={role}
              animate={{ x: [0, index === 0 ? 3 : 0, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.3 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-200">{role}</span>
                <span className="rounded-md bg-cyan-300/10 px-2 py-1 text-[9px] font-semibold text-cyan-300">{score}</span>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.25 + index * 0.12 }}
                  style={{ transformOrigin: 'left' }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const GroceryMockup: React.FC = () => (
  <div className="project-ui h-full min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#09110e] shadow-2xl">
    <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
      <div className="flex items-center gap-2 text-emerald-300">
        <ShoppingBag size={15} />
        <span className="text-xs font-semibold">FreshCart</span>
      </div>
      <span className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.05] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
        live inventory
      </span>
    </div>

    <div className="grid gap-3 p-4 sm:grid-cols-[1.12fr_0.88fr]">
      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-600">PRODUCTS</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            ['Avocado', '$2.49', '🥑'],
            ['Orange', '$1.89', '🍊'],
            ['Bread', '$3.99', '🍞'],
            ['Milk', '$4.29', '🥛']
          ].map(([name, price, emoji], index) => (
            <motion.div
              key={name}
              whileHover={{ y: -4, scale: 1.02 }}
              animate={{ y: [0, index % 2 === 0 ? -2 : 2, 0] }}
              transition={{ duration: 3 + index * 0.25, repeat: Infinity }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"
            >
              <div className="text-2xl">{emoji}</div>
              <p className="mt-2 text-[11px] font-medium text-white">{name}</p>
              <p className="mt-0.5 text-[9px] text-emerald-300">{price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-600">ORDER FLOW</p>
          <ShoppingCart size={14} className="text-emerald-300" />
        </div>
        <div className="mt-4 space-y-4">
          {['Cart created', 'Inventory reserved', 'Order confirmed', 'Ready to ship'].map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0.25 }}
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.55 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-300">
                <Check size={11} />
              </div>
              <span className="text-[10px] font-medium text-slate-400">{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ImageGeneratorMockup: React.FC = () => (
  <div className="project-ui relative h-full min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#100a16] shadow-2xl">
    <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
      <div className="flex items-center gap-2 text-violet-300">
        <Wand2 size={15} />
        <span className="text-xs font-semibold">Imagine API</span>
      </div>
      <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-600">DALL·E pipeline</span>
    </div>

    <div className="grid gap-3 p-4 sm:grid-cols-[0.82fr_1.18fr]">
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-600">PROMPT</p>
        <motion.div
          animate={{ boxShadow: ['0 0 0 rgba(167,139,250,0)', '0 0 26px rgba(167,139,250,0.12)', '0 0 0 rgba(167,139,250,0)'] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-3 min-h-[90px] rounded-xl border border-violet-400/10 bg-violet-400/[0.04] p-3"
        >
          <p className="text-[10px] leading-5 text-slate-400">
            “Futuristic city at dusk, cinematic light, reflections, atmospheric depth…”
          </p>
        </motion.div>
        <div className="mt-3 flex items-center gap-2">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300"
          >
            <Sparkles size={13} />
          </motion.span>
          <span className="text-[9px] font-medium text-slate-500">Generating variations…</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          'linear-gradient(145deg,#1d4ed8,#7c3aed 48%,#ec4899)',
          'linear-gradient(145deg,#0891b2,#2563eb 45%,#7c3aed)',
          'linear-gradient(145deg,#7c3aed,#db2777 52%,#fb7185)',
          'linear-gradient(145deg,#0f766e,#0891b2 48%,#4338ca)'
        ].map((gradient, index) => (
          <motion.div
            key={gradient}
            animate={{
              y: [0, index % 2 === 0 ? -5 : 5, 0],
              scale: [1, 1.015, 1]
            }}
            transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-xl border border-white/10"
            style={{ background: gradient }}
          >
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.42),transparent_24%)]"
              animate={{ x: ['-10%', '12%', '-10%'], y: ['0%', '8%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity, delay: index * 0.25 }}
            />
            <div className="aspect-square" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectVisual: React.FC<{ kind: Project['kind'] }> = ({ kind }) => {
  if (kind === 'job') return <JobHunterMockup />;
  if (kind === 'grocery') return <GroceryMockup />;
  return <ImageGeneratorMockup />;
};

const ProjectStage: React.FC<{ project: Project }> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.18']
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 24,
    mass: 0.35
  });
  const y = useTransform(smooth, [0, 1], prefersReducedMotion ? [0, 0] : [95, 0]);
  const rotateX = useTransform(smooth, [0, 1], prefersReducedMotion ? [0, 0] : [8, 0]);
  const scale = useTransform(smooth, [0, 1], prefersReducedMotion ? [1, 1] : [0.94, 1]);
  const opacity = useTransform(smooth, [0, 0.25, 1], [0.35, 1, 1]);

  return (
    <div ref={ref} className="project-stack-section relative min-h-[118vh]">
      <motion.article
        style={{ y, rotateX, scale, opacity, transformPerspective: 1400 }}
        className="premium-project-stage sticky top-[92px] mx-auto min-h-[calc(100vh-112px)] max-w-6xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#0a0f17]/95 shadow-[0_45px_140px_rgba(0,0,0,0.48)] backdrop-blur-2xl"
      >
        <div className={'pointer-events-none absolute -right-28 -top-28 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br blur-3xl ' + project.accent} />
        <motion.div
          className="pointer-events-none absolute -left-24 bottom-0 text-[12rem] font-black leading-none tracking-[-0.1em] text-white/[0.018] sm:text-[17rem]"
          animate={prefersReducedMotion ? undefined : { x: [0, 18, 0], y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          {project.number}
        </motion.div>

        <div className="relative grid min-h-[calc(100vh-112px)] items-center gap-8 p-6 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.18em] text-cyan-300">{project.number}</span>
              <span className="h-px w-10 bg-white/10" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">{project.eyebrow}</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65 }}
              className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
            >
              {project.title}
            </motion.h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">{project.description}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology, techIndex) => (
                <motion.span
                  key={technology}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: techIndex * 0.04 }}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2 text-[11px] font-medium text-slate-400"
                >
                  {technology}
                </motion.span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(255,255,255,0.12)]"
            >
              <Github size={17} />
              View repository
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 45, rotateY: prefersReducedMotion ? 0 : -5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="[perspective:1400px]"
          >
            <ProjectVisual kind={project.kind} />
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <main className="projects-page relative bg-[#06090f]">
      <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:pt-24">
        <div className="projects-aurora pointer-events-none absolute inset-0" />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="container relative z-10 mx-auto text-center"
        >
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 backdrop-blur-xl">
            <Sparkles size={14} className="text-violet-300" />
            Selected systems
          </div>
          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
            Don&apos;t browse cards.
            <span className="block text-slate-500">Enter the projects.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Each project now has its own visual system and interaction. Scroll and the next build physically stacks over the previous one.
          </p>
        </motion.div>
      </section>

      <div className="px-4 pb-24">
        {projectData.map((project) => (
          <ProjectStage key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
