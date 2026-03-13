import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="relative">
      {/* Full-page background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/about-bg.jpg"
          alt=""
          fill
          className="object-cover scale-125"
          unoptimized
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-warm-50/50 dark:bg-warm-900/60" />
        {/* Bottom fade to background color */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </div>

      <Hero />
      <About />
    </div>
  );
}
