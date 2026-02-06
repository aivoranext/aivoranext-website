export const siteConfig = {
  name: "Aivoranext",
  logo: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765091977/Aivoranext2_uk7ol7.png",
  heroLogo:
    "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765091977/Aivoranext2_uk7ol7.png",
  compactLogo:
    "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765091977/Aivoranext2_uk7ol7.png",
  footerDesc:
    "We build Agentic AI systems, LLM solutions, Voice AI agents, and enterprise automation. Helping businesses scale with intelligent AI that works 24/7.",
  copyright: "© 2026 Aivoranext Inc. All rights reserved.",
  tagline: "AI Automation Agency",
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
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
};

export const heroContent = {
  badge: "AI Automation Agency",
  year: "2026",
  titleLine1: "Build & Scale",
  titleLine2: "AI Solutions",
  titleLine3: "That Work",
  description:
    "From Agentic AI and LLM solutions to Voice AI agents and process automation - we build enterprise-ready AI systems that deliver measurable business results.",
  primaryButton: "Explore Services",
  secondaryButton: "Book a Demo",
};

// Partner logos for trust section
export const partnerLogos = [
  { name: "IPSUM", style: "font-bold tracking-[0.2em]" },
  { name: "∞", style: "text-3xl" },
  { name: "LOGO", style: "font-bold tracking-[0.15em]" },
  { name: "BRAND", style: "font-bold tracking-[0.1em]" },
  { name: "TECH", style: "font-semibold tracking-wider" },
];

// Trusted brands below hero
export const heroTrustedBrands = {
  caption: "Trusted by brands worldwide",
  brands: [
    {
      name: "SmartAI",
      logo: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270508/smartai_b0bixm.png",
    },
    {
      name: "Indemn",
      logo: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270506/indemn_grxxh0.png",
    },
    {
      name: "SageData",
      logo: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270507/sageData_sgvbrj.png",
    },
    {
      name: "Ideal Electrical",
      logo: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270506/idealelectrical_g5booy.png",
    },
  ],
};

// Hero stats panel (replaces the IPSUM/LOGO/BRAND row)
export const heroStatsPanel = {
  items: [
    { value: "2+", label: "Years Experience", icon: "Star" },
    { value: "100%", label: "Automation Rate", icon: "Flame" },
    { value: "3x", label: "Faster Conversions", icon: "BadgeCheck" },
    { value: "98%", label: "Client Satisfaction", icon: "Smile" },
  ],
  cta: {
    label: "LET'S TALK",
    href: "/contact",
  },
};

// Statement section right below hero (Nubien-like)
export const belowHeroStatement = {
  badge: "Why AivoraNext",
  titleStrong:
    "We build enterprise AI solutions - from Agentic AI and LLM infrastructure to Voice agents and intelligent automation.",
  titleMuted:
    "Custom SaaS, process automation, email workflows - our AI works around the clock so your team can focus on what matters most.",
  cta: {
    label: "See How It Works",
    href: "/services",
  },
};

export const aboutSection = {
  caption: "About Aivoranext",
  title1: "Your Full-Service",
  title2: "AI Partner",
  description:
    "We're not just another AI vendor. We're your strategic partner for enterprise AI - from Agentic AI development and LLM solutions to Voice AI agents and process automation.",
  subdescription:
    "Whether you need autonomous AI agents, custom LLM infrastructure, SaaS development, or intelligent email workflows - we deliver measurable results.",
  imageUrl:
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop&q=60",
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
      icon: "Bot",
      title: "Agentic AI & LLM Solutions",
      description:
        "Build autonomous AI agents and customize LLMs for your use cases. From fine-tuning to enterprise infrastructure.",
    },
    {
      icon: "Workflow",
      title: "Process & Email Automation",
      description:
        "Automate complex workflows with Gen AI. Document processing, email routing, and intelligent task automation.",
    },
    {
      icon: "Phone",
      title: "Voice AI & Communication",
      description:
        "Build voice agents for 24/7 support and AI-powered content generation for all your communication needs.",
    },
    {
      icon: "Code",
      title: "Custom SaaS & AI Development",
      description:
        "End-to-end AI-powered software development. From MVPs to scalable SaaS products with AI at the core.",
    },
  ],
  cta: {
    label: "Get Started Today",
    href: "/contact",
  },
};

// Trusted Brands Section
export const trustedBrandsSection = {
  caption: "Trusted by brands worldwide",
  brands: [
    { name: "Chicago Pneumatic", logo: "CP" },
    { name: "OMNIYAT", logo: "OMNIYAT" },
    { name: "MSD", logo: "MSD" },
    { name: "RICOH", logo: "RICOH" },
    { name: "Desoutter", logo: "Desoutter" },
    { name: "SABA", logo: "SABA" },
    { name: "DM Consultant", logo: "DM" },
    { name: "Chevening", logo: "Chevening" },
    { name: "Indofast Energy", logo: "INDOFAST" },
    { name: "Blue Chip", logo: "blue chip" },
  ],
};

// Client Testimonials Section
export const testimonialsSection = {
  title: "Real Results From Real Clients",
  description:
    "See what businesses are saying about their AI automation journey with us",
  testimonials: [
    {
      author: {
        name: "Sarah Mitchell",
        handle: "Managing Broker, Premier Properties",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      },
      text: "The Voice AI has transformed how we handle inquiries. We're capturing leads we used to miss and our agents can focus on closing deals.",
    },
    {
      author: {
        name: "Marcus Chen",
        handle: "VP of Sales, TechScale Solutions",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      text: "Our SDRs now focus exclusively on warm leads. The AI handles the heavy lifting of initial outreach, and meeting quality has improved.",
    },
    {
      author: {
        name: "Dr. Jennifer Walsh",
        handle: "CMO, MedCare Health Network",
        avatar:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      },
      text: "Patients love that they can schedule appointments at any hour. Our staff can now focus on patients who truly need human attention.",
    },
    {
      author: {
        name: "Robert Sterling",
        handle: "Managing Partner, Sterling & Associates",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
      text: "What used to take our team days now happens in minutes. The accuracy is remarkable - we've caught errors humans missed.",
    },
    {
      author: {
        name: "David Park",
        handle: "CEO, PayGuard Financial",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      },
      text: "We went from zero ML capability to a production fraud detection system in under 3 months. The engineers were exactly what we needed.",
    },
    {
      author: {
        name: "Amanda Rodriguez",
        handle: "CTO, CloudSync Technologies",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      },
      text: "It's like having a senior employee who's read every document. Our team finds answers in seconds instead of hours.",
    },
  ],
};

export const featureCards = [
  {
    tag: "Agentic AI",
    title: "Agentic AI Development",
    description:
      "Build autonomous AI agents that reason, plan, and execute complex multi-step tasks independently. Enterprise-ready agentic systems that scale.",
    badges: ["Autonomous Agents", "Multi-Step Tasks", "Enterprise Ready"],
    link: "/services/custom-software",
    buttonText: "Build Agents",
  },
  {
    tag: "LLM Solutions",
    title: "LLM Solutions & RAG",
    description:
      "Fine-tune LLMs for your use cases. Build RAG systems, deploy enterprise LLM infrastructure, and integrate AI into your existing workflows.",
    badges: ["Fine-Tuning", "RAG Systems", "LLM Infrastructure"],
    link: "/services/custom-software",
    buttonText: "Explore LLM",
  },
  {
    tag: "Voice AI",
    title: "Voice AI Agents",
    description:
      "Build conversational voice agents that handle calls 24/7. Customer support, appointment booking, sales calls, and lead qualification on autopilot.",
    badges: ["24/7 Availability", "Natural Conversations", "CRM Integration"],
    link: "/services/voice-ai",
    buttonText: "Build Voice Agent",
  },
  {
    tag: "Automation",
    title: "Workflow Automation",
    description:
      "Transform business processes with AI-powered automation. Automate document processing, data extraction, and complex workflows with intelligent systems.",
    badges: ["Document AI", "Data Extraction", "Workflow Automation"],
    link: "/services/automation",
    buttonText: "Automate Now",
  },
  {
    tag: "SaaS Development",
    title: "Custom SaaS Development",
    description:
      "End-to-end AI-powered SaaS product development. From MVP to scale, we build modern web applications with AI at the core.",
    badges: ["Full Stack", "AI-Powered", "Scalable"],
    link: "/services/custom-software",
    buttonText: "Build SaaS",
  },
  {
    tag: "Cloud Solutions",
    title: "Cloud & Infrastructure",
    description:
      "Cloud consulting, cloud-native app development, and enterprise infrastructure. AWS, Azure, GCP expertise for scalable AI deployments.",
    badges: ["AWS", "Azure", "GCP"],
    link: "/services/custom-software",
    buttonText: "Scale Cloud",
  },
  {
    tag: "Hiring",
    title: "Staff Augmentation",
    description:
      "Access top talent for your projects. Frontend, backend, AI developers, designers, and architects to help you build and scale your team.",
    badges: ["Vetted Talent", "Flexible Engagement", "Fast Onboarding"],
    link: "/services/staff-augmentation",
    buttonText: "Find Talent",
  },
  {
    tag: "UI/UX Design",
    title: "UI/UX Design",
    description:
      "Create beautiful, intuitive digital experiences that users love. From research and wireframes to high-fidelity designs and interactive prototypes.",
    badges: ["User Research", "Design Systems", "Prototyping"],
    link: "/services/ui-ux-design",
    buttonText: "Explore Design",
  },
];

export const servicesSection = {
  caption: "Our Services",
  title1: "AI Solutions That",
  title2: "Drive Real Results",
  title3: "",
  services: [
    {
      icon: "Bot",
      title: "Agentic AI Development",
      description:
        "Build autonomous AI agents that reason, plan, and execute complex multi-step tasks independently.",
    },
    {
      icon: "Brain",
      title: "LLM Solutions & Infrastructure",
      description:
        "Fine-tune LLMs, build RAG systems, and deploy secure enterprise-ready AI infrastructure.",
    },
    {
      icon: "Workflow",
      title: "Process Automation",
      description:
        "Transform workflows with generative AI - document processing, data extraction, and intelligent automation.",
    },
    {
      icon: "Phone",
      title: "Voice AI Agents",
      description:
        "Build voice agents for 24/7 customer support, appointment booking, and sales calls.",
    },
    {
      icon: "Code",
      title: "Custom AI Development",
      description:
        "End-to-end AI-powered SaaS and custom software development from MVP to scale.",
    },
  ],
  buttonText: "Explore All Services",
  rating: "50+ Businesses Automated",
  imageUrl:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop&q=60",
};

export const faqSection = {
  caption: "FAQ",
  title1: "Common",
  title2: "Questions",
  description:
    "Everything you need to know about our AI solutions and how they can transform your business.",
  subdescription:
    "Can't find what you're looking for? Book a call with our team.",
  items: [
    {
      question: "What is Agentic AI and how can it help my business?",
      answer:
        "Agentic AI refers to autonomous AI systems that can reason, plan, and execute multi-step tasks independently. These agents can handle complex workflows, make decisions, and complete tasks without constant human oversight - perfect for scaling operations.",
    },
    {
      question: "How do you customize LLMs for enterprise use cases?",
      answer:
        "We fine-tune large language models on your specific data and use cases. This includes building RAG (Retrieval-Augmented Generation) systems, prompt engineering, and deploying private LLM infrastructure that keeps your data secure.",
    },
    {
      question: "What's the typical timeline for building a Voice AI agent?",
      answer:
        "Basic Voice AI agents can be deployed in 2-3 weeks. This includes voice training, conversation design, integration with your phone system, and testing. More complex implementations with CRM integrations take 4-6 weeks.",
    },
    {
      question: "Can you integrate with our existing systems and tools?",
      answer:
        "Yes! We integrate with all major CRMs (Salesforce, HubSpot, Pipedrive), communication platforms (Slack, Teams), email systems, and phone systems. Custom API integrations are also available for proprietary systems.",
    },
    {
      question: "How do you ensure data security with LLM infrastructure?",
      answer:
        "We offer private LLM deployments that keep your data within your infrastructure. Our solutions are compliant with SOC 2, GDPR, HIPAA, and other industry-specific regulations. Full data governance and audit trails included.",
    },
    {
      question: "What's included in Custom SaaS Development?",
      answer:
        "We provide end-to-end development - from product strategy and MVP to full-scale deployment. This includes AI-native architecture, scalable infrastructure, user experience design, and ongoing support and maintenance.",
    },
  ],
};

export const ctaSection = {
  caption: "Get Started",
  title1: "Ready to Automate",
  title2: "Your Business?",
  description:
    "Book a free consultation to see how Voice AI agents and workflow automation can transform your operations.",
  buttonText: "Schedule a Demo",
};

export const footerLinks = {
  templatePages: [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Work", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
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
      "Enterprise Strategy",
      "Agentic Automation",
      "Custom RAG",
      "SaaS Engineering",
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
  posts: [
    {
      id: 1,
      slug: "voice-ai-transforming-customer-service",
      title: "How Voice AI is Transforming Customer Service in 2026",
      excerpt:
        "Discover how businesses are using Voice AI agents to handle customer calls 24/7, reduce costs by 85%, and improve customer satisfaction scores.",
      imageUrl:
        "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&auto=format&fit=crop&q=60",
      category: "Voice AI",
      author: "Aivoranext Team",
      date: "January 28, 2026",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      slug: "automation-roi-guide",
      title: "The Complete Guide to Measuring Automation ROI",
      excerpt:
        "Learn how to calculate the return on investment for your automation projects. Includes real-world examples and benchmarks from 50+ implementations.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      category: "Automation",
      author: "Aivoranext Team",
      date: "January 20, 2026",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 3,
      slug: "rag-systems-explained",
      title: "RAG Systems Explained: Building Enterprise Knowledge Bases",
      excerpt:
        "A deep dive into Retrieval-Augmented Generation (RAG) systems and how they help enterprises unlock the value of their internal knowledge.",
      imageUrl:
        "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770273537/retrieval-augmented-generation-rag-blog-main-Image_srcmis.png",
      category: "Custom AI",
      author: "Aivoranext Team",
      date: "January 15, 2026",
      readTime: "10 min read",
      featured: false,
    },
    {
      id: 4,
      slug: "hiring-ai-engineers-guide",
      title: "How to Hire AI Engineers: A Complete Guide for 2026",
      excerpt:
        "Everything you need to know about hiring AI talent - from evaluating technical skills to structuring compensation for ML engineers and data scientists.",
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
      category: "AI Hiring",
      author: "Aivoranext Team",
      date: "January 10, 2026",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 5,
      slug: "voice-ai-healthcare-use-cases",
      title: "5 Voice AI Use Cases Transforming Healthcare",
      excerpt:
        "From patient intake to prescription refills, explore how healthcare organizations are using Voice AI to improve patient experience and reduce admin burden.",
      imageUrl:
        "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770273536/helthcare_voice_ai_q8z0oe.png",
      category: "Voice AI",
      author: "Aivoranext Team",
      date: "January 5, 2026",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 6,
      slug: "ai-calling-agents-vs-ivr",
      title: "AI Calling Agents vs Traditional IVR: What's the Difference?",
      excerpt:
        "Compare AI-powered calling agents with traditional IVR systems. Understand the technology differences, cost implications, and customer experience impact.",
      imageUrl:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60",
      category: "Voice AI",
      author: "Aivoranext Team",
      date: "December 28, 2024",
      readTime: "5 min read",
      featured: false,
    },
  ],
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
