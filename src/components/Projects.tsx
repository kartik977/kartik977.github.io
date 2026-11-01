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
  ArrowUpRight,
  BarChart3,
  Bot,
  CalendarDays,
  Check,
  CloudRain,
  ExternalLink,
  Github,
  Instagram,
  MapPin,
  Music2,
  Search,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Wand2,
  Youtube
} from 'lucide-react';

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  number: string;
  kind: 'job' | 'grocery' | 'image' | 'channelscope' | 'pluvia';
  accent: string;
  caseStudy?: string;
};

const projectData: Project[] = [
  {
    title: 'ChannelScope',
    eyebrow: 'CREATOR INTELLIGENCE PLATFORM',
    description: 'A multi-workspace creator platform combining public YouTube analytics, AI-assisted creator planning, Instagram drafting, cross-platform publishing tools and local-first video frame analysis.',
    technologies: ['React', 'Vite', 'Cloudflare Workers', 'YouTube Data API', 'Groq', 'JavaScript'],
    github: 'https://github.com/kartik977/youtube-channel-intelligence',
    live: 'https://channelscope.kartikkataria2000.workers.dev/',
    number: '01',
    kind: 'channelscope',
    accent: 'from-red-400/25 via-blue-500/10 to-transparent',
    caseStudy: '/projects/channelscope'
  },
  {
    title: 'PLUVIA',
    eyebrow: 'IMMERSIVE WEATHER EXPERIENCE',
    description: 'An atmospheric rain experience combining live weather, global city photography, animated rain, selectable window environments, soundscapes, music and an installable PWA experience.',
    technologies: ['JavaScript', 'Canvas', 'PWA', 'Web APIs', 'CSS', 'Audio'],
    github: 'https://github.com/kartik977/kartik977.github.io/tree/master/public/pluvia',
    live: 'https://kartik977.github.io/pluvia/',
    number: '02',
    kind: 'pluvia',
    accent: 'from-cyan-300/25 via-sky-500/10 to-transparent',
    caseStudy: '/projects/pluvia'
  },
  {
    title: 'AI Job Hunter',
    eyebrow: 'AI-POWERED CAREER PLATFORM',
    description: 'Analyzes resumes, matches jobs and scores ATS fit to surface personalized recommendations through an end-to-end TypeScript and Node.js platform.',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Next.js', 'React'],
    github: 'https://github.com/kartik977/AI-Job-Hunter',
    number: '03',
    kind: 'job',
    accent: 'from-cyan-400/25 via-blue-500/10 to-transparent',
    caseStudy: '/projects/ai-job-hunter'
  },
  {
    title: 'Grocery Ordering',
    eyebrow: 'FULL-STACK ORDERING SYSTEM',
    description: 'A full-stack commerce application with an Angular 17 frontend and Spring Boot 3 backend covering catalog, JWT-secured cart, checkout and order tracking.',
    technologies: ['Angular 17', 'TypeScript', 'Spring Boot 3', 'Java 17', 'Spring Security', 'JPA'],
    github: 'https://github.com/kartik977/grocery-app',
    number: '04',
    kind: 'grocery',
    accent: 'from-emerald-400/25 via-teal-500/10 to-transparent',
    caseStudy: '/projects/grocery-ordering'
  },
  {
    title: 'AI Image Generator',
    eyebrow: 'GENERATIVE AI SERVICE',
    description: 'A focused Node.js and Express application that accepts prompt and size input, calls OpenAI\'s image API, and returns the generated image URL to a browser UI.',
    technologies: ['Node.js', 'Express', 'OpenAI SDK', 'DALL-E', 'JavaScript'],
    github: 'https://github.com/kartik977/Image-Generator-using-OpenAI-and-Dall-e',
    number: '05',
    kind: 'image',
    accent: 'from-violet-400/25 via-fuchsia-500/10 to-transparent',
    caseStudy: '/projects/ai-image-generator'
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


const ChannelScopeMockup: React.FC = () => (
  <div className="project-ui h-full min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080b12] shadow-2xl">
    <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
      <div className="flex items-center gap-2">
        <BarChart3 size={15} className="text-red-300" />
        <span className="text-xs font-semibold">ChannelScope</span>
      </div>
      <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-600">creator intelligence</span>
    </div>
    <div className="grid min-h-[315px] grid-cols-[0.72fr_1.28fr]">
      <div className="border-r border-white/[0.06] p-3">
        {[
          [Youtube, 'YouTube', 'text-red-300'],
          [Instagram, 'Instagram', 'text-fuchsia-300'],
          [CalendarDays, 'Creator Tools', 'text-cyan-300']
        ].map(([Icon, label, color], index) => {
          const ItemIcon = Icon as React.ElementType;
          return (
            <motion.div key={String(label)} animate={{ x: [0, index === 0 ? 2 : 0, 0] }} transition={{ duration: 3, repeat: Infinity, delay: index * .25 }} className="mb-2 flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
              <ItemIcon size={13} className={String(color)} />
              <span className="text-[10px] font-medium text-slate-400">{String(label)}</span>
            </motion.div>
          );
        })}
      </div>
      <div className="p-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            ['Views', '1.8M'],
            ['Uploads', '126'],
            ['Engagement', '4.9%']
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-white/[0.05] bg-white/[0.025] p-2">
              <span className="text-[7px] uppercase tracking-[0.12em] text-slate-600">{label}</span>
              <strong className="mt-1 block text-xs text-white">{value}</strong>
            </div>
          ))}
        </div>
        <div className="mt-3 flex h-24 items-end gap-1.5 rounded-xl border border-white/[0.05] bg-black/20 p-3">
          {[38, 58, 45, 72, 62, 86, 74, 96].map((height, index) => (
            <motion.span key={index} className="flex-1 rounded-t bg-gradient-to-t from-red-500/30 to-cyan-300/80" initial={{ height: '10%' }} whileInView={{ height: height + '%' }} viewport={{ once: true }} transition={{ delay: index * .04 }} />
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-cyan-300/10 bg-cyan-300/[0.035] p-3">
          <div className="flex items-center gap-2 text-cyan-300"><Bot size={13} /><span className="text-[9px] font-semibold">AI Creator Advisor</span></div>
          <p className="mt-1.5 text-[8px] leading-4 text-slate-500">Public channel data → experiments, ideas and publishing drafts.</p>
        </div>
      </div>
    </div>
  </div>
);

const PluviaMockup: React.FC = () => (
  <div className="project-ui relative h-full min-h-[360px] overflow-hidden rounded-[1.5rem] border border-cyan-200/10 bg-[linear-gradient(180deg,#0c2030_0%,#08131c_50%,#03070a_100%)] shadow-2xl">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(125,211,252,.24),transparent_22%),linear-gradient(to_top,rgba(2,6,10,.92),transparent_52%)]" />
    {Array.from({ length: 18 }).map((_, index) => (
      <motion.i key={index} className="absolute top-[-20%] h-16 w-px bg-gradient-to-b from-transparent via-cyan-100/35 to-transparent" style={{ left: ((index * 43) % 100) + '%' }} animate={{ y: ['0%', '700%'] }} transition={{ duration: 1.3 + (index % 5) * .16, repeat: Infinity, ease: 'linear', delay: -(index % 7) * .28 }} />
    ))}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(160deg,transparent_0_17%,#07131a_18%_27%,transparent_28%_35%,#0b1820_36%_48%,transparent_49%_56%,#061017_57%_72%,transparent_73%)] opacity-90" />
    <div className="relative flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
      <div className="flex items-center gap-2 text-cyan-200"><CloudRain size={15} /><span className="text-xs font-semibold">PLUVIA</span></div>
      <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-100/40">live weather atmosphere</span>
    </div>
    <div className="relative p-4">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-cyan-100/45">Now experiencing</span>
          <h3 className="mt-1 text-2xl font-semibold text-white">Tokyo</h3>
          <p className="text-[9px] text-slate-400">Tokyo Tower · local time</p>
        </div>
        <span className="text-4xl font-light text-cyan-100">18°</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {[['Café', MapPin], ['Rain mix', Music2], ['Live sky', CloudRain]].map(([label, Icon]) => {
          const ItemIcon = Icon as React.ElementType;
          return <div key={String(label)} className="rounded-xl border border-white/[0.07] bg-black/25 p-3 backdrop-blur"><ItemIcon size={13} className="text-cyan-300" /><span className="mt-2 block text-[9px] text-slate-400">{String(label)}</span></div>;
        })}
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {['Tokyo', 'London', 'Mumbai', 'Seoul', 'Kyoto'].map((city) => <span key={city} className="rounded-full border border-cyan-200/10 bg-cyan-100/[0.035] px-2 py-1 text-[8px] text-cyan-50/65">{city}</span>)}
      </div>
    </div>
  </div>
);

const ProjectVisual: React.FC<{ kind: Project['kind'] }> = ({ kind }) => {
  if (kind === 'job') return <JobHunterMockup />;
  if (kind === 'grocery') return <GroceryMockup />;
  if (kind === 'channelscope') return <ChannelScopeMockup />;
  if (kind === 'pluvia') return <PluviaMockup />;
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

            <div className="mt-8 flex flex-wrap gap-3">
              {project.caseStudy && (
                <Link
                  to={project.caseStudy}
                  className="group inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(255,255,255,0.12)]"
                >
                  View case study
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.055] px-5 py-3.5 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30"
                >
                  <ExternalLink size={16} />
                  Live project
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "group inline-flex items-center gap-3 rounded-2xl border px-5 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-1 " +
                  (project.caseStudy
                    ? "border-white/10 bg-white/[0.035] text-slate-300 hover:border-white/20 hover:text-white"
                    : "border-white/10 bg-white text-slate-950 hover:shadow-[0_18px_50px_rgba(255,255,255,0.12)]")
                }
              >
                <Github size={17} />
                View repository
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
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
