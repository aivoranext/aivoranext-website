"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
  Phone,
  ChevronDown,
  Check,
  Clock,
  Globe,
  MessageSquare,
  Database,
  FileText,
  BarChart3,
  Mic,
  Users,
  Building2,
  Heart,
  ShoppingCart,
  Wallet,
  Monitor,
  UserCheck,
  Search,
  Palette,
  Link2,
  GraduationCap,
  TestTube,
  Rocket,
} from "lucide-react";
import {
  siteConfig,
  navigation,
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

// How It Works Steps
const howItWorksSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "Understand your call handling needs, volume, and specific requirements."
  },
  {
    icon: Palette,
    step: "02",
    title: "Voice Design",
    description: "Design the AI voice personality, tone, and conversation scripts."
  },
  {
    icon: Link2,
    step: "03",
    title: "Integration",
    description: "Connect to your phone system, CRM, and business tools."
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "Training",
    description: "Train the AI on your products, services, and company knowledge."
  },
  {
    icon: TestTube,
    step: "05",
    title: "Testing",
    description: "Comprehensive testing and refinement with real scenarios."
  },
  {
    icon: Rocket,
    step: "06",
    title: "Deployment",
    description: "Go live with monitoring, optimization, and ongoing support."
  }
];

// Use Cases by Industry
const useCases = [
  {
    icon: Building2,
    industry: "Real Estate",
    description: "Appointment booking, property inquiries, and lead qualification for agents and brokerages.",
    features: ["Schedule property viewings", "Answer listing questions", "Qualify buyer leads"]
  },
  {
    icon: Heart,
    industry: "Healthcare",
    description: "Patient intake, appointment reminders, and prescription refill requests.",
    features: ["HIPAA-compliant calls", "Appointment scheduling", "Patient follow-ups"]
  },
  {
    icon: ShoppingCart,
    industry: "E-commerce",
    description: "Order status updates, returns processing, and customer support.",
    features: ["Order tracking", "Return authorization", "Product inquiries"]
  },
  {
    icon: Wallet,
    industry: "Financial Services",
    description: "Account inquiries, fraud alerts, and payment reminders.",
    features: ["Balance inquiries", "Transaction alerts", "Payment collection"]
  },
  {
    icon: Monitor,
    industry: "SaaS",
    description: "Onboarding calls, support triage, and renewal reminders.",
    features: ["User onboarding", "Technical support", "Account renewals"]
  },
  {
    icon: UserCheck,
    industry: "Recruitment",
    description: "Candidate screening, interview scheduling, and follow-up calls.",
    features: ["Initial screening", "Interview coordination", "Offer follow-ups"]
  }
];

// Features Grid
const featuresData = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call. AI agents handle inquiries around the clock, including holidays."
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Communicate with customers in their preferred language with native fluency."
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Human-like dialogue with context awareness, emotion detection, and natural pauses."
  },
  {
    icon: Database,
    title: "CRM Integration",
    description: "Automatically log calls, update records, and trigger workflows in your CRM."
  },
  {
    icon: FileText,
    title: "Call Recording & Transcription",
    description: "Full recordings and AI-generated transcripts for every conversation."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Live dashboards showing call volume, outcomes, and performance metrics."
  },
  {
    icon: Mic,
    title: "Custom Voice Personalities",
    description: "Choose from professional voices or create a custom voice matching your brand."
  },
  {
    icon: Users,
    title: "Seamless Human Handoff",
    description: "Intelligent escalation to live agents when complex situations arise."
  }
];

// Integration Partners
const integrationPartners = {
  telephony: [
    { name: "Twilio", logo: "/integrations/twilio.svg" },
    { name: "Vonage", logo: "/integrations/vonage.svg" },
    { name: "RingCentral", logo: "/integrations/ringcentral.svg" }
  ],
  crm: [
    { name: "Salesforce", logo: "/integrations/salesforce.svg" },
    { name: "HubSpot", logo: "/integrations/hubspot.svg" },
    { name: "Pipedrive", logo: "/integrations/pipedrive.svg" }
  ],
  other: [
    { name: "Slack", logo: "/integrations/slack.svg" },
    { name: "Zapier", logo: "/integrations/zapier.svg" },
    { name: "Custom APIs", logo: "/integrations/api.svg" }
  ]
};

export default function VoiceAIPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5"
      >
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
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
                    <button className={`text-sm font-medium nav-link transition-colors flex items-center gap-1 ${
                      item.name === "Services" ? "text-[#0065F8]" : "text-gray-400 hover:text-white"
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
                      item.name === "Services" ? "text-[#0065F8]" : "text-gray-400 hover:text-white"
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
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-[#0065F8] hover:bg-[#3B8BFF] text-white text-sm font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(0,101,248,0.4)]"
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
                  <div className="space-y-4">
                    <span className={`block text-lg font-medium ${
                      item.name === "Services" ? "text-[#0065F8]" : "text-white"
                    }`}>
                      {item.name}
                    </span>
                    <div className="pl-4 space-y-3 border-l border-white/10">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-gray-400 text-base hover:text-[#0065F8] transition-colors"
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
                      item.name === "Services" ? "text-[#0065F8]" : "text-white hover:text-[#0065F8]"
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0065F8] text-white text-sm font-semibold rounded-lg"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </motion.header>

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
              Voice AI Agents
            </span>
            <span className="text-white/80 text-sm font-medium">24/7 Intelligent Calling</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            AI Agents That Handle{" "}
            <span className="text-gradient-blue">Calls Like Humans</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            24/7 call handling for appointment booking, customer support, sales calls, and more.
            Our Voice AI agents understand context, handle objections, and deliver results around the clock.
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
                Request a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 btn-secondary text-white font-semibold rounded-lg"
              >
                See Pricing
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

      {/* How It Works Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              From Discovery to{" "}
              <span className="text-gradient-blue">Deployment</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our proven 6-step process ensures a seamless implementation of your Voice AI system.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {howItWorksSteps.map((step, index) => (
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

      {/* Use Cases Section */}
      <section className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Voice AI for{" "}
              <span className="text-gradient-blue">Every Industry</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how businesses across industries are leveraging Voice AI to transform their operations.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-[#0065F8]" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#3B8BFF] transition-colors">
                  {useCase.industry}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
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

      {/* Features Grid Section */}
      <section id="features" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Enterprise-Grade{" "}
              <span className="text-gradient-blue">Capabilities</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to deploy intelligent voice agents at scale.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-2xl p-6 group text-center"
              >
                <div className="icon-container w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-[#0065F8]" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#3B8BFF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Partners Section */}
      <section className="relative py-24 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Integrations
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Works With Your{" "}
              <span className="text-gradient-blue">Existing Tools</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Seamlessly connect with your phone systems, CRMs, and business tools.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Telephony */}
            <AnimatedSection delay={0.1}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#0065F8]" />
                  Telephony
                </h3>
                <div className="space-y-4">
                  {integrationPartners.telephony.map((partner, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#0065F8]" />
                      </div>
                      <span className="text-gray-300 font-medium">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* CRM */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#0065F8]" />
                  CRM Systems
                </h3>
                <div className="space-y-4">
                  {integrationPartners.crm.map((partner, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <Database className="w-5 h-5 text-[#0065F8]" />
                      </div>
                      <span className="text-gray-300 font-medium">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Other Integrations */}
            <AnimatedSection delay={0.3}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                  <Link2 className="w-5 h-5 text-[#0065F8]" />
                  Other Tools
                </h3>
                <div className="space-y-4">
                  {integrationPartners.other.map((partner, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <Link2 className="w-5 h-5 text-[#0065F8]" />
                      </div>
                      <span className="text-gray-300 font-medium">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="relative py-32 px-6">
        <AnimatedSection className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-6">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
            Ready to Deploy
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gradient-blue mb-8 leading-tight">
            Voice AI?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a demo to see how our Voice AI agents can transform your call operations
            and deliver measurable ROI within weeks.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-12 py-5 btn-primary text-white text-lg font-semibold rounded-lg"
            >
              Schedule a Demo <ArrowRight className="w-5 h-5" />
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
