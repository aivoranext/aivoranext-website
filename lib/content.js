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

export const navigation = {
  navItems: [
    { name: "Home", link: "/" },
    {
      name: "Services",
      link: "/services",
      megaMenu: true,
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
      featuredImages: [
        "/visuals/menu-voice.png",
        "/visuals/menu-agents.png",
        "/visuals/menu-automation.png",
        "/visuals/menu-software.png",
      ],
    },
    { name: "Work", link: "/portfolio" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
};

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

// Statement section right below hero (Nubien-like)
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

// Why Hire Us Section
export const hireUsSection = {
  caption: "Why AivoraNext",
  title1: "Why Teams",
  title2: "Choose Us",
  description:
    "A focused, founder-led studio that ships production AI and stays on to run it. Here's what sets us apart.",
  cards: [
    {
      icon: "Users",
      title: "Senior engineers, direct access",
      description:
        "You work directly with the people building your system — no agency layers, no markup, no hand-off to juniors.",
    },
    {
      icon: "Server",
      title: "We build and operate",
      description:
        "We don't ship a prototype and disappear. We deploy, monitor, tune, and report — so your AI keeps performing.",
    },
    {
      icon: "Phone",
      title: "Real Voice AI depth",
      description:
        "Engineers who've shipped conversational and Voice AI in production for regulated, high-stakes workflows.",
    },
    {
      icon: "Zap",
      title: "Start with a pilot",
      description:
        "A working agent in your environment in 2–3 weeks, fixed fee, one success metric — then continue or walk away.",
    },
  ],
  cta: {
    label: "Book a Pilot Call",
    href: "/contact",
  },
};



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
      question: "What does \"operate\" actually include?",
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

export const ctaSection = {
  caption: "Start With a Pilot",
  title1: "A Working AI Agent",
  title2: "in 2–3 Weeks",
  description:
    "Start with a fixed-fee pilot: a working agent in your environment, tied to one success metric. Continue on a build-and-operate retainer or walk away.",
  buttonText: "Book a Pilot Call",
};

export const footerLinks = {
  templatePages: [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Work", link: "/portfolio" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
  social: [
    { name: "LinkedIn", link: "https://linkedin.com/company/aivoranext" },
  ],
  legal: [
    { name: "Terms of Service", link: "/terms" },
    { name: "Privacy Policy", link: "/privacy" },
  ],
};

export const contactSection = {
  title: "Ready to Architect the Future?",
  description:
    "The best time to build your AI advantage was yesterday. The second best time is now. Let's scope your pilot.",
  formFields: {
    name: "Name",
    email: "Work Email",
    company: "Company Name",
    serviceInterest: [
      "Primary Interest",
      "Voice AI Agents",
      "Custom AI Agents",
      "Automation & RPA",
      "Custom AI Software",
    ],
    message: "Briefly describe your use case or challenge",
  },
  submitButtonTop: "Request Strategic Briefing",
};

// About Page Content
export const aboutPageContent = {
  hero: {
    badge: "About AivoraNext",
    year: "2026",
    titleLine1: "Building Enterprise",
    titleLine2: "AI Solutions",
    titleLine3: "That Scale",
  },
  imageUrl: "/visuals/about-hero.png",
  aboutUs: {
    caption: "Who We Are",
    title: "A Founder-Led AI Studio",
    description:
      "AivoraNext is a founder-led AI studio run by senior engineers. We specialize in production-grade Voice AI agents and the custom AI systems around them — agents, automation, and software.",
    mission:
      "Our team has shipped conversational and Voice AI in production for regulated, high-stakes insurance workflows — the kind where accuracy, auditability, and reliability are non-negotiable. We bring that same production bar to every engagement, and we operate what we build.",
  },
  techStack: {
    aiFrameworks: ["LangGraph", "LangChain", "CrewAI", "Google Agent Toolkit"],
    voiceAI: ["LiveKit", "Twilio", "BlandAI", "Retell AI", "ElevenLabs", "Cartesia", "Deepgram", "AssemblyAI"],
    vectorDatabases: ["Pinecone", "Qdrant", "ChromaDB"],
    llmProviders: ["OpenAI", "Anthropic", "Azure OpenAI", "AWS Bedrock"],
    automation: ["n8n", "Make.com", "Custom APIs & Middleware"],
    languages: ["Python", "Node.js", "TypeScript", "Next.js", "React.js"],
    cloud: ["AWS", "Azure", "GCP"],
  },
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
  stats: [
    { value: "8+", label: "Years Building AI" },
    { value: "5", label: "Production AI Systems Shipped" },
    { value: "Build + Operate", label: "End-to-End Model" },
  ],
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
};

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

// Contact Page Content
// Blog Page Content
export const blogPageContent = {
  hero: {
    badge: "Resources",
    year: "2026",
    titleLine1: "AI Insights",
    titleLine2: "& Industry",
    titleLine3: "Knowledge",
  },
  posts: [],
  categories: [
    { id: "all", label: "All Articles" },
    { id: "voice-ai", label: "Voice AI" },
    { id: "automation", label: "Automation" },
    { id: "custom-ai", label: "Custom AI" },
    { id: "ai-hiring", label: "AI Hiring" },
  ],
};

export const contactPageContent = {
  hero: {
    badge: "Get In Touch",
    year: "2026",
    titleLine1: "Let's Discuss",
    titleLine2: "Your AI",
    titleLine3: "Project",
  },
  form: {
    fields: {
      firstName: { label: "First name*", placeholder: "John" },
      lastName: { label: "Last Name*", placeholder: "Smith" },
      email: { label: "Work Email*", placeholder: "john@company.com" },
      phone: { label: "Phone Number", placeholder: "+1 (555) 000-0000" },
      company: { label: "Company Name", placeholder: "Acme Inc" },
      serviceInterest: {
        label: "Which service are you interested in?*",
        placeholder: "Select a service",
        options: [
          "Agentic AI Development",
          "LLM Solutions & Customization",
          "Enterprise LLM Infrastructure",
          "Process Automation with Gen AI",
          "AI Content & Communication",
          "Voice AI Agent Building",
          "Custom SaaS Development",
          "AI Automation",
          "Not sure yet",
        ],
      },
      callVolume: {
        label: "Monthly call volume (for Voice AI)",
        placeholder: "Select volume",
        options: [
          "Less than 1,000",
          "1,000 - 5,000",
          "5,000 - 20,000",
          "20,000+",
          "Not applicable",
        ],
      },
      timeline: {
        label: "Project timeline",
        placeholder: "Select timeline",
        options: [
          "Immediate (< 1 month)",
          "Short-term (1-3 months)",
          "Planning phase",
          "Just exploring",
        ],
      },
      message: {
        label: "Tell us about your project*",
        placeholder: "Describe what you're looking to achieve...",
      },
    },
    submitButton: "Request Consultation",
  },
  info: {
    email: "info@aivoranext.com",
    phone: "+91 76003 93030",
    address:
      "11th Floor, Krish Cubical, A wing, Sindhu Bhavan Marg, Thaltej, Ahmedabad, Gujarat 380059",
  },
};

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
