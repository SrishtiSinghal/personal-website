import Skills from "@/components/Skills";

export default function SkillsPage() {
  return (
    <div className="pt-16 relative min-h-screen">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.jpeg')" }}
        />
        <div className="absolute inset-0 bg-warm-50/50 dark:bg-warm-900/60" />
      </div>
      <Skills />
    </div>
  );
}
