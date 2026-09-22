import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
    x: 120,
    y: 260,
    icon: Globe2,
    accent: 'cyan'
  },
  {
    id: 'gateway',
    label: 'API Layer',
    tech: 'REST / GraphQL',
    description: 'The request boundary handles routing, validation and interface contracts.',
    responsibility: 'Translate requirements into resilient REST and GraphQL interfaces with predictable error handling.',
    x: 315,
    y: 260,
    icon: Network,
    accent: 'blue'
  },
  {
    id: 'java',
    label: 'Core Service',
    tech: 'Java / Spring Boot',
    description: 'Core banking logic runs inside distributed backend services.',
    responsibility: 'Re-engineer latency-sensitive Java services, improve response time and keep workflows production-ready.',
    x: 520,
    y: 145,
    icon: Braces,
    accent: 'violet'
  },
  {
    id: 'node',
    label: 'Service Layer',
    tech: 'Node.js / TypeScript',
    description: 'Modern services handle orchestration, APIs and distributed workflows.',
    responsibility: 'Build and migrate backend APIs in Node.js and TypeScript while coordinating dependent services.',
    x: 520,
    y: 370,
    icon: Braces,
    accent: 'cyan'
  },
  {
    id: 'cloud',
    label: 'Cloud Runtime',
    tech: 'AWS / Lambda',
    description: 'Cloud infrastructure delivers and scales backend workloads.',
    responsibility: 'Automate deployment with AWS Lambda, CloudFormation and CI/CD to improve release consistency.',
    x: 725,
    y: 260,
    icon: CloudCog,
    accent: 'blue'
  },
  {
    id: 'data',
    label: 'Data Layer',
    tech: 'Postgres / Cassandra / Kafka',
    description: 'Persistent and event-driven systems support high-throughput application workflows.',
    responsibility: 'Work with relational, NoSQL and messaging technologies for scalable service persistence and data flow.',
    x: 900,
    y: 145,
    icon: Database,
    accent: 'emerald'
  },
  {
    id: 'observe',
    label: 'Observability',
    tech: 'New Relic / logs',
    description: 'Telemetry closes the loop after deployment.',
    responsibility: 'Build monitoring, structured logging and error tracking that shorten incident detection and recovery.',
    x: 900,
    y: 370,
    icon: Activity,
    accent: 'violet'
  }
];

const connections: Connection[] = [
  { from: 'client', to: 'gateway', delay: 0 },
  { from: 'gateway', to: 'java', delay: 0.35 },
  { from: 'gateway', to: 'node', delay: 0.7 },
  { from: 'java', to: 'cloud', delay: 1.05 },
  { from: 'node', to: 'cloud', delay: 1.4 },
  { from: 'cloud', to: 'data', delay: 1.75 },
  { from: 'cloud', to: 'observe', delay: 2.1 },
  { from: 'data', to: 'observe', delay: 2.45 }
];

const accentClasses: Record<string, string> = {
  cyan: 'border-cyan-300/25 bg-cyan-300/[0.07] text-cyan-200',
  blue: 'border-blue-300/25 bg-blue-300/[0.07] text-blue-200',
  violet: 'border-violet-300/25 bg-violet-300/[0.07] text-violet-200',
  emerald: 'border-emerald-300/25 bg-emerald-300/[0.07] text-emerald-200'
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
      className="architecture-shell relative mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101a]/72 shadow-[0_45px_120px_rgba(0,0,0,0.48)] backdrop-blur-2xl"
    >
      <div className="architecture-ambient pointer-events-none absolute inset-0" />

      <div className="relative flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">Interactive engineering system</p>
          <p className="mt-1 text-xs text-slate-500">Representative architecture · hover or click a node</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.045] px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-200">traffic live</span>
        </div>
      </div>

      <div className="relative hidden h-[470px] sm:block">
        <svg
          viewBox="0 0 1000 520"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="architecture-line" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(34,211,238,0.18)" />
              <stop offset="50%" stopColor="rgba(96,165,250,0.34)" />
              <stop offset="100%" stopColor="rgba(167,139,250,0.2)" />
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
                  stroke={active ? 'rgba(103,232,249,0.52)' : 'url(#architecture-line)'}
                  strokeWidth={active ? 2.2 : 1.25}
                  strokeDasharray={active ? '0' : '6 9'}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: active ? 1 : 0.72 }}
                  transition={{ duration: 0.8, delay: connection.delay * 0.12 }}
                />
                {!prefersReducedMotion && (
                  <motion.circle
                    r="5"
                    fill="rgba(103,232,249,0.95)"
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: active ? 1.07 : 1 }}
              transition={{
                opacity: { duration: 0.45, delay: 0.18 + index * 0.06 },
                scale: { type: 'spring', stiffness: 260, damping: 20 }
              }}
              whileHover={prefersReducedMotion ? undefined : { y: -5 }}
              className={
                'architecture-node absolute z-10 w-[132px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-3 text-left shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-colors duration-300 ' +
                (active
                  ? accentClasses[node.accent] + ' architecture-node-active'
                  : 'border-white/[0.08] bg-[#0b1420]/88 text-slate-400 hover:border-white/15')
              }
              style={{ left: node.x / 10 + '%', top: node.y / 5.2 + '%' }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                  <Icon size={15} />
                </div>
                <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-3 text-[11px] font-semibold text-slate-100">{node.label}</p>
              <p className="mt-0.5 text-[9px] leading-4 text-slate-500">{node.tech}</p>
            </motion.button>
          );
        })}
      </div>

      <div className="grid gap-2 p-4 sm:hidden">
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
                (active ? accentClasses[node.accent] : 'border-white/[0.07] bg-white/[0.025] text-slate-400')
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

      <AnimateNodeDetails node={activeNode} />
    </motion.div>
  );
};

const AnimateNodeDetails: React.FC<{ node: ArchitectureNode }> = ({ node }) => {
  const Icon = node.icon;

  return (
    <motion.div
      key={node.id}
      initial={{ opacity: 0, y: 12, filter: 'blur(5px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
      className="relative border-t border-white/[0.07] bg-black/10 p-5"
    >
      <div className="flex items-start gap-4">
        <div className={'flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ' + accentClasses[node.accent]}>
          <Icon size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold text-white">{node.label}</h3>
            <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.13em] text-slate-500">
              {node.tech}
            </span>
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-500">{node.description}</p>
          <div className="mt-3 flex items-start gap-2 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.035] p-3">
            <ShieldCheck size={14} className="mt-0.5 shrink-0 text-cyan-300" />
            <p className="text-[11px] leading-5 text-slate-400">
              <span className="font-semibold text-slate-300">My role: </span>
              {node.responsibility}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SystemArchitecture;
