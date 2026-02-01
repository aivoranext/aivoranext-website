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
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
};

export const heroContent = {
  badge: "AI Automation Agency",
  year: "2025",
  titleLine1: "AI Agents That",
  titleLine2: "Transform Your",
  titleLine3: "Business",
  description: "Deploy intelligent AI agents for voice calls, automate workflows, build custom AI software, and hire expert AI engineers. We build AI solutions that deliver real business results.",
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
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
  social: [
    { name: "Twitter (X)", link: "https://twitter.com/aivoranext" },
    { name: "LinkedIn", link: "https://linkedin.com/company/aivoranext" },
    { name: "Instagram", link: "https://instagram.com/aivoranext" },
    { name: "YouTube", link: "https://youtube.com/@aivoranext" },
  ],
  legal: [
    { name: "Terms of Service", link: "/terms" },
    { name: "Privacy Policy", link: "/privacy" },
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
      slug: "voice-ai-real-estate",
      year: "2024",
      title: "Voice AI for Real Estate",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
      description: "Deployed Voice AI agents for a real estate agency handling 2,000+ monthly calls for appointment scheduling and property inquiries. Reduced response time from hours to seconds.",
      tags: ["Voice AI", "Real Estate"],
      link: "/portfolio/voice-ai-real-estate",
      client: "Premier Properties Group",
      industry: "Real Estate",
      duration: "8 weeks",
      challenge: "Premier Properties Group was losing potential buyers due to slow response times. Their team of 5 agents couldn't keep up with 2,000+ monthly inquiries, leading to missed opportunities and frustrated customers.",
      solution: "We deployed a Voice AI agent that handles inbound calls 24/7. The AI qualifies leads, schedules property viewings, answers FAQs about listings, and seamlessly transfers hot leads to available agents.",
      results: [
        { metric: "Response Time", value: "< 3 seconds", improvement: "From 4+ hours" },
        { metric: "Lead Capture Rate", value: "95%", improvement: "+40% increase" },
        { metric: "Agent Productivity", value: "3x", improvement: "More closings per agent" },
        { metric: "Cost Savings", value: "$15K/month", improvement: "Reduced staffing needs" },
      ],
      testimonial: {
        quote: "The Voice AI has transformed how we handle inquiries. We're capturing leads we used to miss and our agents can focus on closing deals instead of answering the same questions repeatedly.",
        author: "Sarah Mitchell",
        role: "Managing Broker, Premier Properties Group",
      },
      technologies: ["Voice AI", "Twilio", "Salesforce CRM", "Calendar Integration"],
    },
    {
      id: 2,
      slug: "sales-calling-agent",
      year: "2025",
      title: "Sales Calling Agent",
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60",
      description: "Built an AI calling agent for outbound sales that qualified 500+ leads per week. Increased sales team efficiency by 3x and reduced cost per lead by 70%.",
      tags: ["Calling Agent", "Sales"],
      link: "/portfolio/sales-calling-agent",
      client: "TechScale Solutions",
      industry: "B2B SaaS",
      duration: "6 weeks",
      challenge: "TechScale's sales team was spending 60% of their time on initial qualification calls, many of which led nowhere. They needed to scale outreach without hiring more SDRs.",
      solution: "We built an AI calling agent that makes outbound qualification calls, asks discovery questions, identifies pain points, and books meetings for qualified prospects directly in the sales team's calendars.",
      results: [
        { metric: "Leads Qualified/Week", value: "500+", improvement: "From 150" },
        { metric: "Cost per Lead", value: "-70%", improvement: "$45 to $13" },
        { metric: "Sales Team Efficiency", value: "3x", improvement: "Focus on closing" },
        { metric: "Meeting Show Rate", value: "78%", improvement: "+25% increase" },
      ],
      testimonial: {
        quote: "Our SDRs now focus exclusively on warm leads. The AI handles the heavy lifting of initial outreach and qualification, and the quality of booked meetings has actually improved.",
        author: "Marcus Chen",
        role: "VP of Sales, TechScale Solutions",
      },
      technologies: ["Voice AI", "HubSpot CRM", "Calendly", "Custom Script Engine"],
    },
    {
      id: 3,
      slug: "healthcare-patient-intake",
      year: "2024",
      title: "Healthcare Patient Intake",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop&q=60",
      description: "Automated patient intake calls for a healthcare network. Voice AI handles appointment scheduling, prescription refills, and general inquiries 24/7.",
      tags: ["Voice AI", "Healthcare"],
      link: "/portfolio/healthcare-patient-intake",
      client: "MedCare Health Network",
      industry: "Healthcare",
      duration: "12 weeks",
      challenge: "MedCare's call center was overwhelmed with routine calls - appointment scheduling, prescription refills, and general inquiries. Wait times exceeded 15 minutes, frustrating patients and overworking staff.",
      solution: "We implemented a HIPAA-compliant Voice AI system that handles routine patient calls 24/7. The AI schedules appointments, processes prescription refill requests, answers insurance questions, and triages urgent calls to staff.",
      results: [
        { metric: "Call Wait Time", value: "< 30 seconds", improvement: "From 15+ minutes" },
        { metric: "Calls Handled by AI", value: "73%", improvement: "Routine calls automated" },
        { metric: "Patient Satisfaction", value: "4.6/5", improvement: "+1.2 point increase" },
        { metric: "Staff Overtime", value: "-80%", improvement: "Reduced burnout" },
      ],
      testimonial: {
        quote: "Patients love that they can schedule appointments or request refills at any hour. Our staff can now focus on patients who truly need human attention. It's been transformative for our operations.",
        author: "Dr. Jennifer Walsh",
        role: "Chief Medical Officer, MedCare Health Network",
      },
      technologies: ["Voice AI", "HIPAA Compliant", "Epic EHR Integration", "Twilio"],
    },
    {
      id: 4,
      slug: "document-processing-automation",
      year: "2025",
      title: "Document Processing Automation",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60",
      description: "Workflow automation for a legal firm processing 10,000+ documents monthly. Automated extraction, classification, and routing with 98% accuracy.",
      tags: ["Automation", "Legal"],
      link: "/portfolio/document-processing-automation",
      client: "Sterling & Associates Law Firm",
      industry: "Legal",
      duration: "10 weeks",
      challenge: "Sterling's paralegals spent countless hours manually reviewing, classifying, and routing legal documents. The process was slow, error-prone, and couldn't scale with the firm's growth.",
      solution: "We built an intelligent document processing pipeline that automatically extracts key information, classifies documents by type and matter, routes to appropriate team members, and flags urgent items for immediate attention.",
      results: [
        { metric: "Processing Time", value: "-85%", improvement: "Hours to minutes" },
        { metric: "Accuracy Rate", value: "98%", improvement: "Exceeds manual review" },
        { metric: "Documents/Month", value: "10,000+", improvement: "Scalable capacity" },
        { metric: "Cost Savings", value: "$200K/year", improvement: "Reduced manual labor" },
      ],
      testimonial: {
        quote: "What used to take our team days now happens in minutes. The accuracy is remarkable - we've actually caught errors the system flagged that humans missed. It's paid for itself many times over.",
        author: "Robert Sterling",
        role: "Managing Partner, Sterling & Associates",
      },
      technologies: ["Document AI", "OCR", "NLP Classification", "Microsoft 365 Integration"],
    },
    {
      id: 5,
      slug: "custom-rag-system",
      year: "2024",
      title: "Custom RAG System",
      imageUrl: "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=800&auto=format&fit=crop&q=60",
      description: "Built a RAG-based knowledge system for a SaaS company. Employees query 50,000+ internal documents using natural language with instant accurate responses.",
      tags: ["Custom AI", "RAG"],
      link: "/portfolio/custom-rag-system",
      client: "CloudSync Technologies",
      industry: "SaaS / Technology",
      duration: "8 weeks",
      challenge: "CloudSync's knowledge was scattered across Confluence, Google Drive, Slack, and employee heads. New hires took months to ramp up, and even veterans couldn't find critical information quickly.",
      solution: "We built a RAG (Retrieval-Augmented Generation) system that indexes all internal knowledge sources and allows employees to ask questions in natural language, getting accurate answers with source citations.",
      results: [
        { metric: "Documents Indexed", value: "50,000+", improvement: "Unified knowledge" },
        { metric: "Query Response Time", value: "< 2 seconds", improvement: "Instant answers" },
        { metric: "New Hire Ramp Time", value: "-50%", improvement: "Faster onboarding" },
        { metric: "Support Ticket Volume", value: "-35%", improvement: "Self-service answers" },
      ],
      testimonial: {
        quote: "It's like having a senior employee who's read every document we've ever created. Our team finds answers in seconds instead of hours, and the accuracy is impressive. Game-changer for productivity.",
        author: "Amanda Rodriguez",
        role: "CTO, CloudSync Technologies",
      },
      technologies: ["RAG", "Vector Database", "LLM", "Slack Integration", "Confluence API"],
    },
    {
      id: 6,
      slug: "ai-team-augmentation",
      year: "2025",
      title: "AI Team Augmentation",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
      description: "Placed a team of 5 ML engineers for a fintech startup building fraud detection. Reduced hiring time from 3 months to 2 weeks.",
      tags: ["AI Hiring", "Fintech"],
      link: "/portfolio/ai-team-augmentation",
      client: "PayGuard Financial",
      industry: "Fintech",
      duration: "2 weeks to deploy, ongoing",
      challenge: "PayGuard needed to build a fraud detection system urgently but couldn't find qualified ML engineers. Traditional recruiting was taking 3+ months per hire, putting their product roadmap at risk.",
      solution: "We placed a team of 5 vetted ML engineers specialized in fraud detection, anomaly detection, and real-time inference systems. The team integrated seamlessly and began contributing within the first week.",
      results: [
        { metric: "Time to Hire", value: "2 weeks", improvement: "From 3+ months" },
        { metric: "Team Size", value: "5 engineers", improvement: "Full ML team" },
        { metric: "Fraud Detection Rate", value: "94%", improvement: "Built from scratch" },
        { metric: "False Positive Rate", value: "< 0.1%", improvement: "Production-ready" },
      ],
      testimonial: {
        quote: "We went from zero ML capability to a production fraud detection system in under 3 months. The engineers AivoraNext provided were exactly what we needed - experienced, proactive, and integrated perfectly with our team.",
        author: "David Park",
        role: "CEO, PayGuard Financial",
      },
      technologies: ["Machine Learning", "Python", "TensorFlow", "Real-time Inference", "AWS"],
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
// Blog Page Content
export const blogPageContent = {
  hero: {
    badge: "Resources",
    year: "2025",
    titleLine1: "AI Insights",
    titleLine2: "& Industry",
    titleLine3: "Knowledge",
  },
  posts: [
    {
      id: 1,
      slug: "voice-ai-transforming-customer-service",
      title: "How Voice AI is Transforming Customer Service in 2025",
      excerpt: "Discover how businesses are using Voice AI agents to handle customer calls 24/7, reduce costs by 85%, and improve customer satisfaction scores.",
      imageUrl: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&auto=format&fit=crop&q=60",
      category: "Voice AI",
      author: "Aivoranext Team",
      date: "January 28, 2025",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      slug: "automation-roi-guide",
      title: "The Complete Guide to Measuring Automation ROI",
      excerpt: "Learn how to calculate the return on investment for your automation projects. Includes real-world examples and benchmarks from 50+ implementations.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      category: "Automation",
      author: "Aivoranext Team",
      date: "January 20, 2025",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 3,
      slug: "rag-systems-explained",
      title: "RAG Systems Explained: Building Enterprise Knowledge Bases",
      excerpt: "A deep dive into Retrieval-Augmented Generation (RAG) systems and how they help enterprises unlock the value of their internal knowledge.",
      imageUrl: "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=800&auto=format&fit=crop&q=60",
      category: "Custom AI",
      author: "Aivoranext Team",
      date: "January 15, 2025",
      readTime: "10 min read",
      featured: false,
    },
    {
      id: 4,
      slug: "hiring-ai-engineers-guide",
      title: "How to Hire AI Engineers: A Complete Guide for 2025",
      excerpt: "Everything you need to know about hiring AI talent - from evaluating technical skills to structuring compensation for ML engineers and data scientists.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
      category: "AI Hiring",
      author: "Aivoranext Team",
      date: "January 10, 2025",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 5,
      slug: "voice-ai-healthcare-use-cases",
      title: "5 Voice AI Use Cases Transforming Healthcare",
      excerpt: "From patient intake to prescription refills, explore how healthcare organizations are using Voice AI to improve patient experience and reduce admin burden.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop&q=60",
      category: "Voice AI",
      author: "Aivoranext Team",
      date: "January 5, 2025",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 6,
      slug: "ai-calling-agents-vs-ivr",
      title: "AI Calling Agents vs Traditional IVR: What's the Difference?",
      excerpt: "Compare AI-powered calling agents with traditional IVR systems. Understand the technology differences, cost implications, and customer experience impact.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60",
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
    email: "info@aivoranext.com",
    phone: "+91 70469 28404",
    phone2: "+91 76003 93030",
    address: "11th Floor, Krish Cubical, A wing, Sindhu Bhavan Marg, Thaltej, Ahmedabad, Gujarat 380059",
  },
};
