"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Check,
  Brain,
  Database,
  Code2,
  Server,
  LineChart,
  Lightbulb,
  Search,
  Layers,
  Wrench,
  TestTube,
  Rocket,
  Cloud,
  Cpu,
  Box,
} from "lucide-react";
import {
  siteConfig,
  navigation,
} from "@/lib/content";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Animated Section Component
function AnimatedSection({ children, className, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// What We Build Categories
const whatWeBuildData = [
  {
    icon: Brain,
    title: "Custom LLM Implementations",
    description: "Fine-tuned language models tailored to your specific domain and use cases.",
    features: ["Domain-specific fine-tuning", "Custom training data", "Optimized inference"]
  },
  {
    icon: Database,
    title: "RAG Systems",
    description: "Knowledge bases with retrieval augmented generation for accurate, contextual responses.",
    features: ["Vector embeddings", "Semantic search", "Real-time knowledge updates"]
  },
  {
    icon: Code2,
    title: "AI-Powered Applications",
    description: "Intelligent applications and platforms that leverage AI for enhanced functionality.",
    features: ["Smart interfaces", "Predictive features", "Adaptive experiences"]
  },
  {
    icon: Server,
    title: "API Development",
    description: "Custom AI APIs and microservices for seamless integration with your systems.",
    features: ["RESTful APIs", "GraphQL endpoints", "Scalable architecture"]
  },
  {
    icon: LineChart,
    title: "Machine Learning Models",
    description: "Predictive analytics, classification, and NLP models for data-driven insights.",
    features: ["Predictive analytics", "Classification models", "NLP solutions"]
  },
  {
    icon: Lightbulb,
    title: "AI Consulting",
    description: "Strategic guidance on AI architecture, technology selection, and implementation.",
    features: ["Technology assessment", "Architecture design", "Implementation roadmap"]
  }
];

// Technology Stack
const technologyStack = {
  llms: {
    title: "Large Language Models",
    icon: Brain,
    items: ["OpenAI GPT-4", "Anthropic Claude", "Llama 2", "Mistral", "Custom Fine-tuned Models"]
  },
  frameworks: {
    title: "AI Frameworks",
    icon: Layers,
    items: ["LangChain", "LlamaIndex", "Haystack", "Semantic Kernel", "Custom Pipelines"]
  },
  vectorDbs: {
    title: "Vector Databases",
    icon: Database,
    items: ["Pinecone", "Weaviate", "Qdrant", "Chroma", "Milvus"]
  },
  cloud: {
    title: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS", "Google Cloud", "Microsoft Azure", "Vercel", "Custom Infrastructure"]
  }
};

// Process Steps
const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "Understand your requirements, constraints, and business objectives."
  },
  {
    icon: Layers,
    step: "02",
    title: "Architecture",
    description: "Design the solution architecture with scalability and security in mind."
  },
  {
    icon: Wrench,
    step: "03",
    title: "Development",
    description: "Agile development with regular demos and iterative improvements."
  },
  {
    icon: TestTube,
    step: "04",
    title: "Testing",
    description: "Comprehensive testing, validation, and quality assurance."
  },
  {
    icon: Rocket,
    step: "05",
    title: "Deployment",
    description: "Production deployment with monitoring and ongoing support."
  }
];

export default function CustomSoftwarePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Spotlight Effect */}
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />

      {/* Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5"
      >
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={180}
                height={24}
                className="h-6 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative group"
              >
                {item.dropdown ? (
                  <div className="relative">
                    <button className={`text-sm font-medium nav-link transition-colors flex items-center gap-1 ${
                      item.name === "Services" ? "text-[#00D9FF]" : "text-gray-400 hover:text-white"
                    }`}>
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-2 min-w-[200px] shadow-xl">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.link}
                            className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className={`text-sm font-medium nav-link transition-colors ${
                      item.name === "Services" ? "text-[#00D9FF]" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-[#00D9FF] hover:bg-[#4DE8FF] text-white text-sm font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-6 py-8 space-y-6">
            {navigation.navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.dropdown ? (
                  <div className="space-y-4">
                    <span className={`block text-lg font-medium ${
                      item.name === "Services" ? "text-[#00D9FF]" : "text-white"
                    }`}>
                      {item.name}
                    </span>
                    <div className="pl-4 space-y-3 border-l border-white/10">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-gray-400 text-base hover:text-[#00D9FF] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-lg font-medium transition-colors ${
                      item.name === "Services" ? "text-[#00D9FF]" : "text-white hover:text-[#00D9FF]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D9FF] text-white text-sm font-semibold rounded-lg"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </motion.header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 px-6"
      >
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="badge-pill flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full mb-10"
          >
            <span className="bg-[#00D9FF] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              Custom AI Software
            </span>
            <span className="text-white/80 text-sm font-medium">Built For Your Business</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            Bespoke AI Solutions{" "}
            <span className="text-gradient-blue">For Your Business</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            From custom LLM integrations to intelligent RAG systems and AI-powered applications.
            We build the AI solutions that give your business a competitive edge.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 btn-primary text-white font-semibold rounded-lg"
              >
                Discuss Your Project <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 btn-secondary text-white font-semibold rounded-lg"
              >
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Blue Glow under text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[200px] gradient-blue-glow blur-3xl pointer-events-none"
        />
      </section>

      {/* What We Build Section */}
      <section id="what-we-build" className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#00D9FF] text-sm uppercase tracking-[0.2em] mb-4">
              What We Build
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Custom AI Solutions{" "}
              <span className="text-gradient-blue">Tailored To You</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From intelligent applications to enterprise AI infrastructure, we build solutions that solve real business challenges.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whatWeBuildData.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#4DE8FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#00D9FF] text-sm uppercase tracking-[0.2em] mb-4">
              Technology Stack
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Powered by{" "}
              <span className="text-gradient-blue">Leading AI Tech</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We leverage the most advanced AI technologies to build robust, scalable solutions.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* LLMs */}
            <AnimatedSection delay={0.1}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-[#00D9FF]" />
                  {technologyStack.llms.title}
                </h3>
                <div className="space-y-3">
                  {technologyStack.llms.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Cpu className="w-4 h-4 text-[#00D9FF]" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Frameworks */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#00D9FF]" />
                  {technologyStack.frameworks.title}
                </h3>
                <div className="space-y-3">
                  {technologyStack.frameworks.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Box className="w-4 h-4 text-[#00D9FF]" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Vector DBs */}
            <AnimatedSection delay={0.3}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#00D9FF]" />
                  {technologyStack.vectorDbs.title}
                </h3>
                <div className="space-y-3">
                  {technologyStack.vectorDbs.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Database className="w-4 h-4 text-[#00D9FF]" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Cloud */}
            <AnimatedSection delay={0.4}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-[#00D9FF]" />
                  {technologyStack.cloud.title}
                </h3>
                <div className="space-y-3">
                  {technologyStack.cloud.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Cloud className="w-4 h-4 text-[#00D9FF]" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#00D9FF] text-sm uppercase tracking-[0.2em] mb-4">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              From Discovery to{" "}
              <span className="text-gradient-blue">Deployment</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our proven 5-step process ensures successful delivery of your AI solution.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-2xl p-6 group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-white/5 group-hover:text-[#00D9FF]/10 transition-colors">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#4DE8FF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <AnimatedSection className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#00D9FF] text-sm uppercase tracking-[0.2em] mb-6">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
            Let&apos;s Build Your
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gradient-blue mb-8 leading-tight">
            AI Solution
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a discovery call to discuss your requirements and explore how
            custom AI software can transform your business operations.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-12 py-5 btn-primary text-white text-lg font-semibold rounded-lg"
            >
              Schedule a Discovery Call <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </AnimatedSection>

        {/* Background Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          className="absolute inset-0 gradient-blue-glow pointer-events-none"
        />
      </section>

      {/* Simple Footer */}
      <footer className="footer-gradient border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={160}
                height={22}
                className="h-6 w-auto"
              />
            </Link>

            {/* Copyright */}
            <p className="text-gray-600 text-sm">{siteConfig.copyright}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
