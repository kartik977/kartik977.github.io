import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, User, BookOpen, Trophy, Star } from 'lucide-react';

const About: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  const education = [
    {
      degree: 'Master of Science – Computer Science',
      school: 'The University of Texas at Arlington, USA',
      gpa: 'GPA: 3.75',
      year: 'May 2023',
      coursework: [
        'Cloud Computing',
        'Machine Learning',
        'Algorithms',
        'Web Data Management',
        'Data Mining',
        'Artificial Intelligence'
      ]
    },
    {
      degree: 'Bachelor of Engineering – Computer Science and Engineering',
      school: 'Guru Gobind Singh Indraprastha University',
      gpa: 'GPA: 3.5',
      year: 'May 2019',
      coursework: []
    }
  ];

  const certifications = [
    'SAP Technology Consultant - Coursera',
    'Data Engineering – IBM',
    'Gen AI Fundamentals - Udemy',
    'React and Redux Course - Udemy',
    'Data Analytics Certification – Google'
  ];

  const sections = [
    {
      title: "Personal Story",
      icon: User,
      color: "from-blue-500 to-cyan-500",
      content: "I am a passionate Software Engineer with expertise in developing scalable applications and leveraging cutting-edge technologies. Currently working at Cognizant on Capital One projects, I specialize in Java, Node.js, TypeScript, and cloud services with a focus on FinTech solutions."
    },
    {
      title: "Education Journey",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
      content: "My educational background includes a Master's in Computer Science from UTA with a 3.75 GPA, specializing in cloud computing and machine learning. I also hold a Bachelor's degree in Computer Science and Engineering."
    },
    {
      title: "Professional Achievements",
      icon: Trophy,
      color: "from-green-500 to-emerald-500",
      content: "With 5+ years of experience, I've worked on diverse projects including banking systems, telecommunications, and e-commerce platforms. I've earned multiple certifications in emerging technologies and continue to expand my expertise."
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
          About Me
        </motion.h2>

        {/* Character Avatar with Storytelling */}
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
            >
              <User size={48} className="text-white" />
            </motion.div>
            
            {/* Floating elements around avatar */}
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Star size={16} className="text-white" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center"
              animate={{
                y: [0, 15, 0],
                rotate: [360, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Award size={12} className="text-white" />
            </motion.div>
          </div>

          {/* Animated storytelling section */}
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
              <div className={`p-2 bg-gradient-to-r ${sections[currentSection].color} rounded-full`}>
                {React.createElement(sections[currentSection].icon, { size: 20, className: "text-white" })}
              </div>
              <span className="text-white font-medium">{sections[currentSection].title}</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{sections[currentSection].content}</p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card bg-white/10 backdrop-blur-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Personal Information</h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin size={20} className="text-blue-400" />
                  <span className="text-gray-200">Dallas, TX</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Calendar size={20} className="text-blue-400" />
                  <span className="text-gray-200">Software Engineer 3 at Cognizant</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Award size={20} className="text-blue-400" />
                  <span className="text-gray-200">5+ years of experience</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="card bg-white/10 backdrop-blur-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap size={20} className="text-blue-400" />
                      <h4 className="font-semibold text-lg text-white">{edu.degree}</h4>
                    </div>
                    <p className="text-gray-300 mb-1">{edu.school}</p>
                    <p className="text-blue-300 text-sm mb-2">{edu.gpa} • {edu.year}</p>
                    {edu.coursework.length > 0 && (
                      <div className="mt-3">
                        <p className="text-gray-300 text-sm mb-2">Key Coursework:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <motion.span
                              key={courseIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: courseIndex * 0.1 }}
                              className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30"
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <div className="card bg-white/10 backdrop-blur-xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-gray-200 text-sm">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 