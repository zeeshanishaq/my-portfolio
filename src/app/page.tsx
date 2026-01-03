'use client';

import { Github, Linkedin, Mail, ExternalLink, ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <div className="flex gap-8 items-center">
            <a
              href="#about"
              className="hover:text-blue-400 transition-colors hidden md:inline"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors hidden md:inline"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-blue-400 transition-colors hidden md:inline"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="hover:text-blue-400 transition-colors hidden md:inline"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Muhammad Zeeshan</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold">
              Engineering Lead | Intelligent Systems Fanatic
            </p>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-400 mb-6">
              <MapPin size={20} />
              Dubai, UAE
            </div>
            <p className="text-xl text-blue-300 font-semibold mb-6 italic">
              "You dream of the future. I code it before you wake up."
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              I am obsessively passionate about one thing: <span className="text-blue-300 font-semibold">Automation</span>. I don't build software that needs babysitting; I build digital brains that think for you. Imagine a business flow so smooth it feels like magic—where AI agents crunch the numbers overnight and hand you the strategy at sunrise.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              With 9+ years in the trenches, I lead engineering teams to do the impossible. We don't just patch holes; we reinvent the entire ship. If you are looking for a leader to hold the torch and guide your business out of the dark ages of manual processing...
            </p>
            <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-8">
              You are in the right place. Let's build something crazy.
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/devzeeshan/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-8 py-3 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              LinkedIn
              <Linkedin size={20} />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce text-gray-500">
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 animate-fade-in">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                As an Engineering Lead with 9+ years of experience, I've built and scaled complex platforms across diverse industries. I combine hands-on engineering expertise with strategic thinking to deliver solutions that drive business impact.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                My passion lies in designing scalable architectures, optimizing performance, and leading high-performing teams. I've successfully managed engineering teams of 12+, mentored junior developers, and established engineering best practices that accelerate delivery and improve code quality.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                From architecting microservices to implementing zero-downtime deployments, I thrive on solving complex technical challenges while maintaining focus on user experience and business goals.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/devzeeshan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="mailto:m.zeeshanishaq5@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>
            <div className="space-y-6 animate-slide-in-right">
              <div className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-blue-500/50 transition-colors">
                <h4 className="text-xl font-semibold mb-4">Key Highlights</h4>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Led teams of 12+ engineers across distributed systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Improved operational efficiency by 60–70% through platform redesign</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Achieved 80% performance boost on high-scale marketplace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Expert in microservices, event-driven architecture, and cloud-native platforms</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-blue-500/50 transition-colors">
                <h4 className="text-xl font-semibold mb-3">Contact Info</h4>
                <div className="text-gray-400 space-y-2">
                  <p className="flex items-center gap-2">
                    <Mail size={18} /> m.zeeshanishaq5@gmail.com
                  </p>

                  <p className="flex items-center gap-2">
                    <MapPin size={18} /> Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Achievements Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black to-blue-950/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">My Achievements</h3>
          
          {/* FinTech & Banking Solutions */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-blue-400 mb-8">FinTech & Banking Solutions</h4>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ace Money Transfer */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <span className="text-6xl">💳</span>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-2">Ace Money Transfer</h5>
                  <p className="text-blue-400 text-sm mb-3 font-semibold">Remittance Platform | 106+ Countries</p>
                  <p className="text-gray-400 mb-4">
                    Global money remittance ecosystem processing high-volume transactions across 106 countries.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Key Achievements:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Architected scalable frontend & backend APIs with sub-second latency</li>
                      <li>• Integrated complex banking APIs & multiple payment gateways</li>
                      <li>• Built GCR-compliant admin panel for financial regulations</li>
                      <li>• Led engineering team across distinct modules</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Laravel</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">AWS</span>
                  </div>
                  <div className="mt-4">
                    <a href="https://acemoneytransfer.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* AceUnion */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <span className="text-6xl">💰</span>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-2">AceUnion</h5>
                  <p className="text-blue-400 text-sm mb-3 font-semibold">Digital Wallet & Card Issuance</p>
                  <p className="text-gray-400 mb-4">
                    Secure digital wallet with direct integration to financial institutions for card management.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Key Achievements:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Designed core database schema & API architecture</li>
                      <li>• Implemented direct Visa card issuance workflows</li>
                      <li>• Integrated HSM for bank-grade cryptographic security</li>
                      <li>• Built Checkout payment gateway integrations</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Backend</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Security</span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">HSM</span>
                  </div>
                  <div className="mt-4">
                    <a href="https://aceunion.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Global Marketplace */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/20">
                <div className="h-48 bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                  <span className="text-6xl">🌍</span>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-2">Global Marketplace Platform</h5>
                  <p className="text-blue-400 text-sm mb-3 font-semibold">High-Availability • Microservices</p>
                  <p className="text-gray-400 mb-4">
                    Sophisticated global marketplace engineered for high-concurrency with 99.9% availability and advanced search capabilities.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Key Achievements:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Microservices architecture with independent scaling</li>
                      <li>• Elasticsearch integration for lightning-fast search</li>
                      <li>• Geospatial location services & geo-fencing</li>
                      <li>• Sub-second response times with multi-layer caching</li>
                      <li>• Dynamic global compliance framework</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">NestJS</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Elasticsearch</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">AWS</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Microservices</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-4 italic">Confidential Project</p>
                </div>
              </div>
            </div>
          </div>

          {/* ERP & Business Intelligence */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-purple-400 mb-8">Enterprise Resource Planning (ERP) & BI</h4>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Royal Class Group */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="h-48 bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                  <span className="text-6xl">🏢</span>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-2">Royal Class Group</h5>
                <p className="text-blue-400 text-sm mb-3 font-semibold">Real Estate ERP Solution</p>
                <p className="text-gray-400 mb-4">
                  Enterprise ERP platform for real estate company managing multiple business centers with complete digitization of all operational processes.
                </p>
                <div className="mb-4">
                  <p className="text-gray-500 text-sm font-semibold mb-2">Key Achievements:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Built multi-tenant system for multiple business centers</li>
                    <li>• Integrated all operational processes from lead management to accounting</li>
                    <li>• Digitized end-to-end real estate workflows with 60–70% efficiency boost</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Multi-tenant</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">ERP</span>
                  </div>
                  <div className="mt-4">
                    <a href="https://royalclass.group/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Doer.ae */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="h-48 bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center">
                  <span className="text-6xl">🍽️</span>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-2">Doer.ae</h5>
                  <p className="text-blue-400 text-sm mb-3 font-semibold">Nutrition & Logistics Platform</p>
                  <p className="text-gray-400 mb-4">
                    Comprehensive "Farm-to-Fork" solution for nutrition-based meal plan services.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Key Achievements:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Digitized entire supply chain from recipe to delivery</li>
                      <li>• Built dynamic inventory management for subscriptions</li>
                      <li>• Improved operational efficiency from 30% to 50%</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Supply Chain</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Logistics</span>
                  </div>
                  <div className="mt-4">
                    <a href="https://doer.ae/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* WiseVision */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="h-48 bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                  <span className="text-6xl">🤖</span>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-2">WiseVision</h5>
                  <p className="text-blue-400 text-sm mb-3 font-semibold">AI-Driven Marketing Platform</p>
                  <p className="text-gray-400 mb-4">
                    Backend infrastructure for digital agency automating SEO and marketing workflows.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Key Achievements:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Integrated advanced AI for backlinking & SEO automation</li>
                      <li>• Built custom performance tracking dashboard</li>
                      <li>• Implemented automated reporting system</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">AI Integration</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Automation</span>
                  </div>
                  <div className="mt-4">
                    <a href="https://wisevision.ro/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare & Travel */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-pink-400 mb-8">Healthcare & Travel</h4>
            <div className="grid md:grid-cols-2 gap-8">
              {/* SmartDoctors */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="h-48 bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center">
                  <span className="text-6xl">🏥</span>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-2">SmartDoctors</h5>
                  <p className="text-blue-400 text-sm mb-3 font-semibold">Telehealth & EHR System</p>
                  <p className="text-gray-400 mb-4">
                    Digital healthcare platform bridging gap between patients and providers.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Key Achievements:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Developed fully HIPAA/GDPR compliant EHR system</li>
                      <li>• Integrated Twilio for HD video consultations</li>
                      <li>• Led team ensuring data security & compliance</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">HIPAA</span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Telehealth</span>
                  </div>
                  <div className="mt-4">
                    <a href="https://www.smartdoctors.us/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* CruiseHub */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="h-48 bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                  <span className="text-6xl">⛴️</span>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-2">CruiseHub</h5>
                  <p className="text-blue-400 text-sm mb-3 font-semibold">Cruise Booking Engine & CRM</p>
                  <p className="text-gray-400 mb-4">
                    Digital infrastructure for cruise operator with 17+ global partnerships.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Key Achievements:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Built booking engine for complex itineraries & pricing</li>
                      <li>• Created custom CRM/CMS for inventory management</li>
                      <li>• Managed partnerships with MSC, Royal Caribbean</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Booking</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">CRM</span>
                  </div>
                  <div className="mt-4">
                    <a href="https://cruisehub.ro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SaaS & Event Technology */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-cyan-400 mb-8">SaaS & Event Technology</h4>
            <div className="grid md:grid-cols-2 gap-8">
              {/* With Everly */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="h-48 bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                  <span className="text-6xl">💒</span>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-2">With Everly</h5>
                  <p className="text-blue-400 text-sm mb-3 font-semibold">All-in-One Wedding Planning Ecosystem</p>
                  <p className="text-gray-400 mb-4">
                    Comprehensive digital wedding planning platform combining financial planning, guest management, and event coordination into a single SaaS solution.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Key Achievements:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Dynamic site generation for custom wedding websites</li>
                      <li>• Bulk WhatsApp and Email automation for invitations</li>
                      <li>• Guest list management, RSVP tracking, & data collection</li>
                      <li>• Digital Gift Registry with secure monetary gifting</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">SaaS</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Event Tech</span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Automation</span>
                  </div>
                  <div className="mt-4">
                    <a href="https://witheverly.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* E-Commerce & Retail */}
          <div>
            <h4 className="text-2xl font-bold text-green-400 mb-8">E-Commerce & Retail</h4>
            <div className="grid md:grid-cols-2 gap-8">
              {/* RetroClasico */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="h-48 bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center">
                  <span className="text-6xl">🛍️</span>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-2">RetroClasico</h5>
                  <p className="text-blue-400 text-sm mb-3 font-semibold">High-Volume Print-on-Demand</p>
                  <p className="text-gray-400 mb-4">
                    High-traffic e-commerce platform for premium automotive prints and apparel.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Key Achievements:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Optimized for high-concurrency traffic spikes</li>
                      <li>• Maintained 99.9% uptime SLA</li>
                      <li>• Optimized page load for image-heavy environment</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Performance</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Optimization</span>
                  </div>
                  <div className="mt-4">
                    <a href="https://www.retroclasico.co.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Cofetaria Maria */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="h-48 bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center">
                  <span className="text-6xl">🍰</span>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-2">Cofetaria Maria</h5>
                  <p className="text-blue-400 text-sm mb-3 font-semibold">Manufacturing & Retail Platform</p>
                  <p className="text-gray-400 mb-4">
                    Digitized confectionery business with front-end sales and back-end manufacturing.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Key Achievements:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Built lead generation & ordering frontend</li>
                      <li>• Engineered manufacturing stage backend</li>
                      <li>• Tracked orders from raw ingredients to delivery</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Supply Chain</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Manufacturing</span>
                  </div>
                  <div className="mt-4">
                    <a href="https://www.cofetaria-maria.ro/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Flower Child */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="h-48 bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center">
                  <span className="text-6xl">🌸</span>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-semibold mb-2">Flower Child</h5>
                  <p className="text-blue-400 text-sm mb-3 font-semibold">Sustainable E-Commerce Platform</p>
                  <p className="text-gray-400 mb-4">
                    Bespoke Shopify experience for Ireland-based sustainable brand specializing in natural wax and essential oils.
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-semibold mb-2">Key Achievements:</p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Custom Shopify theme aligned with eco-friendly mission</li>
                      <li>• Complex product variant architecture for fragrances & oils</li>
                      <li>• Farm-to-Product narrative storytelling & optimization</li>
                      <li>• High-converting sustainable brand experience</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Shopify</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">E-Commerce</span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Sustainable</span>
                  </div>
                  <div className="mt-4">
                    <a href="https://flower-child.ie/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-b from-black to-blue-950/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 animate-fade-in">Professional Experience</h3>
          <div className="space-y-0 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:ml-8"></div>
            
            {/* Experience 1 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20 animate-slide-in-left md:ml-32 mb-8 relative">
              <div className="hidden md:block absolute -left-7 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-blue-400">Engineering Manager</h4>
                  <p className="text-gray-300 text-lg">Royal Class, UAE</p>
                </div>
                <span className="text-gray-500 whitespace-nowrap">May 2024 – Present</span>
              </div>
              <p className="text-gray-400 mb-4">
                Leading high-performance engineering teams to deliver scalable, distributed, cloud-native platforms. Architecting microservices, optimizing performance, and translating business goals into technical roadmaps.
              </p>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li>• Manage and mentor 12+ engineers, driving engineering best practices</li>
                <li>• Architected enterprise operations management platform with 60–70% efficiency improvement</li>
                <li>• Built high-scale digital marketplace from ground up with 80% performance boost</li>
                <li>• Aligned technical strategy with organizational priorities in close collaboration with executives</li>
              </ul>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Microservices</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Cloud Architecture</span>
                <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Team Leadership</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">AWS</span>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20 animate-slide-in-left md:ml-32 mb-8 relative" style={{ animationDelay: '0.1s' }}>
              <div className="hidden md:block absolute -left-7 top-8 w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-blue-400">Full Stack Engineer</h4>
                  <p className="text-gray-300 text-lg">Truth, UAE</p>
                </div>
                <span className="text-gray-500 whitespace-nowrap">June 2023 – May 2024</span>
              </div>
              <p className="text-gray-400 mb-4">
                Built comprehensive nutrition-based meal plan platform covering micro-recipe creation, kitchen workflow management, and delivery coordination.
              </p>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li>• Designed and developed secure APIs and scalable backend services</li>
                <li>• Integrated payment gateway modules and delivery coordination systems</li>
                <li>• Delivered SaaS platform with multi-client deployment and onboarding</li>
                <li>• Improved operational efficiency from 30% to 50% across kitchen and delivery</li>
              </ul>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">SaaS</span>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20 animate-slide-in-left md:ml-32 mb-8 relative" style={{ animationDelay: '0.2s' }}>
              <div className="hidden md:block absolute -left-7 top-8 w-4 h-4 bg-pink-500 rounded-full border-4 border-black"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-blue-400">Senior Lead Application Developer</h4>
                  <p className="text-gray-300 text-lg">WiseVision, Remote – Romania</p>
                </div>
                <span className="text-gray-500 whitespace-nowrap">June 2022 – May 2023</span>
              </div>
              <p className="text-gray-400 mb-4">
                Led and managed development teams on customized projects across diverse domains including cruise management, ERP platforms, and AI-driven SEO solutions.
              </p>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li>• Oversaw end-to-end project delivery from requirements to deployment</li>
                <li>• Collaborated with clients to define functional needs and design complex web architectures</li>
                <li>• Guided team collaboration, mentored developers, and maintained project timelines</li>
              </ul>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Vue.js</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Laravel</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Team Leadership</span>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20 animate-slide-in-left md:ml-32 mb-8 relative" style={{ animationDelay: '0.3s' }}>
              <div className="hidden md:block absolute -left-7 top-8 w-4 h-4 bg-cyan-500 rounded-full border-4 border-black"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-blue-400">Senior Web Application Developer</h4>
                  <p className="text-gray-300 text-lg">Ace Money Transfer, UK</p>
                </div>
                <span className="text-gray-500 whitespace-nowrap">June 2018 – May 2022</span>
              </div>
              <p className="text-gray-400 mb-4">
                Led development of high-performance fintech applications with major payment gateway integrations and e-wallet systems.
              </p>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li>• Implemented Checkout, Ingenico, and Trustly payment gateway integrations</li>
                <li>• Built comprehensive e-wallet system with VISA integration</li>
                <li>• Increased efficiency from 40% to 70% through Redis caching and architectural improvements</li>
                <li>• Delivered zero-downtime deployments and engineered real-time leads dashboard</li>
              </ul>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Laravel</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Redis</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Payment APIs</span>
              </div>
            </div>

            {/* Experience 5 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20 animate-slide-in-left md:ml-32 mb-8 relative" style={{ animationDelay: '0.4s' }}>
              <div className="hidden md:block absolute -left-7 top-8 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-blue-400">Application Architect</h4>
                  <p className="text-gray-300 text-lg">Smart Doctors, Remote – US</p>
                </div>
                <span className="text-gray-500 whitespace-nowrap">Feb 2020 – Nov 2021</span>
              </div>
              <p className="text-gray-400 mb-4">
                Designed and oversaw complete telehealth application architecture ensuring HIPAA compliance and high performance.
              </p>
              <ul className="text-gray-400 space-y-2 mb-4">
                <li>• Architected complete UI, database, APIs, and communication protocols</li>
                <li>• Ensured HIPAA compliance and security standards throughout the platform</li>
                <li>• Managed cross-functional engineering team and oversaw deployment and monitoring</li>
              </ul>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Telehealth</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">HIPAA Compliance</span>
                <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">System Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 animate-fade-in">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h4>
              <ul className="text-gray-400 space-y-2">
                <li>✓ React.js</li>
                <li>✓ Next.js</li>
                <li>✓ Vue.js</li>
                <li>✓ JavaScript</li>
                <li>✓ HTML & CSS</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-purple-400">Backend & Architecture</h4>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Node.js</li>
                <li>✓ Laravel</li>
                <li>✓ GraphQL</li>
                <li>✓ gRPC</li>
                <li>✓ REST APIs</li>
                <li>✓ Microservices</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-pink-400">Databases & Messaging</h4>
              <ul className="text-gray-400 space-y-2">
                <li>✓ PostgreSQL</li>
                <li>✓ MongoDB</li>
                <li>✓ MySQL</li>
                <li>✓ Redis</li>
                <li>✓ Kafka</li>
                <li>✓ RabbitMQ</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-green-400">DevOps & Cloud</h4>
              <ul className="text-gray-400 space-y-2">
                <li>✓ AWS</li>
                <li>✓ Docker</li>
                <li>✓ Kubernetes</li>
                <li>✓ GitHub Actions</li>
                <li>✓ CI/CD</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">Integrations</h4>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Google Maps</li>
                <li>✓ Mapbox</li>
                <li>✓ HERE Maps</li>
                <li>✓ Payment Gateways</li>
                <li>✓ Banking APIs</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-yellow-400">Tools & Practices</h4>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Jira</li>
                <li>✓ Git/GitHub</li>
                <li>✓ Team Leadership</li>
                <li>✓ Agile/Scrum</li>
                <li>✓ Code Review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-blue-950/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 animate-fade-in">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-blue-500/50 transition-colors">
              <h4 className="text-2xl font-semibold text-blue-400 mb-2">Bachelor of Science in Information Technology</h4>
              <p className="text-gray-300 text-lg mb-2">University of Gujrat</p>
              <p className="text-gray-500">2012 — 2016</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-blue-500/50 transition-colors">
              <h4 className="text-2xl font-semibold text-purple-400 mb-2">Intermediate in Computer Science</h4>
              <p className="text-gray-300 text-lg mb-2">Punjab College Gujrat</p>
              <p className="text-gray-500">2010 — 2012</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 animate-fade-in">Let's Work Together</h3>
          <p className="text-gray-400 text-lg mb-8">
            I'm always interested in hearing about new projects, partnerships, and opportunities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:m.zeeshanishaq5@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
            >
              Send Email
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/devzeeshan/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-8 py-3 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              LinkedIn
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2026 Muhammad Zeeshan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
