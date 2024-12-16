import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import SupportSection from "@/components/SupportSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Impact />
      <Programs />
      <SupportSection />
    </main>
  );
};

export default Index;