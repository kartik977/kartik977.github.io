import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Building, Calendar, MapPin, Star, User, Briefcase, TrendingUp, Award, Clock, Users } from 'lucide-react';

const Experience: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % 3);
    }, 5000);

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

  const experiences = [
    {
      title: 'Software Engineer 3',
      company: 'Cognizant - USA',
      location: 'Dallas, TX',
      period: 'Aug 2023 – Current',
      projects: [
        {
          name: 'Capital One – Debit Card Team (BankTech)',
          period: 'Jan 2025 – Current',
          achievements: [
            'Developing new APIs and maintaining existing APIs using Java, Node.js, and TypeScript, ensuring efficient and scalable application workflows',
            'Configuring and managing New Relic alerts and dashboards, enabling real-time monitoring and actionable insights for the team',
            'Working with AWS Lambda and CloudFormation Templates to deploy and manage serverless architectures, improving deployment efficiency and scalability'
          ]
        },
        {
          name: 'Capital One – Servicing Team (FinTech)',
          period: 'Nov 2024 – Jan 2025',
          achievements: [
            'Worked on a project based on GraphQL, TypeScript, and NestJS, using Apollo GraphQL Server to build scalable and efficient server-side applications, integrating multiple endpoints seamlessly',
            'Validated error scenarios using detailed unit and component tests, improving overall system robustness and fault tolerance'
          ]
        },
        {
          name: 'Capital One – Multi Lender Platform Team (FinTech)',
          period: 'May 2024 – Nov 2024',
          achievements: [
            'Developed and enhanced critical banking applications using Java Spring Boot',
            'Conducted performance testing using JMeter, achieving a 50% improvement in application response times, with the average response time reduced to around 72ms',
            'Performed functional testing using Rest Assured and BDD frameworks, increasing test case coverage by 40% and identifying 20% more defects before production',
            'Utilized AWS services including S3, Lambda, CloudFormation and IAM role creation to enhance application performance and security',
            'Collaborated with cross-functional teams to implement best practices, resulting in a 25% reduction in bugs and a 20% improvement in application performance'
          ]
        },
        {
          name: 'Verizon',
          period: 'Aug 2023 – April 2024',
          achievements: [
            'Led the development and optimization of billing and payment solutions employing Java for backend operations and React.js for frontend enhancements',
            'Advanced database efficiency and scalability by implementing Cassandra, achieving a 25% enhancement in handling high-volume transaction data'
          ]
        }
      ]
    },
    {
      title: 'GTA, Data Analysis and Modeling Techniques',
      company: 'University of Texas at Arlington - USA',
      location: 'Arlington, TX',
      period: 'Aug 2022 – May 2023',
      projects: [
        {
          name: 'Teaching Assistant',
          period: 'Aug 2022 – May 2023',
          achievements: [
            'Developed and delivered engaging lectures, workshops, and tutorials, utilizing Python and R programming languages to facilitate hands-on learning experiences in data manipulation, visualization, and predictive modeling'
          ]
        }
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'Perpule - India',
      location: 'India',
      period: 'Aug 2019 – Apr 2021',
      projects: [
        {
          name: 'Self-Checkout System Development',
          period: 'Aug 2019 – Apr 2021',
          achievements: [
            'Collaborated with a team of developers to design, develop, and maintain the backend of the Perpule self-checkout system using Python, resulting in a 50% reduction in checkout time and enhancing overall customer satisfaction',
            'Implemented efficient algorithms and data structures to optimize the performance of critical system components, leading to a 30% increase in system throughput and improved scalability',
            'Assisted in the design and implementation of a RESTful API for the Perpule mobile application, enhancing the user experience and driving a significant 40% increase in user engagement'
          ]
        }
      ]
    }
  ];

  const storyMessages = [
    "Let me take you through my professional journey...",
    "Here's how I've grown in my career...",
    "Watch my progression from junior to senior roles..."
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
          Work Experience
        </motion.h2>

        {/* Character Avatar with Career Story */}
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
              <Briefcase size={48} className="text-white" />
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
              <TrendingUp size={20} className="text-white" />
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
              <Award size={16} className="text-white" />
            </motion.div>
          </div>

          {/* Animated storytelling message */}
          <motion.div
            key={currentStory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <User size={20} className="text-white" />
              </div>
              <span className="text-white font-medium">{storyMessages[currentStory]}</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card bg-white/10 backdrop-blur-xl border border-white/20"
            >
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                    <Building size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-300 font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-6">
                {exp.projects.map((project, projectIndex) => (
                  <motion.div
                    key={projectIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (index * 0.2) + (projectIndex * 0.1) }}
                    className="border-l-4 border-blue-500 pl-6"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Star size={16} className="text-blue-400" />
                      <h4 className="text-lg font-semibold text-white">{project.name}</h4>
                      <span className="text-blue-300 text-sm">• {project.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (projectIndex * 0.1) + (achievementIndex * 0.05) }}
                          className="text-gray-300 leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-blue-400 mt-2">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <div className="card bg-white/10 backdrop-blur-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Users size={24} className="text-green-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Career Highlights</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <Clock size={32} className="text-blue-400 mx-auto mb-2" />
                <h4 className="text-lg font-semibold text-white mb-2">5+ Years Experience</h4>
                <p className="text-gray-300 text-sm">Proven track record in software development</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <TrendingUp size={32} className="text-purple-400 mx-auto mb-2" />
                <h4 className="text-lg font-semibold text-white mb-2">Career Growth</h4>
                <p className="text-gray-300 text-sm">From Associate to Senior Engineer</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <Award size={32} className="text-green-400 mx-auto mb-2" />
                <h4 className="text-lg font-semibold text-white mb-2">Multiple Certifications</h4>
                <p className="text-gray-300 text-sm">Continuous learning and development</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 