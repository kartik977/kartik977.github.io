import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Sparkles
} from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer 3',
    company: 'Cognizant - USA',
    location: 'Dallas, TX',
    period: 'Aug 2023 – Current',
    projects: [
      {
        name: 'Capital One – Debit Card Team (BankTech)',
        period: 'Jan 2025 – Current',
        achievements: [
          'Developing new APIs and maintaining existing APIs using Java, Node.js, and TypeScript, ensuring efficient and scalable application workflows',
          'Configuring and managing New Relic alerts and dashboards, enabling real-time monitoring and actionable insights for the team',
          'Working with AWS Lambda and CloudFormation Templates to deploy and manage serverless architectures, improving deployment efficiency and scalability'
        ]
      },
      {
        name: 'Capital One – Servicing Team (FinTech)',
        period: 'Nov 2024 – Jan 2025',
        achievements: [
          'Worked on a project based on GraphQL, TypeScript, and NestJS, using Apollo GraphQL Server to build scalable and efficient server-side applications, integrating multiple endpoints seamlessly',
          'Validated error scenarios using detailed unit and component tests, improving overall system robustness and fault tolerance'
        ]
      },
      {
        name: 'Capital One – Multi Lender Platform Team (FinTech)',
        period: 'May 2024 – Nov 2024',
        achievements: [
          'Developed and enhanced critical banking applications using Java Spring Boot',
          'Conducted performance testing using JMeter, achieving a 50% improvement in application response times, with the average response time reduced to around 72ms',
          'Performed functional testing using Rest Assured and BDD frameworks, increasing test case coverage by 40% and identifying 20% more defects before production',
          'Utilized AWS services including S3, Lambda, CloudFormation and IAM role creation to enhance application performance and security',
          'Collaborated with cross-functional teams to implement best practices, resulting in a 25% reduction in bugs and a 20% improvement in application performance'
        ]
      },
      {
        name: 'Verizon',
        period: 'Aug 2023 – April 2024',
        achievements: [
          'Led the development and optimization of billing and payment solutions employing Java for backend operations and React.js for frontend enhancements',
          'Advanced database efficiency and scalability by implementing Cassandra, achieving a 25% enhancement in handling high-volume transaction data'
        ]
      }
    ]
  },
  {
    title: 'GTA, Data Analysis and Modeling Techniques',
    company: 'University of Texas at Arlington - USA',
    location: 'Arlington, TX',
    period: 'Aug 2022 – May 2023',
    projects: [
      {
        name: 'Teaching Assistant',
        period: 'Aug 2022 – May 2023',
        achievements: [
          'Developed and delivered engaging lectures, workshops, and tutorials, utilizing Python and R programming languages to facilitate hands-on learning experiences in data manipulation, visualization, and predictive modeling'
        ]
      }
    ]
  },
  {
    title: 'Associate Software Engineer',
    company: 'Perpule - India',
    location: 'India',
    period: 'Aug 2019 – Apr 2021',
    projects: [
      {
        name: 'Self-Checkout System Development',
        period: 'Aug 2019 – Apr 2021',
        achievements: [
          'Collaborated with a team of developers to design, develop, and maintain the backend of the Perpule self-checkout system using Python, resulting in a 50% reduction in checkout time and enhancing overall customer satisfaction',
          'Implemented efficient algorithms and data structures to optimize the performance of critical system components, leading to a 30% increase in system throughput and improved scalability',
          'Assisted in the design and implementation of a RESTful API for the Perpule mobile application, enhancing the user experience and driving a significant 40% increase in user engagement'
        ]
      }
    ]
  }
];

const Experience: React.FC = () => {
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
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            <Clock3 size={14} />
            Professional journey
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Experience built across
            <span className="block text-slate-400">real systems and real ownership.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A timeline of the teams, platforms and responsibilities that shaped how I build, test,
            deploy and support software.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-[19px] top-3 w-px bg-gradient-to-b from-cyan-300/45 via-blue-400/20 to-transparent sm:left-[27px]" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.65,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative pl-14 sm:pl-20"
              >
                <div className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-slate-950 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.08)] sm:h-14 sm:w-14">
                  <Building2 size={20} />
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-white/[0.075] bg-slate-950/48 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                  <div className="border-b border-white/[0.065] p-5 sm:p-7">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                          {String(index + 1).padStart(2, '0')}
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                          {exp.title}
                        </h2>
                        <p className="mt-1 text-base font-medium text-slate-300">{exp.company}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-400">
                        <span className="inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2">
                          <CalendarDays size={14} />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 p-5 sm:p-7">
                    {exp.projects.map((project, projectIndex) => (
                      <motion.div
                        key={project.name}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                          duration: prefersReducedMotion ? 0 : 0.5,
                          delay: prefersReducedMotion ? 0 : projectIndex * 0.06
                        }}
                        whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                        className="group rounded-2xl border border-white/[0.065] bg-white/[0.025] p-4 transition-colors duration-300 hover:border-cyan-300/15 hover:bg-white/[0.04] sm:p-5"
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-start gap-3">
                            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-300">
                              <CheckCircle2 size={15} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-100">{project.name}</h3>
                              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                                {project.period}
                              </p>
                            </div>
                          </div>
                          <ArrowUpRight
                            size={17}
                            className="hidden text-slate-700 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300 sm:block"
                          />
                        </div>

                        <div className="mt-4 grid gap-2.5">
                          {project.achievements.map((achievement) => (
                            <div key={achievement} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/70" />
                              <p className="text-sm leading-6 text-slate-400">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="mx-auto mt-14 max-w-5xl rounded-[1.75rem] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/[0.06] text-violet-300">
                <Sparkles size={19} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Career pattern</p>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
                  My work has consistently moved closer to end-to-end engineering ownership—from implementation to validation, cloud delivery and production reliability.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
