import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import SupportSection from "@/components/SupportSection";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Impact />
      <TeamSection />
      <Programs />
      <SupportSection />
    </main>
  );
};

export default Index;