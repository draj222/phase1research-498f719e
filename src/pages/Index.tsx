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
      <div className="h-px bg-white/25 w-full" />
      <Impact />
      <div className="h-px bg-white/25 w-full" />
      <TeamSection />
      <div className="h-px bg-white/25 w-full" />
      <Partners />
      <div className="h-px bg-white/25 w-full" />
      <Featured />
      <div className="h-px bg-white/25 w-full" />
      <PastEvents />
      <div className="h-px bg-white/25 w-full" />
      <EnrollNow />
      <div className="h-px bg-white/25 w-full" />
      <BecomeMentor />
      <div className="h-px bg-white/25 w-full" />
      <StartChapter />
      <div className="h-px bg-white/25 w-full" />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Index;