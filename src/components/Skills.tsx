"use client";

import {
  AnimatedSection,
  staggerContainer,
  fadeInUp,
  motion,
} from "@/lib/motion";
import { Target, Cpu, Users, Wrench } from "lucide-react";

interface SkillCategory {
  icon: typeof Cpu;
  title: string;
  skills: string[];
  color: string;
  tools?: boolean;
}

const skillCategories: SkillCategory[] = [
  {
    icon: Target,
    title: "Product & Strategy",
    skills: [
      "0\u21921 Product Development & Roadmapping",
      "Go-to-Market Strategy & Product-Market Fit",
      "Customer Discovery & Market Sizing",
      "Prioritization Frameworks (RICE, ICE)",
    ],
    color: "teal",
  },
  {
    icon: Cpu,
    title: "Technical & Data",
    skills: [
      "SQL & Python for Product Analytics",
      "GenAI & LLM Product Strategy",
      "API Integrations & Platform Architecture",
      "A/B Testing & KPI Tracking",
    ],
    color: "purple",
  },
  {
    icon: Users,
    title: "Leadership & Process",
    skills: [
      "Cross-functional team leadership (C-suite to engineering)",
      "Agile, Scrum, SAFe, PI Planning",
      "Stakeholder management & partnership negotiations",
    ],
    color: "amber",
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      "Figma",
      "Jira",
      "Miro",
      "Confluence",
      "Google Analytics",
      "Databricks",
      "Notion",
      "Claude Code",
      "Lovable",
    ],
    color: "slate",
    tools: true,
  },
];

const colorMap: Record<
  string,
  { bg: string; text: string; border: string; iconBg: string }
> = {
  teal: {
    bg: "bg-teal-500/10",
    text: "text-teal-700 dark:text-teal-300",
    border: "border-teal-500/20",
    iconBg: "bg-teal-500/15",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-500/20",
    iconBg: "bg-purple-500/15",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-500/20",
    iconBg: "bg-amber-500/15",
  },
  slate: {
    bg: "bg-slate-500/10",
    text: "text-slate-700 dark:text-slate-300",
    border: "border-slate-500/20",
    iconBg: "bg-slate-500/15",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-[var(--muted)]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className="bg-[var(--card)] rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 p-6"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-4`}
                >
                  <category.icon size={24} className={colors.text} />
                </div>
                <h3 className="text-lg font-bold mb-4">{category.title}</h3>
                {category.tools ? (
                  <p className={`text-sm font-medium ${colors.text}`}>
                    {category.skills.join(", ")}
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-medium px-2.5 py-1.5 rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
