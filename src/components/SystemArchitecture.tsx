import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  Braces,
  CloudCog,
  Database,
  Globe2,
  Network,
  ShieldCheck
} from 'lucide-react';

type ArchitectureNode = {
  id: string;
  label: string;
  tech: string;
  description: string;
  responsibility: string;
  x: number;
  y: number;
  icon: React.ElementType;
  accent: string;
};

type Connection = {
  from: string;
  to: string;
  delay: number;
};

const nodes: ArchitectureNode[] = [
  {
    id: 'client',
    label: 'Client',
    tech: 'Web / channel',
    description: 'Requests enter from customer-facing or internal channels.',
    responsibility: 'Design API contracts around clear business workflows and dependable client behavior.',
    x: 95,
    y: 250,
    icon: Globe2,
    accent: 'cyan'
  },
  {
    id: 'gateway',
    label: 'API Layer',
    tech: 'REST / GraphQL',
    description: 'The request boundary handles routing, validation and interface contracts.',
    responsibility: 'Translate requirements into resilient REST and GraphQL interfaces with predictable error handling.',
    x: 270,
    y: 250,
    icon: Network,
    accent: 'blue'
  },
  {
    id: 'java',
    label: 'Core Service',
    tech: 'Java / Spring Boot',
    description: 'Core banking logic runs inside distributed backend services.',
    responsibility: 'Re-engineer latency-sensitive Java services, improve response time and keep workflows production-ready.',
    x: 475,
    y: 135,
    icon: Braces,
    accent: 'violet'
  },
  {
    id: 'node',
    label: 'Service Layer',
    tech: 'Node.js / TypeScript',
    description: 'Modern services handle orchestration, APIs and distributed workflows.',
    responsibility: 'Build and migrate backend APIs in Node.js and TypeScript while coordinating dependent services.',
    x: 475,
    y: 365,
    icon: Braces,
    accent: 'cyan'
  },
  {
    id: 'cloud',
    label: 'Cloud Runtime',
    tech: 'AWS / Lambda',
    description: 'Cloud infrastructure delivers and scales backend workloads.',
    responsibility: 'Automate deployment with AWS Lambda, CloudFormation and CI/CD to improve release consistency.',
    x: 665,
    y: 250,
    icon: CloudCog,
    accent: 'blue'
  },
  {
    id: 'data',
    label: 'Data Layer',
    tech: 'Postgres / Cassandra / Kafka',
    description: 'Persistent and event-driven systems support high-throughput application workflows.',
    responsibility: 'Work with relational, NoSQL and messaging technologies for scalable service persistence and data flow.',
    x: 850,
    y: 135,
    icon: Database,
    accent: 'emerald'
  },
  {
    id: 'observe',
    label: 'Observability',
    tech: 'New Relic / logs',
    description: 'Telemetry closes the loop after deployment.',
    responsibility: 'Build monitoring, structured logging and error tracking that shorten incident detection and recovery.',
    x: 850,
    y: 365,
    icon: Activity,
    accent: 'violet'
  }
];

const connections: Connection[] = [
  { from: 'client', to: 'gateway', delay: 0 },
  { from: 'gateway', to: 'java', delay: 0.32 },
  { from: 'gateway', to: 'node', delay: 0.64 },
  { from: 'java', to: 'cloud', delay: 0.96 },
  { from: 'node', to: 'cloud', delay: 1.28 },
  { from: 'cloud', to: 'data', delay: 1.6 },
  { from: 'cloud', to: 'observe', delay: 1.92 },
  { from: 'data', to: 'observe', delay: 2.24 }
];

const accentClasses: Record<string, string> = {
  cyan: 'border-cyan-300/25 bg-cyan-300/[0.08] text-cyan-200',
  blue: 'border-blue-300/25 bg-blue-300/[0.08] text-blue-200',
  violet: 'border-violet-300/25 bg-violet-300/[0.08] text-violet-200',
  emerald: 'border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-200'
};

const SystemArchitecture: React.FC = () => {
  const [activeId, setActiveId] = useState('java');
  const prefersReducedMotion = useReducedMotion();
  const activeNode = nodes.find((node) => node.id === activeId) ?? nodes[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="architecture-shell relative mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101a]/78 shadow-[0_45px_120px_rgba(0,0,0,0.48)] backdrop-blur-2xl"
    >
      <div className="architecture-ambient pointer-events-none absolute inset-0" />

      <div className="relative flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Interactive engineering system
          </p>
          <p className="mt-1 truncate text-[11px] text-slate-500">
            Representative architecture · hover or click a node
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.045] px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-200">
            traffic live
          </span>
        </div>
      </div>

      <div className="relative hidden sm:block">
        <div className="grid grid-cols-[minmax(0,1fr)_188px] xl:grid-cols-[minmax(0,1fr)_205px]">
          <div className="relative h-[390px] overflow-hidden border-r border-white/[0.06]">
            <div className="pointer-events-none absolute left-4 top-4 flex gap-2">
              {['EDGE', 'SERVICES', 'PLATFORM'].map((label) => (
                <span
                  key={label}
                  className="rounded-md border border-white/[0.055] bg-white/[0.02] px-2 py-1 text-[7px] font-semibold tracking-[0.16em] text-slate-700"
                >
                  {label}
                </span>
              ))}
            </div>

            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="architecture-line" x1="0" x2="1">
                  <stop offset="0%" stopColor="rgba(34,211,238,0.16)" />
                  <stop offset="50%" stopColor="rgba(96,165,250,0.32)" />
                  <stop offset="100%" stopColor="rgba(167,139,250,0.17)" />
                </linearGradient>
                <filter id="packet-glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {connections.map((connection) => {
                const from = nodes.find((node) => node.id === connection.from)!;
                const to = nodes.find((node) => node.id === connection.to)!;
                const active = activeId === from.id || activeId === to.id;

                return (
                  <g key={connection.from + '-' + connection.to}>
                    <motion.line
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke={active ? 'rgba(103,232,249,0.55)' : 'url(#architecture-line)'}
                      strokeWidth={active ? 2.2 : 1.2}
                      strokeDasharray={active ? '0' : '7 10'}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: active ? 1 : 0.68 }}
                      transition={{ duration: 0.8, delay: connection.delay * 0.12 }}
                    />

                    {!prefersReducedMotion && (
                      <motion.circle
                        r="5"
                        fill="rgba(103,232,249,0.96)"
                        filter="url(#packet-glow)"
                        initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                        animate={{
                          cx: [from.x, to.x],
                          cy: [from.y, to.y],
                          opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                          duration: 2.6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: connection.delay
                        }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {nodes.map((node, index) => {
              const Icon = node.icon;
              const active = activeId === node.id;

              return (
                <motion.button
                  key={node.id}
                  type="button"
                  aria-pressed={active}
                  onMouseEnter={() => setActiveId(node.id)}
                  onFocus={() => setActiveId(node.id)}
                  onClick={() => setActiveId(node.id)}
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={{ opacity: 1, scale: active ? 1.055 : 1 }}
                  transition={{
                    opacity: { duration: 0.45, delay: 0.18 + index * 0.055 },
                    scale: { type: 'spring', stiffness: 260, damping: 20 }
                  }}
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  className={
                    'architecture-node absolute z-10 w-[102px] -translate-x-1/2 -translate-y-1/2 rounded-[1rem] border p-2.5 text-left shadow-[0_16px_38px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-colors duration-300 xl:w-[110px] ' +
                    (active
                      ? accentClasses[node.accent] + ' architecture-node-active'
                      : 'border-white/[0.08] bg-[#0b1420]/92 text-slate-400 hover:border-white/15')
                  }
                  style={{ left: node.x / 10 + '%', top: node.y / 5 + '%' }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                      <Icon size={13} />
                    </div>
                    <span className="text-[7px] font-semibold uppercase tracking-[0.1em] text-slate-600">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-2.5 text-[10px] font-semibold leading-4 text-slate-100">
                    {node.label}
                  </p>
                  <p className="mt-0.5 text-[8px] leading-3 text-slate-500">{node.tech}</p>
                </motion.button>
              );
            })}
          </div>

          <div className="relative flex min-h-[390px] flex-col bg-black/[0.08] p-4">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-700">
              Selected node
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -8, filter: 'blur(4px)' }}
                transition={{ duration: 0.26 }}
                className="mt-5"
              >
                <NodeDetail node={activeNode} />
              </motion.div>
            </AnimatePresence>

            <div className="mt-auto border-t border-white/[0.06] pt-4">
              <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-700">
                Flow
              </p>
              <p className="mt-2 text-[10px] leading-5 text-slate-500">
                Request → service logic → cloud runtime → data → observability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:hidden">
        <div className="grid gap-2">
          {nodes.map((node) => {
            const Icon = node.icon;
            const active = activeId === node.id;

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveId(node.id)}
                className={
                  'flex items-center gap-3 rounded-xl border p-3 text-left transition ' +
                  (active
                    ? accentClasses[node.accent]
                    : 'border-white/[0.07] bg-white/[0.025] text-slate-400')
                }
              >
                <Icon size={16} />
                <div>
                  <p className="text-xs font-semibold text-slate-100">{node.label}</p>
                  <p className="text-[10px] text-slate-500">{node.tech}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-3 rounded-2xl border border-white/[0.07] bg-black/10 p-4">
          <NodeDetail node={activeNode} />
        </div>
      </div>
    </motion.div>
  );
};

const NodeDetail: React.FC<{ node: ArchitectureNode }> = ({ node }) => {
  const Icon = node.icon;

  return (
    <div>
      <div className={'flex h-11 w-11 items-center justify-center rounded-2xl border ' + accentClasses[node.accent]}>
        <Icon size={18} />
      </div>

      <p className="mt-4 text-base font-semibold tracking-tight text-white">{node.label}</p>
      <p className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-[0.12em] text-cyan-300">
        {node.tech}
      </p>

      <p className="mt-4 text-[10px] leading-5 text-slate-500">{node.description}</p>

      <div className="mt-4 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.035] p-3">
        <div className="flex items-center gap-2">
          <ShieldCheck size={12} className="shrink-0 text-cyan-300" />
          <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-600">
            My role
          </p>
        </div>
        <p className="mt-2 text-[10px] leading-5 text-slate-400">{node.responsibility}</p>
      </div>
    </div>
  );
};

export default SystemArchitecture;
