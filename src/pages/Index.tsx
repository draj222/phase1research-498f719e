import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import EnrollNow from "@/components/EnrollNow";
import BecomeMentor from "@/components/BecomeMentor";
import TeamSection from "@/components/TeamSection";
import StartChapter from "@/components/StartChapter";
import Partners from "@/components/Partners";
import PastEvents from "@/components/PastEvents";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Impact />
      <TeamSection />
      <Partners />
      <PastEvents />
      <EnrollNow />
      <BecomeMentor />
      <StartChapter />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Index;