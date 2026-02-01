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

// Partner logos for trust section
export const partnerLogos = [
  { name: "IPSUM", style: "font-bold tracking-[0.2em]" },
  { name: "∞", style: "text-3xl" },
  { name: "LOGO", style: "font-bold tracking-[0.15em]" },
  { name: "BRAND", style: "font-bold tracking-[0.1em]" },
  { name: "TECH", style: "font-semibold tracking-wider" },
];

// Hero stats panel (replaces the IPSUM/LOGO/BRAND row)
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

// Statement section right below hero (Nubien-like)
export const belowHeroStatement = {
  badge: "Why AivoraNext",
  titleStrong: "We build Voice AI agents that handle calls, automate workflows, and scale your operations.",
  titleMuted: "From customer support to sales calls - our AI works around the clock so your team can focus on growth.",
  cta: {
    label: "See How It Works",
    href: "/services",
  },
};

export const aboutSection = {
  caption: "About Aivoranext",
  title1: "Shaping Tomorrow",
  title2: "With Bold Ideas",
  description: "Aivoranext is a next-gen AI agency built for bold visionaries, researchers, and builders shaping the future of intelligence.",
  subdescription: "Effortlessly connect with your favorite tools. Whether it's your CRM, email marketing platform, or any other system — we make AI work for you.",
  imageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&auto=format&fit=crop&q=60",
};

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

export const ctaSection = {
  caption: "Get Started",
  title1: "Ready to Automate",
  title2: "Your Business?",
  description: "Book a free consultation to see how Voice AI agents and workflow automation can transform your operations.",
  buttonText: "Schedule a Demo",
};

export const footerLinks = {
  templatePages: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
    { name: "FAQ", link: "/#faq" },
  ],
  social: [
    { name: "Twitter (X)", link: "#" },
    { name: "Instagram", link: "#" },
    { name: "LinkedIn", link: "#" },
    { name: "YouTube", link: "#" },
  ],
  legal: [
    { name: "Terms & Conditions", link: "#" },
    { name: "Privacy Policy", link: "#" },
  ],
};

export const contactSection = {
  title: "Ready to Architect the Future?",
  description: "The best time to build your AI advantage was yesterday. The second best time is now. Let's scope your pilot.",
  formFields: {
    name: "Name",
    email: "Work Email",
    company: "Company Name",
    serviceInterest: ["Primary Interest", "Enterprise Strategy", "Agentic Automation", "Custom RAG", "SaaS Engineering"],
    message: "Briefly describe your use case or challenge",
  },
  submitButtonTop: "Request Strategic Briefing",
};

// About Page Content
export const aboutPageContent = {
  hero: {
    badge: "About AivoraNext",
    year: "2025",
    titleLine1: "Pioneering Voice AI",
    titleLine2: "& Intelligent",
    titleLine3: "Automation",
  },
  imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop&q=60",
  aboutUs: {
    caption: "Who We Are",
    title: "AI Automation Experts",
    description: "AivoraNext is an AI automation agency specializing in Voice AI agents, workflow automation, and custom AI solutions. We help businesses scale operations with intelligent automation that works 24/7.",
    mission: "Our mission is to make AI automation accessible and practical for businesses of all sizes. We believe in AI that delivers measurable ROI - not just impressive demos.",
  },
  services: [
    {
      title: "Voice AI & Calling Agents",
      description: "Deploy AI agents that handle inbound and outbound calls 24/7. Perfect for customer support, appointment booking, lead qualification, and sales.",
    },
    {
      title: "Workflow Automation",
      description: "Automate repetitive business processes - from document processing to CRM updates. See 85% cost reduction on average.",
    },
    {
      title: "Custom AI Software",
      description: "Bespoke AI solutions tailored to your needs. LLM integrations, RAG systems, and intelligent applications.",
    },
    {
      title: "AI Engineer Hiring",
      description: "Access top AI talent on-demand. ML engineers, data scientists, and LLM specialists for contract or full-time roles.",
    },
  ],
  stats: [
    { value: "500K+", label: "AI Calls Handled" },
    { value: "50+", label: "Businesses Automated" },
    { value: "85%", label: "Avg Cost Reduction" },
  ],
};

// Portfolio Page Content
export const portfolioPageContent = {
  hero: {
    badge: "Our Work",
    year: "2025",
    titleLine1: "AI Automation",
    titleLine2: "Success",
    titleLine3: "Stories",
  },
  projects: [
    {
      id: 1,
      year: "2024",
      title: "Voice AI for Real Estate",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
      description: "Deployed Voice AI agents for a real estate agency handling 2,000+ monthly calls for appointment scheduling and property inquiries. Reduced response time from hours to seconds.",
      tags: ["Voice AI", "Real Estate"],
      link: "#",
    },
    {
      id: 2,
      year: "2025",
      title: "Sales Calling Agent",
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60",
      description: "Built an AI calling agent for outbound sales that qualified 500+ leads per week. Increased sales team efficiency by 3x and reduced cost per lead by 70%.",
      tags: ["Calling Agent", "Sales"],
      link: "#",
    },
    {
      id: 3,
      year: "2024",
      title: "Healthcare Patient Intake",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop&q=60",
      description: "Automated patient intake calls for a healthcare network. Voice AI handles appointment scheduling, prescription refills, and general inquiries 24/7.",
      tags: ["Voice AI", "Healthcare"],
      link: "#",
    },
    {
      id: 4,
      year: "2025",
      title: "Document Processing Automation",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60",
      description: "Workflow automation for a legal firm processing 10,000+ documents monthly. Automated extraction, classification, and routing with 98% accuracy.",
      tags: ["Automation", "Legal"],
      link: "#",
    },
    {
      id: 5,
      year: "2024",
      title: "Custom RAG System",
      imageUrl: "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=800&auto=format&fit=crop&q=60",
      description: "Built a RAG-based knowledge system for a SaaS company. Employees query 50,000+ internal documents using natural language with instant accurate responses.",
      tags: ["Custom AI", "RAG"],
      link: "#",
    },
    {
      id: 6,
      year: "2025",
      title: "AI Team Augmentation",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
      description: "Placed a team of 5 ML engineers for a fintech startup building fraud detection. Reduced hiring time from 3 months to 2 weeks.",
      tags: ["AI Hiring", "Fintech"],
      link: "#",
    },
  ],
  stats: [
    { value: "50+", label: "Projects Delivered" },
    { value: "500K+", label: "AI Calls Handled" },
    { value: "85%", label: "Avg Cost Reduction" },
    { value: "24/7", label: "AI Availability" },
  ],
};

// Contact Page Content
export const contactPageContent = {
  hero: {
    badge: "Get In Touch",
    year: "2025",
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
        options: ["Voice AI Agents", "Workflow Automation", "Custom AI Software", "AI Engineer Hiring", "Not sure yet"],
      },
      callVolume: {
        label: "Monthly call volume (for Voice AI)",
        placeholder: "Select volume",
        options: ["Less than 1,000", "1,000 - 5,000", "5,000 - 20,000", "20,000+", "Not applicable"],
      },
      timeline: {
        label: "Project timeline",
        placeholder: "Select timeline",
        options: ["Immediate (< 1 month)", "Short-term (1-3 months)", "Planning phase", "Just exploring"],
      },
      message: { label: "Tell us about your project*", placeholder: "Describe what you're looking to achieve..." },
    },
    submitButton: "Request Consultation",
  },
  info: {
    email: "hello@aivoranext.com",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA",
  },
};
