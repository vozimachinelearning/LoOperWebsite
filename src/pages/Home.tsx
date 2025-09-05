import React from 'react';
import { motion } from 'framer-motion';
import { Download, Play, CheckCircle, Eye, Brain, Workflow, Video, Target, Zap, Users } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Eye,
      title: "Visual UI Control",
      subtitle: "See, Click, Automate",
      description: "Revolutionary computer vision technology that recognizes and interacts with UI elements across any desktop application through visual interface automation.",
      benefits: [
        "Controls any Windows application through UI",
        "No coding required - visual point and click",
        "Recognizes buttons, fields, and interface elements",
        "Works with legacy and modern applications"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "Smart UI Recognition",
      subtitle: "Intelligent Interface Understanding",
      description: "Advanced AI that understands desktop interfaces, recognizes UI patterns, and adapts to different application layouts and themes.",
      benefits: [
        "Natural language commands for UI actions",
        "Intelligent element detection and clicking",
        "Adapts to UI changes and updates",
        "Smart error recovery for interface issues"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Workflow,
      title: "No-Code Workflow Builder",
      subtitle: "Visual Desktop Automation",
      description: "Intuitive drag-and-drop interface for creating desktop automation workflows that control your PC through visual interactions.",
      benefits: [
        "Visual workflow builder - no programming needed",
        "Desktop-focused automation actions",
        "Conditional logic for UI-based decisions",
        "Real-time workflow testing and validation"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Video,
      title: "Action Recording",
      subtitle: "Learn by Demonstration",
      description: "Advanced screen recording that captures your desktop interactions and automatically converts them into reusable no-code automation workflows.",
      benefits: [
        "Record mouse clicks and keyboard inputs",
        "Automatic UI-based workflow generation",
        "Smart action sequence optimization",
        "Instant replay and visual editing"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "10x", label: "Faster Setup" },
    { number: "500+", label: "Supported Apps" },
    { number: "24/7", label: "Automation" }
  ];

  const downloadLinks = [
    {
      platform: "Windows",
      version: "Windows 10/11",
      size: "45 MB",
      available: true
    },
    {
      platform: "macOS",
      version: "macOS 12+",
      size: "52 MB",
      available: false
    },
    {
      platform: "Linux",
      version: "Ubuntu 20.04+",
      size: "48 MB",
      available: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-8">
                <img src="/src/assets/logo.svg" alt="LoOper" className="w-24 h-24" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Automate Your Desktop
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Visually</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                The most advanced no-code desktop automation platform. Control your PC through visual interfaces without programming knowledge.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Free</span>
              </a>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-orange-500 hover:text-orange-500 transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Every Need</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the cutting-edge technologies that make LoOper the most advanced no-code desktop automation platform for controlling your PC through visual interfaces.
            </p>
          </motion.div>

          <div className="space-y-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{feature.title}</h2>
                        <p className="text-lg text-gray-600">{feature.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${feature.color} shadow-2xl`}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <Icon className="w-24 h-24 text-white mx-auto mb-4" />
                        <div className="text-center text-white">
                          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-white/80">{feature.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Desktop Application Control Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Desktop Application Control
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LoOper controls your desktop applications through their user interfaces, providing seamless automation across all your Windows software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Windows Applications", desc: "Office, CRM, ERP, Legacy Software" },
              { icon: Zap, title: "Browser Applications", desc: "Web apps through browser UI" },
              { icon: Users, title: "Business Software", desc: "Accounting, HR, Project Management" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">LoOper</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                LoOper is a revolutionary no-code desktop automation platform that empowers users to control their PC through visual interfaces. Unlike traditional automation tools that require programming knowledge or API integrations, LoOper uses advanced computer vision and AI to interact with applications exactly as a human would.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our platform recognizes UI elements, understands application layouts, and executes actions through visual interactions. This means you can automate any Windows application - from legacy software to modern applications - without needing technical expertise or direct API access.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Visual Interface Control</h3>
                  <p className="text-gray-600">Control applications through their user interfaces using computer vision technology that recognizes buttons, fields, and other UI elements.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">No-Code Approach</h3>
                  <p className="text-gray-600">Create powerful automation workflows using drag-and-drop visual builders without writing a single line of code.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Download <span className="text-orange-500">LoOper</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Get started with desktop automation today. Choose your platform and begin transforming your workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloadLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white border-2 rounded-2xl p-8 text-center transition-all duration-300 ${
                  link.available 
                    ? 'border-gray-200 hover:border-orange-300 hover:shadow-xl' 
                    : 'border-gray-100 bg-gray-50'
                }`}
              >
                <div className="text-2xl font-bold text-gray-900 mb-2">{link.platform}</div>
                <div className="text-gray-600 mb-2">{link.version}</div>
                <div className="text-sm text-gray-500 mb-6">{link.size}</div>
                <button
                  disabled={!link.available}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    link.available
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {link.available ? 'Download' : 'Coming Soon'}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              System Requirements: Windows 10/11, 4GB RAM, 100MB free space
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>Free to use</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>No registration required</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>Instant setup</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Desktop?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the revolution in desktop automation. Control your PC through visual interfaces without any programming knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Now</span>
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;