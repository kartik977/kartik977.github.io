import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Command,
  Download,
  Github,
  Home,
  Layers3,
  FlaskConical,
  Linkedin,
  Mail,
  Search,
  Sparkles,
  UserRound,
  Wrench
} from 'lucide-react';

type CommandItem = {
  id: string;
  label: string;
  description: string;
  group: 'Navigate' | 'Projects' | 'Actions';
  icon: React.ElementType;
  keywords: string[];
  action: () => void;
};

const OPEN_EVENT = 'portfolio:open-command-palette';

const CommandPalette: React.FC = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = useMemo<CommandItem[]>(
    () => [
      {
        id: 'home',
        label: 'Home',
        description: 'Back to the engineering system',
        group: 'Navigate',
        icon: Home,
        keywords: ['home', 'start', 'architecture'],
        action: () => navigate('/')
      },
      {
        id: 'about',
        label: 'About Kartik',
        description: 'Background, education and certifications',
        group: 'Navigate',
        icon: UserRound,
        keywords: ['about', 'education', 'certifications', 'kartik'],
        action: () => navigate('/about')
      },
      {
        id: 'experience',
        label: 'Experience',
        description: 'Cognizant, UTA and Perpule',
        group: 'Navigate',
        icon: BriefcaseBusiness,
        keywords: ['experience', 'work', 'cognizant', 'capital one', 'verizon', 'perpule'],
        action: () => navigate('/experience')
      },
      {
        id: 'projects',
        label: 'Projects',
        description: 'Interactive project showcases',
        group: 'Navigate',
        icon: Layers3,
        keywords: ['projects', 'portfolio', 'work', 'case studies'],
        action: () => navigate('/projects')
      },
      {
        id: 'lab',
        label: 'Engineering Lab',
        description: 'Run performance, delivery, security and observability demos',
        group: 'Navigate',
        icon: FlaskConical,
        keywords: ['lab', 'performance', 'latency', 'cicd', 'security', 'observability', 'new relic', 'vulnerabilities'],
        action: () => navigate('/lab')
      },
      {
        id: 'skills',
        label: 'Skills',
        description: 'Backend, cloud, testing and AI tooling',
        group: 'Navigate',
        icon: Wrench,
        keywords: ['skills', 'java', 'spring', 'node', 'aws', 'testing'],
        action: () => navigate('/skills')
      },
      {
        id: 'contact',
        label: 'Contact',
        description: 'Email and professional links',
        group: 'Navigate',
        icon: Mail,
        keywords: ['contact', 'email', 'reach', 'hire'],
        action: () => navigate('/contact')
      },
      {
        id: 'job-hunter',
        label: 'AI Job Hunter',
        description: 'Local-first ATS intelligence case study',
        group: 'Projects',
        icon: Sparkles,
        keywords: ['ai job hunter', 'ats', 'resume', 'nextjs', 'supabase'],
        action: () => navigate('/projects/ai-job-hunter')
      },
      {
        id: 'grocery',
        label: 'Grocery Ordering System',
        description: 'Angular + Spring Boot commerce case study',
        group: 'Projects',
        icon: Layers3,
        keywords: ['grocery', 'angular', 'spring boot', 'commerce', 'jwt'],
        action: () => navigate('/projects/grocery-ordering')
      },
      {
        id: 'image-generator',
        label: 'AI Image Generator',
        description: 'Node.js + OpenAI image API case study',
        group: 'Projects',
        icon: Sparkles,
        keywords: ['image generator', 'dall-e', 'openai', 'express'],
        action: () => navigate('/projects/ai-image-generator')
      },
      {
        id: 'resume',
        label: 'Open Resume',
        description: 'View the latest PDF resume',
        group: 'Actions',
        icon: Download,
        keywords: ['resume', 'cv', 'download'],
        action: () => window.open('/Kartik_Kataria_Resume.pdf', '_blank', 'noopener,noreferrer')
      },
      {
        id: 'github',
        label: 'GitHub',
        description: 'github.com/kartik977',
        group: 'Actions',
        icon: Github,
        keywords: ['github', 'code', 'repositories'],
        action: () => window.open('https://github.com/kartik977', '_blank', 'noopener,noreferrer')
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        description: 'Professional profile',
        group: 'Actions',
        icon: Linkedin,
        keywords: ['linkedin', 'professional', 'profile'],
        action: () => window.open('https://www.linkedin.com/in/kartikkataria2023/', '_blank', 'noopener,noreferrer')
      },
      {
        id: 'email',
        label: 'Email Kartik',
        description: 'kartikkataria0697@gmail.com',
        group: 'Actions',
        icon: Mail,
        keywords: ['email', 'contact', 'message'],
        action: () => {
          window.location.href = 'mailto:kartikkataria0697@gmail.com';
        }
      }
    ],
    [navigate]
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return commands;

    return commands.filter((command) => {
      const haystack = [
        command.label,
        command.description,
        command.group,
        ...command.keywords
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(needle);
    });
  }, [commands, query]);

  useEffect(() => {
    const openPalette = () => setOpen(true);

    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }

      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener(OPEN_EVENT, openPalette);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener(OPEN_EVENT, openPalette);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    setQuery('');
    setSelectedIndex(0);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const runCommand = (command: CommandItem) => {
    setOpen(false);
    command.action();
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filtered.length) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelectedIndex((index) => (index + 1) % filtered.length);
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedIndex((index) => (index - 1 + filtered.length) % filtered.length);
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      runCommand(filtered[selectedIndex]);
    }
  };

  const groups: Array<CommandItem['group']> = ['Navigate', 'Projects', 'Actions'];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-start justify-center bg-[#02050a]/72 px-4 pt-[12vh] backdrop-blur-xl"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -14, scale: 0.98, filter: 'blur(6px)' }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="command-palette-shell w-full max-w-2xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#07101a]/96 shadow-[0_45px_150px_rgba(0,0,0,0.62)]"
          >
            <div className="flex items-center gap-3 border-b border-white/[0.07] px-5 py-4">
              <Search size={18} className="shrink-0 text-cyan-300" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search pages, projects, actions..."
                aria-label="Search commands"
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
              />
              <div className="hidden items-center gap-1.5 sm:flex">
                <kbd className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2 py-1 text-[9px] font-semibold text-slate-500">↑</kbd>
                <kbd className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2 py-1 text-[9px] font-semibold text-slate-500">↓</kbd>
                <kbd className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2 py-1 text-[9px] font-semibold text-slate-500">↵</kbd>
              </div>
            </div>

            <div className="max-h-[58vh] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="px-4 py-12 text-center">
                  <Command size={22} className="mx-auto text-slate-700" />
                  <p className="mt-3 text-sm font-medium text-slate-400">No matching command</p>
                  <p className="mt-1 text-xs text-slate-600">Try “AWS”, “resume”, or “AI”.</p>
                </div>
              ) : (
                groups.map((group) => {
                  const items = filtered.filter((command) => command.group === group);
                  if (!items.length) return null;

                  return (
                    <div key={group} className="mb-2 last:mb-0">
                      <p className="px-3 pb-1.5 pt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                        {group}
                      </p>

                      <div className="space-y-1">
                        {items.map((command) => {
                          const absoluteIndex = filtered.findIndex((item) => item.id === command.id);
                          const selected = absoluteIndex === selectedIndex;
                          const Icon = command.icon;

                          return (
                            <button
                              key={command.id}
                              type="button"
                              onMouseEnter={() => setSelectedIndex(absoluteIndex)}
                              onClick={() => runCommand(command)}
                              className={
                                'group flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition ' +
                                (selected
                                  ? 'border-cyan-300/12 bg-cyan-300/[0.055]'
                                  : 'border-transparent hover:bg-white/[0.025]')
                              }
                            >
                              <div
                                className={
                                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition ' +
                                  (selected
                                    ? 'border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300'
                                    : 'border-white/[0.07] bg-white/[0.025] text-slate-500')
                                }
                              >
                                <Icon size={16} />
                              </div>

                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-slate-200">{command.label}</p>
                                <p className="mt-0.5 truncate text-[11px] text-slate-600">{command.description}</p>
                              </div>

                              <ArrowRight
                                size={14}
                                className={
                                  'shrink-0 transition ' +
                                  (selected ? 'translate-x-0 text-cyan-300' : '-translate-x-1 text-slate-700')
                                }
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.07] px-5 py-3">
              <div className="flex items-center gap-2 text-[9px] font-medium text-slate-700">
                <Command size={12} />
                Quick navigation
              </div>
              <p className="text-[9px] text-slate-700">ESC to close</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
