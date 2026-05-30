# AivoraNext Repositioning & Honest Rebuild — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the AivoraNext website on an honest, Voice-AI-led foundation — remove all fabricated proof, install real anonymized insurance case studies, add a Live Demo / How-We-Work / Pilot-Offer narrative, and replace stock imagery with custom on-brand visuals.

**Architecture:** Content-driven Next.js 14 App Router site. Nearly all copy lives in `lib/content.js` (named exports consumed by pages). Most changes are edits to those exports plus targeted structural edits to `app/page.js` and `components/Navbar.js`/`Footer.js`. Imagery is generated with the `nano-banana-pro` skill (abstract brand visuals) and built as HTML→screenshot mockups (case studies), stored under `public/`.

**Tech Stack:** Next.js 14, React 18, Framer Motion, Tailwind CSS, Lucide React, `nano-banana-pro` (image gen), Playwright MCP (mockup screenshots).

**Spec:** `docs/superpowers/specs/2026-05-30-aivoranext-repositioning-design.md`

**Verification model:** There is no unit-test runner in this project (`package.json` scripts: `dev`, `build`, `start`, `lint`). Each task is verified with `npm run build` (must succeed) and, where relevant, a `grep` check confirming fabricated strings are gone. "Write the failing test" maps to "run a grep that currently finds the bad content (proving it's there), then remove it, then re-grep to prove it's gone."

---

## ⚠️ Anonymization scrub list (applies to EVERY task that writes copy or images)

Before any content or image is committed, confirm it contains **none** of: the real client/company name, product names (e.g. **"Verdin"**), carrier/provider names, third-party platform names (e.g. **"Applied"/"Applied Epic"**). All real work is framed generically as *"a US-based commercial insurance provider."* A final grep audit (Task 18) enforces this.

---

## File Structure

| File | Responsibility | Change |
|---|---|---|
| `lib/content.js` | All site copy (named exports) | Heavy edits + new exports (`liveDemoSection`, `howWeWorkSection`, `pilotOfferSection`); rewrite `portfolioPageContent`, `aboutPageContent`, `testimonialsSection` removal |
| `app/page.js` | Homepage composition | Remove trusted-brands marquee + testimonials; add Live Demo, How We Work, Pilot Offer; reorder |
| `components/Navbar.js` | Global nav + mega-menu + mobile menu | Update categories/mobileServices to Voice-led; drop Blog; replace featured images |
| `components/Footer.js` | Footer links/copy | Drop Blog link; update description; confirm/trim socials |
| `app/about/page.js` | About page | Consumes `aboutPageContent` (content-only change); verify no hardcoded fabricated strings |
| `app/portfolio/page.js` | Portfolio listing | Consumes `portfolioPageContent` (content-only change) |
| `app/portfolio/[slug]/page.js` | Case-study detail | Already guards `testimonial`; content-only change |
| `app/blog/page.js` | Blog index | Set to coming-soon (empty posts + copy tweak) |
| `app/contact/page.js` | Contact form | Consumes `contactPageContent` (content-only change) |
| `public/visuals/` | Generated abstract brand images | New assets |
| `public/cases/` | Anonymized case-study mockup screenshots | New assets |
| `public/og-image.png` | Social share card | New asset |

---

## Phase 1 — Honesty Fixes (truth before polish)

Goal: after this phase the site contains zero fabricated testimonials, clients, metrics, or borrowed logos — even before redesign polish.

### Task 1: Remove the fabricated testimonials section

**Files:**
- Modify: `lib/content.js` (`testimonialsSection` export)
- Modify: `app/page.js` (import + JSX usage)

- [ ] **Step 1: Prove the fabricated content exists**

Run: `grep -n "Sarah Mitchell\|Marcus Chen\|Jennifer Walsh\|PayGuard\|CloudSync" lib/content.js`
Expected: multiple matches (testimonials + portfolio). This confirms the targets are present.

- [ ] **Step 2: Delete the `testimonialsSection` export**

In `lib/content.js`, delete the entire `export const testimonialsSection = { ... };` block (the object titled "Real Results From Real Clients" with 6 testimonials).

- [ ] **Step 3: Remove the testimonials import in `app/page.js`**

In `app/page.js`, the import block from `@/lib/content` lists `testimonialsSection,`. Remove that one line. Also remove the unused component import:

```javascript
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
```

- [ ] **Step 4: Remove the testimonials JSX block in `app/page.js`**

Delete this block:

```javascript
      {/* Client Testimonials Section */}
      <AnimatedSection>
        <TestimonialsSection
          title={testimonialsSection.title}
          description={testimonialsSection.description}
          testimonials={testimonialsSection.testimonials}
        />
      </AnimatedSection>
```

- [ ] **Step 5: Build**

Run: `npm run build`
Expected: build succeeds (no reference errors to `testimonialsSection` or `TestimonialsSection`).

- [ ] **Step 6: Commit**

```bash
git add lib/content.js app/page.js
git commit -m "refactor: remove fabricated testimonials section"
```

---

### Task 2: Remove the "Trusted by brands worldwide" marquee

**Files:**
- Modify: `app/page.js` (marquee JSX + `heroTrustedBrands` usage)
- Modify: `lib/content.js` (`heroTrustedBrands`, `partnerLogos`, `trustedBrandsSection`)

The borrowed/implied client logos (SmartAI, Indemn, SageData, Ideal Electrical) imply relationships AivoraNext does not have. Remove the section.

- [ ] **Step 1: Remove the marquee JSX in `app/page.js`**

Delete the entire `{/* Trusted Brands Below Hero - Scrolling Marquee */}` `<section>...</section>` block (the one rendering `heroTrustedBrands.brands` in an `animate-marquee` track).

- [ ] **Step 2: Remove now-unused imports/exports**

In `app/page.js` import list remove `heroTrustedBrands,`. In `lib/content.js` delete the `heroTrustedBrands`, `partnerLogos`, and `trustedBrandsSection` exports (none are used elsewhere — verify next step).

- [ ] **Step 2b: Verify those exports are unused elsewhere**

Run: `grep -rn "heroTrustedBrands\|partnerLogos\|trustedBrandsSection" app components lib`
Expected: no matches after removal (only the deleted lines existed).

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: success.

- [ ] **Step 4: Commit**

```bash
git add app/page.js lib/content.js
git commit -m "refactor: remove borrowed-logo trust marquee"
```

---

### Task 3: Replace fabricated hero stats with honest, defensible ones

**Files:**
- Modify: `lib/content.js` (`heroStatsPanel`)

The current stats ("2+/100%/3x/98%") mix a contradiction and unprovable company-wide claims. Replace with real, defensible capability anchors. Note: `StatIcon` in `app/page.js` supports `Star, Flame, BadgeCheck, Phone, Clock, TrendingDown` (anything else falls back to `Sparkles`). Use only supported icons.

- [ ] **Step 1: Replace the `heroStatsPanel` export**

```javascript
// Hero stats panel — honest, defensible capability anchors
export const heroStatsPanel = {
  items: [
    { value: "8+", label: "Years Building Production AI", icon: "Star" },
    { value: "<1s", label: "Voice Agent Response Latency", icon: "Clock" },
    { value: "24/7", label: "Always-On Agent Coverage", icon: "Phone" },
  ],
  cta: {
    label: "CALL OUR DEMO AGENT",
    href: "#demo",
  },
};
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: success.

- [ ] **Step 3: Verify no "98%/50+/Smile" stat strings remain in the hero export**

Run: `grep -n "Client Satisfaction\|Automation Rate\|Smile" lib/content.js`
Expected: no matches inside `heroStatsPanel` (matches may still exist in `aboutPageContent`/`servicesSection` — those are fixed in Phase 2).

- [ ] **Step 4: Commit**

```bash
git add lib/content.js
git commit -m "feat: replace fabricated hero stats with honest capability anchors"
```

---

### Task 4: Hide the blog (no fake posts) and drop it from nav/footer

**Files:**
- Modify: `lib/content.js` (`blogPageContent.posts`, `navigation.navItems`, `footerLinks.templatePages`)
- Modify: `app/blog/page.js` (subtitle + empty-state copy → coming soon)

The 6 blog posts are fabricated. The blog page already renders gracefully with an empty `posts` array (featured map is empty; the grid shows the "No articles" empty state).

- [ ] **Step 1: Empty the posts array**

In `lib/content.js`, set `blogPageContent.posts` to `[]` (delete all 6 post objects, keep `hero` and `categories`).

- [ ] **Step 2: Remove Blog from primary nav**

In `lib/content.js` `navigation.navItems`, delete the line:

```javascript
    { name: "Blog", link: "/blog" },
```

- [ ] **Step 3: Remove Blog from footer template pages**

In `lib/content.js` `footerLinks.templatePages`, delete the line:

```javascript
    { name: "Blog", link: "/blog" },
```

- [ ] **Step 4: Update blog page copy to "coming soon"**

In `app/blog/page.js`, replace the hero subtitle paragraph text:

old:
```
            Expert insights on Voice AI, automation, and building AI-powered
            solutions. Learn from real implementations and industry best
            practices.
```
new:
```
            We&apos;re writing in-depth, no-fluff articles on Voice AI,
            agentic automation, and shipping AI to production. First posts
            are on the way.
```

And replace the empty-state paragraph:

old:
```
                No articles found in this category yet.
```
new:
```
                Articles are coming soon. In the meantime, see our work or book a call.
```

- [ ] **Step 5: Build**

Run: `npm run build`
Expected: success; `/blog` renders the coming-soon state with no post cards.

- [ ] **Step 6: Commit**

```bash
git add lib/content.js app/blog/page.js
git commit -m "refactor: hide blog until real posts exist; drop from nav/footer"
```

---

## Phase 2 — Content Rewrite (positioning + real case studies)

### Task 5: Rewrite core homepage copy exports for Voice-AI-led positioning

**Files:**
- Modify: `lib/content.js` (`siteConfig`, `heroContent`, `belowHeroStatement`, `aboutSection`, `servicesSection`, `ctaSection`, `contactSection`)

- [ ] **Step 1: Replace `siteConfig`**

```javascript
export const siteConfig = {
  name: "Aivoranext",
  logo: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765091977/Aivoranext2_uk7ol7.png",
  heroLogo:
    "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765091977/Aivoranext2_uk7ol7.png",
  compactLogo:
    "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765091977/Aivoranext2_uk7ol7.png",
  footerDesc:
    "AivoraNext is a custom AI studio specializing in production-grade Voice AI agents. We design, build, deploy, and operate AI systems — voice agents, custom AI agents, automation, and the software around them.",
  copyright: "© 2026 Aivoranext. All rights reserved.",
  tagline: "Voice AI Studio",
  year: "2026",
};
```

- [ ] **Step 2: Replace `heroContent`**

```javascript
export const heroContent = {
  badge: "Voice AI Studio",
  year: "2026",
  titleLine1: "Production-Grade Voice AI",
  titleLine2: "Agents,",
  titleLine3: "Inbound & Outbound",
  description:
    "AivoraNext is a custom AI studio. Bring your use case — we design, build, deploy, and operate the AI for you, with full performance reporting. Voice AI is our specialty.",
  primaryButton: "Call Our Demo Agent",
  secondaryButton: "Talk to an Engineer",
};
```

- [ ] **Step 3: Replace `belowHeroStatement`**

```javascript
export const belowHeroStatement = {
  badge: "Why AivoraNext",
  titleStrong:
    "We build production-grade Voice AI agents — handling real inbound and outbound conversations, not demos that break under load.",
  titleMuted:
    "And we don't stop at the build: we deploy, operate, and report on your AI so it keeps performing. Voice AI is our specialty; custom agents, automation, and software round out the studio.",
  cta: {
    label: "See How We Work",
    href: "#how-we-work",
  },
};
```

- [ ] **Step 4: Replace `aboutSection`** (homepage about block; image wired in Phase 5)

```javascript
export const aboutSection = {
  caption: "About AivoraNext",
  title1: "A Founder-Led",
  title2: "AI Studio",
  description:
    "AivoraNext is a founder-led AI studio run by senior engineers who have shipped conversational and Voice AI in production for regulated, high-stakes workflows.",
  subdescription:
    "You work directly with the people building your system — no agency layers, no markup, no hand-off to juniors. We design, build, deploy, and operate it end to end.",
  imageUrl: "/visuals/about-studio.png",
};
```

- [ ] **Step 5: Replace `servicesSection`** (Voice-led; honest `rating`; image wired in Phase 5)

```javascript
export const servicesSection = {
  caption: "Our Services",
  title1: "Voice AI First,",
  title2: "Full Studio Behind It",
  title3: "",
  services: [
    {
      icon: "Phone",
      title: "Voice AI Agents (Inbound & Outbound)",
      description:
        "Sub-second, natural voice agents for support, renewals, billing, qualification, and scheduling — with DTMF, audit logging, and live handoff.",
    },
    {
      icon: "Bot",
      title: "Custom AI Agents",
      description:
        "Autonomous, tool-using agents that read documents, call APIs, and complete multi-step workflows with humans in the loop.",
    },
    {
      icon: "Workflow",
      title: "Automation & Agentic RPA",
      description:
        "Document and email automation plus agentic operators that drive existing portals and tools end to end.",
    },
    {
      icon: "Code",
      title: "Custom AI Software",
      description:
        "AI-native SaaS and web apps, RAG knowledge systems, APIs, and integrations — built to production standards.",
    },
  ],
  buttonText: "Explore All Services",
  rating: "Production AI for regulated industries",
  imageUrl: "/visuals/services-team.png",
};
```

- [ ] **Step 6: Replace `ctaSection`** (pilot-offer framing)

```javascript
export const ctaSection = {
  caption: "Start With a Pilot",
  title1: "A Working AI Agent",
  title2: "in 2–3 Weeks",
  description:
    "Start with a fixed-fee pilot: a working agent in your environment, tied to one success metric. Continue on a build-and-operate retainer or walk away.",
  buttonText: "Book a Pilot Call",
};
```

- [ ] **Step 7: Replace `contactSection.formFields.serviceInterest`** (Voice-led options)

In the `contactSection` export, replace the `serviceInterest` array with:

```javascript
    serviceInterest: [
      "Primary Interest",
      "Voice AI Agents",
      "Custom AI Agents",
      "Automation & RPA",
      "Custom AI Software",
    ],
```

- [ ] **Step 8: Build**

Run: `npm run build`
Expected: success.

- [ ] **Step 9: Commit**

```bash
git add lib/content.js
git commit -m "feat: rewrite homepage copy for Voice-AI-led studio positioning"
```

---

### Task 6: Rewrite `featureCards`, `hireUsSection` services, and `faqSection`

**Files:**
- Modify: `lib/content.js` (`featureCards`, `hireUsSection.services`, `faqSection`)

- [ ] **Step 1: Replace `featureCards`** (Voice first; 5 honest cards pointing at existing service routes)

```javascript
export const featureCards = [
  {
    tag: "Voice AI",
    title: "Voice AI Agents",
    description:
      "Inbound and outbound voice agents that hold natural, sub-second conversations — renewals, billing, support, qualification, and scheduling — with DTMF and live handoff.",
    badges: ["Inbound & Outbound", "Sub-second Latency", "Audit Logging"],
    link: "/services/voice-ai",
    buttonText: "Explore Voice AI",
  },
  {
    tag: "AI Agents",
    title: "Custom AI Agents",
    description:
      "Autonomous, tool-using agents that read documents, call your APIs, and complete multi-step workflows — with humans in the loop where it matters.",
    badges: ["Tool Use", "Multi-Step", "Human-in-Loop"],
    link: "/services/custom-software",
    buttonText: "Build an Agent",
  },
  {
    tag: "Automation",
    title: "Automation & Agentic RPA",
    description:
      "Document and email automation plus agentic operators that drive existing portals and internal tools end to end.",
    badges: ["Document AI", "Email Agents", "Portal Automation"],
    link: "/services/automation",
    buttonText: "Automate Workflows",
  },
  {
    tag: "Software",
    title: "Custom AI Software",
    description:
      "AI-native SaaS and web apps, RAG knowledge systems, APIs, and integrations — built to production standards from day one.",
    badges: ["AI SaaS", "RAG Systems", "Integrations"],
    link: "/services/custom-software",
    buttonText: "Build Software",
  },
  {
    tag: "Design",
    title: "Product & UI/UX Design",
    description:
      "The interface and experience layer around your AI — research, design systems, and high-fidelity product design.",
    badges: ["UX Research", "Design Systems", "Prototyping"],
    link: "/services/ui-ux-design",
    buttonText: "Explore Design",
  },
];
```

- [ ] **Step 2: Replace `hireUsSection.services`** (keep the `alternatives` array as-is; it is generic, not fabricated)

Replace only the `services: [ ... ]` array inside `hireUsSection` with:

```javascript
  services: [
    {
      icon: "Phone",
      title: "Voice AI Agents",
      description:
        "Inbound & outbound voice agents that handle real conversations 24/7 — built for production, not demos.",
    },
    {
      icon: "Bot",
      title: "Custom AI Agents & Automation",
      description:
        "Document/email agents and agentic operators that complete multi-step work and drive your existing tools.",
    },
    {
      icon: "Server",
      title: "Build & Operate",
      description:
        "We don't just ship and leave — we deploy, monitor, and report on your AI so it keeps performing.",
    },
    {
      icon: "Code",
      title: "Custom AI Software",
      description:
        "AI-native SaaS, RAG systems, and integrations engineered to production standards.",
    },
  ],
```

- [ ] **Step 3: Replace `faqSection`** (real-objection FAQ)

```javascript
export const faqSection = {
  caption: "FAQ",
  title1: "Common",
  title2: "Questions",
  description:
    "Straight answers about working with a focused, founder-led AI studio.",
  subdescription:
    "Still have questions? Book a call and talk directly to an engineer.",
  items: [
    {
      question: "You're a newer studio — why work with you?",
      answer:
        "You work directly with senior engineers who've shipped Voice AI and agentic systems in production for regulated workflows — no agency layers, no markup, no hand-off to juniors. You get specialist depth and speed instead of a generalist account team.",
    },
    {
      question: "How do I know the agent will actually work?",
      answer:
        "Two ways. First, call our live demo agent and judge it yourself. Second, we start with a fixed-fee pilot tied to one concrete success metric in your environment — so you see it working before any larger commitment.",
    },
    {
      question: "Can we start small?",
      answer:
        "Yes — that's the point of the pilot. A working agent in 2–3 weeks, fixed fee, one defined success metric. If it delivers, we continue on a build-and-operate retainer. If not, you walk away.",
    },
    {
      question: "How does build-and-operate pricing work?",
      answer:
        "A one-time build fee to design and ship the system, then a monthly retainer to operate it — monitoring, tuning, reporting, and improvements. You can also take delivery and run it yourself if you prefer.",
    },
    {
      question: "What does “operate” actually include?",
      answer:
        "Production monitoring, conversation/quality review, prompt and flow tuning, model and cost optimization, and a regular performance report. Your agent keeps improving instead of going stale after launch.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes. We integrate with CRMs, calendars, payment systems, telephony, email, and custom/internal APIs. Agentic operators can also drive existing web portals when no API exists.",
    },
  ],
};
```

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: success. (Note: `hireUsSection.services` uses icons `Phone, Bot, Server, Code` — all already mapped in `app/page.js`.)

- [ ] **Step 5: Commit**

```bash
git add lib/content.js
git commit -m "feat: rewrite feature cards, why-us services, and FAQ for honest positioning"
```

---

### Task 7: Add new content exports — Live Demo, How We Work, Pilot Offer

**Files:**
- Modify: `lib/content.js` (append three new exports)

- [ ] **Step 1: Append `liveDemoSection`, `howWeWorkSection`, `pilotOfferSection`**

Add at the end of `lib/content.js`:

```javascript
// Live Demo section (homepage) — wired to a real number/widget when available.
// If `phoneNumber` is empty string, the UI shows the "book a live demo" fallback.
export const liveDemoSection = {
  caption: "See It, Don't Read About It",
  title1: "Talk to a Live",
  title2: "Voice AI Agent",
  description:
    "The fastest way to judge a Voice AI team is to talk to their agent. Call the number below and have a real conversation — no forms, no waiting.",
  phoneNumber: "", // e.g. "+1 (555) 010-0101" — leave empty until provisioned
  phoneNote: "Available 24/7. Standard call rates apply.",
  fallbackLabel: "Book a Live Demo",
  fallbackHref: "/contact",
  agents: [
    {
      name: "Inbound Support Agent",
      description:
        "Answers questions, looks things up, and routes or books — like a 24/7 front desk.",
    },
    {
      name: "Outbound Qualification Agent",
      description:
        "Runs discovery calls, qualifies prospects, and books meetings into a calendar.",
    },
  ],
};

// How We Work — the build-and-operate spine.
export const howWeWorkSection = {
  caption: "How We Work",
  title1: "Build and Operate,",
  title2: "End to End",
  description:
    "We don't hand you a prototype and disappear. We take your use case from first call to a production system we keep running.",
  steps: [
    {
      icon: "Target",
      title: "Discover",
      description:
        "Map the workflow, pain points, and the one metric that defines success.",
    },
    {
      icon: "MessageSquare",
      title: "Design",
      description:
        "Design the conversation flows and agent behavior around real edge cases.",
    },
    {
      icon: "Code",
      title: "Build",
      description:
        "Engineer the agent, integrations, memory, and tools to production standards.",
    },
    {
      icon: "Server",
      title: "Deploy",
      description:
        "Ship to production with monitoring, security controls, and audit logging.",
    },
    {
      icon: "Workflow",
      title: "Operate & Report",
      description:
        "Monitor, tune, and report on performance so the agent keeps improving.",
    },
  ],
};

// Pilot Offer — productized risk-reversal entry engagement.
export const pilotOfferSection = {
  caption: "Start With a Pilot",
  title1: "A Working Agent in",
  title2: "2–3 Weeks",
  description:
    "Lower the risk of working with a new studio. The pilot is a fixed-scope, fixed-fee engagement with a clear success metric — then continue or walk away.",
  features: [
    "Working AI agent in your environment in 2–3 weeks",
    "Fixed fee, fixed scope — no open-ended billing",
    "One defined success metric agreed up front",
    "Continue on a build-and-operate retainer, or walk away",
  ],
  cta: { label: "Book a Pilot Call", href: "/contact" },
};
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: success (new exports unused yet — fine).

- [ ] **Step 3: Commit**

```bash
git add lib/content.js
git commit -m "feat: add live-demo, how-we-work, and pilot-offer content"
```

---

### Task 8: Replace portfolio with 5 real anonymized case studies

**Files:**
- Modify: `lib/content.js` (`portfolioPageContent`)

All five derive from real work for *"a US-based commercial insurance provider."* No client names, no `Verdin`/`Applied`, no fabricated testimonial quotes (omit the `testimonial` field — the detail page guards it). Image paths point to `/cases/*.png`, generated in Phase 5.

- [ ] **Step 1: Replace the entire `portfolioPageContent` export**

```javascript
// Portfolio Page Content — real, anonymized insurance AI work.
export const portfolioPageContent = {
  hero: {
    badge: "Our Work",
    year: "2026",
    titleLine1: "Production AI,",
    titleLine2: "Real",
    titleLine3: "Outcomes",
  },
  projects: [
    {
      id: 1,
      slug: "ai-submission-intake",
      year: "2025",
      title: "AI Submission Intake",
      imageUrl: "/cases/submission-intake.png",
      description:
        "An email-driven agent that ingests insurance submissions, understands the documents, validates them, and generates carrier quotes — cutting submission handling from up to a day to minutes.",
      tags: ["AI Agents", "Automation", "Insurance"],
      link: "/portfolio/ai-submission-intake",
      client: "US-based commercial insurance provider",
      industry: "Insurance",
      duration: "Production engagement",
      challenge:
        "Underwriting teams manually reviewed every emailed submission attachment, interpreted the documents, and re-keyed the data into a carrier portal to request quotes. Each submission took roughly half a day to a full day, creating a backlog and a high error rate.",
      solution:
        "We built an email agent that automatically fetches attachments, reads and understands the documents, extracts and structures every required field into a review UI, and validates against underwriting rules. Submissions that violate rules are flagged for rejection with reasons; clean submissions are pushed to the quote phase, where the agent calls the carrier APIs to generate a quote ready for underwriter review.",
      results: [
        {
          metric: "Handling Time",
          value: "~5 min",
          improvement: "From half a day to a full day",
        },
        {
          metric: "Manual Re-keying",
          value: "Eliminated",
          improvement: "Auto-extracted into UI",
        },
        {
          metric: "Rule Validation",
          value: "Automated",
          improvement: "Auto-flags violations",
        },
        {
          metric: "Quoting",
          value: "API-driven",
          improvement: "Carrier quote auto-generated",
        },
      ],
      technologies: [
        "LangGraph",
        "Document AI",
        "Email Agent",
        "Carrier API Integration",
        "Python",
        "AWS",
      ],
    },
    {
      id: 2,
      slug: "agentic-web-operator",
      year: "2025",
      title: "Agentic Web Operator",
      imageUrl: "/cases/web-operator.png",
      description:
        "An agentic operator that logs into a carrier portal and completes 50–70-step manual workflows autonomously, driving cost per submission down to under a dollar.",
      tags: ["AI Agents", "Agentic RPA", "Insurance"],
      link: "/portfolio/agentic-web-operator",
      client: "US-based commercial insurance provider",
      industry: "Insurance",
      duration: "Production engagement",
      challenge:
        "A core operations workflow required staff to log into a third-party portal and perform 50–70 manual steps per activity to keep records in sync. It was slow, repetitive, and expensive to scale.",
      solution:
        "We built an agentic web operator — beyond traditional RPA — that logs into the portal, observes and understands the on-screen activities, and completes the multi-step workflow autonomously. The agent reasons about each activity rather than following brittle fixed scripts, so it adapts to variation in the flow.",
      results: [
        {
          metric: "Cost / Submission",
          value: "~$0.70–$1",
          improvement: "Down from manual labor cost",
        },
        {
          metric: "Steps Automated",
          value: "50–70",
          improvement: "Per activity, end to end",
        },
        {
          metric: "Operation",
          value: "Autonomous",
          improvement: "Reasoning, not fixed scripts",
        },
        {
          metric: "Throughput",
          value: "Scalable",
          improvement: "No added headcount",
        },
      ],
      technologies: [
        "Agentic RPA",
        "Browser Automation",
        "LLM Orchestration",
        "Python",
      ],
    },
    {
      id: 3,
      slug: "voice-renewal-billing-agent",
      year: "2025",
      title: "Voice Renewal & Billing Agent",
      imageUrl: "/cases/voice-renewal.png",
      description:
        "An inbound/outbound voice agent that handles policy renewals and billing questions with DTMF input and full audit logging.",
      tags: ["Voice AI", "Insurance"],
      link: "/portfolio/voice-renewal-billing-agent",
      client: "US-based commercial insurance provider",
      industry: "Insurance",
      duration: "Production engagement",
      challenge:
        "Routine renewal and billing calls consumed staff time and were hard to cover around the clock, while regulated workflows demanded reliable logging and accuracy.",
      solution:
        "We built a voice agent that handles the renewal conversation end to end and answers billing and account questions, with DTMF capture for sensitive input and complete audit logging of every interaction. The agent routes complex or sensitive cases to a human with full context.",
      results: [
        {
          metric: "Availability",
          value: "24/7",
          improvement: "No staffing gaps",
        },
        {
          metric: "Response Latency",
          value: "<1s",
          improvement: "Natural conversation",
        },
        {
          metric: "Audit Logging",
          value: "Complete",
          improvement: "Every interaction logged",
        },
        {
          metric: "Escalation",
          value: "Context-aware",
          improvement: "Warm handoff to staff",
        },
      ],
      technologies: [
        "LiveKit",
        "Twilio",
        "DTMF",
        "ElevenLabs",
        "Deepgram",
        "LLM Orchestration",
      ],
    },
    {
      id: 4,
      slug: "automated-policy-purchase",
      year: "2025",
      title: "End-to-End Automated Policy Purchase",
      imageUrl: "/cases/policy-purchase.png",
      description:
        "A conversational agent that sells a policy end to end — validating inputs, recommending coverage, updating quotes mid-conversation, and taking payment inline.",
      tags: ["AI Agents", "Conversational AI", "Insurance"],
      link: "/portfolio/automated-policy-purchase",
      client: "US-based commercial insurance provider",
      industry: "Insurance",
      duration: "Production engagement",
      challenge:
        "Manual quoting, complex policy rules, and high drop-off during purchase created inefficiency and lost revenue.",
      solution:
        "We built a conversational AI agent that runs the full policy purchase: it validates user inputs in real time, recommends coverage based on the user's profile, updates the quote at any point in the conversation without restarting the flow, and processes payment inline via Stripe — all without human intervention.",
      results: [
        {
          metric: "Purchase Flow",
          value: "100%",
          improvement: "End-to-end automated",
        },
        {
          metric: "Human Dependency",
          value: "Zero",
          improvement: "Quote to payment autonomous",
        },
        {
          metric: "Conversions",
          value: "3x faster",
          improvement: "Enquiry to purchase",
        },
        {
          metric: "Quote Updates",
          value: "Live",
          improvement: "No flow restart",
        },
      ],
      technologies: [
        "Conversational AI",
        "LLM Orchestration",
        "Stripe",
        "Real-Time Validation",
      ],
    },
    {
      id: 5,
      slug: "no-code-ai-agent-platform",
      year: "2025",
      title: "No-Code AI Agent Platform",
      imageUrl: "/cases/no-code-platform.png",
      description:
        "A SaaS platform that lets insurance teams design and deploy multi-channel AI agents without code, with human handoff and continuous improvement from feedback.",
      tags: ["Platform", "AI Agents", "No-Code"],
      link: "/portfolio/no-code-ai-agent-platform",
      client: "US-based commercial insurance provider",
      industry: "Insurance",
      duration: "Production engagement",
      challenge:
        "Teams wanted to launch and iterate on AI agents without waiting on engineering for every change, while keeping quality and control.",
      solution:
        "We built a no-code platform where teams design and deploy AI agents across web, WhatsApp, and Slack. It includes intelligent human handoff with full conversation context and real-time monitoring, plus a reinforcement-learning-from-feedback loop that continuously improves agent responses.",
      results: [
        {
          metric: "Deployment",
          value: "No-code",
          improvement: "No engineering per change",
        },
        {
          metric: "Channels",
          value: "Web · WhatsApp · Slack",
          improvement: "Multi-channel reach",
        },
        {
          metric: "Handoff",
          value: "Context-aware",
          improvement: "Full conversation context",
        },
        {
          metric: "Quality",
          value: "Improves over time",
          improvement: "Feedback-driven (RLHF)",
        },
      ],
      technologies: [
        "React.js",
        "Node.js",
        "LangChain",
        "RLHF",
        "Multi-Channel",
        "AWS",
      ],
    },
  ],
  stats: [
    { value: "5", label: "Production AI Systems Shipped" },
    { value: "Insurance", label: "Deep Domain Focus" },
    { value: "Build + Operate", label: "End-to-End Delivery" },
    { value: "24/7", label: "Always-On Agents" },
  ],
};
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: success.

- [ ] **Step 3: Verify fabricated portfolio strings are gone**

Run: `grep -n "PayGuard\|CloudSync\|Sterling\|MedCare\|Premier Properties\|TechScale\|Verdin\|Applied Epic" lib/content.js`
Expected: no matches.

- [ ] **Step 4: Commit**

```bash
git add lib/content.js
git commit -m "feat: replace portfolio with 5 real anonymized insurance case studies"
```

---

### Task 9: Rewrite About page content (founder-led studio, real stack, real case studies)

**Files:**
- Modify: `lib/content.js` (`aboutPageContent`)

- [ ] **Step 1: Replace `aboutPageContent.aboutUs`, `stats`, `techStack`, `caseStudies`, and `imageUrl`**

Replace the `imageUrl` value with `"/visuals/about-hero.png"`.

Replace `aboutUs`:

```javascript
  aboutUs: {
    caption: "Who We Are",
    title: "A Founder-Led AI Studio",
    description:
      "AivoraNext is a founder-led AI studio run by senior engineers. We specialize in production-grade Voice AI agents and the custom AI systems around them — agents, automation, and software.",
    mission:
      "Our team has shipped conversational and Voice AI in production for regulated, high-stakes insurance workflows — the kind where accuracy, auditability, and reliability are non-negotiable. We bring that same production bar to every engagement, and we operate what we build.",
  },
```

Replace `techStack`:

```javascript
  techStack: {
    aiFrameworks: ["LangGraph", "LangChain", "CrewAI", "Google Agent Toolkit"],
    voiceAI: ["LiveKit", "Twilio", "BlandAI", "Retell AI", "ElevenLabs", "Cartesia", "Deepgram", "AssemblyAI"],
    vectorDatabases: ["Pinecone", "Qdrant", "ChromaDB"],
    llmProviders: ["OpenAI", "Anthropic", "Azure OpenAI", "AWS Bedrock"],
    automation: ["n8n", "Make.com", "Custom APIs & Middleware"],
    languages: ["Python", "Node.js", "TypeScript", "Next.js", "React.js"],
    cloud: ["AWS", "Azure", "GCP"],
  },
```

Replace `stats`:

```javascript
  stats: [
    { value: "8+", label: "Years Building AI" },
    { value: "5", label: "Production Systems Shipped" },
    { value: "Build + Operate", label: "End-to-End Model" },
  ],
```

Replace `caseStudies` (homepage/about teasers — keep to the real, anonymized set):

```javascript
  caseStudies: [
    {
      title: "AI Submission Intake",
      description:
        "Email agent that reads submissions, validates them, and generates carrier quotes for a US-based insurance provider.",
      metrics: ["~Half-day → ~5 min", "No manual re-keying", "Auto rule-validation"],
    },
    {
      title: "Agentic Web Operator",
      description:
        "Autonomous operator completing 50–70-step portal workflows for a US-based insurance provider.",
      metrics: ["~$0.70–$1 per submission", "50–70 steps automated", "Reasoning, not scripts"],
    },
    {
      title: "Voice Renewal & Billing Agent",
      description:
        "Inbound/outbound voice agent for renewals and billing with DTMF and full audit logging.",
      metrics: ["24/7 availability", "<1s latency", "Complete audit logs"],
    },
  ],
```

Also review `aboutPageContent.services` (the 5-item list): ensure it matches the new positioning. Replace it with:

```javascript
  services: [
    {
      title: "Voice AI Agents",
      description:
        "Inbound and outbound voice agents for support, renewals, billing, qualification, and scheduling.",
    },
    {
      title: "Custom AI Agents",
      description:
        "Autonomous, tool-using agents that read documents, call APIs, and complete multi-step workflows.",
    },
    {
      title: "Automation & Agentic RPA",
      description:
        "Document/email automation and agentic operators that drive existing portals and tools.",
    },
    {
      title: "Custom AI Software",
      description:
        "AI-native SaaS, RAG systems, APIs, and integrations built to production standards.",
    },
    {
      title: "Build & Operate",
      description:
        "We deploy, monitor, tune, and report on your AI so it keeps performing after launch.",
    },
  ],
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: success.

- [ ] **Step 3: Verify no "8+ years of experience" company claim or fabricated industries line remains**

Run: `grep -n "8+ years of experience\|Banking, Healthcare, and Recruitment\|100% automation rates" lib/content.js`
Expected: no matches.

- [ ] **Step 4: Commit**

```bash
git add lib/content.js
git commit -m "feat: rewrite About content for founder-led studio with real stack and cases"
```

> **Note for executor:** `app/about/page.js` may render `aboutPageContent.techStack` by specific keys (e.g. `vectorDatabases`). Before building, open `app/about/page.js` and confirm which `techStack` keys it reads. The old shape had `aiFrameworks, voiceAI, vectorDatabases, llmProviders, languages, cloud`; this task adds `automation` and removes none of those keys except it keeps all originals. If the page maps a fixed list of keys, add an `automation` row to the page's render list. Verify with `npm run build` and a visual check of `/about`.

---

## Phase 3 — Structural Homepage Sections

### Task 10: Add the Live Demo section to the homepage

**Files:**
- Modify: `app/page.js` (import + new section after hero)

- [ ] **Step 1: Add imports**

In `app/page.js`, add `liveDemoSection, howWeWorkSection, pilotOfferSection` to the existing `@/lib/content` import. Ensure `PhoneCall` is available — add `PhoneCall` to the `lucide-react` import (the rest like `Phone, Check, ArrowRight` already exist).

- [ ] **Step 2: Insert the Live Demo `<section>` immediately after the closing `</section>` of the hero**

The hero section ends right before the (now-removed) trusted-brands marquee. Insert:

```javascript
      {/* Live Demo Section */}
      <section id="demo" className="relative py-24 px-6 section-gradient">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
            {liveDemoSection.caption}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-2">
            {liveDemoSection.title1}
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gradient-blue leading-tight mb-6">
            {liveDemoSection.title2}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            {liveDemoSection.description}
          </p>

          {liveDemoSection.phoneNumber ? (
            <div className="flex flex-col items-center gap-3 mb-12">
              <a
                href={`tel:${liveDemoSection.phoneNumber.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-3 px-10 py-5 btn-primary text-white text-xl font-semibold rounded-none"
              >
                <PhoneCall className="w-6 h-6" /> {liveDemoSection.phoneNumber}
              </a>
              <span className="text-gray-500 text-sm">{liveDemoSection.phoneNote}</span>
            </div>
          ) : (
            <div className="flex justify-center mb-12">
              <Link
                href={liveDemoSection.fallbackHref}
                className="inline-flex items-center gap-2 px-10 py-5 btn-primary text-white text-lg font-semibold rounded-none"
              >
                {liveDemoSection.fallbackLabel} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {liveDemoSection.agents.map((agent) => (
              <div
                key={agent.name}
                className="glass-card rounded-2xl p-6 text-left flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0065F8]/10 border border-[#0065F8]/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#0065F8]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{agent.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{agent.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
```

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: success.

- [ ] **Step 4: Commit**

```bash
git add app/page.js
git commit -m "feat: add live demo section with graceful phone-number fallback"
```

---

### Task 11: Add the How We Work section

**Files:**
- Modify: `app/page.js` (new section)

- [ ] **Step 1: Insert the How We Work `<section>` after the About section (`id="about"`) and before the Why-Hire-Us section**

```javascript
      {/* How We Work Section */}
      <section id="how-we-work" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              {howWeWorkSection.caption}
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              {howWeWorkSection.title1}{" "}
              <span className="text-gradient-blue">{howWeWorkSection.title2}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
              {howWeWorkSection.description}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {howWeWorkSection.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#0065F8] text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#0065F8]/10 border border-[#0065F8]/20 flex items-center justify-center">
                    {step.icon === "Target" && <Target className="w-5 h-5 text-[#0065F8]" />}
                    {step.icon === "MessageSquare" && <MessageSquare className="w-5 h-5 text-[#0065F8]" />}
                    {step.icon === "Code" && <Code className="w-5 h-5 text-[#0065F8]" />}
                    {step.icon === "Server" && <Server className="w-5 h-5 text-[#0065F8]" />}
                    {step.icon === "Workflow" && <Workflow className="w-5 h-5 text-[#0065F8]" />}
                  </div>
                </div>
                <h3 className="text-white font-medium mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
```

(All icons used — `Target, MessageSquare, Code, Server, Workflow` — are already imported in `app/page.js`.)

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: success.

- [ ] **Step 3: Commit**

```bash
git add app/page.js
git commit -m "feat: add How We Work (build-and-operate) section"
```

---

### Task 12: Add the Pilot Offer section

**Files:**
- Modify: `app/page.js` (new section before the FAQ section `id="faq"`)

- [ ] **Step 1: Insert the Pilot Offer `<section>` immediately before `{/* FAQ Section */}`**

```javascript
      {/* Pilot Offer Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="glass-card rounded-3xl p-10 md:p-14">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              {pilotOfferSection.caption}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-2">
              {pilotOfferSection.title1}
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gradient-blue leading-tight mb-6">
              {pilotOfferSection.title2}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mb-8">
              {pilotOfferSection.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {pilotOfferSection.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0065F8] shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={pilotOfferSection.cta.href}
                className="inline-flex items-center gap-2 px-10 py-4 btn-primary text-white font-semibold rounded-none"
              >
                {pilotOfferSection.cta.label} <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
```

(`Check` and `ArrowRight` are already imported.)

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: success.

- [ ] **Step 3: Commit**

```bash
git add app/page.js
git commit -m "feat: add pilot-offer risk-reversal section"
```

---

## Phase 4 — Navigation, Footer, Contact

### Task 13: Update navigation mega-menu and mobile services (Voice-led; drop Hiring)

**Files:**
- Modify: `lib/content.js` (`navigation.navItems` Services categories + `featuredImages`)
- Modify: `components/Navbar.js` (`mobileServices` array)

- [ ] **Step 1: Replace the Services `categories` array**

In `lib/content.js` `navigation`, replace the four category objects under the Services item with:

```javascript
      categories: [
        {
          name: "Voice AI",
          services: [
            { name: "Inbound Voice Agents", link: "/services/voice-ai" },
            { name: "Outbound Voice Agents", link: "/services/voice-ai" },
            { name: "Renewals & Billing Agents", link: "/services/voice-ai" },
            { name: "Appointment & Scheduling", link: "/services/voice-ai" },
            { name: "IVR Replacement", link: "/services/voice-ai" },
          ],
          link: "/services/voice-ai",
        },
        {
          name: "AI Agents & Automation",
          services: [
            { name: "Custom AI Agents", link: "/services/custom-software" },
            { name: "Document & Email Automation", link: "/services/automation" },
            { name: "Agentic Web Operators (RPA)", link: "/services/automation" },
            { name: "RAG & Knowledge Systems", link: "/services/custom-software" },
            { name: "AI Integrations", link: "/services/custom-software" },
          ],
          link: "/services/automation",
        },
        {
          name: "Custom Software",
          services: [
            { name: "AI SaaS Development", link: "/services/custom-software" },
            { name: "Web App Development", link: "/services/custom-software" },
            { name: "API & Integrations", link: "/services/custom-software" },
            { name: "Cloud & Infrastructure", link: "/services/custom-software" },
          ],
          link: "/services/custom-software",
        },
        {
          name: "Design",
          services: [
            { name: "UI/UX Design", link: "/services/ui-ux-design" },
            { name: "Product Design", link: "/services/ui-ux-design" },
            { name: "Design Systems", link: "/services/ui-ux-design" },
            { name: "Prototyping", link: "/services/ui-ux-design" },
          ],
          link: "/services/ui-ux-design",
        },
      ],
```

- [ ] **Step 2: Replace `featuredImages`** with on-brand generated visuals (created in Phase 5)

```javascript
      featuredImages: [
        "/visuals/menu-voice.png",
        "/visuals/menu-agents.png",
        "/visuals/menu-automation.png",
        "/visuals/menu-software.png",
      ],
```

- [ ] **Step 3: Update `mobileServices` in `components/Navbar.js`**

```javascript
  const mobileServices = [
    { title: "Voice AI Agents", link: "/services/voice-ai" },
    { title: "Custom AI Agents", link: "/services/custom-software" },
    { title: "Automation & RPA", link: "/services/automation" },
    { title: "Custom AI Software", link: "/services/custom-software" },
    { title: "UI/UX Design", link: "/services/ui-ux-design" },
  ];
```

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: success.

- [ ] **Step 5: Commit**

```bash
git add lib/content.js components/Navbar.js
git commit -m "feat: refocus nav mega-menu and mobile menu on Voice-led services"
```

---

### Task 14: Update Footer (drop Blog, honest description, confirm socials)

**Files:**
- Modify: `components/Footer.js`
- Modify: `lib/content.js` (`footerLinks.social` if needed)

- [ ] **Step 1: Read the footer to see what it renders**

Run: `sed -n '1,200p' components/Footer.js`
Expected: identify where `footerLinks.social`, `footerLinks.templatePages`, and `siteConfig.footerDesc` render. (Blog was already removed from `templatePages` in Task 4.)

- [ ] **Step 2: Trim social links to only real, live profiles**

In `lib/content.js` `footerLinks.social`, keep only profiles that actually exist. If only LinkedIn is real, reduce to:

```javascript
  social: [
    { name: "LinkedIn", link: "https://linkedin.com/company/aivoranext" },
  ],
```

(If the founder confirms others exist, keep them. Do not link to non-existent profiles — honesty principle.)

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: success.

- [ ] **Step 4: Commit**

```bash
git add components/Footer.js lib/content.js
git commit -m "refactor: trim footer to honest, live links"
```

---

### Task 15: Verify Contact + About + Portfolio pages render the new content

**Files:**
- Inspect: `app/contact/page.js`, `app/about/page.js`, `app/portfolio/page.js`

These are content-driven; this task is a verification pass to catch any hardcoded fabricated strings in JSX.

- [ ] **Step 1: Grep the page files for fabricated strings**

Run: `grep -rn "50+\|98%\|8+ years\|Sarah Mitchell\|PayGuard\|Premier Properties\|Trusted by brands" app/contact app/about app/portfolio`
Expected: no matches. If any found, replace with the corresponding content-export reference or remove.

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: success.

- [ ] **Step 3: Commit (only if changes were needed)**

```bash
git add app/contact app/about app/portfolio
git commit -m "refactor: remove residual fabricated strings from page JSX"
```

---

## Phase 5 — Imagery

> All images must match brand: near-black `#050505` background, electric blue `#0065F8` accent; abstract, premium; **no text, no logos, no human faces, no cheesy robots**. Generate, eyeball, regenerate if off-brand.

### Task 16: Generate abstract brand visuals with nano-banana-pro

**Files:**
- Create: `public/visuals/hero-bg.png`, `about-studio.png`, `about-hero.png`, `services-team.png`, `menu-voice.png`, `menu-agents.png`, `menu-automation.png`, `menu-software.png`
- Create: `public/og-image.png`

- [ ] **Step 1: Invoke the nano-banana-pro skill for the hero/section visuals**

Use the `nano-banana-pro` skill. Generate each image with a brand-locked prompt. Base style appended to every prompt:

> "Abstract, premium, minimal tech visual. Near-black background (#050505). Electric blue (#0065F8) accent glow. No text, no words, no logos, no human faces, no robots. Subtle depth, soft gradients, high detail, 16:9 unless noted. Style reminiscent of Anthropic / Vercel / ElevenLabs brand art."

Per-image subject prompts:
- `about-studio.png` (16:9): "flowing blue voice/sound waveforms dissolving into fine particle streams"
- `about-hero.png` (16:9): "deep abstract network of glowing nodes and connection lines receding into darkness"
- `services-team.png` (4:3): "layered translucent glass panels with blue light passing through, abstract data flow"
- `menu-voice.png` (4:3): "abstract concentric voice waveform rings in electric blue"
- `menu-agents.png` (4:3): "abstract branching agent decision graph, glowing blue nodes"
- `menu-automation.png` (4:3): "abstract interlocking pipelines / flow arrows in blue gradient"
- `menu-software.png` (4:3): "abstract isometric code/circuit lattice, blue glow"
- `hero-bg.png` (16:9, optional): "very subtle dark abstract gradient field with faint blue nebula glow, mostly negative space"
- `og-image.png` (1200x630): "dark brand card background, abstract blue waveform on the right third, large empty space on the left for text" (text/logo overlaid later in Task 17)

Save outputs to `public/visuals/` (and `public/og-image.png`).

- [ ] **Step 2: Eyeball each image for brand fit and artifacts**

Open the generated PNGs. Reject and regenerate any with: visible text/letters, faces, robots, wrong color cast, or low quality. Repeat until all pass.

- [ ] **Step 3: Commit**

```bash
git add public/visuals public/og-image.png
git commit -m "feat: add custom abstract brand visuals (nano-banana-pro)"
```

---

### Task 17: Build + screenshot anonymized case-study mockups

**Files:**
- Create: `mockups/*.html` (throwaway HTML mockups — not shipped)
- Create: `public/cases/submission-intake.png`, `web-operator.png`, `voice-renewal.png`, `policy-purchase.png`, `no-code-platform.png`

Goal: real-looking, fully anonymized product UI for each case study. **No client/product/carrier names anywhere in the mockups.** Use generic labels ("Acme Insurance" is still a name — prefer neutral UI chrome with no brand, or "Commercial Insurance Portal").

- [ ] **Step 1: Create dark-themed HTML mockups**

For each case, create a standalone HTML file under `mockups/` styled to the brand (dark bg, blue accents) showing a believable but generic UI:
- `submission-intake.html` — an inbox/queue + a document-to-fields extraction review panel
- `web-operator.html` — a portal automation run log with steps progressing
- `voice-renewal.html` — a live call panel with transcript + DTMF keypad + audit log
- `policy-purchase.html` — a conversational purchase UI with a quote card + inline payment
- `no-code-platform.html` — a no-code agent builder canvas with channel toggles

Keep them self-contained (inline CSS). Use placeholder/lorem data only — no real names, numbers, or identifiers.

- [ ] **Step 2: Screenshot each mockup with Playwright MCP**

Use the Playwright MCP tools (`browser_navigate` to the local `file://` path, set viewport ~1440x900, `browser_take_screenshot`). Save each as the corresponding `public/cases/*.png`. (Alternatively use the `webapp-testing` skill.)

- [ ] **Step 3: Verify no identifying text is visible in any screenshot**

Open each PNG and confirm: no client name, no "Verdin", no carrier names, no "Applied". Fix the HTML and re-shoot if needed.

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: success (Next `<Image>` references to `/cases/*.png` now resolve).

- [ ] **Step 5: Commit**

```bash
git add public/cases mockups
git commit -m "feat: add anonymized case-study UI mockups"
```

> **Note:** confirm `next.config.js` allows local `/public` images (it does by default). The previous Unsplash/Cloudinary remote patterns are unaffected.

---

## Phase 6 — Final Verification

### Task 18: Anonymization + fabrication audit (whole repo)

**Files:** none (audit only; fix inline if anything found)

- [ ] **Step 1: Grep the entire app/content for the scrub list and fabricated proof**

Run:
```bash
grep -rni "verdin\|applied epic\|\bapplied\b\|premier properties\|techscale\|medcare\|sterling\|payguard\|cloudsync\|sarah mitchell\|marcus chen\|jennifer walsh\|amanda rodriguez\|david park\|robert sterling\|50+ businesses\|98% client\|8+ years of experience" app components lib public/cases 2>/dev/null
```
Expected: **no matches.** Investigate and fix every hit. (Note: `public/cases` are PNGs so grep won't read them — rely on the visual check in Task 17 Step 3 for images.)

- [ ] **Step 2: Confirm the real client name does not appear anywhere**

Run: `grep -rni "indemn" app components lib` (replace with the actual client name if different)
Expected: no matches (the logo file was already removed; ensure no copy references it).

- [ ] **Step 3: Year consistency sweep**

Run: `grep -rn "2025" app lib components | grep -vi "node_modules"`
Expected: review each; the brand year is 2026. Update stray 2025 copyright/badge strings (keep real project years inside case studies if accurate).

- [ ] **Step 4: Commit any fixes**

```bash
git add -A
git commit -m "chore: anonymization and consistency audit fixes"
```

---

### Task 19: Full build + manual smoke check

**Files:** none

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: success, no errors/warnings about missing exports or images.

- [ ] **Step 2: Run the dev server and smoke-check each route**

Run: `npm run dev` and visit `/`, `/about`, `/portfolio`, `/portfolio/ai-submission-intake`, `/services/voice-ai`, `/contact`, `/blog`.
Expected: all render; homepage shows Hero → Live Demo → How We Work → services → case studies → Pilot Offer → FAQ → CTA; no fabricated testimonials; images load; the "Call Our Demo Agent" CTA scrolls to `#demo`; `/blog` shows the coming-soon state.

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: no new errors (warnings acceptable if pre-existing).

- [ ] **Step 4: Final commit (if any fixes)**

```bash
git add -A
git commit -m "chore: final smoke-check fixes for repositioning rebuild"
```

---

## Self-Review (completed against the spec)

- **Honesty fixes** (spec §Cut) → Tasks 1–4 (testimonials, marquee, stats, blog) + Task 18 audit. ✓
- **Content rewrite / positioning** (spec §Positioning, §Restructure) → Tasks 5, 6, 9. ✓
- **5 real anonymized case studies** (spec §Content Map) → Task 8; About teasers in Task 9. ✓
- **Real tech stack** → Task 9. ✓
- **New sections: Live Demo, How We Work, Pilot Offer** (spec §Add) → Tasks 7, 10, 11, 12. ✓
- **Homepage reorder** → Tasks 1–2 (removals) + 10–12 (insertions in target order). ✓
- **Nav/Footer/Contact** → Tasks 13, 14, 15. ✓
- **Imagery: abstract brand visuals + real anonymized mockups + OG image** (spec §Imagery) → Tasks 16, 17. ✓
- **Anonymization scrub** (spec §Scrub list, success criteria) → Task 18. ✓
- **Build/responsive/no-console-errors** (spec success criteria) → Task 19. ✓
- **GTM plan** → documented in the spec (companion, not website code); no implementation task needed. ✓
- **Live demo telephony** → explicitly out of scope; Task 10 ships demo-ready with graceful fallback. ✓

Placeholder scan: no "TBD/TODO"; every code step shows complete code. Type/Name consistency: new exports `liveDemoSection`/`howWeWorkSection`/`pilotOfferSection` are defined in Task 7 and consumed with matching field names in Tasks 10–12; icon names used in sections are all present in `app/page.js` imports.
