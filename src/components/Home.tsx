import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { Download, Mail, Github, Linkedin, User, Briefcase, Code, Award } from 'lucide-react';

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  const steps = [
    { icon: User, text: "Hi, I'm Kartik!", color: "from-blue-500 to-cyan-500" },
    { icon: Briefcase, text: "Software Engineer 3 at Cognizant", color: "from-purple-500 to-pink-500" },
    { icon: Code, text: "Passionate about building scalable applications", color: "from-green-500 to-emerald-500" },
    { icon: Award, text: "Specialized in Java, Node.js, TypeScript", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400/30 rounded-lg"
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-20 h-20 border-2 border-green-400/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Character Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Character Avatar */}
            <motion.div
              className="relative mb-8"
              animate={controls}
            >
              <div className="relative w-48 h-48 mx-auto lg:mx-0">
                {/* Character circle */}
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(59, 130, 246, 0.5)",
                      "0 0 60px rgba(147, 51, 234, 0.8)",
                      "0 0 30px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <User size={80} className="text-white" />
                </motion.div>
                
                {/* Floating elements around character */}
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
                  <Briefcase size={16} className="text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Animated introduction text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6"
            >
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <div className={`p-2 bg-gradient-to-r ${steps[currentStep].color} rounded-full`}>
                  {React.createElement(steps[currentStep].icon, { size: 20, className: "text-white" })}
                </div>
                <span className="text-white font-medium">{steps[currentStep].text}</span>
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Kartik Kataria
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed"
            >
              A passionate Software Engineer with expertise in developing scalable applications 
              and leveraging cutting-edge technologies. Currently working at Cognizant on Capital One 
              projects, specializing in Java, Node.js, TypeScript, and cloud services with a focus 
              on FinTech solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                to="/contact"
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={18} />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <a
                href="/KARTIK_KATARIA_CapOne'June25.pdf"
                className="group px-6 py-3 bg-transparent border-2 border-blue-400 rounded-full text-blue-300 font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-400 hover:text-white hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://github.com/kartik977"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} className="text-white group-hover:text-blue-300 transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kartikkataria2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} className="text-white group-hover:text-blue-300 transition-colors" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Work Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Work showcase card */}
              <motion.div
                className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.5)",
                        "0 0 40px rgba(147, 51, 234, 0.8)",
                        "0 0 20px rgba(59, 130, 246, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Briefcase size={32} className="text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold mb-4 text-white">Current Work</h3>
                  <div className="space-y-3 text-left">
                    <motion.div
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-200">Software Engineer 3 at Cognizant</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-200">Capital One - Debit Card Team</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-200">MS Computer Science - UTA</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 