import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Code2,
  ExternalLink,
  Send,
  Sparkles,
  X
} from 'lucide-react';

type Action = {
  label: string;
  path?: string;
  href?: string;
};

type AssistantReply = {
  text: string;
  source: string;
  action?: Action;
};

type Message = {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  source?: string;
  action?: Action;
};

const OPEN_EVENT = 'portfolio:open-recruiter-assistant';

const suggestions = [
  'What AWS experience does Kartik have?',
  'What did he build at Capital One?',
  'Which backend technologies does he use?',
  'Tell me about his AI projects.'
];

const responseBank: Array<{
  keywords: string[];
  reply: AssistantReply;
}> = [
  {
    keywords: ['aws', 'lambda', 'cloudformation', 'cloud', 'cicd', 'ci/cd', 'deploy', 'deployment'],
    reply: {
      text:
        'Kartik works with AWS in production-oriented backend delivery, including Lambda, CloudFormation and CI/CD workflows. His Cognizant experience includes improving deployment speed by about 25%, plus hands-on work around service delivery, validation and production support.',
      source: 'Experience · Cloud delivery',
      action: { label: 'Open Experience', path: '/experience' }
    }
  },
  {
    keywords: ['capital one', 'capitalone', 'debit', 'banking', 'servicing', 'multi lender', 'multi-lender'],
    reply: {
      text:
        'At Cognizant, Kartik has worked across Capital One debit-card, servicing and multi-lender systems. His work spans backend API development, architecture decisions, automated testing, deployment, production validation, monitoring and incident support using Java/Spring Boot, Node.js/TypeScript, GraphQL and AWS.',
      source: 'Experience · Cognizant / Capital One',
      action: { label: 'See Cognizant chapter', path: '/experience' }
    }
  },
  {
    keywords: ['java', 'spring', 'spring boot', 'backend', 'node', 'typescript', 'graphql', 'stack', 'technologies'],
    reply: {
      text:
        'His core backend stack includes Java, Spring Boot, Node.js, NestJS, TypeScript, REST and GraphQL. He also works with AWS, PostgreSQL, Cassandra, Kafka, automated testing tools and observability platforms such as New Relic.',
      source: 'Skills · Backend stack',
      action: { label: 'Open Skills', path: '/skills' }
    }
  },
  {
    keywords: ['performance', 'latency', '72', 'optimization', 'fast', 'response time'],
    reply: {
      text:
        'One of the strongest measurable outcomes in his experience is a 50% reduction in core API latency, reaching roughly 72 ms average response time. The Engineering Lab includes a representative interactive demo of that performance story.',
      source: 'Engineering Lab · Performance',
      action: { label: 'Run the performance demo', path: '/lab' }
    }
  },
  {
    keywords: ['security', 'vulnerability', 'vulnerabilities', 'vulnhunter', 'claude', 'claude code'],
    reply: {
      text:
        'Kartik built a Claude Code skill called VulnHunter-Fix to support vulnerability remediation. The portfolio highlights 100+ vulnerabilities remediated and an estimated 400+ hours of manual effort saved through the workflow.',
      source: 'Engineering Lab · Security',
      action: { label: 'Run VulnHunter demo', path: '/lab' }
    }
  },
  {
    keywords: ['observability', 'monitoring', 'new relic', 'incident', 'logging', 'production'],
    reply: {
      text:
        'His production engineering work includes New Relic, structured logging, error tracking and incident support. The experience summary highlights about 35% faster incident detection after improving observability and monitoring workflows.',
      source: 'Engineering Lab · Observability',
      action: { label: 'Simulate an incident', path: '/lab' }
    }
  },
  {
    keywords: ['ai job hunter', 'job hunter', 'ats', 'resume project', 'supabase'],
    reply: {
      text:
        'AI Job Hunter is a full case study built around resume ingestion, ATS scoring, optimization, job tracking and PDF export. Its architecture is local-first by default, with optional Groq or OpenAI providers and Supabase for auth, Postgres and storage.',
      source: 'Project case study · AI Job Hunter',
      action: { label: 'Open case study', path: '/projects/ai-job-hunter' }
    }
  },
  {
    keywords: ['grocery', 'angular', 'commerce', 'shopping', 'spring security', 'jwt'],
    reply: {
      text:
        'The Grocery Ordering project is an Angular 17 + Spring Boot 3 application covering catalog search, cart state, JWT authentication, checkout and order tracking. The backend follows controller, service, repository and JPA layers.',
      source: 'Project case study · Grocery Ordering',
      action: { label: 'Open case study', path: '/projects/grocery-ordering' }
    }
  },
  {
    keywords: ['image generator', 'dall-e', 'dalle', 'image project', 'generative ai'],
    reply: {
      text:
        'The AI Image Generator is a focused Node.js + Express project. A browser submits a prompt and image size, an Express route delegates to an OpenAI controller, and the generated image URL is returned to the UI.',
      source: 'Project case study · AI Image Generator',
      action: { label: 'Open case study', path: '/projects/ai-image-generator' }
    }
  },
  {
    keywords: ['ai', 'projects', 'project'],
    reply: {
      text:
        'His portfolio includes AI Job Hunter, a full-stack ATS and resume-intelligence platform, plus a Node.js image generator using OpenAI’s image API. The Projects section also includes a full-stack Angular + Spring Boot grocery system.',
      source: 'Projects · Selected systems',
      action: { label: 'Explore Projects', path: '/projects' }
    }
  },
  {
    keywords: ['education', 'degree', 'university', 'uta', 'texas wesleyan'],
    reply: {
      text:
        'His portfolio lists an M.S. in Computer Science from UT Arlington and an Applied MBA in Data Analytics at Texas Wesleyan University, along with certifications spanning generative AI, data engineering, SAP and data analytics.',
      source: 'About · Education & certifications',
      action: { label: 'Open About', path: '/about' }
    }
  },
  {
    keywords: ['contact', 'email', 'linkedin', 'github', 'reach', 'hire'],
    reply: {
      text:
        'You can contact Kartik at kartikkataria0697@gmail.com, or use the LinkedIn and GitHub links available throughout the portfolio.',
      source: 'Contact',
      action: { label: 'Contact Kartik', path: '/contact' }
    }
  },
  {
    keywords: ['resume', 'cv'],
    reply: {
      text:
        'The latest resume is available directly from the portfolio. It summarizes his backend engineering experience, cloud delivery, performance improvements, AI-assisted developer tooling and project work.',
      source: 'Resume',
      action: { label: 'Open Resume', href: '/Kartik_Kataria_Resume.pdf' }
    }
  },
  {
    keywords: ['experience', 'years', 'background'],
    reply: {
      text:
        'Kartik is a backend software engineer with 5+ years of experience building distributed, cloud-native services and APIs across banking, payments and retail. His portfolio experience spans Cognizant, UT Arlington and Perpule.',
      source: 'Experience overview',
      action: { label: 'Open Experience', path: '/experience' }
    }
  }
];

const fallbackReply: AssistantReply = {
  text:
    'I can answer questions about Kartik’s backend stack, AWS work, Capital One experience, performance results, security tooling, observability, education and portfolio projects. Try asking about one of those areas.',
  source: 'Portfolio knowledge',
  action: { label: 'Explore Experience', path: '/experience' }
};

const RecruiterAssistant: React.FC = () => {
  const navigate = useNavigate();
  const endRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      text:
        'Hi — I’m the portfolio assistant. Ask me about Kartik’s backend experience, cloud work, measurable impact, or projects.',
      source: 'Portfolio-grounded · local mode'
    }
  ]);

  useEffect(() => {
    const openAssistant = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, openAssistant);
    return () => window.removeEventListener(OPEN_EVENT, openAssistant);
  }, []);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), 40);
    return () => window.clearTimeout(timer);
  }, [messages, typing, open]);

  const answerQuestion = useMemo(
    () => (question: string): AssistantReply => {
      const normalized = question.toLowerCase();

      let bestScore = 0;
      let bestReply = fallbackReply;

      responseBank.forEach((entry) => {
        const score = entry.keywords.reduce(
          (total, keyword) => total + (normalized.includes(keyword) ? Math.max(1, keyword.split(' ').length) : 0),
          0
        );

        if (score > bestScore) {
          bestScore = score;
          bestReply = entry.reply;
        }
      });

      return bestReply;
    },
    []
  );

  const submit = (rawQuestion?: string) => {
    const question = (rawQuestion ?? input).trim();
    if (!question || typing) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      text: question
    };

    setMessages((current) => [...current, userMessage]);
    setInput('');
    setTyping(true);

    const reply = answerQuestion(question);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: reply.text,
          source: reply.source,
          action: reply.action
        }
      ]);
      setTyping(false);
    }, 650);
  };

  const runAction = (action: Action) => {
    if (action.path) {
      setOpen(false);
      navigate(action.path);
      return;
    }

    if (action.href) {
      window.open(action.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ y: -4, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="fixed bottom-5 right-5 z-[88] flex items-center gap-3 rounded-2xl border border-cyan-300/12 bg-[#07101a]/88 px-4 py-3 text-left shadow-[0_20px_65px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:bottom-6 sm:right-6"
        aria-label="Ask Kartik AI"
      >
        <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/12 bg-cyan-300/[0.07] text-cyan-300">
          <Bot size={17} />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#07101a] bg-emerald-300" />
        </span>
        <span className="hidden sm:block">
          <span className="block text-xs font-semibold text-white">Ask Kartik AI</span>
          <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.12em] text-slate-600">Portfolio assistant</span>
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[125] flex items-end justify-end bg-[#02050a]/45 p-3 backdrop-blur-md sm:p-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <motion.section
              initial={{ opacity: 0, y: 30, scale: 0.96, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 20, scale: 0.97, filter: 'blur(6px)' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Ask Kartik AI"
              className="flex h-[min(720px,88vh)] w-full max-w-[430px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#07101a]/97 shadow-[0_45px_150px_rgba(0,0,0,0.65)]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/12 bg-cyan-300/[0.07] text-cyan-300">
                    <Bot size={18} />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-white">Ask Kartik AI</p>
                      <span className="rounded-full border border-emerald-300/10 bg-emerald-300/[0.04] px-2 py-0.5 text-[7px] font-semibold uppercase tracking-[0.13em] text-emerald-300">local mode</span>
                    </div>
                    <p className="mt-0.5 text-[9px] text-slate-600">Answers from this portfolio only</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-500 transition hover:text-white"
                  aria-label="Close assistant"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="mb-4 flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => submit(suggestion)}
                      disabled={typing}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2 text-left text-[10px] leading-4 text-slate-500 transition hover:border-cyan-300/12 hover:bg-cyan-300/[0.035] hover:text-slate-300 disabled:opacity-50"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={'flex ' + (message.role === 'user' ? 'justify-end' : 'justify-start')}
                    >
                      <div
                        className={
                          'max-w-[88%] rounded-2xl border px-4 py-3 ' +
                          (message.role === 'user'
                            ? 'border-cyan-300/10 bg-cyan-300/[0.06] text-slate-200'
                            : 'border-white/[0.06] bg-white/[0.025] text-slate-400')
                        }
                      >
                        <p className="text-xs leading-6">{message.text}</p>

                        {message.source && (
                          <div className="mt-3 flex items-center gap-2 border-t border-white/[0.05] pt-2.5">
                            <Sparkles size={10} className="text-cyan-300" />
                            <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-slate-700">{message.source}</span>
                          </div>
                        )}

                        {message.action && (
                          <button
                            type="button"
                            onClick={() => runAction(message.action!)}
                            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-[10px] font-semibold text-slate-300 transition hover:border-cyan-300/12 hover:text-white"
                          >
                            {message.action.label}
                            {message.action.href ? <ExternalLink size={11} /> : <ArrowRight size={11} />}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}

                  {typing && (
                    <div className="flex justify-start">
                      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          {[0, 1, 2].map((dot) => (
                            <motion.span
                              key={dot}
                              animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
                              transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.14 }}
                              className="h-1.5 w-1.5 rounded-full bg-cyan-300"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={endRef} />
              </div>

              <div className="border-t border-white/[0.07] p-3">
                <div className="flex items-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-2">
                  <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') submit();
                    }}
                    placeholder="Ask about experience, AWS, Java, projects..."
                    className="min-w-0 flex-1 bg-transparent px-2 text-xs text-white outline-none placeholder:text-slate-700"
                    aria-label="Ask a question about Kartik"
                  />
                  <button
                    type="button"
                    onClick={() => submit()}
                    disabled={!input.trim() || typing}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35"
                    aria-label="Send question"
                  >
                    <Send size={14} />
                  </button>
                </div>

                <p className="mt-2 px-1 text-center text-[8px] leading-4 text-slate-700">
                  Static local assistant · no external AI request or exposed API key
                </p>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RecruiterAssistant;
