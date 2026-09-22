import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Sparkles
} from 'lucide-react';

const education = [
  {
    degree: 'Master of Science – Computer Science',
    school: 'The University of Texas at Arlington, USA',
    gpa: 'GPA: 3.75',
    year: 'May 2023',
    coursework: [
      'Cloud Computing',
      'Machine Learning',
      'Algorithms',
      'Web Data Management',
      'Data Mining',
      'Artificial Intelligence'
    ]
  },
  {
    degree: 'Bachelor of Engineering – Computer Science and Engineering',
    school: 'Guru Gobind Singh Indraprastha University',
    gpa: 'GPA: 3.5',
    year: 'May 2019',
    coursework: []
  }
];

const certifications = [
  'SAP Technology Consultant - Coursera',
  'Data Engineering – IBM',
  'Gen AI Fundamentals - Udemy',
  'React and Redux Course - Udemy',
  'Data Analytics Certification – Google'
];

const About: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="portfolio-page min-h-screen">
      <div className="page-grid absolute inset-0" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-slate-950/55 p-3 shadow-[0_34px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl">
              <img
                src="/WhatsApp Image 2025-08-07 at 10.48.20 AM.jpeg"
                alt="Kartik Kataria"
                className="aspect-[4/5] w-full rounded-[1.45rem] object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Current</p>
                <p className="mt-1 font-semibold text-white">Software Engineer 3</p>
                <p className="mt-0.5 text-sm text-slate-400">Cognizant · Dallas, TX</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <Sparkles size={14} />
              About me
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              I like owning the
              <span className="block text-slate-400">whole engineering path.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I am a software engineer focused on scalable applications, backend systems and cloud delivery.
              My work spans implementation, testing, deployment, observability and production support, with
              experience across banking, telecommunications and commerce systems.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: MapPin, value: 'Dallas, TX', label: 'Based in' },
                { icon: BriefcaseBusiness, value: '5+ years', label: 'Experience' },
                { icon: BookOpen, value: 'Continuous', label: 'Learning' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.06 }}
                    className="rounded-2xl border border-white/[0.065] bg-white/[0.025] p-4"
                  >
                    <Icon size={17} className="text-cyan-300" />
                    <p className="mt-3 text-sm font-semibold text-white">{item.value}</p>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-slate-600">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="rounded-[1.75rem] border border-white/[0.075] bg-slate-950/44 p-6 backdrop-blur-xl sm:p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-400/[0.06] text-blue-300">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="font-semibold text-white">Education</p>
                <p className="text-xs text-slate-500">Academic foundation</p>
              </div>
            </div>

            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5"
                >
                  <h2 className="font-semibold text-slate-100">{item.degree}</h2>
                  <p className="mt-1 text-sm text-slate-400">{item.school}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">
                    {item.gpa} · {item.year}
                  </p>
                  {item.coursework.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-lg border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[11px] text-slate-400"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.06 }}
            className="rounded-[1.75rem] border border-white/[0.075] bg-slate-950/44 p-6 backdrop-blur-xl sm:p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/[0.06] text-violet-300">
                <Award size={18} />
              </div>
              <div>
                <p className="font-semibold text-white">Certifications</p>
                <p className="text-xs text-slate-500">Learning beyond the job</p>
              </div>
            </div>

            <div className="space-y-3">
              {certifications.map((certification, index) => (
                <motion.div
                  key={certification}
                  whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.055] bg-white/[0.02] p-3.5"
                >
                  <span className="text-[10px] font-semibold text-slate-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-slate-300">{certification}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
