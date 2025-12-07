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
import { useState } from "react";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "Services", link: "#services" },
    { name: "Technologies", link: "#approach" },
    { name: "Work", link: "#case-studies" },
    { name: "Blog", link: "#journal" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />

      {/* Resizable Navbar */}
      <div className="pt-6">
        <Navbar className="top-10">
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} onItemClick={() => setIsMobileMenuOpen(false)} />
            <div className="flex items-center gap-3 ml-6 lg:ml-10">
              <NavbarButton variant="primary" href="#contact">
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
                  Inquiry Now
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
                Build with Aivora <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 backdrop-blur-sm"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section id="problem" className="py-20 border-t border-white/5 bg-[#030304]/80 backdrop-blur-xl relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-3">The 2-Second Hook</p>
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">The Future Belongs to the Intelligent.</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Technology is reshaping industries faster than ever. But raw computing power isn't enough. To lead in the digital era, you need solutions that align deeply with human needs.
            </p>
          </div>
          <div className="card-gradient border border-white/5 rounded-3xl p-8 flex flex-col gap-4">
            <h3 className="text-xl font-medium text-white">The Aivoranext Difference</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              We don't just write code. We craft intelligent ecosystems where strategy, design, and AI converge to unlock value at every touchpoint.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                <span>Agentic AI grounded in human-centric research.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                <span>Sustainable growth through workflow redesign and adoption.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                <span>Design systems that make advanced intelligence feel trustworthy.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section id="pillars" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-3">The Three Pillars</h2>
              <p className="text-lg text-gray-400 font-light max-w-2xl">
                Prove we understand both the tech and the user: AI-first, human-centric, designed for sustainable growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PillarCard
              icon={<Compass className="w-6 h-6" />}
              title="AI Strategy & Automation"
              text="Moving beyond hype to implemented ROI."
            />
            <PillarCard
              icon={<Palette className="w-6 h-6" />}
              title="Experience Design (UX/UI)"
              text="Making complex intelligence feel simple."
            />
            <PillarCard
              icon={<Building2 className="w-6 h-6" />}
              title="Brand & Digital Innovation"
              text="Building identities ready for the algorithmic age."
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section id="trust" className="py-16 border-t border-white/5 bg-[#030304]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <h3 className="text-2xl md:text-3xl font-medium text-white">Powering the Next Generation of Industry Leaders</h3>
            <p className="text-gray-500 font-light">FinTech · SaaS · Healthcare · Retail</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-400">
            {["FinTech", "SaaS", "Healthcare", "Retail"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/5 bg-white/5 py-6">
                <span className="text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detailed */}
      <section id="services" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">Holistic Solutions for an AI-First World</h2>
              <p className="text-lg text-gray-400 font-light max-w-3xl">
                We recognize that successful AI adoption requires more than technical expertise—it demands a deep appreciation for user experience and thoughtful change management.
              </p>
            </div>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-sm font-medium">
              Consult with Our Strategists <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServicePillar
              title="Pillar 1: AI & Operations Engineering"
              subtitle="For businesses needing speed and efficiency."
              items={[
                "Strategic AI Roadmapping: Auditing your data infrastructure and identifying high-impact AI opportunities.",
                "Workflow Automation: Deploying AI agents to handle repetitive tasks, freeing your team for creative work.",
                "Predictive Analytics: Turning historical data into future foresight for smarter decision-making.",
              ]}
              icon={<Bot className="w-6 h-6 text-blue-400" />}
            />
            <ServicePillar
              title="Pillar 2: Human-Centric Design (UX/UI)"
              subtitle="For businesses needing adoption and engagement."
              items={[
                "AI Interface Design: Dashboards and conversational UI that make AI accessible to non-technical staff.",
                "User Research & Prototyping: Validating ideas with real users before writing a single line of code.",
                'Digital Product Design: End-to-end design of apps and platforms that feel seamless and "unforgettable."',
              ]}
              icon={<Palette className="w-6 h-6 text-blue-400" />}
            />
            <ServicePillar
              title="Pillar 3: Brand & Growth Strategy"
              subtitle="For businesses needing market differentiation."
              items={[
                "Digital Transformation: Guiding your organization through the cultural shifts of becoming AI-first.",
                "Tech-Forward Branding: Visual identities and messaging that position you as a modern innovation leader.",
                "Go-to-Market Strategy: Launching your new digital products with impact.",
              ]}
              icon={<Globe2 className="w-6 h-6 text-blue-400" />}
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030304] to-[#030304]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-3">From Ambition to Action.</h2>
            <p className="text-gray-400 font-light max-w-2xl">
              Build trust with a disciplined, safe process that keeps humans at the center.
            </p>
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
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">Architects of the Next Era.</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-4">
              Aivoranext was founded on a simple belief: AI is a necessity, not an option. But in the race to automate, the human element is often lost. We exist to bridge that gap. We are a team of AI engineers, creative designers, and business strategists working as one.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-4">
              Our Mission: To make the power of AI accessible, actionable, and truly impactful for companies ready to lead.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              Why "Aivoranext"? Because we are always looking at what's next—ensuring your business isn't just keeping up, but setting the pace.
            </p>
          </div>
          <div className="card-gradient border border-white/5 rounded-3xl p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Brain className="w-10 h-10 text-blue-400" />
              <div>
                <p className="text-sm text-blue-300">AI-First</p>
                <p className="text-white font-medium">Human-Centric Systems</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Stat label="Agentic AI" value="Workflow Redesign" />
              <Stat label="Safety" value="Human-in-the-loop" />
              <Stat label="Design" value="Trust & Adoption" />
              <Stat label="Growth" value="Sustainable ROI" />
            </div>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="py-24 border-t border-white/5">
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
      <section id="contact" className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030304] to-blue-950/20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">Ready to Scale Your Vision?</h2>
          <p className="text-xl text-gray-400 mb-12 font-light">Let's build your AI-first future together.</p>

          <form className="max-w-xl mx-auto space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name & Company"
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600 font-light"
              />
              <select className="w-full bg-white/5 border border-white/10 text-gray-400 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-light appearance-none">
                <option>I am interested in: Strategy</option>
                <option>I am interested in: Design</option>
                <option>I am interested in: Full Transformation</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <select className="w-full bg-white/5 border border-white/10 text-gray-400 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-light appearance-none">
                <option>Budget Range (optional)</option>
                <option>$25k - $50k</option>
                <option>$50k - $100k</option>
                <option>$100k+</option>
              </select>
              <input
                type="email"
                placeholder="Work Email"
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600 font-light"
              />
            </div>
            <textarea
              rows={4}
              placeholder='Tell us about your biggest challenge...'
              className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600 font-light"
            />
            <button
              type="button"
              className="w-full py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              Submit & Schedule
            </button>
            <p className="text-center text-xs text-gray-600 mt-4">Ahmedabad, India | Global Reach</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 100 100" fill="currentColor">
                <rect x="0" y="0" width="50" height="50" />
                <rect x="50" y="50" width="50" height="50" />
                <rect x="75" y="0" width="25" height="25" />
              </svg>
              <span className="text-lg font-medium tracking-tight text-white">
                Aivora<span className="text-gray-500 font-light">next</span>
              </span>
            </div>
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
    title: "Discovery & Alignment",
    description: 'We start by understanding your vision. We analyze your data, your users, and your bottlenecks to find the "Why."',
  },
  {
    number: "02",
    title: "Strategy & Design",
    description: "We visualize the solution. Designers prototype the experience while engineers architect data models. You see the future before we build it.",
  },
  {
    number: "03",
    title: "Intelligent Development",
    description: "AI engineers build robust, secure, and scalable systems. We integrate seamless automation that fits your existing stack.",
  },
  {
    number: "04",
    title: "Enablement & Scale",
    description: "Technology fails without adoption. We train your team, manage change, and support ongoing growth.",
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

