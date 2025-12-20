"use client";



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
} from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Image from "next/image";
import { useState } from "react";

const HERO_LOGO_SRC = "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765091977/Aivoranext2_uk7ol7.png";

export default function Home() {
  const navItems = [
    { name: "Services", link: "#services", hasDropdown: true },
    { name: "Solutions", link: "#solutions", hasDropdown: true },
    { name: "Hire Us", link: "#contact", hasDropdown: true },
    { name: "Work", link: "#work" },
    { name: "About", link: "#about", hasDropdown: true },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />
      <div className="fixed inset-0 pointer-events-none z-0" />

      {/* Resizable Navbar */}
      <div className="pt-0">
        <Navbar className="top-4 md:top-6 transition-all duration-300 data-[visible=false]:top-0">
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} onItemClick={() => setIsMobileMenuOpen(false)} />
            <div className="flex items-center gap-3 ml-6 lg:ml-10">

              <NavbarButton
                variant="secondary"
                className="border border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/40 shadow-[0_0_24px_rgba(255,255,255,0.08)]"
                href="#services"
              >
                Inquiry Now
              </NavbarButton>
            </div>
          </NavBody>

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </MobileNavHeader>
            <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full" href="#contact">
                  Explore Solutions
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 backdrop-blur-md animate-float">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Intelligence, Designed by Humans
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.05] mb-6 text-glow">
            Don't Just Automate. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600">Evolve.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            We transform ambitious businesses into AI-first organizations. By blending agentic AI with world-class design, we build systems that are powerful enough to scale—and human enough to trust.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group relative w-full sm:w-auto px-8 py-4 text-base font-medium text-white rounded-lg bg-blue-600 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                Let’s Talk <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 backdrop-blur-sm"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Featured Service Snippets */}
      <section id="problem" className="py-20 border-t border-white/5 bg-[#030304]/80 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">Building the Smarter Enterprise</p>
            <h2 className="text-4xl md:text-5xl font-normal text-white">Core AI Offerings</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
              Intelligent automation, custom AI solutions, and AI SaaS engineering tailored to your unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServicePillar
              title="Intelligent Automation"
              subtitle="Autonomous AI agents"
              items={[
                "Streamline operations with agents that reason, execute, and adapt over time.",
                "Orchestrate multi-step workflows with auditability and guardrails.",
                "Reduce manual load while increasing reliability and throughput.",
              ]}
              icon={<Bot className="w-6 h-6 text-blue-400" />}
            />
            <ServicePillar
              title="Custom AI Solutions"
              subtitle="Domain-specific intelligence"
              items={[
                "Build copilots and RAG knowledge systems tuned to your industry.",
                "Deploy decision engines that honor your policies and data controls.",
                "Deliver insights that drive faster, better decisions across teams.",
              ]}
              icon={<Brain className="w-6 h-6 text-blue-400" />}
            />
            <ServicePillar
              title="AI SaaS Engineering"
              subtitle="Next-gen product builds"
              items={[
                "Design and build SaaS products with integrated AI capabilities.",
                "Craft seamless digital experiences that users trust and adopt.",
                "Ship scalable, secure platforms ready for continuous innovation.",
              ]}
              icon={<LineChart className="w-6 h-6 text-blue-400" />}
            />
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section id="pillars" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-3">What Sets Us Apart</h2>
              <p className="text-lg text-gray-400 font-light max-w-2xl">The holistic perspective that blends strategy, design, and engineering.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PillarCard
              icon={<Compass className="w-6 h-6" />}
              title="01. Beyond Automation"
              text="More than just code. We align AI deeply to your business vision so it delivers meaningful outcomes, not just quick wins."
            />
            <PillarCard
              icon={<Palette className="w-6 h-6" />}
              title="02. Design-Led Intelligence"
              text="Human-centered AI. We apply modern design thinking so your tools are intuitive, engaging, and embraced by teams."
            />
            <PillarCard
              icon={<Gauge className="w-6 h-6" />}
              title="03. Actionable Innovation"
              text="From exploration to scale. We turn possibility into production with reliable, secure architectures ready for growth."
            />
            <PillarCard
              icon={<Building2 className="w-6 h-6" />}
              title="04. The Holistic Partnership"
              text="Strategy + engineering + support. We stay with you from discovery and prototyping through implementation and optimization."
            />
          </div>
        </div>
      </section>

      {/* Trust / Tech Bar */}
      {/* <section id="trust" className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h3 className="text-2xl md:text-3xl font-medium text-white">Engineered for the future, built on modern standards.</h3>
            <p className="text-gray-500 font-light">OpenAI • Python • LangChain • AWS • React • PyTorch</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-gray-200">
            {["OpenAI", "Python", "LangChain", "AWS", "React", "PyTorch"].map((item) => (
              <div key={item} className="py-2 px-3 text-sm font-medium text-white/80">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Services Detailed */}
      <section id="services" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">Services</h2>
              <p className="text-lg text-gray-400 font-light max-w-3xl">Aligning technology with business vision.</p>
            </div>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-sm font-medium">
              Consult with Our Strategists <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServicePillar
              title="AI Strategy & Consulting"
              subtitle="Aligning technology with business vision."
              items={[
                "AI Readiness Assessment: Evaluate your data, workflows, and infrastructure for AI adoption.",
                "Strategic Roadmapping: Plan your transition into an AI-first organization with clear milestones.",
                "Change Management & Adoption: Prepare your teams for new tools, processes, and workflows.",
              ]}
              icon={<Bot className="w-6 h-6 text-blue-400" />}
            />
            <ServicePillar
              title="Intelligent Automation"
              subtitle="Optimizing operations with AI-powered workflows."
              items={[
                "Agentic Workflows: AI agents capable of reasoning, decision-making, and multi-step task execution.",
                "Process Optimization: Identify inefficiencies and streamline operations using intelligent automation.",
                "Document Intelligence: Automate data extraction, classification, and analysis using advanced models.",
              ]}
              icon={<Workflow className="w-6 h-6 text-blue-400" />}
            />
            <ServicePillar
              title="Custom AI & RAG Solutions"
              subtitle="Unlock data-driven decision-making."
              items={[
                "Retrieval-Augmented Generation (RAG): Enable your team to query enterprise data securely and accurately.",
                "Domain-Specific Copilots: AI assistants trained on your industry knowledge and business rules.",
                "Predictive Analytics & ML Models: Forecast trends, risks, and opportunities using your internal datasets.",
              ]}
              icon={<Globe2 className="w-6 h-6 text-blue-400" />}
            />
            <ServicePillar
              title="AI Product Engineering (SaaS)"
              subtitle="Creating seamless, intelligent digital experiences."
              items={[
                "End-to-End AI Product Development: Python backends + modern React frontends + integrated LLM capabilities.",
                "SaaS Architecture Development: Scalable, multi-tenant platforms engineered for long-term growth.",
                "UX/UI Design for AI Products: Interfaces crafted for trust, clarity, and user adoption.",
              ]}
              icon={<Palette className="w-6 h-6 text-blue-400" />}
            />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">Industries</p>
            <h2 className="text-3xl md:text-4xl font-normal text-white">Where we drive impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PillarCard
              icon={<LineChart className="w-6 h-6" />}
              title="Healthcare"
              text="Improve patient outcomes, reduce manual workload, and enhance decision support with intelligent systems."
            />
            <PillarCard
              icon={<Gauge className="w-6 h-6" />}
              title="FinTech"
              text="Deploy AI for risk assessment, fraud detection, automated compliance, and customer insights."
            />
            <PillarCard
              icon={<Compass className="w-6 h-6" />}
              title="Logistics & Supply Chain"
              text="Optimize routing, scheduling, fleet planning, and operational workflows."
            />
            <PillarCard
              icon={<Globe2 className="w-6 h-6" />}
              title="SaaS & Technology"
              text="Accelerate product roadmaps with integrated AI features and copilots."
            />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="approach" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-3">How We Work</h2>
            <p className="text-gray-400 font-light max-w-2xl">Your holistic AI journey — structured for success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {approachSteps.map((step) => (
              <div key={step.number} className="relative pl-6 border-l border-white/10 md:border-l-0 md:border-t md:pt-6">
                <span className="absolute left-0 top-0 -ml-[1px] md:-ml-0 md:-mt-[1px] w-0.5 h-full md:w-full md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-blue-500 to-transparent" />
                <span className="text-5xl font-thin text-white/10 absolute right-4 top-4">{step.number}</span>
                <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-white/5 bg-[#030304]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">About Us</p>
            <h2 className="text-3xl md:text-4xl font-normal text-white">Innovation Meets Empathy</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              We are a next-generation AI and design consultancy helping ambitious businesses transform into intelligent, future-ready organizations.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-blue-300 uppercase tracking-[0.15em]">Our Mission</p>
              <p className="text-white font-medium">
                “To make the power of AI accessible, actionable, and truly impactful for companies ready to lead in the digital era.”
              </p>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Technology is reshaping every industry. We believe AI is the catalyst for sustainable growth. But raw technology alone is not
              enough — true transformation happens when AI is aligned with people, processes, and purpose.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              At Aivoranext, we bridge the gap between complex AI engineering and human-centered design.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Brain className="w-10 h-10 text-blue-400" />
              <div>
                <p className="text-sm text-blue-300">Our Philosophy</p>
                <p className="text-white font-medium">The Holistic Perspective</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-white font-semibold">We Listen</p>
                <p className="text-gray-400 text-sm">We begin by deeply understanding your goals, challenges, and workflow realities.</p>
              </div>
              <div>
                <p className="text-white font-semibold">We Design</p>
                <p className="text-gray-400 text-sm">We blend strategy with creative design thinking to shape intelligent experiences people love using.</p>
              </div>
              <div>
                <p className="text-white font-semibold">We Build</p>
                <p className="text-gray-400 text-sm">We deliver robust, scalable AI solutions engineered for real business impact.</p>
              </div>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              A collective of AI engineers, creative designers, and business strategists working together to guide you from idea to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-3">The Aivoranext Journal</p>
              <h2 className="text-3xl md:text-4xl font-normal text-white">Insights at the intersection of AI, Design, and Strategy.</h2>
            </div>
            <div className="flex gap-3 flex-wrap">
              {["AI Strategy", "Design Thinking", "Future of Work", "Case Studies"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((post) => (
              <a key={post.title} href="#" className="group block">
                <div className="aspect-[16/10] bg-white/[0.03] rounded-xl mb-4 overflow-hidden border border-white/5 group-hover:border-blue-500/30 transition-colors relative">
                  <div className={`absolute inset-0 ${post.overlay} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded border ${post.badgeBg} ${post.badgeBorder} ${post.badgeText}`}>
                    {post.badge}
                  </span>
                  <span className="text-xs text-gray-600">{post.readTime}</span>
                </div>
                <h3 className={`${post.hover} text-lg font-medium text-white mb-2 transition-colors`}>{post.title}</h3>
                <p className="text-sm text-gray-500 font-light">{post.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">Partner With Aivoranext</h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            Whether you're exploring AI for the first time or scaling a large initiative, we are your trusted transformation partner.
          </p>

          <form className="max-w-xl mx-auto space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600 font-light"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600 font-light"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600 font-light"
              />
              <select className="w-full bg-white/5 border border-white/10 text-gray-400 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-light appearance-none">
                <option>Service Interest</option>
                <option>Strategy</option>
                <option>AI Automation</option>
                <option>Custom AI</option>
                <option>SaaS Build</option>
              </select>
            </div>
            <textarea
              rows={4}
              placeholder="Message / Business Challenge"
              className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600 font-light"
            />
            <button
              type="button"
              className="w-full py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              Schedule a 30-Minute Consultation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#hero" className="inline-flex items-center gap-3 mb-6">
              <Image src={HERO_LOGO_SRC} alt="Aivoranext" width={160} height={40} className="h-10 w-auto" />
            </a>
            <p className="text-sm text-gray-500 font-light max-w-xs leading-relaxed">
              AI-first, human-centric consultancy blending agentic AI, design, and strategy for sustainable growth.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-sm text-gray-500 hover:text-blue-400 transition-colors font-light">
                  AI Strategy & Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-500 hover:text-blue-400 transition-colors font-light">
                  UX/UI & Experience
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-500 hover:text-blue-400 transition-colors font-light">
                  Brand & Growth
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-gray-500 hover:text-blue-400 transition-colors font-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#journal" className="text-sm text-gray-500 hover:text-blue-400 transition-colors font-light">
                  Journal
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-500 hover:text-blue-400 transition-colors font-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2025 Aivoranext Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PillarCard({ icon, title, text }) {
  return (
    <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:text-blue-300 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-gray-400 font-light text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function ServicePillar({ title, subtitle, items, icon }) {
  return (
    <div className="card-gradient border border-white/5 rounded-3xl p-8 flex flex-col gap-4 hover:border-blue-500/20 transition-colors duration-500">
      <div className="flex items-center gap-3 text-white">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">{icon}</div>
        <div>
          <p className="text-sm text-blue-300">{subtitle}</p>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
      </div>
      <ul className="space-y-3 text-gray-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <ArrowUpRight className="w-4 h-4 text-blue-400 mt-0.5" />
            <span className="text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
}

const approachSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We uncover opportunities, analyze workflows, and align AI with your business objectives.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description: "Rapid prototyping plus design thinking ensures solutions are user-friendly and effective.",
  },
  {
    number: "03",
    title: "Engineering & Implementation",
    description: "We build secure, scalable, production-quality AI systems using modern architectures.",
  },
  {
    number: "04",
    title: "Scale & Support",
    description: "We provide continuous monitoring, optimization, and support to help you grow.",
  },
];

const insights = [
  {
    title: 'The "AI-First" Mindset: Why Adding Tools Isn\'t Enough for Transformation.',
    description: "Moving from tool sprawl to cohesive, agentic AI ecosystems.",
    readTime: "6 min read",
    badge: "AI Strategy",
    badgeBg: "bg-blue-900/20",
    badgeBorder: "border-blue-500/20",
    badgeText: "text-blue-400",
    hover: "group-hover:text-blue-400",
    overlay: "bg-blue-900/10",
  },
  {
    title: "Designing for Trust: How UX Determines the Success of Your AI Models.",
    description: "Trust, explainability, and the UI signals that drive adoption.",
    readTime: "5 min read",
    badge: "Design Thinking",
    badgeBg: "bg-purple-900/20",
    badgeBorder: "border-purple-500/20",
    badgeText: "text-purple-400",
    hover: "group-hover:text-purple-400",
    overlay: "bg-purple-900/10",
  },
  {
    title: "Beyond Chatbots: How Agentic AI is Redefining Workflow Automation in 2025.",
    description: "From simple intents to autonomous, auditable workflows.",
    readTime: "7 min read",
    badge: "Future of Work",
    badgeBg: "bg-emerald-900/20",
    badgeBorder: "border-emerald-500/20",
    badgeText: "text-emerald-400",
    hover: "group-hover:text-emerald-400",
    overlay: "bg-emerald-900/10",
  },
  {
    title: "The Hidden Cost of Bad Data: Preparing Your Infrastructure for Scale.",
    description: "Data quality, governance, and observability for AI readiness.",
    readTime: "6 min read",
    badge: "Case Studies",
    badgeBg: "bg-orange-900/20",
    badgeBorder: "border-orange-500/20",
    badgeText: "text-orange-400",
    hover: "group-hover:text-orange-400",
    overlay: "bg-orange-900/10",
  },
  {
    title: "Balancing Act: Automate Operations Without Losing Your Brand's Human Touch.",
    description: "Operational excellence with a voice that still feels personal.",
    readTime: "5 min read",
    badge: "Brand",
    badgeBg: "bg-sky-900/20",
    badgeBorder: "border-sky-500/20",
    badgeText: "text-sky-300",
    hover: "group-hover:text-sky-300",
    overlay: "bg-sky-900/10",
  },
];


