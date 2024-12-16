import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Programs />
      <Impact />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105">
              Apply as a Student
            </button>
            <button className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary-light/10 transition-all duration-300">
              Join as a Mentor
            </button>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Index;