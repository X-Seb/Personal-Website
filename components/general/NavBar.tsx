"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Games", href: "/#videogames" },
  { name: "Quest Logs", href: "/quest-log" },
  { name: "Videos", href: "/#videos" },
  { name: "Lore", href: "/#story" },
  { name: "Inventory", href: "/inventory" },
];

// Animation Variants
const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      when: "afterChildren", // Wait for children to hide before fading out
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      when: "beforeChildren", // Fade in background FIRST, then show links
      staggerChildren: 0.1,
      delayChildren: 0.1, // Small pause to ensure background is set
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 },
};

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 1. SCROLL LISTENER
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. LOCK BODY SCROLL WHEN MENU IS OPEN
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "unset"; // Enable scroll
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          // If menu is open, we force transparent because the Overlay provides the black bg
          isOpen
            ? "bg-transparent border-transparent"
            : scrolled
            ? "bg-black/90 backdrop-blur-md border-purple-900/30 py-4 shadow-lg"
            : "bg-gradient-to-b from-black/80 to-transparent border-transparent py-6"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO (High Z-Index to sit above overlay) */}
        <Link href="/" className="group relative text-3xl font-bold tracking-tighter text-white font-pixel z-50">
          <span className="group-hover:text-purple-400 transition-colors duration-300">SEB</span>
          <span className="text-purple-600 group-hover:text-purple-400 transition-colors duration-300">.DEV</span>
          <span className="animate-pulse text-purple-500">_</span>
          <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-10 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="
                relative text-sm font-bold uppercase tracking-widest text-neutral-400 
                transition-all duration-300 
                hover:text-white hover:scale-115 hover:[text-shadow:_0_0_12px_rgba(255,255,255,0.6)]
              "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON (High Z-Index) */}
        <button
          className="md:hidden text-neutral-400 hover:text-white z-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-bold uppercase tracking-widest text-neutral-400 hover:text-purple-400 hover:scale-110 transition-all font-pixel"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
