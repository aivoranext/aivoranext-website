"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { siteConfig, navigation } from "@/lib/content";

export default function Navbar({ currentPage = "Home" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                {item.dropdown ? (
                  <div className="relative">
                    <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium nav-link flex items-center gap-1">
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
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-[#0065F8] hover:bg-[#3B8BFF] text-white text-sm font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(0,101,248,0.4)]"
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
                  <div className="space-y-4">
                    <span className="block text-white text-lg font-medium">
                      {item.name}
                    </span>
                    <div className="pl-4 space-y-3 border-l border-white/10">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-gray-400 text-base hover:text-[#0065F8] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : isInternalRoute(item.link) ? (
                  <Link
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white text-lg font-medium hover:text-[#0065F8] transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white text-lg font-medium hover:text-[#0065F8] transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0065F8] text-white text-sm font-semibold rounded-lg"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </motion.header>
    </AnimatePresence>
  );
}
