# AivoraNext Website Content Overhaul Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the current generic AI agency website into a focused platform highlighting AivoraNext's core services: Voice AI Agents, Calling Agents, Workflow Automation, Custom Software Development, and AI Engineer Hiring.

**Architecture:** Content-driven update with new service pages, updated messaging across all existing pages, and improved navigation. All content is centralized in `lib/content.js` for easy management. New pages follow the existing Next.js App Router pattern with Framer Motion animations.

**Tech Stack:** Next.js 13+ (App Router), React, Framer Motion, Tailwind CSS, Lucide React icons

---

## Phase 1: Core Content Updates (P1 Tasks)

### Task 1: Update lib/content.js with new service-focused messaging

**Files:**
- Modify: `lib/content.js`

**Step 1: Update heroContent with Voice AI/Automation focus**

Replace lines 22-31 in `lib/content.js`:

```javascript
export const heroContent = {
  badge: "AI Automation Agency",
  year: "2025",
  titleLine1: "Voice AI Agents",
  titleLine2: "That Work",
  titleLine3: "24/7.",
  description: "Deploy intelligent Voice AI agents, automate workflows, and scale your business with custom AI solutions. From calling agents to workflow automation - we build AI that delivers results.",
  primaryButton: "See Our Services",
  secondaryButton: "Book a Demo",
};
```

**Step 2: Run to verify syntax**

Run: `npm run build 2>&1 | head -20`
Expected: No syntax errors

**Step 3: Update heroStatsPanel with relevant metrics**

Replace lines 42-53:

```javascript
export const heroStatsPanel = {
  items: [
    { value: "500K+", label: "AI Calls Handled", icon: "Phone" },
    { value: "85%", label: "Cost Reduction", icon: "TrendingDown" },
    { value: "24/7", label: "Agent Availability", icon: "Clock" },
  ],
  cta: {
    label: "GET A DEMO",
    href: "/contact",
  },
};
```

**Step 4: Update belowHeroStatement**

Replace lines 55-65:

```javascript
export const belowHeroStatement = {
  badge: "Why AivoraNext",
  titleStrong: "We build Voice AI agents that handle calls, automate workflows, and scale your operations.",
  titleMuted: "From customer support to sales calls - our AI works around the clock so your team can focus on growth.",
  cta: {
    label: "See How It Works",
    href: "/services",
  },
};
```

**Step 5: Update servicesSection with actual services**

Replace lines 98-118:

```javascript
export const servicesSection = {
  caption: "Our Services",
  title1: "AI Solutions That",
  title2: "Drive Real",
  title3: "Business Results",
  services: [
    {
      icon: "Phone",
      title: "Voice AI & Calling Agents",
      description: "Deploy AI agents that handle inbound/outbound calls 24/7. Perfect for customer support, appointment booking, lead qualification, and sales.",
    },
    {
      icon: "Workflow",
      title: "Workflow Automation",
      description: "Automate repetitive tasks and business processes. From document processing to data entry - we eliminate manual work.",
    },
    {
      icon: "Code",
      title: "Custom AI Software",
      description: "Bespoke AI solutions tailored to your specific needs. LLM integrations, RAG systems, and intelligent applications.",
    },
    {
      icon: "Users",
      title: "AI Engineer Hiring",
      description: "Access top AI talent on-demand. ML engineers, data scientists, and LLM specialists for contract or full-time roles.",
    },
  ],
  buttonText: "Explore All Services",
  rating: "50+ Businesses Automated",
  imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop&q=60",
};
```

**Step 6: Update featureCards with service highlights**

Replace lines 76-96:

```javascript
export const featureCards = [
  {
    tag: "Voice AI",
    title: "AI Agents That Handle Calls Like Humans",
    description: "Our Voice AI agents understand context, handle objections, and complete tasks. They schedule appointments, qualify leads, provide support, and never miss a call - even at 3 AM.",
    badges: ["24/7 Availability", "Multi-Language"],
  },
  {
    tag: "Automation",
    title: "Eliminate Manual Work Forever",
    description: "From document processing to CRM updates, our workflow automation handles the repetitive tasks that slow your team down. See 85% cost reduction on average.",
    badges: ["Process Automation", "API Integrations"],
  },
  {
    tag: "Talent",
    title: "AI Engineers On-Demand",
    description: "Need ML expertise? Our vetted AI engineers integrate with your team for projects or long-term roles. Specialists in LLMs, computer vision, NLP, and more.",
    hasButton: true,
    buttonText: "Hire AI Engineers",
  },
];
```

**Step 7: Update faqSection with Voice AI questions**

Replace lines 120-152:

```javascript
export const faqSection = {
  caption: "FAQ",
  title1: "Common",
  title2: "Questions",
  description: "Everything you need to know about our AI solutions and how they can transform your business.",
  subdescription: "Can't find what you're looking for? Book a call with our team.",
  items: [
    {
      question: "How do Voice AI agents handle different accents and languages?",
      answer: "Our Voice AI agents are trained on diverse speech patterns and support multiple languages. They use advanced speech recognition that adapts to accents, dialects, and speaking styles with 95%+ accuracy.",
    },
    {
      question: "What's the typical setup time for a calling agent?",
      answer: "Basic calling agents can be deployed in 2-3 weeks. This includes voice training, script development, integration with your phone system, and testing. More complex implementations with CRM integrations take 4-6 weeks.",
    },
    {
      question: "Can the AI agents integrate with our existing CRM and phone system?",
      answer: "Yes! We integrate with all major CRMs (Salesforce, HubSpot, Pipedrive) and phone systems (Twilio, Vonage, RingCentral). Custom integrations are also available for proprietary systems.",
    },
    {
      question: "What's the cost compared to human agents?",
      answer: "Most clients see 70-85% cost reduction compared to human agents. Voice AI handles unlimited concurrent calls at a fraction of the cost, with no training, turnover, or scaling limitations.",
    },
    {
      question: "How do you ensure call quality and compliance?",
      answer: "All calls are monitored for quality with real-time dashboards. We're compliant with TCPA, GDPR, and industry-specific regulations. Call recordings and transcripts are available for review.",
    },
    {
      question: "Do you offer trial periods for AI engineers?",
      answer: "Yes, we offer 2-week trial engagements for AI engineer placements. This lets you evaluate fit before committing to longer-term arrangements. No obligation if it's not the right match.",
    },
  ],
};
```

**Step 8: Update siteConfig tagline and footer**

Replace lines 1-10:

```javascript
export const siteConfig = {
  name: "Aivoranext",
  logo: "/aivoranext-logo.svg",
  heroLogo: "/aivoranext-logo.svg",
  compactLogo: "/aivoranext-logo.svg",
  footerDesc: "We deploy Voice AI agents, automate business workflows, and provide AI engineering talent. Helping businesses scale with intelligent automation that works 24/7.",
  copyright: "© 2025 Aivoranext Inc. All rights reserved.",
  tagline: "AI Automation Agency",
  year: "2025",
};
```

**Step 9: Build and verify**

Run: `npm run build`
Expected: Build succeeds

**Step 10: Commit**

```bash
git add lib/content.js
git commit -m "feat: Update homepage content for Voice AI and automation services

- Update hero messaging to focus on Voice AI agents
- Replace generic services with specific offerings
- Update FAQ with Voice AI specific questions
- Update stats with relevant metrics

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 2: Update app/page.js to support new service icons

**Files:**
- Modify: `app/page.js:7-18` (imports)
- Modify: `app/page.js:619-622` (icon rendering)

**Step 1: Update icon imports**

Add new icons to the import statement at line 7:

```javascript
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Flame,
  Lightbulb,
  Sparkles,
  Target,
  Star,
  Menu,
  X,
  Phone,
  Clock,
  TrendingDown,
  Workflow,
  Code,
  Users,
} from "lucide-react";
```

**Step 2: Update StatIcon function**

Replace the StatIcon function (around line 139-144):

```javascript
function StatIcon({ name }) {
  if (name === "Star") return <Star className="w-7 h-7 text-[#0065F8]" />;
  if (name === "Flame") return <Flame className="w-7 h-7 text-[#0065F8]" />;
  if (name === "BadgeCheck") return <BadgeCheck className="w-7 h-7 text-[#0065F8]" />;
  if (name === "Phone") return <Phone className="w-7 h-7 text-[#0065F8]" />;
  if (name === "Clock") return <Clock className="w-7 h-7 text-[#0065F8]" />;
  if (name === "TrendingDown") return <TrendingDown className="w-7 h-7 text-[#0065F8]" />;
  return <Sparkles className="w-7 h-7 text-[#0065F8]" />;
}
```

**Step 3: Update service icon rendering**

Find the services section icon rendering (around line 619-622) and update:

```javascript
<div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
  {service.icon === "Lightbulb" && <Lightbulb className="w-5 h-5 text-[#0065F8]" />}
  {service.icon === "Target" && <Target className="w-5 h-5 text-[#0065F8]" />}
  {service.icon === "Phone" && <Phone className="w-5 h-5 text-[#0065F8]" />}
  {service.icon === "Workflow" && <Workflow className="w-5 h-5 text-[#0065F8]" />}
  {service.icon === "Code" && <Code className="w-5 h-5 text-[#0065F8]" />}
  {service.icon === "Users" && <Users className="w-5 h-5 text-[#0065F8]" />}
</div>
```

**Step 4: Build and verify**

Run: `npm run build`
Expected: Build succeeds

**Step 5: Commit**

```bash
git add app/page.js
git commit -m "feat: Add new service icons for Voice AI and automation

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 3: Add navigation dropdown for Services

**Files:**
- Modify: `lib/content.js` (navigation)
- Modify: `app/page.js` (navigation component)

**Step 1: Update navigation in lib/content.js**

Replace lines 12-20:

```javascript
export const navigation = {
  navItems: [
    { name: "Home", link: "/" },
    {
      name: "Services",
      link: "/services",
      dropdown: [
        { name: "Voice AI Agents", link: "/services/voice-ai" },
        { name: "Workflow Automation", link: "/services/automation" },
        { name: "Custom AI Software", link: "/services/custom-software" },
        { name: "AI Engineer Hiring", link: "/services/ai-hiring" },
      ]
    },
    { name: "Portfolio", link: "/portfolio" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
};
```

**Step 2: Update navigation component in app/page.js**

Find the desktop nav section (around line 218-245) and replace with dropdown support:

```javascript
{/* Desktop Nav - Center */}
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
          <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium nav-link flex items-center gap-1">
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
      ) : isInternalRoute(item.link) ? (
        <Link
          href={item.link}
          className={`text-sm font-medium nav-link transition-colors ${
            item.name === "Home" ? "text-[#0065F8]" : "text-gray-400 hover:text-white"
          }`}
        >
          {item.name}
        </Link>
      ) : (
        <a
          href={item.link}
          className="text-gray-400 hover:text-white transition-colors text-sm font-medium nav-link"
        >
          {item.name}
        </a>
      )}
    </motion.div>
  ))}
</div>
```

**Step 3: Build and verify**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add lib/content.js app/page.js
git commit -m "feat: Add Services dropdown navigation with service links

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Phase 2: Create Service Pages (P2 Tasks)

### Task 4: Create main Services page

**Files:**
- Create: `app/services/page.js`

**Step 1: Create services directory and page**

```javascript
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Workflow,
  Code,
  Users,
  CheckCircle,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { siteConfig, navigation } from "@/lib/content";

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

const services = [
  {
    icon: Phone,
    title: "Voice AI & Calling Agents",
    description: "Deploy AI agents that handle inbound and outbound calls 24/7. From customer support to sales calls, our Voice AI understands context, handles objections, and completes tasks.",
    features: [
      "Inbound & outbound call handling",
      "Appointment scheduling & reminders",
      "Lead qualification & sales calls",
      "Customer support & FAQ handling",
      "Multi-language support",
      "CRM & phone system integration",
    ],
    link: "/services/voice-ai",
    cta: "Learn About Voice AI",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Eliminate manual work and scale operations with intelligent automation. We automate repetitive business processes so your team can focus on high-value work.",
    features: [
      "Document processing & data entry",
      "Email & communication automation",
      "CRM updates & lead routing",
      "Report generation & analytics",
      "Multi-system integrations",
      "Custom workflow design",
    ],
    link: "/services/automation",
    cta: "Explore Automation",
  },
  {
    icon: Code,
    title: "Custom AI Software",
    description: "Bespoke AI solutions built for your specific needs. From LLM integrations to intelligent applications, we build AI that solves your unique challenges.",
    features: [
      "Custom LLM implementations",
      "RAG systems & knowledge bases",
      "AI-powered applications",
      "API development & integration",
      "Machine learning models",
      "AI consulting & strategy",
    ],
    link: "/services/custom-software",
    cta: "Discuss Your Project",
  },
  {
    icon: Users,
    title: "AI Engineer Hiring",
    description: "Access top AI talent on-demand. Our vetted engineers integrate with your team for short-term projects or long-term roles.",
    features: [
      "ML Engineers & Data Scientists",
      "LLM & NLP Specialists",
      "Computer Vision Engineers",
      "MLOps & Infrastructure",
      "Contract & full-time options",
      "2-week trial engagements",
    ],
    link: "/services/ai-hiring",
    cta: "Find AI Talent",
  },
];

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isInternalRoute = (link) => link.startsWith('/') && !link.includes('#');

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-x-hidden">
      {/* Spotlight Effect */}
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />

      {/* Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5"
      >
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={180}
              height={24}
              className="h-6 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button className="text-[#0065F8] text-sm font-medium nav-link flex items-center gap-1">
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
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-[#0065F8] hover:bg-[#3B8BFF] text-white text-sm font-semibold rounded-lg transition-all"
          >
            Get In Touch
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="badge-pill inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full mb-8"
          >
            <span className="bg-[#0065F8] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              Services
            </span>
            <span className="text-white/80 text-sm font-medium">AI Solutions That Scale</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            AI Automation<br />
            <span className="text-gradient-blue">Built for Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            From Voice AI agents that handle calls 24/7 to workflow automation that eliminates manual work.
            We build AI solutions that deliver measurable ROI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0065F8] hover:bg-[#3B8BFF] text-white font-semibold rounded-lg transition-all"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/10 transition-all"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card rounded-3xl p-8 hover:border-[#0065F8]/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0065F8]/10 border border-[#0065F8]/20 flex items-center justify-center shrink-0">
                    <service.icon className="w-7 h-7 text-[#0065F8]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0065F8] shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#0065F8] font-medium hover:gap-3 transition-all"
                >
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss how AI can transform your operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#0065F8] hover:bg-[#3B8BFF] text-white font-semibold rounded-lg transition-all"
          >
            Schedule a Call <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </section>

      {/* Footer - simplified for brevity, would import shared component in real implementation */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/">
            <Image src={siteConfig.logo} alt={siteConfig.name} width={150} height={20} className="h-5 w-auto" />
          </Link>
          <p className="text-gray-600 text-sm">{siteConfig.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
```

**Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add app/services/page.js
git commit -m "feat: Create main Services page with all service offerings

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 5: Create Voice AI dedicated page

**Files:**
- Create: `app/services/voice-ai/page.js`

**Step 1: Create voice-ai directory and page**

Create `app/services/voice-ai/page.js` with dedicated Voice AI content including:
- Hero with Voice AI focus
- How it works section (6 steps)
- Use cases by industry
- Integration partners
- Pricing tiers (starter, professional, enterprise)
- Demo request CTA

*(Full code would be ~400 lines similar to services/page.js structure)*

**Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add app/services/voice-ai/page.js
git commit -m "feat: Create Voice AI agents dedicated landing page

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

### Task 6-8: Create remaining service pages

Following the same pattern as Task 5:
- `app/services/automation/page.js` - Workflow Automation page
- `app/services/custom-software/page.js` - Custom AI Software page
- `app/services/ai-hiring/page.js` - AI Engineer Hiring page

---

## Phase 3: Update Existing Pages (P2 Tasks)

### Task 9: Update About page content

**Files:**
- Modify: `lib/content.js` (aboutPageContent)
- Modify: `app/about/page.js`

Update to reflect AI automation expertise, team capabilities, and Voice AI focus.

---

### Task 10: Update Portfolio with AI automation case studies

**Files:**
- Modify: `lib/content.js` (portfolioPageContent)

Replace generic projects with:
1. Voice AI for Real Estate - Appointment booking agent
2. Calling Agent for Sales - Outbound lead qualification
3. Workflow Automation for Healthcare - Patient intake automation
4. Custom LLM for Legal - Document analysis system
5. AI Engineer Placement - ML team augmentation case study
6. Voice AI for E-commerce - Order status and returns handling

---

### Task 11: Update Contact form with service-specific fields

**Files:**
- Modify: `lib/content.js` (contactPageContent)
- Modify: `app/contact/page.js`

Add fields:
- Service interest (dropdown): Voice AI, Calling Agents, Automation, Custom Software, AI Hiring
- Current monthly call volume (for Voice AI leads)
- Timeline/urgency

---

### Task 12: Fix placeholder content and links

**Files:**
- Modify: `lib/content.js` (footerLinks, contactPageContent)

Update:
- Social media links with real URLs
- Contact info with real email/phone
- Legal page links

---

## Phase 4: Additional Enhancements (P3-P4 Tasks)

### Task 13-21: Additional improvements

- Add "How It Works" section to homepage
- Add Integration Partners section
- Add Use Cases by Industry section
- Update meta titles/descriptions for SEO
- Add trust badges and certifications
- Add Blog/Resources section (if needed)

---

## Testing Checklist

After each phase:
- [ ] `npm run build` succeeds
- [ ] All pages render without errors
- [ ] Navigation works correctly
- [ ] Mobile menu functions properly
- [ ] All links are valid
- [ ] No console errors

## Final Verification

- [ ] All 21 beads tasks addressed
- [ ] Content aligns with AivoraNext services
- [ ] All placeholder content removed
- [ ] SEO meta tags updated
- [ ] Mobile responsive verified
