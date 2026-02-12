"use client";

import {
  AnimatedSection,
  staggerContainer,
  fadeInUp,
  motion,
} from "@/lib/motion";
import { Briefcase, ChevronRight } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  context: string;
  achievements: string[];
  impact: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "J-Squared Technologies",
    role: "MBA Intern, Senior Product Manager",
    period: "May 2025 - Sept 2025",
    context:
      "Rugged computing startup serving defense, agriculture, and mining industries",
    achievements: [
      "Built AI product strategy from scratch: conducted customer discovery interviews and market analysis to identify conveyor belt monitoring as the highest-value opportunity in a $2.5B market",
      "Created compelling business case showing $5-6M/day cost of equipment failures, driving urgency with mining operators",
      "Owned go-to-market execution: secured 3 pilot programs and formed strategic partnership with ExcelSense (industrial camera provider) to accelerate deployment",
    ],
    impact:
      "Launched the company's first AI product line, establishing foundation for future growth",
    tags: [
      "0\u21921 Product",
      "AI Strategy",
      "Customer Discovery",
      "Partnership Development",
    ],
  },
  {
    company: "Teck Resources",
    role: "Senior Product Manager",
    period: "Apr 2023 - Aug 2024",
    context:
      "Canada's largest diversified mining company producing copper, coal, and zinc",
    achievements: [
      "Led end-to-end product strategy and execution for $3M enterprise data platform consolidating operational data from 3 mine sites into a centralized reporting system",
      "Drove 70% improvement in reporting efficiency by standardizing KPIs across departments and increasing data accuracy from inconsistent sources to 80%+ reliability",
      "Established single source of truth for enterprise-wide insights, replacing fragmented data workflows and enabling real-time operational decision-making",
    ],
    impact:
      "Created foundation for AI-driven analytics across the organization, transforming how leadership makes operational decisions",
    tags: ["Data Platform", "Enterprise Product", "Analytics", "Stakeholder Management"],
  },
  {
    company: "Teck Resources",
    role: "Product Manager II",
    period: "Jan 2022 - Apr 2023",
    context: "Internal developer tools and productivity focus",
    achievements: [
      "Launched messaging service delivering 50K+ automated alerts monthly (Email, MS Teams, SMS)",
      "Shipped custom Databricks SQL interface improving query efficiency by 40%",
      "Delivered centralized alerting platform POC",
    ],
    impact:
      "Improved productivity and incident response across product, engineering, and operations teams",
    tags: ["Developer Tools", "Automation", "Databricks"],
  },
  {
    company: "Teck Resources",
    role: "Full-Stack Developer",
    period: "Sept 2020 - Jan 2022",
    context: "Supply chain optimization and ML integration",
    achievements: [
      "Developed core components of $150M+ supply chain optimization platform",
      "Integrated ML insights into UI and backend workflows for real-time operational decisions",
    ],
    impact:
      "Enabled data-driven supply chain decisions at scale",
    tags: ["Full-Stack", "ML Integration", "Supply Chain"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 lg:py-28 bg-[var(--muted)]/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-16 rounded-full" />
        </AnimatedSection>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-navy-400 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={fadeInUp}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-teal-500 rounded-full border-4 border-[var(--background)] -translate-x-1.5 md:-translate-x-1.5 mt-8 z-10 shadow-lg shadow-teal-500/30" />

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                <div className="bg-[var(--card)] rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 p-6 group">
                  {/* Period badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase
                      size={14}
                      className="text-teal-500"
                    />
                    <span className="text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2">
                    {exp.role}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)] mb-4 italic">
                    {exp.context}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-2 text-sm text-[var(--foreground)]"
                      >
                        <ChevronRight
                          size={16}
                          className="flex-shrink-0 mt-0.5 text-teal-500"
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Impact */}
                  <div className="bg-teal-500/5 border border-teal-500/10 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                      Impact: {exp.impact}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-[var(--muted)] text-[var(--muted-foreground)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
