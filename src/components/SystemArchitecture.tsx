import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  Braces,
  CheckCircle2,
  CloudCog,
  Database,
  Globe2,
  LoaderCircle,
  Network,
  Play,
  RotateCcw,
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

type TraceStep = {
  node: string;
  label: string;
  latency: string;
  status: string;
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

const traceSteps: TraceStep[] = [
  { node: 'client', label: 'GET /card/status', latency: '0 ms', status: 'request' },
  { node: 'gateway', label: 'Route + validate', latency: '7 ms', status: 'accepted' },
  { node: 'java', label: 'Execute business logic', latency: '31 ms', status: 'processing' },
  { node: 'cloud', label: 'Invoke runtime', latency: '45 ms', status: 'healthy' },
  { node: 'data', label: 'Read account state', latency: '63 ms', status: 'found' },
  { node: 'observe', label: 'Publish telemetry', latency: '72 ms', status: '200 OK' }
];

const tracePairs = new Set([
  'client-gateway',
  'gateway-java',
  'java-cloud',
  'cloud-data',
  'data-observe'
]);

const accentClasses: Record<string, string> = {
  cyan: 'border-cyan-300/25 bg-cyan-300/[0.08] text-cyan-200',
  blue: 'border-blue-300/25 bg-blue-300/[0.08] text-blue-200',
  violet: 'border-violet-300/25 bg-violet-300/[0.08] text-violet-200',
  emerald: 'border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-200'
};

const SystemArchitecture: React.FC = () => {
  const [activeId, setActiveId] = useState('java');
  const [runStep, setRunStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [runComplete, setRunComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const activeNode = nodes.find((node) => node.id === activeId) ?? nodes[0];

  useEffect(() => {
    if (!isRunning || runStep < 0) return;

    setActiveId(traceSteps[runStep].node);

    const timer = window.setTimeout(() => {
      if (runStep >= traceSteps.length - 1) {
        setIsRunning(false);
        setRunComplete(true);
        return;
      }
      setRunStep((step) => step + 1);
    }, prefersReducedMotion ? 220 : 720);

    return () => window.clearTimeout(timer);
  }, [isRunning, runStep, prefersReducedMotion]);

  const startRun = () => {
    setRunComplete(false);
    setRunStep(0);
    setIsRunning(true);
  };

  const resetRun = () => {
    setRunStep(-1);
    setRunComplete(false);
    setIsRunning(false);
    setActiveId('java');
  };

  const visitedTraceNode = (nodeId: string) => {
    if (runStep < 0) return false;
    const index = traceSteps.findIndex((step) => step.node === nodeId);
    return index >= 0 && index <= runStep;
  };

  const traversedConnection = (from: string, to: string) => {
    if (runStep <= 0 || !tracePairs.has(from + '-' + to)) return false;

    const fromIndex = traceSteps.findIndex((step) => step.node === from);
    const toIndex = traceSteps.findIndex((step) => step.node === to);

    return fromIndex >= 0 && toIndex >= 0 && toIndex <= runStep;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="architecture-shell relative mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101a]/78 shadow-[0_45px_120px_rgba(0,0,0,0.48)] backdrop-blur-2xl"
    >
      <div className="architecture-ambient pointer-events-none absolute inset-0" />

      <div className="relative flex items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-4">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Interactive engineering system
          </p>
          <p className="mt-1 truncate text-[11px] text-slate-500">
            Representative architecture · hover a node or run a request
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={isRunning ? undefined : runComplete ? resetRun : startRun}
            disabled={isRunning}
            className={
              'architecture-run-button inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] transition ' +
              (isRunning
                ? 'cursor-wait border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-200'
                : runComplete
                  ? 'border-violet-300/15 bg-violet-300/[0.06] text-violet-200 hover:bg-violet-300/[0.1]'
                  : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/20 hover:text-white')
            }
          >
            {isRunning ? (
              <LoaderCircle size={11} className="animate-spin" />
            ) : runComplete ? (
              <RotateCcw size={11} />
            ) : (
              <Play size={11} />
            )}
            {isRunning ? 'Running' : runComplete ? 'Reset' : 'Run request'}
          </button>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.045] px-3 py-1.5 xl:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-200">
              traffic live
            </span>
          </div>
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

            <AnimatePresence>
              {(isRunning || runComplete) && runStep >= 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-lg border border-cyan-300/10 bg-[#07101a]/90 px-2.5 py-1.5 backdrop-blur-xl"
                >
                  {runComplete ? (
                    <CheckCircle2 size={11} className="text-emerald-300" />
                  ) : (
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                  )}
                  <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-slate-400">
                    {runComplete ? '200 OK · 72 ms' : traceSteps[runStep].latency + ' · tracing'}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

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
                const selected = activeId === from.id || activeId === to.id;
                const traversed = traversedConnection(connection.from, connection.to);

                return (
                  <g key={connection.from + '-' + connection.to}>
                    <motion.line
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke={
                        traversed
                          ? 'rgba(110,231,183,0.88)'
                          : selected
                            ? 'rgba(103,232,249,0.55)'
                            : 'url(#architecture-line)'
                      }
                      strokeWidth={traversed ? 3 : selected ? 2.2 : 1.2}
                      strokeDasharray={traversed || selected ? '0' : '7 10'}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: traversed || selected ? 1 : 0.68 }}
                      transition={{ duration: 0.65 }}
                    />

                    {!prefersReducedMotion && !isRunning && !runComplete && (
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
              const visited = visitedTraceNode(node.id);
              const current = isRunning && runStep >= 0 && traceSteps[runStep].node === node.id;

              return (
                <motion.button
                  key={node.id}
                  type="button"
                  aria-pressed={active}
                  onMouseEnter={() => {
                    if (!isRunning) setActiveId(node.id);
                  }}
                  onFocus={() => {
                    if (!isRunning) setActiveId(node.id);
                  }}
                  onClick={() => {
                    if (!isRunning) setActiveId(node.id);
                  }}
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={{
                    opacity: 1,
                    scale: current ? 1.11 : active ? 1.055 : 1,
                    boxShadow: current
                      ? '0 0 0 1px rgba(110,231,183,0.45), 0 0 36px rgba(16,185,129,0.2)'
                      : '0 16px 38px rgba(0,0,0,0.28)'
                  }}
                  transition={{
                    opacity: { duration: 0.45, delay: 0.18 + index * 0.055 },
                    scale: { type: 'spring', stiffness: 260, damping: 20 },
                    boxShadow: { duration: 0.25 }
                  }}
                  whileHover={prefersReducedMotion || isRunning ? undefined : { y: -4 }}
                  className={
                    'architecture-node absolute z-10 w-[102px] -translate-x-1/2 -translate-y-1/2 rounded-[1rem] border p-2.5 text-left backdrop-blur-xl transition-colors duration-300 xl:w-[110px] ' +
                    (current
                      ? 'border-emerald-300/35 bg-emerald-300/[0.1] text-emerald-100'
                      : visited
                        ? 'border-emerald-300/18 bg-emerald-300/[0.055] text-slate-300'
                        : active
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
              {isRunning || runComplete ? 'Live trace' : 'Selected node'}
            </p>

            <AnimatePresence mode="wait">
              {isRunning || runComplete ? (
                <motion.div
                  key="trace"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.26 }}
                  className="mt-4"
                >
                  <TracePanel runStep={runStep} runComplete={runComplete} />
                </motion.div>
              ) : (
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
              )}
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
        <button
          type="button"
          onClick={isRunning ? undefined : runComplete ? resetRun : startRun}
          disabled={isRunning}
          className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] px-4 py-3 text-xs font-semibold text-cyan-100"
        >
          {isRunning ? <LoaderCircle size={14} className="animate-spin" /> : runComplete ? <RotateCcw size={14} /> : <Play size={14} />}
          {isRunning ? 'Running request…' : runComplete ? 'Reset trace' : 'Run request'}
        </button>

        <div className="grid gap-2">
          {nodes.map((node) => {
            const Icon = node.icon;
            const active = activeId === node.id;
            const visited = visitedTraceNode(node.id);

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => {
                  if (!isRunning) setActiveId(node.id);
                }}
                className={
                  'flex items-center gap-3 rounded-xl border p-3 text-left transition ' +
                  (visited
                    ? 'border-emerald-300/18 bg-emerald-300/[0.055] text-emerald-100'
                    : active
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
          {isRunning || runComplete ? (
            <TracePanel runStep={runStep} runComplete={runComplete} />
          ) : (
            <NodeDetail node={activeNode} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TracePanel: React.FC<{ runStep: number; runComplete: boolean }> = ({ runStep, runComplete }) => {
  return (
    <div>
      <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
        <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-600">
          Trace ID
        </p>
        <p className="mt-1 font-mono text-[9px] text-cyan-300">req_72ms_prod</p>
      </div>

      <div className="mt-3 space-y-2">
        {traceSteps.map((step, index) => {
          const complete = index < runStep || runComplete;
          const current = index === runStep && !runComplete;
          const waiting = index > runStep && !runComplete;

          return (
            <motion.div
              key={step.node}
              initial={{ opacity: 0.35 }}
              animate={{ opacity: waiting ? 0.28 : 1 }}
              className="flex items-start gap-2.5"
            >
              <div
                className={
                  'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ' +
                  (complete
                    ? 'border-emerald-300/20 bg-emerald-300/[0.07] text-emerald-300'
                    : current
                      ? 'border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-300'
                      : 'border-white/[0.07] bg-white/[0.02] text-slate-700')
                }
              >
                {complete ? (
                  <CheckCircle2 size={10} />
                ) : current ? (
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                ) : (
                  <span className="h-1 w-1 rounded-full bg-slate-700" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-[9px] font-medium text-slate-300">{step.label}</p>
                  <span className="shrink-0 font-mono text-[8px] text-slate-600">{step.latency}</span>
                </div>
                <p
                  className={
                    'mt-0.5 text-[7px] font-semibold uppercase tracking-[0.12em] ' +
                    (complete
                      ? 'text-emerald-400/70'
                      : current
                        ? 'text-cyan-400/70'
                        : 'text-slate-700')
                  }
                >
                  {step.status}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {runComplete && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-xl border border-emerald-300/12 bg-emerald-300/[0.045] p-3"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-emerald-300" />
            <p className="text-[9px] font-semibold text-emerald-200">200 OK</p>
          </div>
          <p className="mt-1.5 text-[8px] leading-4 text-slate-500">
            Request completed and telemetry published in 72 ms.
          </p>
        </motion.div>
      )}
    </div>
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
