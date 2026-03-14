"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);

    // Hash link (e.g. /#about, /#contact)
    if (href.startsWith("/#")) {
      const hash = href.slice(1); // "#about"
      if (pathname === "/") {
        // Already on homepage, just scroll
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to homepage then scroll
        router.push(href);
      }
      return;
    }

    // Regular route link
    router.push(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleClick(link.href)}
                className={`px-4 py-2 text-base font-medium transition-all duration-200 rounded-lg ${
                  pathname === link.href
                    ? "text-clay-600 dark:text-clay-400 bg-clay-500/10"
                    : "text-[var(--foreground)] hover:text-clay-600 dark:hover:text-clay-400 hover:bg-[var(--muted)]"
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="w-px h-6 bg-[var(--border)] mx-2" />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="/Srishti%27s%20Resume.pdf"
              download="Srishti's Resume.pdf"
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-clay-500 text-white hover:bg-clay-600 transition-colors"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleClick(link.href)}
                  className={`block w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    pathname === link.href
                      ? "text-clay-600 dark:text-clay-400 bg-[var(--muted)]"
                      : "text-[var(--foreground)] hover:text-clay-600 dark:hover:text-clay-400 hover:bg-[var(--muted)]"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a
                href="/Srishti%27s%20Resume.pdf"
                download="Srishti's Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-clay-500 hover:text-clay-600 transition-colors"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
