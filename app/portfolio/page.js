"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import {
  siteConfig,
  portfolioPageContent,
  ctaSection,
  footerLinks,
} from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Filter categories
const categories = [
  { id: "all", label: "All" },
  { id: "voice-ai", label: "Voice AI" },
  { id: "automation", label: "Automation" },
  { id: "custom-ai", label: "Custom AI" },
  { id: "ai-hiring", label: "AI Hiring" },
];

// Map tags to category IDs
const tagToCategory = {
  "Voice AI": "voice-ai",
  "Calling Agent": "voice-ai",
  "Real Estate": "voice-ai",
  "Healthcare": "voice-ai",
  "Sales": "voice-ai",
  "Automation": "automation",
  "Legal": "automation",
  "Custom AI": "custom-ai",
  "RAG": "custom-ai",
  "AI Hiring": "ai-hiring",
  "Fintech": "ai-hiring",
};

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
      delayChildren: 0.1
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

// Project Card Component - Finch-inspired design
function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative"
    >
      {/* Card with animated gradient border */}
      <div className="relative rounded-[20px] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 hover:border-[#0065F8]/50 transition-all duration-500">
        {/* Animated gradient border effect */}
        <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[-2px] rounded-[22px] bg-gradient-to-r from-[#0065F8] via-[#3B8BFF] to-[#0065F8] animate-gradient-rotate" />
          <div className="absolute inset-[1px] rounded-[19px] bg-[#0d0d0d]" />
        </div>

        {/* Image Container */}
        <div className="relative h-[280px] overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-4"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80" />

          {/* Year Badge */}
          <div className="absolute top-5 left-5 z-10">
            <span className="inline-block px-3 py-1.5 bg-[#0065F8] text-white text-xs font-bold rounded-full shadow-lg shadow-[#0065F8]/30">
              {project.year}
            </span>
          </div>

          {/* External Link Button */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.a>
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#0065F8]/10 text-[#3B8BFF] border border-[#0065F8]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3B8BFF] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-5">
            {project.description}
          </p>

          {/* View Case Study Link */}
          <div className="flex items-center gap-2 text-[#3B8BFF] font-medium text-sm group/link cursor-pointer">
            <span className="group-hover/link:underline">View Case Study</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter projects based on active category
  const filteredProjects = portfolioPageContent.projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.tags.some((tag) => tagToCategory[tag] === activeFilter);
  });

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Spotlight Effect */}
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar currentPage="Portfolio" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 px-6">
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
              <span className="text-[#3B8BFF] text-sm font-medium">Our Portfolio</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            Success Stories{" "}
            <span className="text-gradient-blue">That Inspire</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Discover how we&apos;ve transformed businesses with AI-powered automation,
            voice agents, and custom solutions that deliver measurable results.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-[#0065F8] text-white shadow-lg shadow-[#0065F8]/30"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Blue Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0065F8]/20 blur-[150px] rounded-full pointer-events-none"
        />
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Our Impact
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
              Numbers That <span className="text-gradient-blue">Speak</span>
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {portfolioPageContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0065F8]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative glass-card rounded-2xl p-8 text-center border border-white/5 group-hover:border-[#0065F8]/30 transition-colors duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-blue mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
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

      {/* Add keyframes for gradient animation */}
      <style jsx global>{`
        @keyframes gradient-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-rotate {
          background-size: 200% 200%;
          animation: gradient-rotate 3s linear infinite;
        }
      `}</style>
    </main>
  );
}
