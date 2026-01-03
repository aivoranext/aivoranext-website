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
  Star,
  Zap,
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
import { Logos3 } from "@/components/ui/logos3";
import {
  siteConfig,
  navigation,
  heroContent,
  heroStats,
  problemSection,
  developmentServices,
  pillarsSection,

  industriesSection,
  apporachSection,
  aboutSection,

  contactSection,
  footerLinks,
} from "@/lib/content";

export default function Home() {
  const { navItems } = navigation;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper map for icons
  const iconMap = {
    Bot: <Bot className="w-6 h-6 text-blue-400" />,
    Brain: <Brain className="w-6 h-6 text-blue-400" />,
    LineChart: <LineChart className="w-6 h-6 text-blue-400" />,
    Compass: <Compass className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    Gauge: <Gauge className="w-6 h-6" />,
    Building2: <Building2 className="w-6 h-6" />,
    Workflow: <Workflow className="w-6 h-6 text-blue-400" />,
    Globe2: <Globe2 className="w-6 h-6 text-blue-400" />,
  };

  const pillarIconMap = {
    Compass: <Compass className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    Gauge: <Gauge className="w-6 h-6" />,
    Building2: <Building2 className="w-6 h-6" />,
    LineChart: <LineChart className="w-6 h-6" />,
    Globe2: <Globe2 className="w-6 h-6" />,
  }


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
                variant="primary"
                href="#contact"
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
                  {heroContent.secondaryButton}
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
            {heroContent.badge}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.05] mb-6 text-glow">
            {heroContent.titlePart1} <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600">{heroContent.titlePart2}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            {heroContent.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group relative w-full sm:w-auto px-8 py-4 text-base font-medium text-white rounded-lg bg-blue-600 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                {heroContent.primaryButton} <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 backdrop-blur-sm"
            >
              {heroContent.secondaryButton}
            </a>
          </div>

          {/* Hero Stats */}
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {heroStats.items.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${stat.iconBg} flex items-center justify-center relative`}>
                  {idx === 2 && <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-blue-600"></div>}
                  {idx === 0 && <Star className={`w-6 h-6 ${stat.iconColor} fill-current`} />}
                  {idx === 1 && <Zap className={`w-6 h-6 ${stat.iconColor} fill-current`} />}
                  {idx === 2 && <Check className={`w-6 h-6 ${stat.iconColor}`} />}
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-white leading-none mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-400 font-light">{stat.label}</p>
                </div>
              </div>
            ))}
            <a href="#contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-sm tracking-wider shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_30px_rgba(37,99,235,0.5)] transition-all">
              {heroStats.cta}
            </a>
          </div>
        </div>
      </section>

      <Logos3 heading="Powered by Leading Technologies" />

      {/* Featured Service Snippets */}
      <section id="problem" className="py-20 border-t border-white/5 bg-[#030304]/80 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">{problemSection.caption}</p>
            <h2 className="text-4xl md:text-5xl font-normal text-white">{problemSection.title}</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
              {problemSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemSection.items.map((item, idx) => (
              <ServicePillar
                key={idx}
                title={item.title}
                subtitle={item.subtitle}
                items={item.descriptionItems}
                icon={iconMap[item.iconName]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section id="pillars" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-3">{pillarsSection.title}</h2>
              <p className="text-lg text-gray-400 font-light max-w-2xl">{pillarsSection.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillarsSection.items.map((item, idx) => (
              <PillarCard
                key={idx}
                icon={pillarIconMap[item.iconName]}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>



      {/* Development Services */}
      <section id="development" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-sm uppercase tracking-wider">{developmentServices.titleSmall}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                <span className="italic font-light">{developmentServices.titleLarge}</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">{developmentServices.description}</p>

              <div className="flex flex-wrap gap-x-2 gap-y-3 text-sm text-gray-400">
                {developmentServices.services.map((service, idx) => (
                  <span key={idx}>
                    {service}
                    {idx < developmentServices.services.length - 1 && <span className="ml-2">/</span>}
                  </span>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl">
                {developmentServices.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="relative h-80 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl rotate-12 backdrop-blur-sm border border-blue-400/30"></div>
              <div className="absolute w-48 h-48 bg-gradient-to-tr from-blue-500/30 to-blue-700/30 rounded-2xl -rotate-6 backdrop-blur-sm border border-blue-500/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-4">
              {industriesSection.industries.slice(0, 10).map((industry, idx) => (
                <div key={idx} className="aspect-square border border-white/10 rounded-3xl flex items-center justify-center p-6 hover:border-blue-500/30 transition-all bg-white/[0.02] hover:bg-white/[0.04]" style={{ clipPath: idx === 0 ? 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' : 'none' }}>
                  <p className="text-white text-center font-medium">{industry.name}</p>
                </div>
              ))}
              {industriesSection.industries.slice(10).map((industry, idx) => (
                <div key={idx + 10} className="aspect-square border border-white/5 rounded-3xl flex items-center justify-center p-6 bg-white/[0.01]">
                  <p className="text-gray-500 text-center text-sm italic">{industry.name}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-400">{industriesSection.caption}</p>
              <h2 className="text-3xl md:text-4xl font-normal text-white">{industriesSection.title}</h2>
              <p className="text-gray-400 leading-relaxed">
                {industriesSection.industries[0].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="approach" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-3">{apporachSection.title}</h2>
            <p className="text-gray-400 font-light max-w-2xl">{apporachSection.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {apporachSection.steps.map((step) => (
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
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">{aboutSection.caption}</p>
            <h2 className="text-3xl md:text-4xl font-normal text-white">{aboutSection.title}</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              {aboutSection.description1}
            </p>
            <div className="space-y-3">
              <p className="text-sm text-blue-300 uppercase tracking-[0.15em]">{aboutSection.missionLabel}</p>
              <p className="text-white font-medium">
                {aboutSection.missionText}
              </p>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              {aboutSection.description2}
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              {aboutSection.description3}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Brain className="w-10 h-10 text-blue-400" />
              <div>
                <p className="text-sm text-blue-300">{aboutSection.philosophyLabel}</p>
                <p className="text-white font-medium">{aboutSection.philosophyTitle}</p>
              </div>
            </div>
            <div className="space-y-4">
              {aboutSection.philosophyItems.map((item, idx) => (
                <div key={idx}>
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              {aboutSection.footerText}
            </p>
          </div>
        </div>
      </section>



      {/* Contact */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">{contactSection.title}</h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            {contactSection.description}
          </p>

          <form className="max-w-xl mx-auto space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={contactSection.formFields.name}
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600 font-light"
              />
              <input
                type="email"
                placeholder={contactSection.formFields.email}
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600 font-light"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={contactSection.formFields.company}
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600 font-light"
              />
              <select className="w-full bg-white/5 border border-white/10 text-gray-400 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-light appearance-none">
                {contactSection.formFields.serviceInterest.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <textarea
              rows={4}
              placeholder={contactSection.formFields.message}
              className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-600 font-light"
            />
            <button
              type="button"
              className="w-full py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              {contactSection.submitButtonTop}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#hero" className="inline-flex items-center gap-3 mb-6">
              <Image src={siteConfig.heroLogo} alt="Aivoranext" width={160} height={40} className="h-10 w-auto" />
            </a>
            <p className="text-sm text-gray-500 font-light max-w-xs leading-relaxed">
              {siteConfig.footerDesc}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.link} className="text-sm text-gray-500 hover:text-blue-400 transition-colors font-light">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.link} className="text-sm text-gray-500 hover:text-blue-400 transition-colors font-light">
                    {link.name}
                  </a>
                </li>
              ))}
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
          <p>{siteConfig.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <a key={link.name} href={link.link} className="hover:text-gray-400">
                {link.name}
              </a>
            ))}
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
