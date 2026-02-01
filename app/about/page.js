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
  Star,
} from "lucide-react";
import {
  siteConfig,
  aboutPageContent,
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

export default function AboutPage() {
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
      <Navbar currentPage="About" />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6"
      >
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="badge-pill flex items-center gap-3 px-5 py-3 rounded-full mb-12 animate-float"
          >
            <span className="bg-[#0065F8] text-white text-xs font-bold px-3 py-1 rounded-full">
              {aboutPageContent.hero.year}
            </span>
            <span className="text-white text-sm font-medium">{aboutPageContent.hero.badge}</span>
          </motion.div>

          {/* Main Headline with Reflection */}
          <div className="text-center relative max-w-5xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.1] mb-4"
            >
              {aboutPageContent.hero.titleLine1}
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-gradient-blue tracking-tight leading-[1.1] mb-4"
            >
              <em>{aboutPageContent.hero.titleLine2}</em>
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] text-reflection"
              data-text={aboutPageContent.hero.titleLine3}
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              <em>{aboutPageContent.hero.titleLine3}</em>
            </motion.h2>
          </div>
        </motion.div>

        {/* Purple Glow under text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[200px] gradient-purple-glow blur-3xl pointer-events-none" 
        />

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 relative z-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 btn-primary text-white font-semibold rounded-xl"
            >
              View About Reboot <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Image Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div 
              className="relative rounded-3xl overflow-hidden image-glow"
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
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Title */}
            <AnimatedSection>
              <div className="badge-pill inline-flex items-center gap-3 px-5 py-3 rounded-full mb-8">
                <div className="w-8 h-8 rounded-lg bg-[#0065F8]/20 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[#0065F8]" />
                </div>
                <span className="text-white text-sm font-medium">{aboutPageContent.aboutUs.caption}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                {aboutPageContent.aboutUs.title}
              </h2>
            </AnimatedSection>

            {/* Right - Content */}
            <AnimatedSection delay={0.2} className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                {aboutPageContent.aboutUs.description}
              </p>
              <p className="text-gray-500 leading-relaxed">
                {aboutPageContent.aboutUs.mission}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-primary text-white font-semibold rounded-xl"
                >
                  Book an Appointment <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <AnimatedSection className="space-y-8">
              <div>
                <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
                  Our Services
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-2">
                  AI Solutions That
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gradient-purple leading-tight mb-2">
                  Drive Real
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
                  Business Results
                </h2>
              </div>

              {/* Service Cards */}
              <div className="space-y-6">
                {aboutPageContent.services.map((service, index) => (
                  <motion.div 
                    key={index} 
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      {index === 0 && <Phone className="w-5 h-5 text-[#0065F8]" />}
                      {index === 1 && <Workflow className="w-5 h-5 text-[#0065F8]" />}
                      {index === 2 && <Code className="w-5 h-5 text-[#0065F8]" />}
                      {index === 3 && <Users className="w-5 h-5 text-[#0065F8]" />}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">{service.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-primary text-white font-semibold rounded-xl"
                >
                  Book an Appointment <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </AnimatedSection>

            {/* Right - Stats */}
            <AnimatedSection delay={0.3} className="space-y-8">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-6"
              >
                {aboutPageContent.stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="glass-card rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gradient-purple mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Rating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0065F8] to-[#3B8BFF] border-2 border-black flex items-center justify-center"
                      >
                        <Star className="w-4 h-4 text-white fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <div className="text-white font-semibold">50+ Businesses Automated</div>
                    <div className="text-gray-500 text-sm">Trusted by growing companies</div>
                  </div>
                </div>
              </motion.div>
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gradient-purple mb-8 leading-tight">
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
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          className="absolute inset-0 gradient-purple-glow pointer-events-none" 
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
