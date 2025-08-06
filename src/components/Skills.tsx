import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code, Cloud, Database, BarChart3, Globe, Wrench, User, Zap, Target, Rocket } from 'lucide-react';

const Skills: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [showcaseMode, setShowcaseMode] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} className="text-blue-400" />,
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'R', 'SQL', 'HTML', 'CSS'],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: 'Cloud Services',
      icon: <Cloud size={24} className="text-green-400" />,
      skills: ['Google Cloud Platform (GCP)', 'Amazon Web Services (AWS)', 'Microsoft Azure'],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: 'Databases',
      icon: <Database size={24} className="text-purple-400" />,
      skills: ['MS SQL Server', 'MySQL', 'Oracle DB', 'Postgres', 'MongoDB'],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: 'Data Visualization Tools',
      icon: <BarChart3 size={24} className="text-orange-400" />,
      skills: ['Excel', 'Tableau', 'PowerBI'],
      color: "from-orange-500 to-red-500"
    },
    {
      title: 'Web Technologies and Frameworks',
      icon: <Globe size={24} className="text-red-400" />,
      skills: ['React.js', 'Node.js', 'Express.js', 'Flask', 'Django', 'Rest Assured', 'Karate', 'TypeScript', 'GraphQL'],
      color: "from-red-500 to-pink-500"
    },
    {
      title: 'Additional Technologies',
      icon: <Wrench size={24} className="text-gray-400" />,
      skills: ['Git', 'Docker', 'Kubernetes', 'Restful API', 'Big Query', 'Pandas', 'Numpy', 'PyTorch', 'CI/CD', 'TensorFlow', 'Jenkins', 'Kafka', 'JMeter', 'K6', 'Junit'],
      color: "from-gray-500 to-slate-500"
    }
  ];

  const proficiencyLevels = {
    'Python': 90,
    'Java': 85,
    'JavaScript': 80,
    'TypeScript': 75,
    'React.js': 80,
    'Node.js': 75,
    'AWS': 70,
    'Docker': 65,
    'MongoDB': 70,
    'MySQL': 75
  };

  const showcaseMessages = [
    "Let me show you my programming expertise...",
    "Here's what I can do with cloud technologies...",
    "Watch how I handle databases...",
    "See my data visualization skills...",
    "Check out my web development capabilities...",
    "And here are my additional technical skills..."
  ];

  return (
    <section className="section bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 min-h-screen">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-white"
        >
          Skills & Technologies
        </motion.h2>

        {/* Character Avatar with Skill Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <motion.div
              className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6"
              animate={controls}
              onHoverStart={() => setShowcaseMode(true)}
              onHoverEnd={() => setShowcaseMode(false)}
            >
              <User size={48} className="text-white" />
            </motion.div>
            
            {/* Floating skill icons around avatar */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code size={20} className="text-white" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [0, 20, 0],
                rotate: [360, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap size={16} className="text-white" />
            </motion.div>
          </div>

          {/* Animated skill showcase message */}
          <motion.div
            key={currentSkill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className={`p-2 bg-gradient-to-r ${skillCategories[currentSkill].color} rounded-full`}>
                {skillCategories[currentSkill].icon}
              </div>
              <span className="text-white font-medium">{showcaseMessages[currentSkill]}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="text-sm bg-white/10 text-gray-200 px-3 py-1 rounded-full border border-white/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card bg-white/10 backdrop-blur-xl border border-white/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target size={24} className="text-blue-400" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Key Skills Proficiency</h3>
          </div>
          <div className="space-y-4">
            {Object.entries(proficiencyLevels).map(([skill, level], index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-200 font-medium">{skill}</span>
                  <span className="text-blue-300 text-sm">{level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <div className="card bg-white/10 backdrop-blur-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Rocket size={24} className="text-green-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Specialized Expertise</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white mb-3">Backend Development</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    RESTful API Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Microservices Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Database Design & Optimization
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white mb-3">Frontend Development</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Modern React Applications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Responsive Web Design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Progressive Web Apps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 