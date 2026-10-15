import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Command, Menu, Search, SlidersHorizontal, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
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
    { name: 'Story', path: '/about' },
    { name: 'Seasons', path: '/experience' },
    { name: 'Originals', path: '/projects' },
    { name: 'Lab', path: '/lab' },
    { name: 'Genres', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={scrolled ? 'runtime-nav runtime-nav-scrolled' : 'runtime-nav'}
    >
      <Link to="/" className="runtime-nav-brand">
        <span>K</span>
        <div>
          <strong>KARTIK</strong>
          <small>PORTFOLIO</small>
        </div>
      </Link>

      <div className="runtime-nav-links">
        {navItems.map((item) => {
          const active = item.path === '/projects'
            ? location.pathname.startsWith('/projects')
            : location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} className={active ? 'runtime-nav-link runtime-nav-link-active' : 'runtime-nav-link'}>
              {item.name}
              {active && <motion.span layoutId="runtime-nav-active" />}
            </Link>
          );
        })}
      </div>

      <div className="runtime-nav-actions">
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event('portfolio:choose-view'))}
          className="runtime-nav-view"
          aria-label="Choose portfolio view"
        >
          <SlidersHorizontal size={14} />
          <span>View</span>
        </button>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event('portfolio:open-command-palette'))}
          className="runtime-nav-search"
          aria-label="Open command palette"
        >
          <Search size={15} />
          <span className="runtime-nav-key"><Command size={9} />K</span>
        </button>
        <button
          type="button"
          className="runtime-nav-menu"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="runtime-mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
          >
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>{item.name}</Link>
            ))}
            <button type="button" onClick={() => window.dispatchEvent(new Event('portfolio:choose-view'))}>
              Change viewer mode
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
