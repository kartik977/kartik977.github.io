import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Boxes,
  Download,
  Gauge,
  Layers3,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow
} from 'lucide-react';
import SystemArchitecture from './SystemArchitecture';
import { RuntimeView } from './RuntimeViewSelector';

const portrait = "/WhatsApp%20Image%202025-08-07%20at%2010.48.20%20AM.jpeg";

type HomeProps = {
  runtimeView: RuntimeView;
};

const viewCopy: Record<RuntimeView, { label: string; line: string }> = {
  recruiter: {
    label: 'Recruiter cut',
    line: 'Impact, production experience and evidence first.'
  },
  engineer: {
    label: 'Engineer cut',
    line: 'Architecture, backend depth and production operations first.'
  },
  projects: {
    label: 'Projects cut',
    line: 'Case studies and shipped product work first.'
  },
  full: {
    label: 'Full runtime',
    line: 'The complete portfolio experience.'
  }
};

const exploreItems = [
  {
    id: 'experience',
    title: 'Production Experience',
    eyebrow: 'Season 01',
    copy: 'Capital One, Verizon, APIs, cloud delivery and production support.',
    path: '/experience',
    icon: Workflow,
    meta: '5+ years'
  },
  {
    id: 'projects',
    title: 'Production Originals',
    eyebrow: '3 case studies',
    copy: 'AI Job Hunter, Grocery Ordering and AI Image Generator.',
    path: '/projects',
    icon: Boxes,
    meta: '3 builds'
  },
  {
    id: 'lab',
    title: 'Engineering Lab',
    eyebrow: 'Interactive',
    copy: 'Performance, CI/CD, security and observability simulations.',
    path: '/lab',
    icon: TerminalSquare,
    meta: '4 demos'
  },
  {
    id: 'skills',
    title: 'Capability Genres',
    eyebrow: 'Stack evidence',
    copy: 'See where each technology appears in real work.',
    path: '/skills',
    icon: Layers3,
    meta: '40+ tools'
  }
];

const orderByView: Record<RuntimeView, string[]> = {
  recruiter: ['experience', 'projects', 'skills', 'lab'],
  engineer: ['lab', 'experience', 'skills', 'projects'],
  projects: ['projects', 'lab', 'experience', 'skills'],
  full: ['experience', 'projects', 'lab', 'skills']
};

const projects = [
  {
    title: 'AI Job Hunter',
    label: 'Original 01',
    copy: 'Resume parsing, ATS scoring, AI-assisted optimization and job tracking.',
    stack: 'Next.js · TypeScript · Supabase',
    path: '/projects/ai-job-hunter',
    accent: 'runtime-project-ai'
  },
  {
    title: 'Grocery Ordering',
    label: 'Original 02',
    copy: 'Full-stack commerce flow with auth, cart, checkout, orders and role-based access.',
    stack: 'Angular · Spring Boot · Java',
    path: '/projects/grocery-ordering',
    accent: 'runtime-project-grocery'
  },
  {
    title: 'AI Image Generator',
    label: 'Original 03',
    copy: 'Prompt-to-image workflow with a lightweight Express API and generated image delivery.',
    stack: 'Node.js · Express · OpenAI',
    path: '/projects/ai-image-generator',
    accent: 'runtime-project-image'
  }
];

const impact = [
  { value: '50%', label: 'lower API latency', detail: '~72 ms core response' },
  { value: '25%', label: 'faster deployments', detail: 'delivery improvement' },
  { value: '+40%', label: 'automated coverage', detail: 'quality expansion' },
  { value: '100+', label: 'vulnerabilities fixed', detail: 'security remediation' },
  { value: '35%', label: 'faster detection', detail: 'observability impact' }
];

const Home: React.FC<HomeProps> = ({ runtimeView }) => {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const px = useSpring(pointerX, { stiffness: 80, damping: 22, mass: 0.5 });
  const py = useSpring(pointerY, { stiffness: 80, damping: 22, mass: 0.5 });

  const portraitX = useTransform(px, [-1, 1], reduced ? [0, 0] : [-18, 18]);
  const portraitY = useTransform(py, [-1, 1], reduced ? [0, 0] : [-10, 10]);
  const chipX = useTransform(px, [-1, 1], reduced ? [0, 0] : [16, -16]);
  const chipY = useTransform(py, [-1, 1], reduced ? [0, 0] : [10, -10]);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroFade = useTransform(scrollYProgress, [0, 0.82], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const orderedExplore = orderByView[runtimeView]
    .map((id) => exploreItems.find((item) => item.id === id))
    .filter(Boolean) as typeof exploreItems;

  return (
    <div className="runtime-home">
      <section
        ref={heroRef}
        className="runtime-billboard"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
          pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
        }}
        onPointerLeave={() => {
          pointerX.set(0);
          pointerY.set(0);
        }}
      >
        <div className="runtime-billboard-atmosphere" aria-hidden="true" />
        <div className="runtime-light-streak runtime-light-streak-one" aria-hidden="true" />
        <div className="runtime-light-streak runtime-light-streak-two" aria-hidden="true" />

        <motion.div
          className="runtime-billboard-portrait"
          style={{ x: portraitX, y: portraitY, scale: heroImageScale, opacity: heroFade }}
          aria-hidden="true"
        >
          <img src={portrait} alt="" />
        </motion.div>

        <motion.div className="runtime-billboard-copy" style={{ y: heroTextY, opacity: heroFade }}>
          <motion.div
            initial={{ opacity: 0, y: 16, filter: 'blur(7px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="runtime-billboard-kicker"
          >
            <span className="runtime-live-dot" />
            KARTIK / RUNTIME
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.82, delay: 0.14 }}
          >
            Backend systems
            <span>built for production.</span>
          </motion.h1>

          <motion.div
            className="runtime-meta-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32, duration: 0.65 }}
          >
            <strong>5+ years</strong>
            <span>Backend Engineering</span>
            <span>Banking & Payments</span>
            <span>AWS</span>
            <span>Dallas, TX</span>
          </motion.div>

          <motion.p
            className="runtime-billboard-description"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.65 }}
          >
            I build distributed APIs and cloud-native services across banking, payments and retail — with a focus on performance, delivery quality, observability and production reliability.
          </motion.p>

          <motion.div
            className="runtime-view-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46 }}
          >
            <Sparkles size={13} />
            <div>
              <strong>{viewCopy[runtimeView].label}</strong>
              <span>{viewCopy[runtimeView].line}</span>
            </div>
            <button type="button" onClick={() => window.dispatchEvent(new Event('portfolio:choose-view'))}>
              switch
            </button>
          </motion.div>

          <motion.div
            className="runtime-billboard-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.65 }}
          >
            <Link to="/experience" className="runtime-primary-button">
              <Play size={16} fill="currentColor" />
              Play career
            </Link>
            <Link to="/projects" className="runtime-secondary-button">
              <span>＋</span>
              My work
            </Link>
            <a href="/Kartik_Kataria_Resume.pdf" target="_blank" rel="noopener noreferrer" className="runtime-icon-button" aria-label="Open resume">
              <Download size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="runtime-floating-proof runtime-proof-one" style={{ x: chipX, y: chipY }}>
          <strong>~72 ms</strong>
          <span>core API response</span>
        </motion.div>
        <motion.div className="runtime-floating-proof runtime-proof-two" style={{ x: chipX, y: chipY }}>
          <ShieldCheck size={15} />
          <strong>100+</strong>
          <span>security fixes</span>
        </motion.div>
        <motion.div className="runtime-floating-proof runtime-proof-three" style={{ x: chipX, y: chipY }}>
          <Gauge size={15} />
          <strong>35%</strong>
          <span>faster detection</span>
        </motion.div>

        <div className="runtime-billboard-bottom-fade" aria-hidden="true" />
      </section>

      <section className="runtime-section">
        <div className="runtime-section-heading">
          <div>
            <p>Continue Exploring</p>
            <h2>Pick up where your role starts.</h2>
          </div>
          <button type="button" onClick={() => window.dispatchEvent(new Event('portfolio:choose-view'))}>
            <Search size={14} />
            change view
          </button>
        </div>

        <div className="runtime-content-rail">
          {orderedExplore.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                className="runtime-explore-wrap"
              >
                <Link to={item.path} className="runtime-explore-card">
                  <div className="runtime-explore-top">
                    <span>{item.eyebrow}</span>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <div className="runtime-card-progress">
                    <div style={{ width: `${72 + index * 7}%` }} />
                  </div>
                  <div className="runtime-explore-meta">
                    <strong>{item.meta}</strong>
                    <span>Open <ArrowRight size={13} /></span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="runtime-section runtime-impact-section">
        <div className="runtime-section-heading">
          <div>
            <p>Top Production Wins</p>
            <h2>Impact you can scan in ten seconds.</h2>
          </div>
        </div>
        <div className="runtime-impact-grid">
          {impact.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <span>0{index + 1}</span>
              <strong>{metric.value}</strong>
              <h3>{metric.label}</h3>
              <p>{metric.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="runtime-section runtime-originals">
        <div className="runtime-section-heading">
          <div>
            <p>Production Originals</p>
            <h2>Three builds. Three different engineering stories.</h2>
          </div>
          <Link to="/projects">View all projects <ArrowRight size={14} /></Link>
        </div>

        <div className="runtime-project-rail">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 70, rotateY: -4 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.65 }}
              className="runtime-project-wrap"
            >
              <Link to={project.path} className={`runtime-project-card ${project.accent}`}>
                <div className="runtime-project-no">0{index + 1}</div>
                <div className="runtime-project-label">{project.label}</div>
                <div className="runtime-project-art" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="runtime-project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <span>{project.stack}</span>
                </div>
                <div className="runtime-project-open">Open case study <ArrowRight size={14} /></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="runtime-section runtime-architecture-feature">
        <div className="runtime-section-heading">
          <div>
            <p>Inside the Runtime</p>
            <h2>Don’t just read the stack. Run a request through it.</h2>
          </div>
          <Link to="/lab">Open Engineering Lab <ArrowRight size={14} /></Link>
        </div>
        <div className="runtime-architecture-shell">
          <SystemArchitecture />
        </div>
      </section>

      <section className="runtime-finale">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
        >
          <p>THE NEXT DEPLOYMENT</p>
          <h2>Could be with your team.</h2>
          <span>Backend engineering · cloud delivery · production systems</span>
          <div>
            <Link to="/contact" className="runtime-primary-button">Let’s connect <ArrowRight size={15} /></Link>
            <button type="button" className="runtime-secondary-button" onClick={() => window.dispatchEvent(new Event('portfolio:open-recruiter-assistant'))}>
              <Bot size={16} />
              Ask Kartik AI
            </button>
            <button type="button" className="runtime-text-button" onClick={() => window.dispatchEvent(new Event('portfolio:replay-runtime'))}>
              Replay intro
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
