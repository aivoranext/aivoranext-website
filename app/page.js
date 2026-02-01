"use client";

import React, { useState, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Flame,
  Lightbulb,
  Sparkles,
  Target,
  Star,
  Phone,
  Clock,
  TrendingDown,
  Workflow,
  Code,
  Users,
} from "lucide-react";
import {
  siteConfig,
  heroContent,
  heroStatsPanel,
  belowHeroStatement,
  aboutSection,
  featureCards,
  servicesSection,
  faqSection,
  ctaSection,
  footerLinks,
} from "@/lib/content";
import Navbar from "@/components/Navbar";

// Single word that animates based on scroll progress
function ScrollWord({ word, index, totalWords, scrollYProgress }) {
  // Calculate when this word should light up based on its position
  // Spread words across 0.1 to 0.7 of scroll progress so all complete before section leaves
  const startProgress = 0.1 + (index / totalWords) * 0.5;
  const endProgress = startProgress + 0.08;
  
  const opacity = useTransform(
    scrollYProgress,
    [0, startProgress, endProgress, 1],
    [0.2, 0.2, 1, 1]
  );

  return (
    <motion.span style={{ opacity }} className="inline text-white">
      {word}{" "}
    </motion.span>
  );
}

// Scroll-animated About Text Component - Word by word reveal based on scroll
function ScrollRevealText({ strongText, mutedText }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "center 0.3"]
  });
  
  const allText = strongText + " " + mutedText;
  const allWords = allText.split(' ');
  const totalWords = allWords.length;

  return (
    <div ref={containerRef} className="py-6">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.4] max-w-5xl mx-auto text-center">
        {/* All words animate from gray to white based on scroll */}
        {allWords.map((word, index) => (
          <ScrollWord
            key={`word-${index}`}
            word={word}
            index={index}
            totalWords={totalWords}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </p>
    </div>
  );
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
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

function StatIcon({ name }) {
  if (name === "Star") return <Star className="w-7 h-7 text-[#0065F8]" />;
  if (name === "Flame") return <Flame className="w-7 h-7 text-[#0065F8]" />;
  if (name === "BadgeCheck") return <BadgeCheck className="w-7 h-7 text-[#0065F8]" />;
  if (name === "Phone") return <Phone className="w-7 h-7 text-[#0065F8]" />;
  if (name === "Clock") return <Clock className="w-7 h-7 text-[#0065F8]" />;
  if (name === "TrendingDown") return <TrendingDown className="w-7 h-7 text-[#0065F8]" />;
  return <Sparkles className="w-7 h-7 text-[#0065F8]" />;
}

// 3D Floating Element Component
function Floating3DElement() {
  return (
    <div className="perspective-container absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
      <motion.div
        className="relative w-[300px] h-[300px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {/* Floating Orb 1 */}
        <div className="floating-orb w-32 h-32 top-0 right-0" style={{ animationDelay: '0s' }} />

        {/* Floating Orb 2 - smaller */}
        <div className="floating-orb w-20 h-20 bottom-10 left-10" style={{ animationDelay: '2s' }} />

        {/* Floating Orb 3 - smallest */}
        <div className="floating-orb w-12 h-12 top-1/2 left-0" style={{ animationDelay: '4s' }} />

        {/* Glowing ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#0065F8]/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner glowing ring */}
        <motion.div
          className="absolute inset-8 rounded-full border border-[#0065F8]/30"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#0065F8] blur-sm animate-pulse-glow" />
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const isInternalRoute = (link) => link.startsWith('/') && !link.includes('#');

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-x-hidden">
      {/* Spotlight Effect */}
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar currentPage="Home" />

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-start pt-32 md:pt-36 pb-20 md:pb-24 px-6"
      >
        {/* 3D Floating Element */}
        <Floating3DElement />

        <motion.div
          className="flex flex-col items-center text-center max-w-5xl mx-auto z-10"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="badge-pill flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full mb-10"
          >
            <span className="bg-[#0065F8] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              {heroContent.year}
            </span>
            <span className="text-white/80 text-sm font-medium">{heroContent.badge}</span>
          </motion.div>

          {/* Main Headline - Line 1 bright white, Line 2 slightly dimmer */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-medium text-white tracking-tight leading-[1.08] mb-2"
          >
            {heroContent.titleLine1}
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.08] mb-8"
          >
            <span className="text-white/90">{heroContent.titleLine2}</span>{" "}
            <span className="text-white/90">{heroContent.titleLine3}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            {heroContent.description}
          </motion.p>

        </motion.div>


        {/* Stats Panel - All in one single line with button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 w-full max-w-6xl mx-auto mt-auto mb-0"
        >
          <div className="flex flex-row flex-wrap items-center justify-center gap-8 md:gap-14">
            {heroStatsPanel.items.map((item) => (
              <div key={item.label} className="flex items-center gap-4 text-left">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <StatIcon name={item.icon} />
                </div>
                <div className="min-w-0">
                  <div className="text-3xl md:text-4xl font-bold text-white leading-none">{item.value}</div>
                  <div className="text-sm md:text-base font-medium text-white/60 leading-snug mt-1">{item.label}</div>
                </div>
              </div>
            ))}
            
            {/* CTA Button inline with stats */}
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={heroStatsPanel.cta.href}
                className="inline-flex items-center justify-center px-10 py-5 bg-white hover:bg-gray-100 text-gray-900 text-base font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                {heroStatsPanel.cta.label}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Statement Section (below hero) - About Us with scroll-driven text animation */}
      <section className="relative min-h-[45vh] flex flex-col items-center justify-center py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small pill badge with glowing dot */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 badge-pill px-4 py-2 rounded-full mb-8"
          >
            <span className="w-7 h-7 rounded-full bg-[#0065F8]/20 border border-[#0065F8]/30 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0065F8]" />
            </span>
            <span className="text-white/90 text-sm font-medium">{belowHeroStatement.badge}</span>
          </motion.div>

          {/* Big statement with scroll-driven dim → bright animation */}
          <ScrollRevealText
            strongText={belowHeroStatement.titleStrong}
            mutedText={belowHeroStatement.titleMuted}
          />

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-10 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.03, y: -2 }} 
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={belowHeroStatement.cta.href}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#0065F8] text-white font-medium shadow-[0_0_30px_rgba(0,101,248,0.45)] hover:shadow-[0_0_40px_rgba(0,101,248,0.6)] hover:bg-[#3B8BFF] transition-all"
              >
                {belowHeroStatement.cta.label}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#0065F8]/20 animate-float" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-white/10 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 rounded-full bg-[#0065F8]/15 animate-float" style={{ animationDelay: '2s' }} />
        </div>

      </section>

      {/* About Section with Image */}
      <section id="about" className="relative -mt-24 pt-28 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Banner with Button */}
          <div className="relative mb-24">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-8">
              <AnimatedSection className="max-w-2xl">
                <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">{aboutSection.caption}</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                  {aboutSection.title1}<br />
                  <span className="text-gradient-blue">{aboutSection.title2}</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-10 py-4 btn-primary text-white font-semibold rounded-lg"
                  >
                    {heroContent.primaryButton} <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Image with glow */}
            <AnimatedSection delay={0.3}>
              <motion.div 
                className="relative rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={aboutSection.imageUrl}
                  alt="About Aivoranext"
                  width={1200}
                  height={600}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </motion.div>
            </AnimatedSection>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">{aboutSection.caption}</p>
              <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                {aboutSection.title1} <span className="text-gradient-blue">{aboutSection.title2}</span>
              </h3>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                {aboutSection.description}
              </p>
              <p className="text-gray-500 leading-relaxed">
                {aboutSection.subdescription}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section id="services" className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-3xl p-8"
              >
                {/* Tag */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#0065F8] text-sm font-semibold uppercase tracking-wider">
                    {card.tag}
                  </span>
          </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-medium text-white mb-4 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Badges or Button */}
                {card.badges && (
                  <div className="flex flex-wrap gap-2">
                    {card.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="px-4 py-2 rounded-lg text-xs font-medium bg-white/5 text-gray-300 border border-white/10"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                {card.hasButton && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 btn-primary text-white text-sm font-semibold rounded-lg"
                    >
                      {card.buttonText} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section with Stats */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <AnimatedSection className="space-y-8">
              <div>
                <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
                  {servicesSection.caption}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-2">
                  {servicesSection.title1}
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gradient-blue leading-tight mb-2">
                  {servicesSection.title2}
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
                  {servicesSection.title3}
              </h2>
              </div>

              {/* Service Cards */}
              <div className="space-y-6">
                {servicesSection.services.map((service, index) => (
                  <motion.div 
                    key={index} 
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      {service.icon === "Lightbulb" && <Lightbulb className="w-5 h-5 text-[#0065F8]" />}
                      {service.icon === "Target" && <Target className="w-5 h-5 text-[#0065F8]" />}
                      {service.icon === "Phone" && <Phone className="w-5 h-5 text-[#0065F8]" />}
                      {service.icon === "Workflow" && <Workflow className="w-5 h-5 text-[#0065F8]" />}
                      {service.icon === "Code" && <Code className="w-5 h-5 text-[#0065F8]" />}
                      {service.icon === "Users" && <Users className="w-5 h-5 text-[#0065F8]" />}
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
                  className="inline-flex items-center gap-2 px-10 py-4 btn-primary text-white font-semibold rounded-lg"
                >
                  {servicesSection.buttonText} <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </AnimatedSection>

            {/* Right - Image with Rating */}
            <AnimatedSection delay={0.3} className="relative">
              <motion.div 
                className="relative rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={servicesSection.imageUrl}
                  alt="Team Working"
                  width={600}
                  height={500}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </motion.div>

              {/* Rating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/80 backdrop-blur-xl px-5 py-3 rounded-lg border border-white/10"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B8BFF] to-[#0065F8] border-2 border-black flex items-center justify-center"
                    >
                      <Star className="w-3 h-3 text-white fill-current" />
            </div>
                  ))}
            </div>
                <span className="text-white text-sm font-medium">{servicesSection.rating}</span>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Header */}
            <AnimatedSection className="md:sticky md:top-32 h-fit">
              <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
                {faqSection.caption}
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-2">
                {faqSection.title1}
              </h2>
              <h2 className="text-4xl md:text-5xl font-light text-gradient-blue mb-6">
                {faqSection.title2}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                {faqSection.description}
              </p>
              <p className="text-gray-500 text-sm">
                {faqSection.subdescription}
              </p>
            </AnimatedSection>

            {/* Right - FAQ Items */}
            <div className="space-y-0">
              {faqSection.items.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="faq-item py-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-white font-medium text-lg group-hover:text-[#0065F8] transition-colors">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={`w-5 h-5 text-gray-500 ${openFaq === index ? "text-[#0065F8]" : ""}`} />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 leading-relaxed pt-4">{item.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 px-6">
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
              className="inline-flex items-center gap-2 px-12 py-5 btn-primary text-white text-lg font-semibold rounded-lg"
            >
              {ctaSection.buttonText} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </AnimatedSection>

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
                      {isInternalRoute(link.link) ? (
                        <Link
                          href={link.link}
                          className="text-gray-500 hover:text-white text-sm transition-colors"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.link}
                          className="text-gray-500 hover:text-white text-sm transition-colors"
                        >
                    {link.name}
                  </a>
                      )}
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
                    className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-5 py-3 text-sm outline-none focus:border-[#0065F8] transition-colors placeholder:text-gray-600"
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
