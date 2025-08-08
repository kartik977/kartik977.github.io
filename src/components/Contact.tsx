import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, User, MessageCircle, Handshake, Heart, Star, Sparkles, Coffee } from 'lucide-react';

const Contact: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % 4);
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

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-blue-400" />,
      title: 'Email',
      value: 'katariakartik08@gmail.com',
      link: 'mailto:katariakartik08@gmail.com'
    },
    {
      icon: <Phone size={24} className="text-blue-400" />,
      title: 'Phone',
      value: '607-262-4092',
      link: 'tel:607-262-4092'
    },
    {
      icon: <MapPin size={24} className="text-blue-400" />,
      title: 'Location',
      value: 'Dallas, TX',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      url: 'https://github.com/kartik977',
      color: 'text-gray-300 hover:text-white'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kartikkataria2023/',
      color: 'text-blue-400 hover:text-blue-300'
    }
  ];

  const goodbyeMessages = [
    "Thanks for exploring my portfolio! 🚀",
    "Hope you enjoyed the journey through my work... ✨",
    "Ready to create something amazing together? 💫",
    "Let's connect and build the future! 🌟"
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
          Get In Touch
        </motion.h2>

        {/* Character Avatar with Invitation */}
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
              <MessageCircle size={48} className="text-white" />
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
              <Handshake size={20} className="text-white" />
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
              <Heart size={16} className="text-white" />
            </motion.div>
          </div>

          {/* Animated invitation message */}
          <motion.div
            key={currentInvite}
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
              <span className="text-white font-medium">{inviteMessages[currentInvite]}</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card bg-white/10 backdrop-blur-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 bg-white/10 rounded-full border border-white/20">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-blue-300 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-300">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portfolio Summary & Goodbye */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="card bg-white/10 backdrop-blur-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Portfolio Summary</h3>
              
              <div className="space-y-6">
                {/* Rotating Goodbye Message */}
                <motion.div
                  key={currentMessage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/20"
                >
                  <p className="text-lg text-white font-medium">{goodbyeMessages[currentMessage]}</p>
                </motion.div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Star size={20} className="text-yellow-400" />
                      <h4 className="text-white font-semibold">Experience</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Software Engineer at Cognizant, specializing in Java, Node.js, and FinTech solutions</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles size={20} className="text-blue-400" />
                      <h4 className="text-white font-semibold">Skills</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Full-stack development, React, TypeScript, Java, Node.js, and cloud technologies</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Coffee size={20} className="text-orange-400" />
                      <h4 className="text-white font-semibold">Projects</h4>
                    </div>
                    <p className="text-gray-300 text-sm">React apps, AI image generation, data visualization, and innovative solutions</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Heart size={20} className="text-red-400" />
                      <h4 className="text-white font-semibold">Passion</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Creating impactful solutions and pushing the boundaries of technology</p>
                  </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-white/20"
                >
                  <p className="text-white font-medium mb-3">Ready to collaborate on something amazing?</p>
                  <a
                    href="mailto:katariakartik08@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <Mail size={18} />
                    Let's Connect
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <div className="card bg-white/10 backdrop-blur-xl border border-white/20 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Handshake size={32} className="text-green-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Let's Work Together</h3>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Whether you have a 
              question about my work, want to discuss a potential collaboration, or just want to say 
              hello, I'd love to hear from you!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 