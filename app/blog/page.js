"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
} from "lucide-react";
import {
  blogPageContent,
  ctaSection,
} from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
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

// Map category to ID
const categoryToId = {
  "Voice AI": "voice-ai",
  "Automation": "automation",
  "Custom AI": "custom-ai",
  "AI Hiring": "ai-hiring",
};

// Featured Post Card
function FeaturedPostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 hover:border-[#0065F8]/50 transition-all duration-500"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d0d] opacity-50 md:opacity-80" />
            <div className="absolute top-5 left-5 z-10">
              <span className="inline-block px-3 py-1.5 bg-[#0065F8] text-white text-xs font-bold rounded-full shadow-lg shadow-[#0065F8]/30">
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-10 flex flex-col justify-center">
            <span className="text-[#3B8BFF] text-sm font-medium mb-3">
              {post.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 group-hover:text-[#3B8BFF] transition-colors duration-300">
              {post.title}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#3B8BFF] font-medium">
              <span className="group-hover:underline">Read Article</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// Regular Post Card
function PostCard({ post, index }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 hover:border-[#0065F8]/50 transition-all duration-500"
      >
        {/* Image */}
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80" />
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1 bg-[#0065F8]/20 text-[#3B8BFF] text-xs font-medium rounded-full border border-[#0065F8]/20">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#3B8BFF] transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1 text-[#3B8BFF] text-sm font-medium">
              <span>Read</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Get featured posts
  const featuredPosts = blogPageContent.posts.filter((post) => post.featured);

  // Filter non-featured posts based on active category
  const filteredPosts = blogPageContent.posts
    .filter((post) => !post.featured)
    .filter((post) => {
      if (activeFilter === "all") return true;
      return categoryToId[post.category] === activeFilter;
    });

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Spotlight Effect */}
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar currentPage="Blog" />

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
              <span className="text-[#3B8BFF] text-sm font-medium">
                {blogPageContent.hero.badge}
              </span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            {blogPageContent.hero.titleLine1}{" "}
            <span className="text-gradient-blue">
              {blogPageContent.hero.titleLine2}
            </span>{" "}
            {blogPageContent.hero.titleLine3}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Expert insights on Voice AI, automation, and building AI-powered
            solutions. Learn from real implementations and industry best
            practices.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {blogPageContent.categories.map((category) => (
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

      {/* Featured Posts */}
      {activeFilter === "all" && (
        <section className="relative py-8 px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {activeFilter === "all" && (
            <AnimatedSection className="mb-10">
              <h2 className="text-2xl md:text-3xl font-medium text-white">
                Latest Articles
              </h2>
            </AnimatedSection>
          )}

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">
                No articles found in this category yet.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-24 px-6 section-gradient">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4 block">
              Stay Updated
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Get AI Insights in Your Inbox
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Subscribe to our newsletter for the latest on Voice AI,
              automation, and AI engineering. No spam, just valuable content.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#0065F8]/50 transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#0065F8] text-white font-semibold rounded-xl shadow-lg shadow-[#0065F8]/30 hover:bg-[#3B8BFF] transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </AnimatedSection>
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
