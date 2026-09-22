import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  CheckCircle2,
  Database,
  Github,
  KeyRound,
  LockKeyhole,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Truck,
  UserRound
} from 'lucide-react';

const stack = [
  'Angular 17',
  'TypeScript',
  'Spring Boot 3.2',
  'Java 17',
  'Spring Security',
  'Spring Data JPA',
  'JWT',
  'H2',
  'RxJS',
  'Bootstrap 5'
];

const flow = [
  { icon: Store, label: 'Browse', detail: 'Catalog, categories, filters, search' },
  { icon: ShoppingCart, label: 'Cart', detail: 'Add, remove, quantity, totals' },
  { icon: KeyRound, label: 'Authorize', detail: 'JWT-protected user actions' },
  { icon: PackageCheck, label: 'Order', detail: 'Checkout and order creation' },
  { icon: Truck, label: 'Track', detail: 'Status and order history' }
];

const backendLayers = [
  ['Angular 17', 'Standalone UI, routing, services, RxJS'],
  ['REST API', 'Auth, grocery, cart and order controllers'],
  ['Spring Security', 'JWT filter, route protection and roles'],
  ['Service layer', 'Cart, grocery and order business logic'],
  ['Spring Data JPA', 'Repositories and entity persistence'],
  ['H2', 'Development database']
];

const features = [
  {
    icon: Search,
    title: 'Catalog + filtering',
    text: 'Product browsing includes category and price filtering, stock awareness, sorting and debounced search behavior.'
  },
  {
    icon: ShoppingCart,
    title: 'Stateful cart',
    text: 'Users can add, remove and change quantities while the application recalculates cart totals and item counts.'
  },
  {
    icon: LockKeyhole,
    title: 'Authentication',
    text: 'Spring Security and JWT protect authenticated flows, with role-aware navigation and admin/user access controls.'
  },
  {
    icon: PackageCheck,
    title: 'Order lifecycle',
    text: 'Checkout creates orders that can be retrieved, tracked, updated and reviewed in order history.'
  },
  {
    icon: UserRound,
    title: 'User experience',
    text: 'Angular components cover login, signup, wishlist, product detail, checkout, order history and notifications.'
  },
  {
    icon: Boxes,
    title: 'Layered backend',
    text: 'Controllers, services, repositories and entities keep HTTP concerns, business logic and persistence separated.'
  }
];

const products = [
  ['🥑', 'Avocado', '$2.49'],
  ['🍊', 'Orange', '$1.89'],
  ['🍞', 'Bread', '$3.99'],
  ['🥛', 'Milk', '$4.29'],
  ['🥬', 'Greens', '$2.99'],
  ['🍓', 'Berries', '$5.49']
];

const GroceryCaseStudy: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="case-study-page relative min-h-screen overflow-hidden bg-[#06100c]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(16,185,129,0.12),transparent_26%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.09),transparent_28%)]" />
      <div className="page-grid fixed inset-0 opacity-25" />

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
              href="https://github.com/kartik977/grocery-app"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-slate-400 transition hover:border-white/15 hover:text-white"
            >
              <Github size={14} />
              Repository
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.045] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                <Sparkles size={13} />
                Case study · Full-stack commerce
              </div>

              <h1 className="mt-7 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                Grocery
                <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Ordering System
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                A layered full-stack grocery application built with Angular 17 and Spring Boot 3,
                covering product discovery, cart state, authentication, checkout and order tracking.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[11px] font-medium text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36, rotateY: prefersReducedMotion ? 0 : -5 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="[perspective:1500px]"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-emerald-300/10 bg-[#081510]/90 p-3 shadow-[0_45px_140px_rgba(0,0,0,0.46)]">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
                <div className="relative rounded-[1.55rem] border border-white/[0.07] bg-[#09140f] p-4 sm:p-5">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <div className="flex items-center gap-2 text-emerald-300">
                      <Store size={17} />
                      <span className="text-sm font-semibold">FreshCart</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.13em] text-slate-500">Catalog</span>
                      <span className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.05] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.13em] text-emerald-300">Cart · 3</span>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {products.map(([emoji, name, price], index) => (
                      <motion.div
                        key={name}
                        animate={prefersReducedMotion ? undefined : { y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                        transition={{ duration: 4 + index * 0.28, repeat: Infinity, ease: 'easeInOut' }}
                        whileHover={prefersReducedMotion ? undefined : { y: -7, scale: 1.03 }}
                        className="rounded-2xl border border-white/[0.065] bg-white/[0.025] p-3"
                      >
                        <div className="text-3xl">{emoji}</div>
                        <p className="mt-3 text-xs font-semibold text-white">{name}</p>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-[10px] text-emerald-300">{price}</span>
                          <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-emerald-400/10 bg-emerald-400/[0.05] text-emerald-300">
                            +
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                    <div className="rounded-xl border border-white/[0.055] bg-white/[0.02] px-4 py-3">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-600">Order flow</p>
                      <div className="mt-2 flex items-center gap-2">
                        {['Cart', 'Checkout', 'Placed', 'Tracking'].map((step, index) => (
                          <React.Fragment key={step}>
                            <motion.span
                              animate={prefersReducedMotion ? undefined : { opacity: [0.35, 1, 0.35] }}
                              transition={{ duration: 3, repeat: Infinity, delay: index * 0.45 }}
                              className="text-[9px] font-medium text-slate-400"
                            >
                              {step}
                            </motion.span>
                            {index < 3 && <ArrowRight size={10} className="text-slate-700" />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.045] px-4 py-3 text-[10px] font-semibold text-emerald-200">
                      <ShieldCheck size={14} />
                      JWT secured
                    </div>
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
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">User journey</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
              Shopping as one connected workflow.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-3 lg:grid-cols-5">
            {flow.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="relative"
                >
                  <div className="h-full rounded-[1.5rem] border border-white/[0.07] bg-white/[0.025] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/12 bg-emerald-400/[0.055] text-emerald-300">
                      <Icon size={17} />
                    </div>
                    <p className="mt-5 text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{item.detail}</p>
                  </div>
                  {index < flow.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-slate-700 lg:block" size={14} />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-300">System architecture</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
                Angular in front.
                <span className="block text-slate-500">Spring behind it.</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                The repository follows a conventional layered backend: REST controllers call service classes,
                services coordinate business logic, repositories use Spring Data JPA, and Spring Security applies JWT authentication.
              </p>
            </div>

            <div className="space-y-3">
              {backendLayers.map(([label, detail], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.065] bg-white/[0.025] p-4 transition hover:border-emerald-300/15 hover:bg-white/[0.04]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.045] text-[10px] font-semibold text-emerald-300">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="mt-1 text-xs text-slate-500">{detail}</p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-slate-700 transition group-hover:translate-x-1 group-hover:text-emerald-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.05 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -5 }}
                  className="rounded-[1.6rem] border border-white/[0.07] bg-white/[0.025] p-5"
                >
                  <Icon size={18} className="text-emerald-300" />
                  <h3 className="mt-4 text-base font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{feature.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-28 pt-14">
        <div className="container mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-emerald-400/10 bg-gradient-to-br from-emerald-400/[0.07] via-[#07110d] to-teal-400/[0.04] p-7 sm:p-10">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <Database size={22} className="text-emerald-300" />
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">Source code</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Explore the Angular + Spring Boot implementation.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                The repository contains the Angular frontend, REST controllers, JWT security, services,
                JPA repositories, domain entities and development database configuration.
              </p>
            </div>

            <a
              href="https://github.com/kartik977/grocery-app"
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
          <Link to="/projects/ai-job-hunter" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-white">
            <ArrowLeft size={15} />
            AI Job Hunter
          </Link>
          <Link to="/projects/ai-image-generator" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-white">
            AI Image Generator
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default GroceryCaseStudy;
