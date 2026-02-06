"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code,
  Server,
  Brain,
  Palette,
  Layers,
  Building2,
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
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
    icon: Code,
    title: "Frontend Developer",
    description:
      "Expert frontend developers skilled in modern frameworks and responsive design.",
    features: ["React", "Next.js", "Vue.js", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend Developer",
    description:
      "Experienced backend engineers for scalable server-side applications.",
    features: ["Node.js", "Python", "Java", "Go"],
  },
  {
    icon: Brain,
    title: "AI Developer",
    description:
      "Specialists in machine learning, LLMs, and AI-powered solutions.",
    features: ["TensorFlow", "PyTorch", "LLMs", "RAG"],
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    description:
      "Creative designers who craft beautiful and intuitive user experiences.",
    features: ["Figma", "User Research", "Prototyping", "Design Systems"],
  },
  {
    icon: Layers,
    title: "Full Stack Developer",
    description:
      "Versatile developers proficient in both frontend and backend technologies.",
    features: ["MERN Stack", "Next.js", "PostgreSQL", "AWS"],
  },
  {
    icon: Building2,
    title: "Solution Architect",
    description:
      "Technical leaders who design scalable and robust system architectures.",
    features: [
      "System Design",
      "Cloud Architecture",
      "Microservices",
      "DevOps",
    ],
  },
];

// Engagement Models
const engagementModels = [
  {
    icon: FileCheck,
    title: "Contract",
    description: "Project-based engagement with flexible duration.",
    features: ["Flexible duration", "Project-based", "Scalable team size"],
  },
  {
    icon: Users,
    title: "Full-time",
    description: "Direct hire placements for permanent positions.",
    features: ["Permanent placement", "Full benefits", "Long-term commitment"],
  },
  {
    icon: UserCheck,
    title: "Team Augmentation",
    description: "Extend your existing team with specialized talent.",
    features: ["Seamless integration", "Quick onboarding", "Flexible scaling"],
  },
  {
    icon: CalendarCheck,
    title: "2-Week Trial",
    description: "Evaluate fit before making a commitment.",
    features: ["Risk-free trial", "Performance evaluation", "No obligation"],
  },
];

// Our Process Steps
const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Requirements",
    description:
      "Define your needs and tech stack for the ideal candidate profile.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Matching",
    description:
      "We match you with pre-vetted candidates from our talent pool.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Interview",
    description: "You interview selected candidates to assess cultural fit.",
  },
  {
    icon: Users,
    step: "04",
    title: "Onboarding",
    description: "Smooth integration with your team and existing workflows.",
  },
  {
    icon: HeartHandshake,
    step: "05",
    title: "Support",
    description: "Ongoing relationship management and performance support.",
  },
];

// Tech Stack Data with devicon URLs
const techStackData = [
  {
    category: "Frontend",
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Nuxt.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "NestJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
    ],
  },
  {
    category: "Database",
    technologies: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
      {
        name: "DynamoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      {
        name: "GCP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "NGINX",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
    ],
  },
  {
    category: "AI & ML",
    technologies: [
      {
        name: "OpenAI",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270538/openai_xmuukc.png",
      },
      {
        name: "Anthropic",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270519/anthropic_usv1bn.png",
      },
      {
        name: "Google Gemini",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270527/gemini_stkc5z.png",
      },
      {
        name: "Meta Llama",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270533/meta_mkcolx.png",
      },
      {
        name: "Mistral AI",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270536/mistral_hc3i5b.png",
      },
      {
        name: "Cohere",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270523/cohere_c4dwfm.png",
      },
      {
        name: "PyTorch",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270541/pytorch_xjcbpv.png",
      },
      {
        name: "TensorFlow",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270544/tensorflow_sgm6r2.png",
      },
      {
        name: "Hugging Face",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270529/huggingface_v2puam.png",
      },
      {
        name: "scikit-learn",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270542/scikitlearn_ijrmky.png",
      },
    ],
  },
  {
    category: "AI Frameworks & Tools",
    technologies: [
      {
        name: "LangChain",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270530/langchain_fdbg65.png",
      },
      {
        name: "LangSmith",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270530/langchain_fdbg65.png",
      },
      {
        name: "LangGraph",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270530/langchain_fdbg65.png",
      },
      {
        name: "CrewAI",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270524/crewai_wm9oew.png",
      },
      {
        name: "AutoGen",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270534/microsoft_ztfusb.png",
      },
      {
        name: "LiveKit",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270532/livekit_btkauv.jpg",
      },
      {
        name: "Pinecone",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270540/pinecone_ybwjkm.png",
      },
      {
        name: "Weaviate",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270546/weaviate_jdiws1.jpg",
      },
      {
        name: "ChromaDB",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270521/chromadb_gqj5g3.png",
      },
      {
        name: "Ollama",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270537/ollama_i1mebm.png",
      },
    ],
  },
  {
    category: "Voice AI",
    technologies: [
      {
        name: "ElevenLabs",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270526/elevenlabs_l8o7fv.png",
      },
      {
        name: "Deepgram",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270525/deepgram_pfzgbd.jpg",
      },
      {
        name: "Twilio",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270545/twilio_jwnf7s.png",
      },
      {
        name: "AssemblyAI",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270520/assemblyai_qnldtk.png",
      },
      {
        name: "Whisper",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270538/openai_xmuukc.png",
      },
      {
        name: "PlayHT",
        icon: "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1770270538/openai_xmuukc.png",
      },
    ],
  },
  {
    category: "Design Tools",
    technologies: [
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Photoshop",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
      },
      {
        name: "Illustrator",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      },
      {
        name: "After Effects",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
      },
      {
        name: "Framer",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      },
    ],
  },
  {
    category: "Automation & CMS",
    technologies: [
      {
        name: "n8n",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Zapier",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "WordPress",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      },
      {
        name: "Webflow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg",
      },
      {
        name: "Strapi",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/strapi/strapi-original.svg",
      },
      {
        name: "Shopify",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg",
      },
    ],
  },
];

// Why Choose Us Benefits
const benefitsData = [
  {
    icon: Shield,
    title: "Pre-vetted Talent",
    description:
      "Rigorous technical screening ensures only top-tier candidates.",
  },
  {
    icon: Zap,
    title: "Fast Matching",
    description:
      "Receive qualified candidates within 48 hours of your request.",
  },
  {
    icon: Clock,
    title: "No Risk",
    description:
      "2-week trial periods to ensure the perfect fit for your team.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "Dedicated account manager for continuous relationship management.",
  },
];

export default function StaffAugmentationPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
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
              Staff Augmentation
            </span>
            <span className="text-white/80 text-sm font-medium">
              Top Talent On-Demand
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            Scale Your Team{" "}
            <span className="text-gradient-blue">On-Demand</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            Access vetted developers, designers, and architects. Build your
            dream team with pre-screened talent ready to deliver results from
            day one.
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
                className="inline-flex items-center gap-2 px-8 py-4 btn-primary text-white font-semibold rounded-none"
              >
                Find Talent <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#talent-categories"
                className="inline-flex items-center gap-2 px-8 py-4 btn-secondary text-white font-semibold rounded-none"
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
      <section
        id="talent-categories"
        className="relative py-24 px-6 section-gradient"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Talent Categories
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Specialists for{" "}
              <span className="text-gradient-blue">Every Need</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From frontend to architecture, find the specialized talent your
              projects demand.
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

      {/* Tech Stack Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#0065F8] text-sm uppercase tracking-[0.2em] mb-4">
              Technologies
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Our Team&apos;s{" "}
              <span className="text-gradient-blue">Tech Stack</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our developers are proficient in the latest technologies across
              the full stack.
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {techStackData.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-[#0065F8] text-sm font-semibold uppercase tracking-wider mb-6">
                  {category.category}
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#0065F8]/50 group-hover:bg-white/10 transition-all p-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-gray-400 text-xs text-center group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="relative py-24 px-6 section-gradient">
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
              Choose the engagement model that best fits your project needs and
              timeline.
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
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center gap-2"
                    >
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
              Our streamlined 5-step process ensures you get the right talent
              quickly and efficiently.
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
              The Aivoranext{" "}
              <span className="text-gradient-blue">Advantage</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We make hiring top talent simple, fast, and risk-free.
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
            Ready to Build Your
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gradient-blue mb-8 leading-tight">
            Dream Team?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Start your search today and get matched with pre-vetted talent
            within 48 hours. No risk, no obligation.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-12 py-5 btn-primary text-white text-lg font-semibold rounded-none"
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
