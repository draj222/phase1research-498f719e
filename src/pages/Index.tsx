import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import EnrollNow from "@/components/EnrollNow";
import BecomeMentor from "@/components/BecomeMentor";
import TeamSection from "@/components/TeamSection";
import StartChapter from "@/components/StartChapter";
import Partners from "@/components/Partners";
import Featured from "@/components/Featured";
import PastEvents from "@/components/PastEvents";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      <Hero />
      <Impact />
      <TeamSection />
      <Partners />
      <Featured />
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