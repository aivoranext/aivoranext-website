"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Building2,
  Clock,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { portfolioPageContent, ctaSection } from "@/lib/content";
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

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug;

  // Find the project by slug
  const project = portfolioPageContent.projects.find((p) => p.slug === slug);

  // If project not found, show error
  if (!project) {
    return (
      <main className="relative min-h-screen bg-[#050505] overflow-hidden">
        <Navbar currentPage="Portfolio" />
        <div className="flex flex-col items-center justify-center min-h-screen px-6">
          <h1 className="text-4xl font-medium text-white mb-4">
            Case Study Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The case study you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0065F8] text-white font-semibold rounded-lg hover:bg-[#3B8BFF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Find next and previous projects for navigation
  const currentIndex = portfolioPageContent.projects.findIndex(
    (p) => p.slug === slug
  );
  const prevProject =
    currentIndex > 0 ? portfolioPageContent.projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < portfolioPageContent.projects.length - 1
      ? portfolioPageContent.projects[currentIndex + 1]
      : null;

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Spotlight Effect */}
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar currentPage="Portfolio" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#0065F8]/10 text-[#3B8BFF] border border-[#0065F8]/20"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            {project.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mb-10"
          >
            {project.description}
          </motion.p>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-6 md:gap-10 mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#0065F8]" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Client</p>
                <p className="text-white font-medium">{project.client}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#0065F8]" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Industry</p>
                <p className="text-white font-medium">{project.industry}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#0065F8]" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Duration</p>
                <p className="text-white font-medium">{project.duration}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={1400}
              height={700}
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Challenge */}
            <AnimatedSection>
              <div className="mb-6">
                <span className="text-[#0065F8] text-sm uppercase tracking-[0.2em]">
                  The Challenge
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
                What problem did they face?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.challenge}
              </p>
            </AnimatedSection>

            {/* Solution */}
            <AnimatedSection delay={0.2}>
              <div className="mb-6">
                <span className="text-[#0065F8] text-sm uppercase tracking-[0.2em]">
                  Our Solution
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
                How did we solve it?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.solution}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-12 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <span className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-2 block">
              The Results
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
              Measurable <span className="text-gradient-blue">Impact</span>
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0065F8]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative glass-card rounded-2xl p-8 text-center border border-white/5 group-hover:border-[#0065F8]/30 transition-colors duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-blue mb-2">
                    {result.value}
                  </div>
                  <div className="text-white font-medium mb-1">
                    {result.metric}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {result.improvement}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="relative py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="relative glass-card rounded-2xl p-8 md:p-10 border border-white/5">
                <Quote className="w-10 h-10 text-[#0065F8]/30 mb-4" />
                <blockquote className="text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed mb-6">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0065F8] to-[#3B8BFF] flex items-center justify-center text-white font-bold text-lg">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {project.testimonial.author}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {project.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Technologies Used */}
      <section className="relative py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-4">
            <span className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-2 block">
              Tech Stack
            </span>
            <h2 className="text-xl md:text-2xl font-medium text-white">
              Technologies Used
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#0065F8]/30 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0065F8]" />
                <span className="text-white font-medium">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Navigation to other case studies */}
      {(prevProject || nextProject) && (
        <section className="relative py-6 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className={`flex ${prevProject && nextProject ? 'justify-between' : prevProject ? 'justify-start' : 'justify-end'} gap-6`}>
              {/* Previous */}
              {prevProject && (
                <Link
                  href={`/portfolio/${prevProject.slug}`}
                  className="group glass-card rounded-2xl p-5 border border-white/5 hover:border-[#0065F8]/30 transition-all flex-1 max-w-md"
                >
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous Case Study</span>
                  </div>
                  <h3 className="text-lg text-white font-medium group-hover:text-[#3B8BFF] transition-colors">
                    {prevProject.title}
                  </h3>
                </Link>
              )}

              {/* Next */}
              {nextProject && (
                <Link
                  href={`/portfolio/${nextProject.slug}`}
                  className="group glass-card rounded-2xl p-5 border border-white/5 hover:border-[#0065F8]/30 transition-all text-right flex-1 max-w-md"
                >
                  <div className="flex items-center justify-end gap-2 text-gray-500 text-sm mb-1">
                    <span>Next Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg text-white font-medium group-hover:text-[#3B8BFF] transition-colors">
                    {nextProject.title}
                  </h3>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-12 px-6">
        <AnimatedSection className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
            {ctaSection.caption}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 leading-tight">
            {ctaSection.title1}
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gradient-blue mb-6 leading-tight">
            {ctaSection.title2}
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
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
