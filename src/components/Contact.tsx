"use client";

import { AnimatedSection, fadeInUp, motion, staggerContainer } from "@/lib/motion";
import { Mail, Linkedin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "srishti.singhal@rotman.utoronto.ca",
    href: "mailto:srishti.singhal@rotman.utoronto.ca",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/srishti98",
    href: "https://linkedin.com/in/srishti98",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[var(--muted)]/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-4 rounded-full" />
          <p className="text-center text-[var(--muted-foreground)] mb-12 max-w-xl mx-auto">
            I&apos;m always open to discussing new opportunities, AI product
            ideas, or just connecting over coffee. Let&apos;s talk!
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactLinks.map((link) => (
              <motion.div key={link.label} variants={fadeInUp}>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card)] border shadow-sm hover:shadow-md hover:border-teal-500/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                      <link.icon
                        size={20}
                        className="text-teal-600 dark:text-teal-400"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted-foreground)] font-medium uppercase tracking-wider">
                        {link.label}
                      </p>
                      <p className="text-sm font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card)] border shadow-sm">
                    <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center">
                      <link.icon
                        size={20}
                        className="text-teal-600 dark:text-teal-400"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted-foreground)] font-medium uppercase tracking-wider">
                        {link.label}
                      </p>
                      <p className="text-sm font-semibold">{link.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
