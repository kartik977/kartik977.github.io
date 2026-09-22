import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from 'framer-motion';
import {
  ArrowUpRight,
  Bot,
  Github,
  Image as ImageIcon,
  PackageCheck,
  Search,
  ShoppingCart,
  Sparkles,
  Workflow
} from 'lucide-react';

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  github: string;
  icon: React.ElementType;
  metric: string;
  metricLabel: string;
  flow: string[];
  featured?: boolean;
};

const projectData: Project[] = [
  {
    title: 'AI Job Hunter',
    eyebrow: 'AI-powered career platform',
    description: 'Analyzes resumes, matches jobs and scores ATS fit to surface personalized recommendations through an end-to-end TypeScript and Node.js platform.',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Next.js', 'React'],
    github: 'https://github.com/kartik977/AI-Job-Hunter',
    icon: Bot,
    metric: 'AI + ATS',
    metricLabel: 'Resume-to-job intelligence',
    flow: ['Resume', 'Analyze', 'Match', 'Score'],
    featured: true
  },
  {
    title: 'Grocery Ordering Application',
    eyebrow: 'Full-stack ordering system',
    description: 'A Node.js, Express.js and MongoDB platform with a React client covering product catalog, inventory and end-to-end order management.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'React.js'],
    github: 'https://github.com/kartik977/grocery-app',
    icon: ShoppingCart,
    metric: 'E2E',
    metricLabel: 'Order lifecycle',
    flow: ['Catalog', 'Inventory', 'Cart', 'Orders']
  },
  {
    title: 'AI Image Generator',
    eyebrow: 'Generative AI service',
    description: 'A Flask and Node.js service integrating the OpenAI DALL-E API to generate images from prompts through reusable API-driven components.',
    technologies: ['Flask', 'Node.js', 'OpenAI API', 'DALL-E', 'Python'],
    github: 'https://github.com/kartik977/Image-Generator-using-OpenAI-and-Dall-e',
    icon: ImageIcon,
    metric: 'Prompt → Image',
    metricLabel: 'API-driven generation',
    flow: ['Prompt', 'API', 'Generate', 'Render']
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 22 });
  const sy = useSpring(my, { stiffness: 180, damping: 22 });
  const rotateY = useTransform(sx, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [-3.5, 3.5]);
  const rotateX = useTransform(sy, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [3.5, -3.5]);

  const handleMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const Icon = project.icon;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.68,
        delay: prefersReducedMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className={
        'premium-project group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-slate-950/52 shadow-[0_35px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl ' +
        (project.featured ? 'lg:col-span-2' : '')
      }
    >
      <div className="premium-project-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="premium-project-shine pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.035] to-transparent opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100" />

      <div className="relative p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/12 bg-cyan-300/[0.055] text-cyan-300">
            <Icon size={21} />
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 rounded-xl border border-white/[0.075] bg-white/[0.03] px-3 py-2 text-xs font-semibold text-slate-400 transition hover:border-white/15 hover:text-white"
          >
            <Github size={15} />
            Repository
            <ArrowUpRight size={13} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        </div>

        <div className={project.featured ? 'mt-7 grid gap-8 lg:grid-cols-[1.12fr_0.88fr]' : 'mt-7'}>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">{project.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-lg border border-white/[0.065] bg-white/[0.025] px-2.5 py-1.5 text-[11px] font-medium text-slate-400">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {project.featured && (
            <div className="rounded-2xl border border-white/[0.065] bg-white/[0.025] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-semibold text-white">{project.metric}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">{project.metricLabel}</p>
                </div>
                <Workflow size={20} className="text-violet-300" />
              </div>

              <div className="mt-6 space-y-3">
                {project.flow.map((step, flowIndex) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: flowIndex * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-300/10 bg-cyan-300/[0.04] text-[10px] font-semibold text-cyan-300">
                      0{flowIndex + 1}
                    </span>
                    <span className="text-xs font-medium text-slate-300">{step}</span>
                    {flowIndex < project.flow.length - 1 && <span className="ml-auto h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {!project.featured && (
          <div className="mt-7 rounded-2xl border border-white/[0.055] bg-white/[0.02] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{project.metric}</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-600">{project.metricLabel}</p>
              </div>
              <div className="flex -space-x-1">
                {project.flow.map((step, flowIndex) => (
                  <motion.span
                    key={step}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: flowIndex * 0.05, type: 'spring' }}
                    title={step}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-900 bg-slate-800 text-[9px] font-semibold text-slate-400"
                  >
                    {flowIndex + 1}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
};

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
            <Sparkles size={14} />
            Featured builds
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Projects with a
            <span className="block text-slate-400">product-level story.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Three projects from my current resume, presented as real systems rather than a wall of technology badges.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {projectData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
          className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-4"
        >
          <Search size={17} className="mt-1 shrink-0 text-cyan-300" />
          <p className="text-sm leading-6 text-slate-400">
            Each card links directly to the matching GitHub repository. The next visual upgrade can add real screenshots,
            architecture diagrams or short demo clips without changing this structure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
