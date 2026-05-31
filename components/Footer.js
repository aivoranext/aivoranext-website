"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/content";

// Footer link sections
const footerSections = {
  services: {
    title: "Services",
    links: [
      { name: "Voice AI Agents", href: "/services/voice-ai" },
      { name: "Workflow Automation", href: "/services/automation" },
      { name: "Custom AI Software", href: "/services/custom-software" },
      { name: "Staff Augmentation", href: "/services/staff-augmentation" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { name: "Customer Support AI", href: "/services/voice-ai" },
      { name: "Sales Automation", href: "/services/automation" },
      { name: "Document Processing", href: "/services/automation" },
      { name: "RAG Systems", href: "/services/custom-software" },
      { name: "LLM Integration", href: "/services/custom-software" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Work", href: "/portfolio" },
      { name: "Contact", href: "/contact" },
    ],
  },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] overflow-hidden">
      {/* Main Footer Links Section */}
      <div className="border-t border-white/10 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-6">
                {footerSections.services.title}
              </h4>
              <ul className="space-y-3">
                {footerSections.services.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-6">
                {footerSections.solutions.title}
              </h4>
              <ul className="space-y-3">
                {footerSections.solutions.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-6">
                {footerSections.company.title}
              </h4>
              <ul className="space-y-3">
                {footerSections.company.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2 flex flex-col gap-4 md:items-start lg:items-end">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white text-sm font-medium rounded-none transition-all hover:bg-white/5 group"
              >
                Explore Our Work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white text-sm font-medium rounded-none transition-all hover:bg-white/5 group"
              >
                Get In Touch
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="border-t border-white/10 pt-12 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Email */}
            <div>
              <h4 className="text-[#0065F8] text-sm font-medium mb-4">Email</h4>
              <div>
                <a
                  href="mailto:info@aivoranext.com"
                  className="text-white text-lg hover:text-[#3B8BFF] transition-colors"
                >
                  info@aivoranext.com
                </a>
                <p className="text-gray-400 text-sm">(For Inquiries)</p>
              </div>
            </div>

            {/* Call */}
            <div>
              <h4 className="text-[#0065F8] text-sm font-medium mb-4">Call</h4>
              <div className="space-y-2">
                <div>
                  <a
                    href="tel:+917600393030"
                    className="text-white text-lg hover:text-[#3B8BFF] transition-colors"
                  >
                    +91 76003 93030
                  </a>
                </div>
              </div>
            </div>

            {/* Office */}
            <div>
              <h4 className="text-[#0065F8] text-sm font-medium mb-4">
                Office
              </h4>
              <p className="text-white text-lg leading-relaxed">
                11th Floor, Krish Cubical, A wing,
                <br />
                Sindhu Bhavan Marg, Thaltej,
                <br />
                Ahmedabad, Gujarat 380059
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright & Legal */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="text-gray-400">{siteConfig.copyright}</span>
            <span className="text-gray-400 hidden md:inline">/</span>
            {footerLinks.legal.map((link, index) => (
              <span key={link.name} className="flex items-center gap-4">
                <Link
                  href={link.link}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
                {index < footerLinks.legal.length - 1 && (
                  <span className="text-gray-400 hidden md:inline">/</span>
                )}
              </span>
            ))}
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-8">
            {/* Social Icons */}
            <div className="flex items-center gap-1 sm:gap-4">
              <a
                href="https://linkedin.com/company/aivoranext"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 active:text-[#0065F8]"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <span className="text-sm">Back to the top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Large Brand Name */}
      <div className="relative h-[180px] md:h-[240px] overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0065F8]/40 via-[#0065F8]/20 to-transparent" />

        {/* Brand Text */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <h2
            className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-bold tracking-tight leading-none select-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(0,101,248,0.8) 50%, rgba(0,101,248,0.4) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              transform: "translateY(20%)",
            }}
          >
            Aivora<span style={{ color: "rgba(255,255,255,0.85)" }}>next</span>
          </h2>
        </div>
      </div>
    </footer>
  );
}
