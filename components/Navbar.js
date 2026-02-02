"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { siteConfig, navigation } from "@/lib/content";

export default function Navbar({ currentPage = "Home" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const isInternalRoute = (link) => link.startsWith('/') && !link.includes('#');

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5"
      >
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={180}
                height={24}
                className="h-6 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative group"
              >
                {item.megaMenu ? (
                  <div className="relative">
                    <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium nav-link flex items-center gap-1">
                      {item.name}
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                    </button>

                    {/* Mega Menu */}
                    <div className="fixed left-0 right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="max-w-7xl mx-auto px-6">
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                          <div className="grid grid-cols-12 min-h-[400px]">

                            {/* Categories - Left Column */}
                            <div className="col-span-3 border-r border-white/10 p-6">
                              <div className="space-y-2">
                                {item.categories.map((category, catIndex) => (
                                  <button
                                    key={category.name}
                                    onMouseEnter={() => setActiveCategory(catIndex)}
                                    className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all ${
                                      activeCategory === catIndex
                                        ? "text-[#0065F8] bg-[#0065F8]/10"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                                  >
                                    {category.name}
                                  </button>
                                ))}
                              </div>

                              {/* View All Services Button */}
                              <div className="mt-8 pt-6 border-t border-white/10">
                                <Link
                                  href="/services"
                                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#0065F8] text-[#0065F8] hover:bg-[#0065F8] hover:text-white text-sm font-semibold rounded-none transition-all"
                                >
                                  VIEW ALL SERVICES <ArrowRight className="w-4 h-4" />
                                </Link>
                              </div>
                            </div>

                            {/* Services - Middle Columns */}
                            <div className="col-span-5 p-6">
                              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                {item.categories[activeCategory]?.services.map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.link}
                                    className="block py-3 text-gray-400 hover:text-white transition-colors text-sm"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Featured Images - Right Column */}
                            <div className="col-span-4 bg-white/[0.02] p-6">
                              <div className="grid grid-cols-2 gap-3 h-full">
                                {item.featuredImages?.map((img, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    className="relative rounded-xl overflow-hidden"
                                  >
                                    <Image
                                      src={img}
                                      alt="Featured project"
                                      width={200}
                                      height={150}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Bottom CTA Bar */}
                          <div className="border-t border-white/10 px-6 py-4 bg-white/[0.02]">
                            <p className="text-center text-gray-400 text-sm">
                              Want to build your AI solution? Let&apos;s connect!{" "}
                              <Link href="/contact" className="text-white font-semibold hover:text-[#0065F8] transition-colors">
                                CONTACT US
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : isInternalRoute(item.link) ? (
                  <Link
                    href={item.link}
                    className={`text-sm font-medium nav-link transition-colors ${
                      item.name === currentPage ? "text-[#0065F8]" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium nav-link"
                  >
                    {item.name}
                  </a>
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
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-[#0065F8] hover:bg-[#3B8BFF] text-white text-sm font-semibold rounded-none transition-all hover:shadow-[0_0_30px_rgba(0,101,248,0.4)]"
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
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10 max-h-[80vh] overflow-y-auto"
        >
          <div className="px-6 py-6 space-y-4">
            {navigation.navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.megaMenu ? (
                  <div className="space-y-3">
                    <Link
                      href={item.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white text-lg font-medium hover:text-[#0065F8] transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.categories.map((category) => (
                      <div key={category.name} className="pl-4 space-y-1.5 border-l-2 border-[#0065F8]/30">
                        <span className="block text-[#0065F8] text-xs font-semibold uppercase tracking-wider py-1">
                          {category.name}
                        </span>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                          {category.services.slice(0, 4).map((service) => (
                            <Link
                              key={service.name}
                              href={service.link}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-gray-400 text-sm py-1.5 hover:text-[#0065F8] transition-colors active:text-[#0065F8]"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                        {category.services.length > 4 && (
                          <Link
                            href={item.link}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[#0065F8] text-xs font-medium pt-1"
                          >
                            +{category.services.length - 4} more
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                ) : isInternalRoute(item.link) ? (
                  <Link
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white text-lg font-medium py-2 hover:text-[#0065F8] transition-colors active:text-[#0065F8]"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white text-lg font-medium py-2 hover:text-[#0065F8] transition-colors active:text-[#0065F8]"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0065F8] text-white text-sm font-semibold rounded-none w-full justify-center mt-4"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </motion.header>
    </AnimatePresence>
  );
}
