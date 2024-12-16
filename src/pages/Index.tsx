import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import EnrollNow from "@/components/EnrollNow";
import SupportSection from "@/components/SupportSection";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Impact />
      <TeamSection />
      <EnrollNow />
      <SupportSection />
    </main>
  );
};

export default Index;