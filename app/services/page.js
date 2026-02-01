"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Workflow,
  Code,
  Users,
  Check,
} from "lucide-react";
import {
  siteConfig,
  ctaSection,
  footerLinks,
} from "@/lib/content";
import Navbar from "@/components/Navbar";

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

// Services data
const servicesData = [
  {
    icon: Phone,
    title: "Voice AI & Calling Agents",
    description: "Deploy AI agents that handle inbound and outbound calls 24/7. Perfect for customer support, appointment booking, lead qualification, and sales.",
    features: [
      "Inbound/outbound calls",
      "Appointment scheduling",
      "Lead qualification",
      "Customer support",
      "Multi-language support",
      "CRM integration"
    ],
    link: "/services/voice-ai",
    gradient: "from-blue-500/20 to-cyan-500/10"
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and business processes. From document processing to data entry - we eliminate manual work and boost efficiency.",
    features: [
      "Document processing",
      "Email automation",
      "CRM updates",
      "Report generation",
      "Multi-system integrations",
      "Custom workflows"
    ],
    link: "/services/automation",
    gradient: "from-purple-500/20 to-pink-500/10"
  },
  {
    icon: Code,
    title: "Custom AI Software",
    description: "Bespoke AI solutions tailored to your specific needs. From LLM integrations to RAG systems and intelligent applications.",
    features: [
      "Custom LLM solutions",
      "RAG systems",
      "AI-powered apps",
      "API development",
      "ML model training",
      "AI consulting"
    ],
    link: "/services/custom-software",
    gradient: "from-green-500/20 to-emerald-500/10"
  },
  {
    icon: Users,
    title: "AI Engineer Hiring",
    description: "Access top AI talent on-demand. ML engineers, data scientists, and LLM specialists for contract or full-time roles.",
    features: [
      "ML Engineers",
      "LLM Specialists",
      "Computer Vision Engineers",
      "MLOps Engineers",
      "Contract/full-time options",
      "2-week trial periods"
    ],
    link: "/services/ai-hiring",
    gradient: "from-orange-500/20 to-amber-500/10"
  }
];

export default function ServicesPage() {
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
        className="relative min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-20 px-6"
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
              Services
            </span>
            <span className="text-white/80 text-sm font-medium">What We Offer</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            AI Automation Built{" "}
            <span className="text-gradient-blue">for Business</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            From Voice AI agents that handle calls 24/7 to workflow automation that eliminates manual work.
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
                Book a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#services-grid"
                className="inline-flex items-center gap-2 px-8 py-4 btn-secondary text-white font-semibold rounded-lg"
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

      {/* Services Grid */}
      <section id="services-grid" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-3xl p-8 group relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="icon-container w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-[#0065F8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 group-hover:text-[#3B8BFF] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#0065F8] shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-[#0065F8] font-medium hover:text-[#3B8BFF] transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <AnimatedSection className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-6">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
            Ready to Automate
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gradient-blue mb-8 leading-tight">
            Your Business?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a free consultation to see how Voice AI agents and workflow automation can transform your operations.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-12 py-5 btn-primary text-white text-lg font-semibold rounded-lg"
            >
              Schedule a Call <ArrowRight className="w-5 h-5" />
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
