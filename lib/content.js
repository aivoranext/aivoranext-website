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
          name: "AI Development",
          services: [
            {
              name: "Agentic AI Development",
              link: "/services/custom-software",
            },
            {
              name: "LLM Solutions & Customization",
              link: "/services/custom-software",
            },
            {
              name: "Enterprise LLM Infrastructure",
              link: "/services/custom-software",
            },
            { name: "Voice AI Agents", link: "/services/voice-ai" },
            {
              name: "Intelligent Document Processing",
              link: "/services/automation",
            },
            { name: "AI Integrations", link: "/services/custom-software" },
            {
              name: "Automation & RPA Solutions",
              link: "/services/automation",
            },
          ],
          link: "/services/voice-ai",
        },
        {
          name: "Software Product Engineering",
          services: [
            { name: "SaaS Development", link: "/services/custom-software" },
            { name: "Web App Development", link: "/services/custom-software" },
            {
              name: "Low Code No Code Development",
              link: "/services/automation",
            },
            { name: "Cloud Consulting", link: "/services/custom-software" },
            {
              name: "Cloud Native App Development",
              link: "/services/custom-software",
            },
          ],
          link: "/services/custom-software",
        },
        {
          name: "UI/UX Design",
          services: [
            { name: "UI/UX Design", link: "/services/ui-ux-design" },
            { name: "UI/UX Consulting", link: "/services/ui-ux-design" },
            { name: "UX Research", link: "/services/ui-ux-design" },
            { name: "UX Design Audit", link: "/services/ui-ux-design" },
            { name: "Usability Testing", link: "/services/ui-ux-design" },
            { name: "Design System", link: "/services/ui-ux-design" },
            { name: "Heuristic Evaluation", link: "/services/ui-ux-design" },
            { name: "Interaction Design", link: "/services/ui-ux-design" },
            { name: "Digital Prototyping", link: "/services/ui-ux-design" },
            { name: "Digital Branding", link: "/services/ui-ux-design" },
          ],
          link: "/services/ui-ux-design",
        },
        {
          name: "Hiring",
          services: [
            {
              name: "Frontend Developer",
              link: "/services/staff-augmentation",
            },
            { name: "Backend Developer", link: "/services/staff-augmentation" },
            { name: "AI Developer", link: "/services/staff-augmentation" },
            { name: "UI/UX Designer", link: "/services/staff-augmentation" },
            {
              name: "Full Stack Developer",
              link: "/services/staff-augmentation",
            },
            {
              name: "Solution Architect",
              link: "/services/staff-augmentation",
            },
          ],
          link: "/services/staff-augmentation",
        },
      ],
      featuredImages: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
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
  caption: "Why Choose Us",
  title1: "Skip the Headaches.",
  title2: "Get Results.",
  description:
    "Unlike freelancers, agencies, or building in-house - we deliver production-ready AI solutions that actually work.",
  alternatives: [
    {
      title: "Freelancers",
      problem:
        "Unreliable timelines, inconsistent quality, and no long-term support. Great for quick fixes, risky for business-critical AI.",
    },
    {
      title: "Generic Agencies",
      problem:
        "Overpriced, slow-moving, and often lack deep AI expertise. You end up paying for their learning curve.",
    },
    {
      title: "In-House Teams",
      problem:
        "3-6 months to hire, $200K+ per engineer annually, plus management overhead. Expensive and slow to scale.",
    },
    {
      title: "Off-the-Shelf Tools",
      problem:
        "Limited customization, vendor lock-in, and features that don't match your specific business needs.",
    },
  ],
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
  cta: {
    label: "Get Started Today",
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
    { name: "Twitter (X)", link: "https://twitter.com/aivoranext" },
    { name: "LinkedIn", link: "https://linkedin.com/company/aivoranext" },
    { name: "GitHub", link: "https://github.com/aivoranext" },
    { name: "YouTube", link: "https://youtube.com/@aivoranext" },
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
  imageUrl:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop&q=60",
  aboutUs: {
    caption: "Who We Are",
    title: "AI Solutions Architects",
    description:
      "AivoraNext is an AI solutions company with 8+ years of experience building enterprise-grade AI systems. We specialize in Agentic AI, LLM infrastructure, Voice AI agents, and intelligent automation.",
    mission:
      "Our mission is to make enterprise AI accessible and practical for businesses of all sizes. We've delivered solutions across Insurance, Banking, Healthcare, and Recruitment - achieving 100% automation rates and 3x faster conversions.",
  },
  techStack: {
    aiFrameworks: ["LangGraph", "LangChain", "CrewAI", "AutoGen"],
    voiceAI: ["LiveKit", "Twilio", "ElevenLabs", "Deepgram"],
    vectorDatabases: ["Pinecone", "Weaviate", "ChromaDB"],
    llmProviders: ["OpenAI", "Anthropic", "Azure OpenAI", "AWS Bedrock"],
    languages: ["Python", "Node.js", "TypeScript", "Next.js", "React.js"],
    cloud: ["AWS", "Azure", "GCP"],
  },
  services: [
    {
      title: "Agentic AI Development",
      description:
        "Build autonomous AI agents that reason, plan, and execute complex multi-step tasks independently.",
    },
    {
      title: "LLM Solutions & Infrastructure",
      description:
        "Fine-tune LLMs, build RAG systems, and deploy enterprise-ready LLM infrastructure with full data governance.",
    },
    {
      title: "Process & Email Automation",
      description:
        "Transform workflows with Gen AI - document processing, email routing, and intelligent task automation.",
    },
    {
      title: "Voice AI & Content Generation",
      description:
        "Build voice agents for 24/7 support and AI-powered content for marketing, docs, and communications.",
    },
    {
      title: "Custom SaaS Development",
      description:
        "End-to-end AI-powered SaaS product development from MVP to scale with AI at the core.",
    },
  ],
  stats: [
    { value: "8+", label: "Years Experience" },
    { value: "100%", label: "Automation Rate Achieved" },
    { value: "3x", label: "Faster Conversions" },
  ],
  caseStudies: [
    {
      title: "Insurance Purchase Automation",
      description:
        "End-to-end automation of insurance purchase flow achieving 100% automation rate.",
      metrics: [
        "100% Automation",
        "Zero Manual Intervention",
        "24/7 Processing",
      ],
    },
    {
      title: "No-Code AI Agent Platform",
      description:
        "Built a platform enabling non-technical users to create and deploy AI agents.",
      metrics: [
        "Drag & Drop Interface",
        "Pre-built Templates",
        "One-Click Deploy",
      ],
    },
    {
      title: "Voice AI for Lead Conversion",
      description:
        "Voice AI system that handles inbound/outbound calls and qualifies leads automatically.",
      metrics: [
        "3x Faster Conversions",
        "24/7 Availability",
        "CRM Integration",
      ],
    },
  ],
};

// Portfolio Page Content
export const portfolioPageContent = {
  hero: {
    badge: "Our Work",
    year: "2026",
    titleLine1: "AI Automation",
    titleLine2: "Success",
    titleLine3: "Stories",
  },
  projects: [
    {
      id: 1,
      slug: "insurance-purchase-automation",
      year: "2024",
      title: "Insurance Purchase Automation",
      imageUrl:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60",
      description:
        "End-to-end automation of the insurance purchase flow achieving 100% automation rate with zero manual intervention. Built with LangGraph and enterprise LLM infrastructure.",
      tags: ["Automation", "Insurance", "LLM"],
      link: "/portfolio/insurance-purchase-automation",
      client: "Leading Insurance Provider",
      industry: "Insurance",
      duration: "12 weeks",
      challenge:
        "A major insurance provider was processing thousands of policy purchases manually, leading to delays, errors, and frustrated customers. The manual process took 24-48 hours per application.",
      solution:
        "We built an end-to-end automated system using LangGraph for orchestration, custom LLM infrastructure for document understanding, and intelligent routing. The system processes applications, validates documents, and issues policies automatically.",
      results: [
        {
          metric: "Automation Rate",
          value: "100%",
          improvement: "From manual processing",
        },
        {
          metric: "Processing Time",
          value: "< 5 minutes",
          improvement: "From 24-48 hours",
        },
        {
          metric: "Error Rate",
          value: "< 0.1%",
          improvement: "Near-zero errors",
        },
        {
          metric: "Cost Reduction",
          value: "85%",
          improvement: "Operational savings",
        },
      ],
      testimonial: {
        quote:
          "The automation system has transformed our operations. What took days now happens in minutes, with near-perfect accuracy. Our team can focus on customer relationships instead of paperwork.",
        author: "Operations Director",
        role: "Leading Insurance Provider",
      },
      technologies: [
        "LangGraph",
        "LangChain",
        "OpenAI",
        "Python",
        "AWS",
        "Document AI",
      ],
    },
    {
      id: 2,
      slug: "no-code-ai-agent-platform",
      year: "2025",
      title: "No-Code AI Agent Platform",
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60",
      description:
        "Built a platform enabling non-technical users to create and deploy AI agents with drag-and-drop interface, pre-built templates, and one-click deployment.",
      tags: ["Platform", "AI Agents", "No-Code"],
      link: "/portfolio/no-code-ai-agent-platform",
      client: "Enterprise SaaS Company",
      industry: "Technology",
      duration: "16 weeks",
      challenge:
        "Enterprises wanted to leverage AI agents but lacked technical expertise. Building custom agents required ML engineers and months of development, limiting adoption.",
      solution:
        "We built a no-code platform where business users can create AI agents using a visual builder. Features include pre-built templates, drag-and-drop workflow design, integration marketplace, and one-click deployment to production.",
      results: [
        {
          metric: "Time to Deploy",
          value: "< 1 hour",
          improvement: "From months",
        },
        {
          metric: "Technical Skill Required",
          value: "Zero",
          improvement: "No coding needed",
        },
        {
          metric: "Active Agents",
          value: "500+",
          improvement: "Platform adoption",
        },
        {
          metric: "User Satisfaction",
          value: "4.8/5",
          improvement: "Highly rated",
        },
      ],
      testimonial: {
        quote:
          "Our marketing team built their first AI agent in 30 minutes. What would have taken our engineering team weeks to build, business users now do in an afternoon.",
        author: "VP of Product",
        role: "Enterprise SaaS Company",
      },
      technologies: [
        "React.js",
        "Node.js",
        "LangChain",
        "CrewAI",
        "PostgreSQL",
        "AWS",
      ],
    },
    {
      id: 3,
      slug: "voice-ai-real-estate",
      year: "2024",
      title: "Voice AI for Real Estate",
      imageUrl:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
      description:
        "Deployed Voice AI agents for a real estate agency handling 2,000+ monthly calls for appointment scheduling and property inquiries. Achieved 3x faster lead conversions.",
      tags: ["Voice AI", "Real Estate"],
      link: "/portfolio/voice-ai-real-estate",
      client: "Premier Properties Group",
      industry: "Real Estate",
      duration: "8 weeks",
      challenge:
        "Premier Properties Group was losing potential buyers due to slow response times. Their team of 5 agents couldn't keep up with 2,000+ monthly inquiries, leading to missed opportunities and frustrated customers.",
      solution:
        "We deployed a Voice AI agent using LiveKit and ElevenLabs that handles inbound calls 24/7. The AI qualifies leads, schedules property viewings, answers FAQs about listings, and seamlessly transfers hot leads to available agents.",
      results: [
        {
          metric: "Response Time",
          value: "< 3 seconds",
          improvement: "From 4+ hours",
        },
        {
          metric: "Lead Conversion",
          value: "3x faster",
          improvement: "Significant improvement",
        },
        {
          metric: "Agent Productivity",
          value: "3x",
          improvement: "More closings per agent",
        },
        {
          metric: "Cost Savings",
          value: "$15K/mo",
          improvement: "Reduced staffing needs",
        },
      ],
      testimonial: {
        quote:
          "The Voice AI has transformed how we handle inquiries. We're capturing leads we used to miss and our agents can focus on closing deals instead of answering the same questions repeatedly.",
        author: "Sarah Mitchell",
        role: "Managing Broker, Premier Properties Group",
      },
      technologies: [
        "LiveKit",
        "ElevenLabs",
        "Twilio",
        "Salesforce CRM",
        "Calendar Integration",
      ],
    },
    {
      id: 4,
      slug: "sales-calling-agent",
      year: "2026",
      title: "Sales Calling Agent",
      imageUrl:
        "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770273535/6799a27b9dac8826f2df2067_call-tracking-fs_4_ydrx4t.webp",
      description:
        "Built an AI calling agent for outbound sales that qualified 500+ leads per week. Increased sales team efficiency by 3x and reduced cost per lead by 70%.",
      tags: ["Calling Agent", "Sales"],
      link: "/portfolio/sales-calling-agent",
      client: "TechScale Solutions",
      industry: "B2B SaaS",
      duration: "6 weeks",
      challenge:
        "TechScale's sales team was spending 60% of their time on initial qualification calls, many of which led nowhere. They needed to scale outreach without hiring more SDRs.",
      solution:
        "We built an AI calling agent that makes outbound qualification calls, asks discovery questions, identifies pain points, and books meetings for qualified prospects directly in the sales team's calendars.",
      results: [
        {
          metric: "Leads Qualified/Week",
          value: "500+",
          improvement: "From 150",
        },
        { metric: "Cost per Lead", value: "-70%", improvement: "$45 to $13" },
        {
          metric: "Sales Team Efficiency",
          value: "3x",
          improvement: "Focus on closing",
        },
        {
          metric: "Meeting Show Rate",
          value: "78%",
          improvement: "+25% increase",
        },
      ],
      testimonial: {
        quote:
          "Our SDRs now focus exclusively on warm leads. The AI handles the heavy lifting of initial outreach and qualification, and the quality of booked meetings has actually improved.",
        author: "Marcus Chen",
        role: "VP of Sales, TechScale Solutions",
      },
      technologies: [
        "Voice AI",
        "HubSpot CRM",
        "Calendly",
        "Custom Script Engine",
      ],
    },
    {
      id: 5,
      slug: "healthcare-patient-intake",
      year: "2024",
      title: "Healthcare Patient Intake",
      imageUrl:
        "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770273536/helthcare_voice_ai_q8z0oe.png",
      description:
        "Automated patient intake calls for a healthcare network. Voice AI handles appointment scheduling, prescription refills, and general inquiries 24/7.",
      tags: ["Voice AI", "Healthcare"],
      link: "/portfolio/healthcare-patient-intake",
      client: "MedCare Health Network",
      industry: "Healthcare",
      duration: "12 weeks",
      challenge:
        "MedCare's call center was overwhelmed with routine calls - appointment scheduling, prescription refills, and general inquiries. Wait times exceeded 15 minutes, frustrating patients and overworking staff.",
      solution:
        "We implemented a HIPAA-compliant Voice AI system that handles routine patient calls 24/7. The AI schedules appointments, processes prescription refill requests, answers insurance questions, and triages urgent calls to staff.",
      results: [
        {
          metric: "Call Wait Time",
          value: "< 30 seconds",
          improvement: "From 15+ minutes",
        },
        {
          metric: "Calls Handled by AI",
          value: "73%",
          improvement: "Routine calls automated",
        },
        {
          metric: "Patient Satisfaction",
          value: "4.6/5",
          improvement: "+1.2 point increase",
        },
        {
          metric: "Staff Overtime",
          value: "-80%",
          improvement: "Reduced burnout",
        },
      ],
      testimonial: {
        quote:
          "Patients love that they can schedule appointments or request refills at any hour. Our staff can now focus on patients who truly need human attention. It's been transformative for our operations.",
        author: "Dr. Jennifer Walsh",
        role: "Chief Medical Officer, MedCare Health Network",
      },
      technologies: [
        "Voice AI",
        "HIPAA Compliant",
        "Epic EHR Integration",
        "Twilio",
      ],
    },
    {
      id: 6,
      slug: "document-processing-automation",
      year: "2026",
      title: "Document Processing Automation",
      imageUrl:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60",
      description:
        "Workflow automation for a legal firm processing 10,000+ documents monthly. Automated extraction, classification, and routing with 98% accuracy.",
      tags: ["Automation", "Legal"],
      link: "/portfolio/document-processing-automation",
      client: "Sterling & Associates Law Firm",
      industry: "Legal",
      duration: "10 weeks",
      challenge:
        "Sterling's paralegals spent countless hours manually reviewing, classifying, and routing legal documents. The process was slow, error-prone, and couldn't scale with the firm's growth.",
      solution:
        "We built an intelligent document processing pipeline that automatically extracts key information, classifies documents by type and matter, routes to appropriate team members, and flags urgent items for immediate attention.",
      results: [
        {
          metric: "Processing Time",
          value: "-85%",
          improvement: "Hours to minutes",
        },
        {
          metric: "Accuracy Rate",
          value: "98%",
          improvement: "Exceeds manual review",
        },
        {
          metric: "Documents/Month",
          value: "10,000+",
          improvement: "Scalable capacity",
        },
        {
          metric: "Cost Savings",
          value: "$200K/year",
          improvement: "Reduced manual labor",
        },
      ],
      testimonial: {
        quote:
          "What used to take our team days now happens in minutes. The accuracy is remarkable - we've actually caught errors the system flagged that humans missed. It's paid for itself many times over.",
        author: "Robert Sterling",
        role: "Managing Partner, Sterling & Associates",
      },
      technologies: [
        "Document AI",
        "OCR",
        "NLP Classification",
        "Microsoft 365 Integration",
      ],
    },
    {
      id: 7,
      slug: "custom-rag-system",
      year: "2024",
      title: "Custom RAG System",
      imageUrl:
        "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770273537/retrieval-augmented-generation-rag-blog-main-Image_srcmis.png",
      description:
        "Built a RAG-based knowledge system for a SaaS company. Employees query 50,000+ internal documents using natural language with instant accurate responses.",
      tags: ["Custom AI", "RAG"],
      link: "/portfolio/custom-rag-system",
      client: "CloudSync Technologies",
      industry: "SaaS / Technology",
      duration: "8 weeks",
      challenge:
        "CloudSync's knowledge was scattered across Confluence, Google Drive, Slack, and employee heads. New hires took months to ramp up, and even veterans couldn't find critical information quickly.",
      solution:
        "We built a RAG (Retrieval-Augmented Generation) system that indexes all internal knowledge sources and allows employees to ask questions in natural language, getting accurate answers with source citations.",
      results: [
        {
          metric: "Documents Indexed",
          value: "50,000+",
          improvement: "Unified knowledge",
        },
        {
          metric: "Query Response Time",
          value: "< 2 seconds",
          improvement: "Instant answers",
        },
        {
          metric: "New Hire Ramp Time",
          value: "-50%",
          improvement: "Faster onboarding",
        },
        {
          metric: "Support Ticket Volume",
          value: "-35%",
          improvement: "Self-service answers",
        },
      ],
      testimonial: {
        quote:
          "It's like having a senior employee who's read every document we've ever created. Our team finds answers in seconds instead of hours, and the accuracy is impressive. Game-changer for productivity.",
        author: "Amanda Rodriguez",
        role: "CTO, CloudSync Technologies",
      },
      technologies: [
        "RAG",
        "Vector Database",
        "LLM",
        "Slack Integration",
        "Confluence API",
      ],
    },
    {
      id: 8,
      slug: "ai-team-augmentation",
      year: "2026",
      title: "AI Team Augmentation",
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
      description:
        "Placed a team of 5 ML engineers for a fintech startup building fraud detection. Reduced hiring time from 3 months to 2 weeks.",
      tags: ["AI Hiring", "Fintech"],
      link: "/portfolio/ai-team-augmentation",
      client: "PayGuard Financial",
      industry: "Fintech",
      duration: "2 weeks to deploy, ongoing",
      challenge:
        "PayGuard needed to build a fraud detection system urgently but couldn't find qualified ML engineers. Traditional recruiting was taking 3+ months per hire, putting their product roadmap at risk.",
      solution:
        "We placed a team of 5 vetted ML engineers specialized in fraud detection, anomaly detection, and real-time inference systems. The team integrated seamlessly and began contributing within the first week.",
      results: [
        {
          metric: "Time to Hire",
          value: "2 weeks",
          improvement: "From 3+ months",
        },
        {
          metric: "Team Size",
          value: "5 engineers",
          improvement: "Full ML team",
        },
        {
          metric: "Fraud Detection Rate",
          value: "94%",
          improvement: "Built from scratch",
        },
        {
          metric: "False Positive Rate",
          value: "< 0.1%",
          improvement: "Production-ready",
        },
      ],
      testimonial: {
        quote:
          "We went from zero ML capability to a production fraud detection system in under 3 months. The engineers AivoraNext provided were exactly what we needed - experienced, proactive, and integrated perfectly with our team.",
        author: "David Park",
        role: "CEO, PayGuard Financial",
      },
      technologies: [
        "Machine Learning",
        "Python",
        "TensorFlow",
        "Real-time Inference",
        "AWS",
      ],
    },
  ],
  stats: [
    { value: "8+", label: "Years Experience" },
    { value: "100%", label: "Automation Achieved" },
    { value: "3x", label: "Faster Conversions" },
    { value: "24/7", label: "AI Availability" },
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
    phone: "+91 70469 28404",
    phone2: "+91 76003 93030",
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
