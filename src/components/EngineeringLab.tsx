import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Bot,
  CheckCircle2,
  CircleDot,
  Clock3,
  Code2,
  Gauge,
  GitBranch,
  Play,
  RefreshCcw,
  Rocket,
  ScanSearch,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Wrench
} from 'lucide-react';

type StageStatus = 'idle' | 'running' | 'done';

const pipelineStages = [
  { label: 'Build', detail: 'Compile + package', icon: Code2 },
  { label: 'Test', detail: 'Functional + performance', icon: ScanSearch },
  { label: 'Deploy', detail: 'AWS / CI/CD', icon: Rocket },
  { label: 'Verify', detail: 'Health + smoke checks', icon: CheckCircle2 }
];

const incidentStages = [
  { label: 'Signal', detail: 'New Relic alert arrives' },
  { label: 'Correlate', detail: 'Logs + errors grouped' },
  { label: 'Triage', detail: 'Likely failure path isolated' },
  { label: 'Respond', detail: 'Fix or rollback begins' }
];

const EngineeringLab: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const [optimized, setOptimized] = useState(false);
  const [pipelineIndex, setPipelineIndex] = useState(-1);
  const [pipelineRunning, setPipelineRunning] = useState(false);

  const [securityRunning, setSecurityRunning] = useState(false);
  const [securityComplete, setSecurityComplete] = useState(false);

  const [incidentIndex, setIncidentIndex] = useState(-1);
  const [incidentRunning, setIncidentRunning] = useState(false);

  useEffect(() => {
    if (!pipelineRunning || pipelineIndex < 0) return;

    const timer = window.setTimeout(() => {
      if (pipelineIndex >= pipelineStages.length - 1) {
        setPipelineRunning(false);
        return;
      }
      setPipelineIndex((index) => index + 1);
    }, prefersReducedMotion ? 120 : 650);

    return () => window.clearTimeout(timer);
  }, [pipelineRunning, pipelineIndex, prefersReducedMotion]);

  useEffect(() => {
    if (!incidentRunning || incidentIndex < 0) return;

    const timer = window.setTimeout(() => {
      if (incidentIndex >= incidentStages.length - 1) {
        setIncidentRunning(false);
        return;
      }
      setIncidentIndex((index) => index + 1);
    }, prefersReducedMotion ? 120 : 620);

    return () => window.clearTimeout(timer);
  }, [incidentRunning, incidentIndex, prefersReducedMotion]);

  useEffect(() => {
    if (!securityRunning) return;

    const timer = window.setTimeout(() => {
      setSecurityRunning(false);
      setSecurityComplete(true);
    }, prefersReducedMotion ? 180 : 1800);

    return () => window.clearTimeout(timer);
  }, [securityRunning, prefersReducedMotion]);

  const pipelineComplete = pipelineIndex === pipelineStages.length - 1 && !pipelineRunning;
  const incidentComplete = incidentIndex === incidentStages.length - 1 && !incidentRunning;

  const startPipeline = () => {
    setPipelineIndex(0);
    setPipelineRunning(true);
  };

  const startIncident = () => {
    setIncidentIndex(0);
    setIncidentRunning(true);
  };

  const startSecurity = () => {
    setSecurityComplete(false);
    setSecurityRunning(true);
  };

  const metricBars = useMemo(
    () => [
      { label: 'API latency', before: 100, after: 50 },
      { label: 'Release friction', before: 100, after: 75 },
      { label: 'Detection window', before: 100, after: 65 }
    ],
    []
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06090f]">
      <div className="page-grid fixed inset-0 opacity-25" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.11),transparent_24%),radial-gradient(circle_at_82%_72%,rgba(139,92,246,0.11),transparent_26%)]" />

      <section className="relative px-4 pb-16 pt-20 sm:pt-24">
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.045] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
              <Sparkles size={13} />
              Interactive engineering lab
            </div>

            <h1 className="mt-7 text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
              Don&apos;t just read the impact.
              <span className="block text-slate-500">Run the ideas.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              Four small simulations based on the engineering outcomes in my experience: API performance,
              automated delivery, security remediation and production observability.
            </p>

            <div className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-2.5">
              <CircleDot size={13} className="text-amber-300" />
              <p className="text-[10px] font-medium text-slate-500">
                Representative demos — not live production telemetry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 pb-28">
        <div className="container mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.62 }}
            className="group relative overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-[#08111b]/82 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-7"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/12 bg-cyan-400/[0.055] text-cyan-300">
                    <Gauge size={19} />
                  </div>
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">01 · Performance</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">API latency optimization</h2>
                </div>

                <button
                  type="button"
                  onClick={() => setOptimized((value) => !value)}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/15 hover:text-white"
                >
                  {optimized ? <RefreshCcw size={14} /> : <Play size={14} />}
                  {optimized ? 'Reset' : 'Optimize'}
                </button>
              </div>

              <div className="mt-7 rounded-[1.5rem] border border-white/[0.06] bg-black/10 p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-600">Measured outcome</p>
                    <motion.p
                      key={optimized ? 'optimized' : 'baseline'}
                      initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-white"
                    >
                      {optimized ? '~72 ms' : 'Baseline'}
                    </motion.p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-2 text-right">
                    <p className="text-lg font-semibold text-emerald-300">50%</p>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.13em] text-emerald-400/60">latency reduction</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {metricBars.map((metric, index) => (
                    <div key={metric.label}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[10px] font-medium text-slate-500">{metric.label}</span>
                        <span className="text-[9px] font-mono text-slate-600">
                          {optimized ? metric.after + '%' : metric.before + '%'}
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/[0.045]">
                        <motion.div
                          animate={{ width: (optimized ? metric.after : metric.before) + '%' }}
                          transition={{ duration: prefersReducedMotion ? 0 : 0.75, delay: index * 0.06 }}
                          className={
                            'h-full rounded-full ' +
                            (index === 0
                              ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                              : index === 1
                                ? 'bg-gradient-to-r from-violet-400 to-blue-500'
                                : 'bg-gradient-to-r from-emerald-400 to-cyan-500')
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                The portfolio outcome: core banking API response time reduced by 50%, with average latency around 72 ms.
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.62, delay: 0.05 }}
            className="relative overflow-hidden rounded-[2rem] border border-violet-300/10 bg-[#0b0b18]/82 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-7"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/12 bg-violet-400/[0.055] text-violet-300">
                    <GitBranch size={19} />
                  </div>
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">02 · Delivery</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">CI/CD pipeline simulation</h2>
                </div>

                <button
                  type="button"
                  onClick={startPipeline}
                  disabled={pipelineRunning}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:border-violet-300/15 hover:text-white disabled:cursor-wait disabled:opacity-60"
                >
                  {pipelineRunning ? <Clock3 size={14} className="animate-pulse" /> : <Play size={14} />}
                  {pipelineRunning ? 'Running' : pipelineComplete ? 'Run again' : 'Run pipeline'}
                </button>
              </div>

              <div className="mt-7 grid gap-3">
                {pipelineStages.map((stage, index) => {
                  const Icon = stage.icon;
                  const status: StageStatus =
                    pipelineIndex < index ? 'idle' : pipelineIndex === index && pipelineRunning ? 'running' : pipelineIndex >= index ? 'done' : 'idle';

                  return (
                    <motion.div
                      key={stage.label}
                      animate={{
                        x: status === 'running' && !prefersReducedMotion ? [0, 5, 0] : 0,
                        borderColor:
                          status === 'done'
                            ? 'rgba(110,231,183,0.18)'
                            : status === 'running'
                              ? 'rgba(196,181,253,0.2)'
                              : 'rgba(255,255,255,0.055)'
                      }}
                      transition={{ duration: 0.35 }}
                      className="flex items-center gap-4 rounded-2xl border bg-white/[0.02] p-4"
                    >
                      <div
                        className={
                          'flex h-10 w-10 items-center justify-center rounded-xl border ' +
                          (status === 'done'
                            ? 'border-emerald-300/15 bg-emerald-300/[0.055] text-emerald-300'
                            : status === 'running'
                              ? 'border-violet-300/15 bg-violet-300/[0.055] text-violet-300'
                              : 'border-white/[0.06] bg-white/[0.025] text-slate-600')
                        }
                      >
                        {status === 'done' ? <CheckCircle2 size={16} /> : <Icon size={16} />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-200">{stage.label}</p>
                        <p className="mt-0.5 text-[10px] text-slate-600">{stage.detail}</p>
                      </div>
                      <span
                        className={
                          'text-[8px] font-semibold uppercase tracking-[0.13em] ' +
                          (status === 'done' ? 'text-emerald-400/70' : status === 'running' ? 'text-violet-300' : 'text-slate-700')
                        }
                      >
                        {status}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <AnimatePresence>
                {pipelineComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.035] p-3"
                  >
                    <p className="text-xs font-semibold text-emerald-200">Deployment verified</p>
                    <p className="mt-1 text-[10px] text-slate-500">Representative flow for automated AWS delivery and validation.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.62, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-rose-300/10 bg-[#13090e]/82 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-7"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-400/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-rose-400/12 bg-rose-400/[0.055] text-rose-300">
                    <ShieldCheck size={19} />
                  </div>
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-300">03 · Security</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">VulnHunter-Fix workflow</h2>
                </div>

                <button
                  type="button"
                  onClick={startSecurity}
                  disabled={securityRunning}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:border-rose-300/15 hover:text-white disabled:cursor-wait disabled:opacity-60"
                >
                  {securityRunning ? <ScanSearch size={14} className="animate-pulse" /> : <Bot size={14} />}
                  {securityRunning ? 'Scanning' : securityComplete ? 'Scan again' : 'Run skill'}
                </button>
              </div>

              <div className="mt-7 overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-[#08080b]">
                <div className="flex items-center justify-between border-b border-white/[0.055] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                    <TerminalSquare size={11} />
                    vuln-hunter
                  </div>
                </div>

                <div className="min-h-[220px] p-4 font-mono text-[10px] leading-6">
                  <p className="text-slate-600">$ claude /vuln-hunter-fix</p>
                  <p className="mt-2 text-slate-500">→ scan dependency + source findings</p>
                  <p className="text-slate-500">→ group remediation patterns</p>

                  <AnimatePresence mode="wait">
                    {securityRunning ? (
                      <motion.div
                        key="running"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-3"
                      >
                        {['analyzing vulnerable paths...', 'generating targeted fixes...', 'validating remediations...'].map((line, index) => (
                          <motion.p
                            key={line}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.38 }}
                            className="text-cyan-300/80"
                          >
                            {index + 1}/3 {line}
                          </motion.p>
                        ))}
                      </motion.div>
                    ) : securityComplete ? (
                      <motion.div
                        key="complete"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3"
                      >
                        <p className="text-emerald-300">✓ remediation complete</p>
                        <p className="mt-1 text-slate-400">100+ vulnerabilities remediated</p>
                        <p className="text-slate-500">estimated 400+ manual hours saved</p>
                      </motion.div>
                    ) : (
                      <motion.p
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-3 text-slate-700"
                      >
                        waiting for command...
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.62, delay: 0.15 }}
            className="relative overflow-hidden rounded-[2rem] border border-emerald-300/10 bg-[#07110d]/82 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-7"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/12 bg-emerald-400/[0.055] text-emerald-300">
                    <Activity size={19} />
                  </div>
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">04 · Observability</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">Incident detection simulation</h2>
                </div>

                <button
                  type="button"
                  onClick={startIncident}
                  disabled={incidentRunning}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:border-emerald-300/15 hover:text-white disabled:cursor-wait disabled:opacity-60"
                >
                  {incidentRunning ? <Activity size={14} className="animate-pulse" /> : <Play size={14} />}
                  {incidentRunning ? 'Tracing' : incidentComplete ? 'Simulate again' : 'Simulate incident'}
                </button>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[1.5rem] border border-white/[0.06] bg-black/10 p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-600">Detection improvement</p>
                  <div className="mt-4 flex items-end gap-3">
                    <p className="text-5xl font-semibold tracking-[-0.05em] text-emerald-300">35%</p>
                    <p className="pb-1 text-xs leading-5 text-slate-500">faster incident detection</p>
                  </div>

                  <div className="mt-6 h-16 overflow-hidden rounded-xl border border-white/[0.05] bg-[#06100b] p-3">
                    <div className="flex h-full items-end gap-1">
                      {[22, 31, 27, 45, 38, 56, 42, 67, 48, 72, 51, 36].map((height, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            height: incidentIndex >= 0 && !prefersReducedMotion
                              ? [height + '%', Math.min(95, height + (index % 3) * 13) + '%', height + '%']
                              : height + '%'
                          }}
                          transition={{ duration: 2.2, repeat: incidentIndex >= 0 ? Infinity : 0, delay: index * 0.05 }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-emerald-500/30 to-cyan-300/70"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {incidentStages.map((stage, index) => {
                    const done = incidentIndex > index || incidentComplete;
                    const current = incidentIndex === index && incidentRunning;

                    return (
                      <motion.div
                        key={stage.label}
                        animate={{ x: current && !prefersReducedMotion ? [0, 4, 0] : 0 }}
                        className={
                          'flex items-center gap-3 rounded-xl border p-3 ' +
                          (done
                            ? 'border-emerald-300/12 bg-emerald-300/[0.04]'
                            : current
                              ? 'border-cyan-300/12 bg-cyan-300/[0.04]'
                              : 'border-white/[0.055] bg-white/[0.02]')
                        }
                      >
                        <div
                          className={
                            'flex h-7 w-7 items-center justify-center rounded-lg ' +
                            (done
                              ? 'bg-emerald-300/[0.08] text-emerald-300'
                              : current
                                ? 'bg-cyan-300/[0.08] text-cyan-300'
                                : 'bg-white/[0.025] text-slate-700')
                          }
                        >
                          {done ? <CheckCircle2 size={13} /> : current ? <Activity size={13} /> : <Server size={13} />}
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-slate-300">{stage.label}</p>
                          <p className="mt-0.5 text-[9px] text-slate-600">{stage.detail}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
};

export default EngineeringLab;
