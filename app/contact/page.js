"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  siteConfig,
  navigation,
  contactPageContent,
  footerLinks,
} from "@/lib/content";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
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

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "",
    callVolume: "",
    timeline: "",
    message: "",
  });
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Side Purple Glows - Like Nubien Contact Page */}
      <div className="fixed top-0 left-0 w-[400px] h-full opacity-30 pointer-events-none z-0">
        <div className="absolute top-1/3 left-0 w-[300px] h-[400px] bg-[#0065F8]/50 blur-[150px] rounded-full" />
      </div>
      <div className="fixed top-0 right-0 w-[400px] h-full opacity-30 pointer-events-none z-0">
        <div className="absolute top-1/2 right-0 w-[300px] h-[400px] bg-[#0065F8]/50 blur-[150px] rounded-full" />
      </div>

      {/* Spotlight Effect */}
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />

      {/* Navigation */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={180}
                height={24}
                className="h-6 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative group"
              >
                {item.dropdown ? (
                  <div className="relative">
                    <button className={`text-sm font-medium nav-link flex items-center gap-1 transition-colors ${
                      item.name === "Services" ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-white"
                    }`}>
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-2 min-w-[200px] shadow-xl">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.link}
                            className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className={`text-sm font-medium nav-link transition-colors ${
                      item.name === "Contact" ? "text-[#0065F8]" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-[#0065F8] hover:bg-[#3B8BFF] text-white text-sm font-semibold rounded-full transition-all hover:shadow-[0_0_30px_rgba(0,101,248,0.4)]"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-6 py-8 space-y-6">
            {navigation.navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.dropdown ? (
                  <div className="space-y-3">
                    <span className="block text-white text-lg font-medium">{item.name}</span>
                    <div className="pl-4 space-y-2 border-l border-white/10">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-gray-400 hover:text-[#0065F8] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-lg font-medium transition-colors ${
                      item.name === "Contact" ? "text-[#0065F8]" : "text-white hover:text-[#0065F8]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0065F8] text-white text-sm font-semibold rounded-full"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </motion.header>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[50vh] flex flex-col items-center justify-center pt-32 pb-12 px-6"
      >
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="badge-pill flex items-center gap-3 px-5 py-3 rounded-full mb-12 animate-float"
          >
            <span className="bg-[#0065F8] text-white text-xs font-bold px-3 py-1 rounded-full">
              {contactPageContent.hero.year}
            </span>
            <span className="text-white text-sm font-medium">{contactPageContent.hero.badge}</span>
          </motion.div>

          {/* Main Headline with Reflection */}
          <div className="text-center relative max-w-5xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-4"
            >
              {contactPageContent.hero.titleLine1}
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-light text-gradient-purple tracking-tight leading-[1.1] mb-4"
            >
              <em>{contactPageContent.hero.titleLine2}</em>
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-reflection"
              data-text={contactPageContent.hero.titleLine3}
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              <em>{contactPageContent.hero.titleLine3}</em>
            </motion.h2>
          </div>
        </motion.div>

        {/* Purple Glow under text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] gradient-purple-glow blur-3xl pointer-events-none" 
        />
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <motion.div 
              className="glass-card rounded-3xl p-8 md:p-12"
              whileHover={{ boxShadow: "0 0 60px rgba(0, 101, 248, 0.1)" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={fadeInUp}>
                    <label className="block text-gray-400 text-sm mb-2">{contactPageContent.form.fields.firstName.label}</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder={contactPageContent.form.fields.firstName.placeholder}
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 placeholder:text-gray-600"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <label className="block text-gray-400 text-sm mb-2">{contactPageContent.form.fields.lastName.label}</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder={contactPageContent.form.fields.lastName.placeholder}
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 placeholder:text-gray-600"
                    />
                  </motion.div>
                </motion.div>

                {/* Email & Phone */}
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={fadeInUp}>
                    <label className="block text-gray-400 text-sm mb-2">{contactPageContent.form.fields.email.label}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contactPageContent.form.fields.email.placeholder}
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 placeholder:text-gray-600"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <label className="block text-gray-400 text-sm mb-2">{contactPageContent.form.fields.phone.label}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={contactPageContent.form.fields.phone.placeholder}
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 placeholder:text-gray-600"
                    />
                  </motion.div>
                </motion.div>

                {/* Company Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-400 text-sm mb-2">{contactPageContent.form.fields.company.label}</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={contactPageContent.form.fields.company.placeholder}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 placeholder:text-gray-600"
                  />
                </motion.div>

                {/* Service Interest */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-400 text-sm mb-2">{contactPageContent.form.fields.serviceInterest.label}</label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                    }}
                  >
                    <option value="" className="bg-black">{contactPageContent.form.fields.serviceInterest.placeholder}</option>
                    {contactPageContent.form.fields.serviceInterest.options.map((option) => (
                      <option key={option} value={option} className="bg-black">{option}</option>
                    ))}
                  </select>
                </motion.div>

                {/* Call Volume - Conditional (shown when Voice AI is selected) */}
                {formData.serviceInterest === "Voice AI Agents" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -20, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-gray-400 text-sm mb-2">{contactPageContent.form.fields.callVolume.label}</label>
                    <select
                      name="callVolume"
                      value={formData.callVolume}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                      }}
                    >
                      <option value="" className="bg-black">{contactPageContent.form.fields.callVolume.placeholder}</option>
                      {contactPageContent.form.fields.callVolume.options.map((option) => (
                        <option key={option} value={option} className="bg-black">{option}</option>
                      ))}
                    </select>
                  </motion.div>
                )}

                {/* Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-400 text-sm mb-2">{contactPageContent.form.fields.timeline.label}</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                    }}
                  >
                    <option value="" className="bg-black">{contactPageContent.form.fields.timeline.placeholder}</option>
                    {contactPageContent.form.fields.timeline.options.map((option) => (
                      <option key={option} value={option} className="bg-black">{option}</option>
                    ))}
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-400 text-sm mb-2">{contactPageContent.form.fields.message.label}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contactPageContent.form.fields.message.placeholder}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 placeholder:text-gray-600 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-[#0065F8] hover:bg-[#3B8BFF] text-white text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,101,248,0.4)]"
                  >
                    {contactPageContent.form.submitButton} <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Email Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-[#0065F8]/20 flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <Mail className="w-6 h-6 text-[#0065F8]" />
              </motion.div>
              <h3 className="text-white font-medium text-lg mb-2">Email Us</h3>
              <p className="text-gray-500 text-sm mb-4">Send us an email anytime</p>
              <a
                href={`mailto:${contactPageContent.info.email}`}
                className="text-[#0065F8] hover:text-[#3B8BFF] transition-colors"
              >
                {contactPageContent.info.email}
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-[#0065F8]/20 flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <Phone className="w-6 h-6 text-[#0065F8]" />
              </motion.div>
              <h3 className="text-white font-medium text-lg mb-2">Call Us</h3>
              <p className="text-gray-500 text-sm mb-4">Mon-Fri from 9am to 6pm</p>
              <a
                href={`tel:${contactPageContent.info.phone.replace(/\s/g, '')}`}
                className="text-[#0065F8] hover:text-[#3B8BFF] transition-colors"
              >
                {contactPageContent.info.phone}
              </a>
            </motion.div>

            {/* Address Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-[#0065F8]/20 flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <MapPin className="w-6 h-6 text-[#0065F8]" />
              </motion.div>
              <h3 className="text-white font-medium text-lg mb-2">Visit Us</h3>
              <p className="text-gray-500 text-sm mb-4">Our office location</p>
              <span className="text-[#0065F8]">
                {contactPageContent.info.address}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-gradient border-t border-white/5 pt-20 pb-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            {/* Brand */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xs"
            >
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  width={200}
                  height={26}
                  className="h-7 w-auto"
                />
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed">
                {siteConfig.footerDesc}
              </p>
            </motion.div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {/* Pages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-medium text-sm mb-6 uppercase tracking-wider">Pages</h4>
                <ul className="space-y-4">
                  {footerLinks.templatePages.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.link}
                        className="text-gray-500 hover:text-white text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-medium text-sm mb-6 uppercase tracking-wider">Social</h4>
                <ul className="space-y-4">
                  {footerLinks.social.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.link}
                        className="text-gray-500 hover:text-white text-sm transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Subscribe */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-medium text-sm mb-6 uppercase tracking-wider">Subscribe</h4>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm outline-none focus:border-[#0065F8] transition-colors placeholder:text-gray-600"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-[#0065F8] hover:bg-[#3B8BFF] text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Subscribe
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">{siteConfig.copyright}</p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  className="text-gray-600 hover:text-gray-400 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
