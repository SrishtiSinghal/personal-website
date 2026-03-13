"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-50 via-white to-clay-50 dark:from-warm-950 dark:via-warm-900 dark:to-warm-950 opacity-80" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-clay-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-warm-400/10 rounded-full blur-3xl" />

      {/* Hero area */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-warm-900 dark:text-white mb-5 tracking-tight"
              >
                Srishti Singhal
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed text-black dark:text-white"
              >
                  I like to build and share great product experiences with the
                  world. Now I&apos;m focused on doing it faster, more
                  purposefully, and with AI in the loop.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base sm:text-lg text-[var(--muted-foreground)] mb-8 max-w-xl mx-auto lg:mx-0 tracking-wide"
              >
                Rotman MBA 2026, UVic CS 2020
              </motion.p>
            </motion.div>

            {/* Headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-clay-400 to-warm-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src="/profile.jpeg"
                      alt="Srishti Singhal"
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-clay-400/20 scale-110 animate-pulse" />
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollTo("#about")}
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-[var(--muted-foreground)] hover:text-clay-500 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
