import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardPaste,
  ExternalLink,
  Send,
  Sparkles,
  Target,
  Trash2,
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

type MatchLevel = 'strong' | 'related' | 'gap';

type RequirementMatch = {
  label: string;
  level: MatchLevel;
  evidence: string;
  patterns: string[];
  action?: Action;
};

const OPEN_EVENT = 'portfolio:open-recruiter-assistant';

const defaultSuggestions = [
  'What AWS experience does Kartik have?',
  'What did he build at Capital One?',
  'Which backend technologies does he use?',
  'Tell me about his AI projects.'
];

const recruiterSuggestions = [
  'Why is Kartik relevant for this role?',
  'What are his strongest matches?',
  'What requirements are not evidenced?',
  'Which project should I review first?'
];

const supportedRequirements: RequirementMatch[] = [
  {
    label: 'Java',
    level: 'strong',
    evidence: 'Production backend development with Java and Spring Boot across banking systems.',
    patterns: ['java'],
    action: { label: 'Open Experience', path: '/experience' }
  },
  {
    label: 'Spring Boot',
    level: 'strong',
    evidence: 'Hands-on Spring Boot backend development and API delivery.',
    patterns: ['spring boot', 'spring framework', 'spring'],
    action: { label: 'Open Experience', path: '/experience' }
  },
  {
    label: 'Node.js / TypeScript',
    level: 'strong',
    evidence: 'Backend services built with Node.js, NestJS and TypeScript.',
    patterns: ['node.js', 'nodejs', 'node js', 'typescript', 'nestjs', 'nest.js'],
    action: { label: 'Open Skills', path: '/skills' }
  },
  {
    label: 'REST / GraphQL APIs',
    level: 'strong',
    evidence: 'Designed and delivered REST and GraphQL APIs for distributed service workflows.',
    patterns: ['rest api', 'restful', 'graphql', 'api development', 'apis'],
    action: { label: 'Open Experience', path: '/experience' }
  },
  {
    label: 'AWS',
    level: 'strong',
    evidence: 'Production-oriented AWS work including Lambda, CloudFormation and service delivery workflows.',
    patterns: ['aws', 'amazon web services', 'lambda', 'cloudformation', 'api gateway'],
    action: { label: 'Open Experience', path: '/experience' }
  },
  {
    label: 'Microservices / distributed systems',
    level: 'strong',
    evidence: '5+ years building cloud-native and distributed backend services.',
    patterns: ['microservices', 'microservice', 'distributed systems', 'distributed services', 'cloud-native'],
    action: { label: 'Open Experience', path: '/experience' }
  },
  {
    label: 'CI/CD',
    level: 'strong',
    evidence: 'Automated delivery using Jenkins, GitHub Actions and cloud deployment workflows; portfolio highlights ~25% faster deployments.',
    patterns: ['ci/cd', 'cicd', 'continuous integration', 'continuous delivery', 'jenkins', 'github actions'],
    action: { label: 'Run CI/CD demo', path: '/lab' }
  },
  {
    label: 'Automated testing',
    level: 'strong',
    evidence: 'Testing experience includes JUnit, REST Assured, Karate BDD, JMeter and k6.',
    patterns: ['junit', 'rest assured', 'karate', 'jmeter', 'k6', 'automated testing', 'test automation', 'performance testing'],
    action: { label: 'Open Skills', path: '/skills' }
  },
  {
    label: 'Observability / production support',
    level: 'strong',
    evidence: 'Production monitoring, logging and incident work with New Relic and related tooling; portfolio highlights ~35% faster incident detection.',
    patterns: ['new relic', 'observability', 'monitoring', 'production support', 'incident', 'logging', 'splunk'],
    action: { label: 'Run observability demo', path: '/lab' }
  },
  {
    label: 'Security remediation',
    level: 'strong',
    evidence: 'VulnHunter-Fix workflow supported remediation of 100+ vulnerabilities with substantial estimated manual-effort savings.',
    patterns: ['security', 'vulnerability', 'vulnerabilities', 'remediation', 'secure coding'],
    action: { label: 'Run security demo', path: '/lab' }
  },
  {
    label: 'PostgreSQL / Cassandra / Kafka',
    level: 'strong',
    evidence: 'Portfolio skills include PostgreSQL, Cassandra and Kafka across backend and data workflows.',
    patterns: ['postgresql', 'postgres', 'cassandra', 'kafka'],
    action: { label: 'Open Skills', path: '/skills' }
  },
  {
    label: 'Docker / Kubernetes',
    level: 'strong',
    evidence: 'Docker and Kubernetes are included in the documented cloud and DevOps toolset.',
    patterns: ['docker', 'kubernetes', 'k8s', 'containers', 'containerization'],
    action: { label: 'Open Skills', path: '/skills' }
  },
  {
    label: 'Banking / payments',
    level: 'strong',
    evidence: 'Production engineering experience spans Capital One banking systems and Verizon real-time payments.',
    patterns: ['banking', 'payments', 'fintech', 'financial services', 'cards', 'debit card'],
    action: { label: 'Open Experience', path: '/experience' }
  },
  {
    label: 'Performance engineering',
    level: 'strong',
    evidence: 'Portfolio highlights a 50% latency reduction with core API response time reaching roughly 72 ms.',
    patterns: ['performance', 'latency', 'optimization', 'response time', 'throughput'],
    action: { label: 'Run performance demo', path: '/lab' }
  },
  {
    label: 'AI developer tooling',
    level: 'strong',
    evidence: 'Documented use of Claude Code/Skills, GitHub Copilot, OpenAI APIs, prompt engineering and agentic workflows.',
    patterns: ['claude', 'copilot', 'openai', 'generative ai', 'genai', 'prompt engineering', 'agentic ai', 'llm'],
    action: { label: 'Open Skills', path: '/skills' }
  },
  {
    label: 'React / Next.js',
    level: 'related',
    evidence: 'React and Next.js are demonstrated in portfolio projects, including AI Job Hunter.',
    patterns: ['react', 'next.js', 'nextjs', 'next js'],
    action: { label: 'Open AI Job Hunter', path: '/projects/ai-job-hunter' }
  },
  {
    label: 'Angular',
    level: 'related',
    evidence: 'Angular 17 is demonstrated in the Grocery Ordering project.',
    patterns: ['angular'],
    action: { label: 'Open Grocery project', path: '/projects/grocery-ordering' }
  }
];

const gapRequirements: RequirementMatch[] = [
  {
    label: 'Microsoft Azure',
    level: 'gap',
    evidence: 'The current portfolio does not document hands-on Azure experience.',
    patterns: ['azure']
  },
  {
    label: 'Google Cloud Platform',
    level: 'gap',
    evidence: 'The current portfolio does not document hands-on GCP experience.',
    patterns: ['gcp', 'google cloud']
  },
  {
    label: '.NET / C#',
    level: 'gap',
    evidence: 'The current portfolio does not document .NET or C# experience.',
    patterns: ['.net', 'dotnet', 'c#', 'c sharp']
  },
  {
    label: 'Go',
    level: 'gap',
    evidence: 'The current portfolio does not document Go production experience.',
    patterns: ['golang', ' go ']
  },
  {
    label: 'Rust',
    level: 'gap',
    evidence: 'The current portfolio does not document Rust experience.',
    patterns: ['rust']
  },
  {
    label: 'Ruby',
    level: 'gap',
    evidence: 'The current portfolio does not document Ruby experience.',
    patterns: ['ruby', 'rails', 'ruby on rails']
  },
  {
    label: 'PHP',
    level: 'gap',
    evidence: 'The current portfolio does not document PHP experience.',
    patterns: ['php', 'laravel']
  }
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

const containsPattern = (text: string, pattern: string) => {
  if (pattern === ' go ') return (' ' + text + ' ').includes(pattern);
  return text.includes(pattern);
};

const analyzeJobDescription = (raw: string): RequirementMatch[] => {
  const text = raw.toLowerCase();
  const matches: RequirementMatch[] = [];

  [...supportedRequirements, ...gapRequirements].forEach((requirement) => {
    if (requirement.patterns.some((pattern) => containsPattern(text, pattern))) {
      matches.push(requirement);
    }
  });

  const yearsMatch = text.match(/(\d+)\s*\+?\s*(?:years|yrs)/);
  if (yearsMatch) {
    const years = Number(yearsMatch[1]);
    matches.unshift({
      label: years <= 5 ? years + '+ years experience' : years + '+ years experience',
      level: years <= 5 ? 'strong' : 'related',
      evidence:
        years <= 5
          ? 'The portfolio documents 5+ years of backend software engineering experience.'
          : 'The portfolio documents 5+ years; this JD appears to request ' + years + '+ years.',
      patterns: [yearsMatch[0]],
      action: { label: 'Open Experience', path: '/experience' }
    });
  }

  return matches.filter(
    (match, index, array) => array.findIndex((candidate) => candidate.label === match.label) === index
  );
};

const RecruiterAssistant: React.FC = () => {
  const navigate = useNavigate();
  const endRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [jdText, setJdText] = useState('');
  const [jdMatches, setJdMatches] = useState<RequirementMatch[]>([]);
  const [jdActive, setJdActive] = useState(false);
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
  }, [messages, typing, open, jdActive]);

  const strongMatches = useMemo(() => jdMatches.filter((match) => match.level === 'strong'), [jdMatches]);
  const relatedMatches = useMemo(() => jdMatches.filter((match) => match.level === 'related'), [jdMatches]);
  const gapMatches = useMemo(() => jdMatches.filter((match) => match.level === 'gap'), [jdMatches]);

  const suggestions = jdActive ? recruiterSuggestions : defaultSuggestions;

  const buildFitReply = (): AssistantReply => {
    if (!jdActive || jdMatches.length === 0) {
      return {
        text:
          'Paste a job description in Recruiter Mode first. I’ll map its requirements to documented portfolio evidence and keep unsupported requirements clearly separated.',
        source: 'Recruiter Mode',
        action: { label: 'Open Experience', path: '/experience' }
      };
    }

    const strongest = strongMatches.slice(0, 5).map((match) => match.label);
    const related = relatedMatches.slice(0, 3).map((match) => match.label);
    const gaps = gapMatches.slice(0, 3).map((match) => match.label);

    let text =
      'For this JD, the strongest documented overlap is ' +
      (strongest.length ? strongest.join(', ') : 'in the broader backend engineering background') +
      '.';

    if (related.length) {
      text += ' Related project-level evidence includes ' + related.join(', ') + '.';
    }

    if (gaps.length) {
      text += ' I would not claim direct experience for ' + gaps.join(', ') + ' based on the current portfolio.';
    }

    text +=
      ' The most relevant supporting evidence is in the Cognizant experience, Engineering Lab and project case studies.';

    return {
      text,
      source: 'JD-tailored · Portfolio evidence',
      action: { label: 'Open Experience', path: '/experience' }
    };
  };

  const buildGapReply = (): AssistantReply => {
    if (!jdActive) return buildFitReply();

    const gaps = [...gapMatches];
    const higherYears = relatedMatches.find((match) => match.label.includes('years experience'));

    if (!gaps.length && !higherYears) {
      return {
        text:
          'Among the requirements recognized by this local analyzer, I did not find a clear unsupported technology requirement. That does not mean every sentence in the JD is proven; it means the recognized requirements map to portfolio evidence.',
        source: 'JD-tailored · Gap check',
        action: { label: 'Open Skills', path: '/skills' }
      };
    }

    const statements = gaps.map((gap) => gap.label);
    if (higherYears) statements.unshift(higherYears.label);

    return {
      text:
        'The areas I would avoid overstating are: ' +
        statements.join(', ') +
        '. The assistant will keep these separate from strong matches rather than manufacturing experience to satisfy the JD.',
      source: 'JD-tailored · Gap check',
      action: { label: 'Open Skills', path: '/skills' }
    };
  };

  const buildProjectReply = (): AssistantReply => {
    const labels = jdMatches.map((match) => match.label.toLowerCase());

    if (labels.some((label) => label.includes('java') || label.includes('spring'))) {
      return {
        text:
          'For this JD, I would review Grocery Ordering first because it visibly demonstrates Java 17, Spring Boot 3, Spring Security, JWT and layered backend design. For production-scale evidence, pair that with the Cognizant experience.',
        source: 'JD-tailored · Project evidence',
        action: { label: 'Open Grocery case study', path: '/projects/grocery-ordering' }
      };
    }

    if (labels.some((label) => label.includes('ai') || label.includes('react') || label.includes('next'))) {
      return {
        text:
          'For this JD, AI Job Hunter is the strongest project to review first. It demonstrates a production-style Next.js SaaS flow, resume parsing, ATS analysis, provider routing and Supabase-backed application architecture.',
        source: 'JD-tailored · Project evidence',
        action: { label: 'Open AI Job Hunter', path: '/projects/ai-job-hunter' }
      };
    }

    return {
      text:
        'For a backend-focused JD, start with AI Job Hunter for system design and product depth, then review Grocery Ordering for a conventional Angular + Spring Boot layered application.',
      source: 'JD-tailored · Project evidence',
      action: { label: 'Explore Projects', path: '/projects' }
    };
  };

  const answerQuestion = useMemo(
    () => (question: string): AssistantReply => {
      const normalized = question.toLowerCase();

      if (jdActive) {
        if (
          ['why', 'fit', 'match', 'relevant', 'suitable', 'qualified', 'strongest'].some((word) =>
            normalized.includes(word)
          )
        ) {
          return buildFitReply();
        }

        if (
          ['gap', 'missing', 'not evidenced', 'not match', 'lack', 'unsupported'].some((phrase) =>
            normalized.includes(phrase)
          )
        ) {
          return buildGapReply();
        }

        if (
          normalized.includes('which project') ||
          normalized.includes('project should') ||
          normalized.includes('review first')
        ) {
          return buildProjectReply();
        }
      }

      let bestScore = 0;
      let bestReply = fallbackReply;

      responseBank.forEach((entry) => {
        const score = entry.keywords.reduce(
          (total, keyword) =>
            total + (normalized.includes(keyword) ? Math.max(1, keyword.split(' ').length) : 0),
          0
        );

        if (score > bestScore) {
          bestScore = score;
          bestReply = entry.reply;
        }
      });

      if (!jdActive || bestScore === 0) return bestReply;

      const relevantRequirement = strongMatches.find((requirement) =>
        requirement.patterns.some((pattern) => containsPattern(normalized, pattern))
      );

      if (!relevantRequirement) {
        const top = strongMatches.slice(0, 3).map((match) => match.label);
        return {
          ...bestReply,
          text:
            bestReply.text +
            (top.length
              ? ' For the active JD, the strongest overall overlaps remain ' + top.join(', ') + '.'
              : ''),
          source: 'JD-tailored · ' + bestReply.source
        };
      }

      return {
        ...bestReply,
        text:
          bestReply.text +
          ' For this JD, that directly supports the requirement around ' +
          relevantRequirement.label +
          '.',
        source: 'JD-tailored · ' + bestReply.source
      };
    },
    [jdActive, strongMatches, relatedMatches, gapMatches]
  );

  const submit = (rawQuestion?: string) => {
    const question = (rawQuestion ?? input).trim();
    if (!question || typing) return;

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: 'user',
        text: question
      }
    ]);
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

  const analyzeJD = () => {
    const text = jdText.trim();
    if (!text) return;

    const matches = analyzeJobDescription(text);
    setJdMatches(matches);
    setJdActive(true);

    const strong = matches.filter((match) => match.level === 'strong').length;
    const related = matches.filter((match) => match.level === 'related').length;
    const gaps = matches.filter((match) => match.level === 'gap').length;

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: 'assistant',
        text:
          'JD analyzed. I found ' +
          strong +
          ' strong evidence areas, ' +
          related +
          ' related areas and ' +
          gaps +
          ' explicit gaps among the requirements this local analyzer recognizes. Follow-up answers will now prioritize this role.',
        source: 'Recruiter Mode · JD active',
        action: { label: 'View Experience', path: '/experience' }
      }
    ]);
  };

  const clearJD = () => {
    setJdText('');
    setJdMatches([]);
    setJdActive(false);
    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: 'assistant',
        text: 'Job-description context cleared. Answers are back to general portfolio mode.',
        source: 'Recruiter Mode'
      }
    ]);
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
          <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.12em] text-slate-600">
            Recruiter-ready assistant
          </span>
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
              className={
                'flex h-[min(760px,90vh)] w-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#07101a]/97 shadow-[0_45px_150px_rgba(0,0,0,0.65)] transition-[max-width] duration-300 ' +
                (recruiterMode ? 'max-w-[560px]' : 'max-w-[430px]')
              }
            >
              <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/12 bg-cyan-300/[0.07] text-cyan-300">
                    <Bot size={18} />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-white">Ask Kartik AI</p>
                      <span
                        className={
                          'rounded-full border px-2 py-0.5 text-[7px] font-semibold uppercase tracking-[0.13em] ' +
                          (jdActive
                            ? 'border-violet-300/12 bg-violet-300/[0.05] text-violet-300'
                            : 'border-emerald-300/10 bg-emerald-300/[0.04] text-emerald-300')
                        }
                      >
                        {jdActive ? 'JD active' : 'local mode'}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[9px] text-slate-600">
                      {jdActive ? 'Answers tailored to the active job description' : 'Answers from this portfolio only'}
                    </p>
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

              <div className="border-b border-white/[0.06] px-4 py-3">
                <button
                  type="button"
                  onClick={() => setRecruiterMode((value) => !value)}
                  className={
                    'flex w-full items-center justify-between rounded-xl border px-3.5 py-3 text-left transition ' +
                    (recruiterMode
                      ? 'border-violet-300/14 bg-violet-300/[0.055]'
                      : 'border-white/[0.06] bg-white/[0.025] hover:border-violet-300/10')
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-300/10 bg-violet-300/[0.05] text-violet-300">
                      <BriefcaseBusiness size={14} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-200">Recruiter Mode</p>
                      <p className="mt-0.5 text-[9px] text-slate-600">Paste a JD and tailor the conversation</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={13}
                    className={'text-slate-600 transition-transform ' + (recruiterMode ? 'rotate-90' : '')}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {recruiterMode && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -6 }}
                      className="overflow-hidden"
                    >
                      {!jdActive ? (
                        <div className="pt-3">
                          <div className="rounded-2xl border border-white/[0.06] bg-black/10 p-3">
                            <div className="mb-2 flex items-center gap-2">
                              <ClipboardPaste size={12} className="text-violet-300" />
                              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                                Paste job description
                              </p>
                            </div>
                            <textarea
                              value={jdText}
                              onChange={(event) => setJdText(event.target.value)}
                              placeholder="Paste the role responsibilities and requirements here..."
                              className="h-28 w-full resize-none bg-transparent text-[11px] leading-5 text-slate-300 outline-none placeholder:text-slate-700"
                            />
                          </div>

                          <button
                            type="button"
                            onClick={analyzeJD}
                            disabled={!jdText.trim()}
                            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[11px] font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35"
                          >
                            <Target size={13} />
                            Analyze JD
                          </button>
                        </div>
                      ) : (
                        <div className="pt-3">
                          <div className="rounded-2xl border border-violet-300/10 bg-violet-300/[0.035] p-3">
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                                  JD match context
                                </p>
                                <p className="mt-1 text-[10px] text-slate-500">
                                  {strongMatches.length} strong · {relatedMatches.length} related · {gapMatches.length} gaps
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={clearJD}
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] text-slate-600 transition hover:text-rose-300"
                                aria-label="Clear job description"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>

                            <div className="mt-3 flex max-h-24 flex-wrap gap-1.5 overflow-y-auto">
                              {jdMatches.slice(0, 14).map((match) => (
                                <span
                                  key={match.label}
                                  title={match.evidence}
                                  className={
                                    'inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[8px] font-semibold ' +
                                    (match.level === 'strong'
                                      ? 'border-emerald-300/12 bg-emerald-300/[0.045] text-emerald-300'
                                      : match.level === 'related'
                                        ? 'border-amber-300/12 bg-amber-300/[0.045] text-amber-300'
                                        : 'border-rose-300/12 bg-rose-300/[0.045] text-rose-300')
                                  }
                                >
                                  {match.level === 'gap' ? <AlertTriangle size={8} /> : <CheckCircle2 size={8} />}
                                  {match.label}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
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
                          'max-w-[90%] rounded-2xl border px-4 py-3 ' +
                          (message.role === 'user'
                            ? 'border-cyan-300/10 bg-cyan-300/[0.06] text-slate-200'
                            : 'border-white/[0.06] bg-white/[0.025] text-slate-400')
                        }
                      >
                        <p className="text-xs leading-6">{message.text}</p>

                        {message.source && (
                          <div className="mt-3 flex items-center gap-2 border-t border-white/[0.05] pt-2.5">
                            <Sparkles size={10} className="text-cyan-300" />
                            <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-slate-700">
                              {message.source}
                            </span>
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
                    placeholder={
                      jdActive
                        ? 'Ask how Kartik matches this JD...'
                        : 'Ask about experience, AWS, Java, projects...'
                    }
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
                  Local recruiter mode · JD stays in this browser session · no external AI request
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
