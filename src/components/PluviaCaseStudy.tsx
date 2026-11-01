import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  CloudRain,
  Github,
  Headphones,
  MapPin,
  MonitorSmartphone,
  Music2,
  Sparkles,
  Wind
} from 'lucide-react';

const cities = ['Tokyo', 'London', 'Mumbai', 'New York', 'Seoul', 'Kyoto', 'Amsterdam', 'Vancouver'];

const PluviaCaseStudy: React.FC = () => {
  return (
    <main className="portfolio-page min-h-screen bg-[#04080b] px-4 pb-24 pt-24 text-white">
      <div className="mx-auto max-w-6xl">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-white">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#071018] p-6 shadow-[0_40px_140px_rgba(0,0,0,.5)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(56,189,248,.18),transparent_28%),radial-gradient(circle_at_80%_76%,rgba(16,185,129,.1),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(115deg,transparent_0%,rgba(255,255,255,.15)_48%,transparent_50%)] [background-size:16px_44px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[.05] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-cyan-300">
                <CloudRain size={13} /> Immersive weather experience
              </div>
              <h1 className="mt-6 text-5xl font-semibold tracking-[-.055em] sm:text-6xl lg:text-7xl">PLUVIA</h1>
              <p className="mt-2 font-serif text-2xl italic text-cyan-100/70">Experience the rain, anywhere.</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                A digital rain experience that blends live weather, city photography, animated rain, ambient sound, music and selectable window environments into one atmospheric browser experience.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {['JavaScript', 'Canvas', 'PWA', 'Web APIs', 'CSS', 'Audio'].map((item) => (
                  <span key={item} className="rounded-xl border border-white/[.07] bg-white/[.035] px-3 py-2 text-[11px] font-medium text-slate-400">{item}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://kartik977.github.io/pluvia/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-1">
                  Experience Pluvia <ArrowUpRight size={16} />
                </a>
                <a href="https://github.com/kartik977/kartik977.github.io/tree/master/public/pluvia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[.035] px-5 py-3.5 text-sm font-semibold text-slate-300 transition hover:-translate-y-1 hover:text-white">
                  <Github size={16} /> Source
                </a>
              </div>
            </div>

            <div className="relative min-h-[390px] overflow-hidden rounded-[1.5rem] border border-cyan-300/10 bg-[linear-gradient(180deg,#0c2030_0%,#08131c_48%,#03070a_100%)] shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(125,211,252,.24),transparent_20%),linear-gradient(to_top,rgba(2,6,10,.9),transparent_52%)]" />
              {Array.from({ length: 22 }).map((_, index) => (
                <motion.i key={index} className="absolute top-[-18%] h-20 w-px bg-gradient-to-b from-transparent via-cyan-100/35 to-transparent" style={{ left: ((index * 37) % 100) + '%' }} animate={{ y: ['0%', '650%'] }} transition={{ duration: 1.4 + (index % 5) * .18, repeat: Infinity, ease: 'linear', delay: -(index % 7) * .3 }} />
              ))}
              <div className="absolute bottom-0 left-0 right-0 h-36 bg-[linear-gradient(160deg,transparent_0_18%,#07131a_19%_28%,transparent_29%_35%,#0b1820_36%_47%,transparent_48%_55%,#061017_56%_70%,transparent_71%)] opacity-80" />
              <div className="absolute left-5 top-5 rounded-xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-xl">
                <span className="text-[8px] font-semibold uppercase tracking-[.16em] text-cyan-200/60">Now experiencing</span>
                <strong className="mt-1 block text-lg">Tokyo</strong>
                <span className="text-xs text-slate-400">Live weather · local time</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div><span className="text-[8px] uppercase tracking-[.15em] text-slate-500">Window</span><strong className="mt-1 block text-sm">Café</strong></div>
                  <Headphones size={17} className="text-cyan-300" />
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {['Rain', 'Thunder', 'City', 'Music'].map((item) => <span key={item} className="rounded-full border border-white/[.07] px-2 py-1 text-[8px] text-slate-400">{item}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-cyan-300">Experience design</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-.04em] sm:text-5xl">Weather data turned into atmosphere.</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            Pluvia is intentionally more than a forecast page. Visitors choose a city, enter a full-screen rain scene, switch city views and foreground environments, and mix rain, thunder, city ambience and music. The current build also supports installation as a PWA and a separate Rain Room.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              [CloudRain, 'Live weather atmosphere', 'Weather, local time and rain intensity drive the scene rather than sitting in a conventional forecast card.'],
              [MapPin, 'Global city travel', 'Tokyo, London, Mumbai, Seoul, New York, Kyoto and other cities use multiple photographic views and local identity.'],
              [Wind, 'Living glass', 'Canvas rain, glass droplets, foreground layers and environment choices make the interface feel like watching weather through a real window.'],
              [Music2, 'City soundscapes', 'City-specific music previews and ambient cues sit alongside independent rain, thunder, city and music levels.'],
              [MonitorSmartphone, 'Installable experience', 'A web manifest, service worker and responsive layouts let Pluvia behave like a lightweight app.'],
              [Sparkles, 'Personal Rain Room', 'A separate Rain Room gives the experience a personal space beyond simply choosing the next city.']
            ].map(([Icon, title, body], index) => {
              const FeatureIcon = Icon as React.ElementType;
              return (
                <motion.article key={String(title)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className="rounded-[1.35rem] border border-white/[.07] bg-white/[.025] p-5">
                  <FeatureIcon size={20} className="text-cyan-300" />
                  <h3 className="mt-5 text-lg font-semibold">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{String(body)}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/[.07] bg-white/[.02] p-6 sm:p-8">
          <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-slate-500">Cities in the current experience</span>
          <div className="mt-5 flex flex-wrap gap-2">
            {cities.map((city) => <span key={city} className="rounded-full border border-cyan-300/10 bg-cyan-300/[.035] px-3 py-2 text-xs text-cyan-100/70">{city}</span>)}
            <span className="rounded-full border border-white/[.07] px-3 py-2 text-xs text-slate-500">+ more</span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PluviaCaseStudy;
