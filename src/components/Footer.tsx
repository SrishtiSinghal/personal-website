"use client";

import { Linkedin, Github, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/srishti98",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/srishtisinghal",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:srishti.singhal@rotman.utoronto.ca",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-[var(--card)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} Srishti Singhal. All rights
            reserved.
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--muted-foreground)] hover:text-teal-500 hover:bg-teal-500/10 transition-all"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
