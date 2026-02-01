"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  Brain,
  BarChart3,
  MessageSquare,
  Eye,
  FileText,
  Settings,
  FileCheck,
  Users,
  UserCheck,
  Search,
  Handshake,
  HeartHandshake,
  Clock,
  Shield,
  Zap,
  CalendarCheck,
} from "lucide-react";
import {
  siteConfig,
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

// Talent Categories
const talentCategories = [
  {
    icon: Brain,
    title: "ML Engineers",
    description: "Expert machine learning engineers for your AI projects.",
    features: ["TensorFlow", "PyTorch", "scikit-learn"]
  },
  {
    icon: BarChart3,
    title: "Data Scientists",
    description: "Transform data into actionable business insights.",
    features: ["Analytics", "Modeling", "Insights"]
  },
  {
    icon: MessageSquare,
    title: "LLM Specialists",
    description: "Experts in large language models and generative AI.",
    features: ["GPT", "Claude", "Fine-tuning", "RAG"]
  },
  {
    icon: Eye,
    title: "Computer Vision Engineers",
    description: "Build systems that can see and understand visual data.",
    features: ["Object detection", "Image processing", "Video analytics"]
  },
  {
    icon: FileText,
    title: "NLP Engineers",
    description: "Specialists in natural language processing and understanding.",
    features: ["Text processing", "Sentiment analysis", "Chatbots"]
  },
  {
    icon: Settings,
    title: "MLOps Engineers",
    description: "Deploy and scale ML models in production environments.",
    features: ["Pipelines", "Deployment", "Monitoring"]
  }
];

// Engagement Models
const engagementModels = [
  {
    icon: FileCheck,
    title: "Contract",
    description: "Project-based engagement with flexible duration.",
    features: ["Flexible duration", "Project-based", "Scalable team size"]
  },
  {
    icon: Users,
    title: "Full-time",
    description: "Direct hire placements for permanent positions.",
    features: ["Permanent placement", "Full benefits", "Long-term commitment"]
  },
  {
    icon: UserCheck,
    title: "Team Augmentation",
    description: "Extend your existing team with specialized talent.",
    features: ["Seamless integration", "Quick onboarding", "Flexible scaling"]
  },
  {
    icon: CalendarCheck,
    title: "2-Week Trial",
    description: "Evaluate fit before making a commitment.",
    features: ["Risk-free trial", "Performance evaluation", "No obligation"]
  }
];

// Our Process Steps
const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Requirements",
    description: "Define your needs and tech stack for the ideal candidate profile."
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Matching",
    description: "We match you with pre-vetted candidates from our talent pool."
  },
  {
    icon: Handshake,
    step: "03",
    title: "Interview",
    description: "You interview selected candidates to assess cultural fit."
  },
  {
    icon: Users,
    step: "04",
    title: "Onboarding",
    description: "Smooth integration with your team and existing workflows."
  },
  {
    icon: HeartHandshake,
    step: "05",
    title: "Support",
    description: "Ongoing relationship management and performance support."
  }
];

// Why Choose Us Benefits
const benefitsData = [
  {
    icon: Shield,
    title: "Pre-vetted Talent",
    description: "Rigorous technical screening ensures only top-tier candidates."
  },
  {
    icon: Zap,
    title: "Fast Matching",
    description: "Receive qualified candidates within 48 hours of your request."
  },
  {
    icon: Clock,
    title: "No Risk",
    description: "2-week trial periods to ensure the perfect fit for your team."
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "Dedicated account manager for continuous relationship management."
  }
];

export default function AIHiringPage() {
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
              AI Engineer Hiring
            </span>
            <span className="text-white/80 text-sm font-medium">Top AI Talent On-Demand</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            Top AI Talent{" "}
            <span className="text-gradient-blue">On-Demand</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            Access vetted ML engineers, data scientists, and LLM specialists.
            Build your AI team with pre-screened talent ready to deliver results from day one.
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
                Find AI Talent <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#talent-categories"
                className="inline-flex items-center gap-2 px-8 py-4 btn-secondary text-white font-semibold rounded-lg"
              >
                View Talent Pool
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

      {/* Talent Categories Section */}
      <section id="talent-categories" className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Talent Categories
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              AI Specialists for{" "}
              <span className="text-gradient-blue">Every Need</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From machine learning to MLOps, find the specialized talent your projects demand.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {talentCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-[#0065F8]" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#3B8BFF] transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs"
                    >
                      <Check className="w-3 h-3 text-[#0065F8]" />
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Engagement Models
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Flexible Hiring{" "}
              <span className="text-gradient-blue">Options</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the engagement model that best fits your project needs and timeline.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-2xl p-6 group text-center"
              >
                <div className="icon-container w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <model.icon className="w-7 h-7 text-[#0065F8]" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#3B8BFF] transition-colors">
                  {model.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {model.description}
                </p>
                <div className="space-y-2">
                  {model.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-[#0065F8] shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              From Requirements to{" "}
              <span className="text-gradient-blue">Onboarding</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our streamlined 5-step process ensures you get the right talent quickly and efficiently.
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
                <div className="absolute top-4 right-4 text-5xl font-bold text-white/5 group-hover:text-[#0065F8]/10 transition-colors">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-[#0065F8]" />
                  </div>
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

      {/* Why Choose Us Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              The Aivora{" "}
              <span className="text-gradient-blue">Advantage</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We make hiring AI talent simple, fast, and risk-free.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-2xl p-6 group text-center"
              >
                <div className="icon-container w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-[#0065F8]" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#3B8BFF] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
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
            Ready to Find Your
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gradient-blue mb-8 leading-tight">
            AI Engineer?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Start your search today and get matched with pre-vetted AI talent
            within 48 hours. No risk, no obligation.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-12 py-5 btn-primary text-white text-lg font-semibold rounded-lg"
            >
              Get Started <ArrowRight className="w-5 h-5" />
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
