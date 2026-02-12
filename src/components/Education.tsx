"use client";

import {
  AnimatedSection,
  staggerContainer,
  fadeInUp,
  motion,
} from "@/lib/motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    school: "Rotman School of Management",
    university: "University of Toronto",
    degree: "MBA Candidate",
    year: "2024 - 2026",
    logo: "R",
    activities: [
      "Director of Alumni & Outreach, Business Technology Association",
    ],
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    school: "University of Victoria",
    university: "",
    degree: "BSc Computer Science",
    year: "2016 - 2020",
    logo: "UV",
    activities: ["Orientation Leader"],
    gradient: "from-teal-500 to-emerald-600",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.school}
              variants={fadeInUp}
              className="bg-[var(--card)] rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Gradient header */}
              <div
                className={`bg-gradient-to-r ${edu.gradient} p-6 text-white`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl font-bold">
                    {edu.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{edu.school}</h3>
                    {edu.university && (
                      <p className="text-sm text-white/80">{edu.university}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap
                    size={16}
                    className="text-teal-500"
                  />
                  <span className="font-semibold">{edu.degree}</span>
                </div>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                  {edu.year}
                </p>

                {edu.activities.length > 0 && (
                  <div className="space-y-2">
                    {edu.activities.map((activity) => (
                      <div
                        key={activity}
                        className="flex items-start gap-2"
                      >
                        <Award
                          size={14}
                          className="flex-shrink-0 mt-0.5 text-teal-500"
                        />
                        <span className="text-sm text-[var(--muted-foreground)]">
                          {activity}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
