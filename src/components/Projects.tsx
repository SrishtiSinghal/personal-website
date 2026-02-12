"use client";

import {
  AnimatedSection,
  staggerContainer,
  fadeInUp,
  motion,
} from "@/lib/motion";
import { ExternalLink, Rocket, Heart, Train } from "lucide-react";

interface Project {
  title: string;
  role: string;
  period: string;
  icon: typeof Rocket;
  description: string;
  highlights: string[];
  tags: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Hyperios @ Creative Destruction Lab",
    role: "GTM Lead",
    period: "Sept 2025 - Present",
    icon: Rocket,
    description:
      "Space environment intelligence platform selected for CDL, one of the world's top startup accelerators.",
    highlights: [
      "Leading commercialization and fundraising strategy",
      "Driving capital formation and customer acquisition",
      "Building go-to-market playbook for space-tech",
    ],
    tags: ["Space-Tech", "GTM Strategy", "Fundraising"],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Muse Health",
    role: "Growth & Partnerships Strategist",
    period: "Sept 2025 - Jan 2026",
    icon: Heart,
    description:
      "Market research and GTM strategy for US/European expansion of wearable neurotechnology products.",
    highlights: [
      "Represented company at CES Las Vegas 2026",
      "Secured brand partnerships for product expansion",
      "Developed international market entry strategy",
    ],
    tags: ["Health-Tech", "CES 2026", "Partnerships"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Toronto Transit Commission",
    role: "Strategic Foresight Consultant",
    period: "Sept 2025 - Dec 2025",
    icon: Train,
    description:
      "Developed long-term mobility strategy through 2035 to increase ridership and compete with ride-sharing.",
    highlights: [
      "Presented strategy to TTC leadership",
      "Identified product/technology initiatives for growth",
      "Analyzed competitive dynamics vs. Uber/Lyft",
    ],
    tags: ["Public Transit", "Strategy", "Foresight"],
    gradient: "from-amber-500 to-orange-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-4 rounded-full" />
          <p className="text-center text-[var(--muted-foreground)] mb-12 max-w-2xl mx-auto">
            Select projects from my MBA experience, working with startups,
            enterprises, and public-sector organizations.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="group bg-[var(--card)] rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient header */}
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-6">
                {/* Icon and period */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <project.icon size={22} className="text-white" />
                  </div>
                  <span className="text-xs text-[var(--muted-foreground)] font-medium">
                    {project.period}
                  </span>
                </div>

                {/* Title and role */}
                <h3 className="text-lg font-bold mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mb-3">
                  {project.role}
                </p>

                {/* Description */}
                <p className="text-sm text-[var(--muted-foreground)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-[var(--foreground)]"
                    >
                      <ExternalLink
                        size={12}
                        className="flex-shrink-0 mt-1 text-teal-500"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
