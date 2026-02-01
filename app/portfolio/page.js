"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import {
  siteConfig,
  navigation,
  portfolioPageContent,
  ctaSection,
  footerLinks,
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
      staggerChildren: 0.15,
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

// Project Card Component
function ProjectCard({ project, index, featured = false }) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`group glass-card rounded-3xl overflow-hidden ${featured ? 'md:col-span-2' : ''}`}
    >
      {/* Project Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-[400px] md:h-[500px]' : 'h-[280px] md:h-[320px]'}`}>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Year Badge */}
        <div className="absolute top-6 left-6">
          <span className="inline-block px-4 py-2 bg-[#0065F8] text-white text-xs font-bold rounded-full">
            {project.year}
          </span>
        </div>

        {/* Link Button */}
        <motion.div
          className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </a>
        </motion.div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur-sm border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className={`font-semibold text-white mb-3 group-hover:text-[#3B8BFF] transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className={`text-gray-300 leading-relaxed mb-4 ${featured ? 'text-base md:text-lg max-w-2xl' : 'text-sm line-clamp-2'}`}>
            {project.description}
          </p>

          {/* View Case Study Link */}
          <Link
            href={project.link}
            className="inline-flex items-center gap-2 text-[#3B8BFF] font-medium text-sm hover:text-[#0065F8] transition-colors"
          >
            View Case Study
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Separate featured project (first one) from rest
  const featuredProject = portfolioPageContent.projects[0];
  const remainingProjects = portfolioPageContent.projects.slice(1);

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Spotlight Effect */}
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />

      {/* Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
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
                    <button className={`text-sm font-medium nav-link flex items-center gap-1 transition-colors ${
                      item.name === "Services" ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-white"
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
                      item.name === "Portfolio" ? "text-[#0065F8]" : "text-gray-400 hover:text-white"
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
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-[#0065F8] hover:bg-[#3B8BFF] text-white text-sm font-semibold rounded-full transition-all hover:shadow-[0_0_30px_rgba(0,101,248,0.4)]"
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
                  <div className="space-y-3">
                    <span className="block text-white text-lg font-medium">{item.name}</span>
                    <div className="pl-4 space-y-2 border-l border-white/10">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-gray-400 hover:text-[#0065F8] transition-colors"
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
                      item.name === "Portfolio" ? "text-[#0065F8]" : "text-white hover:text-[#0065F8]"
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0065F8] text-white text-sm font-semibold rounded-full"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </motion.header>

      {/* Hero Section - Clean and Simple */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="badge-pill inline-flex items-center gap-3 px-5 py-3 rounded-full mb-8"
          >
            <span className="bg-[#0065F8] text-white text-xs font-bold px-3 py-1 rounded-full">
              {portfolioPageContent.hero.year}
            </span>
            <span className="text-white text-sm font-medium">{portfolioPageContent.hero.badge}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-4"
          >
            Our Work
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-blue tracking-tight leading-[1.1] mb-8"
          >
            Case Studies
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            See how we&apos;ve helped businesses automate and scale with AI solutions
          </motion.p>
        </div>

        {/* Blue Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] gradient-blue-glow blur-3xl pointer-events-none"
        />
      </section>

      {/* Featured Project Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ProjectCard project={featuredProject} index={0} featured={true} />
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid - 2 Columns */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {remainingProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
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
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {ctaSection.title1}
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-blue mb-8 leading-tight">
            {ctaSection.title2}
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            {ctaSection.description}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 btn-primary text-white text-lg font-semibold rounded-xl"
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
      <footer className="footer-gradient border-t border-white/5 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xs"
            >
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  width={200}
                  height={26}
                  className="h-7 w-auto"
                />
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed">
                {siteConfig.footerDesc}
              </p>
            </motion.div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {/* Pages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-medium text-sm mb-6 uppercase tracking-wider">Pages</h4>
                <ul className="space-y-4">
                  {footerLinks.templatePages.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.link}
                        className="text-gray-500 hover:text-white text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-medium text-sm mb-6 uppercase tracking-wider">Social</h4>
                <ul className="space-y-4">
                  {footerLinks.social.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.link}
                        className="text-gray-500 hover:text-white text-sm transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Subscribe */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-medium text-sm mb-6 uppercase tracking-wider">Subscribe</h4>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0065F8] transition-colors placeholder:text-gray-600"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-[#0065F8] hover:bg-[#3B8BFF] text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Subscribe
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">{siteConfig.copyright}</p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  className="text-gray-600 hover:text-gray-400 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
