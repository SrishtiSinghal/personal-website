"use client";

import { useState, useEffect } from "react";
import {
  AnimatedSection,
  staggerContainer,
  fadeInUp,
  slideInLeft,
  slideInRight,
  scaleIn,
  motion,
} from "@/lib/motion";
import { Briefcase, CheckCircle2, Zap } from "lucide-react";

interface ExperienceItem {
  company: string;
  companyInitial: string;
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
    companyInitial: "J",
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
      "0→1 Product",
      "AI Strategy",
      "Customer Discovery",
      "Partnership Development",
    ],
  },
  {
    company: "Teck Resources",
    companyInitial: "T",
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
    companyInitial: "T",
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
    companyInitial: "T",
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

function highlightMetrics(text: string) {
  const metricPattern = /(\$[\d,.-]+[MBK]?(?:\/day)?\+?|\d+[%+]+|\d{2,}K\+)/g;
  const parts = text.split(metricPattern);

  // split with a capturing group places matches at odd indices
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-bold text-teal-600 dark:text-teal-400">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function Experience() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-px">
            <div className="w-full h-full bg-gradient-to-b from-teal-400 via-teal-600 to-slate-400 dark:to-slate-600 rounded-full" />
            {/* Glow effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-teal-400 via-teal-600 to-slate-400 dark:to-slate-600 rounded-full blur-sm opacity-30" />
          </div>

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const isSameCompanyAsPrev =
              index > 0 && experiences[index - 1].company === exp.company;

            const cardVariant = isDesktop
              ? isEven
                ? slideInRight
                : slideInLeft
              : fadeInUp;

            return (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                variants={cardVariant}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Company logo circle on timeline */}
                <motion.div
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-6 z-10"
                >
                  {isSameCompanyAsPrev ? (
                    /* Smaller continuation dot */
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-[3px] border-[var(--background)] shadow-lg shadow-teal-500/30" />
                  ) : (
                    /* Company initial circle */
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-[3px] border-[var(--background)] shadow-lg shadow-teal-500/40 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {exp.companyInitial}
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="relative bg-[var(--card)] rounded-2xl border shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-7 group overflow-hidden">
                    {/* Gradient left border accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 rounded-l-2xl" />

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

                    {/* Company name */}
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">
                      {exp.company}
                    </h3>

                    {/* Role title */}
                    <p className="text-base font-semibold text-teal-600 dark:text-teal-400 mb-2">
                      {exp.role}
                    </p>

                    {/* Context */}
                    <p className="text-xs text-[var(--muted-foreground)] mb-5 italic">
                      {exp.context}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-3 mb-5">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-2.5 text-sm text-[var(--foreground)]"
                        >
                          <CheckCircle2
                            size={16}
                            className="flex-shrink-0 mt-0.5 text-teal-500"
                          />
                          <span>{highlightMetrics(achievement)}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Impact */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-teal-500/10 to-teal-500/5 dark:from-teal-500/15 dark:to-teal-500/5 border border-teal-500/20 rounded-xl p-4 mb-5"
                    >
                      <div className="flex items-start gap-2">
                        <Zap
                          size={14}
                          className="flex-shrink-0 mt-0.5 text-teal-500"
                        />
                        <p className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                          {exp.impact}
                        </p>
                      </div>
                    </motion.div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
