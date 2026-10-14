import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Bot,
  Cloud,
  Code2,
  Database,
  Eye,
  ShieldCheck,
  TestTube2
} from 'lucide-react';

type Skill = {
  name: string;
  mono: string;
  evidence: string[];
  note?: string;
};

type Category = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  hue: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    id: 'backend',
    title: 'Backend Core',
    subtitle: 'APIs, services and distributed application logic',
    icon: Code2,
    hue: '#fb7185',
    skills: [
      { name: 'Java', mono: 'J', evidence: ['Capital One debit-card APIs', 'Spring Boot services', 'production backend delivery'], note: 'core' },
      { name: 'Spring Boot', mono: 'SB', evidence: ['banking APIs', 'service integrations', 'Grocery Ordering backend'], note: 'core' },
      { name: 'TypeScript', mono: 'TS', evidence: ['Node/NestJS services', 'Java-to-TypeScript modernization', 'AI Job Hunter'] },
      { name: 'Node.js', mono: 'N', evidence: ['backend services', 'API development', 'AI Image Generator'] },
      { name: 'REST APIs', mono: 'API', evidence: ['card servicing endpoints', 'payment integrations', 'project backends'] },
      { name: 'GraphQL', mono: 'GQL', evidence: ['service integration work', 'backend API delivery'] },
      { name: 'Microservices', mono: 'µS', evidence: ['distributed banking services', 'production integrations', 'service ownership'] }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Delivery',
    subtitle: 'Ship, automate and operate workloads on AWS',
    icon: Cloud,
    hue: '#38bdf8',
    skills: [
      { name: 'AWS Lambda', mono: 'λ', evidence: ['serverless service delivery', 'production workloads'], note: 'AWS' },
      { name: 'API Gateway', mono: 'GW', evidence: ['API exposure', 'AWS service integration'] },
      { name: 'CloudFormation', mono: 'CF', evidence: ['infrastructure delivery', 'repeatable environment setup'] },
      { name: 'Docker', mono: 'D', evidence: ['containerized delivery', 'development workflows'] },
      { name: 'Kubernetes', mono: 'K8s', evidence: ['container orchestration exposure', 'cloud-native stack'] },
      { name: 'Jenkins', mono: 'JNK', evidence: ['CI/CD pipelines', 'deployment automation'] },
      { name: 'GitHub Actions', mono: 'GH', evidence: ['portfolio deployment', 'automated validation', 'project CI'] }
    ]
  },
  {
    id: 'data',
    title: 'Data & Messaging',
    subtitle: 'Persistence, event flow and service data',
    icon: Database,
    hue: '#a78bfa',
    skills: [
      { name: 'Cassandra', mono: 'C', evidence: ['enterprise backend stack', 'distributed data workloads'] },
      { name: 'PostgreSQL', mono: 'PG', evidence: ['AI Job Hunter data model', 'application persistence'] },
      { name: 'MySQL', mono: 'MY', evidence: ['relational application data', 'backend development'] },
      { name: 'MongoDB', mono: 'MDB', evidence: ['document data experience', 'application development'] },
      { name: 'Oracle', mono: 'ORA', evidence: ['enterprise database exposure'] },
      { name: 'Kafka', mono: 'K', evidence: ['event-driven systems', 'distributed messaging experience'] }
    ]
  },
  {
    id: 'quality',
    title: 'Quality & Performance',
    subtitle: 'Test behavior, throughput and release confidence',
    icon: TestTube2,
    hue: '#34d399',
    skills: [
      { name: 'JUnit', mono: 'JU', evidence: ['Java unit testing', 'service validation'] },
      { name: 'REST Assured', mono: 'RA', evidence: ['API automation', 'backend regression coverage'], note: '+40%' },
      { name: 'Karate BDD', mono: 'KB', evidence: ['API behavior testing', 'automated scenarios'] },
      { name: 'JMeter', mono: 'JM', evidence: ['performance testing', 'latency validation'] },
      { name: 'k6', mono: 'k6', evidence: ['load testing', 'service performance checks'] },
      { name: 'Postman', mono: 'PM', evidence: ['API validation', 'integration testing'] }
    ]
  },
  {
    id: 'ops',
    title: 'Observe & Secure',
    subtitle: 'Production visibility, triage and remediation',
    icon: ShieldCheck,
    hue: '#f59e0b',
    skills: [
      { name: 'New Relic', mono: 'NR', evidence: ['production monitoring', '35% faster incident detection'], note: '35%' },
      { name: 'CloudWatch', mono: 'CW', evidence: ['AWS logs and metrics', 'runtime monitoring'] },
      { name: 'Splunk', mono: 'SP', evidence: ['production log analysis', 'incident investigation'] },
      { name: 'AWS IAM', mono: 'IAM', evidence: ['access configuration', 'cloud security controls'] },
      { name: 'Security Remediation', mono: 'SEC', evidence: ['100+ vulnerabilities remediated', 'estimated 400+ hours saved'], note: '100+' }
    ]
  },
  {
    id: 'ai',
    title: 'AI Tooling',
    subtitle: 'Developer acceleration and product intelligence',
    icon: Bot,
    hue: '#f472b6',
    skills: [
      { name: 'Claude Code', mono: 'CC', evidence: ['custom security remediation skill', 'developer workflows'], note: 'AI' },
      { name: 'Claude Skills', mono: 'CS', evidence: ['VulnHunter-Fix workflow', 'repeatable AI tooling'] },
      { name: 'GitHub Copilot', mono: 'CP', evidence: ['developer assistance', 'coding workflows'] },
      { name: 'OpenAI API', mono: 'AI', evidence: ['AI Image Generator', 'AI Job Hunter provider support'] },
      { name: 'Prompt Engineering', mono: 'PE', evidence: ['AI-assisted development', 'tool orchestration'] },
      { name: 'Agentic Workflows', mono: 'AG', evidence: ['developer automation', 'AI-assisted engineering workflows'] }
    ]
  }
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const category = categories[activeCategory];

  return (
    <section className="runtime-skills-page">
      <div className="runtime-skills-hero">
        <p>CAPABILITY GENRES</p>
        <h1>My skill universe.</h1>
        <span>Don’t measure the bar. Follow the evidence.</span>
      </div>

      <div className="runtime-skills-layout">
        <div className="runtime-skill-tabs" role="tablist" aria-label="Skill categories">
          {categories.map((item, index) => {
            const Icon = item.icon;
            const active = index === activeCategory;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setActiveCategory(index);
                  setActiveSkill(null);
                }}
                className={active ? 'runtime-skill-tab runtime-skill-tab-active' : 'runtime-skill-tab'}
                style={{ '--skill-hue': item.hue } as React.CSSProperties}
              >
                {active && <motion.span layoutId="runtime-skill-active" className="runtime-skill-tab-bg" />}
                <span className="runtime-skill-tab-icon"><Icon size={17} /></span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.skills.length} skills · {item.subtitle}</small>
                </span>
              </button>
            );
          })}
        </div>

        <div className="runtime-skill-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16, filter: 'blur(7px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
              transition={{ duration: 0.4 }}
            >
              <div className="runtime-skill-stage-heading">
                <div>
                  <p style={{ color: category.hue }}>{category.title}</p>
                  <h2>{category.subtitle}</h2>
                </div>
                <span>Hover or tap a skill</span>
              </div>

              <div className="runtime-skill-grid">
                {category.skills.map((skill, index) => {
                  const open = activeSkill === skill.name;
                  return (
                    <motion.button
                      key={skill.name}
                      type="button"
                      className={open ? 'runtime-skill-card runtime-skill-card-open' : 'runtime-skill-card'}
                      style={{ '--skill-hue': category.hue } as React.CSSProperties}
                      onMouseEnter={() => setActiveSkill(skill.name)}
                      onMouseLeave={() => setActiveSkill(null)}
                      onClick={() => setActiveSkill(open ? null : skill.name)}
                      initial={{ opacity: 0, y: 20, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.035, duration: 0.42 }}
                      whileHover={{ y: -6 }}
                    >
                      <span className="runtime-skill-mono">{skill.mono}</span>
                      <span className="runtime-skill-name">
                        {skill.name}
                        {skill.note && <em>{skill.note}</em>}
                      </span>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.span
                            className="runtime-skill-evidence"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {skill.evidence.map((item) => (
                              <span key={item}>• {item}</span>
                            ))}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        className="runtime-skill-note"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Eye size={18} />
        <p>
          Every item here is tied to work already represented elsewhere in the portfolio. The goal is to show context and evidence rather than invent a proficiency percentage.
        </p>
      </motion.div>
    </section>
  );
};

export default Skills;
