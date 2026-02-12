"use client";

import { AnimatedSection } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto space-y-8">
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
    </section>
  );
}
