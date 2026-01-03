
import {
    ArrowRight,
    ArrowUpRight,
    Bot,
    Brain,
    Building2,
    Check,
    Compass,
    Gauge,
    Globe2,
    Instagram,
    Lightbulb,
    LineChart,
    Linkedin,
    Palette,
    Sparkles,
    Twitter,
    Users,
    Workflow,
    ShieldCheck,
    Cpu,
    Zap,
    Layers,
    Code2,
    Database,
} from "lucide-react";

export const siteConfig = {
    name: "Aivoranext",
    heroLogo: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765091977/Aivoranext2_uk7ol7.png",
    compactLogo: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765092013/Aivoranext_icon_rjohn1.png",
    footerDesc: "The operating system for the intelligent enterprise. We architect agentic AI, cognitive ecosystems, and future-proof digital products.",
    copyright: "© 2025 Aivoranext Inc. All rights reserved.",
};

export const navigation = {
    navItems: [
        { name: "Services", link: "#services", hasDropdown: true },
        { name: "Solutions", link: "/solutions", hasDropdown: true },
        { name: "Hire Us", link: "#contact", hasDropdown: true },
        { name: "Work", link: "#work" },
        { name: "About", link: "#about", hasDropdown: true },
    ],
    megaMenuCategories: {
        "Artificial Intelligence": [
            "Generative AI Services",
            "AI Strategy and System Design",
            "AI Agents Development",
            "RAG Systems",
            "Voice AI Agents",
        ],
        "Product Engineering": [
            "Software Product Engineering",
            "Managed Services",
        ],
        "DevOps & Cloud Engineering": [
            "Cloud Application Development",
            "DevOps",
        ],
        "Customer Experience": [
            "UI/UX Design",
            "Interactive Experience",
        ]
    },
};

export const heroContent = {
    badge: "The Future of Work is Agentic",
    titlePart1: "Building the Operating System",
    titlePart2: "For the Intelligent Enterprise.",
    description: "We don't just 'integrate AI'. We architect self-optimizing ecosystems where autonomous agents, human expertise, and cognitive infrastructure converge to drive exponential growth.",
    primaryButton: "Partner With Us",
    secondaryButton: "View Solutions",
};

export const heroStats = {
    items: [
        {
            value: "10+",
            label: "Years of Excellence",
            iconName: "Star", // Will map to a Star icon
            iconColor: "text-blue-500",
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
        },
        {
            value: "92%",
            label: "Success Rate",
            iconName: "Zap", // Will map to a flame/zap icon
            iconColor: "text-blue-500",
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
        },
        {
            value: "100+",
            label: "Thriving Projects",
            iconName: "Check", // Will map to a check icon
            iconColor: "text-white",
            iconBg: "bg-blue-600",
        },
    ],
    cta: "LET'S TALK",
};

export const problemSection = {
    caption: "Enterprise-Grade Intelligence",
    title: "Engineering the AI-First Organization",
    description: "Scalable. Auditable. Sovereign. We deliver the infrastructure required to move from experimental pilots to mission-critical production.",
    items: [
        {
            title: "Agentic Workflows",
            subtitle: "Autonomous Digital Labor",
            descriptionItems: [
                "Deploy goal-seeking agents that autonomously execute complex, multi-step business processes.",
                "Reduce operational overhead by 40-60% while maintaining human-in-the-loop oversight.",
                "Self-healing workflows that adapt to exceptions without breaking.",
            ],
            iconName: "Bot",
        },
        {
            title: "Cognitive Infrastructure",
            subtitle: "Private, Secure AI Systems",
            descriptionItems: [
                "Establish private, sovereign LLM environments that keep your proprietary data secure.",
                "Enterprise-grade RAG systems with improved retrieval accuracy and hallucination guardrails.",
                "Unified data governance for compliant, audit-ready AI operations.",
            ],
            iconName: "ShieldCheck",
        },
        {
            title: "Next-Gen Product Engineering",
            subtitle: "AI-Native SaaS & Platforms",
            descriptionItems: [
                "Architect SaaS platforms where AI is the core engine, not just a feature.",
                "Build adaptive user interfaces (Generative UI) that personalize in real-time.",
                "Scalable microservices architecture designed for high-concurrency inference.",
            ],
            iconName: "Cpu",
        },
    ],
};



export const developmentServices = {
    titleSmall: "User-Focused",
    titleLarge: "App & Web Development Service",
    description: "We breathe life into designs through scalable and visually stunning development that engage end-users and convert.",
    services: [
        "Front End Development",
        "Back End Development",
        "Full Stack Development",
        "API Development",
        "AI Development services",
        "ML Development services",
        "Cloud Application Development",
        "Low-code No-code Development"
    ],
    cta: "VIEW ALL"
};

export const pillarsSection = {
    title: "The Aivoranext Advantage",
    description: "Why forward-thinking enterprises choose us to navigate the intelligence revolution.",
    items: [
        {
            iconName: "Compass",
            title: "01. Outcome-Obsessed Strategy",
            text: "We don't sell 'hours' or 'models'. We sell velocity. Every engagement is reverse-engineered from a tangible business KPI—be it revenue lift, cost reduction, or time-to-market.",
        },
        {
            iconName: "Palette",
            title: "02. Human-Centric Design",
            text: "Adoption is the only metric that matters. Our world-class design team ensures your AI tools feel invisible, intuitive, and empowering to your workforce.",
        },
        {
            iconName: "Gauge",
            title: "03. Production-Grade Reliability",
            text: "Zero-tolerance for fragility. We engineer robust, observable systems with comprehensive eval suites, so you can trust your AI when it matters most.",
        },
        {
            iconName: "Building2",
            title: "04. Full-Cycle Stewardship",
            text: "Transformation is a journey, not a handoff. We stand as your long-term innovation partner, optimizing your competitive edge as technology evolves.",
        },
    ],
};



export const industriesSection = {
    caption: "Industries We Serve",
    title: "Transforming Verticals",
    industries: [
        {
            name: "Real Estate",
            hasImage: true,
            description: "We help real estate companies simplify their property portfolio dashboards with intuitive designs. We streamline their user interface and engagement."
        },
        {
            name: "Enterprise & Logistics",
            hasImage: false,
        },
        {
            name: "Social Media",
            hasImage: false,
        },
        {
            name: "Sports",
            hasImage: false,
        },
        {
            name: "Fintech",
            hasImage: false,
        },
        {
            name: "eCommerce",
            hasImage: false,
        },
        {
            name: "Healthcare",
            hasImage: false,
        },
        {
            name: "Food, Travel & Leisure",
            hasImage: false,
        },
        {
            name: "Edutech",
            hasImage: false,
        },
        {
            name: "Media & Entertainment",
            hasImage: false,
        },
        {
            name: "And still counting...",
            hasImage: false,
            isPlaceholder: true
        }
    ]
};

export const apporachSection = {
    title: "Our Methodology",
    description: "A disciplined framework for innovation.",
    steps: [
        {
            number: "01",
            title: "Discovery & Blueprint",
            description: "We deconstruct your operational bottlenecks and architect a high-ROI solution blueprint using our proprietary framework.",
        },
        {
            number: "02",
            title: "Agile Prototyping",
            description: "Rapid iteration cycles to validate feasibility and UX. We get a working proof-of-concept in your hands in weeks, not months.",
        },
        {
            number: "03",
            title: "Production Engineering",
            description: "Hardening the system for scale. Security audits, latency optimization, and establishment of MLOps pipelines.",
        },
        {
            number: "04",
            title: "Scale & Evolution",
            description: "Continuous monitoring using observability tools. We refine model performance based on real-world feedback loops.",
        },
    ],
};

export const aboutSection = {
    caption: "Who We Are",
    title: "Engineers of the New Economy",
    description1: "Aivoranext is not just a dev shop. We are a strategic partner for the AI era, comprised of systems architects, creative technologists, and domain experts.",
    missionLabel: "Our Mission",
    missionText: "“To democratize agentic intelligence, enabling organizations to achieve unlimited operational leverage.”",
    description2: "We believe that the companies of the future will be defined by how effectively they collaborate with silicon. The gap between 'AI-curious' and 'AI-native' is widening—we ensure you are on the winning side.",
    description3: "We bridge the chasm between academic research and shipping software.",
    philosophyLabel: "Core Values",
    philosophyTitle: "The Aivoranext Codex",
    philosophyItems: [
        { title: "Radical Transparency", text: "We demystify AI. No black boxes, no hype. Just clear engineering principles." },
        { title: "Velocity is Quality", text: "In the AI era, speed of learning is the ultimate competitive advantage." },
        { title: "First-Principles Thinking", text: "We don't copy-paste solutions. We solve for your specific reality." },
    ],
    footerText: "Join the ranks of high-performance organizations building with Aivoranext.",
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

export const footerLinks = {
    services: [
        { name: "Enterprise AI Strategy", link: "#services" },
        { name: "Custom Agent Build", link: "#services" },
        { name: "RAG & Knowledge Systems", link: "#services" },
    ],
    company: [
        { name: "About Us", link: "#about" },
        { name: "Success Stories", link: "#journal" },
        { name: "Contact", link: "#contact" },
    ],
    legal: [
        { name: "Privacy Policy", link: "#" },
        { name: "Terms of Service", link: "#" },
    ],
};

// NEW: Content for the Solutions Page
export const solutionsPage = {
    hero: {
        title: "Solutions Built for Scale",
        subtitle: "From POC to Production",
        description: "We offer a comprehensive suite of AI solutions designed to solve high-value business problems. Our architectures are secure, scalable, and ready for the enterprise.",
    },
    offerings: [
        {
            id: "enterprise-intelligence",
            title: "Enterprise Intelligence",
            description: "Unlock the latent value in your proprietary data. We build secure knowledge engines that empower your workforce to make faster, data-backed decisions.",
            iconName: "Brain",
            features: [
                "Private RAG Systems (Retrieval Augmented Generation)",
                "Internal Knowledge Search & Discovery",
                "Automated Document Analysis & Extraction",
                "Data Governance & Lineage Tracking"
            ]
        },
        {
            id: "agentic-workforce",
            title: "The Agentic Workforce",
            description: "deploy autonomous digital workers to handle repetitive, high-volume / low-variance tasks, freeing your human talent for creative strategy.",
            iconName: "Bot",
            features: [
                "Customer Experience (CX) Agents",
                "Sales Development & Prospecting Agents",
                "Supply Chain & Logistics Coordinators",
                "HR & Onboarding Assistants"
            ]
        },
        {
            id: "product-innovation",
            title: "Product Innovation",
            description: "Reimagine your customer offering. We architect and build AI-native SaaS products that disrupt markets and drive new revenue streams.",
            iconName: "Rocket",
            features: [
                "Generative AI-Native SaaS Platforms",
                "Predictive Analytics Dashboards",
                "Personalized Recommendation Engines",
                "Multi-Modal Content Creation Tools"
            ]
        }
    ]
};
