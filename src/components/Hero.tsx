"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Mail } from "lucide-react";
import { AnimatedSection } from "@/lib/motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-teal-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl" />

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
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-navy-900 dark:text-white mb-5 tracking-tight"
              >
                Srishti Singhal
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4"
              >
                <span className="gradient-text">
                  Building AI products that solve real problems at scale
                </span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base sm:text-lg text-[var(--muted-foreground)] mb-8 max-w-xl mx-auto lg:mx-0 tracking-wide"
              >
                Product Manager | 0&#8594;1 Specialist | MBA Candidate
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button
                  onClick={() => scrollTo("#projects")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
                >
                  <Briefcase size={18} />
                  View Projects
                </button>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-navy-200 dark:border-navy-600 text-navy-700 dark:text-navy-200 font-medium hover:bg-navy-50 dark:hover:bg-navy-800 transition-all"
                >
                  <Mail size={18} />
                  Contact Me
                </button>
              </motion.div>
            </motion.div>

            {/* Headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-teal-400 to-navy-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src="/headshot.jpeg"
                      alt="Srishti Singhal"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-teal-400/20 scale-110 animate-pulse" />
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
              className="text-[var(--muted-foreground)] hover:text-teal-500 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* About section - flows seamlessly from hero */}
      <div id="about" className="relative z-10 pb-20 lg:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="space-y-8">
            <p className="text-lg leading-relaxed text-[var(--foreground)]">
              I started my career writing code at a mining company, but quickly
              realized I was more excited by the &quot;why&quot; and
              &quot;what&quot; than just the &quot;how.&quot; I transitioned from
              software developer to product manager, eventually owning a $3M
              enterprise data platform at Teck Resources and opening an entirely
              new AI product line at J-Squared Technologies, securing our first 3
              pilots in just a few months.
            </p>

            <p className="text-lg leading-relaxed text-[var(--foreground)]">
              What sets me apart is that I speak both &quot;engineer&quot; and
              &quot;executive&quot; fluently. I can debug code in the morning and
              present ROI projections to leadership in the afternoon. I come from
              an entrepreneurial family (my dad and brother both run their own
              businesses, with my brother leading an AI startup in San Francisco),
              so building things and taking calculated risks is in my DNA. Right
              now, I&apos;m wrapping up my MBA at Rotman, sharpening my strategic
              toolkit for the next chapter.
            </p>

            <p className="text-lg leading-relaxed text-[var(--foreground)]">
              When I&apos;m not thinking about product strategy, you&apos;ll find
              me on ski slopes in winter, tennis courts in summer, or exploring
              hiking trails year-round. I&apos;m always hunting for
              Toronto&apos;s best coffee spots and love geeking out about AI,
              product trends, or the latest tech developments.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
