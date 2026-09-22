import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Command, Menu, Search, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className={'mx-auto max-w-6xl rounded-2xl border transition-all duration-500 ' + (scrolled ? 'border-white/10 bg-slate-950/72 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-2xl' : 'border-white/[0.06] bg-slate-950/28 backdrop-blur-xl')}>
        <div className="flex h-16 items-center justify-between px-4 sm:px-5">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-sm font-bold text-cyan-200 transition duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-400/[0.1]">KK</div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-tight text-white">Kartik Kataria</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Backend Software Engineer</p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = item.path === '/projects' ? location.pathname.startsWith('/projects') : location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} className={'relative rounded-xl px-3.5 py-2 text-sm font-medium transition-colors duration-300 ' + (active ? 'text-white' : 'text-slate-400 hover:text-slate-100')}>
                  {active && <motion.span layoutId="nav-active" className="absolute inset-0 -z-10 rounded-xl border border-white/8 bg-white/[0.06]" transition={{ type: 'spring', stiffness: 360, damping: 30 }} />}
                  {item.name}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('portfolio:open-command-palette'))}
              className="ml-2 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-semibold text-slate-400 transition hover:border-cyan-300/15 hover:bg-cyan-300/[0.04] hover:text-white"
              aria-label="Open command palette"
            >
              <Search size={14} />
              <span className="hidden xl:inline">Search</span>
              <span className="flex items-center gap-0.5 rounded-md border border-white/[0.07] bg-black/15 px-1.5 py-0.5 text-[9px] text-slate-600">
                <Command size={9} />
                K
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('portfolio:open-command-palette'))}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300"
              aria-label="Open command palette"
            >
              <Search size={18} />
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={isOpen}>
              {isOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden border-t border-white/[0.06] md:hidden">
              <div className="grid gap-1 p-3">
                {navItems.map((item, index) => (
                  <motion.div key={item.path} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.035 }}>
                    <Link to={item.path} className={'block rounded-xl px-4 py-3 text-sm font-medium ' + ((item.path === '/projects' ? location.pathname.startsWith('/projects') : location.pathname === item.path) ? 'bg-white/[0.07] text-white' : 'text-slate-400 hover:bg-white/[0.04] hover:text-white')}>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
