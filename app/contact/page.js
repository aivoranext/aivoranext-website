"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import {
  contactPageContent,
} from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

// Why choose us points
const benefits = [
  "Free 30-minute consultation call",
  "Custom solution tailored to your needs",
  "Response within 24 hours",
  "No commitment required",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "",
    callVolume: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Spotlight Effect */}
      <div className="fixed top-0 left-0 w-full h-[800px] spotlight pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar currentPage="Contact" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0065F8]/10 border border-[#0065F8]/20">
              <span className="w-2 h-2 rounded-full bg-[#0065F8] animate-pulse" />
              <span className="text-[#3B8BFF] text-sm font-medium">{contactPageContent.hero.badge}</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6"
          >
            {contactPageContent.hero.titleLine1}{" "}
            <span className="text-gradient-blue">{contactPageContent.hero.titleLine2}</span>
            <br />
            {contactPageContent.hero.titleLine3}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Ready to transform your business with AI? Let&apos;s discuss your project
            and explore how we can help you automate and scale.
          </motion.p>
        </div>

        {/* Blue Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0065F8]/20 blur-[150px] rounded-full pointer-events-none"
        />
      </section>

      {/* Main Content - Form and Contact Info */}
      <section className="relative py-16 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-stretch">
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-2 flex flex-col">
              <AnimatedSection className="mb-6">
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
                  Let&apos;s build something <span className="text-gradient-blue">amazing</span> together
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Whether you&apos;re looking to deploy Voice AI agents, automate workflows,
                  or build custom AI solutions, we&apos;re here to help turn your vision into reality.
                </p>
              </AnimatedSection>

              {/* Benefits */}
              <AnimatedSection delay={0.1} className="mb-6">
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#0065F8] shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Contact Cards */}
              <AnimatedSection delay={0.2} className="flex-1 flex flex-col justify-end space-y-3">
                {/* Email */}
                <motion.a
                  href={`mailto:${contactPageContent.info.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0065F8]/30 hover:bg-white/[0.07] transition-all group"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0065F8]/10 flex items-center justify-center group-hover:bg-[#0065F8]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#0065F8]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email us at</p>
                    <p className="text-white font-medium group-hover:text-[#3B8BFF] transition-colors">
                      {contactPageContent.info.email}
                    </p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href={`tel:+917046928404`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0065F8]/30 hover:bg-white/[0.07] transition-all group"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0065F8]/10 flex items-center justify-center group-hover:bg-[#0065F8]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#0065F8]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Call us at</p>
                    <p className="text-white font-medium group-hover:text-[#3B8BFF] transition-colors">
                      {contactPageContent.info.phone}
                    </p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0065F8]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#0065F8]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Our office</p>
                    <p className="text-white font-medium leading-relaxed">
                      {contactPageContent.info.address}
                    </p>
                  </div>
                </motion.div>

                {/* Working Hours */}
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0065F8]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#0065F8]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Working hours</p>
                    <p className="text-white font-medium">Mon - Fri, 10AM - 7PM IST</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-3 flex flex-col">
              <AnimatedSection className="flex-1 flex flex-col">
                <motion.div
                  className="glass-card rounded-3xl p-8 md:p-10 border border-white/10 flex-1 flex flex-col"
                  whileHover={{ boxShadow: "0 0 60px rgba(0, 101, 248, 0.1)" }}
                >
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 rounded-full bg-[#0065F8]/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-[#0065F8]" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-3">Thank you!</h3>
                      <p className="text-gray-400 max-w-md mx-auto">
                        Your message has been received. We&apos;ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">
                            {contactPageContent.form.fields.firstName.label}
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            placeholder={contactPageContent.form.fields.firstName.placeholder}
                            className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 placeholder:text-gray-600"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">
                            {contactPageContent.form.fields.lastName.label}
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            placeholder={contactPageContent.form.fields.lastName.placeholder}
                            className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 placeholder:text-gray-600"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">
                            {contactPageContent.form.fields.email.label}
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder={contactPageContent.form.fields.email.placeholder}
                            className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 placeholder:text-gray-600"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">
                            {contactPageContent.form.fields.phone.label}
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={contactPageContent.form.fields.phone.placeholder}
                            className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 placeholder:text-gray-600"
                          />
                        </div>
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          {contactPageContent.form.fields.company.label}
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={contactPageContent.form.fields.company.placeholder}
                          className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 placeholder:text-gray-600"
                        />
                      </div>

                      {/* Service Interest */}
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          {contactPageContent.form.fields.serviceInterest.label}
                        </label>
                        <select
                          name="serviceInterest"
                          value={formData.serviceInterest}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: 'right 0.75rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.5em 1.5em',
                          }}
                        >
                          <option value="" className="bg-[#0a0a0a]">
                            {contactPageContent.form.fields.serviceInterest.placeholder}
                          </option>
                          {contactPageContent.form.fields.serviceInterest.options.map((option) => (
                            <option key={option} value={option} className="bg-[#0a0a0a]">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Call Volume - Conditional */}
                      {formData.serviceInterest === "Voice AI Agents" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <label className="block text-gray-400 text-sm mb-2">
                            {contactPageContent.form.fields.callVolume.label}
                          </label>
                          <select
                            name="callVolume"
                            value={formData.callVolume}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 appearance-none cursor-pointer"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                              backgroundPosition: 'right 0.75rem center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: '1.5em 1.5em',
                            }}
                          >
                            <option value="" className="bg-[#0a0a0a]">
                              {contactPageContent.form.fields.callVolume.placeholder}
                            </option>
                            {contactPageContent.form.fields.callVolume.options.map((option) => (
                              <option key={option} value={option} className="bg-[#0a0a0a]">
                                {option}
                              </option>
                            ))}
                          </select>
                        </motion.div>
                      )}

                      {/* Message */}
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          {contactPageContent.form.fields.message.label}
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder={contactPageContent.form.fields.message.placeholder}
                          rows={4}
                          className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-4 text-sm outline-none focus:border-[#0065F8] transition-all focus:ring-2 focus:ring-[#0065F8]/20 placeholder:text-gray-600 resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#0065F8] hover:bg-[#3B8BFF] text-white text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,101,248,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            {contactPageContent.form.submitButton} <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
