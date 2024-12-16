import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import EnrollNow from "@/components/EnrollNow";
import BecomeMentor from "@/components/BecomeMentor";
import SupportSection from "@/components/SupportSection";
import TeamSection from "@/components/TeamSection";
import StartChapter from "@/components/StartChapter";
import Partners from "@/components/Partners";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Impact />
      <TeamSection />
      <Partners />
      <EnrollNow />
      <BecomeMentor />
      <StartChapter />
      <SupportSection />
    </main>
  );
};

export default Index;