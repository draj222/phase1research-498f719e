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
      <div id="impact">
        <Impact />
      </div>
      <div className="h-px bg-white/25 w-full" />
      <div id="team">
        <TeamSection />
      </div>
      <div className="h-px bg-white/25 w-full" />
      <div id="partners">
        <Partners />
      </div>
      <div className="h-px bg-white/25 w-full" />
      <div id="events">
        <Featured />
        <div className="h-px bg-white/25 w-full" />
        <PastEvents />
      </div>
      <div className="h-px bg-white/25 w-full" />
      <div id="enroll">
        <EnrollNow />
      </div>
      <div className="h-px bg-white/25 w-full" />
      <div id="become-mentor">
        <BecomeMentor />
      </div>
      <div className="h-px bg-white/25 w-full" />
      <div id="start-chapter">
        <StartChapter />
      </div>
      <div className="h-px bg-white/25 w-full" />
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </main>
  );
};

export default Index;