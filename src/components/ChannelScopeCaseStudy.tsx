import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Bot,
  CalendarDays,
  Github,
  Instagram,
  Layers3,
  ShieldCheck,
  Sparkles,
  Video,
  Youtube
} from 'lucide-react';

const features = [
  {
    icon: Youtube,
    title: 'YouTube intelligence',
    text: 'Analyze public channels, recent uploads, views, likes/comments, upload timing and channel comparisons using the YouTube Data API.'
  },
  {
    icon: Bot,
    title: 'Creator advisor',
    text: 'Generate evidence-based content experiments, hooks and publishing ideas from the channel sample, with deterministic fallbacks when AI is unavailable.'
  },
  {
    icon: Instagram,
    title: 'Instagram Studio',
    text: 'Draft bios, captions and relevant hashtags from creator-provided descriptions without requiring an Instagram login or private analytics.'
  },
  {
    icon: CalendarDays,
    title: 'Creator planning',
    text: 'Build 7- or 30-day content calendars, export CSV/iCal plans and hand planned ideas into the Video Optimizer workflow.'
  },
  {
    icon: Video,
    title: 'Video Upload Studio',
    text: 'Sample three frames locally from a creator-owned clip and produce separate Instagram Reel and YouTube Short publishing drafts.'
  },
  {
    icon: ShieldCheck,
    title: 'Truthful fallbacks',
    text: 'The product labels data-driven, AI-assisted and fallback modes clearly and avoids claiming access to private analytics, transcripts or unseen footage.'
  }
];

const ChannelScopeCaseStudy: React.FC = () => {
  return (
    <main className="portfolio-page min-h-screen bg-[#06090f] px-4 pb-24 pt-24 text-white">
      <div className="mx-auto max-w-6xl">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-white">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#090d16] p-6 shadow-[0_40px_140px_rgba(0,0,0,.45)] sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-red-500/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-400/15 bg-red-400/[0.06] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-red-300">
                <Sparkles size={13} /> Creator intelligence platform
              </div>
              <h1 className="mt-6 text-5xl font-semibold tracking-[-.055em] sm:text-6xl lg:text-7xl">ChannelScope</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                A multi-workspace creator platform for public YouTube analytics, AI-assisted publishing, Instagram drafting and cross-platform content planning.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {['React', 'Vite', 'Cloudflare Workers', 'YouTube Data API', 'Groq', 'JavaScript'].map((item) => (
                  <span key={item} className="rounded-xl border border-white/[.07] bg-white/[.035] px-3 py-2 text-[11px] font-medium text-slate-400">{item}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://channelscope.kartikkataria2000.workers.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-1">
                  Open live project <ArrowUpRight size={16} />
                </a>
                <a href="https://github.com/kartik977/youtube-channel-intelligence" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[.035] px-5 py-3.5 text-sm font-semibold text-slate-300 transition hover:-translate-y-1 hover:text-white">
                  <Github size={16} /> Repository
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-[#080c13] p-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[.06] pb-3">
                <strong className="text-sm">ChannelScope</strong>
                <span className="text-[9px] font-semibold uppercase tracking-[.16em] text-slate-600">public creator intelligence</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-[.7fr_1.3fr]">
                <div className="space-y-2">
                  {[
                    ['YouTube', 'text-red-300'],
                    ['Instagram', 'text-fuchsia-300'],
                    ['Creator Tools', 'text-cyan-300']
                  ].map(([name, color]) => (
                    <div key={name} className="rounded-xl border border-white/[.06] bg-white/[.025] p-3">
                      <span className={'text-[10px] font-semibold ' + color}>{name}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-white/[.06] bg-white/[.02] p-3">
                  <div className="grid grid-cols-3 gap-2">
                    {['Views', 'Uploads', 'Engagement'].map((label, i) => (
                      <div key={label} className="rounded-lg bg-white/[.035] p-2">
                        <span className="text-[8px] uppercase tracking-[.12em] text-slate-600">{label}</span>
                        <strong className="mt-1 block text-sm text-white">{['1.8M', '126', '4.9%'][i]}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex h-28 items-end gap-2 rounded-xl bg-black/20 p-3">
                    {[38, 58, 44, 72, 64, 84, 76, 96].map((height, index) => (
                      <motion.span key={index} className="flex-1 rounded-t bg-gradient-to-t from-red-500/30 to-cyan-300/80" initial={{ height: 10 }} whileInView={{ height: height + '%' }} viewport={{ once: true }} transition={{ delay: index * .05 }} />
                    ))}
                  </div>
                  <div className="mt-3 rounded-xl border border-cyan-300/10 bg-cyan-300/[.035] p-3">
                    <div className="flex items-center gap-2 text-cyan-300"><Bot size={13} /><span className="text-[10px] font-semibold">AI Creator Advisor</span></div>
                    <p className="mt-2 text-[9px] leading-4 text-slate-500">Evidence-driven experiments, ideas and publishing drafts from public channel data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-red-300">What I built</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] sm:text-5xl">One creator workspace, multiple publishing workflows.</h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              ChannelScope started as public YouTube channel analytics and evolved into separate YouTube, Instagram and shared Creator Tools workspaces. The product keeps public-data limitations visible and provides useful deterministic modes when optional AI is unavailable.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }, index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className="rounded-[1.35rem] border border-white/[.07] bg-white/[.025] p-5">
                <Icon size={20} className="text-cyan-300" />
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/[.07] bg-white/[.02] p-6 sm:p-8">
          <div className="flex items-center gap-2 text-cyan-300"><Layers3 size={18} /><span className="text-xs font-semibold uppercase tracking-[.16em]">Architecture</span></div>
          <div className="mt-7 grid gap-3 md:grid-cols-4">
            {[
              ['React + Vite', 'Workspace UI, charts and creator tools'],
              ['Cloudflare Worker', 'Server-side API proxy and validation'],
              ['Public APIs', 'YouTube Data API and optional Groq'],
              ['Edge delivery', 'Static assets, caching and secure secrets']
            ].map(([title, body], index) => (
              <div key={title} className="relative rounded-2xl border border-white/[.07] bg-[#090d14] p-4">
                <span className="text-[9px] font-semibold text-slate-600">0{index + 1}</span>
                <strong className="mt-4 block text-sm">{title}</strong>
                <p className="mt-2 text-xs leading-6 text-slate-500">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ChannelScopeCaseStudy;
