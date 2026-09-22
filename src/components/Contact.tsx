import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone
} from 'lucide-react';

const Contact: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'katariakartik08@gmail.com',
      link: 'mailto:katariakartik08@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '607-262-4092',
      link: 'tel:607-262-4092'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dallas, TX',
      link: null
    }
  ];

  return (
    <section className="portfolio-page min-h-screen">
      <div className="page-grid absolute inset-0" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
            <MessageCircle size={14} />
            Let&apos;s connect
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Have a role, project
            <span className="block text-slate-400">or engineering problem in mind?</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m always open to a useful conversation about software engineering, backend systems,
            cloud delivery and new opportunities.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="rounded-[1.75rem] border border-white/[0.075] bg-slate-950/44 p-6 backdrop-blur-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-slate-500">Contact</p>
            <div className="mt-5 space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-colors duration-300 hover:bg-white/[0.045]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.05] text-cyan-300">
                      <Icon size={17} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">{item.title}</p>
                      <p className="mt-1 truncate text-sm font-medium text-slate-200">{item.value}</p>
                    </div>
                  </div>
                );

                return item.link ? (
                  <a key={item.title} href={item.link}>{content}</a>
                ) : (
                  <div key={item.title}>{content}</div>
                );
              })}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/kartik977"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-400 transition hover:-translate-y-0.5 hover:text-white"
              >
                <Github size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/kartikkataria2023/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-400 transition hover:-translate-y-0.5 hover:text-white"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-[1.75rem] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.07] via-slate-950/55 to-violet-400/[0.06] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-9"
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Start a conversation</p>
              <h2 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                The easiest way to reach me is by email.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Tell me a little about the opportunity or problem, and I&apos;ll have the context I need when we connect.
              </p>
              <a
                href="mailto:katariakartik08@gmail.com"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5"
              >
                Send an email
                <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
