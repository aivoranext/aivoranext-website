"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  Palette,
  Layers,
  Search,
  MousePointer,
  TestTube,
  Grid3X3,
  Eye,
  Sparkles,
  Monitor,
  PenTool,
  Lightbulb,
  Users,
  Target,
  Zap,
  FileText,
  Layout,
  Figma,
  Code,
} from "lucide-react";
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

// UI/UX Services
const uiuxServices = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create beautiful, intuitive interfaces that delight users and drive engagement. From wireframes to high-fidelity designs."
  },
  {
    icon: Lightbulb,
    title: "UI/UX Consulting",
    description: "Strategic design consulting to improve your product's user experience and achieve business goals."
  },
  {
    icon: Search,
    title: "UX Research",
    description: "Deep user research including interviews, surveys, and behavioral analysis to understand your users."
  },
  {
    icon: Eye,
    title: "UX Design Audit",
    description: "Comprehensive evaluation of your existing product to identify usability issues and improvement opportunities."
  },
  {
    icon: TestTube,
    title: "Usability Testing",
    description: "Real user testing to validate designs, identify pain points, and iterate towards perfection."
  },
  {
    icon: Grid3X3,
    title: "Design System",
    description: "Scalable design systems with reusable components, tokens, and guidelines for consistent experiences."
  },
  {
    icon: FileText,
    title: "Heuristic Evaluation",
    description: "Expert analysis of your interface against established usability principles and best practices."
  },
  {
    icon: MousePointer,
    title: "Interaction Design",
    description: "Craft meaningful micro-interactions and animations that enhance user engagement and feedback."
  },
  {
    icon: Monitor,
    title: "Digital Prototyping",
    description: "Interactive prototypes that bring your designs to life for testing and stakeholder validation."
  },
  {
    icon: PenTool,
    title: "Digital Branding",
    description: "Cohesive brand identity design including logos, color systems, typography, and visual guidelines."
  },
];

// Design Process Steps
const designProcess = [
  {
    step: "01",
    title: "Discovery",
    description: "Understand your business goals, target users, and competitive landscape through research and workshops."
  },
  {
    step: "02",
    title: "Research",
    description: "Conduct user research, interviews, and analysis to uncover insights that drive design decisions."
  },
  {
    step: "03",
    title: "Ideation",
    description: "Explore multiple design directions through sketches, wireframes, and collaborative brainstorming."
  },
  {
    step: "04",
    title: "Design",
    description: "Create high-fidelity designs with attention to detail, accessibility, and brand consistency."
  },
  {
    step: "05",
    title: "Prototype",
    description: "Build interactive prototypes to test and validate designs with real users."
  },
  {
    step: "06",
    title: "Handoff",
    description: "Deliver design specifications, assets, and support for seamless development implementation."
  },
];

// Industries Served
const industries = [
  { name: "SaaS & Technology", icon: Code },
  { name: "E-commerce", icon: Layout },
  { name: "Healthcare", icon: Users },
  { name: "Fintech", icon: Target },
  { name: "Education", icon: Lightbulb },
  { name: "Enterprise", icon: Layers },
];

// Tools we use
const tools = [
  "Figma",
  "Sketch",
  "Adobe XD",
  "Framer",
  "Principle",
  "InVision",
  "Miro",
  "Maze",
  "Hotjar",
  "Lottie",
];

export default function UIUXDesignPage() {
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
      <Navbar currentPage="Services" />

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
            <span className="bg-[#0065F8] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              UI/UX Design
            </span>
            <span className="text-white/80 text-sm font-medium">Human-Centered Design</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            Design Experiences{" "}
            <span className="text-gradient-blue">Users Love</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            From research to pixel-perfect designs, we create intuitive digital experiences
            that delight users and drive business results. UI/UX design that converts.
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
                className="inline-flex items-center gap-2 px-8 py-4 btn-primary text-white font-semibold rounded-none"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 btn-secondary text-white font-semibold rounded-none"
              >
                Explore Services
              </a>
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

      {/* Services Grid Section */}
      <section id="services" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              End-to-End{" "}
              <span className="text-gradient-blue">Design Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive UI/UX design services to transform your digital products.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {uiuxServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#0065F8]" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#3B8BFF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Design Process That{" "}
              <span className="text-gradient-blue">Delivers Results</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven methodology to create exceptional user experiences.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {designProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-2xl p-6 group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-white/5 group-hover:text-[#0065F8]/10 transition-colors">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#3B8BFF] transition-colors">
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

      {/* Industries Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
                Industries
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
                Design Expertise Across{" "}
                <span className="text-gradient-blue">Industries</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We&apos;ve designed digital products for startups and enterprises across various industries,
                bringing domain knowledge and best practices to every project.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#0065F8]/30 transition-colors"
                  >
                    <industry.icon className="w-5 h-5 text-[#0065F8]" />
                    <span className="text-white font-medium">{industry.name}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-semibold text-white mb-6">Tools We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-[#0065F8]/10 text-[#3B8BFF] border border-[#0065F8]/20 hover:bg-[#0065F8]/20 transition-colors"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gradient-blue">100+</div>
                      <div className="text-gray-500 text-sm">Projects Delivered</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gradient-blue">50+</div>
                      <div className="text-gray-500 text-sm">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gradient-blue">5.0</div>
                      <div className="text-gray-500 text-sm">Average Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              What Sets Us{" "}
              <span className="text-gradient-blue">Apart</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Results-Driven",
                description: "We focus on designs that convert and achieve your business objectives."
              },
              {
                icon: Users,
                title: "User-Centered",
                description: "Every design decision is backed by user research and testing."
              },
              {
                icon: Zap,
                title: "Fast Turnaround",
                description: "Efficient processes without compromising on quality."
              },
              {
                icon: Sparkles,
                title: "Pixel Perfect",
                description: "Attention to detail in every element, animation, and interaction."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-2xl p-6 text-center border border-white/5 hover:border-[#0065F8]/30 transition-all"
              >
                <div className="icon-container w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#0065F8]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <AnimatedSection className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-6">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
            Ready to Transform
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gradient-blue mb-8 leading-tight">
            Your Digital Product?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how our UI/UX design services can help you create products
            that users love and that drive real business results.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-12 py-5 btn-primary text-white text-lg font-semibold rounded-none"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
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

      <Footer />
    </main>
  );
}
