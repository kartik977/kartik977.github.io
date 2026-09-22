import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Braces,
  Github,
  Image as ImageIcon,
  Layers3,
  Play,
  Server,
  Sparkles,
  Wand2
} from 'lucide-react';

const stack = ['Node.js', 'Express', 'OpenAI SDK', 'DALL·E', 'JavaScript', 'HTML', 'CSS', 'dotenv'];

const pipeline = [
  { icon: Wand2, label: 'Prompt', detail: 'User enters text and selects a size' },
  { icon: Braces, label: 'POST /openai/generateimage', detail: 'Browser sends prompt + size' },
  { icon: Server, label: 'Express controller', detail: 'Maps small / medium / large to image dimensions' },
  { icon: Sparkles, label: 'OpenAI Images API', detail: 'Requests one generated image' },
  { icon: ImageIcon, label: 'Render', detail: 'API URL is returned to the browser' }
];

const ImageGeneratorCaseStudy: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="case-study-page relative min-h-screen overflow-hidden bg-[#0d0713]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(139,92,246,0.16),transparent_28%),radial-gradient(circle_at_78%_30%,rgba(236,72,153,0.11),transparent_26%),radial-gradient(circle_at_60%_82%,rgba(59,130,246,0.09),transparent_26%)]" />
      <div className="page-grid fixed inset-0 opacity-20" />

      <section className="relative px-4 pb-20 pt-20 sm:pt-24">
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-slate-400 transition hover:border-white/15 hover:text-white"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
              Projects
            </Link>

            <a
              href="https://github.com/kartik977/Image-Generator-using-OpenAI-and-Dall-e"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-slate-400 transition hover:border-white/15 hover:text-white"
            >
              <Github size={14} />
              Repository
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex w-fit items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/[0.05] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200">
                <Sparkles size={13} />
                Case study · Generative AI
              </div>

              <h1 className="mt-7 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                AI Image
                <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300 bg-clip-text text-transparent">
                  Generator
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                A focused Node.js and Express application that turns a text prompt into an image-generation request,
                calls OpenAI&apos;s image API, and returns the generated image URL to a lightweight browser UI.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span key={item} className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[11px] font-medium text-slate-400">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36, rotateY: prefersReducedMotion ? 0 : -5 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="[perspective:1500px]"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-violet-300/10 bg-[#12091a]/90 p-3 shadow-[0_45px_140px_rgba(0,0,0,0.5)]">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl" />

                <div className="relative grid gap-4 rounded-[1.55rem] border border-white/[0.07] bg-[#110b17] p-4 sm:grid-cols-[0.84fr_1.16fr] sm:p-5">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <div className="flex items-center gap-2 text-violet-300">
                      <Wand2 size={16} />
                      <span className="text-xs font-semibold">Prompt studio</span>
                    </div>

                    <div className="mt-4 rounded-xl border border-violet-400/10 bg-violet-400/[0.04] p-3">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-600">Describe your image</p>
                      <p className="mt-3 text-xs leading-6 text-slate-300">
                        Futuristic city at dusk, neon reflections, cinematic atmosphere...
                      </p>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {[
                        ['Small', '256'],
                        ['Medium', '512'],
                        ['Large', '1024']
                      ].map(([label, size], index) => (
                        <motion.div
                          key={label}
                          animate={prefersReducedMotion ? undefined : { opacity: index === 1 ? [0.55, 1, 0.55] : 0.55 }}
                          transition={{ duration: 2.6, repeat: Infinity }}
                          className={
                            'rounded-lg border px-2 py-2 text-center ' +
                            (index === 1
                              ? 'border-violet-300/20 bg-violet-300/[0.08]'
                              : 'border-white/[0.05] bg-white/[0.02]')
                          }
                        >
                          <p className="text-[9px] font-semibold text-slate-300">{label}</p>
                          <p className="mt-0.5 text-[8px] text-slate-600">{size}px</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-2.5 text-[10px] font-semibold text-slate-950">
                      <Play size={12} />
                      Let&apos;s do magic
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'linear-gradient(145deg,#1d4ed8,#7c3aed 48%,#ec4899)',
                      'linear-gradient(145deg,#0f766e,#0891b2 48%,#4338ca)',
                      'linear-gradient(145deg,#7c3aed,#db2777 52%,#fb7185)',
                      'linear-gradient(145deg,#312e81,#7c3aed 45%,#be185d)'
                    ].map((gradient, index) => (
                      <motion.div
                        key={gradient}
                        animate={
                          prefersReducedMotion
                            ? undefined
                            : {
                                y: [0, index % 2 === 0 ? -6 : 6, 0],
                                rotate: [0, index % 2 === 0 ? -1 : 1, 0]
                              }
                        }
                        transition={{ duration: 4.5 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative overflow-hidden rounded-2xl border border-white/10"
                        style={{ background: gradient }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_24%)]"
                          animate={prefersReducedMotion ? undefined : { x: ['-8%', '12%', '-8%'], y: ['0%', '8%', '0%'] }}
                          transition={{ duration: 5, repeat: Infinity, delay: index * 0.2 }}
                        />
                        <div className="aspect-square" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">Request path</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
              One prompt. One API path.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500">
              The project is intentionally small, so the case study focuses on the actual request lifecycle rather than inventing extra infrastructure.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-3 lg:grid-cols-5">
            {pipeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.02 }}
                    className="h-full rounded-[1.5rem] border border-white/[0.07] bg-white/[0.025] p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-violet-400/12 bg-violet-400/[0.055] text-violet-300">
                      <Icon size={17} />
                    </div>
                    <p className="mt-5 text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{item.detail}</p>
                  </motion.div>
                  {index < pipeline.length - 1 && (
                    <ArrowRight size={14} className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-slate-700 lg:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-fuchsia-300">Implementation</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
                Small codebase.
                <span className="block text-slate-500">Clear separation.</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                Express serves the static frontend and mounts the OpenAI route. The route delegates to a controller,
                where prompt and size are converted into an image-generation request and the returned image URL is sent back as JSON.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-[#0b0710]/85 shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-600">request flow</span>
              </div>

              <div className="space-y-1 p-5 font-mono text-xs leading-7">
                <p><span className="text-fuchsia-300">POST</span> <span className="text-slate-300">/openai/generateimage</span></p>
                <p className="text-slate-600">{'{'}</p>
                <p className="pl-5 text-slate-400">prompt: <span className="text-violet-300">&quot;...&quot;</span>,</p>
                <p className="pl-5 text-slate-400">size: <span className="text-violet-300">&quot;medium&quot;</span></p>
                <p className="text-slate-600">{'}'}</p>
                <div className="my-3 h-px bg-white/[0.05]" />
                <p className="text-slate-500">medium → <span className="text-cyan-300">512x512</span></p>
                <p className="text-slate-500">n → <span className="text-cyan-300">1</span></p>
                <p className="text-slate-500">provider → <span className="text-cyan-300">OpenAI Images API</span></p>
                <div className="my-3 h-px bg-white/[0.05]" />
                <p className="text-emerald-300">200 {'{'} success: true, data: imageUrl {'}'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Minimal API boundary', 'One POST endpoint keeps the browser-to-provider interaction easy to understand.'],
              ['02', 'Config outside code', 'The OpenAI API key is read from the environment through dotenv instead of being embedded in frontend code.'],
              ['03', 'Explicit error path', 'Provider failures return a 400 response with a controlled message rather than crashing the server.']
            ].map(([number, title, text], index) => (
              <motion.article
                key={number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="relative overflow-hidden rounded-[1.7rem] border border-white/[0.07] bg-white/[0.025] p-6"
              >
                <div className="absolute -right-4 -top-5 text-[6rem] font-black tracking-[-0.08em] text-white/[0.025]">{number}</div>
                <p className="relative text-xs font-semibold tracking-[0.16em] text-violet-300">{number}</p>
                <h3 className="relative mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-500">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-28 pt-14">
        <div className="container mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-violet-400/10 bg-gradient-to-br from-violet-400/[0.08] via-[#100914] to-fuchsia-400/[0.05] p-7 sm:p-10">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <Layers3 size={22} className="text-violet-300" />
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">Source code</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Explore the Node.js + DALL·E implementation.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                The repository contains the Express server, image route, OpenAI controller and the static browser UI used to submit prompts and render results.
              </p>
            </div>

            <a
              href="https://github.com/kartik977/Image-Generator-using-OpenAI-and-Dall-e"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              <Github size={17} />
              Open repository
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="container mx-auto mt-8 flex max-w-5xl items-center justify-between">
          <Link to="/projects/grocery-ordering" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-white">
            <ArrowLeft size={15} />
            Grocery Ordering
          </Link>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-white">
            All projects
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ImageGeneratorCaseStudy;
