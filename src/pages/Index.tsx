import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import EnrollNow from "@/components/EnrollNow";
import BecomeMentor from "@/components/BecomeMentor";
import SupportSection from "@/components/SupportSection";
import TeamSection from "@/components/TeamSection";
import StartChapter from "@/components/StartChapter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Impact />
      <TeamSection />
      <EnrollNow />
      <BecomeMentor />
      <StartChapter />
      <SupportSection />
    </main>
  );
};

export default Index;