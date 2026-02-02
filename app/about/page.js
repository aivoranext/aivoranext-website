"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Workflow,
  Code,
  Users,
  Star,
  Target,
  Zap,
  Shield,
  Heart,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import {
  siteConfig,
  aboutPageContent,
  ctaSection,
  footerLinks,
} from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

// Values data
const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable ROI, not just impressive demos. Every solution is designed to deliver real business impact."
  },
  {
    icon: Zap,
    title: "Speed to Value",
    description: "Deploy AI solutions in weeks, not months. Our battle-tested frameworks accelerate your path to automation."
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description: "Built for scale with security-first architecture. SOC2 compliant processes and enterprise-grade infrastructure."
  },
  {
    icon: Heart,
    title: "Partner Mindset",
    description: "We're invested in your success. Long-term partnerships over one-off projects, with ongoing optimization."
  },
];

// Team expertise - Real metrics from founder's portfolio
const expertise = [
  { label: "Years Experience", value: "8+" },
  { label: "Automation Rate", value: "100%" },
  { label: "Faster Conversions", value: "3x" },
  { label: "Client Satisfaction", value: "98%" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Spotlight Effect */}
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar currentPage="About" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0065F8]/10 border border-[#0065F8]/20">
              <span className="w-2 h-2 rounded-full bg-[#0065F8] animate-pulse" />
              <span className="text-[#3B8BFF] text-sm font-medium">{aboutPageContent.hero.badge}</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            {aboutPageContent.hero.titleLine1}{" "}
            <span className="text-gradient-blue">{aboutPageContent.hero.titleLine2}</span>
            <br />
            {aboutPageContent.hero.titleLine3}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            We build AI solutions that work around the clock, so your business never sleeps.
            From Voice AI to workflow automation, we deliver results that matter.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 btn-primary text-white font-semibold rounded-xl shadow-lg shadow-[#0065F8]/30"
              >
                Get In Touch <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Blue Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0065F8]/20 blur-[150px] rounded-full pointer-events-none"
        />
      </section>

      {/* Image Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div
              className="relative rounded-3xl overflow-hidden border border-white/10"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={aboutPageContent.imageUrl}
                alt="Team Working Together"
                width={1200}
                height={600}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Title */}
            <AnimatedSection>
              <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
                {aboutPageContent.aboutUs.caption}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
                {aboutPageContent.aboutUs.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {aboutPageContent.aboutUs.description}
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                {aboutPageContent.aboutUs.mission}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-primary text-white font-semibold rounded-none"
                >
                  Explore Our Services <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </AnimatedSection>

            {/* Right - Stats Grid */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {expertise.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="glass-card rounded-2xl p-6 text-center border border-white/5 hover:border-[#0065F8]/30 transition-colors"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gradient-blue mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              What <span className="text-gradient-blue">Drives Us</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We believe in building AI solutions that create real value for businesses
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 h-full border border-white/5 hover:border-[#0065F8]/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#0065F8]/10 flex items-center justify-center mb-6 group-hover:bg-[#0065F8]/20 transition-colors">
                    <value.icon className="w-7 h-7 text-[#0065F8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Technology Stack
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Built With <span className="text-gradient-blue">Modern AI</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We leverage cutting-edge AI frameworks and tools to build production-ready solutions
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 border border-white/5"
            >
              <h4 className="text-[#0065F8] text-sm font-semibold mb-4">AI Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {["LangGraph", "LangChain", "CrewAI", "AutoGen"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Voice AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 border border-white/5"
            >
              <h4 className="text-[#0065F8] text-sm font-semibold mb-4">Voice AI</h4>
              <div className="flex flex-wrap gap-2">
                {["LiveKit", "Twilio", "ElevenLabs", "Deepgram"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Vector Databases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 border border-white/5"
            >
              <h4 className="text-[#0065F8] text-sm font-semibold mb-4">Vector Databases</h4>
              <div className="flex flex-wrap gap-2">
                {["Pinecone", "Weaviate", "ChromaDB"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* LLM Providers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 border border-white/5"
            >
              <h4 className="text-[#0065F8] text-sm font-semibold mb-4">LLM Providers</h4>
              <div className="flex flex-wrap gap-2">
                {["OpenAI", "Anthropic", "Azure OpenAI", "AWS Bedrock"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Languages & Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 border border-white/5"
            >
              <h4 className="text-[#0065F8] text-sm font-semibold mb-4">Languages & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Node.js", "TypeScript", "Next.js", "React.js"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Cloud Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 border border-white/5"
            >
              <h4 className="text-[#0065F8] text-sm font-semibold mb-4">Cloud Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Azure", "GCP"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Content */}
            <AnimatedSection className="space-y-8">
              <div>
                <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
                  What We Do
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-4">
                  AI Solutions That{" "}
                  <span className="text-gradient-blue">Drive Results</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  From Voice AI agents to custom automation, we deliver AI that works.
                </p>
              </div>

              {/* Service Cards */}
              <div className="space-y-4">
                {aboutPageContent.services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0065F8]/30 hover:bg-white/[0.07] transition-all cursor-pointer group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0065F8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0065F8]/20 transition-colors">
                      {index === 0 && <Phone className="w-5 h-5 text-[#0065F8]" />}
                      {index === 1 && <Workflow className="w-5 h-5 text-[#0065F8]" />}
                      {index === 2 && <Code className="w-5 h-5 text-[#0065F8]" />}
                      {index === 3 && <Users className="w-5 h-5 text-[#0065F8]" />}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 group-hover:text-[#3B8BFF] transition-colors">{service.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-primary text-white font-semibold rounded-none"
                >
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </AnimatedSection>

            {/* Right - Trust Badge */}
            <AnimatedSection delay={0.3} className="space-y-8">
              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 border border-white/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0065F8] to-[#3B8BFF] border-2 border-[#050505] flex items-center justify-center"
                      >
                        <Star className="w-5 h-5 text-white fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">50+ Businesses Automated</div>
                <p className="text-gray-400 mb-6">Trusted by growing companies worldwide</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-white font-medium">5.0</span>
                  <span className="text-gray-500">Average Rating</span>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-6 text-center border border-white/5"
                >
                  <Lightbulb className="w-8 h-8 text-[#0065F8] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">85%</div>
                  <div className="text-gray-500 text-sm">Avg Cost Reduction</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-6 text-center border border-white/5"
                >
                  <TrendingUp className="w-8 h-8 text-[#0065F8] mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-gray-500 text-sm">AI Availability</div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <AnimatedSection className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-6">
            {ctaSection.caption}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
            {ctaSection.title1}
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gradient-blue mb-8 leading-tight">
            {ctaSection.title2}
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            {ctaSection.description}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 btn-primary text-white text-lg font-semibold rounded-xl shadow-lg shadow-[#0065F8]/30"
            >
              {ctaSection.buttonText} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </AnimatedSection>

        {/* Background Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          className="absolute inset-0 gradient-blue-glow pointer-events-none"
        />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
