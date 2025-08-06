import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Brain, BarChart3, Gamepad2, Shield, User, FolderOpen, Sparkles, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showcaseMode, setShowcaseMode] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % 7);
    }, 4000);

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

  const projects = [
    {
      title: 'React To-Do Web Application with Redux',
      description: 'Developed a React web application utilizing Redux for state management and data flow. Implemented Redux fundamentals including store, reducers, actions, and dispatching actions.',
      technologies: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
      icon: <Code size={24} className="text-blue-400" />,
      github: '#',
      live: '#',
      color: "from-blue-500 to-cyan-500",
      showcase: "Let me show you my React expertise..."
    },
    {
      title: 'Image Generator using OpenAI and Dall-E',
      description: 'Developed an image generation web application using OpenAI\'s DALL-E API and Flask that allows users to generate images by describing them in natural language text.',
      technologies: ['Node.js', 'Express.js', 'OpenAI API', 'Flask', 'Python', 'HTML', 'CSS', 'JavaScript'],
      icon: <Brain size={24} className="text-purple-400" />,
      github: '#',
      live: '#',
      color: "from-purple-500 to-pink-500",
      showcase: "Check out my AI integration skills..."
    },
    {
      title: 'Tableau Project - Netflix Dashboard',
      description: 'Developed an interactive Netflix dashboard using Tableau, integrating multiple data sources to analyze content metrics and user engagement for comprehensive insights.',
      technologies: ['Tableau', 'Data Visualization', 'Analytics', 'Dashboard'],
      icon: <BarChart3 size={24} className="text-orange-400" />,
      github: '#',
      live: '#',
      color: "from-orange-500 to-red-500",
      showcase: "Here's my data visualization work..."
    },
    {
      title: 'HR Survey Analysis Power BI',
      description: 'Analyzed survey data from 630 individuals using PowerBI, revealing higher average ratings for better salary and related factors, resulting in a 20% increase in efficiency.',
      technologies: ['PowerBI', 'DAX', 'Data Analysis', 'Survey Analysis'],
      icon: <BarChart3 size={24} className="text-blue-400" />,
      github: '#',
      live: '#',
      color: "from-blue-500 to-purple-500",
      showcase: "Watch my business intelligence skills..."
    },
    {
      title: 'Human Resource Management System',
      description: 'Implemented MongoDB Atlas for automated and streamlined employee data management, while utilizing Cloud Firebase for backend execution and deploying the web interface on Google Cloud\'s App Engine.',
      technologies: ['MongoDB Atlas', 'Firebase', 'Google Cloud', 'App Engine', 'Web Development'],
      icon: <Database size={24} className="text-green-400" />,
      github: '#',
      live: '#',
      color: "from-green-500 to-emerald-500",
      showcase: "See my full-stack development..."
    },
    {
      title: 'Alien Invasion Game',
      description: 'Engineered a Python-based game with over 3 objects and dynamic functionalities, reducing server response time by 70%. Output of the game is a current score feature with difficulty level increasing with each level.',
      technologies: ['Python', 'Game Development', 'Object-Oriented Programming'],
      icon: <Gamepad2 size={24} className="text-red-400" />,
      github: '#',
      live: '#',
      color: "from-red-500 to-pink-500",
      showcase: "Here's my game development project..."
    },
    {
      title: 'Detected Fraudulent Job Postings using Machine Learning',
      description: 'Identified fraudulent job postings from a dataset of over 18k jobs, with 4% being fake. Utilized XG-Boost and Bi-directional LSTM algorithms to develop a machine learning model.',
      technologies: ['Machine Learning', 'XG-Boost', 'LSTM', 'Python', 'Deep Learning', 'Fraud Detection'],
      icon: <Shield size={24} className="text-red-400" />,
      github: '#',
      live: '#',
      color: "from-red-500 to-orange-500",
      showcase: "Check out my machine learning expertise..."
    }
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
          Projects
        </motion.h2>

        {/* Character Avatar with Project Showcase */}
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
              <FolderOpen size={48} className="text-white" />
            </motion.div>
            
            {/* Floating elements around avatar */}
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
              <Eye size={20} className="text-white" />
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
              <Sparkles size={16} className="text-white" />
            </motion.div>
          </div>

          {/* Animated project showcase message */}
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className={`p-2 bg-gradient-to-r ${projects[currentProject].color} rounded-full`}>
                {projects[currentProject].icon}
              </div>
              <span className="text-white font-medium">{projects[currentProject].showcase}</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card bg-white/10 backdrop-blur-xl border border-white/20 group hover:bg-white/15 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {project.icon}
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      className="text-xs bg-white/10 text-gray-200 px-2 py-1 rounded-full border border-white/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </motion.a>
                <motion.a
                  href={project.live}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <div className="card bg-white/10 backdrop-blur-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={24} className="text-yellow-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Project Highlights</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">7</div>
                <p className="text-gray-300 text-sm">Total Projects</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <p className="text-gray-300 text-sm">Technologies Used</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                <p className="text-gray-300 text-sm">Project Categories</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <p className="text-gray-300 text-sm">Success Rate</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 