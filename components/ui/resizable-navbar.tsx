"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX, IconChevronDown, IconChevronRight, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}


interface NavItemsProps {
  items: { name: string; link: string; hasDropdown?: boolean }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 z-40 w-full transition-all duration-500", visible ? "top-6" : "top-0", className)}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        if (typeof child.type === "string") return child; // avoid passing 'visible' to DOM nodes
        return React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible });
      })}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start transition-all duration-500 ease-in-out lg:flex",
        visible
          ? "max-w-7xl rounded-full bg-[#030304]/80 px-6 py-2.5 backdrop-blur-md border border-white/5"
          : "max-w-full rounded-none bg-transparent px-5 py-3 border-transparent",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        if (typeof child.type === "string") return child;
        return React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible });
      })}
    </motion.div>
  );
};



const MegaMenu = ({ active, onClose }: { active: string | null; onClose: () => void }) => {
  const [activeCategory, setActiveCategory] = useState("AI Systems & Automation");

  if (!active) return null;

  const categories = {
    "AI Systems & Automation": [
      "AI Strategy & System Design",
      "AI Agents for Workflows",
      "Conversational & Voice AI",
      "Knowledge Systems (RAG)",
      "AI Automation Pipelines",
      "AI Governance & Monitoring",
    ],
    "AI-First Engineering": [
      "Custom AI Software Development",
      "AI-Native System Architecture",
      "SaaS & Platform Engineering",
      "API & Data Infrastructure",
      "Cloud, Security & DevOps",
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full pt-4"
      onMouseLeave={onClose}
    >
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#09090b] border border-white/10 p-8 shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50" />

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Categories */}
          <div className="col-span-3 space-y-2 border-r border-white/5 pr-8">
            {Object.keys(categories).map((category) => (
              <div
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
                className={cn(
                  "group flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors",
                  activeCategory === category ? "bg-white/10 text-white" : "hover:bg-white/5 text-gray-400"
                )}
              >
                <span className={cn("text-lg font-medium transition-colors", activeCategory === category ? "text-blue-400" : "group-hover:text-blue-400")}>
                  {category}
                </span>
                <IconChevronRight
                  className={cn(
                    "w-4 h-4 transition-all",
                    activeCategory === category ? "text-blue-400 opacity-100" : "text-gray-600 group-hover:text-blue-400 opacity-0 group-hover:opacity-100"
                  )}
                />
              </div>
            ))}

            <button className="mt-8 flex items-center gap-2 text-xs font-semibold tracking-wider text-white border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 transition-colors uppercase">
              Free Consultation <IconArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Middle Column - Sub Links */}
          <div className="col-span-5 content-start pt-2">
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider opacity-50">{activeCategory}</h3>
            <div className="grid grid-cols-1 gap-y-3">
              {categories[activeCategory as keyof typeof categories].map((item) => (
                <a key={item} href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Featured */}
          <div className="col-span-4 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-white font-semibold mb-2 relative z-10">AI Architecture</h4>
              <p className="text-xs text-gray-400 leading-relaxed relative z-10">
                We combine deep AI expertise with production‑grade system architecture to deliver intelligent solutions that scale in the real world.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-white font-semibold mb-2 relative z-10">Why Aivoranext?</h4>
              <p className="text-xs text-gray-400 leading-relaxed relative z-10">
                Business Impact, Not Model Obsession. We measure success in outcomes — reducing costs, increasing speed, and unlocking revenue.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-400 text-sm">
            Ready to transform? <a href="#contact" className="text-white font-semibold hover:text-blue-400 transition-colors ml-1">TALK TO AN ARCHITECT</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (idx: number, item: any) => {
    setHovered(idx);
    if (item.hasDropdown) {
      setActiveMenu(item.name);
    } else {
      setActiveMenu(null);
    }
  };

  return (
    <div className="flex flex-col items-center" onMouseLeave={() => { setHovered(null); setActiveMenu(null); }}>
      <motion.div
        className={cn(
          "hidden flex-row items-center justify-center space-x-1 lg:space-x-2 text-sm font-medium text-zinc-600 transition duration-200 lg:flex",
          className
        )}
      >
        {items.map((item, idx) => (
          <React.Fragment key={`link-${idx}`}>
            {idx > 0 && <span className="text-white/20 px-2 font-light">/</span>}
            <a
              onMouseEnter={() => handleMouseEnter(idx, item)}
              onClick={onItemClick}
              className={cn(
                "relative px-3 py-2 text-neutral-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer",
                activeMenu === item.name && "text-white"
              )}
              href={item.link}
            >
              <span className="relative z-20 flex items-center gap-1">
                {item.name}
                {item.hasDropdown && <IconChevronDown className={cn("w-4 h-4 text-neutral-500 transition-transform duration-200", activeMenu === item.name && "rotate-180 text-white")} stroke={1.5} />}
              </span>
              {activeMenu === item.name && (
                <motion.div layoutId="active-nav" className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
              )}
            </a>
          </React.Fragment>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeMenu && (
          <div className="absolute top-[calc(100%+10px)] left-0 w-full z-50 px-4">
            <MegaMenu active={activeMenu} onClose={() => setActiveMenu(null)} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-2 py-3 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible }) : child
      )}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
  return <div className={cn("flex w-full flex-row items-center justify-between", className)}>{children}</div>;
};

export const MobileNavMenu = ({ children, className, isOpen }: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return isOpen ? <IconX className="text-black dark:text-white" onClick={onClick} /> : <IconMenu2 className="text-black dark:text-white" onClick={onClick} />;
};

export const NavbarLogo = ({ visible }: { visible?: boolean }) => {
  const primarySrc = "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765091977/Aivoranext2_uk7ol7.png";
  const compactSrc = "https://res.cloudinary.com/dn0wyo8zm/image/upload/v1765092013/Aivoranext_icon_rjohn1.png";
  const useCompact = !!visible;
  return (
    <a href="#hero" className="relative z-20 mr-4 flex items-center space-x-3 px-3 py-2 text-sm font-normal text-black dark:text-white">
      <Image
        src={useCompact ? compactSrc : primarySrc}
        alt="Aivoranext"
        width={useCompact ? 48 : 160}
        height={useCompact ? 48 : 32}
        className="h-8 w-auto"
        priority
      />
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (React.ComponentPropsWithoutRef<"a"> | React.ComponentPropsWithoutRef<"button">)) => {
  // Updated base styles to match "INQUIRY NOW" design: pill shape (rounded-full), uppercase, bold
  const baseStyles =
    "px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase relative cursor-pointer transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] border border-transparent",
    secondary: "bg-transparent shadow-none text-white",
    dark: "bg-black text-white shadow-none",
    gradient: "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-none",
  };

  return (
    <Tag href={href || undefined} className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </Tag>
  );
};

